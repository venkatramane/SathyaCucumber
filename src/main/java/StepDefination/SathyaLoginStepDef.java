package StepDefination;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SathyaLoginStepDef {
	WebDriver driver;
	Actions action;
	@Given("^users enter to crediantial$")
	public void users_enter_to_crediantial() {
		
		System.setProperty("webdriver.chrome.driver",  "E:\\WebDriver\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

//		URL
		driver.get("https://www.sathya.in/login?ReturnUrl=%2F");

	}

	@When("^title of page$")
	public void title_of_page() {
		
		String title = driver.getTitle();
		System.out.println(title);
		driver.findElement(By.xpath("//a[contains(text(),'Register')]")).click();
	}

//	// 1.  \"([^\"]*)\" OR   2.  \"(.*)\" 
//	@Then("^user enter \"(.*)\" and \"(.*)\"$")
//	public void user_enter_username_and_password(String username,String password) {
//		
//		driver.findElement(By.xpath("//input[@type='email']")).sendKeys(username);
//		driver.findElement(By.xpath("//input[@type='password']")).sendKeys(password);
//
//	}
	
	@Then("^enter register details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enter_register_details_and_and_and_and(String arg1, String arg2, String arg3, String arg4, String arg5) {
		
		driver.findElement(By.xpath("//input[@name='FirstName']")).sendKeys(arg1);
		driver.findElement(By.xpath("//input[@name='LastName']")).sendKeys(arg2);
		driver.findElement(By.xpath("//input[@name='Email']")).sendKeys(arg3);
		driver.findElement(By.xpath("//input[@name='FirstName']")).sendKeys(arg4);
		driver.findElement(By.xpath("//input[@id='Password']")).sendKeys(arg5);
	}

	@Then("^click and navigate to login page$")
	public void move_to_login_page() {
		driver.getTitle();	
	}
	
	@Then("^user enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enter_and(String username, String password) {
		driver.findElement(By.xpath("//input[@type='email']")).sendKeys(username);
		driver.findElement(By.xpath("//input[@type='password']")).sendKeys(password);
	}

}
