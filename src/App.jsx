import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importar los componentes de las diferentes páginas
import Home from "./pages/Home";
import Contactos from "./pages/Contactos";
import ErrorPage from "./pages/ErrorPage";  // Importa la página de error

// Importar el componente NavBar para la navegación
import NavBar from "./NavBar";

function App() {
  return (
    <Router>
      <div>
        {/* Agregar el NavBar aquí */}
        <NavBar />

        {/* Configuración de las rutas */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Ruta principal */}
          <Route path="/contactos" element={<Contactos />} /> {/* Ruta para contactos */}
          <Route path="*" element={<ErrorPage />} /> {/* Ruta para manejar errores 404 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
