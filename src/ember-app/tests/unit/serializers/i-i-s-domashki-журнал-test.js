import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-domashki-журнал', 'Unit | Serializer | i-i-s-domashki-журнал', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-domashki-журнал',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-domashki-дисциплина',
    'model:i-i-s-domashki-домашка',
    'model:i-i-s-domashki-журнал',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
