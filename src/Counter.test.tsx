import React from "react";
import { render } from "@testing-library/react-native";
import Counter from "./Counter";

describe("Counter", () => {
    it("renders correctly", () => {
      render(<Counter/>);
    });
});