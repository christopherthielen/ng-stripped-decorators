import { StrippedDecoratorsPage } from './app.po';

describe('stripped-decorators App', function() {
  let page: StrippedDecoratorsPage;

  beforeEach(() => {
    page = new StrippedDecoratorsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
