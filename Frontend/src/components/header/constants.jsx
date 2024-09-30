import {
  Sun,
  Spring,
  Autumn,
  Ice,
  Solo,
  Friends,
  Couple,
  BabyBoyIcon,
} from "../icons";

export const seasons = [
  { name: "Spring", color: "#889D1E", icon: <Spring /> },
  { name: "Summer", color: "#FFAD29", icon: <Sun /> },
  { name: "Autumn", color: "#721931", icon: <Autumn /> },
  { name: "Winter", color: "#721931", icon: <Ice /> },
];

export const travellers = [
  { name: "Solo", color: "#50E3C2", icon: <Solo /> },
  { name: "Couple", color: "#50E3C2", icon: <Couple /> },
  { name: "Friends", color: "#50E3C2", icon: <Friends /> },
  { name: "Family", color: "#50E3C2", icon: <BabyBoyIcon fill="white" /> },
];

export const TabsContent = [
  { name: "When", border: true },
  { name: "Who", border: true },
  { name: "More +", border: false },
];

export const SubTabsContent = [
  { name: "Seasons" },
  { name: "Months" },
  { name: "Dates" },
];
