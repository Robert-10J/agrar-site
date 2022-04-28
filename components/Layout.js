import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children, pagina }) => {
    return(
        <div>
            <Head>
                <title>AGRAR - { pagina }</title>
                <meta content="Aplicación en la cual se muestra informacion agra"/>
                <link rel='icon' href=''/>
            </Head>
            
            <Header />

            { children }

            <Footer />

        </div>
    )
}

export default Layout