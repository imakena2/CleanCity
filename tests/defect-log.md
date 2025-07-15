### BUG001 – Profile Picture Deletion Not Persisting

**Summary:**  
Profile picture deletion does not persist after logout.

**Description:**  
When a user deletes their profile picture and saves the changes, the default image is displayed as expected. However, after logging out and logging back in, the deleted image reappears — indicating the change was not saved to localStorage.

**Environment:**  
Browser: Chrome, Windows 10, Safari  
Environment: Frontend (localStorage-based auth)

**Severity:** Medium  
**Priority:** High

**Steps to Reproduce:**  
1. Login as a registered user (e.g., user@cleancity.com)  
2. Go to the Profile section  
3. Delete the profile picture and save changes  
4. Logout from the system  
5. Log back in  

**Expected Result:**  
Profile picture should remain deleted, showing default or placeholder image.

**Actual Result:**  
Deleted profile picture reappears, indicating changes were not saved.

### BUG002 – Quiz Does Not End After Final Question

**Summary:**  
The Eco Quiz continues indefinitely, looping back to previous questions and incrementing the score beyond the total number of questions.

**Description:**  
The quiz displays that there are only 3 questions, but after completing all 3, it does not end. Instead, the same questions are shown repeatedly, and the score keeps increasing beyond the possible maximum. This creates an infinite loop, preventing quiz completion and user feedback.

**Environment:**  
Browser: Chrome, Windows, Safari  
Module: Eco Quiz component

**Severity:** High  
**Priority:** High

**Steps to Reproduce:**  
1. Launch the application and navigate to the Eco Quiz.  
2. Complete all 3 questions.  
3. Observe the behavior after answering the last question.

**Expected Result:**  
After completing the 3 questions, the quiz should end and display a summary or final score (e.g., “You scored 3/3. Thank you for taking the quiz!”).

**Actual Result:**  
The quiz restarts from the first question, the score keeps increasing (e.g., 5/6 → 6/6 → 7/6…), and no completion message is shown.

### BUG003 – Unauthorized Login Without Registered Account

**Summary:**  
Users can log in with any email and password combination, even if the credentials do not match any registered account.

**Description:**  
The login functionality does not properly validate user credentials. When a user enters an arbitrary or unregistered email and any password, they are still logged in and granted access. This bypasses authentication checks and may expose sensitive parts of the system.

**Environment:**  
Browser: Chrome, Windows, Safari  
App: CleanCity Login Page  
Storage: localStorage-based login (assumed)

**Severity:** Critical  
**Priority:** Critical

**Steps to Reproduce:**  
1. Open the CleanCity login page.  
2. Enter any random or unregistered email address (e.g., gatwiireri@gmail.com) and any password.  
3. Click Login.

**Expected Result:**  
User should receive an error such as “Invalid email or password” and remain on the login screen.

**Actual Result:**  
User is successfully logged in and redirected to the authenticated dashboard, even though the credentials do not belong to any registered user.

**Security Impact (Impact Analysis):**  
• Allows unauthorized access to protected areas  
• Can lead to data exposure or manipulation  
• Violates authentication and authorization protocols

### BUG004 – System Accepts Past Dates for Waste Pickup Scheduling

**Summary:**  
The waste pickup scheduling system allows users to select and submit pickup dates that have already passed, potentially creating invalid or impossible service requests.

**Description:**  
The "Preferred Pickup Date" field in the waste pickup request form does not validate against the current date. Users can select dates from the past (in this case, 22/07/2025 appears to be selected when the current date is 07/07/2025), and the system accepts these dates without validation. This could lead to scheduling conflicts, confusion for waste management teams, and poor user experience.

**Environment:**  
Browser: Chrome, Windows, Safari  
App: Waste Pickup Request System  
Current Date: 07/07/2025  
Selected Date: 22/07/2025 (assuming this is meant to be in the past)

**Severity:** Medium  
**Priority:** Medium

**Steps to Reproduce:**  
1. Open the waste pickup request form  
2. Fill in the required fields (email, pickup location, waste type)  
3. In the "Preferred Pickup Date" field, select a date that has already passed  
4. Add any additional description  
5. Click "Submit Request"

**Expected Result:**  
The system should validate the selected date and display an error message such as "Please select a future date for pickup" or "Pickup date cannot be in the past." The form should not be submitted with invalid dates.

