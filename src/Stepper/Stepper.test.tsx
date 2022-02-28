// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Stepper from "./Stepper";
import { StepperProps } from "./Stepper.types";
describe("Test Component", () => {
  let props: StepperProps;
  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });
  const renderComponent = () => render(<Stepper {...props} />);
  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();
    const component = getByTestId("Stepper");
    expect(component).toHaveTextContent("harvey was here");
  });
});
