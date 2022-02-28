// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import StackHorizontal from "./StackHorizontal";
import { StackHorizontalProps } from "./StackHorizontal.types";
describe("Test Component", () => {
  let props: StackHorizontalProps;
  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });
  const renderComponent = () => render(<StackHorizontal {...props} />);
  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();
    const component = getByTestId("StackHorizontal");
    expect(component).toHaveTextContent("harvey was here");
  });
});
