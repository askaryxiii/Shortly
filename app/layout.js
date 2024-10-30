import MainLayout from "@/externals/MainLayout";
import "./globals.css";

export const metadata = {
  title: "Shortly",
  description: "Shortly is a streamlined and efficient URL shortening service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