**Actual Result:**  
The system accepts the past date and displays "Your waste pickup request has been submitted!" allowing the user to proceed with an invalid pickup date.

**Impact Analysis:**  
• Creates confusion for waste management operations team  
• May result in missed or impossible pickup schedules  
• Poor user experience when pickups cannot be fulfilled  
• Potential resource waste from invalid scheduling  
• Could lead to customer complaints and service disruptions

**Suggested Fix:**  
Implement client-side and server-side date validation to ensure only future dates (starting from tomorrow or current date + minimum lead time) can be selected for pickup requests.


### BUG005 – Missing Hamburger Menu Icon for Mobile Navigation

**Summary:**  
The navigation sidebar lacks a hamburger menu icon, making it difficult for users to access navigation options on mobile devices and potentially causing poor mobile user experience.

**Description:**  
The CleanCity application displays a full sidebar navigation on all screen sizes without providing a collapsible hamburger menu icon. This design approach may not be mobile-friendly and could result in navigation elements being too small or taking up excessive screen space on smaller devices.

**Environment:**  
Browser: Chrome, Windows, Safari  
App: CleanCity Navigation System  
Device: Pixel 7, iPhone 12 pro  
Screen Size: Small to medium viewports

**Severity:** Medium  
**Priority:** Medium

**Steps to Reproduce:**  
1. Open the CleanCity application on a mobile device or resize browser window to mobile width  
2. Observe the navigation sidebar  
3. Look for a hamburger menu icon (☰) to collapse/expand navigation

**Expected Result:**  
A hamburger menu icon should be present, allowing users to:  
- Collapse the navigation to save screen space  
- Expand navigation when needed  
- Provide better mobile user experience

**Actual Result:**  
No hamburger menu icon is present. The full navigation sidebar is displayed regardless of screen size, potentially causing usability issues on mobile devices.

**Impact Analysis:**  
- Poor mobile user experience  
- Navigation may be difficult to use on small screens  
- May not follow modern mobile design patterns  
- Could affect user engagement on mobile devices

### BUG006 – Dashboard Not Updating Total Requests After Submission

**Summary:**  
The "Total Requests" counter on the Dashboard Analytics remains at 0 despite successful waste pickup request submissions, indicating a failure to update dashboard metrics in real-time.

**Description:**  
After users successfully submit waste pickup requests (receiving the confirmation message "Your waste pickup request has been submitted!"), the dashboard analytics do not reflect these submissions. The "Total Requests" metric stays at 0, while other metrics like "Community Posts" correctly show a count of 9, demonstrating that the dashboard can update some metrics but not others.

**Environment:**  
Browser: Chrome, Windows, Safari  
App: CleanCity Dashboard Analytics  
Related Pages: Waste Pickup Request Form, Dashboard

**Severity:** High  
**Priority:** High

**Steps to Reproduce:**  
1. Navigate to the waste pickup request form  
2. Fill out all required fields (email, pickup location, waste type, preferred date)  
3. Submit the request successfully (receive confirmation message)  
4. Navigate to the Dashboard Analytics page  
5. Observe the "Total Requests" counter

**Expected Result:**  
The "Total Requests" counter should increment by 1 for each successful waste pickup request submission and display the accurate total number of requests made.

**Actual Result:**  
The "Total Requests" counter remains at 0 regardless of how many requests have been submitted, while the confirmation message indicates successful submission.

**Impact Analysis:**  
- Data Integrity Issues: Dashboard provides inaccurate analytics  
- Business Intelligence Problems: Management cannot track actual request volumes  
- User Trust Issues: Users may doubt if their requests were actually processed  
- Operational Planning: Waste management teams cannot plan resources based on dashboard data  
- Inconsistent Data Display: Other metrics (Community Posts) work correctly, showing system inconsistency

### BUG007 – Incorrect Location Filter Returns Wrong Data for Eldoret

**Summary:**  
The filterRequestsByLocation function contains a logic error that returns Nairobi pickup requests when filtering for Eldoret location, causing incorrect data display and potential operational confusion.

**Description:**  
In the filterRequestsByLocation function, there is a hardcoded logic error where filtering for 'Eldoret' location incorrectly returns requests from 'Nairobi' instead. This bug causes users or administrators viewing Eldoret-specific data to see Nairobi requests instead, leading to incorrect information display and potential service delivery issues.

