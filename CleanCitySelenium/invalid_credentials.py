# Test login with invalid email/password
# Negative Test
import time 
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

# ensures that the browser does not forceful quit
options = Options()
options.add_experimental_option("detach", True)
# Launch the Chrome browser with the specified options
driver = webdriver.Chrome(options=options)
url = "http://localhost:3000/login"
driver.get(url)
driver.maximize_window()

driver.find_element(By.ID, "login-email").send_keys("gatwiireri@gmail.com")
driver.find_element(By.ID, "login-password").send_keys("123")
driver.find_element(By.CLASS_NAME, "login-btn").click()

# Wait for page response
time.sleep(5)

# Check if invalid credentials log in(negative test)
current_url = driver.current_url
if "home" in current_url or "login" in current_url:
    print("Test failed: User used invalid credentials to log in.")
else:
    print("Test passed: User could not log in using invalid credentials.")