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
    driver.get("https://software-testing-ten.vercel.app/community")
    driver.maximize_window()
    yield driver
    time.sleep(5)

# Test for community page functionality
def test_community(driver):
    driver.find_element(By.XPATH, "//textarea[@placeholder='Share something with the community...']").send_keys("Please come before 10 AM. Waste is near the back gate.Please come before 10 AM. Waste is near the back gate.")
    time.sleep(5)
    driver.find_element(By.CLASS_NAME, "community-action-btn").click()
    time.sleep(5)

# Like a post
def test_like_post(driver):
    driver.find_element(By.XPATH, "//body[1]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/article[1]/div[2]/button[1]").click()
    time.sleep(5)

# Unlike Post
def test_unlike_post(driver):
    driver.find_element(By.XPATH, "//body[1]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/article[1]/div[2]/button[1]").click()
    time.sleep(5)

# Comment on a post
def test_comment_on_post(driver):
    driver.find_element(By.XPATH, "//article[1]//div[2]//button[2]").click()
    driver.find_element(By.XPATH, "//input[@placeholder='Add a comment...']").send_keys("Proper waste disposal and recycling programs are essential for minimizing landfill waste and promoting sustainability. Services that focus on sorting and diverting recyclable materials are highly valued.")
    driver.find_element(By.XPATH, "//button[normalize-space()='Comment']").click()





