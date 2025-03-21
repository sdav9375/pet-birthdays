import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = class extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
};

Router.map(function () {
  this.route('index', { path: '/' });
});

export default Router;
