import Model from 'ember-data/model';
import { belongsTo } from '@ember-decorators/data';

export default class BookModel extends Model {
  @belongsTo() author;
}
