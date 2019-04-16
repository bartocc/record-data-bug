# ember-data 3.4 -> 3.5 update bug

This app works with ember-data 3.4 but does not work with ember-data 3.5

## How to reproduce the bug under ember-data 3.5?

- git clone ...
- yarn
- ember serve
- open localhost:4200/tests

The test `Acceptance | the bug: visit the page` should **fail**

## See it work with ember-data 3.4

- edit `package.json` with `"ember-data": "~3.5.0"`
- yarn
- ember serve
- open localhost:4200/tests

The test `Acceptance | the bug: visit the page` should **pass**
