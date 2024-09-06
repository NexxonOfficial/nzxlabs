import { useEffect, useState } from 'react'
import styles from './Navigation.module.css'
import { Montserrat } from 'next/font/google'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default function Navigation({selected}: {selected: number}) {
    const [navigationIsOpen, setNavigationIsOpen] = useState(false)
    const [first, setFirst] = useState(true)

    const HandleStackPress = () => {
        if(navigationIsOpen) {
            setNavigationIsOpen(false)
        } else {
            setNavigationIsOpen(true)
        }
    }

    useEffect(() => {
        setFirst(false)
    }, [])

    return(
        <nav className={styles.nav} style={navigationIsOpen ? {height: '100vh'} : {}}>
            <div className={styles.top}>
                <img src="/logo.png" alt="" className={styles.logo} />
                <p>Research</p>

                <div className={styles.stack}>
                    <div className={!navigationIsOpen ? styles.opened : '' } onClick={() => HandleStackPress()}>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                    </div>
                    <div className={navigationIsOpen ? styles.closed : ''} onClick={() => HandleStackPress()}>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                    </div>
                </div>
            </div>
            <div className={styles.seperation}>
                <div className={styles.category} data-category="Introduction">
                    <h3>Introduction</h3>
                    <Link href={'/introduction/what-to-expect'} className={selected == 1 ? styles.selected : ''}>What to expect</Link>
                </div>
                <div className={styles.category} data-category="Medal FAQ's">
                    <h3>Medal FAQ's</h3>
                    <Link href={'/medal-faq/laggy-clips'} className={selected == 2 ? styles.selected : ''}>Laggy Clips</Link>
                </div>
            </div>
        </nav>
    )
}