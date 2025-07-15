
# 📋 CleanCity - Requirements Traceability Matrix (RTM)

| **Req ID** | **Requirement Description** | **Related Feature/Module** | **Test Case ID** | **Test Case Description** | **Status** |
|------------|------------------------------|-----------------------------|------------------|----------------------------|------------|
| FR-001 | User registration with full details | Authentication | TC-001 | Register new user with valid data | ✅ Tested |
| FR-002 | Registration validation and error messages | Authentication | TC-002 | Register with invalid/missing fields | ✅ Tested |
| FR-004 | Login using email/password | Authentication | TC-003 | Login with correct credentials | ✅ Tested |
| FR-006 | Maintain session via localStorage | Authentication | TC-004 | Verify session persistence post-login | ✅ Tested |
| FR-007 | Redirect after successful login | Authentication | TC-005 | Check redirection to dashboard | ✅ Tested |
| FR-008 | Logout and clear session | Authentication | TC-006 | Verify logout clears session | ✅ Tested |
| FR-012 | Waste pickup scheduling form | Waste Management | TC-007 | Submit valid pickup request | ✅ Tested |
| FR-013 | Validate pickup date (future only) | Waste Management | TC-008 | Submit with past date | 🔴 Bug-004 |
| FR-015 | Prevent multiple pickups on same date | Waste Management | TC-009 | Try duplicate date requests | 🔴 Bug-016 |
| FR-016 | View pickup request history | Waste Management | TC-010 | Navigate to request history page | ✅ Tested |
| FR-022 | Submit feedback after pickup | Feedback | TC-011 | Submit feedback form | ✅ Tested |
| FR-023 | Personalized dashboard with metrics | Dashboard & Analytics | TC-012 | Load dashboard metrics | 🔴 Bug-006 |
| FR-025 | Display charts and graphs | Dashboard & Analytics | TC-013 | Verify chart rendering | ✅ Tested |
| FR-041 | Post content in community feed | Community Feed | TC-014 | Submit new community post | ✅ Tested |
| FR-042 | Like and comment on posts | Community Feed | TC-015 | Like/comment on posts | 🔴 Bug-014 |
| FR-045 | View/edit user profile | User Profile | TC-016 | Update profile info | ✅ Tested |
| FR-047 | Upload profile picture | User Profile | TC-017 | Upload and remove profile picture | 🔴 Bug-001 |
| FR-061 | Admin can moderate posts/comments | Admin | TC-018 | Admin deletes inappropriate content | ✅ Tested |
| FR-078 | Persist user data to localStorage | Data Persistence | TC-019 | Confirm localStorage stores requests | ✅ Tested |
| FR-081 | Validate inputs before processing | Validation | TC-020 | Submit invalid email in form | ✅ Tested |
| FR-083 | Sanitize user content | Validation | TC-021 | Submit HTML/JS content in input fields | 🔴 Needs Security Test |
| FR-090 | Real-time form validation | UI Validation | TC-022 | Test invalid inputs show immediate errors | ✅ Tested |
| FR-071 | WCAG 2.1 compliance | Accessibility | TC-023 | Screen reader announces labels | 🔴 Bug-011 |
| FR-072 | Keyboard navigation support | Accessibility | TC-024 | Use tab to navigate across elements | 🔴 Bug-012 |
| FR-073 | Alt text on images | Awareness | TC-025 | Check awareness image tags for alt | 🔴 Bug-020 |

> ✅ **Tested** – Feature tested and passed  
> 🔴 **Bug-ID** – Bug found and logged  
> 🟡 **Planned** – Test planned but not executed yet
