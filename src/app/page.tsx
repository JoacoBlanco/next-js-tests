import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Component } from "react";
import ButtonTest from "./components/ButtonTest"


export default function Home() {
  return (
      <main>
        <h1>hola</h1>
        <Link href="/listsPage">listsPage</Link>
        <ButtonTest />
      </main>
  );
}
