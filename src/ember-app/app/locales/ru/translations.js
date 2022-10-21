import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Domashki',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Domashki',
          title: 'Domashki'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-domashki-дисциплина-l': IISDomashkiДисциплинаLForm,
    'i-i-s-domashki-журнал-l': IISDomashkiЖурналLForm,
    'i-i-s-domashki-дисциплина-e': IISDomashkiДисциплинаEForm,
    'i-i-s-domashki-журнал-e': IISDomashkiЖурналEForm
  },

});

export default translations;
