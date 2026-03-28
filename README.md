# SocialMedia

Expo SDK 55 and React Native (TypeScript) app using [Expo Router](https://docs.expo.dev/router/introduction/) for file-based navigation. The bundle entry is `expo-router/entry` (see `package.json`). The root route (`src/app/index.tsx`) redirects into the `(auth)` group for the sign-up, verification, and password setup flow.

## Requirements

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) via `npx` (no global install required)

Use Expo Go or a simulator or emulator as described in the Expo docs for on-device testing.

## Setup

```bash
npm install
```

## Scripts

| Command            | Description                         |
| ------------------ | ----------------------------------- |
| `npm start`        | Start the Expo dev server           |
| `npm run ios`      | Open in the iOS simulator           |
| `npm run android`  | Open on an Android emulator or device |
| `npm run web`      | Run in the browser                  |
| `npm run lint`     | Run ESLint                          |
| `npm run lint:fix` | Run ESLint with auto-fix            |
| `npm run format`   | Format with Prettier                |

## Project layout

- `src/app/` — routes and layouts; root `_layout.tsx` and `index.tsx` live here
- `src/app/(auth)/` — auth stack: `index` (login / registration UI), `verify_email`, `verify_otp`, `set_password` (see `(auth)/_layout.tsx`)
- `src/components/` — shared UI (`CustomButton`, `InputField`, and similar)
- `index.ts` — not the app entry while `package.json` `main` is `expo-router/entry`
- `app.json` — Expo config (`name`, `slug`, `scheme`, icons, splash, `typedRoutes` experiment)
- `tsconfig.json` — TypeScript compiler options
- `assets/` — icons, splash, favicon, and `assets/images/` for screen imagery

## Code quality

ESLint (`eslint.config.js`, `eslint-config-expo` with Prettier integration) and Prettier (`.prettierrc`, `.prettierignore`) are configured. Run `npm run lint` and `npm run format` before you commit.

Optional: `.vscode/` holds recommended extensions and workspace settings.
