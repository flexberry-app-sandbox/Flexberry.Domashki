import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-domashki-дисциплина-l');
  this.route('i-i-s-domashki-дисциплина-e',
  { path: 'i-i-s-domashki-дисциплина-e/:id' });
  this.route('i-i-s-domashki-дисциплина-e.new',
  { path: 'i-i-s-domashki-дисциплина-e/new' });
  this.route('i-i-s-domashki-журнал-l');
  this.route('i-i-s-domashki-журнал-e',
  { path: 'i-i-s-domashki-журнал-e/:id' });
  this.route('i-i-s-domashki-журнал-e.new',
  { path: 'i-i-s-domashki-журнал-e/new' });
});

export default Router;
