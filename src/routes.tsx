import Menu from "./components/Menu/menu";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export default function AppRouter() {
    return (
        <main className='container'>
            <Menu />
            <div className='content'>
                <Router>

                    <Routes>
                        <Route index element={<p>home</p>} />
                        <Route path='/novo-projeto' element={<p>Pagina novo projeto</p>} />
                        <Route path='/projeto/:id' element={<p>Página do projeto</p>} />
                    </Routes>
                </Router>
            </div>
        </main>
    )
}