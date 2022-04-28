import Link from 'next/link'

import styles from '../styles/Footer.module.css'

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={`contenedor ${styles.contenido}`}>
                    <nav className={styles.navegacion}>
                        <Link href='/'>Inicio</Link>
                        <Link href='servicios'>Servicios</Link>
                        <Link href='quienesSomos'>¿Quienes somos?</Link>
                        <Link href='contacto'>Contacto</Link>
                    </nav>

                <p className={styles.copyright}>Todos los derechos Reservados</p>
            </div>
        </footer>
    )
}

export default Footer