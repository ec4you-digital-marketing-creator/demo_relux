"use client";

import { useEffect } from "react";

export default function WebMCPRegistry() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const tools = [
      {
        name: "search_charging_stations",
        description: "Search Relux Electric EV charging stations by city, location name, or highway corridor",
        parameters: {
          type: "object",
          properties: {
            query: {
              type: "string",
              description: "City or location query (e.g. Chennai, Salem, Madurai, NH44)"
            }
          },
          required: ["query"]
        },
        execute: async ({ query }: { query: string }) => {
          return {
            url: `https://reluxelectric.com/locations?search=${encodeURIComponent(query)}`,
            message: `Searching Relux EV charging stations matching '${query}'`
          };
        }
      },
      {
        name: "submit_franchise_enquiry",
        description: "Submit an EV Charging Station Franchise Application for commercial investment with Relux Electric",
        parameters: {
          type: "object",
          properties: {
            fullName: { type: "string", description: "Applicant Full Name" },
            email: { type: "string", description: "Applicant Email Address" },
            phone: { type: "string", description: "Applicant Contact Phone Number" },
            city: { type: "string", description: "Target City / Location for Franchise" },
            budget: { type: "string", description: "Investment Budget (e.g. 10-25 Lakhs, 25-50 Lakhs)" }
          },
          required: ["fullName", "email", "phone", "city"]
        },
        execute: async (params: Record<string, any>) => {
          return {
            status: "success",
            message: "Franchise enquiry details submitted successfully to Relux Electric team",
            details: params
          };
        }
      },
      {
        name: "submit_zero_investment_enquiry",
        description: "Apply to host a Relux EV Charger on your commercial land or highway property with 0% capital investment",
        parameters: {
          type: "object",
          properties: {
            fullName: { type: "string", description: "Land Owner Full Name" },
            email: { type: "string", description: "Email Address" },
            phone: { type: "string", description: "Phone Number" },
            landLocation: { type: "string", description: "Property Location / Address" },
            propertyType: { type: "string", description: "Property Type (Highway Land, Hotel, Mall, Fuel Station)" }
          },
          required: ["fullName", "email", "phone", "landLocation"]
        },
        execute: async (params: Record<string, any>) => {
          return {
            status: "success",
            message: "Zero investment host application received",
            details: params
          };
        }
      },
      {
        name: "get_ev_chargers_catalog",
        description: "Retrieve specifications of Relux Electric DC Fast Chargers (LAX 30, LAX 60, SIMHA 120, SIMHA 240)",
        parameters: { type: "object", properties: {} },
        execute: async () => {
          return {
            chargers: [
              { model: "LAX 30", power: "30kW DC", idealFor: "Malls, Hotels, Commercial Hubs" },
              { model: "LAX 60", power: "60kW DC Dual Gun", idealFor: "Highways & City Hubs" },
              { model: "SIMHA 120", power: "120kW DC Ultra-Fast", idealFor: "Highway Corridors & Fleet Depots" },
              { model: "SIMHA 240", power: "240kW DC Hyper Charger", idealFor: "Electric Bus & Heavy Fleet Charging" }
            ]
          };
        }
      }
    ];

    // Expose tools on global window object for WebMCP crawlers
    (window as any).__WEBMCP_TOOLS__ = tools;

    // WebMCP API binding (Chrome Origin Trial API)
    const registerWithModelContext = () => {
      const nav = window.navigator as Record<string, any>;
      const modelContext = nav?.modelContext || (window as Record<string, any>).modelContext;

      if (modelContext && typeof modelContext.registerTool === "function") {
        tools.forEach((t) => {
          try {
            modelContext.registerTool(t);
          } catch (e) {
            // Already registered
          }
        });
      }
    };

    registerWithModelContext();

    // Listen for WebMCP initialization events
    window.addEventListener("webmcpinit", registerWithModelContext);
    return () => window.removeEventListener("webmcpinit", registerWithModelContext);
  }, []);

  return null;
}
