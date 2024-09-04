import styles from './DocumentContent.module.css'

export default function DocumentContent({children}: {children: React.ReactNode}) {
    return(
        <div className={styles.contentBase}>
            {children}
        </div>
    )
}