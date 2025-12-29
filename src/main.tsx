import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { useTheme } from "./hooks/use-theme";

// Componente wrapper para inicializar o tema
const AppWithTheme = () => {
  useTheme(); // Inicializa o sistema de tema
  return <App />;
};

// Garantir que a página comece no topo ao carregar
window.scrollTo(0, 0);

createRoot(document.getElementById("root")!).render(<AppWithTheme />);