**Environment:**  
Code Location: script.js  
Function: filterRequestsByLocation  
App: CleanCity  
Affected Locations: Eldoret filter specifically

**Severity:** High  
**Priority:** High

**Code Analysis:**  
javascript// BUGGY CODE:

**Steps to Reproduce:**  
1. Call filterRequestsByLocation('Eldoret')  
2. Observe the returned results  
3. Verify that requests from Nairobi are returned instead of Eldoret requests

**Expected Result:**  
When filtering by 'Eldoret', the function should return only pickup requests where request.location === 'Eldoret'.

**Actual Result:**  
When filtering by 'Eldoret', the function returns pickup requests where request.location === 'Nairobi', showing completely wrong location data.

### BUG008 – Status Filter Not Working Correctly in Admin Dashboard

**Summary:**  
The "Filter by Status" functionality in the admin dashboard does not properly filter requests by their status. When filtering by "Scheduled" status, the system shows requests with different statuses (COMPLETED, MISSED, PENDING) instead of only showing SCHEDULED requests.

**Description:**  
In the admin dashboard filter section, when the "FILTER BY STATUS" dropdown is set to "Scheduled", the system displays requests with various statuses rather than filtering to show only requests with "SCHEDULED" status. The behavior is inconsistent and the filter appears to be non-functional.

**Environment:**  
Browser: Chrome, Windows, Safari  
App: CleanCity Admin Dashboard  
Page: Filter Requests (Admin Panel)  
User Role: Administrator

**Severity:** High  
**Priority:** High

**Steps to Reproduce:**  
1. Navigate to admin dashboard  
2. Go to "Filter Requests" section  
3. Set "FILTER BY STATUS" to "Scheduled"/ “Completed”  
4. Set "FILTER BY LOCATION" to "Nairobi" & “Kisumu”  
5. Observe the displayed results

**Expected Result:**  
• Only requests with "SCHEDULED" / “COMPLETED” status should be displayed  
• Counter should show accurate count of scheduled requests only  
• All displayed requests should have matching status badges

**Actual Result:**  
• Requests with multiple different statuses are shown (COMPLETED, MISSED, PENDING)  
• Counter shows incorrect values

### BUG-009 – Edit button is non-functional - does not open edit interface when clicked

**Summary:**  
Edit button is non-functional - does not open edit interface when clicked.

**Description:**  
When an admin clicks the "Edit" button on any record in the requests table, no action occurs. The button does not open an edit form, popup, or navigate to an edit page, making it impossible to modify record information despite the UI suggesting this functionality is available.

**Environment:**  
Browser: Chrome, Windows, Safari  
Environment: Admin dashboard/requests management interface  
User Role: Admin

**Severity:** High  
**Priority:** High

**Steps to Reproduce:**  
1. Login as an admin user  
2. Navigate to the requests table/dashboard  
3. Locate any record (e.g., REQ005, REQ006, REQ007)  
4. Click the "Edit" button for any record  
5. Observe the result

**Expected Result:**  
Edit button should open an edit form, popup modal, or navigate to an edit page where the admin can modify the record details.

**Actual Result:**  
No action occurs when clicking the Edit button - no form opens, no popup appears, and no page navigation happens. The button appears clickable but is completely non-functional.


### BUG010 – Navigation Menu Layout Broken on Mobile Devices

**Summary:**  
Navigation menu displays incorrectly on smaller screens, causing poor user experience and potential usability issues.

**Description:**  
The navigation menu in the CleanCity application does not respond properly to smaller screen sizes. On mobile devices, the menu items appear cramped, overlapping, or improperly positioned, making it difficult for users to navigate the application effectively. This responsive design failure significantly impacts the mobile user experience.

**Environment:**
URL: https://software-testing-ten.vercel.app/
Browser: Mobile browsers (Chrome, Safari, Firefox)  
Device: Mobile devices/tablets with smaller screen sizes iPhone, Samsung  
Environment: Frontend navigation interface

**Severity:** High  
**Priority:** High

**Steps to Reproduce:**  
1. Access the CleanCity application on a mobile device or tablet  
2. Navigate to any page that displays the main navigation menu  
3. Observe the menu layout and positioning  
4. Attempt to interact with menu items (Home, Dashboard, Feedback, Admin, Logout, Awareness)  
5. Note any display issues or interaction problems

