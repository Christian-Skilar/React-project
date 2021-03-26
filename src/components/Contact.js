import { useForm } from "react-hook-form";
import Heading from "../components/layout/Heading";

export default  function Contact() {
	const { register, handleSubmit, errors } = useForm();

	function onSubmit(data) {
		console.log(data);
	}

	console.log(errors);

	return (
        <>
        <Heading heading="Contact Page" />

		<form onSubmit={handleSubmit(onSubmit)}>
			<input className="contact" placeholder="First Name" name="firstName" type="custom" ref={register({ required: true, minLength: 3 })} />
            {errors.firstName && <span className="error">Need at least 3 characters</span>}

			<input className="contact" placeholder="Last Name" name="lastName" type="custom" ref={register({ required: true, minLength: 4 })} />
            {errors.lastName && <span className="error">Need at least 4 characters</span>}

			<input className="contact" placeholder="Email" name="email" type="email" ref={register({ required: true,  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
			{errors.email && <span className="error">invalid email</span>}

			<select name="subject" id="subject" ref={register({ required: true })} >
				<option value="" >Subject</option>
				<option value="General" >General</option>
				<option value="Return" >Return</option>
				<option value="Important" >IMPORTANT</option>
			</select>
			{errors.subject && <span className="error">Pleas choose an option from the dropdown</span>}

            <textarea placeholder="Message" id="txtid" name="message" rows="10" cols="50" maxLength="200" ref={register({ required: true, minLength: 10 })} />
            {errors.message && <span className="error">Need at least 10 characters</span>}

			<button>Send</button>
		</form>

        </>
	);
}