import styles from './Menu.module.scss';
import { Btn, MenuBtn } from "../Btn/btn"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

export default function Menu () {
    const projetos = ['projeto 1', 'projeto 2', 'projeto 3 '];

    const [projSelecionado, setProjSelecionado] = useState('');

    return(
        <div className={styles.container}>
            <div className={styles.projetos}>
                {projetos.map(projeto => (
                    <MenuBtn
                    comBorda={projSelecionado === projeto}
                    onClick={() => setProjSelecionado(projeto)}>
                        {projeto}
                    </MenuBtn>
                ))}
                <Btn comBorda={false}>
                    <FontAwesomeIcon className={styles.addIcon} icon={faPlus}/>    
                </Btn>
            </div>
        </div>
    )
}