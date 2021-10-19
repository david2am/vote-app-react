import { Main } from './Main'
import { render, screen } from '../../../utils/customRender'
import { server, graphql } from '../../../mocks'

/* Test Cases
- it "Should have a menubar"
- it "Should have 3 menuItems"
*/

async function menuItemListConstructor(): Promise<HTMLElement[]> {
  render(<Main />);
  return await screen.findAllByRole('menuitem') as HTMLElement[];
}
async function menuBarConstructor(): Promise<HTMLUListElement> {
  render(<Main />);
  return await screen.findByRole('menubar') as HTMLUListElement;
}
async function headingConstructor(): Promise<HTMLHeadingElement> {
  render(<Main />);
  return await screen.findByRole('heading', { name: /error/i }) as HTMLHeadingElement;
}

describe('* Main tests', () => {

  it('Should have a menubar', async () => {
    const navbar = await menuBarConstructor();
    expect(navbar).toBeTruthy();
  });

  it('Should have 4 menuItems', async () => {
    const menuItemList = await menuItemListConstructor();
    expect(menuItemList).toHaveLength(4);
  });

  test('Should handle failures', async () => {
    server.use(
      graphql.query('CharactersQuery', (_req, res, ctx) => res(
        ctx.status(500),
        ctx.data({ error: 'An error has ocurred, please try later' })
      ))
    )

    const heading = await headingConstructor();
    expect(heading).toBeTruthy();
  });

})