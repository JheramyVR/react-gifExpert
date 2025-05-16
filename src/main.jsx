import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GifExpertApp } from "./GifExpertApp";
import "./styles.css";

const rootHTML = document.getElementById("root");
const rootReact = createRoot(rootHTML);

rootReact.render(
    <StrictMode>
        <GifExpertApp />
    </StrictMode>
);
