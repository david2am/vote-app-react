import { ReactElement, ReactNode } from 'react';
import { render } from '@testing-library/react';

interface Props {
  children: ReactNode
}
const Wrapper = ({
  children
}: Props): ReactElement => (
    <>
      { children }
    </>
)

const customRender = (
  ui: JSX.Element,
  options?: any,
): any => render(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';
export { customRender as render };
