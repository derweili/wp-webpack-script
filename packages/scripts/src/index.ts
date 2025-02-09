// Expose our Nodejs APIs for applications not using as CLI
// and for using with tools like jest

// Expose all needed config functions, classes and interfaces
export {
	typelang,
	getBabelPresets,
	overrideBabelPresetOptions,
	getDefaultBabelPresetOptions,
} from './config/babelConfig';

export { CreateWebpackConfig, WpackConfig } from './config/CreateWebpackConfig';

export {
	WebpackConfigHelper,
	WebpackConfigHelperConfig,
} from './config/WebpackConfigHelper';

export {
	getProjectAndServerConfig,
	getProjectConfig,
	getServerConfig,
	validateProjectConfig,
	validateServerConfig,
} from './config/getProjectAndServerConfig';

export {
	BannerConfig,
	EntryConfig,
	FileConfig,
	ProjectConfig,
	projectConfigDefault,
	webpackLoaderOptionsOverride,
	webpackOptionsOverrideFunction,
} from './config/project.config.default';

export {
	ServerConfig,
	serverConfigDefault,
} from './config/server.config.default';

export {
	getFileLoaderForJsAndStyleAssets,
	getFileLoaderOptions,
	issuerForNonStyleFiles,
	issuerForStyleFiles,
	issuerForJsTsFiles,
	issuerForNonJsTsFiles,
	getResolvedLoader,
	babelLoader,
	cssLoader,
	fileLoader,
	lessLoader,
	getStyleLoaderUses,
	postCssLoader,
	sassLoader,
} from './config/loaderHelpers';

// Expose all needed script classes
export { Build } from './scripts/Build';

export { Server } from './scripts/Server';

export { Bootstrap, ProjectDependencies } from './scripts/Bootstrap';
