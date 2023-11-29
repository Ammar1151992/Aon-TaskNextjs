import styles from "./page.module.css"
import { Nav } from "@/nav/nav"
import { Container } from "@/container/container"
import Image from 'next/image'
import { Footer } from "@/footer/footer"
const dayjs = require('dayjs')

export async function getData(dataID) {
    const res = await fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts/${dataID}`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

  export async function generateMetadata({params}, parent) {
    const data = await getData(params.id)
    const previousImages = (await parent).openGraph?.images || []
    console.log(...previousImages);
    return {
      title: data.blog.title,
      openGraph: {
        images: [data.blog.photo_url, ...previousImages],
      },
    }
  }
   

export default async function Article({params}){
    const data = await getData(params.id)
    return (
        <main>
            <Nav />
            <Container>
           <div className={styles.article}>
                <div className={styles.article_title}>
                    <div>
                        <h2>{data.blog.title}</h2>
                        <p>{data.blog.category}</p>
                    </div>
                        <p>{dayjs(data.blog.created_at).format('DD/MM/YYYY')}</p>
                </div>
                <div className={styles.article_image}>
                    <Image className={styles.image} src={data.blog.photo_url} fill/>
                </div>
                <div className={styles.content}>
                   <div className={styles.content_list} dangerouslySetInnerHTML={{ __html: data.blog.content_html }}></div>
                </div>
           </div>
           </Container>
           <Footer />
        </main>
        
    )
}

