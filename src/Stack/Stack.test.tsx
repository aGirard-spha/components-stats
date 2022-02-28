// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Stack from "./Stack";
import { StackProps } from "./Stack.types";
describe("Test Component", () => {
  let props: StackProps;
  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });
  const renderComponent = () => render(<Stack {...props} />);
  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();
    const component = getByTestId("Stack");
    expect(component).toHaveTextContent("harvey was here");
  });
});
