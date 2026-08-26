"use client";

import React, { useState, useEffect } from "react";
import { 
  ShieldAlert, 
  Lock, 
  Activity, 
  Users, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Search, 
  RefreshCw, 
  LogOut, 
  BarChart3, 
  Layers, 
  FileText,
  TrendingUp,
  Sparkles,
  MapPin,
  Building2,
  Zap,
  Target,
  Award,
  Globe,
  UserCheck
} from "lucide-react";
import { BASE_URL } from "@/app/ui/baceurl";

interface Toast {
  id: string;
  message: string;
  type: "success" | "error" | "info";
}

export default function FounderPanel() {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [authToken, setAuthToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");
  
  // Dashboard view mode
  const [viewMode, setViewMode] = useState<"overview" | "monitoring" | "agent_stats" | "audit_logs">("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [agentFilter, setAgentFilter] = useState("all");

  // Monitoring data
  const [monitoringData, setMonitoringData] = useState<{
    executive_overview: any;
    top_states: any[];
    top_cities: any[];
    top_models: any[];
    activity_logs: any[];
    leads_monitoring: any[];
    agent_performance: any[];
  }>({
    executive_overview: {},
    top_states: [],
    top_cities: [],
    top_models: [],
    activity_logs: [],
    leads_monitoring: [],
    agent_performance: [],
  });

  const [isLoading, setIsLoading] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type: "success" | "error" | "info" = "success") => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  useEffect(() => {
    const savedToken = localStorage.getItem("relux_founder_token");
    if (savedToken) {
      setAuthToken(savedToken);
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated && authToken) {
      fetchFounderData();
    }
  }, [isAuthenticated, authToken]);

  const handleFounderLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    const p = passwordInput.trim();
    
    if (p === "Relux@founder2025" || p === "FounderToken" || p === "relux@admin2025") {
      localStorage.setItem("relux_founder_token", p || "Relux@founder2025");
      setAuthToken(p || "Relux@founder2025");
      setIsAuthenticated(true);
      showToast("Access Granted. Welcome to Founder Command Center.", "success");
    } else {
      setAuthError("Invalid Founder Security Credentials.");
      showToast("Authentication Failed.", "error");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("relux_founder_token");
    setAuthToken("");
    setIsAuthenticated(false);
    showToast("Logged out of Founder Control Panel.", "info");
  };

  const fetchFounderData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/api/founder/monitoring/`, {
        headers: {
          "X-Admin-Token": authToken,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setMonitoringData(data);
      } else {
        if (response.status === 401) {
          handleLogout();
        } else {
          showToast("Failed to fetch monitoring data.", "error");
        }
      }
    } catch (err) {
      console.error("Error fetching founder data:", err);
      showToast("Network error fetching audit data.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const ov = monitoringData.executive_overview || {};

  // Filter leads based on search query and agent selection
  const filteredLeads = (monitoringData.leads_monitoring || []).filter((lead) => {
    const matchesAgent = agentFilter === "all" || lead.assigned_to === agentFilter;
    const matchesSearch = !searchQuery || 
      lead.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.phone?.includes(searchQuery) ||
      lead.city?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.type?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesAgent && matchesSearch;
  });

  if (!isAuthenticated) {
    return (
      <div className="-mt-24 min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden text-slate-100">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl shadow-2xl relative z-10">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-purple-500/10 border border-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-purple-400">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white">Founder Command Center</h1>
            <p className="text-xs text-slate-400 mt-1">Executive Intelligence & Full Monitoring Dashboard</p>
          </div>

          <form onSubmit={handleFounderLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Founder Security Password</label>
              <input
                id="founder-password"
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 text-white placeholder-slate-500 transition-colors"
              />
            </div>

            {authError && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button
              id="founder-login-btn"
              type="submit"
              className="w-full py-3.5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl shadow-lg shadow-purple-600/20 transition-all flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" />
              <span>Access Founder Dashboard</span>
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
            className={`px-4 py-3 rounded-xl shadow-xl border backdrop-blur-md flex items-center gap-3 text-sm ${
              toast.type === "success"
                ? "bg-purple-950/90 border-purple-500/40 text-purple-200"
                : toast.type === "error"
                ? "bg-rose-950/90 border-rose-500/40 text-rose-200"
                : "bg-slate-900/90 border-slate-700 text-slate-200"
            }`}
          >
            {toast.type === "success" && <CheckCircle2 className="w-4 h-4 text-purple-400" />}
            {toast.type === "error" && <AlertCircle className="w-4 h-4 text-rose-400" />}
            {toast.type === "info" && <Sparkles className="w-4 h-4 text-purple-400" />}
            <span>{toast.message}</span>
          </div>
        ))}
      </div>

      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-purple-500/10 border border-purple-500/30 rounded-xl flex items-center justify-center text-purple-400">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-white tracking-tight">Founder Command Center</h1>
                <span className="px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full">
                  Executive Monitor
                </span>
              </div>
              <p className="text-xs text-slate-400">Total Intelligence: Lead Access, Timestamps, Agent Performance & Audit</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              id="refresh-founder-btn"
              onClick={fetchFounderData}
              className="p-2.5 bg-slate-800/80 hover:bg-slate-800 text-slate-300 rounded-xl border border-slate-700 transition-colors"
              title="Refresh Monitoring Data"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
            </button>

            <button
              id="founder-logout-btn"
              onClick={handleLogout}
              className="p-2.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-xl border border-rose-500/20 transition-colors"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">

        {/* View Mode Navigation Tabs */}
        <div className="flex border-b border-slate-800 gap-6 text-sm font-semibold overflow-x-auto">
          <button
            id="tab-founder-overview"
            onClick={() => setViewMode("overview")}
            className={`pb-4 border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
              viewMode === "overview"
                ? "border-purple-500 text-purple-400"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Executive Overview</span>
          </button>

          <button
            id="tab-founder-monitoring"
            onClick={() => setViewMode("monitoring")}
            className={`pb-4 border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
              viewMode === "monitoring"
                ? "border-purple-500 text-purple-400"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Lead Access & Timestamps ({monitoringData.leads_monitoring?.length || 0})</span>
          </button>

          <button
            id="tab-founder-performance"
            onClick={() => setViewMode("agent_stats")}
            className={`pb-4 border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
              viewMode === "agent_stats"
                ? "border-purple-500 text-purple-400"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Agent Performance Matrix ({monitoringData.agent_performance?.length || 0})</span>
          </button>

          <button
            id="tab-founder-audit"
            onClick={() => setViewMode("audit_logs")}
            className={`pb-4 border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
              viewMode === "audit_logs"
                ? "border-purple-500 text-purple-400"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>Real-time Audit Logs ({monitoringData.activity_logs?.length || 0})</span>
          </button>
        </div>

        {/* ── VIEW 1: Executive Overview KPI Dashboard ── */}
        {viewMode === "overview" && (
          <div className="space-y-8">

            {/* Main KPI Cards Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 col-span-1">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Total Leads</p>
                <p className="text-3xl font-extrabold text-white">{ov.total_leads ?? "—"}</p>
                <p className="text-[11px] text-slate-500 mt-1">All categories combined</p>
              </div>
              <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 col-span-1">
                <p className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1">Unattended</p>
                <p className="text-3xl font-extrabold text-amber-400">{ov.unattended_count ?? "—"}</p>
                <p className="text-[11px] text-slate-500 mt-1">Need immediate action</p>
              </div>
              <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 col-span-1">
                <p className="text-[11px] font-bold uppercase tracking-wider text-blue-400 mb-1">Assigned</p>
                <p className="text-3xl font-extrabold text-blue-400">{ov.assigned_count ?? "—"}</p>
                <p className="text-[11px] text-slate-500 mt-1">{ov.assigned_percentage ?? 0}% lead assignment rate</p>
              </div>
              <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 col-span-1">
                <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-1">Closed</p>
                <p className="text-3xl font-extrabold text-emerald-400">{ov.closed_count ?? "—"}</p>
                <p className="text-[11px] text-slate-500 mt-1">{ov.closure_percentage ?? 0}% closure rate</p>
              </div>
              <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 col-span-1">
                <p className="text-[11px] font-bold uppercase tracking-wider text-purple-400 mb-1">Avg SLA</p>
                <p className="text-3xl font-extrabold text-purple-400">{ov.avg_sla_hours ?? "—"}</p>
                <p className="text-[11px] text-slate-500 mt-1">hrs avg response time</p>
              </div>
              <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 col-span-1">
                <p className="text-[11px] font-bold uppercase tracking-wider text-indigo-400 mb-1">Agents Active</p>
                <p className="text-3xl font-extrabold text-indigo-400">{(monitoringData.agent_performance || []).filter((a: any) => a.agent_name !== "Unassigned").length}</p>
                <p className="text-[11px] text-slate-500 mt-1">Working agent accounts</p>
              </div>
            </div>

            {/* Leaderboards Row: Top States, Top Cities */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* Top States Demand Leaderboard */}
              <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                  <div className="w-8 h-8 bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-center justify-center text-emerald-400">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Top States by Demand</h3>
                    <p className="text-[11px] text-slate-400">Franchise lead concentration</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {(monitoringData.top_states || []).slice(0, 8).map((s: any, i) => (
                    <div key={s.state} className="flex items-center gap-3">
                      <span className={`text-[11px] font-extrabold w-5 text-right ${i === 0 ? "text-amber-400" : i === 1 ? "text-slate-300" : i === 2 ? "text-orange-400" : "text-slate-500"}`}>
                        #{i + 1}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-semibold text-white">{s.state}</span>
                          <span className="text-xs font-bold text-emerald-400">{s.count}</span>
                        </div>
                        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-500/60 rounded-full"
                            style={{ width: `${Math.min(100, (s.count / ((monitoringData.top_states[0]?.count || 1))) * 100)}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  {(monitoringData.top_states || []).length === 0 && (
                    <p className="text-xs text-slate-500 text-center py-4">Loading state demand data...</p>
                  )}
                </div>
              </div>

              {/* Top Cities Demand Leaderboard */}
              <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                  <div className="w-8 h-8 bg-blue-500/10 border border-blue-500/30 rounded-lg flex items-center justify-center text-blue-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Top Cities by Demand</h3>
                    <p className="text-[11px] text-slate-400">Highest enquiry volume cities</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {(monitoringData.top_cities || []).slice(0, 8).map((c: any, i) => (
                    <div key={c.city} className="flex items-center gap-3">
                      <span className={`text-[11px] font-extrabold w-5 text-right ${i === 0 ? "text-amber-400" : i === 1 ? "text-slate-300" : i === 2 ? "text-orange-400" : "text-slate-500"}`}>
                        #{i + 1}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-semibold text-white">{c.city}</span>
                          <span className="text-xs font-bold text-blue-400">{c.count}</span>
                        </div>
                        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-500/60 rounded-full"
                            style={{ width: `${Math.min(100, (c.count / ((monitoringData.top_cities[0]?.count || 1))) * 100)}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  {(monitoringData.top_cities || []).length === 0 && (
                    <p className="text-xs text-slate-500 text-center py-4">Loading city demand data...</p>
                  )}
                </div>
              </div>

              {/* Franchise Model Distribution */}
              <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                  <div className="w-8 h-8 bg-purple-500/10 border border-purple-500/30 rounded-lg flex items-center justify-center text-purple-400">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Franchise Model Demand</h3>
                    <p className="text-[11px] text-slate-400">Enquiries by franchise model type</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {(monitoringData.top_models || []).slice(0, 8).map((m: any, i) => (
                    <div key={m.model} className="flex items-center gap-3">
                      <span className="text-[11px] font-extrabold w-5 text-right text-slate-500">#{i + 1}</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-semibold text-white truncate max-w-[120px]">{m.model || "Not Specified"}</span>
                          <span className="text-xs font-bold text-purple-400">{m.count}</span>
                        </div>
                        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-purple-500/60 rounded-full"
                            style={{ width: `${Math.min(100, (m.count / ((monitoringData.top_models[0]?.count || 1))) * 100)}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  {(monitoringData.top_models || []).length === 0 && (
                    <p className="text-xs text-slate-500 text-center py-4">Loading model demand data...</p>
                  )}
                </div>
              </div>
            </div>

            {/* Recent Audit Activity Quick Feed */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center justify-center text-amber-400">
                    <Activity className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white">Recent System Activity (Last 10)</h3>
                </div>
                <button
                  onClick={() => setViewMode("audit_logs")}
                  className="text-xs text-purple-400 hover:text-purple-300 font-semibold"
                >
                  View All Logs →
                </button>
              </div>
              <div className="space-y-2 font-mono text-xs max-h-64 overflow-y-auto">
                {(monitoringData.activity_logs || []).slice(0, 10).map((log: any) => (
                  <div key={log.id} className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
                    <Activity className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <div className="flex-1 flex items-center justify-between gap-4">
                      <p className="text-white font-sans text-[11px]">
                        <span className="text-purple-300 font-semibold">{log.performed_by}</span>
                        {" → "}
                        <span className="text-amber-400">[{log.enquiry_type?.toUpperCase()} #{log.enquiry_id}]</span>
                        {" "}{log.action?.replace("_", " ")}
                      </p>
                      <span className="text-slate-500 text-[10px] shrink-0">{new Date(log.timestamp).toLocaleString()}</span>
                    </div>
                  </div>
                ))}
                {(monitoringData.activity_logs || []).length === 0 && (
                  <p className="text-xs text-slate-500 text-center py-6">No audit activity yet. Assign & update leads to generate logs.</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ── VIEW 2: Comprehensive Lead Access & Timestamps Monitoring ── */}
        {viewMode === "monitoring" && (
          <div className="space-y-4">
            
            {/* Filter Bar */}
            <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 w-full md:w-auto">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Filter Agent:</span>
                <select
                  id="founder-agent-filter"
                  value={agentFilter}
                  onChange={(e) => setAgentFilter(e.target.value)}
                  className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
                >
                  <option value="all">All Agents & Unassigned</option>
                  {(monitoringData.agent_performance || [])
                    .filter((ag: any) => ag.agent_name !== "Unassigned")
                    .map((ag: any) => (
                      <option key={ag.agent_name} value={ag.agent_name}>{ag.agent_name}</option>
                    ))}
                </select>
              </div>

              <div className="relative w-full md:w-72">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  id="founder-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search name, phone, city, type..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-purple-500"
                />
              </div>

              <span className="text-xs font-bold text-slate-400">{filteredLeads.length} leads shown</span>
            </div>

            {/* Monitoring Table */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-950 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-800">
                    <tr>
                      <th className="p-4">Type / Client</th>
                      <th className="p-4">Assigned Agent</th>
                      <th className="p-4">Created At</th>
                      <th className="p-4">Assigned At</th>
                      <th className="p-4">Responded At</th>
                      <th className="p-4">SLA (hrs)</th>
                      <th className="p-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {isLoading ? (
                      <tr>
                        <td colSpan={7} className="p-8 text-center text-slate-400">
                          <RefreshCw className="w-6 h-6 animate-spin text-purple-400 mx-auto mb-2" />
                          Loading audit monitoring list...
                        </td>
                      </tr>
                    ) : filteredLeads.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="p-8 text-center text-slate-400">
                          No leads matching monitoring filters.
                        </td>
                      </tr>
                    ) : (
                      filteredLeads.map((lead, idx) => (
                        <tr key={`${lead.type}-${lead.id}-${idx}`} className="hover:bg-slate-900/90 transition-colors">
                          <td className="p-4 space-y-0.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 block">{lead.type}</span>
                            <span className="font-bold text-white block">{lead.name}</span>
                            <span className="text-slate-400 text-[11px] block">{lead.phone} • {lead.city}</span>
                          </td>
                          <td className="p-4">
                            <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                              lead.assigned_to === "Unassigned"
                                ? "bg-slate-800 text-slate-400"
                                : "bg-purple-500/10 text-purple-300 border border-purple-500/20"
                            }`}>
                              {lead.assigned_to}
                            </span>
                          </td>
                          <td className="p-4 text-slate-300 text-[11px]">
                            {lead.created_at ? new Date(lead.created_at).toLocaleString() : "N/A"}
                          </td>
                          <td className="p-4 text-slate-300 text-[11px]">
                            {lead.assigned_at ? new Date(lead.assigned_at).toLocaleString() : <span className="text-amber-400 italic">Pending</span>}
                          </td>
                          <td className="p-4 text-slate-300 text-[11px]">
                            {lead.responded_at ? new Date(lead.responded_at).toLocaleString() : <span className="text-slate-500 italic">Open</span>}
                          </td>
                          <td className="p-4">
                            {lead.sla_hours !== null ? (
                              <span className="font-mono font-semibold text-emerald-400">{lead.sla_hours} hrs</span>
                            ) : (
                              <span className="text-slate-500 italic">In Progress</span>
                            )}
                          </td>
                          <td className="p-4">
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase border ${
                              lead.status === "new"
                                ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
                                : lead.status === "in_progress"
                                ? "bg-blue-500/10 text-blue-400 border-blue-500/30"
                                : lead.status === "responded"
                                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                                : "bg-purple-500/10 text-purple-400 border-purple-500/30"
                            }`}>
                              {lead.status === "new" ? "Unattended" : lead.status.replace("_", " ")}
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ── VIEW 3: Agent Performance Matrix ── */}
        {viewMode === "agent_stats" && (
          <div className="space-y-6">
            {/* Summary Banner */}
            <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl flex items-center gap-4">
              <UserCheck className="w-5 h-5 text-purple-400 shrink-0" />
              <p className="text-xs text-slate-300">
                Performance matrix showing all <strong className="text-white">{monitoringData.agent_performance?.length || 0} agents</strong> with lead status breakdown. Unassigned leads tracked separately.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {(monitoringData.agent_performance || []).map((ag: any) => {
                const isUnassigned = ag.agent_name === "Unassigned";
                return (
                  <div key={ag.agent_name} className={`bg-slate-900/70 border rounded-2xl p-6 space-y-4 ${isUnassigned ? "border-amber-500/20" : "border-slate-800"}`}>
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div>
                        <h3 className={`font-bold text-base ${isUnassigned ? "text-amber-400" : "text-white"}`}>{ag.agent_name}</h3>
                        <p className="text-xs text-slate-400">{isUnassigned ? "Leads awaiting assignment" : "Agent Workload Breakdown"}</p>
                      </div>
                      <span className={`text-2xl font-extrabold ${isUnassigned ? "text-amber-400" : "text-purple-400"}`}>{ag.total_assigned}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                        <p className="text-slate-400">Unattended</p>
                        <p className="text-lg font-bold text-amber-400">{ag.new || 0}</p>
                      </div>
                      <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                        <p className="text-slate-400">In Progress</p>
                        <p className="text-lg font-bold text-blue-400">{ag.in_progress || 0}</p>
                      </div>
                      <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                        <p className="text-slate-400">Responded</p>
                        <p className="text-lg font-bold text-emerald-400">{ag.responded || 0}</p>
                      </div>
                      <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                        <p className="text-slate-400">Called & Closed</p>
                        <p className="text-lg font-bold text-purple-400">{ag.called_closed || 0}</p>
                      </div>
                    </div>

                    {!isUnassigned && ag.total_assigned > 0 && (
                      <div className="pt-1">
                        <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                          <span>Closure Rate</span>
                          <span className="text-emerald-400 font-bold">
                            {Math.round(((ag.called_closed || 0) / ag.total_assigned) * 100)}%
                          </span>
                        </div>
                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-500/60 rounded-full"
                            style={{ width: `${Math.round(((ag.called_closed || 0) / ag.total_assigned) * 100)}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {(monitoringData.agent_performance || []).length === 0 && (
                <div className="col-span-3 bg-slate-900/40 border border-slate-800 rounded-2xl p-12 text-center text-slate-400">
                  <Users className="w-10 h-10 text-slate-600 mx-auto mb-3" />
                  <p className="text-sm font-semibold text-slate-300">No agent data yet. Create agents and assign leads to see performance stats.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── VIEW 4: Real-time Audit Activity Logs Stream ── */}
        {viewMode === "audit_logs" && (
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <Activity className="w-4 h-4 text-purple-400" />
              System Audit Log Stream ({monitoringData.activity_logs?.length || 0} events)
            </h3>
            
            <div className="space-y-3 font-mono text-xs max-h-[600px] overflow-y-auto pr-1">
              {(monitoringData.activity_logs || []).map((log: any) => (
                <div key={log.id} className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
                  <Activity className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="font-semibold text-purple-300">{log.performed_by}</span>
                      <span className="text-[10px]">{new Date(log.timestamp).toLocaleString()}</span>
                    </div>
                    <p className="text-white font-sans text-[11px]">
                      <span className="text-amber-400 font-bold">[{log.enquiry_type?.toUpperCase()} #{log.enquiry_id}]</span>{" "}
                      {log.action?.replace("_", " ")} — {log.enquiry_title}
                    </p>
                    {log.details && (
                      <p className="text-slate-400 text-[11px] font-sans">{log.details}</p>
                    )}
                  </div>
                </div>
              ))}

              {(monitoringData.activity_logs || []).length === 0 && (
                <div className="py-12 text-center text-slate-500">
                  <FileText className="w-10 h-10 text-slate-700 mx-auto mb-3" />
                  <p className="text-sm">No audit log entries yet. Actions taken in Manager or Agent panels will appear here in real-time.</p>
                </div>
              )}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
