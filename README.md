# 🔮 Daily Tarot - QA Automation Portfolio

## About the Project
This project is a fully functional web application designed specifically to serve as a **Quality Assurance automation playground**. It features a "Daily Tarot" card draw simulator with an ethereal aesthetic, built purely with HTML, CSS, and vanilla JavaScript. 

The primary goal of this repository is to demonstrate a complete software testing lifecycle (STLC). It showcases the ability to translate business requirements into **Manual Test Cases** and implement a robust **Behavior-Driven Development (BDD)** automated testing framework.

## 🛠️ Tech Stack
* **Application (SUT):** HTML5, CSS3, JavaScript (Local state, no external API dependencies to ensure 100% test stability).
* **QA Automation:** Java, Selenium WebDriver, Cucumber (Gherkin), TestNG.
* **Build & Version Control:** Maven, Git, GitHub Pages.

---

## 1. User Stories & Acceptance Criteria

**US01: Daily Arcana Draw**
*As a querent, I want to click a button to draw a random Major Arcana card so that I can read its daily interpretation.*

**Acceptance Criteria:**
* On initial load, the application must display the card back image and an enabled button reading "REVEAL MY CARD".
* Upon clicking the button, it must temporarily disable and change its text to "Consulting...".
* The UI must display a loading message ("Channeling the energy of the stars...") during the 2-second processing time.
* After processing, the image must update to a random Major Arcana card, displaying its correct name and corresponding interpretation.
* The button must re-enable and update its text to "DRAW ANOTHER CARD".

## 2. Manual Test Cases

| ID | Title | Steps | Expected Result |
| :--- | :--- | :--- | :--- |
| **TC01** | Verify initial UI state | 1. Navigate to the application URL.<br>2. Observe the main screen. | The page displays the main title, the card back image, and an enabled "REVEAL MY CARD" button. No interpretation text is visible. |
| **TC02** | Verify card draw flow and loading state (Happy Path) | 1. Click the "REVEAL MY CARD" button.<br>2. Observe the immediate UI changes.<br>3. Wait 2 seconds. | Immediately, the button disables and says "Consulting...", and a channeling message appears. After 2 seconds, a revealed card appears with its name and interpretation, and the button re-enables as "DRAW ANOTHER CARD". |
| **TC03** | Verify randomness of consecutive draws | 1. Click "REVEAL MY CARD".<br>2. Wait for the result.<br>3. Click "DRAW ANOTHER CARD" 10 consecutive times. | The displayed cards change. Visually verifying that the exact same card does not appear every single time, demonstrating randomization. |


## 3. Test Automation (Selenium & Java)

To ensure the stability of the core functionality, the critical path of the application has been automated. 

**Automation Tech Stack:**
* **Language:** Java
* **Framework:** Selenium WebDriver & JUnit / TestNG
* **Build Tool:** Maven

**Automated Scenarios:**
* **[AUTO-TC02] End-to-End Card Draw Flow:** Validates the UI state transitions. It verifies the initial state, asserts that the button disables during the simulated API latency (explicit wait), and confirms the final rendering of the card's image, title, and interpretation text.

## 🚀 Testing Strategy (BDD)

The automation framework is designed using a Behavior-Driven Development (BDD) approach. Test scenarios are written in Gherkin syntax (`.feature` files) to ensure the documentation is highly readable and easily understandable for both technical and business stakeholders.

### Automated Scenario: End-to-End Card Draw Flow

* Validates the initial state of the User Interface.
* Handles application latency (simulated API calls) using Selenium **Explicit Waits**.
* Verifies UI element state transitions (disabled/enabled buttons, dynamic texts).
* Confirms the successful rendering of card images and interpretation texts.

## ⚙️ How to run tests locally

1. Clone this repository to your local machine.
2. Open the project in a Java-compatible IDE (e.g., IntelliJ IDEA, Eclipse, or VS Code).
3. Sync the `pom.xml` file to download all Maven dependencies.
4. Run the `TestRunner.java` class located in the `src/test/java/runners/` directory.

## 📊 Test Report

The framework is configured to generate visual evidence of the test executions. Upon completion, Cucumber automatically generates a native, detailed HTML report, which can be found in the `target/cucumber-reports/TarotReport.html` directory.

