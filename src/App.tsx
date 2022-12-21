import { Campo } from "./components/Campo/campo";
import { Btn } from "./components/Btn/btn";
import styles from './App.module.scss';
import { Prioridade } from "./components/Prioridade/prioridade";

export default function App() {

  return (
    <div>
      <Btn>Teste</Btn>

      <Campo className={styles.inserir} placeholder='placeholder' type="date" mask="99/99/9999" handleValor={(data: Date) => {
        console.log(`data: ${data}`)
      }}>
        Rótulo
      </Campo>
      <Campo className={styles.inserir} placeholder='placeholder'>Rótulo</Campo>

      <Prioridade nivel="high">Teste</Prioridade>
      <Prioridade nivel="med">Teste</Prioridade>
      <Prioridade nivel="low">Teste</Prioridade>
    </div>
  )
}