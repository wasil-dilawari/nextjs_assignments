import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>Assalamu Alaikum</div>
      <div>
        <br />
        Normal Routes
      </div>
      <div>
        <br />
        <Link href={"/first"}>First Page</Link>
      </div>
      <div>
        <Link href={"/first/second"}>Second Page</Link>
      </div>
      <div>
        <Link href={"/third"}>Third Page</Link>
      </div>
      <div>
        <br />
        Dynamic Segments
      </div>
      <div>
        <br />
        <Link href="/zia">Go to Zia page</Link>
        <br />
        <Link href="/zeeshan">Go to Zeeshan page</Link>
        <br />
        <Link href="/hira">Go to Hira page</Link>
      </div>
    </>
  );
}
