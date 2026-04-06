import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "HATIL Interior Design",
  description: "Interior Design Services by HATIL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}