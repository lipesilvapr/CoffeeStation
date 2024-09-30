import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App/App.tsx";
import { CartProvider } from "./context/CarrinhoContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);
