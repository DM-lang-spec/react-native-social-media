# SocialMedia

Mobile client built with **Expo SDK 55**, **React Native**, and **TypeScript**. Navigation uses [Expo Router](https://docs.expo.dev/router/introduction/) (file-based routes). The app entry is `expo-router/entry` in `package.json`. The root screen (`src/app/index.tsx`) redirects to the `(auth)` group, which hosts sign-up, email verification, OTP, and password setup.

**Documentation:** [App flows and logic](docs/app-flows.md) — routes, query params, screen behavior, implementation status, and **Screenshots** of auth screens (PNG files in `docs/screenshots/`, captured from the Expo web build).

## Requirements

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) via `npx` (no global install required)

Use Expo Go, an iOS simulator, or an Android emulator as described in the Expo docs.

## Setup

```bash
npm install
```

## Scripts

| Command            | Description                              |
| ------------------ | ---------------------------------------- |
| `npm start`        | Start the Expo dev server                |
| `npm run ios`      | Open in the iOS simulator                |
| `npm run android`  | Open on an Android emulator or device    |
| `npm run web`      | Run in the browser                       |
| `npm run lint`     | Run ESLint                               |
| `npm run lint:fix` | Run ESLint with auto-fix                 |
| `npm run format`   | Format the repo with Prettier            |

## Project layout

- `src/app/` — root `_layout.tsx` and `index.tsx` (redirect)
- `src/app/(auth)/` — auth stack: `index` (login / registration), `verify_email`, `verify_otp`, `set_password` (see `(auth)/_layout.tsx`)
- `src/components/` — shared UI (`CustomButton`, `InputField`, and similar)
- `index.ts` — not the bundle entry while `package.json` `main` is `expo-router/entry`
- `app.json` — Expo config (`name`, `slug`, `scheme`, icons, splash, `typedRoutes` experiment)
- `tsconfig.json` — TypeScript compiler options
- `assets/` — icons, splash, favicon, and `assets/images/` for screen imagery (shared branding on login, verify email, verify OTP, and set password)
- `docs/screenshots/` — reference images for auth UI (listed under **Screenshots** in `docs/app-flows.md`)

## Code quality

ESLint (`eslint.config.js`, `eslint-config-expo` with Prettier integration) and Prettier (`.prettierrc`, `.prettierignore`) are configured. Run `npm run lint` and `npm run format` before committing.

The `.vscode/` folder includes recommended extensions and workspace settings for this repo.
