/**
 * @author codelity_proto@0.0.1
 * @request /home/sebastian/Work/projects/dodle/dodle
 */
import { render, screen } from "@testing-library/react";
import { SlideItem } from "../SlideItem";

describe("SlideItem", () => {
  test("hidden css class is set correctly", () => {
    render(<SlideItem active={false}>Test Content1</SlideItem>);
    const slideItem = screen.getByText("Test Content1");
    expect(slideItem).toHaveClass("hidden");

    render(<SlideItem active={true}>Test Content2</SlideItem>);
    const slideItemVisible = screen.getByText("Test Content2");
    expect(slideItemVisible).not.toHaveClass("hidden");
  });
});
