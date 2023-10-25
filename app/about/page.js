"use client"
import React from 'react'
import Nav from '../Nav'
import styles from '../page.module.css'
import loupe from '@/services/LoupeService'

// Client component - works with current implementation
export default function About() {
  
  loupe.information("About Page", "About Page Sample Log (Client Component)")

  return (
    <div className={styles.main}>
      <h1>About</h1>
      <p>Renders client side</p>
      <hr />
      <Nav />
    </div>
  )
}
