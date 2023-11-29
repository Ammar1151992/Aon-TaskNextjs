import styles from "./nav.module.css";
import Link from 'next/link'
import { Container } from "@/container/container";

export const Nav = () => {
    return (
        <div className={styles.nav}>
            <Container>
                <div className={styles.nav_content}>
                    <h3>Aon 2023</h3>
                    <ul>
                        <li>
                            <Link href={"/"} className={styles.li}>Home</Link>
                        </li>
                        <li>
                            <Link href={"#"} className={styles.li}>About</Link>
                        </li>
                        <li>
                            <Link href={"#"} className={styles.li}>Help</Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}