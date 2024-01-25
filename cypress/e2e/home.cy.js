describe("Drag and Drop Test", () => {
  beforeEach(() => {
    cy.viewport(1500, 800);
    cy.visit("http://localhost:3000/home");
  });
  it("Selecciona tres cartas y habilita el botón de lectura", () => {
    cy.get('[data-testid="placeholderPASADO"]').then(($target) => {
      const targetPosition = $target[0].getBoundingClientRect();
      cy.get('[data-testid="card-1"]').trigger("mousedown", { force: true });
      cy.get("body").trigger(
        "mousemove",
        targetPosition.left + 10,
        targetPosition.top + 10,
        { force: true }
      );

      cy.get('[data-testid="placeholderPASADO"]').trigger("mouseup", {
        force: true,
      });
    });

    cy.get('[data-testid="placeholderPRESENTE"]').then(($target) => {
      const targetPosition = $target[0].getBoundingClientRect();
      cy.get('[data-testid="card-2"]').trigger("mousedown", { force: true });
      cy.get("body").trigger(
        "mousemove",
        targetPosition.left + 10,
        targetPosition.top + 10,
        { force: true }
      );

      cy.get('[data-testid="placeholderPRESENTE"]').trigger("mouseup", {
        force: true,
      });
    });
    cy.get('[data-testid="placeholderFUTURO"]').then(($target) => {
      const targetPosition = $target[0].getBoundingClientRect();
      cy.get('[data-testid="card-3"]').trigger("mousedown", { force: true });
      cy.get("body").trigger(
        "mousemove",
        targetPosition.left + 10,
        targetPosition.top + 10,
        { force: true }
      );

      cy.get('[data-testid="placeholderFUTURO"]').trigger("mouseup", {
        force: true,
      });
    });

    cy.wait(500);

    // Verifica que el botón esté habilitado después del arrastre
    cy.get('[data-testid="btnReading"]').should("be.enabled");
    // cy.get('[data-testid="btnReading"]').should("be.enabled");
  });
});
