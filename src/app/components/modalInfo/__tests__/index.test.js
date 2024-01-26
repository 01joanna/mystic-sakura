import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "../ModalInfo";
describe("<Modal/>", () => {
  test("test", async () => {
    render(<Modal isOpen={true} onClose={() => {}} />);
    const modal = screen.getByTestId("modalOverlay");
    expect(modal).toBeInTheDocument();
  });
  test("test", async () => {
    render(<Modal isOpen={true} onClose={() => {}} />);
    const modal = screen.getByTestId("modalOverlay");
    const closeButton = screen.getByTestId("closeButton");
    fireEvent.click(closeButton);
    expect(modal).toHaveClass("modalOpen");
  });
  test("test", () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        {<p>text Mock</p>}
      </Modal>
    );
    const contenidoModal = screen.getByTestId("modalContent");
    expect(contenidoModal).toHaveTextContent("text Mock");
  });
});
