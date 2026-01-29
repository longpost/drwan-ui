# @drwan/ui

Shared Header/Footer + shared nav + shared theme for DrWan subdomains.

## Quick use (local)

From a Next.js app repo (e.g. drwan-home):

```bash
# inside your app repo
npm i ../drwan-ui
# or: npm i ./vendor/drwan-ui
```

Then in `app/layout.tsx`:

```tsx
import "@drwan/ui/theme.css";
import { Header, Footer } from "@drwan/ui";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header baseHref="" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

For subdomains (maps/tools/etc.) set `baseHref="https://www.drwan.com"` so the header pills jump back to the hub sections.
