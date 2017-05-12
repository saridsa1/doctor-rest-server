import { AngularTestPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Starting tests for doctor-rest-server', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be doctor-rest-server', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('doctor-rest-server');
    })
  });

  it('navbar-brand should be com.novartis.iandd@0.0.1',() => {
    var navbarBrand = element(by.css('.navbar-brand')).getWebElement();
    expect(navbarBrand.getText()).toBe('com.novartis.iandd@0.0.1');
  });

  
    it('ServiceRequest component should be loadable',() => {
      page.navigateTo('/ServiceRequest');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('ServiceRequest');
    });

    it('ServiceRequest table should have 12 columns',() => {
      page.navigateTo('/ServiceRequest');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(12); // Addition of 1 for 'Action' column
      });
    });

  

});
