import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

export default function Nav() {
  return (
    <div className={styles.grid}>
      <Link
        href="/home"
        className={styles.card}
      >
        <h2>
          Home <span>-&gt;</span>
        </h2>
        <p>Server Component</p>
      </Link>

      <Link
        href="/about"
        className={styles.card}
      >
        <h2>
          About <span>-&gt;</span>
        </h2>
        <p>Client Component</p>
      </Link>

      <Link
        href="/dashboard"
        className={styles.card}
      >
        <h2>
          Dashboard <span>-&gt;</span>
        </h2>
        <p>Server Component</p>
      </Link>
    </div>

  )
}
