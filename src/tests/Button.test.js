/* eslint-disable testing-library/no-node-access */
import { render, screen, fireEvent } from "@testing-library/react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";

test("onClick function is called when button is clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>foobar</Button>);
    const button = screen.getByText("foobar").closest("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
});

test("button icon is aligned to the left by default", () => {
    render(<Button icon={faCartShopping}>foobar</Button>);
    const button = screen.getByText("foobar").closest("button");
    expect(button.childNodes[0].tagName.toLowerCase()).toBe("svg");
});

test("button icon is aligned to the right when given iconAlign='right'", () => {
    render(
        <Button icon={faCartShopping} iconAlign="right">
            foobar
        </Button>
    );
    const button = screen.getByText("foobar").closest("button");
    expect(button.childNodes[1].tagName.toLowerCase()).toBe("svg");
});
