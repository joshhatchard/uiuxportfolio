import posthog from "posthog-js";

const posthogProjectToken =
  process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN ||
  "phc_ra7cEgaS9wh8w8QbwgiVKMbKc5wiv68WNFe5UfJfXWDb";
const posthogApiHost =
  process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

if (posthogProjectToken) {
  posthog.init(posthogProjectToken, {
    api_host: posthogApiHost,
    ui_host: "https://us.posthog.com",
    defaults: "2026-01-30",
    capture_exceptions: true,
    debug: process.env.NODE_ENV === "development",
    loaded: (posthog) => {
      posthog.capture("posthog_client_initialized", {
        api_host: posthogApiHost,
      });
    },
  });
} else if (process.env.NODE_ENV === "development") {
  console.warn(
    "PostHog was not initialized because NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN is missing.",
  );
}
