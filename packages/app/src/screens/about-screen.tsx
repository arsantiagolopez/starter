import { Button, View, Text, Card, CardHeader, CardTitle, CardDescription, CardContent } from "@starter/ui"
import { Link, useNavigate } from "@starter/navigation"

export function AboutScreen() {
  const navigate = useNavigate()
  
  return (
    <View className="p-4">
      <Link.Back className="inline-block mb-4" />
      
      <Text className="text-2xl font-bold mb-6">About Our Universal Design System</Text>
      
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Cross-Platform Architecture</CardTitle>
          <CardDescription>
            Built with Epic Stack patterns and universal components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Text className="mb-4">
            This application demonstrates a universal design system that works 
            seamlessly across web and mobile platforms using the same codebase.
          </Text>
          <Text className="mb-4">
            • React Router 7 for web navigation
            • Expo Router for mobile navigation  
            • Universal components with platform detection
            • Shared screens and business logic
          </Text>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Technology Stack</CardTitle>
        </CardHeader>
        <CardContent>
          <Text className="mb-2">🌐 <Text className="font-semibold">Web:</Text> React Router 7, Tailwind CSS, shadcn/ui</Text>
          <Text className="mb-2">📱 <Text className="font-semibold">Mobile:</Text> Expo, NativeWind, React Native</Text>
          <Text className="mb-2">🎨 <Text className="font-semibold">UI:</Text> Universal components with platform-specific rendering</Text>
          <Text className="mb-4">🏗️ <Text className="font-semibold">Architecture:</Text> Monorepo with Turborepo</Text>
          
          <View className="gap-2">
            <Button onPress={() => alert("This button works on both platforms!")}>
              Test Universal Button
            </Button>
            
            <Button 
              variant="outline"
              onPress={() => navigate("/", { replace: true })}
            >
              Navigate Home (useNavigate hook)
            </Button>
          </View>
        </CardContent>
      </Card>
    </View>
  )
}