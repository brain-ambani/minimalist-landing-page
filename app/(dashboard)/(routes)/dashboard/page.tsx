import { ModeToggle } from "@/components/themeToggle";

export default function DashboardPage() {
  return (
    <main className="flex justify-between">
      <h1 className="text-green-500">Dashboard(Protected)</h1>
      <ModeToggle />
    </main>
  );
}
