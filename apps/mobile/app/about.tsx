import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AboutScreen } from "@starter/app/screens";

export default function AboutPage() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <AboutScreen />
      </ScrollView>
    </SafeAreaView>
  );
}