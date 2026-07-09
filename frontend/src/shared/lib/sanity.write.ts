import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

export function getWriteClient() {
	const sanityToken = process.env.SANITY_WRITE_TOKEN;

	if (!sanityToken) {
		throw new Error("SANITY_WRITE_TOKEN отсутствует в рантайме");
	}

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
