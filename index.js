var nested = require('nested-objects');
var express = require('express');
express.application.set = function appSetNested (setting, val) {
  if (1 == arguments.length) {
    return nested.get(this.settings, setting);
  } else {
    nested.set(this.settings, setting, val);
    return this;
  }
};
