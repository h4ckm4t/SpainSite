export const ASSET_VERSION = import.meta.env.VITE_ASSET_VERSION || '1';

export const withAssetVersion = (url) => `${url}?v=${encodeURIComponent(ASSET_VERSION)}`;

