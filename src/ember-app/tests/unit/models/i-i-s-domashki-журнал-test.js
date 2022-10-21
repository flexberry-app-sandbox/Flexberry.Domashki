import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-domashki-журнал', 'Unit | Model | i-i-s-domashki-журнал', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-domashki-дисциплина',
    'model:i-i-s-domashki-домашка',
    'model:i-i-s-domashki-журнал',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
