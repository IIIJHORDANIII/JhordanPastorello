import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Garantir que a página comece no topo ao carregar
window.scrollTo(0, 0);

createRoot(document.getElementById("root")!).render(<App />);
