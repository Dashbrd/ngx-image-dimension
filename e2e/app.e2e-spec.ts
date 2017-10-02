import { NgxImageDimensionPage } from './app.po';

describe('ngx-image-dimension App', () => {
  let page: NgxImageDimensionPage;

  beforeEach(() => {
    page = new NgxImageDimensionPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
