import styles from './Card.module.css';

const Card = ({ title, description, imageSrc, imageAlt }) => {
    return (
        <div className={styles.card}>
            <img src={imageSrc} alt={imageAlt} className={styles.cardImage} width="100%" />
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDescription}>{description}</p>
            </div>
        </div>
    );
};

export default Card;
