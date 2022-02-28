// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Buttons from "./Buttons";
import { ButtonsProps } from "./IconButton.types";
describe("Test Component", () => {
  let props: ButtonsProps;
  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });
  const renderComponent = () => render(<Buttons {...props} />);
  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();
    const component = getByTestId("Buttons");
    expect(component).toHaveTextContent("harvey was here");
  });
});
