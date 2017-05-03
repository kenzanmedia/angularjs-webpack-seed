import './navigation.module';

describe('tgh.component.navigation', () => {
  let scope, element;

  beforeEach(angular.mock.module('tgh.component.navigation'));

  beforeEach(inject(function(_$rootScope_, _$compile_) {
    let $rootScope = _$rootScope_, $compile = _$compile_;

    scope = $rootScope.$new();

    element = angular.element('<tgh-navigation></tgh-navigation>');

    $compile(element)(scope);
    scope.$digest();
  }));

  afterEach(function () {
    scope = null;
    element = null;
  });

  it('should test the navigation component exists', () => {
    expect(scope).to.not.be.undefined;
    expect(element).to.not.be.undefined;
    expect(element.find('nav').length).to.equal(1);
    expect(element.find('ul').length).to.equal(1);
  });

  it('should test that links are set correctly', () => {
    let links = element.find('a');

    expect(element.find('li').length).to.equal(2);
    expect(element.find('a').length).to.equal(2);

    expect(links[0].text).to.equal('Home');
    expect(links[1].text).to.equal('Users');
  });

});