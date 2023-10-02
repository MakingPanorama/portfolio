import Info from "./components/info";
import NavBar from "./components/navbar";
import styles from "./settings/page.module.css"

export default function Home()
{
  return (
    <>
        <NavBar/>
        <div className={styles.chooseUS} id="aboutmemethrow">
            <article className={styles.container}>
                <section className={styles.segment} id={styles.fill}>
                    <div className={styles.title}>
                        Memethrow
                        <p className={styles.description}>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..</p>
                    </div>

                    <img className={styles.preview} src="/next.svg" />
                </section>

                <hr/>

                <section className={styles.segment} id={styles.fitcenter}>
                    <div className={styles.title}>
                        The best game to enjoy
                        <ul className={styles.features}>
                            <li>
                                Template
                            </li>
                            <li>
                                Template
                            </li>
                            <li>
                                Template
                            </li>
                            <li>
                                Template
                            </li>
                        </ul>

                        <div className={styles.button}>
                            <a>
                                Play Now!    
                            </a>
                        </div>
                    </div>
                </section>
            </article>
        </div>

        <Info/>
    </>
  )
}