import Image from 'next/image'
import styles from './page.module.css'
import Nav from './Nav'
// import loupe from '@/services/LoupeService'

export default function LandingPage() {

  // loupe.information("LandingPage", "Landing Page Sample Log")

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <Nav />
    </main>
  )
}
