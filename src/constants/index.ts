export const APP_CONFIG = {
  name: 'Fitmachi',
  version: '1.0.0',
  tagline: 'Vera Level Da!',
};

export const API_CONFIG = {
  BASE_URL: __DEV__
    ? 'http://localhost:3000/api/v1'
    : 'https://api.fitmachi.com/api/v1',
  TIMEOUT: 10000,
};

export const STORAGE_KEYS = {
  AUTH_TOKEN: '@fitmachi/auth_token',
  REFRESH_TOKEN: '@fitmachi/refresh_token',
  USER_DATA: '@fitmachi/user_data',
  ONBOARDING_DONE: '@fitmachi/onboarding_done',
  LANGUAGE: '@fitmachi/language',
};

export const CALORIES = {
  DEFAULT_GOAL: 2000,
  PROTEIN_PER_KG: 2.2,
  FAT_PERCENT: 0.25,
};

export const PAGINATION = {
  DEFAULT_LIMIT: 20,
};