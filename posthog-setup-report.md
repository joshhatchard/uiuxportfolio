# PostHog post-wizard report

The wizard has completed a deep integration of PostHog into your UI/UX portfolio. PostHog is initialised via `instrumentation-client.ts` using the Next.js 15.3+ instrumentation pattern — no provider component required. A reverse proxy is configured in `next.config.ts` so all analytics requests route through `/ingest`, improving ad-blocker resilience. Environment variables are stored in `.env.local`. Nine client-side events cover your core visitor flows: hero engagement, project exploration, case study depth, and all contact intent signals.

| Event | Description | File |
|---|---|---|
| `hero_explore_work_clicked` | User clicks the "EXPLORE WORK" CTA on the home hero | `components/home/HeroSection.tsx` |
| `work_project_clicked` | User clicks a work case study card (includes `project_title`, `project_href`) | `components/shared/ProjectCards.tsx` |
| `creative_project_clicked` | User clicks a creative project card (includes `project_title`, `project_href`) | `components/shared/ProjectCards.tsx` |
| `case_study_next_project_clicked` | User clicks the "Next Case Study" section (includes `project_title`, `project_href`) | `components/shared/CaseTemplate.tsx` |
| `contact_email_copied` | User clicks "COPY EMAIL" in the contact section | `components/shared/ContactSection.tsx` |
| `contact_linkedin_clicked` | User clicks the LinkedIn link in the contact section | `components/shared/ContactSection.tsx` |
| `contact_github_clicked` | User clicks the GitHub link in the contact section | `components/shared/ContactSection.tsx` |
| `nav_contact_clicked` | User clicks the CONTACT (mailto) link in the nav bar | `components/shared/nav-bar.tsx` |
| `nav_linkedin_clicked` | User clicks the LINKEDIN link in the nav bar | `components/shared/nav-bar.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/463876/dashboard/1693045)
- [Contact intent over time](https://us.posthog.com/project/463876/insights/7IpU8YwN) — Email copy, LinkedIn, and GitHub clicks from the contact section
- [Portfolio engagement funnel](https://us.posthog.com/project/463876/insights/VJ0aGLaN) — Conversion from hero CTA → project click → next case study click
- [Project clicks by type](https://us.posthog.com/project/463876/insights/7fn6IRNn) — Work vs creative project card clicks over time
- [Total contact actions](https://us.posthog.com/project/463876/insights/diYO42v4) — All contact intent signals combined (bold number for 30 days)
- [Nav engagement over time](https://us.posthog.com/project/463876/insights/nuv3Yxxl) — LinkedIn, contact, and hero CTA clicks from the nav

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
