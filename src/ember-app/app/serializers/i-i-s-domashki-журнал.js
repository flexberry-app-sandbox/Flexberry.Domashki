import { Serializer as ЖурналSerializer } from
  '../mixins/regenerated/serializers/i-i-s-domashki-журнал';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЖурналSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
