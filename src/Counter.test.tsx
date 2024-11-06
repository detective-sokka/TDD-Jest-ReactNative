import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import Counter from "./Counter";

describe("Counter", () => {
    it("renders correctly", () => {
      render(<Counter/>);
    });

    it("shows an intial state of 0", () => {
      const { queryByText } = render(<Counter/>);

      const intialState = queryByText("Counter:0");
      expect(intialState).not.toBeNull();
    });

    it("increments by 1 each time increment is pressed", () => {
      const { queryByText, getByTestId } = render(<Counter/>);

      const initialState = queryByText("Counter:0");
      expect(initialState).not.toBeNull();

      const increment = getByTestId("incrementButton");
      fireEvent.press(increment);

      const oneState = queryByText("Counter:1");
      expect(oneState).not.toBeNull();
    });

    it("decrements by 1 each time decrement is pressed", () => {
      const { queryByText, getByTestId } = render(<Counter/>);

      const initialState = queryByText("Counter:0");
      expect(initialState).not.toBeNull();

      const decrement = getByTestId("decrementButton");
      fireEvent.press(decrement);

      const minumOneState = queryByText("Counter:-1");
      expect(minumOneState).not.toBeNull();
    })
});