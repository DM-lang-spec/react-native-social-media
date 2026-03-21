# SocialMedia

Expo + React Native (TypeScript) app scaffold. Entry UI lives in `App.tsx`.

## Requirements

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) via `npx` (no global install required)

For device builds, use the Expo Go app or a simulator/emulator as described in the Expo docs.

## Setup

```bash
npm install
```

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm start`    | Start the Expo dev server |
| `npm run ios`  | Open in iOS simulator     |
| `npm run android` | Open on Android emulator or device |
| `npm run web`  | Run in the browser        |

## Project layout

- `App.tsx` — root component
- `app.json` — Expo configuration (`name`, `slug`, icons, splash)
- `index.ts` — app entry (registered with Expo)
