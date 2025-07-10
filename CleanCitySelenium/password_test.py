# password too short:
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

time.sleep(20)

# Filling registration with unique credentials
driver.find_element(By.ID, "register-name").send_keys("Weak")
driver.find_element(By.ID, "register-email").send_keys("weakpass@gmail.com")
driver.find_element(By.ID, "register-password").send_keys("op1")
driver.find_element(By.CLASS_NAME, "register-btn").click()

# Wait for page response
time.sleep(5)

# Check if invalid credentials log in(negative test)
current_url = driver.current_url
if "registration" in driver.current_url:
    print("Test passed: Weak password rejected.")
else:
    print("Test failed: Weak password accepted.")