**Expected Result:**  
Navigation menu should be responsive and display properly on all screen sizes with:  
• Proper spacing between menu items  
• Readable text without overlap  
• Easy touch/click interaction  
• Appropriate mobile-friendly layout (hamburger menu, collapsible sections, etc.)

**Actual Result:**  
Navigation menu displays incorrectly on smaller screens with layout issues that hinder user navigation and overall experience.


### BUG011 – Form Accessibility Issues Affecting Performance Score

**Summary:**  
Form elements missing accessibility attributes causing poor Lighthouse performance and usability issues.

**Description:**  
The waste pickup request form is missing critical accessibility attributes that are impacting both the application's Lighthouse performance score (65/100) and user experience for assistive technologies. Specifically, form elements lack autocomplete attributes and proper label associations, which prevents screen readers and other accessibility tools from functioning correctly.

**Environment:**  
Browser: Chrome DevTools Lighthouse  
Audit Device: iPhone 12 Pro simulation (390x844)  
Environment: Frontend form validation

**Severity:** High  
**Priority:** High

**Steps to Reproduce:**  
1. Navigate to the CleanCity waste pickup request form  
2. Run Lighthouse accessibility audit in Chrome DevTools  
3. Observe the Issues panel showing accessibility violations  
4. Note the specific issues: "An element doesn't have an autocomplete attribute" and "No label associated with a form field"  
5. Check Performance score impact (currently 65/100)

**Expected Result:**  
Form should have:  
• Proper autocomplete attributes on all relevant input fields  
• Labels correctly associated with all form fields  
• Lighthouse Performance score of 90+  
• Full accessibility compliance for screen readers  
• Clean Issues panel with no accessibility violations

**Actual Result:**  
• Form elements missing autocomplete attributes  
• Form fields without proper label associations  
• Performance score degraded to 65/100

### BUG012 – Keyboard Accessibility Missing Causing Performance Degradation

**Summary:**  
Application lacks keyboard interaction support, resulting in poor accessibility and performance metrics.

**Description:**  
The CleanCity application is missing keyboard interaction events for responsiveness, as indicated by the Lighthouse performance audit showing "no interaction event found for responsiveness type 'keyboard'". This accessibility issue is contributing to the poor performance score (10/13 in 50-89 range) and prevents users from navigating the application using keyboard-only input, violating web accessibility standards.

**Environment:**  
Browser: Chrome DevTools Lighthouse Performance Audit  
Performance Score: 10/13 (77% - in 50-89 range)  
Environment: Frontend keyboard accessibility implementation

**Severity:** High  
**Priority:** High

**Steps to Reproduce:**  
1. Navigate to the CleanCity application  
2. Run Lighthouse Performance audit in Chrome DevTools  
3. Check "Interaction to Next Paint" metric  
4. Observe the "Error!" status with message "no interaction event found for responsiveness type 'keyboard'"  
5. Attempt to navigate the application using only keyboard (Tab, Enter, Space, Arrow keys)  
6. Note any elements that cannot be accessed via keyboard

**Expected Result:**  
Application should have:  
• Full keyboard navigation support for all interactive elements  
• Proper focus management and visual indicators  
• Keyboard event listeners for all clickable elements  
• Performance score improvement (target: 90-100 range)  
• Clean Lighthouse audit with no keyboard accessibility errors

**Actual Result:**  
• No keyboard interaction events detected by Lighthouse  
• "Interaction to Next Paint" metric shows error status  
• Performance score negatively impacted (currently 77%)  
• Users cannot navigate application using keyboard alone  
• Fails accessibility compliance requirements


### BUG013 – CleanCity Logo/Brand Text Visibility Issue

**Summary:**  
CleanCity logo/brand text is barely visible due to poor contrast with background.

**Description:**  
The "CleanCity" brand text in the top-left corner of the navigation bar is extremely faint and difficult to see against the dark background. The text appears to have very low opacity or poor color contrast, making it nearly invisible to users. This creates a poor user experience and reduces brand visibility.

**Environment:**  
Browser: Chrome, Windows 10, Safari  
Environment: Frontend UI  
Component: Navigation Bar - Brand Logo/Text

**Severity:** Medium  
**Priority:** High

**Steps to Reproduce:**  
1. Navigate to the application homepage  
2. Look at the top-left corner of the navigation bar  
3. Attempt to read the "CleanCity" brand text  
4. Compare visibility with other navigation elements

