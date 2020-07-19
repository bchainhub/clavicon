(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.clavicon = {}));
}(this, (function (exports) { 'use strict';

  function create(address) {
    const addr = address.toUpperCase();
    const stop = addr.length;
    const start = stop % 6;
    let chunks = [];
    for (var i = start; i < stop; i = i+6) {
      chunks.push(addr.slice(i, i+6));
    }
    const prefix = addr.slice(0, start);
    const stripes = chunks.map(color => {
      return `<span style="background:#${color}">&nbsp;</span>`
    });
    return '<var class="clavicon">' + prefix + stripes.join('') + '</var>';
  }

  exports.create = create;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
