import { backendBaseUrl } from "@/constants/variables";
import axios from "axios";

const http = axios.create({
	baseURL: backendBaseUrl,
	headers: {
		"Content-Type": "application/json",
	},
});

// ----------------------------------------------------------------
//                     Default Axios with Token
// ----------------------------------------------------------------
http.interceptors.request.use(
	async function (Config: any) {
		const config = Config;
		let token = null;
		if (typeof window !== "undefined" && localStorage)
			token = localStorage?.getItem("token");
		try {
			if (token) {
				config.headers["x-auth-token"] = `${token}`;
			}
			return config;
		} catch (err) {
			return config;
		}
	},
	function (error: Error) {
		return Promise.reject(error);
	}
);

export default http;
