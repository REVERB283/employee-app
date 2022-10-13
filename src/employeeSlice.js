import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{
		id: 1,
		name: "Harshit",
		department: "Angular",
		email: "harshit.anand@rapipay.com",
	},
	{
		id: 31,
		name: "Aiwan",
		department: "Angular",
		email: "aiwan.maswood@rapipay.com",
	},
	{
		id: 23,
		name: "Atrij",
		department: "Node",
		email: "atrij.sharma@rapipay.com",
	},
	{
		id: 8,
		name: "Rachit",
		department: "JAVA",
		email: "rachit.baranwal@rapipay.com",
	},
];

const employeeSlice = createSlice({
	name: "employee",
	initialState,
	reducers: {
		employeeCreated(state, action) {
			state.push(action.payload);
		},
		employeeUpdated(state, action) {
			const { id, name, department, email } = action.payload;
			const existingEmp = state.find((emp) => emp.id === id);

			if (existingEmp) {
				existingEmp.email = email;
				existingEmp.name = name;
				existingEmp.department = department;
			}
		},
		employeeDeleted(state, action) {
			const id = action.payload;
			const existingEmp = state.find((emp) => emp.id === id);

			if (existingEmp) {
				return state.filter((emp) => emp.id !== id);
			}
		},
	},
});

export const { employeeCreated } = employeeSlice.actions;
export const { employeeUpdated } = employeeSlice.actions;
export const { employeeDeleted } = employeeSlice.actions;

export default employeeSlice.reducer;
