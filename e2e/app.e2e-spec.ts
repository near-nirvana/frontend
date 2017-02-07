import { NnFePage } from './app.po';

describe('nn-fe App', function() {
  let page: NnFePage;

  beforeEach(() => {
    page = new NnFePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
