import Contador from "./exercicio-useState/Contador";
import ContadorTitulo from "./exercicio-useEffect/ContadorTitulo";
import { ThemeProvider } from "./exercicio-useContext/ThemeContext";
import ThemeSwitcher from "./exercicio-useContext/ThemeSwitcher";
import AppRouter from "./exercicio-router/AppRouter";

export default function App() {
  const cardStyle: React.CSSProperties = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    marginBottom: "20px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const titleStyle: React.CSSProperties = {
    textAlign: "center",
    marginBottom: "10px",
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Teste da Recuperação - Todos os Componentes
      </h1>

      <section style={cardStyle}>
        <h2 style={titleStyle}>Contador com useState</h2>
        <Contador />
      </section>

      <section style={cardStyle}>
        <h2 style={titleStyle}>Contador com useEffect (Título)</h2>
        <ContadorTitulo />
      </section>

      <section style={cardStyle}>
        <h2 style={titleStyle}>Theme Context</h2>
        <ThemeProvider>
          <ThemeSwitcher />
        </ThemeProvider>
      </section>

      <section style={cardStyle}>
        <h2 style={titleStyle}>React Router</h2>
        <AppRouter />
      </section>
    </div>
  );
}


/* 
   CASO QUEIRA TESTAR CADA EXERCÍCIO SEPARADAMENTE, DESCOMENTE O CÓDIGO CORRESPONDENTE ABAIXO E COMENTE O CÓDIGO ACIMA.
 */

/* 
   USE STATE
 */
 /*
import Contador from "./exercicio-useState/Contador";

export default function App() {
  return (
    <div>
      <h1>Teste Contador</h1>
      <Contador />
    </div>
  );
} 
*/

/* 
   USE EFFECT
 */
 /*
import Contador from "./exercicio-useEffect/ContadorTitulo";

export default function App() {
  return (
    <div>
      <h1>Teste Contador</h1>
      <Contador />
    </div>
  );
} 
*/

/* 
   USE CONTEXT
 */
 /*
import { ThemeProvider } from "./exercicio-useContext/ThemeContext";
import ThemeSwitcher from "./exercicio-useContext/ThemeSwitcher";

export default function AppContext() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );
} 
*/

/* 
   ROUTER
 */
 /*
import AppRouter from "./exercicio-router/AppRouter";

export default function App() {
  return (
    <div>
      <h1>Teste da recuperacao</h1>
      <AppRouter />
    </div>
  );
} 
*/
