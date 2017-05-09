import UsersConfig from './users.config';

import uirouter from 'angular-ui-router';
import oclazyload from 'oclazyload';

export default angular
  .module('tgh.view.users', [
    uirouter,
    oclazyload
  ])
  .config(UsersConfig);