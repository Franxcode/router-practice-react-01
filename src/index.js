import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Inicio from "./routes/Inicio";
import Blog from "./routes/Blog";
import Contacto from "./routes/Contacto";
import NotFound from "./routes/NotFound";
import Nosotros from "./routes/Nosotros";
import Civilizations from "./components/Civilizations";

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route index element={<Inicio />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/contacto" element={<Contacto />} />
				<Route path="/nosotros" element={<Nosotros />} />
				<Route path="/nosotros/:id" element={<Civilizations />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	</BrowserRouter>,
	document.getElementById("root")
);
