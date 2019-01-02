# pinterpolate

[![npm](https://img.shields.io/npm/v/pinterpolate.svg)](https://www.npmjs.com/package/pinterpolate)
[![Build Status](https://travis-ci.org/pratishshr/pinterpolate.svg?branch=master)](https://travis-ci.org/pratishshr/pinterpolate)
[![npm](https://img.shields.io/npm/dt/pinterpolate.svg)](https://www.npmjs.com/package/pinterpolate)

> Simple string formatting.

## Installation

```sh
$ npm install --save pinterpolate
```

```sh
$ yarn add pinterpolate
```

Build supplied string by interpolating properties after delimiter ':' with the given parameters.
Useful for formatting strings.

## Usage

```js
import pinterpolate from 'pinterpolate';

pinterpolate('/users/:id', { id: 1 });
// => '/users/1'

pinterpolate(':name is here.', { name: 'Barbara' });
// => 'Barbaba is here.'
```

## Use Case

I mostly use this utility in conjuction with my API endpoints and React Router routes.
#### For APIs
```js
const USERS_IMAGE = '/users/:userId/images/:imageId'

export function fetchUsersImage(userId, imageId) {
  return http.get(pinterpolate(USERS_IMAGE, {
    userId,
    imageId
  })
}
```

#### For React Router routes
```js
// constants/routes.js
const USER = '/users/:userId'
const USERS_RECORD = '/users/:userId/records/:recordId';

// Router.js
export Router = () => (
  <Router> 
    <Route path={routes.USER} component={UserComponent} />
    <Route path={routes.USERS_RECORD} component={RecordComponent} />
  </Router>
);

// For links
export Component = ({userId, recordId}) => (
  <div>
    <Link to={pinterpolate(routes.USERS_RECORD, {userId, recordId})} />
    <Link to={pinterpolate(routes.USER, {userId})} />
  </div>
);
```
