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
function menuBarConstructor(): HTMLUListElement {
  render(<Main />);
  return screen.getByRole('menubar') as HTMLUListElement;
}

describe('* Main tests', () => {

  it('Should have a menubar', () => {
    const navbar = menuBarConstructor();
    expect(navbar).toBeTruthy();
  });

  it('Should have 6 menuItems', async () => {
    const menuItemList = await menuItemListConstructor();
    expect(menuItemList).toHaveLength(6);
  });

})