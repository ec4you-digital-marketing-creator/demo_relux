export interface StateTariff {
  id: string;
  name: string;
  tariff: number; // in ₹ per unit (commercial EV tariff)
}

export const TARIFFS: StateTariff[] = [
  { id: "tn", name: "Tamil Nadu", tariff: 8.5 },
  { id: "ka", name: "Karnataka", tariff: 8.2 },
  { id: "kl", name: "Kerala", tariff: 7.8 },
  { id: "ap", name: "Andhra Pradesh", tariff: 8.0 },
  { id: "tg", name: "Telangana", tariff: 8.3 },
  { id: "mh", name: "Maharashtra", tariff: 9.0 },
];
