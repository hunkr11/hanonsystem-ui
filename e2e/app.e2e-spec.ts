import { AngularThattuKadaPage } from './app.po';

describe('angular-thattu-kada App', () => {
  let page: AngularThattuKadaPage;

  beforeEach(() => {
    page = new AngularThattuKadaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
