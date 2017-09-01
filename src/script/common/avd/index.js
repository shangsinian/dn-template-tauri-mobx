import React from 'react';
import { Provider } from 'mobx-react';
import {hashHistory} from 'react-router';
import invariant from 'invariant';
import camelCase from 'camel-case';

export default class Avd {

  constructor () {
    this._router = null;
    this._stores = [];
    this._history = hashHistory;
  }
  
  store (store) {
    const storeName = camelCase(store.namespace);
    this._stores[storeName] = new store();
  }

  router (router) {
    invariant(typeof router === 'function', 'app.router: router should be function');
    this._router = router;
  }

  start (container) {
    if (typeof container === 'string') {
      container = document.querySelector(container);
      invariant(container, `app.start: could not query selector: ${container}`);
    }

    invariant(!container || this.isHTMLElement(container), 'app.start: container should be HTMLElement');
    invariant(this._router, 'app.start: router should be defined');

    if (container) {
      this.render(container, this._stores, this, this._router);
    } else {
      return this.getProvider(this._stores, this, this._router);
    }
  }

  // //////////////////////////////////
  // Helpers

  getProvider(store, app, router) {
    return extraProps => (
      <Provider store={store}>
        { router({ app, history: app._history, ...extraProps }) }
      </Provider>
    );
  }

  render(container, store, app, router) {
    const ReactDOM = require('react-dom');
    ReactDOM.render(React.createElement(this.getProvider(store, app, router)), container);
  }

  isHTMLElement(node) {
    return typeof node === 'object' && node !== null && node.nodeType && node.nodeName;
  }
}