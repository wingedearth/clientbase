export const NODE_ENV = process.env.NODE_ENV || 'development';
export const isProd = process.env.NODE_ENV === 'production';
export const APP_VERSION = process.env.npm_package_version || process.env.APP_VERSION;
export const IS_DEPLOYED = process.env.IS_DEPLOYED || false;
export const IS_LOCAL = !IS_DEPLOYED;
