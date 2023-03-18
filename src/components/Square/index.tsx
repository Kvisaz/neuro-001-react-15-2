import styles from './square.module.css';

type SquareProps = {
    value: number;
    onClick: () => void;
};

const Square = ({ value, onClick }: SquareProps) => {
    return (
        <button className={styles.square} onClick={onClick}>
            {value === null ? null : value === 0 ? <span className={styles.void}>&nbsp;</span> : value}
        </button>
    );
};

export {Square};
