import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeScreen } from "@starter/app/screens";

export default function HomePage() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <HomeScreen />
      </ScrollView>
    </SafeAreaView>
  );
}