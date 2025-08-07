import type { MetaFunction } from "react-router";
import { Button, Card, CardHeader, CardContent, CardTitle, Badge } from "@starter/ui";

export const meta: MetaFunction = () => {
  return [
    { title: "Starter - Web App" },
    { name: "description", content: "Welcome to the Starter monorepo!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="text-2xl font-bold text-foreground">
            Welcome to <span className="text-primary">Starter Web</span>
          </h1>
          <p className="text-muted-foreground">React Router 7 + Shadcn UI Components</p>
        </header>
        <Card className="w-96">
          <CardHeader>
            <CardTitle>Shared Components Demo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <div className="flex gap-2">
                <Badge>New</Badge>
                <Badge variant="secondary">Beta</Badge>
                <Badge variant="destructive">Hot</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}