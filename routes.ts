/**
 * An array of public routes that do not require authentication.
 * @type {string[]}
 */
export const publicRoutes = [
    "/",
    "/about",
];

/**
 * An array of routes that used for authentication.
 * These routes would redirect users to /members if they are not authenticated.
 * @type {string[]}
 */

export const authRoutes = [
    "/auth/login",
    "/auth/register",
];

/**
 * The prefix for the authentication API routes.
 * This is a special case so it's not blocked by the auth middleware.
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after a user logs in.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/member";