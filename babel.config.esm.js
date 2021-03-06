const pkg = require("./package.json");

module.exports = api => {
	const isTest = api.env("test"); //jest

	return {
		presets: [
			[
				"babel-preset-packez",
				{
					modules: false,
					loose: true,
					runtimeOptions: {
						helpers: false,
					},
				},
			],
		],
		plugins: [
			[
				"search-and-replace",
				{
					rules: [
						{
							search: "%VERSION%",
							replace: pkg.version,
						},
					],
				},
			],
		],
	};
};
