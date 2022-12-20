import { HTMLAttributes } from 'react';
import styles from './Btn.module.scss';
import classNames from 'classnames';

interface Props extends HTMLAttributes<HTMLButtonElement>{}

export const Btn = (props: Props) => {
    return(
        <button className={classNames({
            [styles.btn]: true,
            [`${props.className}`]: true
        })}>
            Botão teste
        </button>
    )
}