import { HTMLAttributes } from 'react';
import styles from './Prioridade.module.scss';

interface Props extends HTMLAttributes<HTMLElement> {
    nivel: 'high' | 'med' | 'low'
}

export const Prioridade = (props: Props) => {
    return(
        <span className={`${styles.container} ${styles[props.nivel]} ${props.className}`}>
            {props.children}
        </span>
    )
}