// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import AbsconsCardMultipleAdd from "./AbsconsCardMultipleAdd";
import { AbsconsCardMultipleAddProps } from "./AbsconsCardMultipleAdd.types";
describe("Test Component", () => {
  let props: AbsconsCardMultipleAddProps;
  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });
  const renderComponent = () => render(<AbsconsCardMultipleAdd {...props} />);
  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();
    const component = getByTestId("CardMultipleAdd");
    expect(component).toHaveTextContent("harvey was here");
  });
});
