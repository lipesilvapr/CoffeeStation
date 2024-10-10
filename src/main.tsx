import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App/App.tsx";
import { CartProvider } from "./context/CarrinhoContext.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pagamento from "./pages/Pagamento/Pagamento.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },

  {
    path: "/pagamento",
    element: <Pagamento/>
  }
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router}/>
    </CartProvider>
  </StrictMode>
);
