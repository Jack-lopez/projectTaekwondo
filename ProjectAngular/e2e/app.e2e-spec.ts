import { APPTPage } from './app.po';

describe('appt App', () => {
  let page: APPTPage;

  beforeEach(() => {
    page = new APPTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
