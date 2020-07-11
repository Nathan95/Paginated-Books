import React from "react";
import { shallow } from "enzyme";
import Pagination from "../components/Pagination";

let array = "1, 2, 3";
let numbers = "5";

describe("Pagination component", () => {
  const component = shallow(
    <Pagination booksPerPage={numbers} booksAmount={numbers} paginate={array} />
  );

  describe("Should render with no errors", () => {
    it("Should render ul element", () => {
      const element = component.find("ul");
      expect(element.length).toBe(1);
    });
  });
});
