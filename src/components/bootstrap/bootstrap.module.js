import BootstrapComponent from './bootstrap.component';
import BootstrapConfig from './bootstrap.config';
import BootstrapRun from './bootstrap.run';
import '../footer/footer.module';
import '../header/header.module';
import '../navigation/navigation.module';
import '../../services/users/users.module';
import '../../views/home/home.module';
import '../../views/users/users.module';

export default angular
  .module('tgh.component.bootstrap', [
    'tgh.component.footer',
    'tgh.component.header',
    'tgh.component.navigation',
    'tgh.service.users',
    'tgh.view.home',
    'tgh.view.users'
  ])
  .config(BootstrapConfig)
  .run(BootstrapRun)
  .directive('tghBootstrap', () => new BootstrapComponent());