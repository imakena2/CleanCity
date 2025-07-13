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
    driver.maximize_window()
    yield driver
    time.sleep(5)

# Fill in the login form 
def test_login(driver):
    driver.get("https://software-testing-ten.vercel.app/login")
    driver.find_element(By.ID, "login-email").send_keys("gatwiireri@gmail.com")
    time.sleep(2)
    driver.find_element(By.ID, "login-password").send_keys("rthgf19824@!")
    time.sleep(2)
    driver.find_element(By.CLASS_NAME, "login-btn").click()

    time.sleep(5)

# invalid login 
def test_invalid_login(driver):
    driver.get("https://software-testing-ten.vercel.app/login")
    driver.find_element(By.ID, "login-email").send_keys("12magff@gmail.com")
    driver.find_element(By.ID, "login-password").send_keys("ab2")
    driver.find_element(By.CLASS_NAME, "login-btn").click()
    time.sleep(5)

# Missing Credentials 
def test_missing_credentials(driver):
    driver.get("https://software-testing-ten.vercel.app/login")
    driver.find_element(By.ID, "login-email").send_keys(" ")
    driver.find_element(By.ID, "login_password").send_keys("123bgim")
    driver.find_element(By.CLASS_NAME, "login-btn").click()
    time.sleep(5)




   


    


