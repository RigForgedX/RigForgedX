import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        style={{ margin: 0, padding: 0, background: "#111214" }}
      >
        <body
          style={{ margin: 0, padding: 0, background: "#111214" }}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}