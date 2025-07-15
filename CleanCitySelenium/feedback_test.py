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
    driver.get("https://software-testing-ten.vercel.app/feedback")
    driver.maximize_window()
    yield driver
    time.sleep(5)

def test_feedback(driver):
    driver.find_element(By.ID, "login-email").send_keys("gatwiireri@gmail.com")
    driver.find_element(By.ID, "login-password").send_keys("qawssQ123")
    driver.find_element(By.CLASS_NAME, "login-btn").click()
    time.sleep(2)

    try: 
        driver.get("https://software-testing-ten.vercel.app/profile")
        driver.maximize_window()
        time.sleep(2)
        driver.find_element(By.LINK_TEXT, "Feedback").click()
        time.sleep(2)

    except Exception as e:
        print(f"An error occurred: {e}")
        time.sleep(3)

# input feedback
    driver.find_element(By.ID, "feedback-request-id").send_keys("REQ007")
    time.sleep(2)
    driver.find_element(By.ID, "feedback-text").send_keys("Please come before 10 AM. Waste is near the back gate.")
    time.sleep(2)
    driver.find_element(By.CLASS_NAME, "feedback-btn").click()
    time.sleep(2)

# Empty feedback description 
    driver.find_element(By.ID, "feedback-request-id").send_keys("REQ007")
    time.sleep(2)
    driver.find_element(By.ID, "feedback-text").send_keys("")
    time.sleep(2)
    driver.find_element(By.CLASS_NAME, "feedback-btn").click()
    time.sleep(2)
    current_url = driver.current_url
    if "feedback" in current_url:
        print("Error Message: Please fill in this field.")
    else:
        print("Test passed: User was able to submit empty feedback description.")

# Empty feedback request ID
    driver.find_element(By.ID, "feedback-request-id").send_keys("")
    time.sleep(2)
    driver.find_element(By.ID, "feedback-text").send_keys("Please come before 10 AM. Waste is near the back gate.")
    time.sleep(2)
    driver.find_element(By.CLASS_NAME, "feedback-btn").click()
    time.sleep(2)
    current_url = driver.current_url
    if "feedback" in current_url:
        print("Error Message: Please fill in this field.")
    else:
        print("Test passed: User was able to submit empty feedback request ID.")
        




