import './header.module';

describe('tgh.component.header', () => {
  let scope, element;

  beforeEach(angular.mock.module('tgh.component.header'));

  beforeEach(inject(function(_$rootScope_, _$compile_) {
    let $rootScope = _$rootScope_, $compile = _$compile_;

    scope = $rootScope.$new();

    element = angular.element('<tgh-header></tgh-header>');

    $compile(element)(scope);
    scope.$digest();
  }));

  afterEach(function () {
    scope = null;
    element = null;
  });

  it('should test the header component exists', () => {
    expect(scope).to.not.be.undefined;
    expect(element).to.not.be.undefined;
    expect(element.find('header').length).to.equal(1);
  });

  it('should test the banner text is correct is correct', () => {
    let banner = element.find('h2');

    expect(banner.html()).to.equal('The Greenhouse.io - AngularJS / Webpack Starter Kit');
    expect(banner.length).to.equal(1);
  });

});