import "./globals.css";

export const metadata = {
  title: "Nike",
  description: "Nike webstore",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
