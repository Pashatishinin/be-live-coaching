import { render } from "@react-email/render";
import { Resend } from "resend";
import ApplicationNotification from "./templates/ApplicationNotification";
import type { SendEmailData } from "./types/types";

export const sendApplicantConfirmation = async (payload: SendEmailData) => {
	try {
		const resend = new Resend(process.env.RESEND_API_KEY);

		const html = await render(ApplicationNotification({ data: payload }));

		const { data, error } = await resend.emails.send({
			to: payload.applicantEmail,
			from: "BLive Coaching <info@blivecoaching.com>",
			subject: "Ми отримали вашу заявку! | BLive Coaching",
			html,
		});

		if (error) {
			console.error("Resend API Error:", error);
		} else {
			console.log("Email sent successfully:", data);
		}
	} catch (err) {
		console.error("Unexpected error in sendEmail:", err);
	}
};
