
# 🧯 CleanCity – QA Risk Matrix

| **Risk ID** | **Risk Description** | **Impact** | **Likelihood** | **Risk Level** | **Mitigation Strategy** |
|-------------|----------------------|------------|----------------|----------------|--------------------------|
| RISK-015 | Dashboard counters not updating (e.g., Total Requests stays at 0) | High – misleads users/admins on app activity | Likely | 🔥 High | Add live counter updates post-submission or re-fetch updated data |
| RISK-016 | Quiz lacks Exit button | Low – frustration for users who can't leave mid-quiz | Likely | ⚠️ Low | Add exit/close button; prompt confirmation if quiz is in progress |
| RISK-017 | Form fields allow empty or invalid data submission | Medium – pollutes data, incomplete records | Possible | ⚠️ Medium | Add comprehensive frontend + backend validations |
| RISK-018 | Lack of automated error handling/logging | High – hard to trace bugs or analyze failures | Likely | ⚠️ High | Implement client-side error logging (e.g., Sentry) and browser console checks |
| RISK-019 | Users can submit multiple LIKES on the same post after refresh | Medium – inflated community engagement stats | Possible | ⚠️ Medium | Limit likes per session or track like state via unique ID |
| RISK-020 | No CAPTCHA or spam control on forms | Medium – possible spam submissions or bot attacks | Possible | ⚠️ Medium | Add CAPTCHA or honeypot fields for key forms (feedback, post, register) |
| RISK-021 | Eco Tips rotation lacks fallback when data fails | Low – empty UI section on data fetch error | Unlikely | ⚠️ Low | Add default tips or error-handling placeholder |
| RISK-022 | Search filter shows wrong or partial results | Medium – poor UX for finding blog content | Likely | ⚠️ Medium | Use fuzzy search or indexed lookup, test on edge cases |
| RISK-023 | Mobile blog layout breaks badly on narrow screens | Medium – blog unreadable, core content hidden | Likely | ⚠️ High | Redesign blog layout using flexbox/grid, add media queries |
| RISK-024 | Admin "Edit" button not functional | High – admins unable to manage critical data | Likely | 🔥 High | Fix event handler or modal logic, add fallback edit page |
| RISK-025 | User cannot update profile permanently | High – breaks user trust, affects personalization | Likely | ⚠️ High | Store profile changes in localStorage and rehydrate on load |
| RISK-026 | No backend integration — all logic runs in localStorage | Critical – no persistence beyond browser/device | Known | 🚨 High | Consider serverless backend or mock API for storage |
| RISK-027 | No confirmation prompts on destructive actions (e.g., Delete Profile Picture) | Medium – accidental data loss | Likely | ⚠️ Medium | Add confirmation modals for destructive operations |
| RISK-028 | Environmental impact metrics may display wrong values if logic fails | Medium – misleads users and damages credibility | Possible | ⚠️ Medium | Test and validate calculations thoroughly using Jest/unit tests |
| RISK-029 | No logout inactivity timeout | Medium – leaves session open on shared devices | Possible | ⚠️ Medium | Add auto logout timer (e.g., after 10 min idle) |
| RISK-030 | Performance degrades on older devices (large DOM, animations) | Medium – high memory or rendering lag | Possible | ⚠️ Medium | Optimize JS bundles, lazy load components |
| RISK-031 | Blog page search doesn't support partial matches or fuzzy logic | Low – users may not find relevant articles | Likely | ⚠️ Low | Add fuzzy search with a JS search library (e.g., Fuse.js) |

---
*Generated on: 2025-07-14*
