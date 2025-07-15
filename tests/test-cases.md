# ✅ CleanCity – QA Test Cases (Group 17)

| **Test Case ID** | **Description** | **Reproduction Steps** | **Expected Results** | **Actual Results** | **Status** |
|------------------|------------------|--------------------------|-----------------------|---------------------|------------|
| CC-001 | Valid Login (User) | 1. Login with a user account<br>2. Enter Email & Password | Redirects to user profile | Redirects successfully | PASS |
| CC-002 | Invalid Login | 1. Login with a user account<br>2. Enter unregistered account details | Show message error | Logs in successfully | FAIL |
| CC-003 | Too Short Password | 1. Click on register<br>2. Enter Email & short password (e.g., 123) | Show error for weak password | Registers successfully | FAIL |
| CC-004 | Registration with Existing Email | 1. Click on register<br>2. Enter an existing email<br>3. Submit | Show "User already exists" error | User registered successfully | FAIL |
| CC-005 | Submit Valid Pickup Request | 1. Click on schedule pickup<br>2. Enter credentials<br>3. Submit | Successfully submits pickup request | Successfully submits pickup request | PASS |
| CC-006 | Submit Pickup without Date | 1. Click on schedule pickup<br>2. Enter all except date<br>3. Submit | Show "Please fill in this field" error | Field shows error as expected | PASS |
| CC-007 | Invalid Feedback ID | 1. Enter ID: !!REQ006<br>2. Add description<br>3. Submit | Show validation error | No error shown | FAIL |
| CC-008 | Filter by Location & Status | 1. Go to Admin > Filter Requests<br>2. Set filters | Show only matching results | Shows mixed results | FAIL |
| CC-009 | Incorrect Eldoret Filter | 1. Go to Admin<br>2. Filter by 'Eldoret' | Return Eldoret data only | Returns Nairobi data | FAIL |
| CC-010 | Pickup Past Date | 1. Schedule pickup with past date | Show error "Date must be future" | Accepts past request | FAIL |
| CC-011 | Missing Location | 1. Schedule pickup without location | Show "Please select..." error | Displays expected error | PASS |
| CC-012 | Duplicate Request | 1. Submit same pickup twice | Show "Duplicate request" | Accepts duplicates | FAIL |
| CC-013 | Long Input in Description | 1. Add long description | Should show length error | Accepts input | FAIL |
| CC-014 | Feedback Count Not Updating | 1. Submit feedback<br>2. Go to Dashboard | Count should increment | Does not update | FAIL |
| CC-015 | Plain-text Credentials | 1. Login<br>2. Check localStorage | Credentials should be hidden | Exposed in plain-text | FAIL |
| CC-016 | Data Persistence | 1. Submit request<br>2. Refresh page | Data should remain | Data lost | FAIL |
| CC-017 | Admin Status Not Saving | 1. Click "Mark as Completed" | Status should update | UI doesn’t refresh | FAIL |
| CC-018 | Missing Alt Text | 1. Go to Awareness<br>2. Use screen reader | Alt text should be present | Alt text missing | FAIL |
| CC-019 | Valid Feedback ID | 1. Enter REQ001 and feedback | Show success message | Message submitted successfully | PASS |
| CC-020 | Mobile Responsiveness | 1. Open Dashboard on mobile | Should render responsively | Table breaks layout | FAIL |
| CC-021 | Submit Empty Form | 1. Click Submit without input | Show required fields error | Shows error message | PASS |
| CC-022 | Invalid Email Format | 1. Enter invalid email | Show email format error | Shows error | PASS |
| CC-023 | Add Community Post | 1. Share post | Post appears successfully | Shares successfully | PASS |
| CC-024 | Like/Unlike Posts | 1. Like & unlike a post | Count should update | Works correctly | PASS |
| CC-025 | Multiple Likes | 1. Like post multiple times | Count should only increment once | Count increments once | PASS |
| CC-026 | Like/Unlike After Refresh | 1. Like post<br>2. Refresh | State should persist | Like/unlike persists | PASS |
| CC-027 | Like Without Auth | 1. Logout<br>2. Like post | Redirect to login | Allows like | FAIL |
| CC-028 | Profile Change Not Saved | 1. Edit profile<br>2. Logout/Login | Changes should persist | Reverts to old info | FAIL |
| CC-029 | Random Image Generation | 1. Login | Should use user's chosen image | Random image shown | FAIL |
| CC-030 | Cancel Edit | 1. Edit profile<br>2. Cancel | Original info should remain | Original displayed | PASS |
| CC-031 | Eco Quiz Scores | 1. Take quiz | Score should increment | Score increments correctly | PASS |
| CC-032 | Quiz Does Not End | 1. Take quiz | Should end after 3 Qs | Loops endlessly | FAIL |
| CC-034 | Exit Quiz | 1. Click Exit | Should return to Awareness | No exit button exists | FAIL |
| CC-035 | Quiz Repeats Same Questions | 1. Take quiz repeatedly | Show unique questions | Repeats same questions | FAIL |
| CC-036 | Unique Eco Tips | 1. View Eco Tips | Should display unique tips | Tips display uniquely | PASS |
| CC-037 | Take Action Redirects | 1. Click on action buttons | Redirects correctly | Redirects correctly | PASS |
| CC-038 | Dashboard Post Count | 1. Add community post<br>2. View dashboard | Count should update | Count updates | PASS |
| CC-039 | Blog Tag Filter | 1. Filter by "Household" | Shows relevant posts | Works as expected | PASS |
| CC-040 | Blog Title Search | 1. Search by blog title | Lists matching articles | Filters correctly | PASS |
| CC-041 | Read More Redirect | 1. Click "Read More" | Opens article | Redirects properly | PASS |
| CC-042 | Blog Responsiveness | 1. Open article on mobile | Should be mobile-friendly | Layout breaks | FAIL |
| CC-043 | Back to Blog Navigation | 1. Click "Back to Blog" | Return to blog list | Returns correctly | PASS |
| CC-044 | Nav Menu on Mobile | 1. Test nav on mobile | Menu should adapt to screen | Overlaps and unreadable | FAIL |
| CC-045 | Accessibility Audit Issues | 1. Audit forms via Lighthouse | Score ≥ 90, no issues | Score 65/100, multiple issues | FAIL |
| CC-046 | Keyboard Accessibility | 1. Test via keyboard only | All elements should be reachable | Many elements fail | FAIL |
| CC-047 | Brand Text Contrast | 1. Observe brand text | Should have high contrast | Visible and readable | PASS |

---

**Prepared by:**  
**Trailblazers QA Team 17**  
**Date:** July 2025
<img width="468" height="654" alt="image" src="https://github.com/user-attachments/assets/e428ff8f-3865-4e03-8e7e-cb3881ff3d9d" />
