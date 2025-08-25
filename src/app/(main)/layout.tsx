import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ClientLayout from "@/components/layout/ClientLayout";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientLayout>
      <div className="px-4 sm:px-8 md:px-16 lg:px-[5.625rem]">
        <div className="overlay" />
        <Navbar />
        {children}
      </div>
      <Footer />
    </ClientLayout>
  );
}
