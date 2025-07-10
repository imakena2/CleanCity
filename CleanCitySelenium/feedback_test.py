import time 
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By


# ensures that the browser does not forceful quit
options = Options()
options.add_experimental_option("detach", True)
# Launch the Chrome browser with the specified options
driver = webdriver.Chrome(options=options)
url = "https://software-testing-ten.vercel.app/feedback"
driver.get(url)
driver.maximize_window()
time.sleep(5)

#Login credentials
driver.find_element(By.ID, "login-email").send_keys("gatwiireri@gmail.com")
driver.find_element(By.ID, "login-password").send_keys("qawssQ123")
driver.find_element(By.CLASS_NAME, "login-btn").click()
time.sleep(2)

driver.find_element(By.ID, "feedback-request-id").send_keys("REQ007")
time.sleep(2)
# Enter pickup additional description
driver.find_element(By.ID, "feedback-text").send_keys("Please come before 10 AM. Waste is near the back gate.")
time.sleep(2)
# Click Submit Request Button
driver.find_element(By.CLASS_NAME, "feedback-btn").click()
