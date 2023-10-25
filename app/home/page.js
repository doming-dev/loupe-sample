import React from 'react'
import Nav from '../Nav'
import styles from '../page.module.css'
// import loupe from '@/services/LoupeService'

export default function Home() {
  
  // loupe.information("Home Page", "Home Sample Log")

  return (
    <div className={styles.main}>
      <h1>Home Page</h1>
      <p>Rendered Server Side</p>
      <hr />
      <Nav />
    </div>
  )
}
