import styles from './DocumentMetadata.module.css'

export default function DocumentMetadata({readTime, updated}:{readTime: string, updated: string}) {
    return(
        <div className={styles.metaMain}>
            <div className={styles.authorContainer}>
                <div className={styles.authorImage}>
                    <img src='/nzxx.png' />
                </div>
                <div className={styles.authorText}>
                    <p>Nzxx</p>
                    <p>Site Owner</p>
                </div>
            </div>

            <div className={styles.informationContainer}>
                <p>{readTime} Read</p>
                <p>Last updated {updated}</p>
            </div>
        </div>
    )
}