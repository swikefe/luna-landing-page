'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [winWidth, setWinWidth] = useState('0')
  const [winHeight, setWinHeight] = useState('0')
  useEffect(() => { 
    const updateWidth = async () => {
      const windowWidth = window.innerWidth
      setWinWidth(windowWidth)
    }

    const updateHeight = async () => {
      const windowHeight = window.innerHeight
      setWinHeight(windowHeight)
    }

    updateWidth()

    updateHeight()
  }, [])
  // console.log(winWidth, "<<<< width");
  return (
    <main className={styles.main}>
      <div className={styles.sectionWithBg}>
        <Image
          src="/main-bg.jpg"
          width={winWidth}
          height={winHeight}
          alt="main-bg"
          style={{zIndex: -1, position: "absolute", top: 0, left: 0}}
        />
        <div className={styles.navbar}>
          <h1 className={styles.navbarTitle}>$LUNA</h1>
          <Image
            src="/luna-logo.png"
            width={winWidth < 1440 ? 40 : 60}
            height={winWidth < 1440 ? 40 : 60}
            alt="Logo"
          />
        </div>

        <div className={styles.greetingSection}>
          <Image
            src="/luna-bg.png"
            width={250}
            height={350}
            alt="luna bg"
          />

          <button className={styles.buyBtn}>Buy</button>

          <div className={styles.actionBtn}>
            <Image
              src="/pump.png"
              width={55}
              height={55}
              alt="pump logo"
              className={styles.actionBtns}
            />

            <Image
              src="/twitter.png"
              width={55}
              height={55}
              alt="twitter logo"
              className={styles.actionBtns}
            />

            <Image
              src="/telegram.png"
              width={55}
              height={55}
              alt="telegram logo"
              className={styles.actionBtns}
            />
          </div>
          

        </div>
      </div>
      

      <div className={styles.descSection} style={{
        top: winWidth < 1440 ? "87vh" : "89.5vh",
        width: "77.8%"
      }}>
        <div className={styles.videoContainer}>
            <h1>About</h1>

            <iframe
              src="https://www.youtube.com/embed/4EErrd4Kh7k?autoplay=1&mute=1"
              allow="autoplay"
              frameborder="0"
              allowFullScreen
              width={winWidth / 2}
              height={winHeight / 1.5}
              style={{
                borderRadius: 16
              }}
              autoPlay
            />

            <h2>Luna token is inspired by luna the cat from sailormoon series <br/> as you can see from the video on top !</h2>
        </div>

        <div className={styles.tokenomicsSection}>
            <h1>Tokenomics</h1>

            <div className={styles.container} style={{padding: "6rem 22.5rem"}}>
              <h1>Total Supply</h1>
              <h4>1,000,000,000 $LUNA</h4>
            </div>

            <div className={styles.container} style={{marginTop: "2rem"}}>
              <h1>Token Address</h1>
              <h4>EZUFNJMZTBpungQX2czEb9ZyCMjtdzsDGMK4UywDUa1F</h4>
            </div>
        </div>
        
      </div>
      
    </main>
  );
}
