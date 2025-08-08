import * as React from "react"
import { Button, View, Text, Card, CardHeader, CardTitle, CardDescription, CardContent, Link } from "@starter/ui"

export function HomeScreen() {
  return (
    <View className="p-4">
      <Text className="text-3xl font-bold mb-6">🏠 Universal Epic Stack</Text>
      
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Welcome to the Universal Design System</CardTitle>
          <CardDescription>
            One codebase, two platforms - Web and Mobile in perfect harmony
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Text className="mb-4">
            This is the same HomeScreen component running on both React Router 7 (web) 
            and Expo Router (mobile). The components automatically detect their platform 
            and render the appropriate elements.
          </Text>
          
          <View className="space-y-3">
            <Button onPress={() => alert("🎉 This alert works on both platforms!")}>
              Test Universal Button
            </Button>
            
            <View className="pt-4">
              <Text className="mb-2 font-semibold">Navigation Examples:</Text>
              <Link href="/about" className="block py-2">
                → Go to About Page (universal navigation)
              </Link>
            </View>
          </View>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>🔧 Features Demonstrated</CardTitle>
        </CardHeader>
        <CardContent>
          <Text className="mb-2">✅ Universal components (View, Text, Card, Button)</Text>
          <Text className="mb-2">✅ Cross-platform navigation (Link component)</Text>
          <Text className="mb-2">✅ Platform-specific rendering</Text>
          <Text className="mb-2">✅ Shared business logic</Text>
          <Text className="mb-2">✅ Consistent styling with Tailwind/NativeWind</Text>
        </CardContent>
      </Card>
    </View>
  )
}