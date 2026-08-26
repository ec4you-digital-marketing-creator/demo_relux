"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Zap,
  ArrowRight,
  Shield,
  Wifi,
  Thermometer,
  Check,
  Phone,
  Mail,
  Award,
  ChevronRight,
  BatteryCharging,
  Download,
  Star,
  Maximize2,
  Video,
  RotateCw,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  FileText,
  Layers,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

/* ─────────────────────────────────────────
   PRODUCT DETAIL DATA ENGINE
───────────────────────────────────────── */
export interface ProductDetail {
  id: string;
  name: string;
  power: string;
  subtitle: string;
  isBestSeller?: boolean;
  rating: number;
  reviewsCount: number;
  description: string;
  priceText: string;
  stockStatus: string;
  images: string[];
  specsHighlightsBar: { label: string; sub: string }[];
  electricalSpecs: { label: string; value: string }[];
  inputSpecs: { label: string; value: string }[];
  outputSpecs: { label: string; value: string }[];
  connectivitySpecs: { label: string; value: string }[];
  uiSpecs: { label: string; value: string }[];
  mechanicalSpecs: { label: string; value: string }[];
  safetySpecs: { label: string; value: string }[];
}

const detailedProducts: Record<string, ProductDetail> = {
  lax30: {
    id: "lax30",
    name: "LAX 30",
    power: "30kW",
    subtitle: "30kW Single/Dual Gun DC Fast Charger",
    isBestSeller: false,
    rating: 4.6,
    reviewsCount: 18,
    description:
      "Ideal entry-level DC fast charger for parking lots, residential complexes, and small fleet depots. Built for reliability, safety, and smart connectivity.",
    priceText: "Contact for Price",
    stockStatus: "In Stock",
    images: [],
    specsHighlightsBar: [
      { label: "30 kW", sub: "Fast Charging" },
      { label: "Dual Gun", sub: "CCS2 Output" },
      { label: "200V – 750V", sub: "DC Output" },
      { label: "LAN + 4G", sub: "Connectivity" },
      { label: "Mobile App", sub: "Authentication" },
      { label: "IP54", sub: "Protection" },
      { label: "Make in India", sub: "Made in India" },
      { label: "OCPP 1.6", sub: "CMS Ready" },
    ],
    electricalSpecs: [
      { label: "Nominal Power", value: "30 kW" },
      { label: "Output Voltage", value: "200 – 750 V DC" },
      { label: "Current Rating", value: "50 A" },
      { label: "Output Current Range", value: "5A – 60A" },
      { label: "Nominal Voltage", value: "415V ± 10%" },
      { label: "Frequency", value: "50 Hz" },
      { label: "Efficiency", value: "> 95%" },
      { label: "Power Factor", value: "≥ 0.99" },
    ],
    inputSpecs: [
      { label: "Input Cable", value: "3.5 C, 35 Sqmm AI XLPE" },
      { label: "Earth Cable", value: "1 C, 16 Sqmm" },
      { label: "Incomer Protection", value: "3 P, 100A, MCCB" },
    ],
    outputSpecs: [
      { label: "Voltage Window", value: "200 – 750 V DC" },
      { label: "Connector Type", value: "CCS2 / Dual Gun" },
      { label: "Cable Length", value: "5 Meters Standard" },
    ],
    connectivitySpecs: [
      { label: "LAN", value: "Supported" },
      { label: "4G", value: "Supported" },
      { label: "OCPP 1.6", value: "Full CMS Integration" },
    ],
    uiSpecs: [
      { label: "Display Options", value: "7-inch Touch Screen" },
      { label: "Authentication", value: "Mobile App / RFID" },
    ],
    mechanicalSpecs: [
      { label: "Cooling", value: "Active Fan Cooled" },
      { label: "IP Rating", value: "IP54 Certified" },
      { label: "Operating Temp", value: "-10°C to +50°C" },
    ],
    safetySpecs: [
      { label: "Over Voltage Protection", value: "Included" },
      { label: "Under Voltage Protection", value: "Included" },
      { label: "Short Circuit Protection", value: "Included" },
    ],
  },
  lax60: {
    id: "lax60",
    name: "LAX 60",
    power: "60kW",
    subtitle: "60kW Dual Gun DC Fast Charger",
    isBestSeller: false,
    rating: 4.7,
    reviewsCount: 24,
    description:
      "Engineered for reliable commercial fleet and public high-speed charging infrastructure. Built for reliability, safety, and smart connectivity.",
    priceText: "Contact for Price",
    stockStatus: "In Stock",
    images: [],
    specsHighlightsBar: [
      { label: "60 kW", sub: "Fast Charging" },
      { label: "Dual Gun", sub: "CCS2 Output" },
      { label: "200V – 1000V", sub: "DC Output" },
      { label: "LAN + 4G", sub: "Connectivity" },
      { label: "Mobile App", sub: "Authentication" },
      { label: "IP54", sub: "Protection" },
      { label: "Make in India", sub: "Made in India" },
      { label: "OCPP 1.6", sub: "CMS Ready" },
    ],
    electricalSpecs: [
      { label: "Nominal Power", value: "60 kW" },
      { label: "Output Voltage", value: "200 – 1000 V DC" },
      { label: "Current Rating", value: "90 A" },
      { label: "Output Current Range", value: "5A – 120A" },
      { label: "Max Power (Dual Gun)", value: "60 A" },
      { label: "Max Power (Single Gun)", value: "120 A" },
      { label: "Nominal Voltage", value: "415V ± 10%" },
      { label: "Frequency", value: "50 Hz" },
      { label: "Efficiency", value: "> 95%" },
      { label: "Power Factor", value: "≥ 0.99" },
      { label: "THD", value: "≤ 5%" },
    ],
    inputSpecs: [
      { label: "Input Cable", value: "3.5 C, 70 Sqmm AI XLPE" },
      { label: "Earth Cable", value: "1 C, 16 Sqmm" },
      { label: "Incomer Protection", value: "3 P, 160A, MCCB" },
      { label: "Current Rating", value: "90 A" },
      { label: "Nominal Voltage", value: "415V ± 10%" },
      { label: "Frequency", value: "50 Hz" },
    ],
    outputSpecs: [
      { label: "Voltage Window", value: "200 – 1000 V DC" },
      { label: "Max Power (Dual Mode)", value: "60 A" },
      { label: "Max Power (Single Mode)", value: "120 A" },
      { label: "Protocol Compliance", value: "ISO 15118, DIN 70121" },
      { label: "Standard Compliance", value: "IEC 61851-1/23/24" },
      { label: "Connector Type", value: "CCS2 / Dual Gun" },
      { label: "Cable Length", value: "5 Meters Standard" },
    ],
    connectivitySpecs: [
      { label: "LAN", value: "Supported" },
      { label: "4G", value: "Supported" },
      { label: "5G", value: "Optional Upgrade" },
      { label: "OCPP 1.6", value: "Full CMS Integration" },
      { label: "RFID", value: "Supported" },
      { label: "Mobile App", value: "Supported" },
    ],
    uiSpecs: [
      { label: "Display Options", value: "7-inch Touch Screen" },
      { label: "Authentication", value: "Mobile App / RFID / Manual" },
      { label: "User Interface", value: "Multi-language Support" },
      { label: "External Connections", value: "LAN, 4G" },
    ],
    mechanicalSpecs: [
      { label: "Cooling", value: "Active Fan Cooled" },
      { label: "IP Rating", value: "IP54 Certified" },
      { label: "Operating Temperature", value: "-10°C to +50°C" },
      { label: "Humidity", value: "Up to 95% RH (Non-condensing)" },
      { label: "Mount Type", value: "Floor Mounted" },
      { label: "Dimensions (WxHxD)", value: "830 x 1850 x 400 mm" },
      { label: "Weight", value: "~180 kg" },
      { label: "Material", value: "CRCA Sheet Metal" },
    ],
    safetySpecs: [
      { label: "Over Voltage Protection", value: "Included" },
      { label: "Under Voltage Protection", value: "Included" },
      { label: "Short Circuit Protection", value: "Included" },
      { label: "Over Current Protection", value: "Included" },
      { label: "Leakage Current Protection", value: "Included" },
      { label: "Over Temperature Protection", value: "Included" },
      { label: "Emergency Stop Button", value: "Dedicated Physical Switch" },
    ],
  },
  simha120: {
    id: "simha120",
    name: "SIMHA 120",
    power: "120kW",
    subtitle: "120kW Dual Gun DC Fast Charger",
    isBestSeller: false,
    rating: 4.8,
    reviewsCount: 29,
    description:
      "High-capacity fast-charging solution optimized for highway rest stops and high-turnover urban hubs. Built for reliability, safety and smart connectivity.",
    priceText: "Contact for Price",
    stockStatus: "In Stock",
    images: [],
    specsHighlightsBar: [
      { label: "120 kW", sub: "High Capacity" },
      { label: "Dual Gun", sub: "CCS2 Output" },
      { label: "200V – 1000V", sub: "DC Output" },
      { label: "LAN+4G+5G", sub: "Connectivity" },
      { label: "Mobile+RFID", sub: "Authentication" },
      { label: "IP54", sub: "Protection" },
      { label: "Make in India", sub: "Made in India" },
      { label: "OCPP 1.6", sub: "CMS Ready" },
    ],
    electricalSpecs: [
      { label: "Nominal Power", value: "120 kW" },
      { label: "Output Voltage", value: "200 – 1000 V DC" },
      { label: "Current Rating", value: "185 A" },
      { label: "Output Current Range", value: "5A – 240A (@ 500V)" },
      { label: "Max Power (Dual Gun)", value: "120 A @ 500 V" },
      { label: "Max Power (Single Gun)", value: "240 A @ 500 V" },
      { label: "Nominal Voltage", value: "415V ± 10%" },
      { label: "Frequency", value: "50 Hz" },
      { label: "Efficiency", value: "> 95%" },
      { label: "Power Factor", value: "≥ 0.99" },
      { label: "THD", value: "≤ 5%" },
    ],
    inputSpecs: [
      { label: "Input Cable", value: "3.5 C, 95 Sqmm AI XLPE" },
      { label: "Earth Cable", value: "1 C, 50 Sqmm" },
      { label: "Incomer Protection", value: "3 P, 250 A, MCCB" },
      { label: "Current Rating", value: "185 A" },
      { label: "Nominal Voltage", value: "415V ± 10%" },
      { label: "Frequency", value: "50 Hz" },
    ],
    outputSpecs: [
      { label: "Voltage Window", value: "200 – 1000 V DC" },
      { label: "Max Power (Dual Mode)", value: "120 A @ 500 V" },
      { label: "Max Power (Single Mode)", value: "240 A @ 500 V" },
      { label: "Protocol Compliance", value: "ISO 15118, DIN 70121" },
      { label: "Standard Compliance", value: "IEC 61851-1/23/24" },
      { label: "Connector Type", value: "CCS2 / Dual Gun" },
      { label: "Cable Length", value: "5 Meters Standard" },
    ],
    connectivitySpecs: [
      { label: "LAN", value: "Supported" },
      { label: "4G", value: "Supported" },
      { label: "5G", value: "Supported" },
      { label: "OCPP 1.6", value: "Full CMS Integration" },
      { label: "RFID", value: "Supported" },
      { label: "Mobile App", value: "Supported" },
    ],
    uiSpecs: [
      { label: "Display Options", value: "7-inch Touch Screen" },
      { label: "Authentication", value: "Manual, RFID Card or Mobile App" },
      { label: "User Interface", value: "Multi-language Support" },
      { label: "External Connections", value: "LAN, 4G, 5G" },
    ],
    mechanicalSpecs: [
      { label: "Cooling", value: "Active Fan Cooled" },
      { label: "IP Rating", value: "IP54 Certified" },
      { label: "Operating Temperature", value: "-10°C to +50°C" },
      { label: "Humidity", value: "Up to 95% RH (Non-condensing)" },
      { label: "Mount Type", value: "Floor Mounted" },
      { label: "Dimensions (WxHxD)", value: "1100 x 1850 x 700 mm" },
      { label: "Weight", value: "~210 kg" },
      { label: "Material", value: "CRCA Sheet Metal" },
    ],
    safetySpecs: [
      { label: "Over Voltage Protection", value: "Included" },
      { label: "Under Voltage Protection", value: "Included" },
      { label: "Short Circuit Protection", value: "Included" },
      { label: "Over Current Protection", value: "Included" },
      { label: "Leakage Current Protection", value: "Included" },
      { label: "Over Temperature Protection", value: "Included" },
      { label: "Emergency Stop Button", value: "Dedicated Physical Switch" },
    ],
  },
  simha180: {
    id: "simha180",
    name: "SIMHA 180",
    power: "180kW",
    subtitle: "180kW Dual Gun DC Fast Charger",
    isBestSeller: false,
    rating: 4.8,
    reviewsCount: 20,
    description:
      "Mid-range high-performance charger designed for expressway charging hubs and large fleet depots.",
    priceText: "Contact for Price",
    stockStatus: "In Stock",
    images: [],
    specsHighlightsBar: [
      { label: "180 kW", sub: "Ultra Fast" },
      { label: "Dual Gun", sub: "CCS2 Output" },
      { label: "200V – 1000V", sub: "DC Output" },
      { label: "LAN + 4G + 5G", sub: "Connectivity" },
      { label: "IP54", sub: "Protection" },
      { label: "OCPP 1.6", sub: "CMS Ready" },
    ],
    electricalSpecs: [
      { label: "Nominal Power", value: "180 kW" },
      { label: "Output Voltage", value: "200 – 1000 V DC" },
    ],
    inputSpecs: [{ label: "Input Cable", value: "3.5 C, 240 Sqmm AI XLPE" }],
    outputSpecs: [{ label: "Voltage Window", value: "200 – 1000 V DC" }],
    connectivitySpecs: [{ label: "LAN / 4G / 5G", value: "Supported" }],
    uiSpecs: [{ label: "Display", value: "7-inch / 11-inch Touch Screen" }],
    mechanicalSpecs: [{ label: "Cooling", value: "Forced Fan Cooled" }],
    safetySpecs: [{ label: "Over Voltage", value: "Included" }],
  },
  simha240: {
    id: "simha240",
    name: "SIMHA 240",
    power: "240kW",
    subtitle: "240kW Dual Gun DC Fast Charger",
    isBestSeller: true,
    rating: 4.9,
    reviewsCount: 32,
    description:
      "Ultra fast, intelligent and reliable charging solution designed for heavy-duty EVs, commercial applications, and next-generation passenger vehicles. Built for reliability, safety and smart connectivity.",
    priceText: "Contact for Price",
    stockStatus: "In Stock",
    images: [],
    specsHighlightsBar: [
      { label: "240 kW", sub: "Ultra Fast Charging" },
      { label: "Dual Gun", sub: "CCS2 Output" },
      { label: "200V – 1000V", sub: "DC Output" },
      { label: "LAN + 4G + 5G", sub: "Connectivity" },
      { label: "Mobile App + RFID", sub: "Authentication" },
      { label: "IP54", sub: "Protection" },
      { label: "Make in India", sub: "Made in India" },
      { label: "OCPP 1.6", sub: "CMS Ready" },
    ],
    electricalSpecs: [
      { label: "Nominal Power", value: "240 kW" },
      { label: "Output Voltage", value: "200 – 1000 V DC" },
      { label: "Current Rating", value: "365 A" },
      { label: "Output Current Range", value: "5A – 250A (@ 480V)" },
      { label: "Max Power (Dual Gun)", value: "160 A @ 750 V" },
      { label: "Max Power (Single Gun)", value: "240 A @ 750 V" },
      { label: "Nominal Voltage", value: "415V ± 10%" },
      { label: "Frequency", value: "50 Hz" },
      { label: "Efficiency", value: "> 95%" },
      { label: "Power Factor", value: "≥ 0.99" },
      { label: "THD", value: "≤ 5%" },
    ],
    inputSpecs: [
      { label: "Input Cable", value: "3.5 C, 400 Sqmm AI XLPE" },
      { label: "Earth Cable", value: "1 C, 120 Sqmm Copper (Flexible)" },
      { label: "Incomer Protection", value: "3 P+N+E, 500/630 A, MCCB" },
      { label: "Current Rating", value: "365 A" },
      { label: "Nominal Voltage", value: "415V ± 10%" },
      { label: "Frequency", value: "50 Hz" },
    ],
    outputSpecs: [
      { label: "Voltage Window", value: "200 – 1000 V DC (Software Limitable)" },
      { label: "Max Power (Dual Mode)", value: "160 A @ 750 V" },
      { label: "Max Power (Single Mode)", value: "240 A @ 750 V" },
      { label: "Protocol Compliance", value: "GB/T 27390 2015" },
      { label: "Standard Compliance", value: "As per IEC Regulations" },
      { label: "Connector Type", value: "CCS2 / Dual Gun" },
      { label: "Cable Length", value: "5-Meter (Standard); Up to 7 Meter (Customizable)" },
    ],
    connectivitySpecs: [
      { label: "LAN", value: "Supported" },
      { label: "4G", value: "Supported" },
      { label: "5G", value: "Supported" },
      { label: "OCPP 1.6", value: "Full CMS Integration" },
      { label: "RFID", value: "Supported" },
      { label: "Mobile App", value: "Supported" },
    ],
    uiSpecs: [
      { label: "Display Options", value: "7\" / 11\" Touch Screen Options" },
      { label: "Authentication", value: "Manual, RFID Card or Mobile App" },
      { label: "User Interface", value: "Multi-language Support" },
      { label: "External Connections", value: "LAN, 4G, 5G" },
    ],
    mechanicalSpecs: [
      { label: "Cooling", value: "Forced Fan Cooled" },
      { label: "IP Rating", value: "IP54 (ARAI Certified)" },
      { label: "Operating Temperature", value: "-10°C to +50°C" },
      { label: "Humidity", value: "Up to 95% RH (Non-condensing)" },
      { label: "Mount Type", value: "Floor Mounted" },
      { label: "Dimensions (WxHxD)", value: "1100 x 1850 x 700 mm" },
      { label: "Weight", value: "~225 kg" },
      { label: "Material", value: "CRCA Sheet Metal" },
    ],
    safetySpecs: [
      { label: "Over Voltage Protection", value: "Included" },
      { label: "Under Voltage Protection", value: "Included" },
      { label: "Short Circuit Protection", value: "Included" },
      { label: "Over Current Protection", value: "Included" },
      { label: "Leakage Current Protection", value: "Included" },
      { label: "Over Temperature Protection", value: "Included" },
      { label: "Emergency Stop Button", value: "Dedicated Physical Switch" },
    ],
  },
  "relux-ac-3": {
    id: "relux-ac-3",
    name: "RELUX AC 3.3",
    power: "3.3kW",
    subtitle: "3.3kW Single Phase Home AC Charger",
    isBestSeller: false,
    rating: 4.5,
    reviewsCount: 12,
    description: "Compact and affordable home EV charger designed for overnight charging.",
    priceText: "Contact for Price",
    stockStatus: "In Stock",
    images: [],
    specsHighlightsBar: [
      { label: "3.3 kW", sub: "AC Charger" },
      { label: "Single Phase", sub: "230V AC" },
      { label: "IP65", sub: "Outdoor Safe" },
    ],
    electricalSpecs: [{ label: "Nominal Power", value: "3.3 kW" }],
    inputSpecs: [{ label: "Input Voltage", value: "230V AC" }],
    outputSpecs: [{ label: "Current", value: "16A" }],
    connectivitySpecs: [{ label: "Wi-Fi", value: "Supported" }],
    uiSpecs: [{ label: "Indicator", value: "LED Status" }],
    mechanicalSpecs: [{ label: "IP Rating", value: "IP65" }],
    safetySpecs: [{ label: "Protection", value: "Over/Under Voltage" }],
  },
  "relux-ac-7": {
    id: "relux-ac-7",
    name: "RELUX AC 7.4",
    power: "7.4kW",
    subtitle: "7.4kW Single Phase Smart AC Charger",
    isBestSeller: false,
    rating: 4.7,
    reviewsCount: 15,
    description: "Smart AC wall-box charger ideal for homes, apartments, and offices.",
    priceText: "Contact for Price",
    stockStatus: "In Stock",
    images: [],
    specsHighlightsBar: [
      { label: "7.4 kW", sub: "Smart AC" },
      { label: "Single Phase", sub: "230V AC" },
      { label: "IP65", sub: "Outdoor Safe" },
    ],
    electricalSpecs: [{ label: "Nominal Power", value: "7.4 kW" }],
    inputSpecs: [{ label: "Input Voltage", value: "230V AC" }],
    outputSpecs: [{ label: "Current", value: "32A" }],
    connectivitySpecs: [{ label: "Wi-Fi / 4G", value: "Supported" }],
    uiSpecs: [{ label: "Display", value: "4.3 inch LCD" }],
    mechanicalSpecs: [{ label: "IP Rating", value: "IP65" }],
    safetySpecs: [{ label: "Protection", value: "Complete Protection Array" }],
  },
  "relux-ac-22": {
    id: "relux-ac-22",
    name: "RELUX AC 22",
    power: "22kW",
    subtitle: "22kW Three Phase Commercial AC Charger",
    isBestSeller: true,
    rating: 4.8,
    reviewsCount: 22,
    description: "High-speed AC charger for commercial parking, hotels, and corporate campuses.",
    priceText: "Contact for Price",
    stockStatus: "In Stock",
    images: [],
    specsHighlightsBar: [
      { label: "22 kW", sub: "Three Phase" },
      { label: "415V AC", sub: "Commercial" },
      { label: "IP54", sub: "Grade" },
    ],
    electricalSpecs: [{ label: "Nominal Power", value: "22 kW" }],
    inputSpecs: [{ label: "Input Voltage", value: "415V AC" }],
    outputSpecs: [{ label: "Current", value: "32A x 3 Phase" }],
    connectivitySpecs: [{ label: "LAN / Wi-Fi / 4G", value: "Supported" }],
    uiSpecs: [{ label: "Display", value: "7 inch Touch Screen" }],
    mechanicalSpecs: [{ label: "IP Rating", value: "IP54" }],
    safetySpecs: [{ label: "Protection", value: "Commercial Grade Protections" }],
  },
};

