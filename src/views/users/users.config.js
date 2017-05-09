export default function UsersConfig($stateProvider) {
  'ngInject';

  $stateProvider.state({
    name: 'users',
    url: '/users',
    templateProvider: () => import(/* webpackChunkName: "users.route" */ './users.template.html'),
    controller: 'UsersController',
    controllerAs: 'vm',
    resolve: {
      loadController: ['$ocLazyLoad', function ($ocLazyLoad) {
        return import(/* webpackChunkName: "users.route" */ './users.controller.module')
          .then((module) => {
            $ocLazyLoad.inject('tgh.view.users.ctrl');
            return module;
          });
      }],
      primaryUser: ['UsersService', function (UsersService) {
        return UsersService.getPrimaryUser();
      }]
    }
  });
}