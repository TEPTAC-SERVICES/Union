import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col w-full ">
      <Navbar />

      {children}
      <Footer />
    </main>
  );
}
