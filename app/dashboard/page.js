import React from 'react'
import Nav from '../Nav'
import styles from '../page.module.css'
// import Log from '@/services/MockService'

export default function Dashboard() {

  // Log()

  return (
    <div className={styles.main}>
      <h1>Dashboard</h1>
      <p>Rendered Server Side</p>
      <hr />
      <Nav />
    </div>
  )
}
