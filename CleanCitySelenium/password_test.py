# password too short:
import time 
import pytest
from selenium import webdriver
from selenium.webdriver.chrome.options import Options 
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select 

@pytest.fixture
def driver():
    options = Options() 
    options.add_experimental_option("detach", True)
    driver = webdriver.Chrome(options=options)
    driver.get("https://software-testing-ten.vercel.app/register")
    driver.maximize_window()
    yield driver
    time.sleep(5)

# Filling registration with short password
def test_password(driver):
    driver.find_element(By.ID, "register-name").send_keys("Gatwiri Ireri")
    driver.find_element(By.ID, "register-email").send_keys("gatwiireri@gmail.com")
    driver.find_element(By.ID, "register-password").send_keys("1b3")
    driver.find_element(By.CLASS_NAME, "register-btn").click()
    time.sleep(5)
# Check if invalid credentials log in(negative test)
    current_url = driver.current_url
    if "registration" in driver.current_url:
        print("Test passed: Weak password rejected.")
    else:
        print("Test failed: Weak password accepted.")

#No Special Characters
def test_no_special_characters(driver):
    driver.find_element(By.ID, "register-name").send_keys("Gatwiri Ireri")
    driver.find_element(By.ID, "register-email").send_keys("gatwiireri@gmail.com")
    driver.find_element(By.ID, "register-password").send_keys("garttt9876")
    driver.find_element(By.CLASS_NAME, "register-btn").click()
    time.sleep(5)
# check if invalid credentials log in (negative test)
    current_url = driver.current_url
    if "registration" in driver.current_url:
        print("Test passed: Password without special characters rejected.")
    else:
        print("Test failed: Password without special characters accepted.")

# Empty Password Field
def test_empty_password(driver):
    driver.find_element(By.ID, "register-name").send_keys("Gatwiri Ireri")
    driver.find_element(By.ID, "register-email").send_keys("gatwiireri@gmail.com")
    driver.find_element(By.ID, "register-password").send_keys("")
    driver.find_element(By.CLASS_NAME, "register-btn").click()
    time.sleep(5)

# Check if empty password field displays an error message
    current_url = driver.current_url
    if "registration" in driver.current_url:
        print("Test passed: Please fill in this field.")
    else:
        print("Test failed: Empty password field accepted.")

    
    

