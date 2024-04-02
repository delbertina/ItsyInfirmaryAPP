import AppHeader from "./components/app-header/app-header";
import SupplyItemCard from "./components/supply-item-card/supply-item-card";
import { SupplyItem } from "./types/supply-item";

export default function Home() {
  const supplyItems: SupplyItem[] = [{id: 1, name: "test name", description: "test description", isPerishable: false}];

  return (
    <>
      <AppHeader />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Content</h1>
        {[supplyItems[0], supplyItems[0], supplyItems[0]].map((item, index) => (
          <SupplyItemCard item={item} key={index} />
        ))}
      </main>
    </>
  );
}
