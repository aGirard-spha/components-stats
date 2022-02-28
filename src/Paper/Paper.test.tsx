// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Paper from "./Paper";
import { PaperProps } from "./Paper.types";
describe("Test Component", () => {
  let props: PaperProps;
  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });
  const renderComponent = () => render(<Paper {...props} />);
  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();
    const component = getByTestId("Paper");
    expect(component).toHaveTextContent("harvey was here");
  });
});