**Expected Result:**  
CleanCity brand text should be clearly visible with adequate contrast for easy reading and brand recognition.

**Actual Result:**  
CleanCity text is barely visible, appearing very faint/transparent against the dark background, making it difficult or impossible to read.

**Suggested Fix:**  
Increase text opacity, change text color to white/light color, or add background styling to improve contrast and visibility.

### BUG014 – Comments Not Persisting After Page Refresh

**Summary:**  
Posted comments disappear completely after page refresh, indicating data is not being saved to localStorage.

**Description:**  
When a user posts a comment on a blog post, the comment appears temporarily in the comment section but completely disappears when the page is refreshed. This indicates that comments are only stored in temporary memory/state and are not being persisted to localStorage, making the comment system non-functional.

**Environment:**  
Browser: Chrome, Windows 10, Safari  
Environment: Frontend (localStorage-based auth)  
Component: Blog Comment System

**Severity:** High  
**Priority:** Critical

**Steps to Reproduce:**  
1. Log in as a registered user (e.g., intelligentcrafter@gmail.com)  
2. Navigate to a blog post (e.g., "5 Ways to Reduce Household Waste")  
3. Post a comment in the comment section  
4. Verify the comment appears in the blog post  
5. Refresh the page (F5 or browser refresh)  
6. Observe the comment section

**Expected Result:**  
Posted comment should remain visible after page refresh.

**Actual Result:**  
Comment completely disappears after refresh, reverting to previous state.

**Root Cause:**  
Comments are only stored in component state/memory rather than being persisted to localStorage.

**Impact:**  
• Complete loss of user comments  
• Non-functional comment system  
• Poor user experience and potential data loss


### BUG015 – Blog Page Navigation Menu Unresponsive on Mobile Devices

**Summary:**  
The navigation menu on blog pages becomes unresponsive and overlaps content on smaller screen sizes, creating poor mobile user experience.

**Description:**  
On mobile devices, the blog post content is completely hidden or overlapped by UI elements, making it impossible for users to read the actual blog article. Users can only see fragments of text and cannot access the main content they came to read. This renders the entire blog feature non-functional on mobile devices.

**Environment:**  
URL: http://localhost:3000/blog/1  
Device: iPhone XR simulation (414 x 896px), iPhone 12 pro, Samsung  
Browser: Chrome Developer Tools  
Screen Size: Mobile/Small devices

**Severity:** High  
**Priority:** High

**Steps to Reproduce:**  
1. Navigate to http://localhost:3000/blog/1  
2. Open browser developer tools  
3. Switch to mobile device simulation (iPhone XR or similar)  
4. Observe the navigation menu behavior  
5. Attempt to scroll and read blog content  
6. Try to interact with comment section

**Expected Result:**  
• Navigation should be responsive and not overlap content  
• Menu should collapse to hamburger or stack appropriately  
• Blog content should be fully readable and accessible

**Actual Result:**  
• Content is partially obscured or inaccessible  
• Poor user experience on mobile devices  
• Difficulty interacting with page elements


### BUG016 – Schedule Pickup Page Allows Duplicate Requests Not Reflected on Dashboard

**Summary:**  
Users can schedule multiple pickup requests for the same date, violating business rules, and these requests do not appear in the Dashboard.

**Description:**  
According to FR-015, users should not be able to book multiple pickups for the same date. However, no such restriction is enforced on the Schedule Pickup page.

**Environment:**  
Browser: Chrome v114, Windows 10

**Severity:** High  
**Priority:** High


### BUG017 – Password Security Vulnerability: Accepts Weak Passwords

**Summary:**  
System accepts short passwords (3 characters), creating significant security vulnerability.

**Description:**  
The registration system accepts passwords as short as 3 characters (for instance, 123), which violates basic security standards and creates a critical vulnerability. Short passwords are easily compromised through brute force attacks, dictionary attacks, and social engineering, putting user accounts and sensitive data at risk.

**Environment:**  
Browser: Chrome, Windows 10, Safari  
Component: User Registration System

**Severity:** High  
**Priority:** Critical

**Steps to Reproduce:**  
1. Open Registration form  
2. Enter `123` as password (3 characters)  
3. Submit registration form  
4. Observe system accepts the weak password

**Expected Result:**  
• System should reject passwords shorter than 8 characters  
• Display clear error message: "Password must be at least 8 characters long"  
• Prevent registration until strong password is provided

