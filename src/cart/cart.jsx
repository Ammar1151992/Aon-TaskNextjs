import styles from "./cart.module.css"
import Image from 'next/image'
import Link from 'next/link'

export const Cart = ({list}) => {
  
    return (
        <div className={styles.body}>
            <div className={styles.body_content}>
                <div className={styles.bodyImage}>
                    <Image className={styles.image} src={list.photo_url} fill/>
                </div>
                <h3>{list.title}</h3>
                <p>{list.category}</p>
                <Link href={`/article/${list.id}`}>Read Article</Link>
            </div>
        </div>
    )
}