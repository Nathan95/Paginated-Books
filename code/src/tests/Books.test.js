import React from "react";
import { shallow } from "enzyme";
import Books from "../components/Books";

const array = [
  {
    id: "222",
    book_title: "book",
    book_author: [(0: "mary")],
    book_pages: "222",
    book_publication_city: "germany",
    book_publication_country: "germany",
    book_publication_year: "1998"
  }
];

let loading = true;

describe("Books component", () => {
  let loading = true;
  const component = shallow(<Books books={array} />);
  const loadingComponent = shallow(<Books books={array} loading={loading} />);

  describe("Should render with no errors", () => {
    it("Should render Table element", () => {
      const element = component.find("tbody");
      expect(element.length).toBe(1);
    });

    it("Should render h3 element while loading", () => {
      const element = loadingComponent.find("h3");
      const text = "Loading...";
      expect(element.text()).toEqual(text);
    });
  });
});
