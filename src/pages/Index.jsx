import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-4xl font-bold text-primary">Welcome to Our Transparent Matt Black Theme</h1>
      <p className="text-xl text-muted-foreground">Experience the sleek and modern design of our application.</p>
      <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
    </div>
  );
};

export default Index;