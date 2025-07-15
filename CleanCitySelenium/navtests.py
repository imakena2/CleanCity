import time 
import pytest
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select 
from selenium.webdriver.support import expected_conditions as EC

@pytest.fixture
def driver():
    options = Options() 
    options.add_experimental_option("detach", True)
    driver = webdriver.Chrome(options=options)
    driver.maximize_window()
    yield driver
    time.sleep(5)

def test_navigation(driver):
    try: 
        driver.get("https://software-testing-ten.vercel.app/home")
        driver.maximize_window()
        time.sleep(5)
        driver.find_element(By.LINK_TEXT, "Community").click()
        time.sleep(5)

    except Exception as e:
        print(f"An error occurred: {e}")
        time.sleep(3)
