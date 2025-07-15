# CleanCity – QA Final Report (Markdown Version)

## Table of Contents
1. [Executive Summary](#executive-summary)
2. [Test Strategy and Approach](#test-strategy-and-approach)
3. [Test Environment Details](#test-environment-details)
4. [Test Execution Summary](#test-execution-summary)
5. [Defect Analysis and Categorization](#defect-analysis-and-categorization)
6. [Risk Assessment](#risk-assessment)
7. [Recommendations and Improvements](#recommendations-and-improvements)
8. [Test Metrics and KPIs](#test-metrics-and-kpis)
9. [Appendices](#appendices)
10. [Prepared and Submitted By](#prepared-and-submitted-by)

---

## Executive Summary
This QA testing project was conducted on the CleanCity Waste Pickup Scheduler web application. The project aimed to validate all functional and non-functional requirements, ensure data integrity, and confirm WCAG accessibility compliance.

### Key Highlights
- 20 bugs identified across critical modules  
- 91% functional coverage using manual testing and automation  
- Automated testing executed using **Jest**, **Selenium**, and **Lighthouse**

### Major Findings
- **BUG003**: Unauthorized login accepted  
- **BUG006**: Dashboard total requests not updating  
- **BUG014**: Comments and profile changes not persisting in localStorage  

### Recommendation
Prioritize fixes for authentication, dashboard updates, and accessibility compliance.

---

## Test Strategy and Approach

### Testing Types
- Manual Testing  
- Unit Testing using **Jest**  
- Automation using **Selenium**  
- Performance & Accessibility Testing using **Lighthouse**

### Tools Used
- Chrome DevTools, Lighthouse, GitHub, Vercel, Jira

### Testing Scope
- Registration/Login flows  
- Waste Pickup Scheduling  
- Admin dashboard functionality  
- Community engagement features  
- WCAG 2.1 Accessibility Compliance

**Entry Criteria**: All major modules deployed on staging  
**Exit Criteria**: All critical defects resolved, 90% test case pass rate  

---

## Test Environment Details

- **Browsers**: Chrome v114, Safari, Firefox  
- **Devices**: Windows 10 Desktop, Samsung (simulated), iPhone  
- **Automation**: Selenium WebDriver, Jest  
- **Tested URLs**:  
  - https://software-testing-ten.vercel.app  
  - http://localhost:3000  
- **Hosting Environment**: Vercel Live Deployment, Localhost (Dev)

---

## Test Execution Summary

- **Manual Test Cases**: 35  
- **Jest Unit Tests**: 17 test cases (✅ 100% pass)  
- **Selenium Test Scripts**: 8 scripts executed (✅ 100% pass)  
- **Functional Coverage**: ~91%  

### Modules Tested
- Registration & Login  
- Pickup scheduling  
- Feedback & Admin roles  
- Dashboard metrics  
- Community interaction  

---

## Defect Analysis and Categorization

### Bug Severity Breakdown
- **Critical**: 4  
- **High**: 8  
- **Medium**: 5  
- **Low**: 4  

### Notable Defects
- **BUG003**: Unauthorized login  
- **BUG006**: Dashboard request count not syncing  
- **BUG014**: Comment data not persisting in localStorage  

---

## Risk Assessment

| Risk ID   | Risk Description                          | Impact   | Likelihood | Risk Level | Mitigation Strategy                            |
|-----------|-------------------------------------------|----------|------------|-------------|------------------------------------------------|
| RISK-001  | Login allows unauthorized users (BUG003)  | Critical | Likely     | High        | Enforce secure login validation                |
| RISK-002  | Data not saved to localStorage (BUG014)   | High     | Likely     | High        | Sync changes with storage or backend           |
| RISK-003  | Quiz continues indefinitely (BUG032)      | Medium   | Likely     | High        | Track answered question index                  |
| RISK-004  | Weak password allowed (BUG017)            | Critical | Possible   | High        | Enforce password policies                      |

> More risks are detailed in the appended QA Risk Matrix.

---

## Recommendations and Improvements

- Enforce server-side login and registration validation  
- Ensure all comment, badge, and profile changes persist  
- Real-time dashboard data sync  
- Password visibility toggle for improved UX  
- Fix mobile layout and add alt text and labels for accessibility  

---

## Test Metrics and KPIs

| Metric                          | Value      |
|---------------------------------|------------|
| Total Bugs Reported             | 21         |
| Critical Bugs                   | 4          |
| Unit Test Pass Rate (Jest)      | 100%       |
| Selenium Test Coverage          | 80%        |
| Overall Functional Coverage     | 91%        |
| Lighthouse Accessibility Score  | 65/100     |

---

## Appendices

### A: Full Bug List (20 total)  
[Defect Log](https://github.com/imakena2/CleanCity/blob/main/tests/defect-log.md)

### B: Test Cases  
[Test Cases](https://github.com/imakena2/CleanCity/blob/main/tests/test-cases.md?plain=1)

### C: Unit Test Files  
- [Jest Tests](https://github.com/imakena2/CleanCity/tree/main/Unit%20Tests)  
- [Selenium Scripts](https://github.com/imakena2/CleanCity/tree/main/CleanCitySelenium)

### D: Screenshots  
[Screenshots](https://github.com/imakena2/CleanCity/tree/main/tests/screenshots-to-jpg)

### E: Functional Requirements Specification (FRS v1.0)  
[FRS Document](https://github.com/imakena2/CleanCity/blob/main/docs/functional-requirements.md)

### E: Traceability Matrix (RTM)  
[RTM Matrix](https://github.com/imakena2/CleanCity/blob/main/tests/CleanCity_RTM.md)

### F: QA Risk Matrix  
[Risk Matrix](https://github.com/imakena2/CleanCity/blob/main/tests/CleanCity_Risk_Matrix.md)

### F: Jira Report  
[Jira Bug Report (PDF)](https://github.com/imakena2/CleanCity/blob/main/tests/Jira%20Bug%20Report.pdf)  
[Jira Epics Report (PDF)](https://github.com/imakena2/CleanCity/blob/main/tests/Cleancity%20Jira%20Epics.pdf)

### G: Presentation (Video)  
[Presentation Video](https://drive.google.com/file/d/1KAd8936g7iSbJ_zpfytKV_DRWWlbk3Q-/view?usp=sharing)

---

## Prepared and Submitted By

**Trailblazers QA Team 17**  
- Idah Makena  
- Pauline Anne Anyango  
- Tekra Gatwiri  
**Institution:** PowerLearn Project Bootcamp  
**Date:** July 15, 2025
