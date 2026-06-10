<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into your portfolio. The project already had PostHog installed, an `instrumentation-client.ts` initializer, reverse-proxy rewrites in `next.config.ts`, environment variables configured, and several events in place. This run supplemented those with 5 new events in 2 files, covering gaps in case study interaction tracking and footer link engagement.

| Event | Description | File |
|---|---|---|
| `hero_explore_work_clicked` | User clicks "Explore Work" CTA on the homepage hero | `components/home/HeroSection.tsx` |
| `work_project_clicked` | User clicks a work case study card (includes `project_title`, `project_href`) | `components/shared/ProjectCards.tsx` |
| `creative_project_clicked` | User clicks a creative project card (includes `project_title`, `project_href`) | `components/shared/ProjectCards.tsx` |
| `case_study_next_project_clicked` | User clicks the "Next Case Study" card at the bottom of a case study (includes `project_title`, `project_href`) | `components/shared/CaseTemplate.tsx` |
| `case_study_back_clicked` | User clicks the BACK button on a case study page (includes `project_title`) | `components/shared/CaseTemplate.tsx` |
| `case_study_sidebar_nav_clicked` | User clicks a section link in the case study sidebar table of contents (includes `section_label`) | `components/shared/CaseTemplate.tsx` |
| `contact_email_copied` | User clicks "Copy Email" to copy the contact email address | `components/shared/ContactSection.tsx` |
| `contact_linkedin_clicked` | User clicks the LinkedIn link in the contact section | `components/shared/ContactSection.tsx` |
| `contact_github_clicked` | User clicks the GitHub link in the contact section | `components/shared/ContactSection.tsx` |
| `nav_contact_clicked` | User clicks the Contact (mailto) link in the navigation bar | `components/shared/nav-bar.tsx` |
| `nav_linkedin_clicked` | User clicks the LinkedIn link in the navigation bar | `components/shared/nav-bar.tsx` |
| `footer_contact_clicked` | User clicks the Contact (mailto) link in the footer | `components/shared/FooterSection.tsx` |
| `footer_linkedin_clicked` | User clicks the LinkedIn link in the footer | `components/shared/FooterSection.tsx` |
| `footer_github_clicked` | User clicks the GitHub link in the footer | `components/shared/FooterSection.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/463876/dashboard/1693137)
- [Project clicks over time](https://us.posthog.com/project/463876/insights/ppsrdpmm) — Work vs creative project card clicks day by day
- [Contact conversions](https://us.posthog.com/project/463876/insights/e8hPCCa0) — Email copies and social link clicks over time
- [Work project interest by title](https://us.posthog.com/project/463876/insights/nHteZNFy) — Which case studies attract the most clicks
- [Hero & Nav engagement](https://us.posthog.com/project/463876/insights/8Dzn6hAv) — CTA and navigation interaction trends
- [Case study engagement](https://us.posthog.com/project/463876/insights/SHXnhf5D) — Sidebar nav, next project, and back button usage inside case studies

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
