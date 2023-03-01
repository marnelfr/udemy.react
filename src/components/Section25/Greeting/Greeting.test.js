import {render, screen} from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe('Greeting component', () => {
  test('renders "Hello World!" as a text', () => {
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

  test('renders "Happy to see" as a text', () => {
    render(<Greeting />)

    const hereIsText = screen.getByText('Happy to see', {exact: false})
    expect(hereIsText).toBeInTheDocument()
  })

  test('renders "Changed!" if the button is clicked', () => {
    render(<Greeting />)

    const btn = screen.getByRole('button')
    userEvent.click(btn)

    const outputElement = screen.getByText('Changed!')
    expect(outputElement).toBeInTheDocument()
  })

  test('does not renders "Happy to see" once the button is clicked', () => {
    render(<Greeting />)

    const btn = screen.getByRole('button')
    userEvent.click(btn)

    const happyElement = screen.queryByText('Happy to see', {exact: false})
    expect(happyElement).not.toBeInTheDocument()
  })
})