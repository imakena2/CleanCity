import time 
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select 
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

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
location_dropdown = Select(driver.find_element(By.ID, "home-location"))
location_dropdown.select_by_value("Mombasa")
time.sleep(2)
# Select waste type
waste_dropdown = Select(driver.find_element(By.ID, "home-waste"))
waste_dropdown.select_by_value("Recyclable") 
time.sleep(2)

# select pickup date
wait = WebDriverWait(driver, 11)
pickup_date = wait.until(EC.element_to_be_clickable((By.ID, "home-date")))
pickup_date.click()
wait.until(EC.visibility_of_element_located((By.CLASS_NAME, "preferredDate")))
target_day = wait.until(EC.element_to_be_clickable(
        (By.XPATH, "//input[@id='home-date']")
    ))
target_day.click()
time.sleep(2)
# Enter pickup additional description
driver.find_element(By.ID, "home-desc").send_keys("Please come before 10 AM. Waste is near the back gate.")
# Click Submit Request Button
driver.find_element(By.CLASS_NAME, "home-btn").click()
