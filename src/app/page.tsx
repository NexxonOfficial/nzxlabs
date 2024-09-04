import Image from "next/image";
import styles from "./page.module.css";
import { redirect } from "next/navigation";
import WhatToExpect from "../../pages/introduction/what-to-expect";
import { useEffect } from "react";

export default function Home() {
  redirect('/introduction/what-to-expect')
  return (
    <html style={{width: '100vw', height: '100vh', padding: '0', border: 'none', margin: '0'}}>

    </html>
  );
}
