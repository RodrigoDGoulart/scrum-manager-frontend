import { HTMLAttributes } from 'react';
import styles from './Campo.module.scss';
import classNames from 'classnames';

interface Props extends HTMLAttributes<HTMLInputElement> {
    type?: 'text' | 'email' | 'password' | undefined
}

export const Campo = (props :Props) => {
    let type = props.type === undefined ? 'text' : props.type

    return(
        <label className={classNames({
            [styles.container]: true,
            [`${props.className}`]: true
        })}>
            <p className={styles.rotulo}>{props.children}</p>
            <input
            className={styles.campo}
            placeholder={props.placeholder}
            type={type}
            />
        </label>
    )
}   