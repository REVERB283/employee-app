import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import App from "./App";
import "./index.css";
import Store from "./Store";

const rootElement = document.getElementById("root");
ReactDOM.render(
	<BrowserRouter>
		<Provider store={Store}>
			<App />
		</Provider>
	</BrowserRouter>,
	rootElement
);
