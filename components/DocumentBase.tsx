import { Montserrat } from "next/font/google"
const montserrat = Montserrat({ subsets: ['latin'] })

export default function DocumentBase({children}: {
    children: React.ReactNode
}) {
    return(
        <main className={montserrat.className} style={{backgroundColor: 'rgb(7, 7, 7)', width: '100vw', height: '100vh'}}>
            <div style={{width: '100%', maxWidth: '1525px', height: '100%', margin: '0 auto', display: 'flex', flexDirection: 'row'}}>
                {children}
            </div>
        </main>
    )
}