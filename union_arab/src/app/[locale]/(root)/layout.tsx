import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar />

      {children}
      <Footer />
    </main>
  );
}
