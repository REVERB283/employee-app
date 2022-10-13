import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { employeeDeleted } from "./employeeSlice";

export default function Home(props) {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const employee = useSelector((state) => state.employee);

	const deleteEmployee = (empId) => {
		dispatch(employeeDeleted(Number(empId)));
	};

	return (
		<>
			<div className="row my-4">
				<div className="col-sm-12">
					<h3>Employee Details</h3>
					<hr />
				</div>
				<div className="col-sm-12 my-2">
					<table className="table table-striped table-hover table-responsive">
						<tbody>
							<tr>
								<th>Employee ID</th>
								<th>Name</th>
								<th>Department</th>
								<th>Email</th>
								<th>Actions</th>
							</tr>
							{employee.map((emp, i) => {
								return (
									<tr key={i}>
										<td>{emp.id}</td>
										<td>{emp.name}</td>
										<td>{emp.department}</td>
										<td>{emp.email}</td>
										<td>
											<button className="btn btn-primary btn-sm px-3 mx-1" onClick={() => navigate(`/view-employee/${emp.id}`)}>
												View
											</button>
											<button className="btn btn-info btn-sm px-3 mx-1" onClick={() => navigate(`/update-employee/${emp.id}`)}>
												Update
											</button>
											<button className="btn btn-danger btn-sm  px-3 mx-1" onClick={() => deleteEmployee(emp.id)}>
												Delete
											</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
