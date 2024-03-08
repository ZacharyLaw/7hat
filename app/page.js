import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Fire from './fire';

/** 
 import Auth from './Auth';
 <Author />
*/

export default function Home() {
  return (
    <main className={styles.main}>
      <Fire />
    </main>
  );
}
