/*USE STATE

import Contador from "./exercicio-useState/Contador";

export default function App() {
  return (
    <div>
      <h1>Teste Contador</h1>
      <Contador />
    </div>
  );
}*/



/* USE EFFECT

import Contador from "./exercicio-useEffect/ContadorTitulo";

export default function App() {
  return (
    <div>
      <h1>Teste Contador</h1>
      <Contador />
    </div>
  );
}*/





import { ThemeProvider } from "./exercicio-useContext/ThemeContext";
import ThemeSwitcher from "./exercicio-useContext/ThemeSwitcher";

export default function AppContext() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );

}

/*PAGINAS

import AppRouter from "./exercicio-router/AppRouter";

export default function App() {
  return (
    <div>
      <h1>Teste da recuperacao</h1>
      <AppRouter />
    </div>
  );
}*/

