import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "./header";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Home Page</h1>
      </main>
    </div>
  );
}