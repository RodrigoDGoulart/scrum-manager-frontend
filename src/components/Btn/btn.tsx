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
            [`${props.className}`]: true,
            [styles.borda]: borda,
            [styles.semBorda]: !borda
        })}
        onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}