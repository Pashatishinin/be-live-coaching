import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

// console.log("Токен загружен:", !!process.env.SANITY_WRITE_TOKEN);
// Этот клиент имеет права на запись

// const sanityToken =
// 	process.env.SANITY_WRITE_TOKEN || (globalThis as any).env?.SANITY_WRITE_TOKEN;

// export const writeClient = createClient({
// 	projectId,
// 	dataset,
// 	apiVersion,
// 	useCdn: false,
// 	token: sanityToken,
// 	stega: false,
// 	perspective: "raw",
// });

export function getWriteClient() {
	const sanityToken = process.env.SANITY_WRITE_TOKEN;

	if (!sanityToken) {
		throw new Error("SANITY_WRITE_TOKEN отсутствует в рантайме");
	}

	console.log(
		"DEBUG config:",
		JSON.stringify({
			projectId,
			dataset,
			apiVersion,
			tokenStart: sanityToken.slice(0, 4),
			tokenEnd: sanityToken.slice(-4),
			tokenLength: sanityToken.length,
		}),
	);

	return createClient({
		projectId,
		dataset,
		apiVersion,
		useCdn: false,
		token: sanityToken,
		stega: false,
		perspective: "raw",
		withCredentials: false,
		ignoreBrowserTokenWarning: true,
	});
}
