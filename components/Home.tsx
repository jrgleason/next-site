import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({subsets: ['latin']});
const HomePage = ()=>{
    return (
      <main className={styles.main}>

        <div className={
            `${styles.center} font-extrabold flex flex-col items-start px-10 py-20`
        }>
            <div className={"text-8xl p-3 text-green-800 osu-gradiant"}>SecondAve.net</div>
            <div className={"text-6xl font-extrabold p-5 text-white"}>Home Automation and Solar Consulting</div>
            <div className={"text-xl font-extrabold p-5 text-white"}>The new leading provider of home automation services in Columbus</div>
        </div>

        <div className={styles.grid}>
            <a
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2 className={inter.className}>
                    Docs <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                    Find in-depth information about Next.js features and&nbsp;API.
                </p>
            </a>

            <a
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2 className={inter.className}>
                    Learn <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                    Learn about Next.js in an interactive course with&nbsp;quizzes!
                </p>
            </a>

            <a
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2 className={inter.className}>
                    Templates <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                    Discover and deploy boilerplate example Next.js&nbsp;projects.
                </p>
            </a>

            <a
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2 className={inter.className}>
                    Deploy <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                    Instantly deploy your Next.js site to a shareable URL
                    with&nbsp;Vercel.
                </p>
            </a>
        </div>
    </main>)
}

export {HomePage}