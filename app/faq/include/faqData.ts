export interface FaqItem {
  id: string;
  category:
    | "find_station"
    | "process_tariff"
    | "app_account"
    | "rfid_autocharge"
    | "payments_refunds"
    | "franchise_zero"
    | "vehicle_compatibility"
    | "host_station";
  question: string;
  answer: string;
}

export const ALL_FAQS: FaqItem[] = [
  // 1. Find a Charging Station
  {
    id: "fs1",
    category: "find_station",
    question: "How can I find nearby Relux charging stations?",
    answer: "Open the Relux app or website and use the map view. It shows real-time station availability, distance, and pricing based on your current location.",
  },
  {
    id: "fs2",
    category: "find_station",
    question: "Can I check charger availability before I travel?",
    answer: "Yes. Each station's status (Available, In Use, or Offline) updates in real time on the app, so you can plan your trip before arriving.",
  },
  {
    id: "fs3",
    category: "find_station",
    question: "Does Relux support both AC and DC charging?",
    answer: "Relux stations offer both AC (normal) and DC (fast) chargers depending on location. Charger type is listed on each station's detail page in the app.",
  },
  {
    id: "fs4",
    category: "find_station",
    question: "Can I search for charging stations along a highway route?",
    answer: "Yes. Enter your starting point and destination in the app's Route Search, and it will display all Relux stations along that route.",
  },
  {
    id: "fs5",
    category: "find_station",
    question: "How do I get directions to a charging station?",
    answer: "Select a station on the map and tap 'Get Directions.' This opens turn-by-turn navigation in your default maps app.",
  },
  {
    id: "fs6",
    category: "find_station",
    question: "What should I do if a station's location is incorrect on the app?",
    answer: "Use the 'Report an Issue' option on the station's detail page. Our team verifies and updates the location.",
  },
  {
    id: "fs7",
    category: "find_station",
    question: "Can I search for stations by city, area, or pincode?",
    answer: "Yes. The app's search bar accepts city names, localities, or pincodes and returns all stations in that area.",
  },
  {
    id: "fs8",
    category: "find_station",
    question: "How do I know if a new Relux station is opening near me?",
    answer: "Check the 'Coming Soon' section in the app for upcoming stations and their expected launch dates.",
  },
  {
    id: "fs9",
    category: "find_station",
    question: "What should I do if a listed station isn't working or is unreachable?",
    answer: "Report it via 'Report an Issue' on the station page, or contact Relux support directly for immediate assistance.",
  },
  {
    id: "fs10",
    category: "find_station",
    question: "Are Relux charging stations available for 2-wheelers?",
    answer: "No, Relux charging stations currently support 4-wheelers only. AC charging uses Type 2 connectors, and DC fast charging uses CCS2 connectors.",
  },

  // 2. Charging Process & Tariff
  {
    id: "pt1",
    category: "process_tariff",
    question: "How do I start a charging session?",
    answer: "Scan the QR code, select the charger from the app, tap RFID, or use AutoCharge.",
  },
  {
    id: "pt2",
    category: "process_tariff",
    question: "What is the tariff for charging?",
    answer: "Charged per unit (kWh), shown in the app before you start.",
  },
  {
    id: "pt3",
    category: "process_tariff",
    question: "How long does it take to fully charge my EV?",
    answer: "AC charging: 3–20 hours. DC fast charging: 80% in 20–60 minutes.",
  },
  {
    id: "pt4",
    category: "process_tariff",
    question: "What's the difference between AC and DC charging?",
    answer: "AC is slower, good for daily use. DC is fast, best for highway trips.",
  },
  {
    id: "pt5",
    category: "process_tariff",
    question: "Can I stop a session before it's complete?",
    answer: "Yes, stop anytime from the app. Billed only for units used.",
  },
  {
    id: "pt6",
    category: "process_tariff",
    question: "Where can I see how much I was charged?",
    answer: "Session summary in the app shows units, duration, and total amount.",
  },
  {
    id: "pt7",
    category: "process_tariff",
    question: "Does frequent fast charging harm my battery?",
    answer: "Occasional use is safe. Avoid charging to 100% often for best battery health.",
  },
  {
    id: "pt8",
    category: "process_tariff",
    question: "Can I monitor charging progress remotely?",
    answer: "Yes, the app shows live status and notifies you when done.",
  },

  // 3. Relux App & Account
  {
    id: "aa1",
    category: "app_account",
    question: "Where can I download the Relux Electric app?",
    answer: "Available on the App Store and Google Play Store.",
  },
  {
    id: "aa2",
    category: "app_account",
    question: "How do I sign up?",
    answer: "1. Enter your mobile number and email address.\n2. Complete OTP verification.\n3. Add your vehicle details to your profile.",
  },
  {
    id: "aa3",
    category: "app_account",
    question: "How do I top up my Relux wallet?",
    answer: "1. Navigate to the Wallet option.\n2. Enter the top-up amount.\n3. Pay via UPI, Credit/Debit Cards, Net Banking, or external wallets.",
  },
  {
    id: "aa4",
    category: "app_account",
    question: "What payment options are available?",
    answer: "1. UPI\n2. Credit/Debit Cards\n3. Net Banking\n4. In-App Wallet Credits",
  },
  {
    id: "aa5",
    category: "app_account",
    question: "Can multiple users log in to the same account?",
    answer: "Yes, multiple users can log in and start sessions simultaneously. The primary user can log out all devices via OTP authorization.",
  },
  {
    id: "aa6",
    category: "app_account",
    question: "How do I update my vehicle or profile details?",
    answer: "Go to your Profile section in the app and edit your vehicle or personal details anytime.",
  },
  {
    id: "aa7",
    category: "app_account",
    question: "How do I view my past charging session history?",
    answer: "Go to History in the app to see all past sessions with units consumed, duration, and amount billed.",
  },
  {
    id: "aa8",
    category: "app_account",
    question: "How do I log out from all devices?",
    answer: "Go to Profile settings and select 'Log out of all devices' verified via OTP.",
  },

  // 4. RFID Card & Autocharge
  {
    id: "ra1",
    category: "rfid_autocharge",
    question: "What is RFID, and how do I get one?",
    answer: "Order RFID through the app.",
  },
  {
    id: "ra2",
    category: "rfid_autocharge",
    question: "How do I activate the RFID?",
    answer: "Once you receive the RFID, go to the RFID section in the app and assign it by scanning the QR code.",
  },
  {
    id: "ra3",
    category: "rfid_autocharge",
    question: "How can I deactivate a lost or broken RFID?",
    answer: "Deactivate lost RFIDs from your app profile using OTP authorization. You can order a replacement via the app.",
  },
  {
    id: "ra4",
    category: "rfid_autocharge",
    question: "What is AutoCharge?",
    answer: "AutoCharge allows you to start charging sessions automatically when you plug in, without needing to open the app or scan a QR code.",
  },
  {
    id: "ra5",
    category: "rfid_autocharge",
    question: "How do I set up AutoCharge?",
    answer: "1. Go to the AutoCharge section in the app.\n2. Register your vehicle's charging port.\n3. Enable AutoCharge for automatic session initiation.",
  },
  {
    id: "ra6",
    category: "rfid_autocharge",
    question: "Can I use RFID and AutoCharge on the same vehicle?",
    answer: "Yes, both can be set up together. Use whichever is more convenient at the time of charging.",
  },
  {
    id: "ra7",
    category: "rfid_autocharge",
    question: "How long does it take for a new RFID to get delivered?",
    answer: "Delivery typically takes a few business days after ordering through the app. Exact timelines are shown at checkout.",
  },
  {
    id: "ra8",
    category: "rfid_autocharge",
    question: "Is there a charge for ordering or replacing an RFID card?",
    answer: "A nominal fee may apply for ordering or replacing an RFID card. The exact amount is shown in the app before you confirm the order.",
  },

  // 5. Wallet, Payments & Refunds
  {
    id: "pr1",
    category: "payments_refunds",
    question: "How do I request a wallet balance refund?",
    answer: "Contact our support team with your registered mobile number and reason for refund. Our team will verify and process it.",
  },
  {
    id: "pr2",
    category: "payments_refunds",
    question: "How long does a wallet refund take?",
    answer: "Wallet refunds are typically processed within 3–4 business days after verification.",
  },
  {
    id: "pr3",
    category: "payments_refunds",
    question: "Can I transfer my wallet balance to another user?",
    answer: "No, wallet balances are non-transferable between accounts.",
  },
  {
    id: "pr4",
    category: "payments_refunds",
    question: "What happens if my payment fails during wallet top-up?",
    answer: "If the amount is deducted but not credited to your wallet, it will be auto-reversed to your bank account, or refunded after verification by support.",
  },
  {
    id: "pr5",
    category: "payments_refunds",
    question: "Is there a minimum or maximum wallet recharge amount?",
    answer: "Yes, minimum and maximum recharge limits apply and are shown on the top-up screen in the app.",
  },
  {
    id: "pr6",
    category: "payments_refunds",
    question: "Will my wallet balance expire?",
    answer: "No, your wallet balance remains valid as long as your account is active.",
  },
  {
    id: "pr7",
    category: "payments_refunds",
    question: "How do I get an invoice for my wallet recharge?",
    answer: "Go to 'Transaction History' in the app and download the invoice for any recharge.",
  },
  {
    id: "pr8",
    category: "payments_refunds",
    question: "What should I do if my wallet balance isn't updated after payment?",
    answer: "Wait a few minutes and refresh the app. If the balance still doesn't reflect, contact support with your payment reference number.",
  },

  // 6. Franchise & Zero Investment
  {
    id: "fz1",
    category: "franchise_zero",
    question: "What franchise models and ROI are available?",
    answer: "30 kW to 360 kW options, ₹5L to ₹2Cr investment. ROI in 3 to 5 years.",
  },
  {
    id: "fz2",
    category: "franchise_zero",
    question: "What are the Franchise payment terms?",
    answer: "100% advance via RTGS/bank transfer. Chargers sourced only through Relux, 2 year warranty included.",
  },
  {
    id: "fz3",
    category: "franchise_zero",
    question: "How much space do I need for a Franchise station?",
    answer: "200 sq. ft for 30 kW, up to 5,000 to 100,000 sq. ft for a Mega Hub.",
  },
  {
    id: "fz4",
    category: "franchise_zero",
    question: "Who owns the station under Zero Investment?",
    answer: "Relux owns 100% asset ownership. You provide the space only.",
  },
  {
    id: "fz5",
    category: "franchise_zero",
    question: "How do I earn under Zero Investment?",
    answer: "Revenue sharing from every charging session, zero maintenance cost to you.",
  },
  {
    id: "fz6",
    category: "franchise_zero",
    question: "What support does Relux give Zero Investment partners?",
    answer: "Full technical support and 24/7 monitoring — Relux handles it all.",
  },
  {
    id: "fz7",
    category: "franchise_zero",
    question: "Franchise vs Zero Investment — what's the difference?",
    answer: "Franchise: you invest and own the station. Zero Investment: Relux owns and funds it, you just provide land.",
  },
  {
    id: "fz8",
    category: "franchise_zero",
    question: "What locations work best for either model?",
    answer: "Highway frontage, hotel parking, malls — high footfall, high visibility spots.",
  },

  // 7. Vehicle Compatibility
  {
    id: "vc1",
    category: "vehicle_compatibility",
    question: "Can I charge my car, bus, or truck at Relux stations?",
    answer: "Yes, Relux supports cars, buses, trucks, and mini trucks — depending on the station's charging capacity.",
  },
  {
    id: "vc2",
    category: "vehicle_compatibility",
    question: "Why does my bus or truck take longer to charge than a car?",
    answer: "Bigger vehicles have bigger batteries, so they generally take longer to charge than cars, even at the same charger.",
  },
  {
    id: "vc3",
    category: "vehicle_compatibility",
    question: "Which station capacity should I choose for a bus or truck?",
    answer: "Higher-capacity stations like Super Hub (240 kW) or Mega Hub (360 kW) charge buses and trucks much faster than smaller stations.",
  },
  {
    id: "vc4",
    category: "vehicle_compatibility",
    question: "Is a 360 kW station really that much faster than a 60 kW one?",
    answer: "Yes. A car that takes about 1.5 hours at 60 kW can charge in 10–20 minutes at 360 kW. Buses, trucks, and mini trucks see similar improvements.",
  },
  {
    id: "vc5",
    category: "vehicle_compatibility",
    question: "Why is my vehicle taking so long to charge even at a fast station?",
    answer: "Charging time also depends on your vehicle's battery size — larger batteries take longer no matter how powerful the station is.",
  },
  {
    id: "vc6",
    category: "vehicle_compatibility",
    question: "How do I pick the right station for my vehicle before I go?",
    answer: "Check the station's charging capacity (kW) in the app first, since that determines how fast your vehicle will charge.",
  },
  {
    id: "vc7",
    category: "vehicle_compatibility",
    question: "My mini truck needs quick charging — which capacity should I go for?",
    answer: "120 kW and above works well — charging time drops from about 45 minutes to under 30 minutes as capacity increases.",
  },
  {
    id: "vc8",
    category: "vehicle_compatibility",
    question: "Do buses and trucks need a different type of station?",
    answer: "No, they charge at the same stations as other vehicles — but higher capacity ones (240 kW+) bring charging time down to under an hour, compared to several hours at lower capacity.",
  },

  // 8. Host a Charging Station
  {
    id: "hs1",
    category: "host_station",
    question: "How can I host an EV charging station on my land?",
    answer: "Apply through the Relux website or contact the business team. Relux assesses your site's feasibility and handles the full installation.",
  },
  {
    id: "hs2",
    category: "host_station",
    question: "Is there any cost to host a charging station at my location?",
    answer: "No, under the Zero Investment model, Relux funds and installs the entire station — 0% investment cost to you.",
  },
  {
    id: "hs3",
    category: "host_station",
    question: "How do I earn money by hosting a charging station?",
    answer: "Through a revenue-sharing model — you earn a share of the income generated from every charging session at your location.",
  },
  {
    id: "hs4",
    category: "host_station",
    question: "Who maintains the station after installation — me or Relux?",
    answer: "Relux handles all maintenance and technical support, so there's zero maintenance cost or effort on your part.",
  },
  {
    id: "hs5",
    category: "host_station",
    question: "What documents do I need to host a station?",
    answer: "Valid ownership or lease documents are required for site verification before onboarding.",
  },
  {
    id: "hs6",
    category: "host_station",
    question: "Will Relux monitor the station, or do I need to manage it myself?",
    answer: "Relux provides 24/7 monitoring and full technical support — you don't need to manage day-to-day operations.",
  },
  {
    id: "hs7",
    category: "host_station",
    question: "Does my location need to meet any specific conditions to qualify?",
    answer: "Yes — accessible, high visibility spots with good vehicle footfall (like highway frontage, hotels, malls) with 24×7 access and power feasibility are ideal.",
  },
  {
    id: "hs8",
    category: "host_station",
    question: "Can I put my own branding on the station once it's hosted?",
    answer: "No, only approved Relux branding is allowed to maintain consistency across the network.",
  },
];
