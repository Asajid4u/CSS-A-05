# CSS A-05 Project

This project combines CSS animations with a Next.js application.

## Issue Fixed

**TypeError: Cannot read properties of undefined (reading 'length')**

The error occurred in `src/app/tripcard/tripcard.tsx` at line 242 when trying to access `activities.length` when the `activities` prop was undefined.

### Solution

Added a default value for the `activities` prop in the TripCard component:

```typescript
export default function TripCard({ activities = [], title, description }: TripCardProps)
```

This ensures that even if `activities` is `undefined`, it defaults to an empty array `[]`, preventing the TypeError.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app/` - Next.js app directory with pages and components
- `src/app/tripcard/` - TripCard component
- `index.html`, `index2.html`, `index3.html` - CSS animation demos
- `style.css` - CSS animations and styles

## CSS Animations

The project includes various CSS animations demonstrating:
- Skew transformations
- Scale transformations
- Rotation animations
- Linear movements (sun, road, car animations)
- Independence Day themed animation
