import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.журнал-выполнения-д-з.caption'),
          title: i18n.t('forms.application.sitemap.журнал-выполнения-д-з.title'),
          children: [{
            link: 'i-i-s-domashki-дисциплина-l',
            caption: i18n.t('forms.application.sitemap.журнал-выполнения-д-з.i-i-s-domashki-дисциплина-l.caption'),
            title: i18n.t('forms.application.sitemap.журнал-выполнения-д-з.i-i-s-domashki-дисциплина-l.title'),
            children: null
          }, {
            link: 'i-i-s-domashki-журнал-l',
            caption: i18n.t('forms.application.sitemap.журнал-выполнения-д-з.i-i-s-domashki-журнал-l.caption'),
            title: i18n.t('forms.application.sitemap.журнал-выполнения-д-з.i-i-s-domashki-журнал-l.title'),
            icon: 'calendar',
            children: null
          }]
        }
      ]
    };
  }),
})