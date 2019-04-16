import Model from 'ember-data/model';
import {hasMany} from '@ember-decorators/data';

export default class AuthorModel extends Model {
  @hasMany() books;
}
