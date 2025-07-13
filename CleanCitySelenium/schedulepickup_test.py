import time 
from selenium import webdriver
from selenium.webdriver.chrome.options import Options 
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select 

def test_schedulepickup():
    options = Options() 
    options.add_experimental_option("detach", True)
    driver = webdriver.Chrome(options=options)
    driver.get("https://software-testing-ten.vercel.app/home")
    driver.maximize_window()
    time.sleep(5)

# Fill in the login form 
    driver.find_element(By.ID, "home-name").send_keys("user1")
    driver.find_element(By.ID, "home-email").send_keys("user1@gmail.com")

# Select the pickup location from the dropdown
    dropdown_pickup = driver.find_element(By.ID, "home-location")
    dropdown_location = Select(dropdown_pickup)
    dropdown_location.select_by_visible_text("Mombasa")
    time.sleep(5)

# Select the waste type from the dropdown 
    dropdown_waste = driver.find_element(By.ID, "home-waste")
    dropdown_waste_type = Select(dropdown_waste)
    dropdown_waste_type.select_by_visible_text('Recyclable')
    time.sleep(5)

# Calendar date selection
    date_input = driver.find_element(By.XPATH, "//input[@id='home-date']")
    date_input.send_keys("14/07/2025")

# Additional Description 
    driver.find_element(By.ID, "home-desc").send_keys("Please pick up the waste from my house on time on the selected date. Thank you!")
    time.sleep(5)

 # Click the Submit Request button
    driver.find_element(By.CLASS_NAME, "home-btn").click()







       