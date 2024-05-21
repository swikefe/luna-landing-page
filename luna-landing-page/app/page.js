'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [winWidth, setWinWidth] = useState('0')
  const [winHeight, setWinHeight] = useState('0')
  const [copyText, setCopyText] = useState('Copy')
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

  useEffect(() => {
    const interval = setInterval(() => {
      if(copyText === "Copied"){
        setCopyText('Copy')
      }

      else {
        setCopyText('Copy')
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [copyText])

  return (
    <main className={styles.main}>
      <div className={styles.sectionWithBg}>
        <Image
          src="/main-bg.jpg"
          width={winWidth}
          height={winWidth < 1440 ? winHeight + 100 : winHeight}
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

            <a href="https://x.com/proplanyall" target="blank_">
              <Image
                src="/twitter.png"
                width={55}
                height={55}
                alt="twitter logo"
                className={styles.actionBtns}
              />
            </a>

            <a href="https://t.me/+CPOWHXb26tBiYTM0" target="blank_">
              <Image
                src="/telegram.png"
                width={55}
                height={55}
                alt="telegram logo"
                className={styles.actionBtns}
              />
            </a>

            
          </div>
          

        </div>
      </div>
      

      <div className={styles.descSection} style={{
        top: winWidth < 1440 ? "100vh" : "89.5vh",
        width: winWidth
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

            <h2 style={{fontSize : winWidth < 1440 ? 16 : 24}}>Luna token is inspired by luna the cat from sailormoon series <br/> as you can see from the video on top !</h2>
        </div>

        <div className={styles.tokenomicsSection} style={{
          width: winWidth
        }}>
            <h1>Tokenomics</h1>

            <div className={styles.container} >
              <h1>Total Supply</h1>
              <h4>1,000,000,000 $LUNA</h4>
            </div>

            <div className={styles.container} style={{marginTop: "2rem"}}>
              <h1>Token Address</h1>
              <h4 style={{
                fontSize : winWidth < 1440 ? 24 : 36,
              }}>
                EZUFNJMZTBpungQX2czEb9<br />ZyCMjtdzsDGMK4UywDUa1F
              </h4>
              <button className={styles.copyBtn} onClick={() => {
                navigator.clipboard.writeText('EZUFNJMZTBpungQX2czEb9ZyCMjtdzsDGMK4UywDUa1F')
                setCopyText('Copied')
              }}>{copyText}</button>
            </div>
        </div>
        
      </div>
      
    </main>
  );
}