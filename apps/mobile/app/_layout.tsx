import { Stack } from 'expo-router';
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen 
          name="index" 
          options={{ 
            title: "Home",
            headerShown: false 
          }} 
        />
        <Stack.Screen 
          name="about" 
          options={{ 
            title: "About",
            headerShown: false 
          }} 
        />
      </Stack>
    </SafeAreaProvider>
  );
}