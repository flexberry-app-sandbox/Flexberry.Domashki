import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISDomashkiДисциплинаLForm from './forms/i-i-s-domashki-дисциплина-l';
import IISDomashkiЖурналLForm from './forms/i-i-s-domashki-журнал-l';
import IISDomashkiДисциплинаEForm from './forms/i-i-s-domashki-дисциплина-e';
import IISDomashkiЖурналEForm from './forms/i-i-s-domashki-журнал-e';
import IISDomashkiДисциплинаModel from './models/i-i-s-domashki-дисциплина';
import IISDomashkiДомашкаModel from './models/i-i-s-domashki-домашка';
import IISDomashkiЖурналModel from './models/i-i-s-domashki-журнал';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-domashki-дисциплина': IISDomashkiДисциплинаModel,
    'i-i-s-domashki-домашка': IISDomashkiДомашкаModel,
    'i-i-s-domashki-журнал': IISDomashkiЖурналModel
  },

  'application-name': 'Domashki',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Domashki',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Domashki',
          title: 'Domashki'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'журнал-выполнения-д-з': {
          caption: 'Журнал выполнения ДЗ',
          title: 'Журнал выполнения ДЗ',
          'i-i-s-domashki-дисциплина-l': {
            caption: 'Дисциплина',
            title: ''
          },
          'i-i-s-domashki-журнал-l': {
            caption: 'Журнал ДЗ',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-domashki-дисциплина-l': IISDomashkiДисциплинаLForm,
    'i-i-s-domashki-журнал-l': IISDomashkiЖурналLForm,
    'i-i-s-domashki-дисциплина-e': IISDomashkiДисциплинаEForm,
    'i-i-s-domashki-журнал-e': IISDomashkiЖурналEForm
  },

});

export default translations;
