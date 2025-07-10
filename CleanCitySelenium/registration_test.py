import time 
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

# ensures that the browser does not forceful quit
options = Options()
options.add_experimental_option("detach", True)
# Launch the Chrome browser with the specified options
driver = webdriver.Chrome(options=options)
url = "https://software-testing-ten.vercel.app/register"
driver.get(url)
driver.maximize_window()

time.sleep(5)

# Filling registration with unique credentials
driver.find_element(By.ID, "register-name").send_keys("Gatwiri Ireri")
driver.find_element(By.ID, "register-email").send_keys("gatwiireri@gmail.com")
driver.find_element(By.ID, "register-password").send_keys("qawssQ123")
driver.find_element(By.CLASS_NAME, "register-btn").click()

# Wait for page response
time.sleep(5)

# Check if invalid credentials log in(negative test)
current_url = driver.current_url
if "registration" in current_url or "home" in current_url:
    print("Test passed: User successfully registered.")
else:
    print("Test failed: User could not be registered.")

time.sleep(5)

# logging in after registration
driver.find_element(By.ID, "login-email").send_keys("gatwiireri@gmail.com")
driver.find_element(By.ID, "login-password").send_keys("qawssQ123")
driver.find_element(By.CLASS_NAME, "login-btn").click()