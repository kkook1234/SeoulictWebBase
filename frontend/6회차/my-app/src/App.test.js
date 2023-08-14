import { render, screen } from '@testing-library/react';
import App from './App01';

//테스트 하나 만들기!
test('renders learn react link',()=>{
  render(<App/>)//App 컴포넌트를 렌더링(테스트) 해본다!
  const linkElement=screen.getByText("This is TDD")
  expect(linkElement).toBeInTheDocument()
})