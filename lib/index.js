// export this package's api
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Select = require('./Select');

var _Select2 = _interopRequireDefault(_Select);

var _TreeNode = require('./TreeNode');

var _TreeNode2 = _interopRequireDefault(_TreeNode);

_Select2['default'].TreeNode = _TreeNode2['default'];
exports['default'] = _Select2['default'];
module.exports = exports['default'];