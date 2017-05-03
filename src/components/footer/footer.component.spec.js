import './footer.module';

describe('tgh.component.footer', () => {
  let scope, element;

  beforeEach(angular.mock.module('tgh.component.footer'));

  beforeEach(inject(function(_$rootScope_, _$compile_) {
    let $rootScope = _$rootScope_, $compile = _$compile_;

    scope = $rootScope.$new();

    element = angular.element('<tgh-footer></tgh-footer>');

    $compile(element)(scope);
    scope.$digest();
  }));

  afterEach(function () {
    scope = null;
    element = null;
  });

  it('should test the footer component exists', () => {
    expect(scope).to.not.be.undefined;
    expect(element).to.not.be.undefined;
    expect(element.find('footer').length).to.equal(1);
  });

  it('should test the year is correct', () => {
    let year = new Date().getFullYear();
    let copyright = element.find('p');

    expect(copyright.html()).to.equal('© 2014 - ' + year);
    expect(copyright.length).to.equal(1);
    expect(copyright.hasClass('copyright')).to.equal(true);
  });

});