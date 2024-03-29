import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>
      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis vero
        doloribus accusamus aut vitae repellendus reiciendis quibusdam illo,
        fugit voluptatibus maiores. Sed pariatur voluptas aut. Voluptatibus
        officia consequatur et dicta.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis vero
        doloribus accusamus aut vitae repellendus reiciendis quibusdam illo,
        fugit voluptatibus maiores. Sed pariatur voluptas aut. Voluptatibus
        officia consequatur et dicta.
      </p>
      <Link href="/ninjas"><span className={styles.btn}>See Ninja Listing</span></Link>
    </>
  );
}
