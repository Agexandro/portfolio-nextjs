import Head from 'next/head'
import { Fragment } from 'react/cjs/react.production.min'
import Navigation from '../components/Navigation'
import ProjectList from '../components/ProjectList'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Fragment>
      <br />
      <section className={styles.hero+' '+ styles.heroLeft}>
        <article className={styles.container}>
          <p className={styles.welcome}>
            Welcome! I'm Alejandro
          </p>
          <br />
          <p className={styles.title}>
            Web Developer
          </p>
          <br />
          <p className={styles.text}>
            Hi, I’m a front end web developer that loves solve problems using different technologies to acomplish the objetives of the clients.
          </p>
        </article>
      </section>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Some of my projects
        </h1>
      </div>
      <section className={styles.hero + ' ' + styles.heroRight}>
        <div className={styles.container}>
          <ProjectList/>
        </div>
      </section>
    </Fragment>
  )
}
