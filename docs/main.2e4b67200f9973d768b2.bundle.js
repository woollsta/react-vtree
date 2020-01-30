(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{138:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Row; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n// tslint:disable:no-bitwise naming-convention\n\nvar Row = function Row(_ref) {\n  var index = _ref.index,\n      _ref$data = _ref.data,\n      Node = _ref$data.component,\n      treeData = _ref$data.treeData,\n      order = _ref$data.order,\n      records = _ref$data.records,\n      style = _ref.style,\n      isScrolling = _ref.isScrolling;\n  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Node, Object.assign({}, records[order[index]], {\n    style: style,\n    isScrolling: isScrolling,\n    treeData: treeData\n  }));\n};\n\n//# sourceURL=webpack:///./src/utils.tsx?')},348:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedSizeTree; });\n/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136);\n/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(137);\n/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(139);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(138);\n\n\n\n\n\n\n\n\nvar computeTree = function computeTree(_temp, _ref, _ref2) {\n  var _ref3 = _temp === void 0 ? {} : _temp,\n      _ref3$refreshNodes = _ref3.refreshNodes,\n      refreshNodes = _ref3$refreshNodes === void 0 ? false : _ref3$refreshNodes,\n      _ref3$useDefaultOpenn = _ref3.useDefaultOpenness,\n      useDefaultOpenness = _ref3$useDefaultOpenn === void 0 ? false : _ref3$useDefaultOpenn;\n\n  var treeWalker = _ref.treeWalker;\n  var prevRecords = _ref2.records,\n      recomputeTree = _ref2.recomputeTree;\n  var order = [];\n\n  var records = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, prevRecords);\n\n  var iter = treeWalker(refreshNodes);\n\n  if (useDefaultOpenness) {\n    for (var id in records) {\n      records[id].isOpen = records[id].data.isOpenByDefault;\n    }\n  }\n\n  var isPreviousOpened = false;\n\n  while (true) {\n    var _iter$next = iter.next(isPreviousOpened),\n        done = _iter$next.done,\n        value = _iter$next.value;\n\n    if (done || !value) {\n      break;\n    }\n\n    var _id = void 0;\n\n    if (typeof value === \'string\' || typeof value === \'symbol\') {\n      _id = value;\n\n      if (useDefaultOpenness) {\n        records[_id].isOpen = records[_id].data.isOpenByDefault;\n      }\n    } else {\n      (function () {\n        _id = value.id;\n        var isOpenByDefault = value.isOpenByDefault;\n        var record = records[_id];\n\n        if (!record) {\n          record = {\n            data: value,\n            isOpen: isOpenByDefault,\n            toggle: function toggle() {\n              try {\n                record.isOpen = !record.isOpen;\n                return Promise.resolve(recomputeTree({\n                  refreshNodes: record.isOpen\n                })).then(function () {});\n              } catch (e) {\n                return Promise.reject(e);\n              }\n            }\n          };\n          records[_id] = record;\n        } else {\n          record.data = value;\n\n          if (useDefaultOpenness) {\n            record.isOpen = isOpenByDefault;\n          }\n        }\n      })();\n    }\n\n    order.push(_id);\n    isPreviousOpened = records[_id].isOpen;\n  }\n\n  return {\n    order: order,\n    records: records\n  };\n};\n\nvar FixedSizeTree =\n/*#__PURE__*/\nfunction (_React$PureComponent) {\n  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(FixedSizeTree, _React$PureComponent);\n\n  FixedSizeTree.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {\n    var component = props.children,\n        treeData = props.itemData,\n        treeWalker = props.treeWalker;\n    var oldTreeWalker = state.treeWalker,\n        order = state.order;\n    return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({\n      component: component,\n      treeData: treeData\n    }, treeWalker !== oldTreeWalker || !order ? computeTree({\n      refreshNodes: true\n    }, props, state) : null);\n  };\n\n  function FixedSizeTree(props, context) {\n    var _this;\n\n    _this = _React$PureComponent.call(this, props, context) || this;\n    _this.list = react__WEBPACK_IMPORTED_MODULE_4__["createRef"]();\n    _this.state = {\n      component: props.children,\n      recomputeTree: _this.recomputeTree.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this)),\n      records: {},\n      treeWalker: props.treeWalker\n    };\n    return _this;\n  }\n\n  var _proto = FixedSizeTree.prototype;\n\n  _proto.recomputeTree = function recomputeTree(options) {\n    try {\n      var _this3 = this;\n\n      return Promise.resolve(new Promise(function (resolve) {\n        _this3.setState(function (prevState) {\n          return computeTree(options, _this3.props, prevState);\n        }, resolve);\n      }));\n    } catch (e) {\n      return Promise.reject(e);\n    }\n  };\n\n  _proto.scrollTo = function scrollTo(scrollOffset) {\n    var _this$list$current;\n\n    (_this$list$current = this.list.current) == null ? void 0 : _this$list$current.scrollTo(scrollOffset);\n  };\n\n  _proto.scrollToItem = function scrollToItem(id, align) {\n    var _this$list$current2;\n\n    (_this$list$current2 = this.list.current) == null ? void 0 : _this$list$current2.scrollToItem(this.state.order.indexOf(id) || 0, align);\n  };\n\n  _proto.render = function render() {\n    var _this$props = this.props,\n        children = _this$props.children,\n        treeWalker = _this$props.treeWalker,\n        rowComponent = _this$props.rowComponent,\n        rest = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default()(_this$props, ["children", "treeWalker", "rowComponent"]);\n\n    return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react_window__WEBPACK_IMPORTED_MODULE_5__[/* FixedSizeList */ "a"], Object.assign({}, rest, {\n      itemData: this.state,\n      itemCount: this.state.order.length,\n      ref: this.list\n    }), rowComponent);\n  };\n\n  return FixedSizeTree;\n}(react__WEBPACK_IMPORTED_MODULE_4__["PureComponent"]);\n\nFixedSizeTree.defaultProps = {\n  rowComponent: _utils__WEBPACK_IMPORTED_MODULE_6__[/* Row */ "a"]\n};\n\n\n//# sourceURL=webpack:///./src/FixedSizeTree.tsx?')},349:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariableSizeTree; });\n/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136);\n/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(137);\n/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(139);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(138);\n\n\n\n\n\n\n\n\nvar computeTree = function computeTree(_temp, _ref, _ref2) {\n  var _ref3 = _temp === void 0 ? {} : _temp,\n      _ref3$refreshNodes = _ref3.refreshNodes,\n      refreshNodes = _ref3$refreshNodes === void 0 ? false : _ref3$refreshNodes,\n      _ref3$useDefaultHeigh = _ref3.useDefaultHeight,\n      useDefaultHeight = _ref3$useDefaultHeigh === void 0 ? false : _ref3$useDefaultHeigh,\n      _ref3$useDefaultOpenn = _ref3.useDefaultOpenness,\n      useDefaultOpenness = _ref3$useDefaultOpenn === void 0 ? false : _ref3$useDefaultOpenn;\n\n  var treeWalker = _ref.treeWalker;\n  var recomputeTree = _ref2.recomputeTree,\n      prevRecords = _ref2.records,\n      resetAfterId = _ref2.resetAfterId;\n  var order = [];\n\n  var records = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, prevRecords);\n\n  var iter = treeWalker(refreshNodes);\n\n  if (useDefaultHeight || useDefaultOpenness) {\n    for (var _id in records) {\n      if (useDefaultHeight) {\n        records[_id].height = records[_id].data.defaultHeight;\n      }\n\n      if (useDefaultOpenness) {\n        records[_id].isOpen = records[_id].data.isOpenByDefault;\n      }\n    }\n  }\n\n  var isPreviousOpened = false;\n\n  while (true) {\n    var _iter$next = iter.next(isPreviousOpened),\n        done = _iter$next.done,\n        value = _iter$next.value;\n\n    if (done || !value) {\n      break;\n    }\n\n    var _id2 = void 0;\n\n    if (typeof value === \'string\' || typeof value === \'symbol\') {\n      _id2 = value;\n\n      if (useDefaultOpenness) {\n        records[_id2].isOpen = records[_id2].data.isOpenByDefault;\n      }\n\n      if (useDefaultHeight) {\n        records[_id2].height = records[_id2].data.defaultHeight;\n      }\n    } else {\n      (function () {\n        _id2 = value.id;\n        var defaultHeight = value.defaultHeight,\n            isOpenByDefault = value.isOpenByDefault;\n        var record = records[_id2];\n\n        if (!record) {\n          record = {\n            data: value,\n            height: defaultHeight,\n            isOpen: isOpenByDefault,\n            resize: function resize(height, shouldForceUpdate) {\n              record.height = height;\n              resetAfterId(record.data.id, shouldForceUpdate);\n            },\n            toggle: function toggle() {\n              try {\n                record.isOpen = !record.isOpen;\n                return Promise.resolve(recomputeTree({\n                  refreshNodes: record.isOpen,\n                  useDefaultHeight: true\n                })).then(function () {});\n              } catch (e) {\n                return Promise.reject(e);\n              }\n            }\n          };\n          records[_id2] = record;\n        } else {\n          record.data = value;\n\n          if (useDefaultOpenness) {\n            record.isOpen = isOpenByDefault;\n          }\n\n          if (useDefaultHeight) {\n            record.height = defaultHeight;\n          }\n        }\n      })();\n    }\n\n    order.push(_id2);\n    isPreviousOpened = records[_id2].isOpen;\n  }\n\n  return {\n    order: order,\n    records: records\n  };\n};\n\nvar VariableSizeTree =\n/*#__PURE__*/\nfunction (_React$PureComponent) {\n  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(VariableSizeTree, _React$PureComponent);\n\n  VariableSizeTree.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {\n    var component = props.children,\n        treeData = props.itemData,\n        treeWalker = props.treeWalker;\n    var oldTreeWalker = state.treeWalker,\n        order = state.order;\n    return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({\n      component: component,\n      treeData: treeData\n    }, treeWalker !== oldTreeWalker || !order ? computeTree({\n      refreshNodes: true\n    }, props, state) : null);\n  };\n\n  function VariableSizeTree(props, context) {\n    var _this;\n\n    _this = _React$PureComponent.call(this, props, context) || this;\n    _this.list = react__WEBPACK_IMPORTED_MODULE_4__["createRef"]();\n    _this.getItemSize = _this.getItemSize.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this));\n    _this.state = {\n      component: props.children,\n      recomputeTree: _this.recomputeTree.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this)),\n      records: {},\n      resetAfterId: _this.resetAfterId.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this)),\n      treeWalker: props.treeWalker\n    };\n    return _this;\n  }\n\n  var _proto = VariableSizeTree.prototype;\n\n  _proto.recomputeTree = function recomputeTree(options) {\n    try {\n      var _this3 = this;\n\n      return Promise.resolve(new Promise(function (resolve) {\n        _this3.setState(function (prevState) {\n          return computeTree(options, _this3.props, prevState);\n        }, function () {\n          if (options == null ? void 0 : options.useDefaultHeight) {\n            var _this3$list$current;\n\n            (_this3$list$current = _this3.list.current) == null ? void 0 : _this3$list$current.resetAfterIndex(0, true);\n          }\n\n          resolve();\n        });\n      }));\n    } catch (e) {\n      return Promise.reject(e);\n    }\n  };\n\n  _proto.resetAfterId = function resetAfterId(id, shouldForceUpdate) {\n    var _this$list$current;\n\n    if (shouldForceUpdate === void 0) {\n      shouldForceUpdate = false;\n    }\n\n    (_this$list$current = this.list.current) == null ? void 0 : _this$list$current.resetAfterIndex(this.state.order.indexOf(id), shouldForceUpdate);\n  };\n\n  _proto.scrollTo = function scrollTo(scrollOffset) {\n    var _this$list$current2;\n\n    (_this$list$current2 = this.list.current) == null ? void 0 : _this$list$current2.scrollTo(scrollOffset);\n  };\n\n  _proto.scrollToItem = function scrollToItem(id, align) {\n    var _this$list$current3;\n\n    (_this$list$current3 = this.list.current) == null ? void 0 : _this$list$current3.scrollToItem(this.state.order.indexOf(id) || 0, align);\n  };\n\n  _proto.render = function render() {\n    var _this$props = this.props,\n        children = _this$props.children,\n        itemSize = _this$props.itemSize,\n        rowComponent = _this$props.rowComponent,\n        treeWalker = _this$props.treeWalker,\n        rest = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default()(_this$props, ["children", "itemSize", "rowComponent", "treeWalker"]);\n\n    return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react_window__WEBPACK_IMPORTED_MODULE_5__[/* VariableSizeList */ "b"], Object.assign({}, rest, {\n      itemData: this.state,\n      itemCount: this.state.order.length // tslint:disable-next-line:no-unbound-method\n      ,\n      itemSize: itemSize || this.getItemSize,\n      ref: this.list\n    }), rowComponent);\n  };\n\n  _proto.getItemSize = function getItemSize(index) {\n    var _this$state = this.state,\n        order = _this$state.order,\n        records = _this$state.records;\n    return records[order[index]].height;\n  };\n\n  return VariableSizeTree;\n}(react__WEBPACK_IMPORTED_MODULE_4__["PureComponent"]);\n\nVariableSizeTree.defaultProps = {\n  rowComponent: _utils__WEBPACK_IMPORTED_MODULE_6__[/* Row */ "a"]\n};\n\n\n//# sourceURL=webpack:///./src/VariableSizeTree.tsx?')},350:function(module,exports,__webpack_require__){eval("__webpack_require__(351);\n__webpack_require__(707);\nmodule.exports = __webpack_require__(708);\n\n\n//# sourceURL=webpack:///multi_./node_modules/@storybook/core/dist/server/common/polyfills.js_./node_modules/@storybook/core/dist/server/preview/globals.js_./.storybook/config.js?")},462:function(module,exports){eval("/* (ignored) */\n\n//# sourceURL=webpack:///./util.inspect_(ignored)?")},708:function(module,exports,__webpack_require__){eval('/* WEBPACK VAR INJECTION */(function(module) {var _require=__webpack_require__(100),addParameters=_require.addParameters,configure=_require.configure;addParameters({options:{addonPanelInRight:!0,name:"React Virtualized Tree",selectedPanel:"knobs"}});configure(function(){return __webpack_require__(891)},module);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(71)(module)))\n\n//# sourceURL=webpack:///./.storybook/config.js?')},891:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _FixedSizeTree_story__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(892);\n/* harmony import */ var _VariableSizeTree_story__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(902);\n\n\n\n//# sourceURL=webpack:///./__stories__/index.ts?")},892:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76);\n/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(100);\n/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(135);\n/* harmony import */ var _src_FixedSizeTree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(348);\n\n\nvar _marked =\n/*#__PURE__*/\nregeneratorRuntime.mark(treeWalker);\n\n\n\n\n\n\ndocument.body.style.margin = \'0\';\ndocument.body.style.display = \'flex\';\ndocument.body.style.minHeight = \'100%\';\nvar root = document.getElementById(\'root\');\nroot.style.margin = \'10px 0 0 10px\';\nroot.style.flex = \'1\';\nvar nodeId = 0;\n\nvar createNode = function createNode(depth) {\n  if (depth === void 0) {\n    depth = 0;\n  }\n\n  var node = {\n    children: [],\n    id: nodeId,\n    name: "test-" + nodeId\n  };\n  nodeId += 1;\n\n  if (depth === 5) {\n    return node;\n  } // tslint:disable-next-line:increment-decrement\n\n\n  for (var i = 0; i < 5; i++) {\n    node.children.push(createNode(depth + 1));\n  }\n\n  return node;\n};\n\nvar rootNode = createNode();\nvar defaultTextStyle = {\n  marginLeft: 10\n};\nvar defaultButtonStyle = {\n  fontFamily: \'Courier New\'\n};\n\nfunction treeWalker(refresh) {\n  var stack, _ref, node, nestingLevel, id, isOpened, i;\n\n  return regeneratorRuntime.wrap(function treeWalker$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          stack = [];\n          stack.push({\n            nestingLevel: 0,\n            node: rootNode\n          });\n\n        case 2:\n          if (!(stack.length !== 0)) {\n            _context.next = 11;\n            break;\n          }\n\n          _ref = stack.pop(), node = _ref.node, nestingLevel = _ref.nestingLevel;\n          id = node.id.toString();\n          _context.next = 7;\n          return refresh ? {\n            id: id,\n            isLeaf: node.children.length === 0,\n            isOpenByDefault: true,\n            name: node.name,\n            nestingLevel: nestingLevel\n          } : id;\n\n        case 7:\n          isOpened = _context.sent;\n\n          if (node.children.length !== 0 && isOpened) {\n            // tslint:disable-next-line:increment-decrement\n            for (i = node.children.length - 1; i >= 0; i--) {\n              stack.push({\n                nestingLevel: nestingLevel + 1,\n                node: node.children[i]\n              });\n            }\n          }\n\n          _context.next = 2;\n          break;\n\n        case 11:\n        case "end":\n          return _context.stop();\n      }\n    }\n  }, _marked);\n}\n\nvar Node = function Node(_ref2) {\n  var _ref2$data = _ref2.data,\n      isLeaf = _ref2$data.isLeaf,\n      name = _ref2$data.name,\n      nestingLevel = _ref2$data.nestingLevel,\n      isOpen = _ref2.isOpen,\n      style = _ref2.style,\n      toggle = _ref2.toggle;\n  return react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {\n    style: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, style, {\n      alignItems: \'center\',\n      display: \'flex\',\n      marginLeft: nestingLevel * 30 + (isLeaf ? 48 : 0)\n    })\n  }, !isLeaf && react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("button", {\n    type: "button",\n    onClick: toggle,\n    style: defaultButtonStyle\n  }, isOpen ? \'-\' : \'+\')), react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {\n    style: defaultTextStyle\n  }, name));\n};\n\nvar TreePresenter = function TreePresenter(_ref3) {\n  var itemSize = _ref3.itemSize;\n  return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {\n    disableWidth: true\n  }, function (_ref4) {\n    var height = _ref4.height;\n    return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_src_FixedSizeTree__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {\n      treeWalker: treeWalker,\n      itemSize: itemSize,\n      height: height,\n      width: "100%"\n    }, Node);\n  });\n};\n\nObject(_storybook_react__WEBPACK_IMPORTED_MODULE_2__["storiesOf"])(\'Tree\', module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__["withKnobs"]).add(\'FixedSizeTree\', function () {\n  return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](TreePresenter, {\n    itemSize: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__["number"])(\'Row height\', 30)\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(347)(module)))\n\n//# sourceURL=webpack:///./__stories__/FixedSizeTree.story.tsx?')},902:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76);\n/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(100);\n/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(135);\n/* harmony import */ var _src_VariableSizeTree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(349);\n\n\n\n\n\n\ndocument.body.style.margin = \'0\';\ndocument.body.style.display = \'flex\';\ndocument.body.style.minHeight = \'100vh\';\nvar root = document.getElementById(\'root\');\nroot.style.margin = \'10px 0 0 10px\';\nroot.style.flex = \'1\';\nvar nodeId = 0;\n\nvar createNode = function createNode(depth) {\n  if (depth === void 0) {\n    depth = 0;\n  }\n\n  var node = {\n    children: [],\n    id: nodeId,\n    name: "test-" + nodeId\n  };\n  nodeId += 1;\n\n  if (depth === 5) {\n    return node;\n  } // tslint:disable-next-line:increment-decrement\n\n\n  for (var i = 0; i < 5; i++) {\n    node.children.push(createNode(depth + 1));\n  }\n\n  return node;\n};\n\nvar rootNode = createNode();\nvar defaultGapStyle = {\n  marginLeft: 10\n};\nvar defaultButtonStyle = {\n  fontFamily: \'Courier New\'\n};\n\nvar Node = function Node(_ref) {\n  var height = _ref.height,\n      _ref$data = _ref.data,\n      isLeaf = _ref$data.isLeaf,\n      name = _ref$data.name,\n      nestingLevel = _ref$data.nestingLevel,\n      isOpen = _ref.isOpen,\n      resize = _ref.resize,\n      style = _ref.style,\n      toggle = _ref.toggle,\n      itemSize = _ref.treeData;\n  var canOpen = height <= itemSize;\n  var halfSize = itemSize / 2;\n  var toggleNodeSize = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](function () {\n    return resize(canOpen ? height + halfSize : height - halfSize, true);\n  }, [height, resize]);\n  return react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {\n    style: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, style, {\n      alignItems: \'center\',\n      background: canOpen ? undefined : \'#ddd\',\n      display: \'flex\',\n      marginLeft: nestingLevel * 30 + (isLeaf ? 48 : 0)\n    })\n  }, !isLeaf && react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("button", {\n    type: "button",\n    onClick: toggle,\n    style: defaultButtonStyle\n  }, isOpen ? \'-\' : \'+\')), react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {\n    style: defaultGapStyle\n  }, name), react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("button", {\n    type: "button",\n    onClick: toggleNodeSize,\n    style: defaultGapStyle\n  }, canOpen ? \'Open\' : \'Close\')));\n};\n\nvar TreePresenter = function TreePresenter(_ref2) {\n  var itemSize = _ref2.itemSize;\n  var tree = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);\n  var treeWalker = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(refresh) {\n    var stack, _ref3, node, nestingLevel, id, isOpened, i;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            stack = [];\n            stack.push({\n              nestingLevel: 0,\n              node: rootNode\n            });\n\n          case 2:\n            if (!(stack.length !== 0)) {\n              _context.next = 11;\n              break;\n            }\n\n            _ref3 = stack.pop(), node = _ref3.node, nestingLevel = _ref3.nestingLevel;\n            id = node.id.toString();\n            _context.next = 7;\n            return refresh ? {\n              defaultHeight: itemSize,\n              id: id,\n              isLeaf: node.children.length === 0,\n              isOpenByDefault: true,\n              name: node.name,\n              nestingLevel: nestingLevel\n            } : id;\n\n          case 7:\n            isOpened = _context.sent;\n\n            if (node.children.length !== 0 && isOpened) {\n              // tslint:disable-next-line:increment-decrement\n              for (i = node.children.length - 1; i >= 0; i--) {\n                stack.push({\n                  nestingLevel: nestingLevel + 1,\n                  node: node.children[i]\n                });\n              }\n            }\n\n            _context.next = 2;\n            break;\n\n          case 11:\n          case "end":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }), [itemSize]);\n  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {\n    var _tree$current;\n\n    (_tree$current = tree.current) == null ? void 0 : _tree$current.recomputeTree({\n      refreshNodes: true,\n      useDefaultHeight: true\n    });\n  }, [itemSize]);\n  return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {\n    disableWidth: true\n  }, function (_ref4) {\n    var height = _ref4.height;\n    return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_src_VariableSizeTree__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {\n      ref: tree,\n      itemData: itemSize,\n      treeWalker: treeWalker,\n      height: height,\n      width: "100%"\n    }, Node);\n  });\n};\n\nObject(_storybook_react__WEBPACK_IMPORTED_MODULE_2__["storiesOf"])(\'Tree\', module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__["withKnobs"]).add(\'VariableSizeTree\', function () {\n  return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](TreePresenter, {\n    itemSize: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__["number"])(\'Default row height\', 30)\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(347)(module)))\n\n//# sourceURL=webpack:///./__stories__/VariableSizeTree.story.tsx?')}},[[350,1,2]]]);