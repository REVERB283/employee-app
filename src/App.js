import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import CreateEmployee from "./CreateEmployee";
import Home from "./Home";
import UpdateEmployee from "./UpdateEmployee";
import ViewEmployee from "./ViewEmployee";

function App() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
				<Link to={"/home"} className="navbar-brand">
					REDUX
				</Link>
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item active">
							<Link className="nav-link" to={"/home"}>
								Home
							</Link>
						</li>
						<li className="nav-item ">
							<Link className="nav-link" to={"/create-employee"}>
								Create
							</Link>
						</li>
					</ul>
				</div>
			</nav>

			<div className="container">
				<div className="row my-4">
					<div className="col-sm-12">
						<h1 className="text-center">REDUX Application</h1>
					</div>
					<Routes>
						<Route exact path="/" element={<Home />}></Route>
						<Route exact path="/home" element={<Home />}></Route>
						<Route path="/view-employee/:id" element={<ViewEmployee />}></Route>
						<Route path="/create-employee" element={<CreateEmployee />}></Route>
						<Route path="/update-employee/:id" element={<UpdateEmployee />}></Route>
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;
