import { AngularHnPage } from './app.po';

describe('angular-hn App', () => {
  let page: AngularHnPage;

  beforeEach(() => {
    page = new AngularHnPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
