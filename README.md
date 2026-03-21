# SocialMedia

Expo SDK 55 + React Native (TypeScript) app with [Expo Router](https://docs.expo.dev/router/introduction/) for navigation. The dev server entry is `expo-router/entry` (see `package.json`).

## Requirements

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) via `npx` (no global install required)

Use the Expo Go app or a simulator/emulator as described in the Expo docs for device testing.

## Setup

```bash
npm install
```

## Scripts

| Command             | Description                          |
| ------------------- | ------------------------------------ |
| `npm start`         | Start the Expo dev server            |
| `npm run ios`       | Open in iOS simulator                |
| `npm run android`   | Open on Android emulator or device   |
| `npm run web`       | Run in the browser                   |
| `npm run lint`      | Run ESLint                           |
| `npm run lint:fix`  | Run ESLint with auto-fix             |
| `npm run format`    | Format with Prettier                 |

## Project layout

- `app/` — file-based routes (Expo Router); add `_layout.tsx` and screen files here
- `App.tsx` / `index.ts` — classic Expo root (not used while `main` is `expo-router/entry`)
- `app.json` — Expo config (`name`, `slug`, `scheme`, icons, splash, `typedRoutes` experiment)
- `assets/` — icons, splash, favicon

## Code quality

ESLint (flat config) and Prettier are configured; run `npm run lint` and `npm run format` before commits.
