import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

// Set up the testing suite
describe("Greeting Component", () => {
    test('Renders "Hello World" as a text.', () => {
        // Arrange -- Set up your test data and conditions!
        // i.e. Render the component you will be testing
        render(<Greeting />);

        // Act -- Run the logic that should be tested!
        // In this case, not really anything... Just rendering a component

        // Assert -- Compare the executed results to what we expect the results to be!
        // i.e. In this scenario, lets check to see if the component actually rendered the text we wanted it to!
        const helloWorldElement = screen.getByText("Hello World", {
            exact: false,
        });

        expect(helloWorldElement).toBeInTheDocument();
    });

    test('Paragraph text remains unchanged before button is clicked', () => {
        // Arrange -- Set up your test data and conditions!
        // i.e. Render the component you will be testing
        render(<Greeting />);

        // Act -- Run the logic that should be tested!
        // In this case, not really anything... Just rendering a component

        // Assert -- Compare the executed results to what we expect the results to be!
        // i.e. In this scenario, lets check to see if the component actually rendered the text we wanted it to!
        const paragraphElement = screen.getByText("It's good to see you!", {
            exact: false,
        });

        expect(paragraphElement).toBeInTheDocument();
    });

    test('Paragraph text changes after button is clicked', () => {
        // Arrange -- Set up your test data and conditions!
        // i.e. Render the component you will be testing
        render(<Greeting />);

        // Act -- Run the logic that should be tested!        
        const button = screen.getByRole('button')
        userEvent.click(button)

        // Assert -- Compare the executed results to what we expect the results to be!
        // i.e. In this scenario, lets check to see if the component actually rendered the text we wanted it to!
        const paragraphElement = screen.getByText("Changed!");

        expect(paragraphElement).toBeInTheDocument();
    });

    test('does not render "Good to see you" if the button was clicked', () => {
        // Arrange -- Set up your test data and conditions!
        // i.e. Render the component you will be testing
        render(<Greeting />);

        // Act -- Run the logic that should be tested!        
        const button = screen.getByRole('button')
        userEvent.click(button)

        // Assert -- Compare the executed results to what we expect the results to be!
        // i.e. In this scenario, lets check to see if the component actually rendered the text we wanted it to!
        const paragraphElement = screen.queryByText("It's good to see you!", { // Query by text will return null if nothing is found.
            exact: false,
        });

        expect(paragraphElement).toBeNull()
    });
});
