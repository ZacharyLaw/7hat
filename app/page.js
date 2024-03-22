import React from "react";

import styles from "./page.module.css";
import Fire from './fire';
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className={styles.main}>
      <Fire />
      <a href="/api/auth/login">Login</a>
    </main>
  );
}
