import {render, screen} from "@testing-library/react";
import Greeting from "./Greeting";

test('renders hello world as a text', () => {
  // Arrange
  render(<Greeting/>)

  // Act
  //... nothing to do here

  //Assert
  const helloWorldElement = screen.getByText('Hello World!')
  const loginElement = screen.queryByText('Login')

  expect(helloWorldElement).toBeInTheDocument()
  expect(loginElement).not.toBeInTheDocument()
})