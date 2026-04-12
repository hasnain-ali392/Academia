import MarketingNavbar from "@/components/layout/MarketingNavbar";
import MarketingFooter from "@/components/layout/MarketingFooter";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <MarketingNavbar />
      <main className="flex-grow">
        {children}
      </main>
      <MarketingFooter />
    </div>
  );
}
