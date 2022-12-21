import { Campo } from "./components/Campo/campo";
import { Btn } from "./components/Btn/btn";
import styles from './App.module.scss';

export default function App() {



  return (
    <div>
      <Btn comBorda={true}>
        Teste botão
      </Btn>

      <Campo className={styles.inserir} placeholder='placeholder' type="date" mask="99/99/9999" handleValor={(data: Date) => {
        console.log(`data: ${data}`)
      }}>
        Rótulo
      </Campo>
      <Campo className={styles.inserir} placeholder='placeholder'>Rótulo</Campo>
    </div>
  )
}