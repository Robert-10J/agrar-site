import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Contacto.module.css'

const contacto = () => {
    return (
        <Layout
            pagina='Contacto'
        >
            <main className='contenedor'>
                <h2 className='heading'>Contacto</h2>
                <div className={styles.contenido}>
                    <Link href='https://www.instagram.com/agrar.sacv/'>
                        <a style={styles.link}>
                            <Image width={100} height={100} src="/img/instagram.svg" alt='Icono de Instagram'/>
                            Síguenos en Instagram
                        </a>
                    </Link>
                </div>
            </main>
        </Layout>
    )
}

export default contacto