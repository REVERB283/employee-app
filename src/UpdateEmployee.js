import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { employeeUpdated } from "./employeeSlice";

export default function UpdateEmployee() {
	const { id } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const employee = useSelector((state) => state.employee);

	const [updateEmployeeState, setUpdateEmployeeState] = React.useState({ e_name: "", e_id: "", e_email: "", e_department: "" });

	useEffect(() => {
		let filteredEmployee = employee.filter((emp) => {
			return emp.id === Number(id) ? emp : null;
		});
		if (filteredEmployee.length > 0) {
			setUpdateEmployeeState({
				e_name: filteredEmployee[0].name,
				e_id: filteredEmployee[0].id,
				e_department: filteredEmployee[0].department,
				e_email: filteredEmployee[0].email,
			});
		}
	}, [id, employee]);

	const handleUpdateEmployee = (event) => {
		event.preventDefault();

		const emp = {
			id: Number(updateEmployeeState.e_id),
			name: updateEmployeeState.e_name,
			department: updateEmployeeState.e_department,
			email: updateEmployeeState.e_email,
		};
		dispatch(employeeUpdated(emp));

		navigate("/home");
	};

	return (
		<>
			<form onSubmit={handleUpdateEmployee}>
				<div className="row my-4">
					<div className="col-sm-12">
						<h3>Update Employee Details</h3>
						<hr />
					</div>

					<div className="col-sm-4 offset-sm-2 my-2">
						<div className="form-group">
							<label htmlFor="empName">Employee Name</label>
							<input
								className="form-control"
								type="text"
								name="empName"
								placeholder="Name"
								value={updateEmployeeState.e_name}
								onChange={(e) => setUpdateEmployeeState({ ...updateEmployeeState, e_name: e.target.value })}
							/>
						</div>
					</div>
					<div className="col-sm-4 my-2">
						<div className="form-group">
							<label htmlFor="empId">Employee ID</label>
							<input className="form-control" type="number" name="empId" placeholder="ID" value={updateEmployeeState.e_id} disabled />
						</div>
					</div>
					<div className="col-sm-4 offset-sm-2 my-2">
						<div className="form-group">
							<label htmlFor="empMail">Employee Mail</label>
							<input
								className="form-control"
								type="email"
								name="empMail"
								placeholder="Mail"
								value={updateEmployeeState.e_email}
								onChange={(e) => setUpdateEmployeeState({ ...updateEmployeeState, e_email: e.target.value })}
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
								placeholder="Department"
								value={updateEmployeeState.e_department}
								onChange={(e) => setUpdateEmployeeState({ ...updateEmployeeState, e_department: e.target.value })}
							/>
						</div>
					</div>
					<div className="col-sm-12 d-flex justify-content-center my-3">
						<button className="btn btn-info px-5" type="submit">
							Update
						</button>
					</div>
				</div>
			</form>
		</>
	);
}
