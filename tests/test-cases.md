# Test Cases

|TEST CASE ID|DESCRIPTION|REPRODUCTION STEPS|EXPECTED RESULTS|ACTUAL RESULTS|STATUS|
|---|---|---|---|---|---|
|CC-001|Valid Login(User)|1. Login with a user account|Redirects to user profile |Redirects successfully |PASS|
| | |2. Enter Email & Password| | | |
| | | | | | |
|CC-002|Invalid Login|1. Login with a user account | | | |
| | |2. Enter unregistered acount details (Email & password)|Show message error|Logins in successfully |FAIL|
| | | | | | |
|CC-003|Too Short Password|1. Click on register|No error message for weak password|Registers successfully|FAIL|
| | |2. Enter Email & a short password (eg. 123)| | | |
| | | | | | |
|CC-004|Registration with Existing Email|1. Click on register|Show "User already exists" error|User registered successfully |FAIL|
| | |2. Enter an email that already exists | | | |
| | |3. Submit | | | |
| | | | | | |
|CC-005|Submit Valid Pickup Request |1. Click on schedule pickup |Successfully submits pickup request |Successfully submits pickup request  |PASS|
| | |2. Enter credentials including date, name, time, location| | | |
| | |3. Submit| | | |
| | | | | | |
|CC-006|Submit Pickup without date|1. Click on schedule pickup |Show "Please fill in this field" error|Field shows "Please fill in this field" error|PASS|
| | |2. Enter credentials like name time, location| | | |
| | |3. Ignore entering date | | | |
| | |4. Submit| | | |
| | | | | | |
|CC-007|Invalid Feedback ID submission|1. Enter Feedback ID: !!REQ006|Show validation error|No error shown |FAIL|
| | |2. Add feedback description | | | |
| | |3. Submit feedback| | | |
| | | | | | |
|CC-008|Filter pickup requests by location & status|1.Navigate to admin dashboard|Only requests with "SCHEDULED" / “COMPLETED” status should be displayed|Requests with multiple different statuses are shown (COMPLETED, MISSED, PENDING)|FAIL|
| | |2. Go to "Filter Requests" section| | | |
| | |3. Set "FILTER BY STATUS" to "Scheduled"/ “Completed”| | | |
| | |4. Set "FILTER BY LOCATION" to "Nairobi" & “Kisumu”| | | |
| | |5. Observe the displayed results| | | |
| | | | | | |
|CC-009|Incorrect location filter returns wrong data for Eldoret|1. Navigate to admin dashboard|When filtering by 'Eldoret', the function should return only pickup requests where request.location === 'Eldoret'.|When filtering by 'Eldoret', the function returns pickup requests where request.location === 'Nairobi', showing completely wrong location data.|FAIL|
| | |2. Go to "Filter Requests" section| | | |
| | |3. Set "FILTER BY LOCATION" to "Eldoret"| | | |
| | |5. Observe the displayed results| | | |
| | | | | | |
|CC-010|Submit pickup request with invalid time(past days)|1. Click on schedule pickup |Show an error message thar pickup location must be in the future|Accepts past requests|FAIL|
| | |2. Enter a passed date(eg. 10/07/2025)| | | |
| | |3. Enter other credentials required properly| | | |
| | |4. Submit| | | |
| | | | | | |
|CC-011|Submit pickup request with missing location |1. Navigate to schedule pickup|Shows error message: "Please select an item in the list"|Displays error message: "Please select an item in the list"|PASS|
| | |2. Enter credentials without including the location| | | |
| | |3. Submit| | | |
| | | | | | |
|CC-012|Submit duplicate date/time/location|1. Navigate to schedule pickup|Shows an error: "Duplicate request" |Successfully accepts the request|FAIL|
| | |2. Submit a request | | | |
| | |3. Repeat identical submission| | | |
| | |4. Submit| | | |
| | | | | | |
|CC-013|Submit with long name/ sentence |1. Navigate to schedule pickup|The form should handle long input gracefully without crashing or freezing.|the form handles the long input without freezing or crashing|PASS|
| | |2. Enter credentials| | | |
| | |3. Write a very long description(extremely long)|Show a validation error such as: “Description exceeds character limit”.|Handles extra long input|FAIL|
| | |4. Submit| | | |
| | | | | | |
|CC-014|Feedback count does not reflect |1. Submit feedback |Feedback count updates |Feedback count does not update|FAIL|
| | |2. Go to dashboard/Admin panel| | | |
| | | | | | |
|CC-015|Plain-text credentials in localStorage |1. Log in with an authorized account|Hide sensitive date such as email, role through encryption or in session storage|Exposed plain-text data(poor security)|FAIL|
| | |2. Open DevTools - Application - localStorage| | | |
| | |3. Check currentUser| | | |
| | | | | | |
|CC-016|Data persistence|1. Submit a requst |Data remains in localStorage|Data lost on refresh|FAIL|
| | |2. Reload page| | | |
| | | | | | |
|CC-017|Admin status update|1. Go to Admin panel|Status updates in UI and localStorage|UI doesn't refresh (button not clickable to save the changes)|FAIL|
| | |2. Click on any request "Mark as Completed"| | | |
| | | | | | |
|CC-018|Image alt-text(Awareness)-Accessibility|1.Go to Awareness Page|All imafes have descriptive alt text|Missing alt text|FAIL|
| | |2. Use screen reader| | | |
| | | | | | |
|CC-019|Valid Request ID(Feedback feature)|1. Go to Feedback Page|Successful submits message |Message submitted successfully |PASS|
| | |2. Enter REQ001| | | |
| | |3. Submit Feedback| | | |
| | | | | | |
|CC-020|Mobile-Responsiveness|1.Open Dashboard on mobile |Horizontal scrolling enabled. No overflow.	|Table breaks on small screens|FAIL|
| | |2. Check table layout| | | |
| | | | | | |
|CC-021|Submit Empty Form|1. Go to login|Shows error message for required fields|Shows error message "Please fill in this field"|PASS|
| | |2. Click "Submit" without filling any fields |Form not submitted| | |
| | | | | | |
|CC-022|Invalid email format|1. Enter user@.com in Email.|Shows an error message"invalid email format"|shows an error message "wrong position of "." in com|PASS|
| | |2. Fill other fields correctly.| | | |
| | |3. Click "Submit".| | | |
| | | | | | |
|CC-023|Community feed adding posts |1. Click on Community|Successfully shares post|Shares post successfully |PASS|
| | |2. Share something with the community| | | |
| | |3. Click "Post"| | | |
| | | | | | |
|CC-024|LIKE/UNLIKE posts |1. Navigate to Community| | | |
| | |2. Click on like on any post|Like count increments by 1|Like count increments by 1|PASS|
| | |3. Find an already-liked post, Click on "unlike"|Like count decrements by 1|Like count decrements by 1| |
| | | | | | |
|CC-025|Multiple LIKES from same user|1. Navigate to Community|LIKE count increments only once|LIKE count increments only once|PASS|
| | |2. Click on like on any post like 5 times| | | |
| | | | | | |
|CC-026|LIKE & UNLIKE persistence after refresh |1. Like or Unlike a post|Post remains liked/unliked-  count preserved|Post remains liked/unliked-  count preserved|PASS|
| | |2. Refresh page| | | |
| | | | | | |
|CC-027|LIKE without authentication |1. Log out|Redirects to login page|Allows liking without authentication|FAIL|
| | |2. Attempts to like post| | | |
| | | | | | |
|CC-028|Profile changes persist after logout/login|1. Log in |Profile retains all edits|Reverts to initial information |FAIL|
| | |2. Edit profile(name, image, url)| | | |
| | |3. Save| | | |
| | |4. Log out & Log in | | | |
| | | | | | |
|CC-029|Random image on profile |1. Log in (even with unverified email)|User should enter their preferred profile)|Randomly generates image |FAIL|
| | |2. Random image / avartar generated | | | |
| | | | | | |
|C-030|Cancel edit retains original data |1. Log in |Original profile displayed |Successfully displays original profile details|PASS|
| | |2. Edit Profile| | | |
| | |3. Click Cancel| | | |
| | | | | | |
|CC-031|EC0 QUIZ Increments scores |1. Navigate to awareness |Increments scores|Successfully increments the scores|PASS|
| | |2. Start the Eco quiz | | | |
| | |3. Increments correctly (eg. 2/3)| | | |
| | | | | | |
|CC-032|Quiz terminates after 3 Questions|1. Navigate to awareness page|Quiz ends with score summary|Quiz continuous endlessly |FAIL|
| | |2. Start Quiz| | | |
| | |3. Answer the 3 Questions| | | |
| | | | | | |
|CC-034|User can exit mid-quiz|1. Navigate to awareness page|Returns to awareness page|No exit option button exists|FAIL|
| | |2. Start Quiz| | | |
| | |3. Click "Exit Quiz" Button| | | |
| | | | | | |
|CC-035|Unique Quiz Questions while looping endlessly|1. Navigate to awareness page|Should show unique questions|Repeats same questions|FAIL|
| | |2. Start Quiz| | | |
| | |3. Monitor the questions displayed in the loops| | | |
| | | | | | |
|CC-036|Unique Eco Tips|1. Navigate to awareness page|Should show unique tips|shows unique tips|PASS|
| | |2. Monitor the Eco tips displayed| | | |
| | | | | | |
|CC-037|Take Action Buttons redirect to the right pages|1. Navigate to awareness page|Buttons should redirect to the right pages|Successfully redirects to the right pages|PASS|
| | |2. Navigate to Take Action Section | | | |
| | |3. Click on buttons: "Schedule Pickup"/ "Report Issues"/"Join Community| | | |
| | | | | | |
|CC-038|Dashboard updates changes after adding posts on community |1. Navigate to community page|Dashboard successfully updates the number of post |Successfully updates the number of posts|PASS|
| | |2. Create a post | | | |
| | |3. Navigate to dashboard | | | |
| | |4. Monitor changes in community posts| | | |
| | | | | | |
|CC-039|Filter by "All Tags"|1. Navigate to Blog page|Shows only articles tagged "household"|Filters correctly|PASS|
| | |2. Click on "Household" tag| | | |
| | | | | | |
|CC-040|Filter by search title|1. Navigate to Blog page|Lists articles with the title"5 Ways to Reduce Household Waste"|Filters correctly|PASS|
| | |2. Search "5 Ways to Reduce Household Waste"| | | |
| | | | | | |
|CC-041|Read More Button(Blog) pages redirects correctly|1. Navigate to Blog page|Opens corresponding full article page |Redirect correctly|PASS|
| | |2. Navigate to to one article| | | |
| | |3. Click "Read More" on any article | | | |
| | | | | | |
|CC-042|Mobile Responsiveness on Article |1. Navigate to Blog page|Full article opens in mobile-optimized view|Renders incorrectly on smaller devices|FAIL|
| | |2. Navigate to any article| | | |
| | |3. Click "Read More" | | | |
| | |3. Test on mobile device (responsiveness)| | | |
| | | | | | |
|CC-043|Returns to main blog(Back to Blog Button): |1. Navigate to Blog page|Returns to exact previous blog listing page|Returns to exact previous blog listing page|PASS|
| | |2. Navigate and click on any article| | | |
| | |3. Click "Back to blog"| | | |
| | | | | | |
|CC-044|Navigation menu responsiveness on mobile devices|1. Open the WebApp on a mobile device or in browser's mobile emulator |Navigation menu should be responsive on small screens:No overlapping|Menu items overlap, are unreadable, and difficult to click; no responsive behavior observed|FAIL|
| | |2. Navigate through any page (eg. Schedule pickup)| | | |
| | |3. Observe the layour on the navigation menu items| | | |
| | |4. Attempt to interact with the form | | | |
| | | | | | |
|CC-045|Accessibility attributes missing in waste pickup request form, affecting Lighthouse performance and usability for assistive tools like screen readers.|1. Navigate to the CleanCity waste pickup request form|All form fields include appropriate autocomplete attributes|Form fields lack autocomplete attributes|FAIL|
| | |2. Open Chrome DevTools and run Lighthouse accessibility audit|Lighthouse score ≥ 90|Lighthouse performance score is 65/100| |
| | |3. Review the Issues panel|Issues panel reports no accessibility violations|Issues panel lists accessibility violations for labels and autocomplete attributes| |
| | |4. Check for missing autocomplete and label associations| | | |
| | |5. Note the Lighthouse performance score (currently 65/100)| | | |
| | | | | | |
|CC-046|Application lacks keyboard accessibility support, leading to degraded performance and failing accessibility compliance.|1. Navigate to the CleanCity application|All interactive elements (buttons, links, menus, etc.) are accessible via keyboard|Lighthouse audit shows no keyboard interaction events|FAIL|
| | |2. Open Chrome DevTools and run a Lighthouse Performance audit|Keyboard users can fully navigate the app| | |
| | |3. Observe the Interaction to Next Paint metric|Lighthouse performance score is 90–100 with no keyboard accessibility issues|Performance score is 77% (10/13)| |
| | |4. Note the message: "no interaction event found for responsiveness type 'keyboard'"| | | |
| | |5. Try navigating the app using only the keyboard (Tab, Enter, Space, Arrow keys)| | | |
| | |6. Observe if any elements are inaccessible or unresponsive to keyboard input	| | | |
| | | | | | |
|CC-047|"CleanCity" brand text in the navigation bar has poor contrast, making it barely visible to users.|1. Navigate to the CleanCity application homepage|"CleanCity" text should have high contrast|Visible in all devices (visual hierarchyis good)|PASS|
| | |2. Observe the top-left corner of the navigation bar|Easily readable in both light and dark themes| | |
| | |3. Try to read the "CleanCity" brand text|Clearly visible against the background| | |
| | |4. Compare it to the readability of other UI elements nearby| | | |
