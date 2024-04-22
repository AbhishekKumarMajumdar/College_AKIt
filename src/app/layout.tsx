import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/Style/tailwind.css'
import '@/Style/style.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr.APJ Abdul Kalam Institute of Technology",
  description: "Dr. A.P.J. Abdul Kalam Institute of Technology, Tanakpur is one of the constituent institutes of UTU, Dehradun, established in 2016 by the Govt. of Uttarakhand to promote the technical education. The institute provides undergraduate education in two disciplines i.e. Mechanical Engineering and Civil Engineering intake of 60 in each branch. The vision of the institute is to produce a world class Technocrats and entrepreneurs for the benefit and upliftment of the society.Tanakpur is a town and a municipal board in Champawat district in the Indian state of Uttarakhand.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex h-full flex-col">
        <div className="flex min-h-full flex-col">{children}</div>
      </body>

    </html>
  );


}
