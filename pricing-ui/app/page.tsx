import { Features } from "@/components/Features";
import Header from "@/components/Header";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main>
      <div className="App">
        <Header />
        <Pricing />
        <Features />
      </div>
    </main>
  );
}
