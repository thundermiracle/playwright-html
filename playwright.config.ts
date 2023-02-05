import { devices } from "@playwright/test";

import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  workers: process.env.CI ? 2 : undefined,
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"], locale: "en-GB" },
    },
    {
      name: "chromium mobile",
      use: { ...devices["Galaxy S9+"], locale: "en-GB" },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"], locale: "en-GB" },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"], locale: "en-GB" },
    },
    {
      name: "webkit mobile",
      use: { ...devices["iPhone 11 Pro"], locale: "en-GB" },
    },
  ],
  use: {
    headless: true,
    trace: "on",
  },
};
export default config;
