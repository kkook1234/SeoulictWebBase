import { render, screen, fireEvent } from "@testing-library/react";
//fireEvent는 이벤트 발생 테스트를 위한 객체
import App from "./App02";

test("the counter starts at 0", () => {
  render(<App />);
  //screen object를 이용해서 원하는 엘레멘트에 접근(접근할 때  ID로)
  const counterElement = screen.getByTestId("counter");
  // id가 counter인 엘레멘트의 텍스트가 0인지 테스트
  expect(counterElement).toHaveTextContent(0);
});

test("minus button has correct text", () => {
  render(<App />);
  const minusButtonElement = screen.getByTestId("minus-button");
  expect(minusButtonElement).toHaveTextContent("-");
});

test("plus button has correct text", () => {
  render(<App />);
  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toHaveTextContent("+");
});
//증가,감소 버튼에서 클릭 이벤트 발생 시 증감이 정상적으로 이루어지는가 테스트
test("When the + button is pressed, the counter changes to 1", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  fireEvent.click(buttonElement);//fireEvent 객체가 클릭 메소드에 요소를 전달받아 클릭 이벤트를 실험한다.
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
});

test("When the - button is pressed, the counter changes to -1", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("minus-button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(-1);
});

test("on/off button has blue color", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("on/off-button");
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });//스타일 검사
});

//온오프 버튼 클릭 시 증감 버튼이 차단되는지 테스트
test("Prevent the -,+ button from being pressed when the on/off button is cliecked", () => {
  render(<App />);
  const onOffButtonElement = screen.getByTestId("on/off-button");
  fireEvent.click(onOffButtonElement);
  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toBeDisabled();
});