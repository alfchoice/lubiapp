import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className={styles.container}>
      <Head>
        <title>LubiApp - Lubricantes Premium</title>
        <meta name="description" content="Descubre nuestra gama de lubricantes premium de alta calidad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src="/images/logo.png" alt="LubiApp Logo" width={100} height={50} />
        </div>
        <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#products">Productos</a></li>
            <li><a href="#about">Nosotros</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className={styles.hero}>
          <Image src="/images/banner.jpg" alt="Banner de lubricantes" layout="fill" objectFit="cover" />
          <div className={styles.heroContent}>
            <h1>Lubricantes Premium</h1>
            <p>Calidad superior para un rendimiento óptimo</p>
          </div>
        </section>

        <section id="products" className={styles.products}>
          <h2>Nuestro Producto Destacado</h2>
          <div className={styles.product}>
            <Image src="/images/product.jpg" alt="Lubricante Premium" width={300} height={300} />
            <h3>Lubricante Ultra Duradero</h3>
            <p>Fórmula avanzada para una protección duradera</p>
            <button>Comprar Ahora</button>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 LubiApp. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}
