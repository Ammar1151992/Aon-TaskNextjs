"use client"
import styles from './page.module.css'
import { Nav } from '@/nav/nav'
import { Container } from '@/container/container'
import { Header } from '@/header/header'
import { Cart } from '@/cart/cart'
import { useEffect, useState } from 'react'
import { Footer } from '@/footer/footer'

export default function Home() {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
    const list = async () => {
      try {
        let resp = await fetch("https://api.slingacademy.com/v1/sample-data/blog-posts");
        let data = await resp.json();
        setLists(data.blogs);
        setLoading(false)
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      list();
    }, []);
  return (
    <main>
      <Nav />
      <Header />
      <Container>
        <div className={styles.grid}>
          {lists.map((list, index) => (
          <Cart key={index} list={list}/>
          ))}    
        </div>
      </Container>
      <span className={loading? styles.loader : styles.non}>L &nbsp; ading...</span>
      <p className={loading? styles.hgh : styles.non}></p>
      <Footer />
      
     
    </main>
  )
}
