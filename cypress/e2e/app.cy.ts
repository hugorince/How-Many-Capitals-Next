describe("Navigation to quiz", () => {
  it("should navigate to the quiz page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Find a link with an href attribute containing "quiz" and click it
    cy.get('a[href*="quiz"]').click();

    // The new url should include "/quiz"
    cy.url().should("include", "/quiz");
    cy.get("h1").contains("What is the capital of");
  });
});

describe("Navigation to gameover", () => {
  it("should navigate to the gameover page", () => {
    cy.visit("http://localhost:3000/quiz");
    cy.get('a[href*="gameover"]').click();
    cy.url().should("include", "/gameover");
  });
});
