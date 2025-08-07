import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Badge,
} from "@starter/ui/native";
import "./global.css";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-background">
        <StatusBar style="auto" />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className="flex-1 items-center justify-center p-6">
            <View className="items-center gap-8">
              <View className="items-center gap-4">
                <Text className="text-2xl font-bold text-foreground">
                  Welcome to{" "}
                  <Text className="text-primary">Starter Mobile</Text>
                </Text>
                <Text className="text-muted-foreground">
                  Cross-platform Design System Working!
                </Text>
              </View>

              <Card className="w-full max-w-sm">
                <CardHeader>
                  <Text className="text-lg font-semibold text-card-foreground">
                    Shared Components Demo
                  </Text>
                </CardHeader>
                <CardContent>
                  <View className="gap-4">
                    <Button>
                      <Text className="text-primary-foreground font-medium">
                        Primary Button
                      </Text>
                    </Button>
                    <Button variant="secondary">
                      <Text className="text-secondary-foreground font-medium">
                        Secondary Button
                      </Text>
                    </Button>
                    <Button variant="outline">
                      <Text className="text-foreground font-medium">
                        Outline Button
                      </Text>
                    </Button>
                    <View className="flex-row gap-2 flex-wrap">
                      <Badge>
                        <Text className="text-primary-foreground text-xs font-semibold">
                          New
                        </Text>
                      </Badge>
                      <Badge variant="secondary">
                        <Text className="text-secondary-foreground text-xs font-semibold">
                          Beta
                        </Text>
                      </Badge>
                      <Badge variant="destructive">
                        <Text className="text-destructive-foreground text-xs font-semibold">
                          Hot
                        </Text>
                      </Badge>
                    </View>
                  </View>
                </CardContent>
              </Card>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
