import { RestfulAPIPage } from './app.po';

describe('restful-api App', () => {
  let page: RestfulAPIPage;

  beforeEach(() => {
    page = new RestfulAPIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
