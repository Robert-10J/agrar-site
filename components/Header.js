import Link from "next/link"
import Image from 'next/image'

import styles from '../styles/Header.module.css'

const Header = () => {
    return(
        <header className={styles.header}>
            <div className='contenedor'>
                <div className={styles.barra}>
                    <Link href='/'>
                        <a>
                            <Image className={styles.imgLogo} width={150} height={130} src="/img/logo.png" alt="Icono de la empresa"/>
                        </a>
                    </Link>
                    <nav className={styles.navegacion}>
                        <Link href='/'>Inicio</Link>
                        <Link href='servicios'>Servicios</Link>
                        <Link href='quienesSomos'>¿Quienes somos?</Link>
                        <Link href='contacto'>Contacto</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header