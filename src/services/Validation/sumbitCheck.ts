import { toast } from "react-toastify";


export const alertToast = (msg: string) => {
	toast.error(msg, {
				position: "top-center", autoClose: 5000, hideProgressBar: false,
				closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
};