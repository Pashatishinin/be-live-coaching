self.__MIDDLEWARE_MATCHERS = [
	{
		regexp:
			"^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!api|_next|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*))(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
		originalSource:
			"/((?!api|_next|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
	},
];
self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB();
