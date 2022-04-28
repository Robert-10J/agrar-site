import Link from 'next/link'

const Acceso = () => {
    return (
        <section>
            <h2>Asesoría profesional de excelencia</h2>

            <div>
                <Link href='ingresar'>Ingresar</Link>
                <Link href='registrar'>Registrate</Link>
            </div>
        </section>
    )
}

export default Acceso