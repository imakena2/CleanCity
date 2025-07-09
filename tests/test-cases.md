# CleanCity - Manual Test Cases (Functional Test Cases)
| Test Case # | Test Case Description | Test Data | Expected Result | Actual Result | Pass/Fail |
|-------------|------------------------|-----------|------------------|----------------|------------|
| TC001 | Valid Login (User) | Email: user1@test.com, Password: TestPass123 | Redirect to my profile | Redirects successfully | Pass |
| TC002 | Invalid Login | Email: user1@test.com, Password: WrongPassword | Show error message | Logins in successfully | fail |
| TC003 | Registration with mismatched passwords | Email: newuser@test.com, Pass: NewPass123, Confirm: Mismatch123 | Show mismatch password error | Logins in successfully | fail |
| TC004 | Registration with existing email | Email: user2@test.com | Show "User already exists" error | user registered successfully | fail |
| TC005 | Submit valid pickup request | Date: 2025-07-15, Type: General, Qty: Medium | Success message, data saved | Message shown, form clears | Pass |
| TC006 | Submit pickup without date | Leave date blank | Show "Date is required" error | Field required error shown | Pass |
| TC007 | Invalid feedback ID | Request ID: !REQ123 | Show validation error | No error shown | Fail |
| TC008 | Filter Eldoret requests | Location: Eldoret | Show Eldoret-only requests | Shows Nairobi requests | Fail. |
| TC009 | Admin marks as scheduled | Click "Mark as Scheduled" | Status updates visually | Status doesn't update in UI | Fail |
| TC010 | Awareness images missing alt text | Inspect images | All images have alt text | Alt text missing | Fail |
| TC011 | Missing form labels | Navigate with screen reader | All inputs announced | Some not labeled | Fail |
| TC012 | Mobile layout check | 320px width view | Responsive layout adapts | Layout responsive | Pass |
| TC013 | Tablet layout check | 768px width view | Forms and layout adapt | Layout responsive | Pass |

> Total: 13 Test Cases | Pass: 6 | Fail: 7

