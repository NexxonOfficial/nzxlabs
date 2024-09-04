import { useEffect, useState } from 'react'
import styles from './Navigation.module.css'
import { Montserrat } from 'next/font/google'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default function Navigation({selected}: {selected: number}) {
    return(
        <nav className={styles.nav}>
            <div className={styles.top}>
                <img src="/logo.png" alt="" className={styles.logo} />
                <p>Research</p>
            </div>
            <div className={styles.category} data-category="Introduction">
                <h3>Introduction</h3>
                <Link href={'/introduction/what-to-expect'} className={selected == 1 ? styles.selected : ''}>What to expect</Link>
            </div>
            <div className={styles.category} data-category="Medal FAQ's">
                <h3>Medal FAQ's</h3>
                <Link href={'/medal-faq/laggy-clips'} className={selected == 2 ? styles.selected : ''}>Laggy Clips</Link>
                <Link href={'/medal-faq/no-audio-clips'} className={selected == 3 ? styles.selected : ''}>No Audio Clips</Link>
                <Link href={'/medal-faq/unlisted-clips-dont-appear'} className={selected == 4 ? styles.selected : ''}>Unlisted Clips Don't Appear</Link>
                <Link href={'/medal-faq/corrupt-clips'} className={selected == 5 ? styles.selected : ''}>Currupt Clips</Link>
            </div>
        </nav>
    )
}