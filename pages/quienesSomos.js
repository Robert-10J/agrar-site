import Layout from '../components/Layout'
import styles from '../styles/QuienesSomos.module.css'

const quienesSomos = () => {
    return (
        <Layout 
            pagina="¿Quienes Somos?"
        >
            <main className='contenedor'>
                <h2 className='heading'>¿Quienes Somos?</h2>
                <div className={styles.contenido}>
                    <p>
                    Nuestra oferta, es lo mejor de dos mundos, la fusión perfecta entre la 
                    consultoría en la administración empresarial y la tecnología en automatización 
                    de procesos. Contamos con amplia experiencia, por lo que podemos brindarle 
                    la asesoría que necesita para alinear sus procesos y encontrar el método de 
                    trabajo más adecuado a sus necesidades. También contamos con personal certificado 
                    para el desarrollo e implementación de herramientas tecnológicas que le ayudarán 
                    a gestionar, decidir y alinear la administración de su empresa. 
                    </p>
                </div>
            </main>
        </Layout>
    )
}

export default quienesSomos