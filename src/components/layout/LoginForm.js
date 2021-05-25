import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import FormError from "./FormError";
import { BASE_URL, TOKEN_PATH } from "../../constants/Api";
import AuthContext from "../context/AuthContext";
import Footer from "../../components/layout/Footer"

const url = BASE_URL + TOKEN_PATH;


export default function LoginForm() {

	const { register, handleSubmit, errors } = useForm();
	const [submitting, setSubmitting] = useState(false);
	const [loginError, setLoginError] = useState(null);
	const history = useHistory();
	const [, setAuth] = useContext(AuthContext);

	async function onSubmit(data) {
		setSubmitting(true);
		setLoginError(null);

		try {
			const response = await axios.post(url, data);
			console.log("response", response.data);
			setAuth(response.data);
			history.push("/admin");
		} catch (error) {
			console.log("error", error);
			setLoginError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<>
		<div className="form-container">
		<form className="login-form" onSubmit={handleSubmit(onSubmit)}>
				{loginError && <FormError>Wrong username or password</FormError>}
		
	
						<input name="username" placeholder="Username" ref={register({ required: true, minLength: 3 })} />
						{errors.username && <span className="error">Need at least 3 characters</span>}


						<input name="password" placeholder="Password" type="password" ref={register({ required: true })}  />
						{errors.password && <span className="error"></span>}

					<button>{submitting ? "Loggin in..." : "Login"}</button>
			</form>
		</div>
		<Footer />
		</>
	);
}
