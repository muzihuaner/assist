
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.AssistEntry = factory());
}(this, (function () { 'use strict';

  function ownKeys$1(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys$1(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$1(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, basedir, module) {
  	return module = {
  	  path: basedir,
  	  exports: {},
  	  require: function (path, base) {
        return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
      }
  	}, fn(module, module.exports), module.exports;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  var check = function (it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global_1 =
    // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func -- fallback
    (function () { return this; })() || Function('return this')();

  var fails = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
  });

  var $propertyIsEnumerable = {}.propertyIsEnumerable;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  var f$4 = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$1(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable;

  var objectPropertyIsEnumerable = {
  	f: f$4
  };

  var createPropertyDescriptor = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var toString = {}.toString;

  var classofRaw = function (it) {
    return toString.call(it).slice(8, -1);
  };

  var split = ''.split;

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !Object('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
  } : Object;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible = function (it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
  };

  // toObject with fallback for non-array-like ES3 strings



  var toIndexedObject = function (it) {
    return indexedObject(requireObjectCoercible(it));
  };

  var isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var toPrimitive = function (input, PREFERRED_STRING) {
    if (!isObject(input)) return input;
    var fn, val;
    if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
    if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
    if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject = function (argument) {
    return Object(requireObjectCoercible(argument));
  };

  var hasOwnProperty = {}.hasOwnProperty;

  var has$1 = function hasOwn(it, key) {
    return hasOwnProperty.call(toObject(it), key);
  };

  var document$1 = global_1.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS = isObject(document$1) && isObject(document$1.createElement);

  var documentCreateElement = function (it) {
    return EXISTS ? document$1.createElement(it) : {};
  };

  // Thank's IE8 for his funny defineProperty
  var ie8DomDefine = !descriptors && !fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
    return Object.defineProperty(documentCreateElement('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  var f$3 = descriptors ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPrimitive(P, true);
    if (ie8DomDefine) try {
      return $getOwnPropertyDescriptor(O, P);
    } catch (error) { /* empty */ }
    if (has$1(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
  };

  var objectGetOwnPropertyDescriptor = {
  	f: f$3
  };

  var anObject = function (it) {
    if (!isObject(it)) {
      throw TypeError(String(it) + ' is not an object');
    } return it;
  };

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty = Object.defineProperty;

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  var f$2 = descriptors ? $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (ie8DomDefine) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var objectDefineProperty = {
  	f: f$2
  };

  var createNonEnumerableProperty = descriptors ? function (object, key, value) {
    return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var setGlobal = function (key, value) {
    try {
      createNonEnumerableProperty(global_1, key, value);
    } catch (error) {
      global_1[key] = value;
    } return value;
  };

  var SHARED = '__core-js_shared__';
  var store$1 = global_1[SHARED] || setGlobal(SHARED, {});

  var sharedStore = store$1;

  var functionToString = Function.toString;

  // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
  if (typeof sharedStore.inspectSource != 'function') {
    sharedStore.inspectSource = function (it) {
      return functionToString.call(it);
    };
  }

  var inspectSource = sharedStore.inspectSource;

  var WeakMap$1 = global_1.WeakMap;

  var nativeWeakMap = typeof WeakMap$1 === 'function' && /native code/.test(inspectSource(WeakMap$1));

  var shared = createCommonjsModule(function (module) {
  (module.exports = function (key, value) {
    return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.12.1',
    mode: 'global',
    copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
  });
  });

  var id = 0;
  var postfix = Math.random();

  var uid = function (key) {
    return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
  };

  var keys$1 = shared('keys');

  var sharedKey = function (key) {
    return keys$1[key] || (keys$1[key] = uid(key));
  };

  var hiddenKeys$1 = {};

  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var WeakMap = global_1.WeakMap;
  var set, get, has;

  var enforce = function (it) {
    return has(it) ? get(it) : set(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject(it) || (state = get(it)).type !== TYPE) {
        throw TypeError('Incompatible receiver, ' + TYPE + ' required');
      } return state;
    };
  };

  if (nativeWeakMap || sharedStore.state) {
    var store = sharedStore.state || (sharedStore.state = new WeakMap());
    var wmget = store.get;
    var wmhas = store.has;
    var wmset = store.set;
    set = function (it, metadata) {
      if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      wmset.call(store, it, metadata);
      return metadata;
    };
    get = function (it) {
      return wmget.call(store, it) || {};
    };
    has = function (it) {
      return wmhas.call(store, it);
    };
  } else {
    var STATE = sharedKey('state');
    hiddenKeys$1[STATE] = true;
    set = function (it, metadata) {
      if (has$1(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty(it, STATE, metadata);
      return metadata;
    };
    get = function (it) {
      return has$1(it, STATE) ? it[STATE] : {};
    };
    has = function (it) {
      return has$1(it, STATE);
    };
  }

  var internalState = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
  };

  var redefine = createCommonjsModule(function (module) {
  var getInternalState = internalState.get;
  var enforceInternalState = internalState.enforce;
  var TEMPLATE = String(String).split('String');

  (module.exports = function (O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;
    var state;
    if (typeof value == 'function') {
      if (typeof key == 'string' && !has$1(value, 'name')) {
        createNonEnumerableProperty(value, 'name', key);
      }
      state = enforceInternalState(value);
      if (!state.source) {
        state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
      }
    }
    if (O === global_1) {
      if (simple) O[key] = value;
      else setGlobal(key, value);
      return;
    } else if (!unsafe) {
      delete O[key];
    } else if (!noTargetGet && O[key]) {
      simple = true;
    }
    if (simple) O[key] = value;
    else createNonEnumerableProperty(O, key, value);
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, 'toString', function toString() {
    return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
  });
  });

  var path = global_1;

  var aFunction$1 = function (variable) {
    return typeof variable == 'function' ? variable : undefined;
  };

  var getBuiltIn = function (namespace, method) {
    return arguments.length < 2 ? aFunction$1(path[namespace]) || aFunction$1(global_1[namespace])
      : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
  };

  var ceil = Math.ceil;
  var floor$2 = Math.floor;

  // `ToInteger` abstract operation
  // https://tc39.es/ecma262/#sec-tointeger
  var toInteger = function (argument) {
    return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor$2 : ceil)(argument);
  };

  var min$4 = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  var toLength = function (argument) {
    return argument > 0 ? min$4(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var max$2 = Math.max;
  var min$3 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex = function (index, length) {
    var integer = toInteger(index);
    return integer < 0 ? max$2(integer + length, 0) : min$3(integer, length);
  };

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$2 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject($this);
      var length = toLength(O.length);
      var index = toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare -- NaN check
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod$2(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$2(false)
  };

  var indexOf = arrayIncludes.indexOf;


  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !has$1(hiddenKeys$1, key) && has$1(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (has$1(O, key = names[i++])) {
      ~indexOf(result, key) || result.push(key);
    }
    return result;
  };

  // IE8- don't enum bug keys
  var enumBugKeys = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
  ];

  var hiddenKeys = enumBugKeys.concat('length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe
  var f$1 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return objectKeysInternal(O, hiddenKeys);
  };

  var objectGetOwnPropertyNames = {
  	f: f$1
  };

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
  var f = Object.getOwnPropertySymbols;

  var objectGetOwnPropertySymbols = {
  	f: f
  };

  // all object keys, includes non-enumerable and symbols
  var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = objectGetOwnPropertyNames.f(anObject(it));
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
  };

  var copyConstructorProperties = function (target, source) {
    var keys = ownKeys(source);
    var defineProperty = objectDefineProperty.f;
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!has$1(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  };

  var replacement = /#|\.prototype\./;

  var isForced = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true
      : value == NATIVE ? false
      : typeof detection == 'function' ? fails(detection)
      : !!detection;
  };

  var normalize = isForced.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced.data = {};
  var NATIVE = isForced.NATIVE = 'N';
  var POLYFILL = isForced.POLYFILL = 'P';

  var isForced_1 = isForced;

  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;






  /*
    options.target      - name of the target object
    options.global      - target is the global object
    options.stat        - export as static methods of target
    options.proto       - export as prototype methods of target
    options.real        - real prototype method for the `pure` version
    options.forced      - export even if the native feature is available
    options.bind        - bind methods to the target, required for the `pure` version
    options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe      - use the simple assignment of property instead of delete + defineProperty
    options.sham        - add a flag to not completely full polyfills
    options.enumerable  - export as enumerable property
    options.noTargetGet - prevent calling a getter on target
  */
  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = global_1;
    } else if (STATIC) {
      target = global_1[TARGET] || setGlobal(TARGET, {});
    } else {
      target = (global_1[TARGET] || {}).prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.noTargetGet) {
        descriptor = getOwnPropertyDescriptor(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty === typeof targetProperty) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || (targetProperty && targetProperty.sham)) {
        createNonEnumerableProperty(sourceProperty, 'sham', true);
      }
      // extend global
      redefine(target, key, sourceProperty, options);
    }
  };

  var aFunction = function (it) {
    if (typeof it != 'function') {
      throw TypeError(String(it) + ' is not a function');
    } return it;
  };

  // optional / simple context binding
  var functionBindContext = function (fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 0: return function () {
        return fn.call(that);
      };
      case 1: return function (a) {
        return fn.call(that, a);
      };
      case 2: return function (a, b) {
        return fn.call(that, a, b);
      };
      case 3: return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
    }
    return function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe
  var isArray = Array.isArray || function isArray(arg) {
    return classofRaw(arg) == 'Array';
  };

  var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

  var process = global_1.process;
  var versions = process && process.versions;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.');
    version = match[0] < 4 ? 1 : match[0] + match[1];
  } else if (engineUserAgent) {
    match = engineUserAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = engineUserAgent.match(/Chrome\/(\d+)/);
      if (match) version = match[1];
    }
  }

  var engineV8Version = version && +version;

  /* eslint-disable es/no-symbol -- required for testing */



  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
    return !String(Symbol()) ||
      // Chrome 38 Symbol has incorrect toString conversion
      // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && engineV8Version && engineV8Version < 41;
  });

  /* eslint-disable es/no-symbol -- required for testing */


  var useSymbolAsUid = nativeSymbol
    && !Symbol.sham
    && typeof Symbol.iterator == 'symbol';

  var WellKnownSymbolsStore = shared('wks');
  var Symbol$1 = global_1.Symbol;
  var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

  var wellKnownSymbol = function (name) {
    if (!has$1(WellKnownSymbolsStore, name) || !(nativeSymbol || typeof WellKnownSymbolsStore[name] == 'string')) {
      if (nativeSymbol && has$1(Symbol$1, name)) {
        WellKnownSymbolsStore[name] = Symbol$1[name];
      } else {
        WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
      }
    } return WellKnownSymbolsStore[name];
  };

  var SPECIES$4 = wellKnownSymbol('species');

  // `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesCreate = function (originalArray, length) {
    var C;
    if (isArray(originalArray)) {
      C = originalArray.constructor;
      // cross-realm fallback
      if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
      else if (isObject(C)) {
        C = C[SPECIES$4];
        if (C === null) C = undefined;
      }
    } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
  };

  var push = [].push;

  // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
  var createMethod$1 = function (TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_OUT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject($this);
      var self = indexedObject(O);
      var boundFunction = functionBindContext(callbackfn, that, 3);
      var length = toLength(self.length);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate;
      var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
      var value, result;
      for (;length > index; index++) if (NO_HOLES || index in self) {
        value = self[index];
        result = boundFunction(value, index, O);
        if (TYPE) {
          if (IS_MAP) target[index] = result; // map
          else if (result) switch (TYPE) {
            case 3: return true;              // some
            case 5: return value;             // find
            case 6: return index;             // findIndex
            case 2: push.call(target, value); // filter
          } else switch (TYPE) {
            case 4: return false;             // every
            case 7: push.call(target, value); // filterOut
          }
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };

  var arrayIteration = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod$1(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod$1(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod$1(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod$1(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod$1(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod$1(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod$1(6),
    // `Array.prototype.filterOut` method
    // https://github.com/tc39/proposal-array-filtering
    filterOut: createMethod$1(7)
  };

  var SPECIES$3 = wellKnownSymbol('species');

  var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return engineV8Version >= 51 || !fails(function () {
      var array = [];
      var constructor = array.constructor = {};
      constructor[SPECIES$3] = function () {
        return { foo: 1 };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var $map = arrayIteration.map;


  var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport('map');

  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  // with adding support of @@species
  _export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
    map: function map(callbackfn /* , thisArg */) {
      return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  /*
  ie10 不支持 location.origin，以下是hack方法
  */
  if (!window.location.origin) {
    window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
  }

  var createProperty = function (object, key, value) {
    var propertyKey = toPrimitive(key);
    if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
    else object[propertyKey] = value;
  };

  var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
  var MAX_SAFE_INTEGER$1 = 0x1FFFFFFFFFFFFF;
  var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });

  var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

  var isConcatSpreadable = function (O) {
    if (!isObject(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray(O);
  };

  var FORCED$2 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

  // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  _export({ target: 'Array', proto: true, forced: FORCED$2 }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject(this);
      var A = arraySpeciesCreate(O, 0);
      var n = 0;
      var i, k, length, len, E;
      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];
        if (isConcatSpreadable(E)) {
          len = toLength(E.length);
          if (n + len > MAX_SAFE_INTEGER$1) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
        } else {
          if (n >= MAX_SAFE_INTEGER$1) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          createProperty(A, n++, E);
        }
      }
      A.length = n;
      return A;
    }
  });

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe
  var objectKeys = Object.keys || function keys(O) {
    return objectKeysInternal(O, enumBugKeys);
  };

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe
  var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
    return O;
  };

  var html = getBuiltIn('document', 'documentElement');

  var GT = '>';
  var LT = '<';
  var PROTOTYPE = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO = sharedKey('IE_PROTO');

  var EmptyConstructor = function () { /* empty */ };

  var scriptTag = function (content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  };

  // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
  var NullProtoObjectViaActiveX = function (activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak
    return temp;
  };

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var NullProtoObjectViaIFrame = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  };

  // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug
  var activeXDocument;
  var NullProtoObject = function () {
    try {
      /* global ActiveXObject -- old IE */
      activeXDocument = document.domain && new ActiveXObject('htmlfile');
    } catch (error) { /* ignore */ }
    NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
    var length = enumBugKeys.length;
    while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
    return NullProtoObject();
  };

  hiddenKeys$1[IE_PROTO] = true;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE] = anObject(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : objectDefineProperties(result, Properties);
  };

  var UNSCOPABLES = wellKnownSymbol('unscopables');
  var ArrayPrototype = Array.prototype;

  // Array.prototype[@@unscopables]
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  if (ArrayPrototype[UNSCOPABLES] == undefined) {
    objectDefineProperty.f(ArrayPrototype, UNSCOPABLES, {
      configurable: true,
      value: objectCreate(null)
    });
  }

  // add a key to Array.prototype[@@unscopables]
  var addToUnscopables = function (key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
  };

  var $includes = arrayIncludes.includes;


  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  _export({ target: 'Array', proto: true }, {
    includes: function includes(el /* , fromIndex = 0 */) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('includes');

  var MATCH$2 = wellKnownSymbol('match');

  // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp
  var isRegexp = function (it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH$2]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
  };

  var notARegexp = function (it) {
    if (isRegexp(it)) {
      throw TypeError("The method doesn't accept regular expressions");
    } return it;
  };

  var MATCH$1 = wellKnownSymbol('match');

  var correctIsRegexpLogic = function (METHOD_NAME) {
    var regexp = /./;
    try {
      '/./'[METHOD_NAME](regexp);
    } catch (error1) {
      try {
        regexp[MATCH$1] = false;
        return '/./'[METHOD_NAME](regexp);
      } catch (error2) { /* empty */ }
    } return false;
  };

  // `String.prototype.includes` method
  // https://tc39.es/ecma262/#sec-string.prototype.includes
  _export({ target: 'String', proto: true, forced: !correctIsRegexpLogic('includes') }, {
    includes: function includes(searchString /* , position = 0 */) {
      return !!~String(requireObjectCoercible(this))
        .indexOf(notARegexp(searchString), arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var arrayMethodIsStrict = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails(function () {
      // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
      method.call(null, argument || function () { throw 1; }, 1);
    });
  };

  var nativeJoin = [].join;

  var ES3_STRINGS = indexedObject != Object;
  var STRICT_METHOD$1 = arrayMethodIsStrict('join', ',');

  // `Array.prototype.join` method
  // https://tc39.es/ecma262/#sec-array.prototype.join
  _export({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD$1 }, {
    join: function join(separator) {
      return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
    }
  });

  // `RegExp.prototype.flags` getter implementation
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
  var regexpFlags = function () {
    var that = anObject(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
  // so we use an intermediate function.
  function RE(s, f) {
    return RegExp(s, f);
  }

  var UNSUPPORTED_Y$3 = fails(function () {
    // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
    var re = RE('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') != null;
  });

  var BROKEN_CARET = fails(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = RE('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') != null;
  });

  var regexpStickyHelpers = {
  	UNSUPPORTED_Y: UNSUPPORTED_Y$3,
  	BROKEN_CARET: BROKEN_CARET
  };

  /* eslint-disable regexp/no-assertion-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
  /* eslint-disable regexp/no-useless-quantifier -- testing */




  var nativeExec = RegExp.prototype.exec;
  var nativeReplace = shared('native-string-replace', String.prototype.replace);

  var patchedExec = nativeExec;

  var UPDATES_LAST_INDEX_WRONG = (function () {
    var re1 = /a/;
    var re2 = /b*/g;
    nativeExec.call(re1, 'a');
    nativeExec.call(re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  })();

  var UNSUPPORTED_Y$2 = regexpStickyHelpers.UNSUPPORTED_Y || regexpStickyHelpers.BROKEN_CARET;

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$2;

  if (PATCH) {
    patchedExec = function exec(str) {
      var re = this;
      var lastIndex, reCopy, match, i;
      var sticky = UNSUPPORTED_Y$2 && re.sticky;
      var flags = regexpFlags.call(re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;

      if (sticky) {
        flags = flags.replace('y', '');
        if (flags.indexOf('g') === -1) {
          flags += 'g';
        }

        strCopy = String(str).slice(re.lastIndex);
        // Support anchored sticky behavior.
        if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
          source = '(?: ' + source + ')';
          strCopy = ' ' + strCopy;
          charsAdded++;
        }
        // ^(? + rx + ) is needed, in combination with some str slicing, to
        // simulate the 'y' flag.
        reCopy = new RegExp('^(?:' + source + ')', flags);
      }

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
      }
      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

      match = nativeExec.call(sticky ? reCopy : re, strCopy);

      if (sticky) {
        if (match) {
          match.input = match.input.slice(charsAdded);
          match[0] = match[0].slice(charsAdded);
          match.index = re.lastIndex;
          re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
        nativeReplace.call(match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      return match;
    };
  }

  var regexpExec = patchedExec;

  // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec
  _export({ target: 'RegExp', proto: true, forced: /./.exec !== regexpExec }, {
    exec: regexpExec
  });

  // TODO: Remove from `core-js@4` since it's moved to entry points







  var SPECIES$2 = wellKnownSymbol('species');
  var RegExpPrototype$2 = RegExp.prototype;

  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
    // #replace needs built-in support for named groups.
    // #match works fine because it just return the exec results, even if it has
    // a "grops" property.
    var re = /./;
    re.exec = function () {
      var result = [];
      result.groups = { a: '7' };
      return result;
    };
    return ''.replace(re, '$<a>') !== '7';
  });

  // IE <= 11 replaces $0 with the whole match, as if it was $&
  // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
  var REPLACE_KEEPS_$0 = (function () {
    // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
    return 'a'.replace(/./, '$0') === '$0';
  })();

  var REPLACE = wellKnownSymbol('replace');
  // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
    if (/./[REPLACE]) {
      return /./[REPLACE]('a', '$0') === '';
    }
    return false;
  })();

  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  // Weex JS has frozen built-in prototypes, so use try / catch wrapper
  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function () { return originalExec.apply(this, arguments); };
    var result = 'ab'.split(re);
    return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
  });

  var fixRegexpWellKnownSymbolLogic = function (KEY, length, exec, sham) {
    var SYMBOL = wellKnownSymbol(KEY);

    var DELEGATES_TO_SYMBOL = !fails(function () {
      // String methods call symbol-named RegEp methods
      var O = {};
      O[SYMBOL] = function () { return 7; };
      return ''[KEY](O) != 7;
    });

    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;

      if (KEY === 'split') {
        // We can't use real regex here since it causes deoptimization
        // and serious performance degradation in V8
        // https://github.com/zloirock/core-js/issues/306
        re = {};
        // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        re.constructor = {};
        re.constructor[SPECIES$2] = function () { return re; };
        re.flags = '';
        re[SYMBOL] = /./[SYMBOL];
      }

      re.exec = function () { execCalled = true; return null; };

      re[SYMBOL]('');
      return !execCalled;
    });

    if (
      !DELEGATES_TO_SYMBOL ||
      !DELEGATES_TO_EXEC ||
      (KEY === 'replace' && !(
        REPLACE_SUPPORTS_NAMED_GROUPS &&
        REPLACE_KEEPS_$0 &&
        !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
      )) ||
      (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
    ) {
      var nativeRegExpMethod = /./[SYMBOL];
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        var $exec = regexp.exec;
        if ($exec === regexpExec || $exec === RegExpPrototype$2.exec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }, {
        REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
      });
      var stringMethod = methods[0];
      var regexMethod = methods[1];

      redefine(String.prototype, KEY, stringMethod);
      redefine(RegExpPrototype$2, SYMBOL, length == 2
        // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
        // 21.2.5.11 RegExp.prototype[@@split](string, limit)
        ? function (string, arg) { return regexMethod.call(string, this, arg); }
        // 21.2.5.6 RegExp.prototype[@@match](string)
        // 21.2.5.9 RegExp.prototype[@@search](string)
        : function (string) { return regexMethod.call(string, this); }
      );
    }

    if (sham) createNonEnumerableProperty(RegExpPrototype$2[SYMBOL], 'sham', true);
  };

  var SPECIES$1 = wellKnownSymbol('species');

  // `SpeciesConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-speciesconstructor
  var speciesConstructor = function (O, defaultConstructor) {
    var C = anObject(O).constructor;
    var S;
    return C === undefined || (S = anObject(C)[SPECIES$1]) == undefined ? defaultConstructor : aFunction(S);
  };

  // `String.prototype.{ codePointAt, at }` methods implementation
  var createMethod = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = String(requireObjectCoercible($this));
      var position = toInteger(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = S.charCodeAt(position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size
        || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
          ? CONVERT_TO_STRING ? S.charAt(position) : first
          : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod(true)
  };

  var charAt = stringMultibyte.charAt;

  // `AdvanceStringIndex` abstract operation
  // https://tc39.es/ecma262/#sec-advancestringindex
  var advanceStringIndex = function (S, index, unicode) {
    return index + (unicode ? charAt(S, index).length : 1);
  };

  // `RegExpExec` abstract operation
  // https://tc39.es/ecma262/#sec-regexpexec
  var regexpExecAbstract = function (R, S) {
    var exec = R.exec;
    if (typeof exec === 'function') {
      var result = exec.call(R, S);
      if (typeof result !== 'object') {
        throw TypeError('RegExp exec method returned something other than an Object or null');
      }
      return result;
    }

    if (classofRaw(R) !== 'RegExp') {
      throw TypeError('RegExp#exec called on incompatible receiver');
    }

    return regexpExec.call(R, S);
  };

  var UNSUPPORTED_Y$1 = regexpStickyHelpers.UNSUPPORTED_Y;
  var arrayPush = [].push;
  var min$2 = Math.min;
  var MAX_UINT32 = 0xFFFFFFFF;

  // @@split logic
  fixRegexpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit;
    if (
      'abbc'.split(/(b)*/)[1] == 'c' ||
      // eslint-disable-next-line regexp/no-empty-group -- required for testing
      'test'.split(/(?:)/, -1).length != 4 ||
      'ab'.split(/(?:ab)*/).length != 2 ||
      '.'.split(/(.?)(.?)/).length != 4 ||
      // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
      '.'.split(/()()/).length > 1 ||
      ''.split(/.?/).length
    ) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function (separator, limit) {
        var string = String(requireObjectCoercible(this));
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (separator === undefined) return [string];
        // If `separator` is not a regex, use native split
        if (!isRegexp(separator)) {
          return nativeSplit.call(string, separator, lim);
        }
        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') +
                    (separator.multiline ? 'm' : '') +
                    (separator.unicode ? 'u' : '') +
                    (separator.sticky ? 'y' : '');
        var lastLastIndex = 0;
        // Make `global` and avoid `lastIndex` issues by working with a copy
        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;
        while (match = regexpExec.call(separatorCopy, string)) {
          lastIndex = separatorCopy.lastIndex;
          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index));
            if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
            lastLength = match[0].length;
            lastLastIndex = lastIndex;
            if (output.length >= lim) break;
          }
          if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
        }
        if (lastLastIndex === string.length) {
          if (lastLength || !separatorCopy.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));
        return output.length > lim ? output.slice(0, lim) : output;
      };
    // Chakra, V8
    } else if ('0'.split(undefined, 0).length) {
      internalSplit = function (separator, limit) {
        return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
      };
    } else internalSplit = nativeSplit;

    return [
      // `String.prototype.split` method
      // https://tc39.es/ecma262/#sec-string.prototype.split
      function split(separator, limit) {
        var O = requireObjectCoercible(this);
        var splitter = separator == undefined ? undefined : separator[SPLIT];
        return splitter !== undefined
          ? splitter.call(separator, O, limit)
          : internalSplit.call(String(O), separator, limit);
      },
      // `RegExp.prototype[@@split]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
      //
      // NOTE: This cannot be properly polyfilled in engines that don't support
      // the 'y' flag.
      function (regexp, limit) {
        var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
        if (res.done) return res.value;

        var rx = anObject(regexp);
        var S = String(this);
        var C = speciesConstructor(rx, RegExp);

        var unicodeMatching = rx.unicode;
        var flags = (rx.ignoreCase ? 'i' : '') +
                    (rx.multiline ? 'm' : '') +
                    (rx.unicode ? 'u' : '') +
                    (UNSUPPORTED_Y$1 ? 'g' : 'y');

        // ^(? + rx + ) is needed, in combination with some S slicing, to
        // simulate the 'y' flag.
        var splitter = new C(UNSUPPORTED_Y$1 ? '^(?:' + rx.source + ')' : rx, flags);
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (S.length === 0) return regexpExecAbstract(splitter, S) === null ? [S] : [];
        var p = 0;
        var q = 0;
        var A = [];
        while (q < S.length) {
          splitter.lastIndex = UNSUPPORTED_Y$1 ? 0 : q;
          var z = regexpExecAbstract(splitter, UNSUPPORTED_Y$1 ? S.slice(q) : S);
          var e;
          if (
            z === null ||
            (e = min$2(toLength(splitter.lastIndex + (UNSUPPORTED_Y$1 ? q : 0)), S.length)) === p
          ) {
            q = advanceStringIndex(S, q, unicodeMatching);
          } else {
            A.push(S.slice(p, q));
            if (A.length === lim) return A;
            for (var i = 1; i <= z.length - 1; i++) {
              A.push(z[i]);
              if (A.length === lim) return A;
            }
            q = p = e;
          }
        }
        A.push(S.slice(p));
        return A;
      }
    ];
  }, UNSUPPORTED_Y$1);

  var floor$1 = Math.floor;
  var replace = ''.replace;
  var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

  // https://tc39.es/ecma262/#sec-getsubstitution
  var getSubstitution = function (matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor$1(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  };

  var max$1 = Math.max;
  var min$1 = Math.min;

  var maybeToString = function (it) {
    return it === undefined ? it : String(it);
  };

  // @@replace logic
  fixRegexpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
    var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
    var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

    return [
      // `String.prototype.replace` method
      // https://tc39.es/ecma262/#sec-string.prototype.replace
      function replace(searchValue, replaceValue) {
        var O = requireObjectCoercible(this);
        var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
        return replacer !== undefined
          ? replacer.call(searchValue, O, replaceValue)
          : nativeReplace.call(String(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
      function (regexp, replaceValue) {
        if (
          (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
          (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
        ) {
          var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
          if (res.done) return res.value;
        }

        var rx = anObject(regexp);
        var S = String(this);

        var functionalReplace = typeof replaceValue === 'function';
        if (!functionalReplace) replaceValue = String(replaceValue);

        var global = rx.global;
        if (global) {
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }
        var results = [];
        while (true) {
          var result = regexpExecAbstract(rx, S);
          if (result === null) break;

          results.push(result);
          if (!global) break;

          var matchStr = String(result[0]);
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        }

        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];

          var matched = String(result[0]);
          var position = max$1(min$1(toInteger(result.index), S.length), 0);
          var captures = [];
          // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
          for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = [matched].concat(captures, position, S);
            if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
            var replacement = String(replaceValue.apply(undefined, replacerArgs));
          } else {
            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }
          if (position >= nextSourcePosition) {
            accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }
        return accumulatedResult + S.slice(nextSourcePosition);
      }
    ];
  });

  var js_cookie = createCommonjsModule(function (module, exports) {
  (function (factory) {
  	var registeredInModuleLoader;
  	{
  		module.exports = factory();
  		registeredInModuleLoader = true;
  	}
  	if (!registeredInModuleLoader) {
  		var OldCookies = window.Cookies;
  		var api = window.Cookies = factory();
  		api.noConflict = function () {
  			window.Cookies = OldCookies;
  			return api;
  		};
  	}
  }(function () {
  	function extend () {
  		var i = 0;
  		var result = {};
  		for (; i < arguments.length; i++) {
  			var attributes = arguments[ i ];
  			for (var key in attributes) {
  				result[key] = attributes[key];
  			}
  		}
  		return result;
  	}

  	function decode (s) {
  		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
  	}

  	function init (converter) {
  		function api() {}

  		function set (key, value, attributes) {
  			if (typeof document === 'undefined') {
  				return;
  			}

  			attributes = extend({
  				path: '/'
  			}, api.defaults, attributes);

  			if (typeof attributes.expires === 'number') {
  				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
  			}

  			// We're using "expires" because "max-age" is not supported by IE
  			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

  			try {
  				var result = JSON.stringify(value);
  				if (/^[\{\[]/.test(result)) {
  					value = result;
  				}
  			} catch (e) {}

  			value = converter.write ?
  				converter.write(value, key) :
  				encodeURIComponent(String(value))
  					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

  			key = encodeURIComponent(String(key))
  				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
  				.replace(/[\(\)]/g, escape);

  			var stringifiedAttributes = '';
  			for (var attributeName in attributes) {
  				if (!attributes[attributeName]) {
  					continue;
  				}
  				stringifiedAttributes += '; ' + attributeName;
  				if (attributes[attributeName] === true) {
  					continue;
  				}

  				// Considers RFC 6265 section 5.2:
  				// ...
  				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
  				//     character:
  				// Consume the characters of the unparsed-attributes up to,
  				// not including, the first %x3B (";") character.
  				// ...
  				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
  			}

  			return (document.cookie = key + '=' + value + stringifiedAttributes);
  		}

  		function get (key, json) {
  			if (typeof document === 'undefined') {
  				return;
  			}

  			var jar = {};
  			// To prevent the for loop in the first place assign an empty array
  			// in case there are no cookies at all.
  			var cookies = document.cookie ? document.cookie.split('; ') : [];
  			var i = 0;

  			for (; i < cookies.length; i++) {
  				var parts = cookies[i].split('=');
  				var cookie = parts.slice(1).join('=');

  				if (!json && cookie.charAt(0) === '"') {
  					cookie = cookie.slice(1, -1);
  				}

  				try {
  					var name = decode(parts[0]);
  					cookie = (converter.read || converter)(cookie, name) ||
  						decode(cookie);

  					if (json) {
  						try {
  							cookie = JSON.parse(cookie);
  						} catch (e) {}
  					}

  					jar[name] = cookie;

  					if (key === name) {
  						break;
  					}
  				} catch (e) {}
  			}

  			return key ? jar[key] : jar;
  		}

  		api.set = set;
  		api.get = function (key) {
  			return get(key, false /* read as raw */);
  		};
  		api.getJSON = function (key) {
  			return get(key, true /* read as json */);
  		};
  		api.remove = function (key, attributes) {
  			set(key, '', extend(attributes, {
  				expires: -1
  			}));
  		};

  		api.defaults = {};

  		api.withConverter = init;

  		return api;
  	}

  	return init(function () {});
  }));
  });

  var namespace = "mozi-assist";
  var domain = "";
  var url = "https://tts.baidu.com/text2audio";
  var config = {
  	namespace: namespace,
  	domain: domain,
  	url: url
  };

  var __domain = config.domain;
  var cookie = {
    set: function set(key, value, namespace) {
      var memory = {
        show: false,
        // 是否展示无障碍
        audio: false,
        // 是否开启声音
        speed: 'middle',
        // 语速
        zomm: 0.1,
        // 缩放倍数
        cursor: false,
        // 是否替换鼠标样式
        pointer: false,
        // 是否开启十字线
        bigtext: false,
        // 是否开启大字幕
        overead: false // 是否开启指读

      };

      if (js_cookie.get(namespace)) {
        memory = JSON.parse(js_cookie.get(namespace));
      }

      memory[key] = value;
      js_cookie.set(namespace, JSON.stringify(memory), {
        domain: __domain
      });
    },
    get: function get(key, namespace) {
      var __key = '';

      if (js_cookie.get(namespace)) {
        __key = JSON.parse(js_cookie.get(namespace))[key];
      }

      return __key;
    },
    remove: function remove(namespace) {
      js_cookie.remove(namespace, {
        domain: __domain
      });
    },
    setTag: function setTag(namespace) {
      var __key = "".concat(namespace, "-ignore");

      var __data = [];

      if (js_cookie.get(__key)) {
        __data = JSON.parse(js_cookie.get(__key));
      }

      var _location = location,
          origin = _location.origin,
          pathname = _location.pathname;

      var __ignoreUrl = "".concat(origin).concat(pathname);

      !__data.includes(__ignoreUrl) && __data.push("".concat(origin).concat(pathname));
      js_cookie.set(__key, JSON.stringify(__data), {
        domain: __domain
      });
    },
    getTag: function getTag(namespace) {
      var __key = "".concat(namespace, "-ignore");

      var __data = [];

      if (js_cookie.get(__key)) {
        __data = JSON.parse(js_cookie.get(__key));
      }

      return __data;
    }
  };

  var addEvent = function addEvent(element, type, callback) {
    var ignore = ['DOMContentLoaded'];

    var __type = ignore.includes(type) ? type : 'on' + type;

    if (element.addEventListener) {
      element.addEventListener(type, callback, false);
    } else if (element.attachEvent) {
      element.attachEvent(__type, callback);
    } else {
      element[__type] = callback;
    }
  };

  var removeEvent = function removeEvent(element, type, callback) {
    var ignore = ['DOMContentLoaded'];

    var __type = ignore.includes(type) ? type : 'on' + type;

    if (element.removeEventListener) {
      element.removeEventListener(type, callback);
    } else if (element.detachEvent) {
      element.detachEvent(__type, callback);
    } else {
      element[__type] = null;
    }
  };

  var ruleType = function ruleType(target) {
    var __role = !!target.getAttribute('role') && target.getAttribute('role').toUpperCase() || target.tagName.toUpperCase();

    var __roleName = {
      IMG: '图片',
      BUTTON: '按钮',
      INPUT: '输入框',
      CHECKBOX: '复选框',
      RADIO: '单选框',
      OPTION: '下拉框',
      A: '链接'
    };

    if (__role == 'INPUT') {
      if (target.type == 'radio') {
        return '单选框';
      } else if (target.type == 'checkbox') {
        // button reset file
        return '复选框';
      } else if (target.type == 'text') {
        // button reset file
        return '文本框';
      } else if (target.type == 'submit') {
        return '提交按钮';
      } else if (target.type == 'reset') {
        return '重置按钮';
      } else if (target.type == 'password') {
        return '密码输入框';
      } else {
        return '输入框';
      }
    }

    return __roleName[__role] || '文本';
  };

  var parseTagText = function parseTagText(target) {
    var __name = ruleType(target);

    var __role = !!target.getAttribute('role') && target.getAttribute('role').toUpperCase();

    if (__role === 'A' || target.tagName === 'A') {
      console.log('这是一个链接:' + target.alt || target.title || target.innerText);
      return "\u94FE\u63A5 ".concat(target.alt || target.title || target.innerText);
    }

    if (target.children.length === 0) {
      if (__role === 'IMG' || target.tagName === 'IMG') {
        console.log('这是一张图片:' + target.alt || target.title);
        return "\u56FE\u7247 ".concat(target.alt || target.title);
      }

      if (__role === 'BUTTON' || target.tagName === 'BUTTON') {
        console.log('这是一个按钮:' + target.innerText);
        return "\u6309\u94AE ".concat(target.alt || target.title || target.innerText);
      }

      if (__role === 'INPUT' || target.tagName === 'INPUT') {
        console.log("\u8FD9\u662F\u4E00\u4E2A".concat(__name, ":") + target.alt || target.title || target.value);
        return "".concat(__name, " ").concat(target.alt || target.title || target.value);
      }

      if (__role === 'LABEL' || target.tagName === 'LABEL') {
        var __linkId = target.getAttribute('for');

        var __linkDom = document.getElementById(__linkId);

        if (!!__linkDom && !!__linkDom.type && __linkDom.type == 'radio') {
          console.log("\u8FD9\u662F\u4E00\u4E2A\u5355\u9009:" + target.alt || target.title || target.innerText);
          return "\u5355\u9009 ".concat(target.alt || target.title || target.innerText);
        }
      }

      if (target.alt || target.title || target.innerText) {
        console.log("".concat(__name, " ").concat(target.alt || target.title || target.innerText));
        return "".concat(__name, " ").concat(target.alt || target.title || target.innerText);
      }

      return '';
    }

    if (target.children.length < 5 && (target.alt || target.title || target.innerText)) {
      console.log("".concat(__name, " ").concat(target.alt || target.title || target.innerText));
      return "".concat(__name, " ").concat(target.alt || target.title || target.innerText);
    }

    return '';
  };

  var trim = function trim(s) {
    return s.replace(/(^\s*)|(\s*$)/g, "");
  };
  /**
   * 判断是否是IE
   */

  var isIE = function isIE() {
    if (!!window.ActiveXobject || "ActiveXObject" in window) {
      return true;
    } else {
      return false;
    }
  };
  /**
   * 判断是否是IE11
   */


  var isIE11 = function isIE11() {
    if (/Trident\/7\./.test(navigator.userAgent)) {
      return true;
    } else {
      return false;
    }
  };

  var isFirefox = function isFirefox() {
    var ua = navigator.userAgent;

    if (ua.indexOf('Firefox') > -1) {
      return true;
    }

    return false;
  };

  var removeNode = function removeNode(item) {
    if (isIE() || isIE11()) {
      item.removeNode(true);
    } else {
      item.remove();
    }
  };

  // iterable DOM collections
  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
  var domIterables = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };

  var $forEach = arrayIteration.forEach;


  var STRICT_METHOD = arrayMethodIsStrict('forEach');

  // `Array.prototype.forEach` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  var arrayForEach = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  } : [].forEach;

  for (var COLLECTION_NAME in domIterables) {
    var Collection = global_1[COLLECTION_NAME];
    var CollectionPrototype = Collection && Collection.prototype;
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype && CollectionPrototype.forEach !== arrayForEach) try {
      createNonEnumerableProperty(CollectionPrototype, 'forEach', arrayForEach);
    } catch (error) {
      CollectionPrototype.forEach = arrayForEach;
    }
  }

  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

  var max = Math.max;
  var min = Math.min;
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
  var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

  // `Array.prototype.splice` method
  // https://tc39.es/ecma262/#sec-array.prototype.splice
  // with adding support of @@species
  _export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
    splice: function splice(start, deleteCount /* , ...items */) {
      var O = toObject(this);
      var len = toLength(O.length);
      var actualStart = toAbsoluteIndex(start, len);
      var argumentsLength = arguments.length;
      var insertCount, actualDeleteCount, A, k, from, to;
      if (argumentsLength === 0) {
        insertCount = actualDeleteCount = 0;
      } else if (argumentsLength === 1) {
        insertCount = 0;
        actualDeleteCount = len - actualStart;
      } else {
        insertCount = argumentsLength - 2;
        actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
      }
      if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
        throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
      }
      A = arraySpeciesCreate(O, actualDeleteCount);
      for (k = 0; k < actualDeleteCount; k++) {
        from = actualStart + k;
        if (from in O) createProperty(A, k, O[from]);
      }
      A.length = actualDeleteCount;
      if (insertCount < actualDeleteCount) {
        for (k = actualStart; k < len - actualDeleteCount; k++) {
          from = k + actualDeleteCount;
          to = k + insertCount;
          if (from in O) O[to] = O[from];
          else delete O[to];
        }
        for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
      } else if (insertCount > actualDeleteCount) {
        for (k = len - actualDeleteCount; k > actualStart; k--) {
          from = k + actualDeleteCount - 1;
          to = k + insertCount - 1;
          if (from in O) O[to] = O[from];
          else delete O[to];
        }
      }
      for (k = 0; k < insertCount; k++) {
        O[k + actualStart] = arguments[k + 2];
      }
      O.length = len - actualDeleteCount + insertCount;
      return A;
    }
  });

  var pubSub = {
    list: {},
    subscribe: function subscribe(key, fn) {
      if (!this.list[key]) this.list[key] = [];
      this.list[key].push(fn);
    },
    unsubscribe: function unsubscribe(key, fn) {
      var fnList = this.list[key];
      if (!fnList) return false;

      if (!fn) {
        // 不传入指定的方法，清空所用 key 下的订阅
        fnList && (fnList.length = 0);
      } else {
        fnList.forEach(function (item, index) {
          item === fn && fnList.splice(index, 1);
        });
      }
    },
    publish: function publish(key) {
      var fnList = this.list[key];
      if (!fnList) return false;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var _iterator = _createForOfIteratorHelper(this.list[key]),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var fn = _step.value;
          !!fn && fn.call.apply(fn, [this].concat(args));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  };

  var Base = /*#__PURE__*/function () {
    function Base() {
      _classCallCheck(this, Base);

      this.config = {
        namespace: 'mozi-assist',
        domain: '.mozi.com',
        url: ''
      };
      this.message = pubSub;
      this.tmplStyle = [];
      this.tmplHtml = [];
      this.registeOpen();
    }

    _createClass(Base, [{
      key: "mergeConfig",
      value: function mergeConfig(opts) {
        this.config = _objectSpread2(_objectSpread2({}, this.config), opts);
        this.creatContainer();
      }
    }, {
      key: "use",
      value: function use(plugin) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        plugin.init.apply(plugin, [this].concat(args));
      }
    }, {
      key: "useEvent",
      value: function useEvent(plugin) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        plugin.setEvents.apply(plugin, [this].concat(args));
      }
    }, {
      key: "creatContainer",
      value: function creatContainer() {
        var namespace = this.config.namespace;

        if (document.getElementById(namespace)) {
          return;
        }

        var Container = document.createElement("div");
        Container.id = namespace;
        document.body.appendChild(Container);
      }
    }, {
      key: "registeOpen",
      value: function registeOpen() {
        var _this = this;

        addEvent(document, 'click', function (event) {
          var event = window.event || event;
          var target = event.target || event.srcElement;

          if (target.getAttribute('id') == 'assist-open') {
            if (!_this.existIgnore()) {
              _this.show();

              _this.message.publish('openState', true);
            } else {
              var namespace = _this.config.namespace;
              cookie.set('show', true, namespace);

              var __href = document.getElementById('assist-open').getAttribute('assist-href');

              window.location.href = __href;
            }
          }
        });
      }
    }, {
      key: "isShow",
      value: function isShow() {
        var _this2 = this;

        var namespace = this.config.namespace;
        addEvent(window, 'DOMContentLoaded', function () {
          if (cookie.get('show', namespace) && !_this2.existIgnore()) {
            _this2.isShowTopBar(true);

            _this2.message.publish('openState', true);
          } else {
            _this2.message.publish('openState', false);
          }
        });
      }
    }, {
      key: "existIgnore",
      value: function existIgnore() {
        var namespace = this.config.namespace;
        var _location = location,
            origin = _location.origin,
            pathname = _location.pathname;

        var __key = "".concat(origin).concat(pathname);

        return cookie.getTag(namespace).includes(__key);
      }
    }, {
      key: "show",
      value: function show() {
        this.isShowTopBar(true);
      }
    }, {
      key: "close",
      value: function close() {
        this.isShowTopBar(false);
      }
    }, {
      key: "showTag",
      value: function showTag() {
        var namespace = this.config.namespace;
        cookie.setTag(namespace); // 设置忽略

        this.resetAction(); // 重置插件状态
      }
    }, {
      key: "isShowTopBar",
      value: function isShowTopBar(isShow) {
        var namespace = this.config.namespace;
        var activeBtn = document.getElementById("".concat(namespace, "-topbar-html"));

        if (isShow) {
          document.body.style.marginTop = '100px';
          activeBtn.style.display = 'block';
          cookie.set('show', true, namespace);
          this.hideModules();
        } else {
          document.body.style.cssText = ''; //activeBtn.style.display = 'none'

          cookie.remove("".concat(namespace));
          location.reload();
        }
      }
    }, {
      key: "hideModules",
      value: function hideModules() {
        var namespace = this.config.namespace;
        var classList = document.getElementsByClassName("".concat(namespace, "-hide"));

        for (var i = 0; i < classList.length; i++) {
          classList[i].style.display = 'none';
        }
      }
    }, {
      key: "creatStyle",
      value: function creatStyle(id, css) {
        var flag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (!flag) {
          this.tmplStyle.push(css);
        } else {
          var namespace = this.config.namespace;
          var styleNode = document.createElement('style');
          styleNode.type = 'text/css';
          styleNode.id = "".concat(namespace, "-").concat(id);
          styleNode.className = id;

          if (styleNode.styleSheet) {
            styleNode.styleSheet.cssText = css;
          } else {
            styleNode.innerHTML = css;
          }

          document.getElementsByTagName('head')[0].appendChild(styleNode);
        }
      }
    }, {
      key: "creatHtml",
      value: function creatHtml(id, htmlFn) {
        var namespace = this.config.namespace;
        var DomContainer = document.createElement("div");
        DomContainer.id = "".concat(namespace, "-").concat(id);
        DomContainer.className = id;
        DomContainer.style.display = 'none';

        if (typeof htmlFn !== 'function') {
          console.error('htmlFn不是一个函数');
          return;
        }

        var __html = htmlFn(namespace);

        DomContainer.innerHTML = __html;
        this.tmplHtml.push(DomContainer.outerHTML);
      }
    }, {
      key: "registeHtml",
      value: function registeHtml() {
        var namespace = this.config.namespace;
        document.getElementById(namespace).innerHTML = this.tmplHtml.join('');
      }
    }, {
      key: "registeStyle",
      value: function registeStyle() {
        var namespace = this.config.namespace;
        var styleNode = document.createElement('style');
        styleNode.type = 'text/css';
        styleNode.id = "".concat(namespace, "-style");

        var __css = this.tmplStyle.join('\n');

        if (styleNode.styleSheet) {
          styleNode.styleSheet.cssText = __css;
        } else {
          styleNode.innerHTML = __css;
        }

        document.getElementsByTagName('head')[0].appendChild(styleNode);
      }
    }, {
      key: "formatLongText",
      value: function formatLongText() {
        var namespace = this.config.namespace;
        var longText = document.getElementsByClassName("".concat(namespace, "-long-text")) || [];
        [].forEach.call(longText, function (el) {
          var __el = el.innerText.split('。');

          var __elItem = [];

          __el.map(function (item) {
            __elItem.push("<label>".concat(item, "</label>"));
          });

          el.innerHTML = __elItem.join('。');
        });
      }
    }]);

    return Base;
  }();

  var styles$4 = ".topbar-html {\n  width: 100%;\n  background: #797F8D;\n  overflow: hidden;\n  z-index: 2147483645;\n  position: fixed;\n  top: 0;\n  box-shadow: 0 0 10px 2px #999;\n  left: 0;\n  right: 0;\n}\n.topbar-html-mright {\n  margin-right: 50px !important;\n}\n.topbar-html-margin0 {\n  margin: 0 !important;\n}\n.topbar-html-content {\n  width: 1080px;\n  height: 100px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n}\n.topbar-html-content-item {\n  cursor: pointer;\n  margin: 0 6px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.topbar-html-content-item span {\n  height: 30px;\n  line-height: 30px;\n  color: #FFFFFF;\n  font-size: 16px;\n  font-weight: 500;\n  font-family: PingFangSC-Medium;\n}\n.topbar-html-content-item img {\n  height: 52px;\n  width: 52px;\n  border-radius: 5px;\n  display: block;\n}";

  var img$n = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAkFBMVEUAAAD///////////////////////////////////////8zMzM5OTk8PDz8/PxcXFzu7u6zs7NHR0diYmJBQUG3t7eqqqqkpKSBgYHQ0NC+vr5MTEybm5v5+fnz8/Po6OjV1dWfn590dHRPT0/h4eHd3d3b29vLy8vFxcWvr6+WlpaHh4dmZmZXV1dubm6MjIwpqEHtAAAACnRSTlMAvfPZlHYzJgQRpdOjTAAAA69JREFUaN7t2mlTpDAQBuAZj1WbTkBuGOa+D/X//7sdDTHRWbTTzqRqq3w/7g4+SRMghPR07m7711dw1lxd92/veh/zpw8XSv+PxdzfwAVzc6+dhz5cNP2Htj9Uhy+pPt3AxXPzNg7AQ15HRB88pH+8fsBL7nq34CW3PiqnancNXnLduwIvueqBp/xCvxAbitZ1Pp0WeVZFoHNuSE6aUGAqMAgQhRCY7Cp5fmhSiiPxKUKU1VkhmQ2EDdjWPJNng7JYMR1UXJ8HWoSa6aTCFbQZzuIw50HNyZlBPP2nQtVvFLxmxoCig7CbjiLcN3meF2WSorClcATHlKoJE2doEaPVkdljZLehfrYsHIwBIFTtyVyhpbBG8k4rJsOtNRrTJcCT+u2jIzS22vvYMYg3ZkRixITG5k+UEroiC1PdMQsaxZpJ1/BVVnNNzTmQTNAMKJXvf4oMqBDakQBUiQEt9aHJEAiZtc1yh0LdH+UQ+sSD6raFT5KgRKvVapKyIBm3HVp9Y6j7WyqOQQ6UCXVEQSja4B1gQHN1REwo3Cb9AVS1HdrA95niD6BSHTAAQtbBKVQRIdl2aAuUnJwjpD34TOWQeAm9xGgnLoEK7VTZn4EZMpSoytVACx9C/RwjhQ9F6hSlQAsfqhR0AFr4UKagEjipy3JDhXJ1jgqOk7/NMIiQmm1g7miYeRNuaNA0YEO1auP0spApRkGDtuocNQzohX73No/xPQOaKaimQZV6lCUMKFGXekWDImTfGUTnzatH+Dk9i3YCCUQo1KfUNbmCDiTIvE3OnKHn4C0NFZowazdEPWVwmzPgzhEqWkiC4yxISCdHtjM86pzB1E5kTlDdHlVRITOFGtC7ZObGc9Chz71x7wC9oCmD+9vEmuxMUM/X6ZDpUpCOiI6cB9YNlfPGJ2mXUNh2KARHaIF0yX5bXrpC0Aj627IMtVOAMwQHcp9G4XujJAOK3ldO5qsvnXWKgUo8AgYEC2Gv+3VF7jUTiDGwIFha66abDiYbWGtOwIRgLAw12A5Pq7sT1i+W4AwZyWqvwOc6spXHGZr/xXgBP4BglHxcU02TssjzvNl/WlMVhwh+BIEsSKvEDQATMlkS1r0XwIbs1N+s5GcA54FAZnPRxQyo3yaIqf7xtQWFKCcAQIXIVpMgHjl8JVIUYTNx/X5ET1RleTGdbut193D+v77x/UL+IW/bDLxtnPC2FcTb5hZv23V8bUDytqXK1yYxb9vefG3k87U10etmS2/bR/8CfLm94E4nnEwAAAAASUVORK5CYII=";

  var img$m = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAjVBMVEUAAAD///////////////////////8zMzM4ODg+Pj719fWoqKg7OztGRkbg4OD39/d1dXVbW1vIyMj7+/tMTEzj4+OUlJSCgoJCQkLo6Oi9vb1RUVHs7Ozb29vX19fw8PDAwMC6urpwcHC0tLRVVVWlpaVpaWnQ0NCurq6enp6ZmZmLi4uIiIh7e3thYWGg660bAAAABnRSTlMA+uWnfzGozdCBAAADiklEQVRo3u3a7XKqMBAGYK3HJeFEUEHRgqj41dqP+7+805MNs5lhILF2memM758iJTwG1hDbDL4yHj0NgS3Dp9F4oPOHSyHrj3agh3xJ4yH0kOF4MIJeMho8QS95GgyhlwwH0FMe0AN6QA/ot0FRNhFikm3sfQxQnIlAR2S0kwGKP1VQJwcMBxTPyKE+3Q81HYGGkUoA4ICMQ/kA4IDC2hHvH7ghgQEiR80BKtzkgKg/ewD4K/Rm/PNQeCSHoPDHIXKegQdqOjxQ02mH4u29UJgbR2mnBXoXIp3fBW0bDkG2g5XvgDz70w4lASb6LhRfUro/HRDUR0U3QcXhnEqhowKM2EEnVBlpsvWHinc8PYacTig0PRdnb+giReBwCKKsV3QrvaBLkwkUOU2oWOO+SJoxPfSCyiYj5BxaoXAmRBCjZC7e0gcKJw1FZGtoh7ACCr33VWH/Qw/opMz502ypc9phsxZojUfn+qB4hdDVDQ0n2LDxwWuDFhIbvOndzwo76IY2eKTcgieU5PTY/conNr84oZOgVl5Q3aUg1fv3+CpzQssAT+APQWkuwou+SwKvnROa0nFekN5GaaZ/ccZ3WnBAiSkgfV8PUndvxwHVJz/ozyH+4pUF2uKNqfQLrIYpCwQzukm0zQFVpsCpGnIe6A2rwT4DD7S0oA8+iFrRpUv5i+GTsRhCu7zxSXFmgXAkVfZgt2SBcmt8m9Mo0Q5RoSa3QAccVI9W0cmN3/NIljdAG4nnPlkjkAIXNDet/KGinqEmVvvKCSWmWZV4QkmAkThtzPDF3glBhpJI33ZznXLbCRXoiJl+ZxtsrWI3VKjARJqI4z5ph9bKntrPUM3ADcFLLVHkcd0KwVEfsrBnWyJyQ3Tx7IhV1AptAylX+EZi80yfghsyE9tGZNQGQVKWMX01pA65Idil0iERRElm6KgluCDKoRKirgWSuqHKXIg0dkN2wmjzP/NXkjqhq7kKqvzut/JIktQBTQLMHr4LwYKkDggPEidwQDf2qQlNqRDckL/UhMJASXUFF+QvtZf3fL8AN+Qvcf0ZrVkRPBBJK5J4oKa0BrgilDBAtrQ74IYCDsiWBP48AzBAWhKGoqkBA6QlG8rxFt0Luftkao4FgnWuUJEpTSQ4IIhfUiWlSk8x7WOAdIqybPTmN/979AE9oF8C9bWkqrdFYr0te+ttIV9fSxP7W2zZ2/LRf1C1IJ35WNi4AAAAAElFTkSuQmCC";

  var img$l = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABqCAMAAABnCuSYAAAAw1BMVEUAAAD///////////////////////////////////////////////////////////8zMzP8/Px5eXk6Ojrj4+NBQUE3Nzf5+fn09PRISEjn5+fb29ubm5uWlpbGxsaoqKiDg4N+fn5zc3NtbW1kZGRUVFTf39/U1NTLy8tPT09MTEzw8PCxsbGPj49hYWHr6+u4uLiioqKSkpJpaWnY2NiLi4uHh4ddXV3l5eW7u7vDw8O1tbWsrKyfn5/t7e3Pz8+/v7+8gE6lAAAAD3RSTlMAyDfs3bdeSxoQ5K2klG8zW7abAAAEyUlEQVRo3u2aiW7iMBBAs9tu2z3HTiAOuSDhvinQAqXX/3/Vih0Tb9jER49IK/WpqlQ1ybM9kxknYFXJ11/fP70j3399Rc/lN3hnvl0ePBdQAReWdXUGFXB2Zf2ESvhpnUMlnFsUKoFaUBEfog/Rh4jDgl0zXN7eRA/3sQ/Im4v8fTIkf+NsljF7a9H8ukuKcNNn+oaiQdslpdSn8zcSxR0ix7n130BUaxM1TsheKaKhc7JQm7adJOmqe7KY3cGrRP6MCNxZNHgUQ+gtWrksjOjLRXd1kjG7H8M/BNMGyejMXypqkgx7DcXQvcj7Ue9loogcacuuQBeNLID9l4imhNN4Bjne1CWI0zcXPWRLPwYlcf04p8BUNCGcFgUNesPj9H0zUd/lKd0EPbwVQTbUROTxATox6EJbBJmaiGyCLEAf2ibInb7omSARmOB1eZiYroiN8IwUzKjx3FvqiiJeJz0wZOBiBgV6orGDidADY0JesPREkQiQKYxna09H5OFKjwpDSg8/EmIUJTqiezx2AkXMm81HqWmGy+5piDaYo7RoPtv6oZzJTHc4zHu1qIdHXkMRf7YpK5DRxTapFoWYofOiCfFBSKd0jcf4SlEHWx0UscSL3IIEn4dYJWJueSrQBuGhlk0JR5qoRAO81rbIc0c4TZAQYTKpRLjEI2lNJ12QwIf6qBC1SmsI9cSecSBZO4aHPClEuMKhZPelrOsjjLJC1ChveBshcn3JlFbYKxQiV8w7Dw3405ey4uLqt+Qiym/JrIbSbY1zi2m7EBWKwriWwYDmNoS2XDQ+ye4Hh+QZML64FChLicCd0lxtSeWiOZ415xOKyQkjClFWzBKSY5Lbeq7kIg/PqQFycyqKgPrH1e2RPHbujk21YrQWg8tTowApD3aL5LnJjS6Ri8DBSHDtuPHvtegA0y9wSY76lgcpwcqrEA2zvoWm0BYke0pFy2ngb5sT+fkmGypE7fy2lgKS+6uZz4DTQ3HPsVOIbng7kkA9XF/R8YsSN1CI7nG9KcjAe7ek4+/wP0whCvCwvnRKQZYAjJaMYqNs5XURSmkXLT1siFFWimx1awO6K+/pff7sohRNlGsndg83pfFzPKWIp1QLpIS8K5VtqG2NnarNW5t0RvQQpX35ti7WEMWi2khMbBI9Fez3Ga8XVCUSFcapgUD7sSIUt5datCC8OpizxQDXPS0RHcofydUP5iFoiMRDubMGQ5a8AHqaIuADGz2CEQuC7EBXVOPlecbAgD4/awW6ItFxEtBn3uCF1jcQgW3wbgvpdcUbGgORN5S8rZO+sZuCkQh6xxNHAWjQdAmSUiMRhhZxnkEFaxFOh4GpCAYO4di+YtmGhLPxwFwE/br4RMCDUtZiB95mYChCeiOxO1xuoQg6aJOMhIKxCBmnRNCZ+KeW/hKHonr9iiIp17l977DVjGseBWDj9S5M67n/reE1Igg65B+co13gLhmoRCr2DaJkFQC8WgSsOVJongB0RGroflVqqbf6ANoiNf7DzC2w2DsGYCZS48VR2nUzxyy5xkTTFZlBH2vrp37ge1DM//ZZ+YfoQ/R/ic6gEs6sL1AJX6xLqIRLy/oBFfDj8J3OChbvC36v8+Ic3pXzC+vI1ed35Mo68BtVKaeQ+hFKXwAAAABJRU5ErkJggg==";

  var img$k = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAmVBMVEX8/PwAAAD///////////////////8zMzM3Nzfg4OBERERRUVE+Pj6kpKTn5+fi4uKFhYVubm5YWFj4+Pj09PTAwMCbm5vs7OzZ2dmSkpKKiopNTU1BQUFra2vw8PDPz8+ysrKvr6/FxcWOjo54eHhiYmLLy8u4uLhwcHBmZmY7OzvS0tKVlZWAgIB9fX10dHSqqqpJSUleXl4uaMzTAAAABnRSTlP+AOWnfzGF0eAUAAAD5UlEQVRo3u3a2XqqMBAAYLpNIhakrCog7vtW3//hjoeJRhrwZNTynQvnplVC/jAJCWkxXl5ePt5e4Rfj9e3jiByhdwN+OYz3v9A71BDvL8aHATXEkXmDWuLNeIVa4tWAmuIJPaEn9ITuhFqB5YzTw2K+7fRXPn73cKg3GCeMcc6OgT/ddfZ4KJgzJC6Ds+/QfiRk9GPBlFib1sOgYVxGSKrrPwSKdsV6MQpfJbMHQG2TS4OZ6cgazPr7cOvyy2yO7oYCzs8pSgeXPe9NO+bZ4ql/HxSer2YZRurh6eR8PG7dA41lh/cqBkrzVOQzux0anTKzu9LcfiJKfbZuhfpMhAXXwnZR4k3/NijjoneGcD28ncje102QnYhebuBnnTHTuQXChPBEazJbCymgQ3uRuBVoxRyLmx4VipbYxD7ohd/EBHSoUBfPG4Fu2J+YgYgGRZiJpCwTQycsG8eWaBoN6uBZg7IKj98zo6Sib7ykHgUycGjHZSs6r2r3DKE9BRpWD9ZG3hdp6Q2Rn+RSoHGeuSZUQl9QeUmsQYDyynhIhLxlfpqlD7WxaTYRgk2eiLk+hCP1G6jQLD9vqQ1hy7hDhiKRCW3IxZuIDIGZQ0NtCGeTjA5NcDToQgZmoDBrBYemCJycTp++Cnly8pyvdaEeQp4yPErD/zlz8a4uZGMNSvKVUBaGMG/P5g6IVUdXhYipuzyyqIYyNXXEwVCY77fnTloWtxKBslzyji4EWGn7R0EMMXuLT15xZUxpwxuaefkZ/T7CtS/QhnY4nMiQL9YJbQgHj0uGhthvhjY0FbciFcJNwQS0IQNHQ58KmbheakLytplQIJmIFQESG5Y2DZqL9ZIA+fhYt4CqacMBNVY4FNb6kJwIpqCGW3WtBzzHJkFtVv2M1o1Lt0wBXtCY+JA/lwNPL7xY9CsFkpfE27rQjosLIkLQFTurSM8JRcNsMuSLLazr6TiB3L/TIHn78bmGNOVM3g9UCPZCcu1/OZYomUQ3QeCIdpqrq4zhMAFlcBtkTLioYX+lVANLyQ6iQ9CLT1IcVBSJHPmnNLN1KwT+gjMRh6zseMixgJToEEZXPu80rWI93nAsGFWiQzBgTFrm1grarchuZIPOhDPJmIpEhiAzL7PDi7+I3y3DUSQyBN4aa62Myd/KpUSGZLS2rIrizJ1hISnRIRl29zO3FGaHN7MikSFZLhgnxZ5hy9TC2UmRaJAajcEojRN+rMpNN5ZcqhTJJkDkQEmdxQkQSVK3pQSILHHl+8dCKKnPdr8CwcB1lfXi//2v5RN6Qk/oCT02antJrLbX3mp7ka+uVxPre9myttdH/wB03iKbr43v3gAAAABJRU5ErkJggg==";

  var img$j = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAllBMVEUAAAD///////////////////////8zMzM2NjY4ODj7+/tSUlLi4uJERESTk5OFhYX4+Pjn5+fAwMCkpKRYWFhBQUH09PSbm5vs7Ox2dnbZ2dlra2tiYmJNTU08PDzPz8+ysrKvr6+pqamJiYmOjo5/f3/w8PDLy8t7e3twcHDT09PGxsbk5ORmZmZeXl5JSUm3t7e6urrPoq9IAAAABnRSTlMA+uWnfzGozdCBAAADxklEQVRo3u3a7XaaQBCAYZM0M7sIyJcIgkHFbxOT3P/NNd3ZIoRod4zh9IfvjzanUR9YB8RTeh89PtzDD3b/8NhT/bqDH+7ul3Kggz6kxzvooLvH3gN00kPvHjrpvgcddYNu0A26Qd+E7CAcpNkh3y7d6S4GRgxoNUuHiFLgR/R35BbXh4ItElFP4uvIvyZkTSfEtBO4tK8G7SdtoE6V8VWgJG0ul5RCSNmghu9XgMaOrF5QoJMtwtnbdD7aRAJr2sL6LhRIUS1RNnuGY97adbD6ZRZ/DxpVe/M0SqDVOq9WdGJ/A7LSao7L1Yk97ldbUlwOLQRSqX1m9If6UcPnS6Ep6kI4lx+RJPrxZVAh9Jrs4Xxe+nciLoL8IT1bv8tGM+NeAkWSDkYfDHK1FPChuV64HRi1pYc7HhdKnlA1BbPivpKEy4VKWrgFmObTlomEByWSDg0PjAsFbRoPcmmHZmCe9UonkRUHsmi0JxYweqO1m3OgfTWsnCL1pIgDpULtEPB6R5XNgNQEiRET8tTT5NwcGqPKB2ZLtRBbcyhUM/cK3N4U9GQM0ZaJARtK9EoYQ5E+iNg5CtobQ3Q2KfhQTtNgClmoSqBWcOh/Wdb4/B6IP5BrCq0I8pofGqeKP5+5ZGkK+ahqLX6r1gfDSI3r0hR6bkN4urINMZfOgmMvp6Hi89KJkjkMq/o/bY5X4PQHJZon3pI3DEAvOv7Ef5XnQb1MjXdoDPXVxr4BO/rsC4yhFGkFuMWoso0hGp6IDe2VIyxjaF0dirwWagNzMIYsGqrpRedUOTKH9GGTMx29EDsGNMXmgHMui1+BAcV0WffCcnb63MeBQJ8I1hzoQO/sMwsaI3InPKAdSoEFwZY7eN5Ev69MSO+SNJ6HlE62G2BCUOpvVomZM9Ib5rOhWH+FjTyzN4gKgQtVh5/YGkhridXxwIZgrqXIB+qfjxwmfIgunuj5zu4sYw1QQwVcBlm51K8wt+Bkdi6abxAfgtVEaGkSwNclA5TaEY59KQTxi0Ddofjq9yNJD2hKfAis8njx0w+br+PtN8Q0JT5EzRCPlrMJg7Gd+HYxc3OBR8ZpSWwICqe+OrL5g/45tAYtiQ2B5wqB58ptAGhIfIiylyhPIAKjdwBoSXyI8hdDFG1GYroDqiXxIcoKNh+WqCNPWegDZSARZJY9W2SToUTpRNkyHFtAtSWfBfGrpByOMSCW1P5ayoDYkoR6DIglta/tfgSC2SEK4VP/7/9a3qAbdINu0HXr7Caxzm576+xGvq5uTezuZsvObh/9DX0gIQxCgyCMAAAAAElFTkSuQmCC";

  var img$i = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAmVBMVEUAAAD///////////////////////8zMzM5OTnT09M/Pz/7+/tGRkY1NTXv7+9OTk7c3Nx6enpYWFjo6OjFxcVfX1/39/fW1tbMzMy7u7usrKyNjY1oaGhTU1Pz8/Pk5OTQ0NC3t7eysrJzc3NKSkqjo6OdnZ2Tk5OAgIDr6+vg4OCXl5dvb29ra2tjY2O+vr6Dg4Onp6eJiYmMMDgYAAAABnRSTlMA+uWnfzGozdCBAAAC8UlEQVRo3u3ay3LiMBAFUAzhCmxjg23wA8wbwpsk//9xk4nUyC6YmgVqVRbcDVBenFJJ5W4JNb7TbjUdsMVpttqNn7zxKWS9/TiwkG+p7cBCnHajBStpNZqwkmbDgZU4DVjKC3pBL8gKNN+8LwPUwwDtT+I7boFKOCAvEjIfHigs0FZQTiNQOKCJuGVIE8UCuUInPECGA+qIStw5KEwQcZ0cFB4op7XX+wTACHWnt0UxBjgheAOSBiNWCHgn6RLwQih6SipjXggJLT4/5YWQ+kpyE14Is5CW+ZIXQjAUKkdeCKMVSTuPFQK+SDpPeSFsSIr2vBByWubrPi+EzKVlnvFC6K+pbix4IewjobLhhTA9k/TFC8HbkbQasULAUbdHvBCWVDfCGS+ExKW60eWFdN3oJLwQ4pLqRsELIbgIlXdeqNoeeawQMCZpMuWF8EnLPIp5IVx13eCFMHf1foMVwiFUkr/nhXR7NOCEnOAwX7hqSKahuJ/lxXa8Ow1DSVBGhqFI3IVnRPk/oA9j0MKTn+XjAQWmoI1YqrL3yIn6MARthQgd+TZdV4WeH11W48SDCYj6BNXLFZKYLJI0nhqtsLSPLdXGwpez4plvt6ggXGvdfmEa0huWoRqSK3sgzzC0E7cktTO2pVHIGQidi+qL5ZBKhpMTSlZdHCI3B3krqmyybJ9VcZCPI2NQdiYnVSNLa+swMQXd6mcffbWFUMVCPh+agrQDnOR39VL7oDkzCa0PANCtleyZnLPJ01CknXBWPTjuqV9qzrrPQjvtxJDJqhWO5uz0LDTrKKfcgzKUQ1LwiubsOQiLzt2xY1I7XU3lr+2zEGa70p8UDyauE1S71PNz0OPkekeUU+O4YoCoMXHjz1BQjhwQNSY9cYsbsEBeSAA5V7BAKOrO5ACAAar3Wr1BChkGCHOaH3ccg8IB4er/ZdabKXRYIIwWx23m4T6//w/fF/SCXtB/Yu1KlbVLYtauvVm7yGfraqK9y5bWro/+AdOIGl9J8J/ZAAAAAElFTkSuQmCC";

  var img$h = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAUVBMVEUAAAD///////////////////////8zMzPz8/NZWVnAwMA/Pz/a2tpzc3P4+Pi6urpOTk47Ozvu7u6qqqp6enphYWHS0tLHx8ebm5uTk5Nra2tiB1jKAAAABnRSTlMA++WnfzGVrfkxAAABBElEQVRo3u3aW46CQBCF4S6QU+04w8XLzOj+F6qCLZrYSSfaFSDn38CXEOCljrtUlYUgW1KUletbCTInq96BQRepEhgklSthUukKmFQ4gUniYBQhQoSWDYk3gbb7TtsGT+WA6lav7fBQFuhf+7oaY1mgkw79YiwLtNahL4wRAqEQIRAKEQKhECEQChHCkiEf7bAZanysOhna7jca7RtDPxpt3aRBvlVNguLtkqCjvg11PgU6vA/p36Sgjzy6Sb0MH3i9p/bBLvJfR4gQoVuEQChECIRChEDo3qyPIC/POrM+VL08vc37mHiNECFCS4esJlVmIzGz2ZvZkM9qmmg3tjSbj54BcxwE/PC391YAAAAASUVORK5CYII=";

  var img$g = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAjVBMVEUAAAD///////////////////////////8zMzOysrI3NzdgYGBcXFzOzs6VlZU1NTX8/Pz39/dmZmZFRUW8vLyrq6uenp6BgYFwcHBXV1dBQUH09PTh4eHZ2dnHx8eSkpJQUFBLS0s8PDzl5eXU1NR0dHTw8PDb29vAwMCvr6+mpqaMjIx6enrr6+tiYmIKA4ZdAAAAB3RSTlMA+uWnfzED0RzAUQAAAf1JREFUaN7t2tlSwjAUgOGyeQ6B0n2je9kFff/HUybRGUenSROaUSf/NeQbaHJBONZ7i9kURmw6W1j3nuYTGLnJ/OkdmoOG5pa1mICGJgtrBlqaWVPQ0tQCTRnIQAb6J9DODpcDO5f5UKioW5TJ8S/eACi/OihdGwpDRYtKJa4YtA9QsdQTgV4CVC4RgFwfH9CSD12QFVyj5cDiA0HaNudBboO0jQsSFSukxTwoRNozyOUxKXA50I2+bgWylewI2hyIbbk9SJewr74fKhQ+EOtEl/D7IZu+qgaFtngv64dCla3AyugG74eWH+dNIbrviIH+IxSla07+Jn8AdEN+pM2VoT2KRDbKUOQISakyVAk55KoMuRnhOw7ZKUNwTLb4ra9455ePP0f2x8P/moEMZCADGchABjKQgQz0c3u6TDw65BG8V40OQYQOOimMD0GVpNHf/rFsoCHQZXSoolCsAjX0UrUfKimUKDjsRK/7oePnHa90Z7rEoR+CTPUK0mUrRByoZjfxR1koQtqOA52Q5ntyjt3R978CB4IDk5pQ4jm91ARpFRcqCbK6bDWwxkHWK3AhiFG97U4AglTZcc4gAnkHRYeEwINYtaPitDaIQnDypZlu44EQxCpiv+nIwIL1Lfxkft9/5QYy0DhpGxLTNvambZBP12iivmFLbeOjbzu6QQG065M4AAAAAElFTkSuQmCC";

  var img$f = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAk1BMVEUAAAD///////////////////////////8zMzM8PDyQkJDv7++pqal0dHRJSUlZWVk4ODj8/PyxsbH39/ejo6Nvb2/5+fnOzs6fn5+3t7ebm5uXl5fi4uKHh4d+fn5nZ2dMTExERETo6Ojd3d2/v7+Dg4N5eXnIyMiVlZVTU1Pz8/PU1NTQ0NCMjIzY2NhgYGCtra3alU/RAAAAB3RSTlMA+uWnfzED0RzAUQAAAoNJREFUaN7t2ttu4jAQgGFO7UwwFDvHpuRAIMBCgfb9n27JxNpuF21jSMcqUv47JOCLIyLI4N65h+EAGBsMH3pVj6M+MNcfPZ6hEVhodD5vfbBQ/6E3BCsNewOw0qAHluqgDuqgDvqBkIj98fX5sbgOes3x1vKDOaSO2KZUmUIBtitQZtAY23Y0glbYvpMJtEGddK5Noi4wgDz97HQJ17c86mPcN0MRUhnc1hqpbTMUI/V6I3RCym2GJkiJG6E9Uj475HVQB1mHwMGqmB/K8Jwj+CGRIxYlsEK6VeQBO6S7fyicbNaRBcib4bkjPzRHKvC4oRzrZktmaIa64tUShLLkh3Q+O5RLpNaKGXK3DlK5YIZgtUBqlzBDIN6QKiJmCMINUjJmharmWDfnhiCWSG1CZgiiAqk3wQxBskNqsWKGYJ8j5WyZIVBrpOSBEUrK9+dx5iA144JCAFEbOsUDJQEAvOBHBbBApwJjAO/pA3r+3ntYDR0cxEUI4KJOjpX5Xbk5tJF6Dap6GLjlwfvyOgodpNYJ/JuqC8PQqwo/QTpHAGyrq1VdMTnR4f/alZcQHvXUym2EVhKNO1xCMgFY6SV933Qr+wwV1TFO9fzEbYRgagwFQGVILZIUz0X1J2rWDCnjNU3+Ptu7JSwlfT+M6bEwmakG8qpR43aHMqvemJakX+uZTYlL/xc1p150z3V+1SSCj/Zk0pJ0Ae/cO8XLH/wskFjUTNxwwbYvmTrFJoJP/Yi/DKxD5XraWDZRraEUjXpTLaETGua2hN5NobQltDWF/JYQ5GbOYt8W8sazp8Z2qbij66iDOgg6qIP+dMeQrU1i1ra9WdvIZ2tror3Nlta2j/4GQjRJ2VA0dAoAAAAASUVORK5CYII=";

  var img$e = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAllBMVEUAAAD///////////////////////8zMzNDQ0OlpaX7+/vq6upQUFDk5OTf3983Nzfx8fHDw8OSkpLS0tKDg4N+fn5bW1v39/fZ2dmYmJiLi4tVVVV5eXljY2M6OjrKysqioqKdnZ1zc3NnZ2dfX19LS0tHR0e/v7+7u7u0tLSurq5sbGw/Pz+qqqpZWVmIiIjs7OzFxcURI+eeAAAABnRSTlMA+uWnfzGozdCBAAADWUlEQVRo3u3aaXOiQBAGYI+1wRkuRRRFUeMZjxz//89tVnnH1JaQbqywtbv0tyTdPjJMzwwVGh/RabfoG6PV7jQu8aNJ3xzNHxeHKogPqdOkCqLZabSpkmg3WlRJtBpUUdRQDdXQPw6p2BVkl4fOqWXNxJQc2lm/YqiEZXJoZV1iLiyTQ/YV6tKnqKH/BQpUJVDPsdIoKIT2yWn9/iCk+pdPnRVBi8vP/YegYGWhPXOhIL3+4hiUh7RjZXHOh0LkJFoOGQfxng+5JsnR5aC3m5OofIiebtJbGUjNLMRQUwE0GprEmSoBDUx5NCruo9HUpA7k0LMpXny9MixN8rMU0ieUdjlLUBfZJy2Enm7Xw4FogfwnGdS7DToPoggVPRH0gvmmuJAaokQC7bKi1OVvE16aFe0EEC5oLNmPxrgkPhSj05UEUlhJYjb0mlUcZDvsISubcCGVfdZWySDU2YoJzc0dkkHmLs2ZEPJdKeThGzKhdbY3yE9BSbaI8yDlX9P7cqh//ZuvWJCHxpND+6zUY0E93CI55GK940BY8k90P5yijSfFt2BAGGgnB4owOvdig9vLgSaFqzBpGx+Vv0hOOBAWoBXlSa/DY96OnR1oXlnQAM0gD0ADydC9yAj50OFIs5EzZjIsWdAB7S13FPYXUcN6csgTNazGWVAO4dSpWRAWmYHYQTPbxIOOmA1l58KRCeHUGUodPJMtmZBnlRy7AaYRE8ICnWqZo1Msx1xojEsqd0FjNqT9rGc9UROhSrMhmhY/gxQ/6UyJD4XFzyDFTzqhADLf7uSxB+5kRkECuT7O+QHPCXDC910RRH0MxEpxHLVCfp9k0ChB5VQxnCmyk5EQothH7Vp/5eg1cv2YpBCdLcQ2LHbCrUk9kxyiiSn3z6pg2Lq+SZyQFELbIpx9XtLeQQ5aVQ6po3WL9fxeynxo3eKoxBCkyPoUydL9rUeXyee/R3DkENrJxCZa7GI3CNx4t5hiChQ0EB+inm2xwu7RYxDpFcdZaSoPIfbbr5gt5uRjEI2WduGojUf0MASq6+QxThfMgxAinGzujNkEqxMD4od7iNY2DHsdHdBXPEgYgRvPw9gt3A//un/41lAN1dAfgip7Sayy194qe5GvqlcTq3vZsrLXR38CNzUbwKsmamQAAAAASUVORK5CYII=";

  var img$d = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAolBMVEUAAAAAvssAv8wAvswAv8sAv8sAvssAvs0AxNEAv8wAw9IAv8sAvsv////x+/z3/P38/v71/Pz4/f0Fv8xe1t7u+/vK8vTz+/waxNASw8/g9/jl+PosydTF8PNz2+JS09ye5us2zNY8zdfA7/Jp2OBZ1d0kx9KY5Op53ONu2uJ93uTa9vez6++C3+VK0Nrp+ftCz9jQ8/Wq6e5k2N8JwM2P4uiT7n99AAAADHRSTlMA2b69u5R2MybzEfI7x2vHAAAEAElEQVRo3u3a2XLaMBQGYNKkadIeS5aM9x2D2ZdC+v6v1gTJxqkHcqSAZjqT/yqJTT50LAlbaNDk6fHh7hmumue7h8enwfv8uIcb5f5H1/kON8z3lvn5DW6abz8ldENHSjp106/eDzCQtx5xDwZy/zp+wEieBo9gJI+DBzCSh8EdGMnd4BmM5HkAhvIFfUHaULjLx7NZNp+UASCiBTnlwiPcJcy2OSUuo+l6dAOoLHzCrfexCSlG14UmkW93hK61HDpXg4Yxsc6HbPPrQLVHrMvxvQRkXvaxN9aDFtT+p1qU9f7EMtkprbcjew0orPxulbjrTRfj8TwrKpd2G8rSEF4zpcffSmWo3lKrCeWrYXfwBPmqY/Ho7Zh3/NmdqEIJaWtEyDroD61D5Lfl2yYAv8W5Q0UoOFUmOteJNzFrJBZoQjVpnen5seJkp64RaEFhLP8BdXeXC7yksk1LLSjl0vFCuBwnZfJUpgHNfVk2z/l4vq247HvqUNK8yQo1la3k6eqQJy4Q914AlZTrQbkonP0b054wSZLStXUgJ5YXKEEwlu2S11AdaEKEkyE+eKOmKTrQUrwiRhRu41r60Eg0yN/Ax5n5n4AKUY0IENlZfWiEhYg4/wCY9K4RXwESkpWjDqDyJ6bdxFPAQmsx+FagGTSUisrlgIs+xESpA0BFHwoE5AIu+lAphmAFuOhDcv6Zgk42RbHBQnN6nLgzHWds2RYvkFDGj6NoruEEohttcNDsONTZWAPK2fE9zm4NyWLwDAcd2PEaLTSgP2LWR87euX6v28s5BQeNxDhKNaBUDPURDgq59swgp/0AB8nTeajs1M3khYS85gNZNWMBVVhoIWq3V4ZWohRrLFS2pVbLC5O3DFjIETc2bK06XCUEoHgXRBw1aCtuows8VPo63SEnsnJ4CCLrmEilSY580RIAlO+9pyrzHJNlUIGgeZrYoZ1SPk1sHSVINslyQ8XC+WJCVX7io56DG0KeaJDtgSJUU0tBctLm9EQVah9HWPXyseMxefIclCGo0G0KmxU9noIGFG5t+fJlctHZuc3KSRzqQFC77VJgdmEtaMosGVKDFgSJ1cSPN2eYYdQ6VgCaEATEbqno4PSPrwk5rRcnoA1BHfFTq+gqD7rKcE9PreFxDZ+AIEzfralStyqy+Xi8mKYuJ50jfhWCLiQzZ/1V4v6fFgCfhSDxfOtyiFeDBtRPfnklPx4CXAcCZ7IkZ76b8KMJgD7Uz6ggvW9bOGFFCYCG0NY6ZcwllNs2Iy4n3qJ0ANCQWoJyMs9ms0O+O9+d/6/v+L4g85CpbQa/jG2cMLYVxNjmFmPbdUxtQDK2pcrUJjFT296MbeQztDXR7GZLY9tH/wJaqhlff2pFzgAAAABJRU5ErkJggg==";

  var img$c = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAnFBMVEUAAAAAv8wAvswAv8sAv80AwdAAvsv////3/P35/f0Mwc39/v70/Pxt2eHw+/zu+vvl+PoGv8ys6u5R09spyNPX9fff9/gjx9Imx9KF4OYdxdEPws7p+frL8vQZxNDQ8/VX1Nwyy9UvydQTw8983uRe1t687vGy6++d5utH0NlFz9lx2+LH8POa5eqT4+k/ztil6OyO4uhm2OA6zddz/xLXAAAABnRSTlMA++WnfzGVrfkxAAADxUlEQVRo3u3abXeaMBQHcNuuNwnJglFB6wNK1epmrW33/b/bXC7bZeMAmdvlnJ7j/00hgj8DIb226Z1zf3d7A2y5ub277/l84lLI+uQd6CBn6Z6zP9Sn+94ddJK73i10ktveDXSSmx50lCt0ha7QFfpo0OjYV6q/H5XbGCC3l0qco+WeGhkg92xEEZ0UbRxQhA5GHbGRAYoWUpRi8nMbA0SO1vjjFYABIke+vOJGDBxQtCwc8xVgp32XOCByVue9z35HRaHQZQ4nNPvlDIETmiWFI9HhgNBR1J9ayK3boXCnHnqRMj39E7SuOASVHRz5l0NRyamHnMCMLoWiU5+cBgiK0aJGfwVl26fUyh9RRpDTBO1Q0v11OJS9SCMo5DRBs1Rhl56CoW9WlgR6fpohmMaaPlII9A2Pr/SnFsqm2DayeLCdBUF5lVH2C9RC0cIo4VDCC24eQqCo/4ciY7mfQj0ktBB6nvnWTSHNAqDPpnj/dP/gcxhGAPXQFPuc+IPcHKFNADRHRkyA0gSNDZ7w5puHuDdvhx7xSLuGQMglWgiafJ7x9FMrdDB0VhAE42Kspb595ff0sRV6w0s+C4cgLy7Cux9L+NT2W6EBHRcG0fhZ+Bee8JZlHJDr42Xw93VrffeG/x+iN9/6KU/5FzYs0BpvzMDvWNxmgWBJN4m2OaBdMcBpNCQ8ED4UpvwOPNADjmm//coH0Vl06VIeaFEMAJrtlixQMe/sStP/EwuEM6nxk53DL04PLFCCU5Cf377SLNEIveA57m+grSk9Oq/aQ49t0EH54/JQiIofeyjNQBaaIOq5tuFQpjT++vZX4YTQrhVyRnhp4AIhJ34rG/d45VatEBxlUQS9Db/45OtGKCtKv6XzJYdE1bVDmREYbWMfK5OVq4emplzaL7Rv3odUqu+mWhAvp7UQYBU0LldbchICwVFVJBVPaqG1sHaOHySa49EDCICosC1Hk1QZ3i7P3W9fDc0kEIJhalskgijuWVKN3wxRtjuprE+sSGqGdsWTkboQiDIbPf7IaSM1SQ3QJi5GzuOl38pH8U9p1AT1BWYFl0IwJqkBsjiyD3A5BBOS6qGBxoEQBIVLVSgSxpoNtEHhUv3w/roaQwgULrH+BXJMEi9Ekh0xQVVpCrDRHnIcEEnxcCuKapsDQgkBJahMZIBQwlBpwAHBeF6SdOJvEQPkJfXLETNsY4Fgmhh0TEqFBAcE7j01NjbpIaI2Bsgny/NKbz7yv0ev0BX6IFBXS6o6WyTW2bK3zhbydbU0sbvFlp0tH/0OpJspgKLrZusAAAAASUVORK5CYII=";

  var img$b = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAsVBMVEUAAAAAv8wAvswAv8sAv80AwdAAvsv///8Fv8x53eRR09zu+/z6/v79//8kx9J/3uUrydT3/f70/P1Ez9kextEMwc4JwM237PCs6u5p2eFX1N0ZxNAQws7f9/kxytXa9vjE8POd5uuE4OY+ztiN4uhu2+JJ0Nrl+fo3zNYVw8/i+PnU9PbI8fSY5erA7/K67vGx6++I4ed13ONj19/p+vum6e2i5+xd1t5N0tvN8/aT4+lAZSgTAAAABnRSTlMA++WnfzGVrfkxAAAEnklEQVRo3u2a6VbaQBSAQeudQEIIZiGQEPZd2bSgvv+DtYc7k2k0mQVoTnuO378eQ79Z7iam8puH+7sq/DWqd/cPlTM/dC36rh9nD5TAb9NDFUqg+lC5h1K4r9xBKdxVqlAK1QqUxLfoW/SviwKnPq3tPz5Gh47rAXJzkXc69hrkD1pPeze4tSg6rEkeVlg3bigatxukEHMS3Ug0GxAxrWfvBiK7TeS0asaVIqPZ+nRQT+1weNxt+xbJ0HevEnlPf178YOQu+RLs7rBHOI3RFaI3k6Q8dWL4QjKZ8yc20aWiTiNdbpgUne2Jx/3KuUw0Ioy2AwK66a7MxSWiSbrQOojxJ2zrjwt9UY15BkuFVDPZnhxd0QvzDJVKjN1n2/f0RIlFo2AKasRbFp2Gjiju0Yx3QZlnaproiEKCdEEDVqve1EVvBBmBDv6aXlOgKgrowe1AD5vG3l5JxDN17YMmLoaQ5aiJlo8YCDZo08Ql/lQTjdgF6WP0MSlsFVGMJ90L4AJmNMtVRB189gUuYoDHHiuIsNfNjdxEbv6cGipb6shFNj55yL2CDSEkBCGYTAO5qInXGQFAwamOhaIDLtSTijbY6iCPd0KkW4oaeMUyUWAVh4JDh5RIIRyOMpFLdy7quU2FpJ3LRAdMotxQeKWiuTDwxvjQUiIaYg0R1HRZ9wjwksYS0aD4cMJUNAARPbxliei1cMlLi6Q4ItEWe4VEZBWmypRwnuU9/VksMopX/I63h/ObqFVN8EGxKP4U3bFbp3SoARvBFMvVW53h+p/ieycWRSiK+GCYZUhPsE//R445zo6eW7HIx0/ZPHOyjMHH/uvScOeseONU2BHghxJeyTP00rve4aVx+DF8YA2SiOh66Y5aJEstrXiNyCVZTKAcz//8kIh6mb71kv1t/D3gOT3aZj3WKds5mxJROzvWOtMap2uci1wX44+gj/6sYwPDxJyXiCa0HQkw5ugoeDCi1ywR0XQx5I0gr4TwDTcCkYg3t4WwiVrM81RYgd6lrfxV3tt4Ha8XFu+JVBSyzJf3NrKGryzwRzOp6IWdnXymIqfCk3v0pSK/lTfU5obMKidkfJPWbqkIsBFYnkjkn2+yUzzWzWQiPtR+iG+plb/p4JXNQHIRrFV+PVrWF4IUOyiJuizp9fHwgk1fSQR9FlPatNmEqSaq0y92El3Png6YvpKIL2y11PN0+XypKLJpwxsYOp4F/dQW5CKekMhRwxPR7mF66iJeNp9xTxrfbzXeQEcU96lpo3hPrsm/c9IRgc0mrZ6j4pmy4SIETREkjwR5rEs1wZBQNoa2CFxmImEk9sz6aceNQV8EC5OwTTVjKCTZ8VElgEtE4PRIqtp7Bftuk5SjAZeJIN6RlMbm5YtrsV/xB6wpgK6Ic7Ayf+kYTmd2DADGMuk2d2ZmLE/gGhE4G/KFFrNzrH0AMpGM05xI2ToAV4sg6KwkmjGAikiOcdo0iizmMAFQFsnxagMrxxJ2AwA9kRx/NgrXVuoYDKd8L9oiOUs7GS8cT1Aq/qu/lX+LvkX/l6isV6pKe0mstNfeSnuRr6xXE8t72bK010d/AQQIN3f3lf4mAAAAAElFTkSuQmCC";

  var img$a = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAApVBMVEUAAAAAvssAv8wAvswAv8sAv80AwdAAvsv////5/f37/v79/v73/f0HwMwlx9K17PDx+/zo+fqY5eofxtHX9PaH4OY7zdft+vtQ0tsOwc7d9vgTw8+T4+ly2+IYxNDS8/bG8POg5+uN4uhs2eFk199g1t4xytXN8vXA7/K67fFI0NoqydP0/Pzh9/mv6++q6e193uRZ1d1Cz9ik6OyB3+V23OPZ9feaBTLJAAAAB3RSTlMA/Prlp38x8V/kKgAABD5JREFUaN7t2mlz2jAQBmByNJJWMtQ4Prnv+4b8/5/WoDUZE9up1qGeTsv7pVPa+BHr1QFx5T0vz08P7I/l4en5paLz45H94Tz+0A4rIe/SyyMrIY8vlWdWSp4rT6yUPFUeWCl5qLCScofu0B36V6FqcKpvZt3puueOvJARQoAaw43PpRL8PfpPOXG920NBDQTwT1F8dXRuCo0iCTwzAnrVm0HzCCTPjZDN8CZQY80heV2lQCh19ZK/uwE0tgWPA4Lbs35ruBsNtoeOkIrHkbL/bShQ8FGi2TB55629a8vLIGAWfg/aShkzy22bpbLvXppERNXvQJvLZaDZyGmUt7hRxE+vONSPHbn+YrgjP57DP52i0EjGt7rFvorTQUm8hcUgD+K7M2dfx1rH/7NWCHJ8MLjLmCO+d3CLQFgQ8I0WMxewygEdGsTlMFyga0JDtkWF2ksc4oiZJXzVknCpUBN/rs9M4/zECrRpUEPp9+NnVWJeP2b1cQtwaDTIxU4YZl2QS8UzBmCtdOupBgny9RuK8t4rZI17pyExoEBzmdusC30vapkTAs4/NKFAG125KPMglA/tcEZUCZC+mDgRIWuJtTOHxlzHIUKsJ861q5lDLd3cK0aFsHZLc6gH5xLUyVA7roQxNNG1HpKheFbMjSFcTTw6NNVTdmAMcZ2rVSvovmIiPGTFf3urXdWpDmfoaAo1ELKSm4bg2QEeJlcuda550xRycIdIvmRnKqmNYXuGoEeDIPkS5EKy+RmSvW+Ubspz4xUvncV1GldTSwGG49YLGMGD1HapXFOIYWONP/EYXL1n1iXXJwfd3i1j6FWPeUefRyvcXYyhjcQKUKEQj3cLUwibh0/IEO6XwjKG9ti4IRXq6+7uMmPIwqPJiAjhtFZHc4hNJQ6NBu3jiUWARqBrN6ZBa4H7JQEKdTeIGctZNmTWpujhlxwuBWIHXK33WYcqmdPBXTznOyRooRsVOpnH8lWU5QTY2xtGgi4fQ0bMNFYkceEiQmOpITU2hfDMKQ6MCMWfW8BumzlbwFZok6HQx5pPLBMnwLpBi5EhtgeupbWBtFc4qmmhj/8DiVLH+Z0zAHT8diGI1QVKvvd1v9VxRFJ4Rb+imaIEYsDyU+0KjmmxolAjEhypKGDZadfh4gi7WhRi4RQuX/1NvKx/PypkEhIZwjQlxwB/O11fx5ofPhiZkqgQGwJ8jJjbh1MwrradhTd0uyA1g/MaUhIVYp6dqA4oGaMqUTJxYvWURIaY5YLg+QHoVhm7lugQptrLpQSf4PkvJVEhjNP3JaQUqeQamzFDokMYKzj4XIjE3eLLWgtXp1yJDmEWw/5s5Suu7M6sd8KtKlNyCBA9KKVWcQJEl2RyayFAZEmxZAgQScr8tvj2EBtOOqn94u/9reUdukN36H+BynqkqrSHxEp77K20B/nKejSxvIctS3t89BeexFWlWRwk5gAAAABJRU5ErkJggg==";

  var img$9 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAApVBMVEUAAAAAv8wAvswAv8sAv80AwdAAvsv////8/v74/f36/f4Hv8zX9fckx9Lp+fofxtGY5Ok7zdft+/tQ0tsRws8Lwc1z2+IYxNDE8POI4efz/Py87vF/3uUxytXl+Pm17PCh5+yT4+ls2eFDz9nd9viN4uhh1t7S8/av6++q6e3K8vSF4ObP8vVj198oyNPg9/im6Ox43eNl2N9b1d5Y1N1K0dqc5ut7OHYxAAAABnRSTlMA++WnfzGVrfkxAAAD9UlEQVRo3u3aaVPbMBAG4ATKaldO4tjxlfu+CVeh//+nlchL7YBJtSH1dNq8X5iBcR55tY5so8prbq6vqvDHUr26vqmYfJMqcuubcaCEvEo3VSgh1ZvKNZSS68oVlJKrShVKSbUCJeUCXaAL9K9C9VbUXHc3yWrUXnghCCKAgt3aV0havcb8xNutd36oNUSN6l1IDXruOSFnMUOtCkP4o342aHqPxQpT4+AsULxSeYeIkIgOfuU/nwHqD0hxUKtGdx49PX+f9EZLrSiz5l+GWvQ2ORq7Ozc/cdN2Q739EbvB16Ce4lCnFxfMXvJWVprVvwKt8XcT/lJDPuGOdzo0Ry7M6shwFz5fw379VGjBDEZwLO6S0nOqhadBHnJNpnA84QrTAg9Pglwf7WY56xlsnwLdUlp5FyyyxZRqyaEJF84DqwzTYQ1CKRR3lMkC7BLWtBlXWwqNyRw3B9u4nbQCsQyKjaMaglU0MqdEcxnUNhA+gX2cgTJSIIEc3zgzkOQ7mtpNJNBL1qyCLI10K4HWpt4zkOXZQOpOAJkOokch5KSHTeyhvjJxQZjRvhA4tIci03P3UofboWMPjfYHUFMMxVwJa2hjav0E4jQMNLWG0m8TTw4l3A2WkKNM4oO7oU2tMMODOjX1HtraQkEKhflFQ6vioAref3PR2BZy04+AXAaFyoeFobeH8McXIPwUwvz4Hw00EpbOgSxd9Wm896XTY2EzBAeXFmFR9OEX79g0Q9sWAjJQ/x1fnMM7B9PekTVUM8X/DuLcmwNb1tAauQLChLxOWEM94hVMFl4vybGGpmnjBlJobgaYgDXkkIEWMoYva+rZQ9DFPZQIHY8vLAG0QG5wUVamEAMQQGF6n9o94YRoK4HggXgJEyTRZmZdEdQ3Di4FTis9oTWIIBhqYeOFM55XIdRPDyPbfuB7TnoAIcTPLdiI7ZweDywWQwE/wm4c+wlSGIEYgik/W64spCkpvh7kUPYUu3R/50wwfWLxYznEN0/7kO8dZZwmpnUjD06DnIT49dnkSPnuEq3SRCCGOMGMeJJnLShO3ERiRzfqUiiTupol3BTVJewRMyxJoSxjxdGqFtUPK/vyQDpjWJJDnB1i7u3z6LHVr8funbdrJ1r9YrCBmSSGON4gN2wkZnW+ZPToNDNJDnHCLZL6PIjJ/sPzkhzi1EefUlrd8rvoA0kOcdy5j/qDgoQrbsYPkhziOK0HXxHlENUZRi5wCiU5xLl7mg/vfVLUWHZHES9VRZIrgeTJpASyCCC5hCFkEUBiiSAfASSUcAsHEUCC7DbLD+vF3/tfywt0gS7Q/wKVtaWqtE1ipW17K20jX1lbE8vbbFna9tGfpbEkz2i9HpUAAAAASUVORK5CYII=";

  var img$8 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAn1BMVEUAAAAAv8wAvswAv8sAv80AwdAAvsv////4/f04zNYFv8zt+vv8/v7Z9ff0/Pzn+frf9/gsydQVw88bxdBp2eBY1N1T09w8ztc0y9Ulx9IPws7O8vWr6e5K0dogxtEJwc3S9Pa97vG47fCx6+/H8PPC7/Kk6Oyf5+uO4uiI4OZy2+JCztnx+/ya5eqB3+Ve1t7j+PmT4+h83uR33ONk199wOre6AAAABnRSTlMA++WnfzGVrfkxAAAC80lEQVRo3u3aSXfaMBQFYIZyBTKTR2wz2oEwhiQk//+3NUV6WLTp6cJ6Ol1wV4EsvmOkk/sU1PhKp91qgi3NVrvTuOYHn0LWj6sDB/mSOk04SLPTaMNJ2o0WnKTVaMJJmg04ygN6QA/ICTQ57F8D3IcBCkvxFS+CEQ5IToXKiwSFBfoQlHIJCge0EbdMaaFYoJOoMs6gwgF1hRFvAgoTNNRSNwGFB0pWWuofADBCvbwQOjuAE4J8Jmm2ZIWAPUmbnBdC1NfSYMELYU6bb5TyQkhHWhrOeSEsBrTNP3khBGuhc+aFsJyRtJWsEPBOUpnzQlVFTUNeCHGXesPnhTDxqt5gheCPqTdiXgjhVOgceCHkJUnvvBDklqSnJSsEnElaB7wQPm+9kfFCZm/wQmZvsEJmb0S8EPLbzLznhSBnJD1LVgjYkVTkvBAOtM1XIS+EhHrjzeeFqt44TXghZNQbo5AXQjClvccKBVkv9vQj2YZC/5hEl932aT1QBGVpGVqJ38P0RPFfoBdr0KvENYNvHS+wBR3Epwa/c1Y+6kM0pg7UT3JsCt3RajPbzSVsQDQn6FkuUkQRH9NFbrlh9+rz0QeLkdpm0v64RYWQ0HJdE1mHXoTOVD+Sp0Z9aRnailv0KHJRr17tQs+iykYPDCc11lmEaDSgTMzNIWJ7kHyiZlO1XeKaYEhrZgk6ltrxUv1k6d2Bdm4LGpPjw9dHCF0W6vdrSxBl5APQH6IPc8sfrUJvGQD07io7U2tW1IZWlTNeqLcKNWz/Uqtd36sLbYmp/nl2NBuuWrOaUDYkJwRlrYpBv0FrVhNCrKSN0Zzzu1Nyql5d6kJYbAdeEcGMmuGGgTmllvWg75NUJ6JkLVRmDBANJqcwqur8zAHRYNI3px8OiAaTKsMELBCie6fIALBA5iP1ZylUGCBMaH2GuwUoHBCSt+vf2Y8cVVggLOPz5SjxZ/7/L3wf0AN6QP+IsytVzi6JObv25uwin6urie4uWzq7PvoTA1gcp9niWMsAAAAASUVORK5CYII=";

  var img$7 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAWlBMVEUAAAAAv8wAvswAv8sAv80AwdAAvsv///8Pws7Q8/VP0tuw6u4vydTw+/vv+vv1/P3e9vjG8POD3+VV09w/ztgWw88IwMzs+vu57fCq6e2i5+xt2eFp2eBa1N0bVuUsAAAABnRSTlMA+uWnfzGozdCBAAABDElEQVRo3u3aC66CMBCF4Q7Iab1Xxffb/W9TBZtqYpWoHcGcfwNfQlqSZsacKvJMkCzJ8sJU9QSJk17lQKGTVAgUksLkUCk3GVTKjEAlMVCKECFCPw45RPootNiUdnzATSkgN7bn9rgqCTS1VeUSoSTQ2tbNEUoC9S/QH0KEQMhHCIR8hEDIRwiEfITwy5CLNhnVzVysZWNosV3ZaAPU/dto/dkzKLwXXoJCu0bQ1L4Nla4JNHkfsvNWQR/5dK06DArHu9GFHdY9uLCt/AURIkToEiEQ8hECIR8hEPJ1G7o7BOn0WOfuoKrTo7fYMLHb41FChAh9CxKoJGpLYmprb2qLfFqriXrLlmrro0c+CAVx4/q+RAAAAABJRU5ErkJggg==";

  var img$6 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAkFBMVEUAAAAAvssAv8wAvswAv8sAv80AwdAA2/8Avsv///9h1t75/f3H8PP9/v7L8fSF3+Y+zdf7/v4JwM3j+Plo2OAQws7u+vu/7vJR0tsix9L0/P3R8/ae5uswytTb9vez6++u6u7q+fqI4OZ73eRY1N02zNYqydSn6O2Q4uh23ONu2uFI0NpDz9nD7/IZxNCK4efrtanHAAAACHRSTlMA/Prlp38xA5BBKAUAAAIJSURBVGje7drZjtowFIDhsM4xwWQn+8IOhZm+/9uV6rjVVKpyHJtYXfxfR/6I5FzYHOfZcj6bwGhNZvOl8723xRRGbrp4e0ILMNDCcZZTMNB06czBSHNnBkaaORMw0sQBQ1nIQhYaF8r942pgWZ0Mhc77iKnE0zgcACXXgCkXZdLQOWJaVZLQacs0a0MZ6GPHtKtkoJS9oCMNrZgousargd06l2HbhIQasU+9EBTK10I6UNCRYV9ArVBIOwq64HNrUK3muIJPQLjl+AmUqxDy+qGceiG6My6R9kM+PrUHjfB7L/uhjNwKdCVu8H5ohdBKB8J951roX4TidkOUeskLoEvAGZUbJdrQicnkHrShOJCBeKsN3eXe6KoNQenSTlDk+lBSbfnncBn+uSKtX/8d+biMB79mIQtZyEIWspCFLGQhC/2+kzg9jA6FLnvGH6NDELOAB62JM+yj6uK/+7BsIWPQRga6I3TTgRq8ZO6HaoQqoKK+aLbphxIufo564m6x64eg1L6CFCvEBLT/eROvWMywnIDOHJ97D9Ucv/hxz0xA0DGsyRSYj33AsDsJ1QETFeV6YE3ARO9AQnBj+m1zCQhabYdnIAOFnabjZkBC2NdAx4keIAtBnSozhReCHITlh7Qp3IHtNpejYP7E/8ot9L9BpkaqjA2JGRt7MzbIZ2o00dywpbHx0W/4CGtodLp8vQAAAABJRU5ErkJggg==";

  var img$5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAn1BMVEUAAAAAvssAv8wAvswAv8sAv80AwdAAvsv////0/PyL4ecSws5s2eGu6u7k+frQ8/Vh1t4Lwc0HwMz6/v502+L4/f4Vw889zth33OOo6e2b5uuW5OmF4OZ73eRa1d05zdckx9IcxdHr+vuC3+VR09wsydTh9/nZ9fey6++h5+x/3uUzy9XJ8fTA7/K37fBF0Nm97vGQ4+ln2ODU9PaS4+iKiZWvAAAAB3RSTlMA/Prlp38x8V/kKgAAApBJREFUaN7t2mmPokAQgGGvsQqP4RJQVC7xGs9x5v//tpWyk87uzoZWrM6a8HzSL74B1Ja2GlfdTrsJbJrtTrdB3lrArPVGHdDgWuq2QINWt9EBLTqNNmjRbjRBi2YDNKlDdagO1SH1kB+NevcbR/59ofiMjzrEd4Q+sYqpcmiD1RwVQz2s6lsptMTqdiqhCQqecS8PhY1CyDHEJU3hfuk3Es8uDwVItvCYEMmpPBQhiR8M7ZBY5aEBEv/BkI1kpBzq16E69DIhMLAQsYbkV6WR8of8A2KWA19IWgY28Iak1w85g0kYaAjZJl598oc+xAJuc4cOeGOmzCEThfedphAaOXNIGrOHzi6S0GEOWScDybnPHILlCsk6YQ6Bv0eSBcwhcCZIvIg1VFjgzYI7BJGHZOIwhyDIkOx95hAkaySrJXMI+mckxok5BE6IxI0ZQ0l+GfdCA4nJFXIA/FtDcHhCyQYA5ihlz7zjk6FdhhGA/S5D8yfew8pQbCCuHAALBbf3xLtyGZoYtO6Jp0crj22lfYYwgR84gn3l/LTCGj7AqVgq7tg5cT3PLeC/rPM/Q+LX3bE4k6WhpYvK4r9DbnJ7iXVpCGaKFXkl93iTeYg4FPsnVmkIhsqhDZAtklUyxavg9o4yy0PqO3YDcbY9umQppMWDfX9GZ98vD8Hu6KodkBB8obctvkzokDwkdlmI9PPRjCwKH4U5GZPR1SAAyYYCHZJw5N33nqKwT0FiCPkrypgWSCwhSIZGNgngN//FXwbaQ3k4LLW9VA9NUcmhamiHiqyKoYtqaFoxdFINjSqG4KDWWfWrhuye+V7qa+q/0OeoDtUhqEN1iI+2kSptQ2Laxt60DfLpGk3UN2ypbXz0F72CSzMm2iCFAAAAAElFTkSuQmCC";

  var img$4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAqFBMVEUAAAAAv8wAvswAv8sAv80AwdAAvsv////t+vtx2uIbxdAFv8wjx9L4/f1M0drZ9ffP8/UTw8+e5uuS4+k2zNYHwMzl+PrV9PbD7/KI4OZ93uUpyNPq+frL8vS+7vKv6++p6e2i5+yY5epr2eFR0ttCz9j8/v7d9vi57fBm2OBf1t4vytQnyNMJwM3z/Pzg9/iD3+V43eNW1N3H8PM8zdcNws6M4ed13OOQ5B26AAAABnRSTlMA+uWnfzGozdCBAAADfUlEQVRo3u3a+VPiMBQHcI7lBZIe9KKclVoQkEMB0f//P1vFHO4ObfLqbJ2d6fc3xzw/mPYlqbbxnk671YR/lmar3Wlc8wur4K1fVwcqyLvUaUIFaXYabagk7UYLKkmr0YRK0mxARamhGqqhn4GikCJGl4eyAyFDC1uFhxbkI32GLMNDCblmiSzDQ9NPKEOW4aHuJ9SDL6mhH4a8qBLIcYmdeoXQKe6ene9CI/KRYRHUu349+hbkJYS3Zz50sck1a688RF3Ck+VDL2JMTHWQ3iFOPmTJQS4tB3nK6bN8CO6U5JWB2JCIzCgUQJeZHDhkJaB7WZ7ui/toP5dD7/HQoyx+068MRzn4EQvRrijtgR6CnhjdpUjoTjkmELyJ8Xc4yBF1vumi6stOQEF9cb9FplAkSvoYaMGLbMt8m9jZvGiBgMSnG2P2o2fxK5lDIS9ZRRgoWvGy0BgKeMUGt8NueFlgCjH+s6YMB0VT3kvMEFrKK4SDYCx2LyNIXVULC+144bMhdOYbGWAhiPkibgYx3hAjPDTi7ceMoIloPCykGn1nBDniEuEhS6x3ekgt+Qe4nVXRxnPI/RSN3Ile5UCpmJ1beVKXVw8Fhasw0Gtbvhau+oEeUoeFBPKk+/46b8ceqqODHvJFM2CjIB83dYjgp06tWE9oRd0MYz2kVvsHhnfYA99fUA07wUMTVMNSeRZERp06qREEU3HroOPzHRPMoDW/G0rfC2sjSJ2kX3CKeiY7GkI7zaOB9gFkYgiBy/cvinMo3zFdMIWeSanbwRdHBmOIPvCenaCaSFRRYwjmhc8gmiedOZhDYeEziOZJJ0RA8tMdJsYTd5CzgIEsW5zzPTPHW8knHRQEr4QnYSYOS8T4V8BB+1hUziO9E83F6HiPhGBrqz9n6Bw6E2PtLWAhyIjIICx2woEcmgEegkCW21kBwzJbDgwABam2lXFPeYNOrho1h3IQWxOV2fLWkOWMqKwZElJSSr4kPv7VIrtx/PX7KYNSkDqHqwzSt8XW8jxruzim8hZQ5+3yEDhdYpSuA9+DgCYmTkJBC2lzGuiYwQlAD+lzGU8LZ218AQRUmH3PzWPc3h4AAWkTBoMbcxaEAICE9LE2/rkrJ+zsb3hfISBEPGu7fNlaRfvh//cP3xqqoRr6M5W9UlXZS2KVvfZW2Yt8Vb2aWN3LlpW9PvobhVMftSFfeGQAAAAASUVORK5CYII=";

  var img$3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAyVBMVEUAAAD///////////////////////////////8zMzM/Pz/c3NzCwsI6Ojo2Njb8/Pw4ODg8PDxCQkLt7e2ampqwsLD4+Pj09PSMjIyJiYlnZ2dhYWFTU1NPT09ISEioqKilpaVvb29sbGzS0tK5ubmmpqaFhYV8fHxKSkrx8fHq6urW1tbOzs7Ly8vExMStra2rq6uWlpZycnJLS0vm5ubGxsaSkpLIyMi/v7+ysrKioqKPj494eHh1dXVtbW1eXl7g4OCfn59bW1uBhrKlAAAACHRSTlMA+uWnfzED/pS6TTQAAAL/SURBVGje7dprU+IwFIBhbupJJW1apNwsXkBYUFAQ1ivr5f//qC1puidsZ+KgPZlhhvcTExyeSaikDCnEHZRLRSCrWCofFNYdVqgUtCqHMVQBC1XidSuChYoHhTJYqVwogZVKhSJYqVgAS+2hPbSH9tBOQaPH84/6eHOMAKoNhCNcR3R6OEYBXQeCqZagooB6PsMecTw/CB2MLyCOAupxpicG8RgFdKPm4wqRiAEABXTDlXM/Dj9dOaURAYROdwRQlZNzjgkgdMYQQw4VNNEcOggd0a0BJfSQzudXDSgh3aGElppDCU00hxLqaw4B9D6tn6+bdXx0cocaL13f4WIdU7n36OQGXfmcYejkDQ19ZnDyg+Yi4zgROrlBz25mOnzVgNyhmp/OgieK6LbilzNCYSuI+rDRojmsmqGBWrjT/sKTqXET1GJxVxt7/vrpuhFyJOM3ceRrKGDrzrR7MvlsZIJ68k/cDmwDRUx2989J5MAE9ZMXmG4F1VnS7YbDWgZIXXOithUEMyXJd+VYOe3QBJ0klxpsB8HvVEKn04DcIZTcJ80hgeBFSegQQdBkWm8NoIBQQocQglbqfI6AGsKr3MrSuY8kEDooVemgF6YnUCL6h60PlTSlgfAjyEulpRn6cCUUfv9D1XtNHvMHI/SUfJO7+f42gdK7CVoGct7Nn2x83orJBiYoFExW/clW7s3lwNAEwaWbvJfPIwNjujlBqWqEjrlaYdE9lXWG1fALKGwGp33Q82ZB9ARGCC6UhDlBHSD/O9Uwctn/+TMvfwgaTGSluZc/BGGbZyR+4eUHYZOI86xEAAEs7prz9ro3n6NEAGm1UKKF4BYlWgjOUaKF4CqV/ni0kC7RQrpEC8FZKl16tJAu0UFZaUoIobQ6UvsjH5NAKHUd9cADEgjupIRdxmMEUEbi1xBHAsGtjw7eT+UIocRTxseFo4Bgcu+4MeP4JzhGAsHRdNDuvPYboLfbP4/uoT20O5CtI1XWDolZO/Zm7SCfraOJ9g5bWjs++hf/oHqtqKJk0gAAAABJRU5ErkJggg==";

  var img$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAA3lBMVEUAAAD///////////////////////8zMzPb29s3NzdYWFg6Ojr9/f329vb8/Pz4+PhPT0/v7+89PT3o6Ohubm7s7Ozk5OTT09ODg4NSUlLz8/Pf39+bm5uOjo54eHhra2tBQUHX19erq6t9fX1mZmZMTExJSUnCwsK4uLizs7Ourq6Hh4eAgIBhYWHGxsaTk5Nzc3NjY2Px8fHh4eHa2trPz8/MzMy7u7uoqKiRkZFeXl5DQ0M/Pz/JycnExMSfn5+Xl5eVlZVpaWm/v7+hoaGYmJhGRkakpKRwcHCLi4tOBDJdAAAABnRSTlMA++WnfzGVrfkxAAAFBklEQVRo3u2aaVfiMBSGi44JpRtQ9h2FUWQVUFldcET9/39oHG5iSkuSFpiemXN8P3lOYh56c7ekVT51dnoSQX9NkZPTM2WjHzLK4awfGw4KQZ+kswgKQZEz5RSFolPlBIWiEyWCQlFEQSHpG/QN+tdBVvR+Upq2P54fz5c2Ah0dZLc6ceyUNuv3jGOD0m8xvEvq4MU8IugupWKuauX0kUC9GyyW1raPAMqksFxayToQZJY0vKXFrFrpXAxWeZcx83cHgeyuc+O7T0u2HeboKrflhc/6/qDLGlunez5EHo3Lazajkd4XNGGLVMY827bymKpZ3A/0hKlSohX0q5903jy7D6iMiX6+ILGMMvWMZDY46JFybhI+Qm1Bo7cYFNSinJyvFFPM08e3g4HqxBjqBPnTsEpIMzMIqEAiROshv9JzhFQOAqpg0BXyL53mqkv/oBca7CiICnmyTYZfkNGE/xigYMqQRDL1C3qG+TFjRyK4vBYE750KHlT0B0okwRFGO4Zin8s88kklkrAEIG/qeUJetTcj/GeyiLeO/IAKEOVNa8c6Sf4egB4A1PEDOoe518ire5KUEF9dMPvQB2gGPmryw0szBSUMppzLQSOY+WuX29OyXkd8QTB15SBwHHVXtbzCROcC0C+YYktBjc28KtqhAQVdCEA2TGnJQJbKdYWCRkFxJNAN/BYZaAlLZXglCiSqha/gTDIQmLiJdijFQJei/pn8Fgkox80hQ5WB+gKQBVNuJSCw8KvYcriBBGrCLktAa27Bg1oN4ZzUBSCY2JeAVO9zgxIw8gDpbiwAgfVzYpAJpokij66hRTRX0pAtg3+LQQmudwOgTYpIR+rf72JQGkBpyo1S3YLl7kghyNP0F2XKbLWeVTGo4CxcQ88ZbK2jhCNMjA7gieJZRycwEIN0Z3q+wG61IT3TkH13Df/cFMsPyR6BNGKhP6phJhaFna9Cv/SMZ9nva0tAcYg28rdLeVaBVxDcLhVZkS1JQCnS1rIlmbRNeI1pyN55OCmHIe4loLLTZa5SMaZZrgjbmCShtgJijOrm1XI47lgCuob/Fp1VGmDdLCz4xulgDAkoSneVrz6ELBh5buzu/WLSUj4nWylrdIhLetvWOOyyFFQh/sVXAjMtCu5RYtEHKagltJ3b7V85XbNmiEGsBckJQCxjJD0dqVHj9EkKpx1VbT6IxVef19b1ZCDWp3/wQXXK0RKehmENSU8Xg0AxWCTDBZka91xc4jbUCrfzrcpCFmuevjmjgesbvkB6XHYkn9Ki4ZJexdwoVPiHcq3ODVmOv/QFx3JF0JM2wTS8Z55ybA6JWw5ipsZdi0PKNLBW1t05QRNtrsKLFEmzY3jye5pc29XsACBUCXC3BRrl2QEgAKhA81kDYtL/jd004H3daI5BzagfzoT2XQM9IAjVkzRxvkgxVg4TNazgd6pLSsIVW8x5+Kobs8I+t8TZ+Vc1KA0FKXbAuiBjv3vvYpMVnn5md+guHW3zhbnvTX7C2fM2rm03JdtvsnF1cshLkLftLj436WUKOkJWYnxfel9sjdUPe60TvcEeaZTOpE6Ng19UtdZYqlURoYNByJo0xZjqLTrSOz6z1eBSFjnYnMNBIPuxq3op88q9hdDxQCCj9zzIf9Fq3c4bnBiODQLp6Uz9Nhu1Xbnmv31X/g36Bv1foLA+qQrtI7HQPnsL7UO+sD5NDO9jy9A+H/0NycNHk3RuOUIAAAAASUVORK5CYII=";

  var img$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAolBMVEUAAAAAv8wAvswAv8sAv80AwdAAvsv////v+/v1/P1N0dosydP8/v4Ev8z5/f33/f3x+/x+3uTs+vsWw88Pws6z6++U4+lh1t5l2ODh9/m37PCP4uhy2+Ju2uFq2eFI0Nrk+PnF8PO97vFDz9g1zNbe9vit6u6k6OxX1N08zdcKwM3W9PaF4OYYxNDK8fSZ5eocxdHZ9fcqyNOK4ecjx9LQ8/U2dbEYAAAABnRSTlMA++WnfzGVrfkxAAAC0klEQVRo3u3aa2/aMBiGYSjjMabOoSEQBrThfFpbKN3+/19bY9geOkup6PxGqsT9KRIoF7EgNoprbzUbN3WIVb9pNGu2b1IKrW/WQQW9Sc06KqjerDVQSY3aDSrpplZHJdVrqKgrdIWu0BX6UlC6Ht1le7xLAOrsolYUxnqyAROA5kmkbEblYN6heaxYG8wbRIfpn2BeoY1W50U7MJ/Q5nQ9RkdHMQH8Q7yecLHfPhs7dh0BiM44Bdr24loHAYjOE96gloVu/UOzM0cGch1BiM536whAriMJ5X+dDiShmePIQOszRwA65P1R0ePEcTxC6es4bumoyCg63qH7WCtGxze0ilWJ4w/qRo4Tv9DxBo3Mv4zRyxTeoY4+nT3WxhaNewegFNr2kpc13rXvrdrl0O40cL/W+8AGWynUK47vcda8eDkrhVqWiYdgH0KJokRHLUqg01vMBJdAC2V7eH8SlZRB6+MUnV8EZepYH7bbRNl6ZdAotOuozkUQHinRmW7LoDtVZHARRCmjM6HjEcKrspns8MdJIQJheJLoeIcosWc63iH0HEcCokRHHsrARIcubIOJfBkoiUF0KMn+YFfKFuVgMrcgSuWQsVDw6ZsqpVkplB2nic1/TBPB0v3P7kK5PUE0/PzER6lXBgWRsrU/PZVTWpVBGBhVFI5SsEsXJ0HXfthS6FYrmw7HP2yTVTv4ANoOT8stSo/JIkMphO5RYqaV9AH/K9XtwrhL4jsBCKkKXakrAGE71Y6kux4hNnuJtCMFHiG2fxgup0XPWlPyCbkNKclC6FOShXBPSQpyJVmI0iCQglxJFsIDJSnIlYQgVwKQx3IQpSUwCO3RkwhEadxStiiAd4gSMwMwXxDvRkzPwfxBrrQD8wa5UsyBk4AwW7RMwTjrCF8Qy3fTyXKd4ryv/Xj0Cl2hrwNVtaWqsk1ilW17q2wjX1VbE6vbbFnZ9tHfnZ0j0oLHnMYAAAAASUVORK5CYII=";

  var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAq1BMVEUAAAAAv8wAvswAv8sAv80AwdAAvsv///8uytQMwc4HwMzR8/YTw8/6/f39/v7d9vg2zNYjx9L3/P3r+vvC7/K47fCD3+a07O+I4OZY1N1H0NkexdEZxNCt6u6d5uuX5Op+3uX1/Pzl+PrY9ffH8POi5+xm2OApyNPz+/zh9/l33ONM0drv+/uN4udr2eE9zte97vFf1t5x2+JCz9in6O1R09yQ4+jK8fTO8vXaeG6JAAAABnRSTlMA++WnfzGVrfkxAAAExklEQVRo3u2aa3OiMBSGtd2eAAUBL4iCiPda71rb/f+/bLtNSOjG5IB1md2Zvh86nTHyJOfkXIipvevh/q4Of031u/uH2od+YJSvs358cKACvZMe6lCB6g+1e6hE97U7qER3tTpUonoNKtI36Bv0r4Ms43xMw+Fr8DzvR0B1c1B0mLkNklPzLeybtwbFx0dySc7gbN0QtOs2iFKtTXwjUL9N9GoOoxuA/C7B1UytL4KstEk+af3WGSSzwX7ikE+anL4EiqZ5x0+DU5xbai9xiVAj+AJotSZc060NkozNWIxox9eCtg0+3YEBCh0mnLRcXAcK+BM6C9Cox1fV8q4BbfhEz6CXucmWPvLKg5656e0CobbO1rQoCzpknKRQillMsuVH5UCew3bBEYrJ7mS70yoDMl0W8X0orCEjbcqABoSqByWU5apVcdCZUAVQRuaEucksCjKX9BsDKCe/Rb8XakFypD6aIMlazTXBe3JoUlwUA9kjuhH8Cx/9fH/Ms5qU0im+oKD8ggLVzmqo12S5NCj8IiBzTV1qXXjOE/OBUn0W5UVAWzp2rt6NbVBrSs1uIyAxdGypw2ukK2FsmjjIpyMvedzMyrqnIdFgmuKglLozBlk9wrRVUUTWj1BQm5Y6XWIiMw0oprXpgIEsh9pYZzniqihipjMMdKKP8hUliskGrAMYY6Bn9ZS7ArTS9c9sLggoUeYQ2xGgUAOyqJN2CIhaONVbjuxBoyX1MgIaKwserdVvH3+fVBAxMERADl230nJ9mu4MtKYP9SCLqJ4zp+0U7NGQ3VA360G2Iq6BAYYQsDDBilJXD4opKM64RqYd3UsnljUnWRAvDC7/U4R09CBTxKvo1YTGfM32x+jEITm5Xi5iB8hmyPtoRv7UkKfn1R8hnKstr9S4CGjELPRbLQm04/iAl9O8PDG/IQJyabSJ//OaiO2358Gd10JUzhQBUWtseFHPa/QRXkYWsjuJ080ZooeAXvNbptd5FHpLFnnrGrCnRD6gHVi5jWsgoDmaYhhg7tEHHi/X4YaJgAy8KwhpR0WN3DIvZ6CfgICYhVO00VmrmhiXehkFvbD9pZZNhNbSgphFVyjogNvOFaBAkbtHJgLiLUiiAYmM8WQrGuoXQEDcdk6kBon4ClVtXR8DicTyqgYZPIKlBVnjLPniIHiUX4+khKiaTKpsqGvKzreD9YikGUuNe1MEFw4CF3slD3nRkPsSEYU46Mw8YOhD1okUExibWpDcky5jbSSFCptzU+Agv6k/bgG/TUZSkvGaknMxEGzR9xNTmkM8ZgdcEQ6SX4WGFhSUP2HHVCsoAzJdxWkdemK3AQUIOW4hrlGEc2yw4YPSJ5DeU5Y4zyjGSvhxpVUaBKcRYXqJEbPxujE1rzkl9lq8GqQaTxmijeyY1517L5ai8ISRYt0CQ2bWtSf5du4pjfZcYnnhUgxwtl/5EeT4uYtPjn3f/O192+il3bXU4V8PAqNNJDU5ncsJTcBAmA5jgmq/AEBBqKztUo/p7AAKgXDUYd9QUdaJcA4OwhU9Tx2Z0hr0LIByIFxmPxhMHM6YJkckDSIgRLFv7DwjklLFf/pb+TfoG/R/gaq6UlXZJbHKrr1VdpGvqquJ1V22rOz66C+wOzeLd8XkIgAAAABJRU5ErkJggg==";

  var topBarHtml = function topBarHtml(namespace) {
    return "<div class='topbar-html-content' id='".concat(namespace, "-topbar-html-content'>\n        <div id='").concat(namespace, "-reset' class='topbar-html-content-item'>\n          <span>\u91CD\u7F6E</span>\n          <img src='").concat(img$n, "' source-src='").concat(img$n, "'  hover-src='").concat(img$d, "'></img>\n        </div>\n        <div id='").concat(namespace, "-audio' class='topbar-html-content-item topbar-html-margin0'>\n          <span>\u58F0\u97F3\u5F00\u5173</span>\n          <img src='").concat(img$m, "' name='audio' source-src='").concat(img$m, "'  hover-src='").concat(img$c, "'    selected-src='").concat(img$3, "'   selected-hover-src='").concat(img$1, "'></img>\n        </div>\n        <div id='").concat(namespace, "-audio-speed' class='topbar-html-content-item topbar-html-mright'>\n          <span>\u8BED\u901F</span>\n          <img src='").concat(img$l, "' name='speed' source-src='").concat(img$l, "'  hover-src='").concat(img$b, "'  selected-src='").concat(img$2, "'   selected-hover-src='").concat(img, "'></img>\n        </div>\n        <div id='").concat(namespace, "-zoom-out' class='topbar-html-content-item'>\n          <span>\u653E\u5927</span>\n          <img src='").concat(img$k, "' source-src='").concat(img$k, "'  hover-src='").concat(img$a, "'></img>\n        </div>\n        <div id='").concat(namespace, "-zoom-min' class='topbar-html-content-item topbar-html-mright'>\n          <span>\u7F29\u5C0F</span>\n          <img src='").concat(img$j, "' source-src='").concat(img$j, "'  hover-src='").concat(img$9, "'></img>\n        </div>\n        <div id='").concat(namespace, "-cursor-auto' class='topbar-html-content-item topbar-html-margin0'>\n          <span>\u9F20\u6807\u6837\u5F0F</span>\n          <img src='").concat(img$i, "' source-src='").concat(img$i, "'  hover-src='").concat(img$8, "'></img>\n        </div>\n        <div id='").concat(namespace, "-pointer-follow' class='topbar-html-content-item'>\n          <span>\u5341\u5B57\u7EBF</span>\n          <img src='").concat(img$h, "' source-src='").concat(img$h, "'  hover-src='").concat(img$7, "'></img>\n        </div>\n        <div id='").concat(namespace, "-bigtext' class='topbar-html-content-item topbar-html-mright'>\n          <span>\u5927\u5B57\u5E55</span>\n          <img src='").concat(img$g, "' source-src='").concat(img$g, "'  hover-src='").concat(img$6, "'></img>\n        </div>\n        <div id='").concat(namespace, "-pointeread' class='topbar-html-content-item topbar-html-mright'>\n          <span>\u6307\u8BFB</span>\n          <img src='").concat(img$f, "' source-src='").concat(img$f, "'  hover-src='").concat(img$5, "'></img>\n        </div>\n        <div id='").concat(namespace, "-close' class='topbar-html-content-item'>\n          <span>\u9000\u51FA\u670D\u52A1</span>\n          <img src='").concat(img$e, "' source-src='").concat(img$e, "'  hover-src='").concat(img$4, "'></img>\n        </div>\n      </div>");
  };

  var TopBar = {
    init: function init(core) {
      var namespace = core.config.namespace;
      this.namespace = namespace;
      core.creatStyle('topbar-style', styles$4);
      core.creatHtml('topbar-html', topBarHtml);
    },
    setEvents: function setEvents(core) {
      var _this = this;

      var namespace = core.config.namespace;
      var BtnClose = document.getElementById("".concat(namespace, "-close"));
      var BtnReset = document.getElementById("".concat(namespace, "-reset"));
      var HoverItem = document.getElementById("".concat(namespace, "-topbar-html-content"));

      BtnClose.onclick = function () {
        core.close();
      };

      BtnReset.onclick = function () {
        core.resetAction();
      };

      if (isFirefox()) {
        document.getElementById("".concat(namespace, "-zoom-out")).style.display = 'none';
        document.getElementById("".concat(namespace, "-zoom-min")).style.display = 'none';
      }

      [].forEach.call(HoverItem.children, function (el) {
        addEvent(el, 'mouseover', _this.mouseOver);
        addEvent(el, 'mouseout', _this.mouseOut);
      });
    },
    mouseOver: function mouseOver(event) {
      var event = window.event || event;
      var target = event.target || event.srcElement;

      if (target.tagName !== 'IMG') {
        return;
      }

      var __name = target.getAttribute('name');

      var __hover = target.getAttribute('hover-src');

      if (__name == 'audio') {
        if (cookie.get('audio', TopBar.namespace)) {
          target.src = __hover;
        } else {
          target.src = target.getAttribute('selected-hover-src');
        }
      } else if (__name == 'speed') {
        if (cookie.get('speed', TopBar.namespace) == 'fast') {
          target.src = target.getAttribute('selected-hover-src');
        } else {
          target.src = __hover;
        }
      } else {
        target.src = __hover;
      }
    },
    mouseOut: function mouseOut(event) {
      var event = window.event || event;
      var target = event.target || event.srcElement;

      if (target.tagName !== 'IMG') {
        return;
      }

      var __name = target.getAttribute('name');

      var __source = target.getAttribute('source-src');

      if (__name == 'audio') {
        if (cookie.get('audio', TopBar.namespace)) {
          target.src = __source;
        } else {
          target.src = target.getAttribute('selected-src');
        }
      } else if (__name == 'speed') {
        if (cookie.get('speed', TopBar.namespace) == 'fast') {
          target.src = target.getAttribute('selected-src');
        } else {
          target.src = __source;
        }
      } else {
        target.src = __source;
      }
    }
  };

  var aPossiblePrototype = function (it) {
    if (!isObject(it) && it !== null) {
      throw TypeError("Can't set " + String(it) + ' as a prototype');
    } return it;
  };

  /* eslint-disable no-proto -- safe */



  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  // eslint-disable-next-line es/no-object-setprototypeof -- safe
  var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
      setter.call(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) { /* empty */ }
    return function setPrototypeOf(O, proto) {
      anObject(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter.call(O, proto);
      else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  // makes subclassing work correct for wrapped built-ins
  var inheritIfRequired = function ($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if (
      // it can work only with native `setPrototypeOf`
      objectSetPrototypeOf &&
      // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
      typeof (NewTarget = dummy.constructor) == 'function' &&
      NewTarget !== Wrapper &&
      isObject(NewTargetPrototype = NewTarget.prototype) &&
      NewTargetPrototype !== Wrapper.prototype
    ) objectSetPrototypeOf($this, NewTargetPrototype);
    return $this;
  };

  var SPECIES = wellKnownSymbol('species');

  var setSpecies = function (CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
    var defineProperty = objectDefineProperty.f;

    if (descriptors && Constructor && !Constructor[SPECIES]) {
      defineProperty(Constructor, SPECIES, {
        configurable: true,
        get: function () { return this; }
      });
    }
  };

  var defineProperty = objectDefineProperty.f;
  var getOwnPropertyNames = objectGetOwnPropertyNames.f;





  var enforceInternalState = internalState.enforce;



  var MATCH = wellKnownSymbol('match');
  var NativeRegExp = global_1.RegExp;
  var RegExpPrototype$1 = NativeRegExp.prototype;
  var re1 = /a/g;
  var re2 = /a/g;

  // "new" should create a new object, old webkit bug
  var CORRECT_NEW = new NativeRegExp(re1) !== re1;

  var UNSUPPORTED_Y = regexpStickyHelpers.UNSUPPORTED_Y;

  var FORCED$1 = descriptors && isForced_1('RegExp', (!CORRECT_NEW || UNSUPPORTED_Y || fails(function () {
    re2[MATCH] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
  })));

  // `RegExp` constructor
  // https://tc39.es/ecma262/#sec-regexp-constructor
  if (FORCED$1) {
    var RegExpWrapper = function RegExp(pattern, flags) {
      var thisIsRegExp = this instanceof RegExpWrapper;
      var patternIsRegExp = isRegexp(pattern);
      var flagsAreUndefined = flags === undefined;
      var sticky;

      if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {
        return pattern;
      }

      if (CORRECT_NEW) {
        if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
      } else if (pattern instanceof RegExpWrapper) {
        if (flagsAreUndefined) flags = regexpFlags.call(pattern);
        pattern = pattern.source;
      }

      if (UNSUPPORTED_Y) {
        sticky = !!flags && flags.indexOf('y') > -1;
        if (sticky) flags = flags.replace(/y/g, '');
      }

      var result = inheritIfRequired(
        CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags),
        thisIsRegExp ? this : RegExpPrototype$1,
        RegExpWrapper
      );

      if (UNSUPPORTED_Y && sticky) {
        var state = enforceInternalState(result);
        state.sticky = true;
      }

      return result;
    };
    var proxy = function (key) {
      key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
        configurable: true,
        get: function () { return NativeRegExp[key]; },
        set: function (it) { NativeRegExp[key] = it; }
      });
    };
    var keys = getOwnPropertyNames(NativeRegExp);
    var index = 0;
    while (keys.length > index) proxy(keys[index++]);
    RegExpPrototype$1.constructor = RegExpWrapper;
    RegExpWrapper.prototype = RegExpPrototype$1;
    redefine(global_1, 'RegExp', RegExpWrapper);
  }

  // https://tc39.es/ecma262/#sec-get-regexp-@@species
  setSpecies('RegExp');

  var TO_STRING = 'toString';
  var RegExpPrototype = RegExp.prototype;
  var nativeToString = RegExpPrototype[TO_STRING];

  var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
  // FF44- RegExp#toString has a wrong name
  var INCORRECT_NAME = nativeToString.name != TO_STRING;

  // `RegExp.prototype.toString` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.tostring
  if (NOT_GENERIC || INCORRECT_NAME) {
    redefine(RegExp.prototype, TO_STRING, function toString() {
      var R = anObject(this);
      var p = String(R.source);
      var rf = R.flags;
      var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? regexpFlags.call(R) : rf);
      return '/' + p + '/' + f;
    }, { unsafe: true });
  }

  var audioTabText = {
    pointeread: '已开启指读模式',
    bigtextOpen: '大字幕已开启',
    bigtextClose: '大字幕已关闭',
    pointerFollowOpen: '十字线已开启',
    pointerFollowClose: '十字线已关闭',
    cursorAutoOpen: '大鼠标已开启',
    cursorAutoClose: '大鼠标已关闭',
    zoomOut: '页面已放大',
    zoomOutEnd: '页面已放到最大',
    zoomMin: '页面已缩小',
    zoomMinEnd: '页面已缩至最小',
    speedQuick: '语速已加快',
    speedMiddle: '语速已正常',
    audioOpen: '声音已开启',
    audioClose: '声音关闭',
    reset: '已重置'
  };
  var symbolsReg = new RegExp("[]");

  var styles$3 = ".bigtext-html {\n  z-index: 99999999999;\n  height: 150px;\n  text-align: center;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  border-top: 1px solid #505050;\n}\n.bigtext-html-content {\n  height: 100%;\n  background-color: #FFFFFF;\n  font-size: 53px;\n  color: #333 !important;\n  text-align: center;\n  font-weight: bold;\n}";

  var BigTextHtml$1 = function BigTextHtml(namespace) {
    return "<audio autoplay id='".concat(namespace, "-audio-media'>\n               <source src='' id='").concat(namespace, "-audio-source'>\n               <embed height=\"0\" width=\"0\"  src='' id='").concat(namespace, "-audio-embed'>\n        </audio>\n        ");
  };

  var Audio = {
    init: function init(core) {
      var _core$config = core.config,
          namespace = _core$config.namespace,
          url = _core$config.url;
      this.body = document.body;
      this.namespace = namespace;
      this.AudioApi = url;
      core.creatStyle('audio-style', styles$3);
      core.creatHtml('audio-html', BigTextHtml$1);
      this.isAudio = cookie.get('audio', namespace);
    },
    setEvents: function setEvents(core) {
      var namespace = core.config.namespace;
      this.registeDom(namespace);
      this.toggleAudio();

      if (this.isAudio) {
        this.addEventMove();
        addEvent(document, 'click', this.forceSafariPlayAudio); // 苹果浏览器需要用户跟浏览器有个交互才可以播放语音
      } else {
        this.audioTabImg.src = this.audioTabImg.getAttribute('selected-src');
      }

      if (this.speed == 'fast') {
        this.speedTabImg.src = this.speedTabImg.getAttribute('selected-src');
      } else {
        this.speedTabImg.src = this.speedTabImg.getAttribute('source-src');
      }
    },
    registeDom: function registeDom(namespace) {
      this.audio = document.getElementById("".concat(namespace, "-audio-media")) || '';
      this.audioTab = document.getElementById("".concat(namespace, "-audio")) || '';
      this.audioTabImg = this.audioTab.getElementsByTagName('img')[0];
      this.speed = cookie.get('speed', namespace);
      this.speedTab = document.getElementById("".concat(namespace, "-audio-speed")) || '';
      this.speedTabImg = this.speedTab.getElementsByTagName('img')[0];
      this.pointeReadTab = document.getElementById("".concat(namespace, "-pointeread")) || '';
    },
    toggleAudio: function toggleAudio() {
      var _this = this;

      var namespace = Audio.namespace;

      this.audioTab.onclick = function () {
        if (_this.isAudio) {
          _this.closeAudio();
        } else {
          _this.showAudio();

          Audio.playAudio(audioTabText.audioOpen);
        }
      };

      this.speedTab.onclick = function () {
        if (_this.speed == 'middle') {
          _this.speed = 'fast';
          _this.speedTabImg.src = _this.speedTabImg.getAttribute('selected-src');
          Audio.playAudio(audioTabText.speedQuick);
        } else {
          _this.speed = 'middle';
          _this.speedTabImg.src = _this.speedTabImg.getAttribute('source-src');
          Audio.playAudio(audioTabText.speedMiddle);
        }

        cookie.set('speed', _this.speed, namespace);
      };

      this.pointeReadTab.onclick = function () {
        _this.showAudio();

        Audio.playAudio(audioTabText.pointeread);
      };
    },
    showAudio: function showAudio() {
      var namespace = Audio.namespace;
      this.isAudio = true;
      this.addEventMove();
      cookie.set('audio', true, namespace);
      this.audioTabImg.src = this.audioTabImg.getAttribute('source-src');
    },
    closeAudio: function closeAudio() {
      var namespace = Audio.namespace;
      this.isAudio = false;
      this.audio.pause();
      this.removeEventMove();
      cookie.set('audio', false, namespace);
      this.audioTabImg.src = this.audioTabImg.getAttribute('selected-src');
    },
    addEventMove: function addEventMove() {
      addEvent(this.body, 'mouseover', this.mouseOver);
    },
    removeEventMove: function removeEventMove() {
      removeEvent(this.body, 'mouseover', this.mouseOver);
    },
    forceSafariPlayAudio: function forceSafariPlayAudio() {
      var audio = Audio.audio;
      audio.load();
      audio.play();
    },
    mouseOver: function mouseOver(event) {
      var event = window.event || event;
      var target = event.target || event.srcElement;

      var __text = parseTagText(target).replace(symbolsReg, '');

      var __parentNodeId = target.parentNode.id;

      var __isAssist = __parentNodeId.indexOf(Audio.namespace) > -1;

      if (__text == '' || trim(__text) == '文本' || __isAssist) {
        return;
      }

      Audio.playAudio(__text);
    },
    playAudio: function playAudio(text) {
      var namespace = Audio.namespace,
          AudioApi = Audio.AudioApi,
          isAudio = Audio.isAudio,
          audio = Audio.audio,
          speed = Audio.speed,
          forceSafariPlayAudio = Audio.forceSafariPlayAudio;

      if (!isAudio) {
        return;
      }

      var __speed = speed == 'middle' ? 5 : 7;

      var AudioParam = "cuid=baike&lan=ZH&ctp=1&pdt=301&vol=9&rate=32&per=1&spd=".concat(__speed, "&tex=").concat(encodeURI(text));
      var AudioUrl = "".concat(AudioApi, "?").concat(AudioParam);
      audio.src = AudioUrl;
      document.getElementById("".concat(namespace, "-audio-source")).src = AudioUrl;
      document.getElementById("".concat(namespace, "-audio-embed")).src = AudioUrl;
      var playPromise = audio.play();

      if (playPromise) {
        playPromise.then(function (_) {
          // audio.pause();
          removeEvent(document, 'click', forceSafariPlayAudio);
        }).catch(function (error) {
          console.log(error);
        });
      }
    },
    reset: function reset() {
      var namespace = Audio.namespace;
      this.closeAudio();
      this.speedTabImg.src = this.speedTabImg.getAttribute('source-src');
      this.speed = 'middle';
      cookie.set('speed', 'middle', namespace);
    }
  };

  // `thisNumberValue` abstract operation
  // https://tc39.es/ecma262/#sec-thisnumbervalue
  var thisNumberValue = function (value) {
    if (typeof value != 'number' && classofRaw(value) != 'Number') {
      throw TypeError('Incorrect invocation');
    }
    return +value;
  };

  // `String.prototype.repeat` method implementation
  // https://tc39.es/ecma262/#sec-string.prototype.repeat
  var stringRepeat = function repeat(count) {
    var str = String(requireObjectCoercible(this));
    var result = '';
    var n = toInteger(count);
    if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
    for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
    return result;
  };

  var nativeToFixed = 1.0.toFixed;
  var floor = Math.floor;

  var pow = function (x, n, acc) {
    return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
  };

  var log = function (x) {
    var n = 0;
    var x2 = x;
    while (x2 >= 4096) {
      n += 12;
      x2 /= 4096;
    }
    while (x2 >= 2) {
      n += 1;
      x2 /= 2;
    } return n;
  };

  var multiply = function (data, n, c) {
    var index = -1;
    var c2 = c;
    while (++index < 6) {
      c2 += n * data[index];
      data[index] = c2 % 1e7;
      c2 = floor(c2 / 1e7);
    }
  };

  var divide = function (data, n) {
    var index = 6;
    var c = 0;
    while (--index >= 0) {
      c += data[index];
      data[index] = floor(c / n);
      c = (c % n) * 1e7;
    }
  };

  var dataToString = function (data) {
    var index = 6;
    var s = '';
    while (--index >= 0) {
      if (s !== '' || index === 0 || data[index] !== 0) {
        var t = String(data[index]);
        s = s === '' ? t : s + stringRepeat.call('0', 7 - t.length) + t;
      }
    } return s;
  };

  var FORCED = nativeToFixed && (
    0.00008.toFixed(3) !== '0.000' ||
    0.9.toFixed(0) !== '1' ||
    1.255.toFixed(2) !== '1.25' ||
    1000000000000000128.0.toFixed(0) !== '1000000000000000128'
  ) || !fails(function () {
    // V8 ~ Android 4.3-
    nativeToFixed.call({});
  });

  // `Number.prototype.toFixed` method
  // https://tc39.es/ecma262/#sec-number.prototype.tofixed
  _export({ target: 'Number', proto: true, forced: FORCED }, {
    toFixed: function toFixed(fractionDigits) {
      var number = thisNumberValue(this);
      var fractDigits = toInteger(fractionDigits);
      var data = [0, 0, 0, 0, 0, 0];
      var sign = '';
      var result = '0';
      var e, z, j, k;

      if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
      // eslint-disable-next-line no-self-compare -- NaN check
      if (number != number) return 'NaN';
      if (number <= -1e21 || number >= 1e21) return String(number);
      if (number < 0) {
        sign = '-';
        number = -number;
      }
      if (number > 1e-21) {
        e = log(number * pow(2, 69, 1)) - 69;
        z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
        z *= 0x10000000000000;
        e = 52 - e;
        if (e > 0) {
          multiply(data, 0, z);
          j = fractDigits;
          while (j >= 7) {
            multiply(data, 1e7, 0);
            j -= 7;
          }
          multiply(data, pow(10, j, 1), 0);
          j = e - 1;
          while (j >= 23) {
            divide(data, 1 << 23);
            j -= 23;
          }
          divide(data, 1 << j);
          multiply(data, 1, 1);
          divide(data, 2);
          result = dataToString(data);
        } else {
          multiply(data, 0, z);
          multiply(data, 1 << -e, 0);
          result = dataToString(data) + stringRepeat.call('0', fractDigits);
        }
      }
      if (fractDigits > 0) {
        k = result.length;
        result = sign + (k <= fractDigits
          ? '0.' + stringRepeat.call('0', fractDigits - k) + result
          : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
      } else {
        result = sign + result;
      } return result;
    }
  });

  var ZoomPage = {
    init: function init(core) {
      var namespace = core.config.namespace;
      this.size = cookie.get('zomm', namespace) || 1.0;
      this.ignore = ['LINK', 'SCRIPT'];
      this.namespace = namespace;
      this.set();
    },
    setEvents: function setEvents(core) {
      var _this = this;

      var namespace = core.config.namespace;

      document.getElementById("".concat(namespace, "-zoom-out")).onclick = function () {
        _this.zoomOut(core);
      };

      document.getElementById("".concat(namespace, "-zoom-min")).onclick = function () {
        _this.zoomMin(core);
      };

      addEvent(window, 'DOMContentLoaded', function () {
        _this.updateZoomState(core);
      });
    },
    updateZoomState: function updateZoomState(core) {
      var message = core.message;
      message.publish('zoomState', this.size);
    },
    zoomOut: function zoomOut(core) {
      if (this.size >= 1.3) {
        console.log('已最大');
        Audio.playAudio(audioTabText.zoomOutEnd);
        this.updateZoomState(core);
        return;
      }

      this.size = parseFloat((this.size + 0.1).toFixed(10));
      this.updateZoomState(core);
      this.set();
      Audio.playAudio(audioTabText.zoomOut);
    },
    zoomMin: function zoomMin(core) {
      if (this.size <= 1.0) {
        console.log('已最小');
        Audio.playAudio(audioTabText.zoomMinEnd);
        this.updateZoomState(core);
        return;
      }

      this.size = parseFloat((this.size - 0.1).toFixed(10));
      this.updateZoomState(core);
      this.set();
      Audio.playAudio(audioTabText.zoomMin);
    },
    set: function set() {
      var _this2 = this;

      [].forEach.call(document.body.children, function (el) {
        var __el = el.tagName.toUpperCase();

        if (_this2.ignore.indexOf(__el) > -1 || el.id == _this2.namespace) {
          return;
        }

        el.style.zoom = _this2.size; //  el.style.transform = `scale(${this.size})`
        //el.style.transformOrigin = '0px 0px'
      });
      cookie.set('zomm', this.size, this.namespace);
    },
    reset: function reset() {
      this.size = 1.0;
      this.set();
    }
  };

  var styles$2 = ".pointer-follow-html-x, .pointer-follow-html-y {\n  z-index: 99999999999;\n  transform: none;\n  transform-origin: 0px 0px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: #ff0000 !important;\n  width: 100%;\n  height: 4px;\n}\n.pointer-follow-html-y {\n  height: 100%;\n  width: 4px;\n}";

  var PointerFllowHtml = function PointerFllowHtml() {
    return "<div class='pointer-follow-html'>\n        <div  class=\"pointer-follow-html-x\" id=\"pointer-follow-html-x\"></div>\n        <div class=\"pointer-follow-html-y\" id=\"pointer-follow-html-y\"></div>\n      </div>";
  };

  var PointerFllow = {
    init: function init(core) {
      core.config.namespace;
      this.body = document.body;
      core.creatStyle('pointer-follow-style', styles$2);
      core.creatHtml('pointer-follow-html', PointerFllowHtml);
    },
    setEvents: function setEvents(core) {
      var namespace = core.config.namespace;

      if (cookie.get('pointer', namespace)) {
        this.show(core);
      }

      this.togglePointer(core, namespace);
    },
    addEventMove: function addEventMove() {
      addEvent(this.body, 'mousemove', this.mouseMove);
    },
    removeEventMove: function removeEventMove() {
      removeEvent(this.body, 'mousemove', this.mouseMove);
    },
    togglePointer: function togglePointer(core, namespace) {
      var _this = this;

      var tabBarBtn = document.getElementById("".concat(namespace, "-pointer-follow"));
      var activeBtn = document.getElementById("".concat(namespace, "-pointer-follow-html"));

      tabBarBtn.onclick = function () {
        if (activeBtn.style.display == 'block') {
          _this.reset(core);

          Audio.playAudio(audioTabText.pointerFollowClose);
        } else {
          _this.show(core);

          Audio.playAudio(audioTabText.pointerFollowOpen);
        }
      };
    },
    mouseMove: function mouseMove(event) {
      var event = window.event || event;
      var pointerX = document.getElementById("pointer-follow-html-x"),
          pointerY = document.getElementById("pointer-follow-html-y");
      pointerX.style.top = event.clientY - 10 + "px";
      pointerY.style.left = event.clientX - 10 + "px";
    },
    show: function show(core) {
      var namespace = core.config.namespace;
      var activeBtn = document.getElementById("".concat(namespace, "-pointer-follow-html"));
      activeBtn.style.display = 'block';
      this.addEventMove();
      cookie.set('pointer', true, namespace);
    },
    reset: function reset(core) {
      var namespace = core.config.namespace;
      var activeBtn = document.getElementById("".concat(namespace, "-pointer-follow-html"));
      activeBtn.style.display = 'none';
      this.removeEventMove();
      cookie.set('pointer', false, namespace);
    }
  };

  var styles$1 = "* {\n  cursor: url(\"./allaw.cur\"), auto !important;\n}\n\na {\n  cursor: url(\"./linkaw.cur\"), auto !important;\n}";

  var CursorAuto = {
    init: function init(core) {
      core.config.namespace;
    },
    setEvents: function setEvents(core) {
      var namespace = core.config.namespace;

      if (cookie.get('cursor', namespace)) {
        core.creatStyle('cursor-auto-style', styles$1, true);
      }

      var tabBarBtn = document.getElementById("".concat(namespace, "-cursor-auto"));

      tabBarBtn.onclick = function () {
        var activeBtn = document.getElementById("".concat(namespace, "-cursor-auto-style"));

        if (activeBtn) {
          removeNode(activeBtn);
          cookie.set('cursor', false, namespace);
          Audio.playAudio(audioTabText.cursorAutoClose);
        } else {
          cookie.set('cursor', true, namespace);
          core.creatStyle('cursor-auto-style', styles$1, true);
          Audio.playAudio(audioTabText.cursorAutoOpen);
        }
      };
    },
    reset: function reset(core) {
      var namespace = core.config.namespace;
      var activeBtn = document.getElementById("".concat(namespace, "-cursor-auto-style"));
      activeBtn && removeNode(activeBtn);
    }
  };

  var styles = ".bigtext-html {\n  z-index: 99999999999;\n  height: 150px;\n  text-align: center;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  border-top: 1px solid #797F8D;\n  background-color: #FFFFFF;\n}\n.bigtext-html-content {\n  height: 100%;\n  background-color: #FFFFFF;\n  font-size: 53px;\n  color: #333 !important;\n  text-align: center;\n  font-weight: bold;\n  width: 93%;\n  margin: 0 auto;\n}\n.bigtext-html-btn {\n  width: 20px;\n  height: 20px;\n  background-color: red;\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  border-radius: 10px;\n  color: #FFFFFF;\n  cursor: pointer;\n}\n.bigtext-html-bone {\n  width: 100%;\n  height: 151px;\n}";

  var BigTextHtml = function BigTextHtml(namespace) {
    return "<div id='".concat(namespace, "-bigtext-html' class='bigtext-html'>\n           <div id='").concat(namespace, "-bigtext-content' class='bigtext-html-content'></div>\n           <div class='bigtext-html-btn' id='").concat(namespace, "-bigtext-close'>\n              <i class='bigtext-html-close' role='button' title='\u5173\u95ED\u5927\u5B57\u5E55\u6A21\u5F0F'>X</i>\n           </div>\n        </div>");
  };

  var BigTextBone = function BigTextBone() {
    return "<div class='bigtext-html-bone'></div>";
  };

  var BigText = {
    init: function init(core) {
      var namespace = core.config.namespace;
      this.body = document.body;
      this.namespace = namespace;
      core.creatStyle('bigtext-style', styles);
      core.creatHtml('bigtext-html', BigTextHtml);
      core.creatHtml('bigtext-bone', BigTextBone);
    },
    setEvents: function setEvents(core) {
      var _this = this;

      var namespace = core.config.namespace;
      addEvent(window, 'DOMContentLoaded', function () {
        if (cookie.get('bigtext', namespace)) {
          _this.show(core);
        }
      });
      this.toggleBigText(core, namespace);
    },
    addEventMove: function addEventMove() {
      addEvent(this.body, 'mouseover', this.mouseOver);
    },
    removeEventMove: function removeEventMove() {
      removeEvent(this.body, 'mouseover', this.mouseOver);
    },
    toggleBigText: function toggleBigText(core, namespace) {
      var _this2 = this;

      var tabBarBtn = document.getElementById("".concat(namespace, "-bigtext"));
      var tabBarBtnClose = document.getElementById("".concat(namespace, "-bigtext-close"));

      tabBarBtn.onclick = function () {
        var activeBtn = document.getElementById("".concat(namespace, "-bigtext-html"));

        if (activeBtn.style.display == 'block') {
          _this2.reset(core);

          Audio.playAudio(audioTabText.bigtextClose);
        } else {
          _this2.show(core);

          Audio.playAudio(audioTabText.bigtextOpen);
        }
      };

      tabBarBtnClose.onclick = function () {
        _this2.reset(core);

        Audio.playAudio(audioTabText.bigtextClose);
      };
    },
    mouseOver: function mouseOver(event) {
      var event = window.event || event;
      var target = event.target || event.srcElement;
      var namespace = BigText.namespace;
      var __parentNodeId = target.parentNode.id;

      var __isAssist = __parentNodeId.indexOf(namespace) > -1;

      var activeBtn = document.getElementById("".concat(namespace, "-bigtext-content"));
      activeBtn.innerText = parseTagText(target).replace(symbolsReg, '');

      if (__isAssist || activeBtn.innerText == '文本') {
        activeBtn.innerText = '';
        return;
      }
    },
    show: function show(core) {
      var namespace = core.config.namespace;
      var activeBtn = document.getElementById("".concat(namespace, "-bigtext-html"));
      var tabBar = document.getElementById("".concat(namespace, "-bigtext-bone"));
      activeBtn.style.display = 'block';
      tabBar.style.display = 'block';
      this.addEventMove();
      cookie.set('bigtext', true, namespace);
      core.message.publish('bigTextState', true);
    },
    reset: function reset(core) {
      var namespace = core.config.namespace;
      var activeBtn = document.getElementById("".concat(namespace, "-bigtext-html"));
      var tabBar = document.getElementById("".concat(namespace, "-bigtext-bone"));
      activeBtn.style.display = 'none';
      tabBar.style.display = 'none';
      this.removeEventMove();
      cookie.set('bigtext', false, namespace);
      core.message.publish('bigTextState', false);
    }
  };

  var InitModules = [TopBar, Audio, ZoomPage, PointerFllow, CursorAuto, BigText];

  var Assist = /*#__PURE__*/function (_Base) {
    _inherits(Assist, _Base);

    var _super = _createSuper(Assist);

    function Assist() {
      var _this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Assist);

      _this = _super.call(this, opts); // 合并参数

      _this.mergeConfig(opts); // 初始化插件


      _this.init();

      _this.isShow();

      _this.resetAction = _this.reset;
      return _this;
    }

    _createClass(Assist, [{
      key: "init",
      value: function init() {
        var _this2 = this;

        // 初始化dom
        InitModules.map(function (item) {
          return _this2.use(item);
        });
        this.registeStyle();
        this.registeHtml(); // 初始化事件

        InitModules.map(function (item) {
          return _this2.useEvent(item);
        }); // 格式化大段文本

        this.formatLongText();
      }
    }, {
      key: "reset",
      value: function reset() {
        Audio.reset();
        ZoomPage.reset();
        CursorAuto.reset(this);
        PointerFllow.reset(this);
        BigText.reset(this);
      }
    }]);

    return Assist;
  }(Base);

  var AssistEntry = new Assist(config);

  return AssistEntry;

})));
