import Navigation from "../components/navigation"
import "../styles/global.css"


export const metadata = {
  title: {
    // 다른 page.jsx에서 정의된 titledmf %s에 넣어줌
    template: "Next Movies | %s",
    default: "Next Movies",
  },
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
