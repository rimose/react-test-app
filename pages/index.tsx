import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [time, setTime] = useState('');
  useEffect(() => {
    setTime(new Date().toISOString());
  }, [])
  return (
    <div className={styles.container}>
        <h1 className='title'>
          {time}
        </h1>
    </div>
  )
}
