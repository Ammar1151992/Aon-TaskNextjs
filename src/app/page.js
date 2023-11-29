"use client"
import styles from './page.module.css'
import { Nav } from '@/nav/nav'
import { Container } from '@/container/container'
import { Header } from '@/header/header'
import { Cart } from '@/cart/cart'
import { useEffect, useState } from 'react'
import { Footer } from '@/footer/footer'
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Home() {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const [isVisible, setIsVisible] = useState(false);


  const fetchMoreData = async () => {
    try {
      let resp = await fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts?limit=12&offset=${skip}`);
      let data = await resp.json();
      setLists([...lists, ...data.blogs]);
      setSkip(skip + 12)
    } catch (error) {
      console.error(error);
    }
  };


    const list = async () => {
      try {
        let resp = await fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts?limit=12&offset=${skip}`);
        let data = await resp.json();
        setLists(data.blogs);
        setLoading(false)
        setSkip(skip + 12)
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      list();
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
  return (
    <main>
      <Nav />
      <Header />
      <Container>
      <div className={styles.scroll}>
      <InfiniteScroll
              dataLength={lists.length}
              next={fetchMoreData}
              hasMore={true}
              loader={<span className={loading? "" : styles.loader2}></span>}
            >
        <div className={styles.grid}>
          {lists.map((list, index) => (
          <Cart key={index} list={list} length={lists.length}/>
          ))}  
        </div>
        </InfiniteScroll> 
        </div> 
      </Container>
      <span className={loading? styles.loader : styles.non}>L &nbsp; ading...</span>
      <p className={loading? styles.hgh : styles.non}></p>
      <button
      className={`scroll_button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      ↑
    </button>
      <Footer />
    </main>
  )
}
