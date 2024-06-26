import { Inter, Roboto, Rubik } from "next/font/google";
import "./globals.css";
import { ThemeProvider} from "next-themes";

const robotoWeights = {
  100: "Roboto-Light",
  300: "Roboto-Regular",
  400: "Roboto-Regular",
  500: "Roboto-Medium",
  700: "Roboto-Bold",
  900: "Roboto-Black",
};

const inter = Inter({ subsets: ["latin"] });

const rubik = Rubik({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: '500'});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${rubik.className} ${roboto.className}`}
      >
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
