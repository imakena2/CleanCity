import time 
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select 


# ensures that the browser does not forceful quit
options = Options()
options.add_experimental_option("detach", True)
# Launch the Chrome browser with the specified options
driver = webdriver.Chrome(options=options)
url = "https://software-testing-ten.vercel.app/home"
driver.get(url)
driver.maximize_window()
time.sleep(5)

driver.find_element(By.ID, "home-name").send_keys("user1")
driver.find_element(By.ID, "home-email").send_keys("user1@gmail.com")
# Locate the dropdown element and select an option
dropdown = Select(driver.find_element(By.ID, "home-location")).click()
option = driver.find_element(By.XPATH, "//option[@value='Mombasa']")
option.click()
time.sleep(2)
driver.find_element(By.ID, "login-password").send_keys("password123")
driver.find_element(By.CLASS_NAME, "login-btn").click()

