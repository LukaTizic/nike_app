import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Nike",
  description: "Nike webstore",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main className='relative '>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
