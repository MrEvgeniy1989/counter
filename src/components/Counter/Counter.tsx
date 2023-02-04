import React, {useState} from 'react';
import Count from './Count/Count';
import Button from '../Button/Button';
import styles from './Counter.module.css'


const Counter: React.FC = () => {

    const maxValue = 5;
    const minValue = 0;

    const [count, setCount] = useState<number>(minValue);

    const onClickIncrementCount = () => {
        setCount(count + 1);
    }

    const onClickResetCount = () => {
        setCount(minValue);
    }

    const onClickDecrementCount = () => {
        setCount(count - 1);
    }

    return (
        <div className={styles.app}>
            <div className={styles.counter}>
                <Count count={count} maxValue={maxValue}/>
                <div className={styles['button-container']}>
                    <Button onClick={onClickIncrementCount} disabled={count === maxValue}>Inc</Button>
                    <Button onClick={onClickDecrementCount} disabled={count <= 0}>Dec</Button>
                    <Button xType={'secondary'} onClick={onClickResetCount} disabled={count <= 0}>Reset</Button>
                </div>
            </div>
            <div className={styles.settingsFull}>
                <div className={styles.counterSettings}>
                    <div className={styles.field}>
                        <label htmlFor="s">Start value:</label>
                        <input type="number" id={"s"}/>
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="m">Max value:</label>
                        <input type="number" id={"m"}/>
                    </div>
                </div>
                <div className={styles['set-container']}>
                    <Button className={styles.setButton} onClick={onClickIncrementCount} disabled={count === maxValue}>Set</Button>
                </div>
            </div>
        </div>
    );
};

export default Counter;