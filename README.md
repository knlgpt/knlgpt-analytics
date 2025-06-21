# 📊 Analytics Setup (NPM Package)

A simple utility to initialize and track analytics events like page views in your app.

---

## 🚀 Installation

```bash
npm install knlgpt-analytics
```

> Replace `knlgpt-analytics` with the actual package name after publishing.

---

## 🛠️ Usage

### 1. Initialize Analytics

```js
import { initAnalytics } from "knlgpt-analytics";

const MIXPANEL_TOKEN = `your-token`;

await initAnalytics(MIXPANEL_TOKEN);
```

### 2. Track Page View

```js
import { ana_trackPageView } from "knlgpt-analytics";

ana_trackPageView("HomeScreen");
```

---

## 📦 Available Methods

| Method                    | Description                       |
| ------------------------- | --------------------------------- |
| `initAnalytics()`         | Initializes your analytics setup  |
| `ana_trackPageView(name)` | Tracks a screen/page view by name |

---

## 💡 Example

```js
import { initAnalytics, ana_trackPageView } from "knlgpt-analytics";

initAnalytics();
ana_trackPageView("Dashboard");
```

---

## 👨‍💻 Author

- [knlgpt](https://www.linkedin.com/in/knlgpt/)
- [Your Website or Portfolio (optional)]

---
