// The Studio needs full-page control — strip Navbar and Footer from the root layout
export default function StudioRootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
