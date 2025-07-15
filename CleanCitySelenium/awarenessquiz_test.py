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
    driver.get("https://software-testing-ten.vercel.app/awareness")
    driver.maximize_window()
    yield driver
    time.sleep(5) 
    