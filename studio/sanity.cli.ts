import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
	api: {
		projectId: "fsymw50k",
		dataset: "production",
	},
	deployment: {
		appId: "me7jtbjxht9mf3d4hvg8ac9p",
		autoUpdates: true,
	},
});
