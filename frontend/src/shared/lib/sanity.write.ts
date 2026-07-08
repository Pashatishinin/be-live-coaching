import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

// console.log("Токен загружен:", !!process.env.SANITY_WRITE_TOKEN);
// Этот клиент имеет права на запись

const sanityToken =
	process.env.SANITY_WRITE_TOKEN || (globalThis as any).env?.SANITY_WRITE_TOKEN;

export const writeClient = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: false,
	token: sanityToken,
	stega: false,
	perspective: "raw",
});
