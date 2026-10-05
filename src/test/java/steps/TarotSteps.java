package steps;

import io.cucumber.java.After;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import java.time.Duration;

public class TarotSteps {

    WebDriver driver;
    WebDriverWait wait;

    @Given("the user navigates to the Daily Tarot application")
    public void the_user_navigates_to_the_daily_tarot_application() {
        driver = new ChromeDriver();
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        driver.get("https://quintral4.github.io/tarot-qa-portfolio/");
        driver.manage().window().maximize();
    }

    @When("the user clicks the \"REVEAL MY CARD\" button")
    public void the_user_clicks_the_reveal_my_card_button() {
        // Ahora buscamos directamente por el ID btn-revelar
        WebElement button = driver.findElement(By.id("btn-revelar"));
        wait.until(ExpectedConditions.elementToBeClickable(button));
        button.click();
    }

    @Then("the button should temporarily disable and display \"CONSULTING...\"")
    public void the_button_should_temporarily_disable() {
        WebElement button = driver.findElement(By.id("btn-revelar"));
        wait.until(ExpectedConditions.textToBePresentInElement(button, "CONSULTING..."));
        Assert.assertFalse(button.isEnabled(), "El botón debería estar deshabilitado durante la carga");
    }

    @Then("after the channeling process, a random Major Arcana card should be displayed")
    public void a_random_major_arcana_card_should_be_displayed() {
        // También usamos el ID de la imagen para mayor precisión
        WebElement cardImage = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("imagen-carta")));
        Assert.assertTrue(cardImage.isDisplayed(), "La imagen de la carta no se mostró en pantalla");
    }

    @Then("the button should re-enable and display \"DRAW ANOTHER CARD\"")
    public void the_button_should_re_enable() {
        WebElement button = driver.findElement(By.id("btn-revelar"));
        wait.until(ExpectedConditions.textToBePresentInElement(button, "DRAW ANOTHER CARD"));
        Assert.assertTrue(button.isEnabled(), "El botón debería volver a estar habilitado");
    }

    @After
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}