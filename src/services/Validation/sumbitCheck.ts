import { toast } from "react-toastify";

interface SubmitForm{
	username?: string;
	email?: string;
	password?: string;
};


export const submitCheck = (form: SubmitForm) => {
	const sumbitPromise = new Promise<any>((resolve, reject) => {
		validateEmail(form.email) ? resolve(form.email) : reject("Invalid email");
	});

	return sumbitPromise;
	
};

const validateEmail = (email?: string) => {
	const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return email?.match(regexEmail) ? true : false;
};

export const alertToast = (msg: string) => {
	toast.error(msg, {
				position: "top-center", autoClose: 5000, hideProgressBar: false,
				closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
};