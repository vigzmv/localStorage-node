'use strict';

const values = new Map();

class LocalStorage {
  getItem(key) {
    if (values.has(key)) {
      return String(values.get(String(key)));
    }
    return null;
  }

  setItem(key, val) {
    values.set(String(key), String(val));
  }

  removeItem(key) {
    values.delete(key);
  }

  clear() {
    values.clear();
  }

  key(i) {
    if (arguments.length === 0) {
      throw new TypeError(
        "Failed to execute 'key' on 'Storage': 1 argument required, but only 0 present.",
      );
    }
    var arr = Array.from(values.keys());
    return arr[i];
  }

  get length() {
    return values.size;
  }
}

const instance = new LocalStorage();

const localStorage = new Proxy(instance, {
  set: function(obj, prop, value) {
    if (LocalStorage.prototype.hasOwnProperty(prop)) {
      instance[prop] = value;
    } else {
      instance.setItem(prop, value);
    }
    return true;
  },

  get: function(target, name) {
    if (LocalStorage.prototype.hasOwnProperty(name)) {
      return instance[name];
    }
    if (values.has(name)) {
      return instance.getItem(name);
    }
  },
});

global.localStorage = localStorage;
