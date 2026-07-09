import type { Metadata } from "next";
import { getSeo } from "../api/seo.api";

const ogLocaleMap: Record<string, string> = {
	ua: "uk_UA",
	en: "en_US",
	de: "de_DE",
};

export async function constructMetadata(locale: string): Promise<Metadata> {
	const seo = await getSeo(locale);
	const baseUrl = "https://be-live-coaching.com";

	const title = seo?.title || "Be Live Coaching";
	const description = seo?.description || "Default description";
	const image = seo?.ogImage || "/default-og.png";

	const canonicalUrl = `${baseUrl}/${locale}`;

	return {
		metadataBase: new URL(baseUrl),
		title,
		description,
		alternates: {
			canonical: canonicalUrl,
			languages: {
				uk: `${baseUrl}/ua`,
				en: `${baseUrl}/en`,
				de: `${baseUrl}/de`,
				"x-default": `${baseUrl}/en`,
			},
		},
		openGraph: {
			title,
			description,
			url: canonicalUrl,
			images: [{ url: image }],
			type: "website",

			locale: ogLocaleMap[locale] ?? "en_US",
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [image],
		},
		icons: {
			icon: "/favicon.ico",
		},
	};
}
