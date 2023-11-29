import styles from "./header.module.css"
import { Container } from "@/container/container"

export const Header = () => {
    return (
        <div className={styles.header}>
            <Container>
                <div className={styles.overlay}>
                    <h2>Simple Blog.</h2>
                    <p>A blog created by Aon 2023</p>
                </div>
            </Container>
        </div>
    )
}