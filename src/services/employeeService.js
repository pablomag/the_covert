import http from "./httpService";
import { toast } from 'react-toastify';

import { mocklabApi, randomUserApi } from "../config.json";

export async function getEmployees() {

	try {
		
		return await http.get(`${mocklabApi}/employees`);
	} catch (error) {

		toast.error('Could not connect to the server');
		return [];
	}
}

export async function getEmployeeProfile(fullname) {

	try {

		const { data: employees } = await http.get(`${mocklabApi}/employees`);

		return employees.filter(employee => `${employee.name}+${employee.surname}` === fullname)[0];
	} catch (error) {

		toast.error('Could not connect to the server');
		return [];
	}
}

export async function getLatestComments(fullname) {

	try {
		/*
			Fullname was hardcoded to work temporarily with the limited fake API
			but I normally would just past the dynamic data to the backend
		*/
		fullname = (fullname === "Aaliyah+Myles") ? "/Aaliyah+Myles" : "";
		const { data } = await http.get(`${mocklabApi}/comments${fullname}`);

		return data;
	} catch (error) {

		toast.error('Could not connect to the server');
		return [];
	}
}

export async function createRandomEmployee() {

	try {
		
		return await http.get(randomUserApi);
	} catch (error) {

		toast.error('Could not connect to the server');
		return [];
	}
}
