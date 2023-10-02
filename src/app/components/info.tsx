import styles from "./info.module.css";

export default function Info() {
    return (
        <div className={styles.bottomBar}>
            <div className={styles.contact}>
                <a>
                    Contact me
                </a>
            </div>
        </div>
    )
}