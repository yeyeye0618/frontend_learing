import styles from './Card.module.css';

const Card = () => {
    return (
        <div className={styles.card}>
            <img className={styles.avatar} src="https://c.tenor.com/GZyo92WEdcQAAAAC/tenor.gif" alt="avatar" />
            <div className={styles.name}>D U C K</div>
            <div className={styles.title}>一隻鴨 fucking DuCk !!!</div>
            <hr className={styles.line} />
            <div className={styles.desc}>
                我正在學習 dUcK & quack<br />
                希望未來能夠 Quack !!!!!!
            </div>
        </div>
    )
}

export default Card;