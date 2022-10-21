import { Serializer as ДомашкаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-domashki-домашка';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДомашкаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
