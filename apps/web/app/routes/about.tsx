import type { MetaFunction } from "react-router";
import { AboutScreen } from "@starter/app/screens";

export const meta: MetaFunction = () => {
  return [
    { title: "Epic Stack Universal - About" },
    { name: "description", content: "Learn about our universal design system" },
  ];
};

export default function About() {
  return <AboutScreen />;
}