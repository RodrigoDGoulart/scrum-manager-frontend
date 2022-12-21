import { Campo } from "./components/Campo/campo";
import { Btn } from "./components/Btn/btn";
import styles from './App.module.scss';

export default function App() {
  return (
    <div>
      <Btn comBorda={true}>
        Teste botão
      </Btn>

      <Campo className={styles.inserir} placeholder='teste'>teste</Campo>
    </div>
  )
}