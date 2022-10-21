import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  курс: DS.attr('number'),
  итог: DS.attr('number'),
  дисциплина: DS.belongsTo('i-i-s-domashki-дисциплина', { inverse: null, async: false }),
  домашка: DS.hasMany('i-i-s-domashki-домашка', { inverse: 'журнал', async: false })
});

export let ValidationRules = {
  курс: {
    descriptionKey: 'models.i-i-s-domashki-журнал.validations.курс.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  итог: {
    descriptionKey: 'models.i-i-s-domashki-журнал.validations.итог.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дисциплина: {
    descriptionKey: 'models.i-i-s-domashki-журнал.validations.дисциплина.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  домашка: {
    descriptionKey: 'models.i-i-s-domashki-журнал.validations.домашка.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЖурналE', 'i-i-s-domashki-журнал', {
    курс: attr('Курс', { index: 0 }),
    итог: attr('Итог', { index: 1 }),
    дисциплина: belongsTo('i-i-s-domashki-дисциплина', 'Дисциплина', {
      название: attr('Название', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'название' }),
    домашка: hasMany('i-i-s-domashki-домашка', 'Домашка', {
      тема: attr('Тема', { index: 0 }),
      дата: attr('Дата', { index: 1 }),
      оценка: attr('Оценка', { index: 2 })
    })
  });

  modelClass.defineProjection('ЖурналL', 'i-i-s-domashki-журнал', {
    курс: attr('Курс', { index: 0 }),
    итог: attr('Итог', { index: 1 }),
    дисциплина: belongsTo('i-i-s-domashki-дисциплина', 'Название', {
      название: attr('Название', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
