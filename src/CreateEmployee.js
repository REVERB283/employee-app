import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { employeeCreated } from "./employeeSlice";

export default function CreateEmployee() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const employee = useSelector((state) => state.employee);

	const [createEmployeeState, setCreateEmployeeState] = React.useState({ e_name: "", e_id: "", e_email: "", e_department: "" });

	const handleCreateEmployee = (event) => {
		event.preventDefault();

		const filteredEmployee = employee.filter((emp) => {
			return emp.id === Number(createEmployeeState.e_id) ? emp : null;
		});

		if (filteredEmployee.length === 0 && createEmployeeState.e_id !== "") {
			const newEmployee = {
				id: Number(createEmployeeState.e_id),
				name: createEmployeeState.e_name,
				department: createEmployeeState.e_department,
				email: createEmployeeState.e_email,
			};
			dispatch(employeeCreated(newEmployee));
		}

		navigate("/home");
	};

	return (
		<>
			<div className="container">
				<form onSubmit={handleCreateEmployee}>
					<div className="row my-4">
						<div className="col-sm-12">
							<h3>Add Employee</h3>
							{/* <span>
								<button className="btn btn-outline-primary px-5">Back</button>
							</span> */}
							<hr />
						</div>
						<div className="col-sm-4 offset-sm-2 my-2">
							<div className="form-group">
								<label htmlFor="empName">Employee Name</label>
								<input
									className="form-control"
									type="text"
									name="empName"
									id="empName"
									placeholder="Name"
									value={createEmployeeState.e_name}
									onChange={(e) => setCreateEmployeeState({ ...createEmployeeState, e_name: e.target.value })}
								/>
							</div>
						</div>
						<div className="col-sm-4 my-2">
							<div className="form-group">
								<label htmlFor="empId">Employee ID</label>
								<input
									className="form-control"
									type="number"
									name="empId"
									id="empId"
									placeholder="ID"
									value={createEmployeeState.e_id}
									onChange={(e) => setCreateEmployeeState({ ...createEmployeeState, e_id: e.target.value })}
								/>
							</div>
						</div>
						<div className="col-sm-4 offset-sm-2 my-2">
							<div className="form-group">
								<label htmlFor="empMail">Employee Mail</label>
								<input
									className="form-control"
									type="email"
									name="empMail"
									id="empMail"
									placeholder="Mail"
									value={createEmployeeState.e_email}
									onChange={(e) => setCreateEmployeeState({ ...createEmployeeState, e_email: e.target.value })}
								/>
							</div>
						</div>
						<div className="col-sm-4 my-2">
							<div className="form-group">
								<label htmlFor="empDepartment">Employee Department</label>
								<input
									className="form-control"
									type="text"
									name="empDepartment"
									id="empDepartment"
									placeholder="Department"
									value={createEmployeeState.e_department}
									onChange={(e) => setCreateEmployeeState({ ...createEmployeeState, e_department: e.target.value })}
								/>
							</div>
						</div>
						<div className="col-sm-12 d-flex justify-content-center my-3">
							<button className="btn btn-success px-5" type="submit">
								Add
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}
