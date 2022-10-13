import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ViewEmployee() {
	const { id } = useParams();
	const employee = useSelector((state) => state.employee);

	const [viewEmployeeState, setViewEmployeeState] = React.useState({ e_name: "", e_id: "", e_email: "", e_department: "" });

	useEffect(() => {
		let filteredEmployee = employee.filter((emp) => {
			return emp.id === Number(id) ? emp : null;
		});
		if (filteredEmployee.length > 0) {
			setViewEmployeeState({
				e_name: filteredEmployee[0].name,
				e_id: filteredEmployee[0].id,
				e_department: filteredEmployee[0].department,
				e_email: filteredEmployee[0].email,
			});
		}
	}, [id, employee]);

	return (
		<>
			<div className="row my-4">
				<div className="col-sm-12">
					<h3>View Employee Details</h3>
					<hr />
				</div>

				<div className="col-sm-4 offset-sm-2 my-2">
					<div className="form-group">
						<label htmlFor="empName">Employee Name</label>
						<input className="form-control" type="text" name="empName" id="empNameView" placeholder="Name" value={viewEmployeeState.e_name} disabled />
					</div>
				</div>
				<div className="col-sm-4 my-2">
					<div className="form-group">
						<label htmlFor="empId">Employee ID</label>
						<input className="form-control" type="number" name="empId" id="empIdView" placeholder="ID" value={viewEmployeeState.e_id} disabled />
					</div>
				</div>
				<div className="col-sm-4 offset-sm-2 my-2">
					<div className="form-group">
						<label htmlFor="empMail">Employee Mail</label>
						<input className="form-control" type="email" name="empMail" id="empMailView" placeholder="Mail" value={viewEmployeeState.e_email} disabled />
					</div>
				</div>
				<div className="col-sm-4 my-2">
					<div className="form-group">
						<label htmlFor="empDepartment">Employee Department</label>
						<input className="form-control" type="text" name="empDepartment" id="empDepartmentView" placeholder="Department" value={viewEmployeeState.e_department} disabled />
					</div>
				</div>
			</div>
		</>
	);
}
