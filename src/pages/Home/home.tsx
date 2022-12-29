import styles from './Home.module.scss';
import AvisoBG from '../../assets/aviso-background.png';
import { Btn } from '../../components/Btn/btn';
import { useNavigate } from 'react-router-dom';

export default function Home () {

  const navigate = useNavigate()
  
    return(
      <div 
      style={{backgroundImage: `url(${AvisoBG})`}}
      className={styles.container}>
        <h1>Selecione um projeto ao lado</h1>
        <h1>... ou crie um novo projeto</h1>
        <Btn
        className={styles.btn}
        onClick={() => navigate('/novo-projeto')}>Novo projeto</Btn>
      </div>
    )
}