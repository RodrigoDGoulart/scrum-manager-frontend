import { HTMLAttributes } from 'react';
import styles from './Btn.module.scss';
import classNames from 'classnames';

interface Props extends HTMLAttributes<HTMLButtonElement>{
    comBorda?: boolean
}

export const Btn = (props: Props) => {

    let borda = props.comBorda !== undefined ? props.comBorda : true;
    
    return(
        <button 
        className={classNames({
            [styles.btn]: true,
            [styles.borda]: borda,
            [styles.semBorda]: !borda,
            [`${props.className}`]: true
        })}
        onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export const MenuBtn = (props: Props) => {

    let borda = props.comBorda !== undefined ? props.comBorda : false;

    return(
        <button className={classNames({
            [styles.btn]: true,
            [styles.menuBtn]: true
        })}
        onClick={props.onClick}
        >
            <span className={classNames({
                [styles.menuBorda]: true,
                [styles.borda]: borda,
                [styles.semBorda]: !borda,
            })}>
                <span className={classNames({
                    [styles.foto]: true,
                })}>
                    P
                </span>
            </span>
            <span className={classNames({
                [styles.titulo]: props.children
            })}>
                {props.children}
            </span>
        </button>
    )
}