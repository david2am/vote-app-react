import { ReactElement, ReactNode } from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'urql'
import { client } from '../graphql'

interface Props {
  children: ReactNode
}
const Wrapper = ({
  children
}: Props): ReactElement => (
    <Provider value={client}>
      { children }
    </Provider>
)

const customRender = (
  ui: JSX.Element,
  options?: any,
): any => render(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';
export { customRender as render };
