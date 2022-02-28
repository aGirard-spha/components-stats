// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import CardMultipleAdd from "./CardMultipleAdd";
import { CardMultipleAddProps } from "./CardMultipleAdd.types";
describe("Test Component", () => {
  let props: CardMultipleAddProps;
  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });
  const renderComponent = () => render(<CardMultipleAdd {...props} />);
  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();
    const component = getByTestId("CardMultipleAdd");
    expect(component).toHaveTextContent("harvey was here");
  });
});
