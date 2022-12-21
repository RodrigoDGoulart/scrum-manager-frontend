import { HTMLAttributes, useState } from 'react';
import styles from './Campo.module.scss';
import classNames from 'classnames';
import ReactInputMask from 'react-input-mask';

interface Props extends HTMLAttributes<HTMLInputElement> {
    type?: 'text' | 'email' | 'password' | 'date' | undefined
    mask?: string
    handleValor?: Function
}

export const Campo = (props :Props) => {
    const [valor, setValor] = useState('')

    let handleCampo = (e:any) => {
        setValor(e.target.value);
        if (props.type === 'date') {
            let valorArray = valor.split('/');
            console.log(valorArray)
            let data = new Date(Number(valorArray[2]), (Number(valorArray[1]) - 1), Number(valorArray[0]))
            if (props.handleValor) props.handleValor(data);
        } else {
            if (props.handleValor) props.handleValor(valor);
        }
    }

    let type;
    switch(props.type) {
        case 'date':
        case undefined:
            type = 'text';
            break;
        default:
            type = props.type
    }

    return(
            <label className={classNames({
                [styles.container]: true,
                [`${props.className}`]: true
            })}>
                <p className={styles.rotulo}>{props.children}</p>
                <ReactInputMask
                mask={props.mask === undefined ? '' : props.mask}
                placeholder={props.placeholder}
                type={type}
                onChange={handleCampo}
                value={valor}
                className={classNames({
                    [styles.campo]: true,
                    [styles.semValor]: valor === ''
                })}
                />
            </label>
    )
}