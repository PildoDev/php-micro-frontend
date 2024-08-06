import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import PopUpModule from "./assets/modulos/pop-up.tsx";
// import "./index.css";
// Obtener la variable de entorno
const env = import.meta.env.VITE_APP_ENV;

// Elegir el elemento del DOM según el entorno
const rootElementId = env === "production" ? "react-content" : "root";
const root = ReactDOM.createRoot(
    document.getElementById(rootElementId) as HTMLElement
);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

const popup = ReactDOM.createRoot(document.getElementById("alm-pop-up") as HTMLElement);

popup.render(
    <React.StrictMode>
        <PopUpModule message={""} />
    </React.StrictMode>
);

const rootElement = document.getElementById("alm-pop-up") as HTMLElement;
if (rootElement) {
    // Busca el elemento interno con el data-message
    const hiddenInput = rootElement.querySelector("#dialogMessage") as HTMLInputElement;
    const message = hiddenInput ? hiddenInput.getAttribute("data-message") || "" : "";
    const popup = ReactDOM.createRoot(rootElement);
    popup.render(
        <React.StrictMode>
            <PopUpModule message={message} />
        </React.StrictMode>
    );
}
