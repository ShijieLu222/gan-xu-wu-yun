import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "柑叙乌云｜云朵一样轻，果香刚刚好",
  description: "手作提拉米苏、巴斯克生日蛋糕、创意果切与花艺鲜果礼，添加微信，进入好友福利群",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  openGraph: { title: "柑叙乌云｜云朵一样轻，果香刚刚好", description: "手作甜品、创意果切与花艺鲜果礼", images: [{ url: "/images/hero-fruit.webp" }] },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f2e7e4",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
