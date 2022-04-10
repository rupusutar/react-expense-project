import { cleanup, render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import Expenses from "../Expenses";

const data = [
  {
    id: "1",
    date: new Date(2020, 7, 14),
    title: "Car insurance",
    amount: "345",
  },
  {
    id: "2",
    date: new Date(2021, 7, 14),
    title: "Car insurance",
    amount: "250",
  },
];

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Expenses data={data}></Expenses>, div);
});

it("renders given expense correctly", () => {
  const { getByTestId } = render(<Expenses data={data} />);
  expect(getByTestId("expenses1").childElementCount).toBe(2);
});
