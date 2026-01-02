import "./globals.css";

export const metadata = {
  title: "Lookevo.in",
  description: "Find clothes that matches your style",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
