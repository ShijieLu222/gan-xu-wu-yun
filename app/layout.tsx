import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "柑叙乌云｜甜品与鲜果",
  description: "手作提拉米苏、巴斯克、创意果切与果礼，让每个值得庆祝的日子甜一点。",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  openGraph: { title: "柑叙乌云｜把今天，过得甜一点", description: "手作甜品、创意果切与果礼。", images: [{ url: "/images/hero-fruit.webp" }] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
