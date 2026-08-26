"use client";

import React, { useState, useEffect } from "react";
import { 
  Building2, 
  MapPin, 
  Mail, 
  Phone, 
  Search, 
  User, 
  CheckCircle2, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  Loader2, 
  LogOut, 
  RefreshCw,
  MessageSquare,
  Zap,
  CheckCircle,
  FileText,
  AlertCircle,
  ShieldCheck,
  Sparkles,
  Lock
} from "lucide-react";
import { BASE_URL } from "@/app/ui/baceurl";

interface Toast {
  id: string;
  message: string;
  type: "success" | "error" | "info";
}

export default function AgentPanel() {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [agentName, setAgentName] = useState("");
  const [agentToken, setAgentToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authError, setAuthError] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  
  // Dashboard states
  const [activeTab, setActiveTab] = useState<"franchise" | "zero_investment" | "contact">("franchise");
  const [statusFilter, setStatusFilter] = useState("all");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  // Data list
  const [assignedEnquiries, setAssignedEnquiries] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdating, setIsUpdating] = useState<number | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Response inputs
  const [statusInput, setStatusInput] = useState("in_progress");
  const [responseNoteInput, setResponseNoteInput] = useState("");

  const showToast = (message: string, type: "success" | "error" | "info" = "success") => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  useEffect(() => {
    const savedAgentName = localStorage.getItem("relux_agent_username");
    const savedToken = localStorage.getItem("relux_agent_token");
    if (savedAgentName && savedToken) {
      setAgentName(savedAgentName);
      setAgentToken(savedToken);
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn && agentName) {
      fetchAssignedEnquiries();
    }
  }, [isLoggedIn, agentName, activeTab, statusFilter]);

  const fetchAssignedEnquiries = async () => {
    setIsLoading(true);
    try {
      let endpointType = "franchise";
      if (activeTab === "zero_investment") endpointType = "zero-investment";
      if (activeTab === "contact") endpointType = "contact";

      let url = `${BASE_URL}/api/agent/${endpointType}/`;
      if (statusFilter !== "all") {
        url += `?status=${statusFilter}`;
      }

      const response = await fetch(url, {
        headers: {
          "X-Agent-Name": agentName,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setAssignedEnquiries(Array.isArray(data) ? data : []);
      } else {
        let errText = `Server status ${response.status}`;
        try {
          const errJson = await response.json();
          errText = errJson.error || errText;
        } catch {}
        showToast(`Failed to fetch assigned enquiries: ${errText}`, "error");
      }
    } catch (err: any) {
      console.error("Error fetching agent data:", err);
      showToast(`Cannot reach backend server. Please verify Django backend is running at ${BASE_URL}`, "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAgentLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    
    const u = usernameInput.trim();
    const p = passwordInput.trim();

    if (!u || !p) {
      setAuthError("Both Username and Password are required.");
      return;
    }

    setIsAuthenticating(true);
    try {
      const res = await fetch(`${BASE_URL}/api/agent/login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: u, password: p }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        localStorage.setItem("relux_agent_username", data.agent.username);
        localStorage.setItem("relux_agent_token", data.token);
        setAgentName(data.agent.username);
        setAgentToken(data.token);
        setIsLoggedIn(true);
        showToast(`Authentication Success. Welcome, ${data.agent.full_name || data.agent.username}!`, "success");
      } else {
        setAuthError(data.error || "Invalid Username or Password. Access Denied.");
        showToast("Agent Login Failed.", "error");
      }
    } catch (err) {
      console.error("Error logging in agent:", err);
      setAuthError("Server connection error during authentication.");
    } finally {
      setIsAuthenticating(false);
    }
  };

  const handleAgentLogout = () => {
    localStorage.removeItem("relux_agent_username");
    localStorage.removeItem("relux_agent_token");
    setIsLoggedIn(false);
    setUsernameInput("");
    setPasswordInput("");
    setAssignedEnquiries([]);
    showToast("Logged out from Agent Panel.", "info");
  };

  const handleUpdateStatus = async (id: number) => {
    setIsUpdating(id);
    try {
      let endpointType = "franchise";
      if (activeTab === "zero_investment") endpointType = "zero-investment";
      if (activeTab === "contact") endpointType = "contact";

      const payload: any = {
        status: statusInput,
        response_note: responseNoteInput.trim(),
        agent_name: agentName,
      };

      const response = await fetch(`${BASE_URL}/api/agent/${endpointType}/${id}/`, {
        method: "PATCH",
        headers: {
          "X-Agent-Name": agentName,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const updatedObj = await response.json();
        setAssignedEnquiries((prev) =>
          prev.map((item) => (item.id === id ? { ...item, ...updatedObj } : item))
        );
        showToast("Lead status & notes updated successfully.", "success");
      } else {
        showToast("Failed to update lead status.", "error");
      }
    } catch (err) {
      console.error("Error updating lead:", err);
      showToast("Network error updating lead.", "error");
    } finally {
      setIsUpdating(null);
    }
  };

  const handleToggleExpand = (item: any) => {
    if (expandedId === item.id) {
      setExpandedId(null);
    } else {
      setExpandedId(item.id);
      setStatusInput(item.status || "in_progress");
      setResponseNoteInput(item.response_note || "");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="-mt-24 min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden text-slate-100">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl shadow-2xl relative z-10">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-400">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white">Agent Workstation</h1>
            <p className="text-xs text-slate-400 mt-1">Database Authenticated Agent Lead Operations</p>
          </div>

          <form onSubmit={handleAgentLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Agent Username *</label>
              <input
                id="agent-username-login"
                type="text"
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
                placeholder="Enter Username"
                className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 text-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Agent Password *</label>
              <input
                id="agent-password-login"
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter Password"
                className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 text-white transition-colors"
              />
            </div>

            {authError && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 text-xs flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Only Agent Accounts created by Manager can access this workspace.</span>
            </div>

            <button
              id="agent-login-btn"
              type="submit"
              disabled={isAuthenticating}
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
            >
              {isAuthenticating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Lock className="w-4 h-4" />}
              <span>Authenticate & Enter Workspace</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="-mt-24 min-h-screen bg-slate-950 text-slate-100 font-sans pb-16">
      {/* Toast Notification Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`px-4 py-3 rounded-xl shadow-xl border backdrop-blur-md flex items-center gap-3 text-sm animate-in fade-in slide-in-from-bottom-2 ${
              toast.type === "success"
                ? "bg-emerald-950/90 border-emerald-500/40 text-emerald-200"
                : toast.type === "error"
                ? "bg-rose-950/90 border-rose-500/40 text-rose-200"
                : "bg-slate-900/90 border-slate-700 text-slate-200"
            }`}
          >
            {toast.type === "success" && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
            {toast.type === "error" && <AlertCircle className="w-4 h-4 text-rose-400" />}
            {toast.type === "info" && <Sparkles className="w-4 h-4 text-blue-400" />}
            <span>{toast.message}</span>
          </div>
        ))}
      </div>

      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-400">
              <User className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-white tracking-tight">Agent Workstation</h1>
                <span className="px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full">
                  Agent: {agentName}
                </span>
              </div>
              <p className="text-xs text-slate-400">Database Authenticated Assigned Leads</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              id="refresh-agent-btn"
              onClick={fetchAssignedEnquiries}
              className="p-2.5 bg-slate-800/80 hover:bg-slate-800 text-slate-300 rounded-xl border border-slate-700 transition-colors"
              title="Refresh Assigned Data"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
            </button>

            <button
              id="agent-logout-btn"
              onClick={handleAgentLogout}
              className="p-2.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-xl border border-rose-500/20 transition-colors"
              title="Logout Agent"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        
        {/* Banner Notice */}
        <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <p className="text-xs text-slate-300">
              Authenticated workspace for <strong className="text-white">{agentName}</strong>. All updates report directly to Manager & Founder dashboards.
            </p>
          </div>
          <span className="text-[11px] font-mono text-slate-500 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
            Export Option Disabled
          </span>
        </div>

        {/* Category Tabs */}
        <div className="flex border-b border-slate-800 gap-8 text-sm font-semibold">
          <button
            id="tab-agent-franchise"
            onClick={() => setActiveTab("franchise")}
            className={`pb-4 border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === "franchise"
                ? "border-blue-500 text-blue-400"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Assigned Franchise Pipeline</span>
          </button>

          <button
            id="tab-agent-zero"
            onClick={() => setActiveTab("zero_investment")}
            className={`pb-4 border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === "zero_investment"
                ? "border-blue-500 text-blue-400"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>Assigned Zero Investment</span>
          </button>

          <button
            id="tab-agent-contact"
            onClick={() => setActiveTab("contact")}
            className={`pb-4 border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === "contact"
                ? "border-blue-500 text-blue-400"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Assigned Contact Inquiries</span>
          </button>
        </div>

        {/* Status Filter */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Filter Status:</span>
            <select
              id="agent-status-filter"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-blue-500"
            >
              <option value="all">All Assigned Enquiries</option>
              <option value="new">Unattended (New)</option>
              <option value="in_progress">In Progress</option>
              <option value="responded">Responded</option>
              <option value="called_closed">Called & Closed</option>
            </select>
          </div>

          <span className="text-xs text-slate-400 font-semibold">
            Total Assigned Items: {assignedEnquiries.length}
          </span>
        </div>

        {/* Assigned Items List */}
        <div className="space-y-4">
          {isLoading ? (
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-12 text-center text-slate-400">
              <Loader2 className="w-8 h-8 text-blue-400 animate-spin mx-auto mb-3" />
              <p className="text-sm">Fetching your assigned leads...</p>
            </div>
          ) : assignedEnquiries.length === 0 ? (
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-12 text-center text-slate-400">
              <FileText className="w-10 h-10 text-slate-600 mx-auto mb-3" />
              <p className="text-sm font-semibold text-slate-300">No leads assigned to you under this category.</p>
            </div>
          ) : (
            assignedEnquiries.map((item) => {
              const isExpanded = expandedId === item.id;
              const name = item.full_name || item.name || "N/A";

              return (
                <div
                  key={item.id}
                  className="bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden transition-all hover:border-slate-700"
                >
                  <div className="p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-white text-base">{name}</span>
                        <span className={`px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider rounded-full border ${
                          item.status === "new"
                            ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
                            : item.status === "in_progress"
                            ? "bg-blue-500/10 text-blue-400 border-blue-500/30"
                            : item.status === "responded"
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                            : "bg-purple-500/10 text-purple-400 border-purple-500/30"
                        }`}>
                          {item.status === "new" ? "Unattended" : item.status.replace("_", " ")}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-400">
                        <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-blue-400" />{item.phone}</span>
                        <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-blue-400" />{item.email}</span>
                        <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-blue-400" />{item.city}{item.state ? `, ${item.state}` : ""}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleToggleExpand(item)}
                      className="px-4 py-2 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors border border-blue-500/30"
                    >
                      <span>{isExpanded ? "Hide Details" : "Update Status & Note"}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Expanded Agent Action Box */}
                  {isExpanded && (
                    <div className="border-t border-slate-800 bg-slate-950/80 p-5 space-y-4 animate-in fade-in">
                      <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1.5">
                        <p className="font-semibold text-slate-400">Enquiry Info:</p>
                        {activeTab === "franchise" && <p><span className="text-slate-500">Franchise Model:</span> {item.franchise_model || "N/A"} | <span className="text-slate-500">Investment:</span> {item.investment_capacity || "N/A"}</p>}
                        {activeTab === "zero_investment" && <p><span className="text-slate-500">Land Size:</span> {item.land_size} {item.land_unit} | <span className="text-slate-500">Electricity:</span> {item.electricity_connection}</p>}
                        {activeTab === "contact" && <p><span className="text-slate-500">Subject:</span> {item.subject || "N/A"}</p>}
                        <p className="text-slate-400 pt-1">{item.message}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-bold text-slate-400 mb-1 uppercase tracking-wider">Set New Status</label>
                          <select
                            value={statusInput}
                            onChange={(e) => setStatusInput(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                          >
                            <option value="in_progress">In Progress (Calling Client)</option>
                            <option value="responded">Responded (Sent Details)</option>
                            <option value="called_closed">Called & Closed (Deal Finalized)</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-slate-400 mb-1 uppercase tracking-wider">Agent Response Remarks</label>
                          <textarea
                            rows={2}
                            value={responseNoteInput}
                            onChange={(e) => setResponseNoteInput(e.target.value)}
                            placeholder="Enter notes on your interaction with the client..."
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <button
                          onClick={() => handleUpdateStatus(item.id)}
                          disabled={isUpdating === item.id}
                          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl flex items-center gap-2 shadow-lg shadow-blue-600/20 transition-all"
                        >
                          {isUpdating === item.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
                          <span>Submit Status Update</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </main>
    </div>
  );
}
