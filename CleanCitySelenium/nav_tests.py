import time 
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select 
from selenium.webdriver.support import expected_conditions as EC

# ensures that the browser does not forceful quit
options = Options()
options.add_experimental_option("detach", True) 
# Launch the Chrome browser with the specified options
driver = webdriver.Chrome(options=options)

try: 
    driver.get("https://software-testing-ten.vercel.app/home")
    driver.maximize_window()
    time.sleep(5)

    driver.find_element(By.LINK_TEXT, "Community").click()
    time.sleep(5)

except Exception as e:
    print(f"An error occurred: {e}")
finally:
    time.sleep(3)
