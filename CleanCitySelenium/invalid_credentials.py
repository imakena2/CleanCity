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
    driver.get("http://localhost:3000/login")
    driver.maximize_window()
    yield driver
    time.sleep(5)

# unregistered user login test
def test_invalid_login(driver):
    driver.find_element(By.ID, "login-email").send_keys("gatwiireri@gmail.com")
    driver.find_element(By.ID, "login-password").send_keys("123")
    driver.find_element(By.CLASS_NAME, "login-btn").click()
    time.sleep(5)
    current_url = driver.current_url
    if "home" in current_url or "login" in current_url:
        print("Test failed: User used invalid credentials to log in.")
    else:
        print("Test passed: User could not log in using invalid credentials.")