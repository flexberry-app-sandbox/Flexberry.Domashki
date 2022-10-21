import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  тема: DS.attr('string'),
  дата: DS.attr('date'),
  оценка: DS.attr('number'),
  журнал: DS.belongsTo('i-i-s-domashki-журнал', { inverse: 'домашка', async: false })
});

export let ValidationRules = {
  тема: {
    descriptionKey: 'models.i-i-s-domashki-домашка.validations.тема.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-domashki-домашка.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  оценка: {
    descriptionKey: 'models.i-i-s-domashki-домашка.validations.оценка.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  журнал: {
    descriptionKey: 'models.i-i-s-domashki-домашка.validations.журнал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДомашкаE', 'i-i-s-domashki-домашка', {
    тема: attr('Тема', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    оценка: attr('Оценка', { index: 2 })
  });
};