import ProductInquiryModal from "@/components/ProductInquiryModal";
import { BASE_URL } from "@/app/ui/baceurl";

const getFullImageUrl = (path: string) => {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const finalPath = cleanPath.startsWith("/media/") ? cleanPath : `/media${cleanPath}`;
  return `${BASE_URL}${finalPath}`;
};

export default function ProductDetailClient() {
  const params = useParams();
  const rawId = (params?.id as string) || "simha240";
  const idKey = detailedProducts[rawId.toLowerCase()] ? rawId.toLowerCase() : "simha240";

  // Start with local static data as the default/fallback
  const [product, setProduct] = useState<ProductDetail>(detailedProducts[idKey]);

  useEffect(() => {
    async function fetchFromBackend() {
      try {
        const res = await fetch(`${BASE_URL}/api/products/${rawId.toLowerCase()}/`);
        if (!res.ok) return;
        const d = await res.json();

        // Build the images array: primary image first, then gallery images
        const primaryImg: string = d.image_url || d.image || "";
        const galleryImgs: string[] = (d.gallery_images || []).map((g: any) => g.image_url || g.image || "");
        const allImages: string[] = [
          ...(primaryImg ? [getFullImageUrl(primaryImg)] : []),
          ...galleryImgs.map((g) => getFullImageUrl(g)).filter(Boolean),
        ];

        setProduct((prev) => ({
          ...prev,
          id: d.product_id || prev.id,
          name: d.model || prev.name,
          power: d.power || prev.power,
          subtitle: d.subtitle || prev.subtitle,
          isBestSeller: d.is_bestseller ?? prev.isBestSeller,
          rating: parseFloat(d.rating) || prev.rating,
          reviewsCount: d.reviews_count ?? prev.reviewsCount,
          description: d.description || prev.description,
          priceText: d.price_text || prev.priceText,
          stockStatus: d.stock_status || prev.stockStatus,
          images: allImages.length > 0 ? allImages : prev.images,
          specsHighlightsBar: d.specs_highlights_bar?.length ? d.specs_highlights_bar : prev.specsHighlightsBar,
          electricalSpecs: d.electrical_specs?.length ? d.electrical_specs : prev.electricalSpecs,
          inputSpecs: d.input_specs?.length ? d.input_specs : prev.inputSpecs,
          outputSpecs: d.output_specs?.length ? d.output_specs : prev.outputSpecs,
          connectivitySpecs: d.connectivity_specs?.length ? d.connectivity_specs : prev.connectivitySpecs,
          uiSpecs: d.ui_specs?.length ? d.ui_specs : prev.uiSpecs,
          mechanicalSpecs: d.mechanical_specs?.length ? d.mechanical_specs : prev.mechanicalSpecs,
          safetySpecs: d.safety_specs?.length ? d.safety_specs : prev.safetySpecs,
        }));
      } catch (err) {
        console.warn("Product detail: using local fallback", err);
      }
    }
    fetchFromBackend();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rawId]);

  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"description" | "specifications" | "downloads" | "faq">("description");
  const [qty, setQty] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const faqs = [
    {
      q: `What vehicles are compatible with ${product.name}?`,
      a: `${product.name} features dual CCS2 connector guns operating from 200V to 1000V DC, making it compatible with all major electric cars, buses, and commercial heavy-duty electric trucks in India (Tata, MG, BYD, Mahindra, Volvo, Eicher, etc.).`,
    },
    {
      q: "Does it support OCPP and remote monitoring?",
      a: "Yes, all Relux Electric DC Fast Chargers natively support OCPP 1.6 J protocol for seamless integration with Central Management Systems (CMS), enabling real-time monitoring, remote diagnostics, and automated payment gateway settlement.",
    },
    {
      q: "What is the warranty period?",
      a: "All Relux Electric commercial chargers come with a 2-Year Standard Manufacturer Warranty, with options to extend up to 5 Years via Annual Maintenance Contracts (AMC).",
    },
    {
      q: "What is the installation requirement?",
      a: "Requires a 3-Phase HT/LT connection with appropriate MCCB incomer protection and dedicated earthing. Our engineering team provides full site survey, electrical layout planning, and installation support.",
    },
    {
      q: "Is RFID authentication available?",
      a: "Yes, user authentication is supported via RFID cards, Mobile App, or manual admin authorization.",
    },
    {
      q: "What is the cable length?",
      a: "Standard length is 5 meters (ARAI approved), customizable up to 7 meters upon request for specific depot requirements.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#4ade80] selection:text-black font-sans">

      {/* ── TOP HERO PRODUCT GRID (Image Gallery + Details + Sticky Quote Card) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* LEFT: Image Gallery (5 Cols) — only rendered when backend provides images */}
          {product.images.length > 0 && (
            <div className="lg:col-span-5 flex flex-col gap-4">
              {/* Main Preview */}
              <div className="relative w-full h-[380px] sm:h-[450px] bg-[#0d0d0d] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-6 group">
                <img
                  src={getFullImageUrl(product.images[selectedImgIndex] || product.images[0])}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 transition-all duration-300 group-hover:scale-105"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                {product.isBestSeller && (
                  <div className="absolute top-4 left-4 z-10 bg-[#4ade80] text-black text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase shadow-lg">
                    BEST SELLER
                  </div>
                )}
              </div>

              {/* Thumbnails Row — only show if more than 1 image */}
              {product.images.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-1">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImgIndex(idx)}
                      className={`relative w-20 h-20 rounded-2xl bg-[#0d0d0d] border transition-all overflow-hidden shrink-0 cursor-pointer ${selectedImgIndex === idx
                        ? "border-[#4ade80] shadow-lg shadow-[#4ade80]/20 scale-95"
                        : "border-white/10 opacity-60 hover:opacity-100 hover:border-white/30"
                        }`}
                    >
                      <img src={getFullImageUrl(img)} alt={`Thumbnail ${idx}`} className="w-full h-full object-contain p-2" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* CENTER: Main Info & Highlights (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-5">
            <div>
              <span className="text-[10px] font-black text-[#4ade80] uppercase tracking-widest bg-[#4ade80]/10 border border-[#4ade80]/30 px-3 py-1 rounded-full inline-block mb-3">
                {product.power} DUAL GUN DC FAST CHARGER
              </span>

              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase leading-none">
                {product.name}
              </h1>
              <p className="text-sm font-bold text-[#4ade80] mt-1">{product.subtitle}</p>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-3 text-xs text-zinc-400">
                <div className="flex items-center text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="ml-1 font-extrabold text-white text-sm">{product.rating}</span>
                </div>
                <span>({product.reviewsCount} Customer Reviews)</span>
              </div>

              {/* Description */}
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mt-4">
                {product.description}
              </p>

              {/* Highlight Badges (4 Grid) */}
              <div className="grid grid-cols-2 gap-2.5 mt-6">
                <div className="bg-[#121212] border border-white/10 rounded-xl p-3 flex items-center gap-2.5">
                  <Zap className="w-4 h-4 text-[#4ade80] shrink-0" />
                  <span className="text-xs font-bold text-white">Ultra Fast Charging</span>
                </div>
                <div className="bg-[#121212] border border-white/10 rounded-xl p-3 flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-[#4ade80] shrink-0" />
                  <span className="text-xs font-bold text-white">Make in India</span>
                </div>
                <div className="bg-[#121212] border border-white/10 rounded-xl p-3 flex items-center gap-2.5">
                  <Shield className="w-4 h-4 text-[#4ade80] shrink-0" />
                  <span className="text-xs font-bold text-white">ARAI Certified</span>
                </div>
                <div className="bg-[#121212] border border-white/10 rounded-xl p-3 flex items-center gap-2.5">
                  <Wifi className="w-4 h-4 text-[#4ade80] shrink-0" />
                  <span className="text-xs font-bold text-white">OCPP 1.6 Ready</span>
                </div>
              </div>
            </div>


          </div>

          {/* RIGHT: Sticky Quote & Order Box (3 Cols - Matching Image 1 Sidebar) */}
          <div className="lg:col-span-3">
            <div className="bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 shadow-2xl space-y-5 sticky top-24">

              {/* Price & Stock */}
              <div>
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">Price</span>
                <div className="text-2xl font-black text-white tracking-tight mt-0.5">{product.priceText}</div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4ade80] animate-pulse" />
                  <span className="text-xs font-bold text-[#4ade80]">{product.stockStatus}</span>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center justify-between border-y border-white/10 py-3">
                <span className="text-xs font-bold text-zinc-400">Quantity</span>
                <div className="flex items-center bg-[#141414] border border-white/10 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="px-3 py-1 text-white hover:bg-zinc-800 text-sm font-bold cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-3 text-xs font-bold text-white">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="px-3 py-1 text-white hover:bg-zinc-800 text-sm font-bold cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => setIsInquiryModalOpen(true)}
                  className="w-full py-3 px-4 rounded-xl bg-[#4ade80] hover:bg-[#22c55e] text-black font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#4ade80]/25 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Get a Quotation</span>
                </button>


              </div>

              {/* Value Addition List */}
              <ul className="space-y-2 text-xs text-zinc-300 border-t border-white/10 pt-4">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#4ade80]" />
                  <span>Free Consultation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#4ade80]" />
                  <span>Installation Support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#4ade80]" />
                  <span>Warranty Included</span>
                </li>
              </ul>



            </div>
          </div>

        </div>
      </section>

      {/* ── 8 SPEC HIGHLIGHTS CHIPS BAR ── */}
      <section className="border-y border-white/10 bg-[#080808] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {product.specsHighlightsBar.map((item, idx) => (
              <div key={idx} className="bg-[#0e0e0e] border border-white/10 rounded-2xl p-3 text-center flex flex-col justify-center">
                <div className="text-sm font-black text-[#4ade80]">{item.label}</div>
                <div className="text-[10px] text-zinc-400 font-semibold">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DETAIL TABS SECTION (Description, Specs, Downloads, FAQ) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tab Headers */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-4 overflow-x-auto custom-scrollbar mb-8">
          <button
            onClick={() => setActiveTab("description")}
            className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${activeTab === "description"
              ? "bg-[#4ade80] text-black shadow-lg shadow-[#4ade80]/25"
              : "bg-[#121212] border border-white/10 text-zinc-300 hover:text-white"
              }`}
          >
            Description
          </button>

          <button
            onClick={() => setActiveTab("specifications")}
            className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${activeTab === "specifications"
              ? "bg-[#4ade80] text-black shadow-lg shadow-[#4ade80]/25"
              : "bg-[#121212] border border-white/10 text-zinc-300 hover:text-white"
              }`}
          >
            Specifications
          </button>



          <button
            onClick={() => setActiveTab("faq")}
            className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${activeTab === "faq"
              ? "bg-[#4ade80] text-black shadow-lg shadow-[#4ade80]/25"
              : "bg-[#121212] border border-white/10 text-zinc-300 hover:text-white"
              }`}
          >
            FAQ
          </button>
        </div>

        {/* TAB 1: DESCRIPTION */}
        {activeTab === "description" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 md:p-8 space-y-4">
              <h2 className="text-xl md:text-2xl font-black text-white tracking-tight">
                Powering the Future with Unmatched Speed &amp; Reliability
              </h2>
              <p className="text-zinc-300 text-xs md:text-sm leading-relaxed">
                The {product.name} is a next-generation {product.power} Dual Gun DC Fast Charger engineered for high-performance charging of commercial EVs, buses, and next-gen passenger vehicles. Built for reliability, safety and smart connectivity.
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm text-zinc-300 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                  <span>200V – 1000V DC wide output range</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                  <span>Intelligent power distribution algorithm</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                  <span>High efficiency &gt; 95% minimizing energy loss</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                  <span>Advanced multi-layer safety protection array</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                  <span>Remote uptime monitoring with OCPP 1.6 protocol</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                  <span>Designed &amp; Manufactured in Chennai, India</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* TAB 2: SPECIFICATIONS GRID */}
        {activeTab === "specifications" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
            {/* Electrical Specs */}
            <div className="bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 space-y-4">
              <h3 className="text-sm font-black text-[#4ade80] uppercase tracking-wider flex items-center gap-2 border-b border-white/10 pb-3">
                <Zap className="w-4 h-4" />
                <span>Electrical Specifications</span>
              </h3>
              <div className="divide-y divide-white/5 text-xs">
                {product.electricalSpecs.map((item, idx) => (
                  <div key={idx} className="py-2 flex items-center justify-between">
                    <span className="text-zinc-400">{item.label}</span>
                    <span className="font-bold text-white text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Input Infrastructure */}
            <div className="bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 space-y-4">
              <h3 className="text-sm font-black text-[#4ade80] uppercase tracking-wider flex items-center gap-2 border-b border-white/10 pb-3">
                <Layers className="w-4 h-4" />
                <span>Input Infrastructure</span>
              </h3>
              <div className="divide-y divide-white/5 text-xs">
                {product.inputSpecs.map((item, idx) => (
                  <div key={idx} className="py-2 flex items-center justify-between">
                    <span className="text-zinc-400">{item.label}</span>
                    <span className="font-bold text-white text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Output & Charging */}
            <div className="bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 space-y-4">
              <h3 className="text-sm font-black text-[#4ade80] uppercase tracking-wider flex items-center gap-2 border-b border-white/10 pb-3">
                <BatteryCharging className="w-4 h-4" />
                <span>Output &amp; Charging</span>
              </h3>
              <div className="divide-y divide-white/5 text-xs">
                {product.outputSpecs.map((item, idx) => (
                  <div key={idx} className="py-2 flex items-center justify-between">
                    <span className="text-zinc-400">{item.label}</span>
                    <span className="font-bold text-white text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}



        {/* TAB 4: FAQ */}
        {activeTab === "faq" && (
          <div className="max-w-4xl mx-auto space-y-4 animate-in fade-in duration-200">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#0c0c0c] border border-white/10 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-extrabold text-sm text-white flex items-center justify-between hover:bg-[#121212] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-[#4ade80]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-zinc-400" />
                  )}
                </button>

                {openFaq === idx && (
                  <div className="p-5 pt-0 text-xs md:text-sm text-zinc-300 leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

      </section>

      {/* ── INSTALLATION PROCESS 6-STEP STEPPER ── */}
      <section className="border-t border-white/10 bg-[#080808] py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#4ade80] text-xs font-black uppercase tracking-[0.3em]">Turnkey Deployment</span>
            <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight uppercase mt-1">
              Installation <span className="text-[#4ade80]">Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { num: "01", title: "Consultation" },
              { num: "02", title: "Site Survey" },
              { num: "03", title: "Electrical Planning" },
              { num: "04", title: "Installation" },
              { num: "05", title: "Testing" },
              { num: "06", title: "Go Live" },
            ].map((step, idx) => (
              <div key={idx} className="bg-[#0c0c0c] border border-white/10 rounded-2xl p-5 text-center space-y-2 hover:border-[#4ade80]/50 transition-all">
                <div className="w-10 h-10 rounded-full bg-[#4ade80]/15 text-[#4ade80] font-black text-xs flex items-center justify-center mx-auto">
                  {step.num}
                </div>
                <h4 className="text-xs font-black text-white uppercase">{step.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT INQUIRY MODAL ── */}
      <ProductInquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        productName={product.name}
        powerTagline={product.subtitle}
        productImage={product.images[0]}
      />

    </main>
  );
}
