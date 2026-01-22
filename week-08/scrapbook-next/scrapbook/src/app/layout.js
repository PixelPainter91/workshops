import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Scrapbook",
  description: "A digital scrapbook for travel memories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="pt-16 bg-gray-100">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
