import { Campo } from "./components/Campo/campo";
import { Btn, MenuBtn } from "./components/Btn/btn";
import styles from './App.module.scss';
import { Prioridade } from "./components/Prioridade/prioridade";
import { Item, ItemComBtn } from "./components/Item/item";
import Menu from "./components/Menu/menu";
import AppRouter from "./routes";

export default function App() {

  return (
    <div>
      <AppRouter />
    </div>
  )
}