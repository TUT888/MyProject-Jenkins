from selenium import webdriver
import time

print("Test Execution Started")
options = webdriver.ChromeOptions()
options.add_argument('--ignore-ssl-errors=yes')
options.add_argument('--ignore-certificate-errors')
driver = webdriver.Remote(
command_executor='http://localhost:4444/wd/hub',
options=options
)

print("Here 1")
#maximize the window size
driver.maximize_window()
time.sleep(10)
print("Here 2")
#navigate to browserstack.com
driver.get("https://www.browserstack.com/")
time.sleep(10)
print("Here 3")
#click on the Get started for free button
driver.find_element("link text", "Get started free").click()
time.sleep(10)
print("Here 4")
#close the browser
driver.close()
driver.quit()
print("Test Execution Successfully Completed!")