import Layout from '../components/Layout'
import styles from '../styles/Servicios.module.css'

const Servicios = () => {
    return (
        <Layout 
            pagina="Servicios"
        >
            <main className='contenedor'>
                <h2 className='heading'>Servicios</h2>
                <div className={styles.contenido}>
                    <ul>
                        <li>Servicio de consultas mediante conferencias</li>
                        <li>Servicio de relación laboral </li>
                        <li>Servicio de documentos o pdf</li>
                        <li>Servicio de foros de discusión</li>
                    </ul>
                </div>
            </main>
        </Layout>
    )
}

export default Servicios