**Actual Result:**  
• Registration succeeds with 3-character password  
• No validation error displayed  
• User account created with critically weak password


### BUG018 – Credentials Stored in Plain Text in LocalStorage

• **Summary:** Credentials and roles are stored in localStorage without encryption.  
• **Description:** After login or registration, user data (email, role, name) is stored in localStorage as plain text under `currentUser`.  
• **Environment:** Chrome v114, Windows 10, Safari  
• **Severity:** Critical  
• **Priority:** High  

**Steps to Reproduce:**  
1. Login with any demo account.  
2. Open Chrome DevTools → Application → LocalStorage  
3. Check `currentUser`  

**Expected:**  
Sensitive session data should be encrypted or use secure session storage.

**Actual:**  
Full user data exposed in plain text.


### BUG019 – Additional Description Field Accepts Over 200 Characters

**Summary:**  
The "Additional Description" field on the waste pickup scheduling form accepts more than 200 characters, violating FR-012.

**Description:**  
According to FR-012, the "Special Instructions" (Additional Description) field should accept a maximum of 200 characters. However, users can currently enter and submit text beyond this limit. This indicates that character validation is either missing or not enforced on the client side, and possibly on the backend as well.

**Environment:**  
Browser: Chrome  
OS: Windows 10  
Page: Schedule Pickup Form  
URL: http://127.0.0.1:5500/index.html (or equivalent live form)  
Requirement Reference: FR-012

**Severity:** Medium  
**Priority:** Medium

**Steps to Reproduce:**  
1. Navigate to the Schedule waste Pickup page  
2. In the "Additional Description"  field, paste  a paragraph of more than 200 characters  
3. Fill all other required fields (date, waste type, name, location,email)  
4. Click **Submit Request**  
5. Observe whether the form is submitted successfully  

**Expected Result:**  
User should receive an error message like:  
"Additional description must be under 200 characters."  
Form submission should be blocked until validation passes.

**Actual Result:**  
The form accepts input well over 200 characters and submits successfully with no error.

**Impact:**  
- Violates FR-012 specification  
- May cause display issues or text overflow in downstream systems  
- Reduces data quality and user input control

**Suggested Fix:**   
- Add real-time character counter for user feedback  
- Enforce 200-character limit both client-side and server-side


### BUG020 – No Alt Text in Awareness Page Photos

**Summary:**  
Awareness images lack descriptive alt text.

**Description:**  
Images on the Awareness page do not have `alt` attributes, which fails to meet accessibility standards. This omission prevents screen reader users and other assistive technologies from understanding the content and purpose of the images, negatively affecting the user experience for visually impaired users.

**Environment:**  
Browser: Chrome  
OS: Windows 10  
Page URL: [http://127.0.0.1:5500/index.html]

**Severity:** Low  
**Priority:** Medium

**Steps to Reproduce:**  
1. Open [http://127.0.0.1:5500/index.html] in Chrome  
2. Scroll to the Awareness section containing images  
3. Right-click on any image and select **Inspect**  
4. Check the HTML for `<img>` elements  
5. Confirm whether an `alt` attribute is present

**Expected Result:**  
Each image should include a meaningful `alt` attribute (e.g., `alt="Recycling bins arranged by color"`), allowing screen readers to convey image context to visually impaired users.

**Actual Result:**  
No `alt` attributes are found on the image tags, resulting in  skipped content by screen readers.

**Impact:**  
  
- Excludes screen reader users from accessing key content  
- Reduces site accessibility score and usability

### BUG021 – No Password Visibility Toggle
**Severity:** Low to Medium  
**Type:** Usability Bug  
**Environment:** Chrome v114, Windows 10, CleanCity Web App – Registration Page

### Summary
Password field lacks a visibility toggle (eye icon).

### Steps to Reproduce
1. Navigate to the registration or login page.
2. Enter a password in the password field.
3. Observe the absence of a password visibility toggle icon.

### Expected Result
A toggle icon  should be present to allow users to show/hide their password.

### Actual Result
Password remains hidden with no way for users to reveal it.

### 💥 Impact
- Increases risk of typos during password entry  
- Difficult for users with cognitive or motor impairments  
- Fails to follow modern UX patterns and WCAG usability recommendations

### 💡 Recommendation
Add a visibility toggle for password fields to improve user experience and accessibility compliance.
