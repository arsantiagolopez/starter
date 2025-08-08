import type { MetaFunction } from "react-router";
import { HomeScreen } from "@starter/app/screens";

export const meta: MetaFunction = () => {
  return [
    { title: "Epic Stack Universal - Home" },
    { name: "description", content: "Universal design system for web and mobile" },
  ];
};

export default function Index() {
  return <HomeScreen />;
}