import React from "react";
import ReactDOMClient from "react-dom/client";
import { PageScreen } from "./screens/PageScreen";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<PageScreen />);
