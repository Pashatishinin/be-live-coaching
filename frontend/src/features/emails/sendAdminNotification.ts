import { render } from "@react-email/render";
import { Resend } from "resend";
import AdminNotification from "./templates/AdminNotification";
import type { SendEmailData } from "./types/types";

export const sendAdminNotification = async (payload: SendEmailData) => {
	try {
		const resend = new Resend(process.env.RESEND_API_KEY);

		const html = await render(AdminNotification({ data: payload }));

		const { data, error } = await resend.emails.send({
			to: "tishyninpavlo@gmail.com",
			// to: "juliasolodiuk@gmail.com",
			from: "BLive Coaching <info@blivecoaching.com>",
			subject: `Новая заявка: ${payload.applicantName}`,
			// react: AdminNotification({ data: payload }),
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
