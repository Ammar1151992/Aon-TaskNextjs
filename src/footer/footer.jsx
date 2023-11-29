import styles from "./footer.module.css";
import Link from 'next/link'
import { Container } from "@/container/container";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

export const Footer = () => {
    return (
        <div className={styles.nav}>
            <Container>
                <div className={styles.nav_content}>
                    <p>All Right Reserved - Aon2023</p>
                    <div className={styles.icon}>
                        <FaFacebookSquare className={styles.ic}/>
                        <FaSquareTwitter className={styles.ic}/>
                        <FaSquareInstagram className={styles.ic}/>
                    </div>
                </div>
            </Container>
        </div>
    )
}