/**
* github: https://github.com/muzihuaner/assist
**/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.AssistEntry = factory());
})(this, (function () { 'use strict';

  function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function ownKeys$1(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : String(i);
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
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
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
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
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
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
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
    return it && it.Math === Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global_1 =
    // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
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
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
  });

  var functionBindNative = !fails(function () {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function () { /* empty */ }).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });

  var call$2 = Function.prototype.call;

  var functionCall = functionBindNative ? call$2.bind(call$2) : function () {
    return call$2.apply(call$2, arguments);
  };

  var $propertyIsEnumerable = {}.propertyIsEnumerable;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  var f$5 = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$2(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable;

  var objectPropertyIsEnumerable = {
  	f: f$5
  };

  var createPropertyDescriptor = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var FunctionPrototype$2 = Function.prototype;
  var call$1 = FunctionPrototype$2.call;
  var uncurryThisWithBind = functionBindNative && FunctionPrototype$2.bind.bind(call$1, call$1);

  var functionUncurryThis = functionBindNative ? uncurryThisWithBind : function (fn) {
    return function () {
      return call$1.apply(fn, arguments);
    };
  };

  var toString$1 = functionUncurryThis({}.toString);
  var stringSlice$6 = functionUncurryThis(''.slice);

  var classofRaw = function (it) {
    return stringSlice$6(toString$1(it), 8, -1);
  };

  var $Object$3 = Object;
  var split = functionUncurryThis(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object$3('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classofRaw(it) === 'String' ? split(it, '') : $Object$3(it);
  } : $Object$3;

  // we can't use just `it == null` since of `document.all` special case
  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
  var isNullOrUndefined = function (it) {
    return it === null || it === undefined;
  };

  var $TypeError$b = TypeError;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible = function (it) {
    if (isNullOrUndefined(it)) throw new $TypeError$b("Can't call method on " + it);
    return it;
  };

  // toObject with fallback for non-array-like ES3 strings



  var toIndexedObject = function (it) {
    return indexedObject(requireObjectCoercible(it));
  };

  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
  var documentAll = typeof document == 'object' && document.all;

  // `IsCallable` abstract operation
  // https://tc39.es/ecma262/#sec-iscallable
  // eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
  var isCallable = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
    return typeof argument == 'function' || argument === documentAll;
  } : function (argument) {
    return typeof argument == 'function';
  };

  var isObject = function (it) {
    return typeof it == 'object' ? it !== null : isCallable(it);
  };

  var aFunction = function (argument) {
    return isCallable(argument) ? argument : undefined;
  };

  var getBuiltIn = function (namespace, method) {
    return arguments.length < 2 ? aFunction(global_1[namespace]) : global_1[namespace] && global_1[namespace][method];
  };

  var objectIsPrototypeOf = functionUncurryThis({}.isPrototypeOf);

  var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

  var process = global_1.process;
  var Deno = global_1.Deno;
  var versions = process && process.versions || Deno && Deno.version;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.');
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
  }

  // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
  // so check `userAgent` even if `.v8` exists, but 0
  if (!version && engineUserAgent) {
    match = engineUserAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = engineUserAgent.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }

  var engineV8Version = version;

  /* eslint-disable es/no-symbol -- required for testing */




  var $String$5 = global_1.String;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails(function () {
    var symbol = Symbol('symbol detection');
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
    // of course, fail.
    return !$String$5(symbol) || !(Object(symbol) instanceof Symbol) ||
      // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && engineV8Version && engineV8Version < 41;
  });

  /* eslint-disable es/no-symbol -- required for testing */


  var useSymbolAsUid = symbolConstructorDetection
    && !Symbol.sham
    && typeof Symbol.iterator == 'symbol';

  var $Object$2 = Object;

  var isSymbol = useSymbolAsUid ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn('Symbol');
    return isCallable($Symbol) && objectIsPrototypeOf($Symbol.prototype, $Object$2(it));
  };

  var $String$4 = String;

  var tryToString = function (argument) {
    try {
      return $String$4(argument);
    } catch (error) {
      return 'Object';
    }
  };

  var $TypeError$a = TypeError;

  // `Assert: IsCallable(argument) is true`
  var aCallable = function (argument) {
    if (isCallable(argument)) return argument;
    throw new $TypeError$a(tryToString(argument) + ' is not a function');
  };

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  var getMethod = function (V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
  };

  var $TypeError$9 = TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive = function (input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = functionCall(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = functionCall(fn, input))) return val;
    if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = functionCall(fn, input))) return val;
    throw new $TypeError$9("Can't convert object to primitive value");
  };

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$2 = Object.defineProperty;

  var defineGlobalProperty = function (key, value) {
    try {
      defineProperty$2(global_1, key, { value: value, configurable: true, writable: true });
    } catch (error) {
      global_1[key] = value;
    } return value;
  };

  var sharedStore = createCommonjsModule(function (module) {




  var SHARED = '__core-js_shared__';
  var store = module.exports = global_1[SHARED] || defineGlobalProperty(SHARED, {});

  (store.versions || (store.versions = [])).push({
    version: '3.36.0',
    mode: 'global',
    copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE',
    source: 'https://github.com/zloirock/core-js'
  });
  });

  var shared = function (key, value) {
    return sharedStore[key] || (sharedStore[key] = value || {});
  };

  var $Object$1 = Object;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject = function (argument) {
    return $Object$1(requireObjectCoercible(argument));
  };

  var hasOwnProperty = functionUncurryThis({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es/no-object-hasown -- safe
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
  };

  var id = 0;
  var postfix = Math.random();
  var toString = functionUncurryThis(1.0.toString);

  var uid = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
  };

  var Symbol$1 = global_1.Symbol;
  var WellKnownSymbolsStore = shared('wks');
  var createWellKnownSymbol = useSymbolAsUid ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

  var wellKnownSymbol = function (name) {
    if (!hasOwnProperty_1(WellKnownSymbolsStore, name)) {
      WellKnownSymbolsStore[name] = symbolConstructorDetection && hasOwnProperty_1(Symbol$1, name)
        ? Symbol$1[name]
        : createWellKnownSymbol('Symbol.' + name);
    } return WellKnownSymbolsStore[name];
  };

  var $TypeError$8 = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  var toPrimitive = function (input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = functionCall(exoticToPrim, input, pref);
      if (!isObject(result) || isSymbol(result)) return result;
      throw new $TypeError$8("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
  };

  // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey
  var toPropertyKey = function (argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol(key) ? key : key + '';
  };

  var document$1 = global_1.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS$1 = isObject(document$1) && isObject(document$1.createElement);

  var documentCreateElement = function (it) {
    return EXISTS$1 ? document$1.createElement(it) : {};
  };

  // Thanks to IE8 for its funny defineProperty
  var ie8DomDefine = !descriptors && !fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(documentCreateElement('div'), 'a', {
      get: function () { return 7; }
    }).a !== 7;
  });

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  var f$4 = descriptors ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (ie8DomDefine) try {
      return $getOwnPropertyDescriptor$1(O, P);
    } catch (error) { /* empty */ }
    if (hasOwnProperty_1(O, P)) return createPropertyDescriptor(!functionCall(objectPropertyIsEnumerable.f, O, P), O[P]);
  };

  var objectGetOwnPropertyDescriptor = {
  	f: f$4
  };

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  var v8PrototypeDefineBug = descriptors && fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () { /* empty */ }, 'prototype', {
      value: 42,
      writable: false
    }).prototype !== 42;
  });

  var $String$3 = String;
  var $TypeError$7 = TypeError;

  // `Assert: Type(argument) is Object`
  var anObject = function (argument) {
    if (isObject(argument)) return argument;
    throw new $TypeError$7($String$3(argument) + ' is not an object');
  };

  var $TypeError$6 = TypeError;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty = Object.defineProperty;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = 'enumerable';
  var CONFIGURABLE$1 = 'configurable';
  var WRITABLE = 'writable';

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  var f$3 = descriptors ? v8PrototypeDefineBug ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
      var current = $getOwnPropertyDescriptor(O, P);
      if (current && current[WRITABLE]) {
        O[P] = Attributes.value;
        Attributes = {
          configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
          enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
          writable: false
        };
      }
    } return $defineProperty(O, P, Attributes);
  } : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (ie8DomDefine) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw new $TypeError$6('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var objectDefineProperty = {
  	f: f$3
  };

  var createNonEnumerableProperty = descriptors ? function (object, key, value) {
    return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var FunctionPrototype$1 = Function.prototype;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getDescriptor = descriptors && Object.getOwnPropertyDescriptor;

  var EXISTS = hasOwnProperty_1(FunctionPrototype$1, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
  var CONFIGURABLE = EXISTS && (!descriptors || (descriptors && getDescriptor(FunctionPrototype$1, 'name').configurable));

  var functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };

  var functionToString = functionUncurryThis(Function.toString);

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (!isCallable(sharedStore.inspectSource)) {
    sharedStore.inspectSource = function (it) {
      return functionToString(it);
    };
  }

  var inspectSource = sharedStore.inspectSource;

  var WeakMap$1 = global_1.WeakMap;

  var weakMapBasicDetection = isCallable(WeakMap$1) && /native code/.test(String(WeakMap$1));

  var keys$1 = shared('keys');

  var sharedKey = function (key) {
    return keys$1[key] || (keys$1[key] = uid(key));
  };

  var hiddenKeys$1 = {};

  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError$1 = global_1.TypeError;
  var WeakMap = global_1.WeakMap;
  var set, get, has;

  var enforce = function (it) {
    return has(it) ? get(it) : set(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject(it) || (state = get(it)).type !== TYPE) {
        throw new TypeError$1('Incompatible receiver, ' + TYPE + ' required');
      } return state;
    };
  };

  if (weakMapBasicDetection || sharedStore.state) {
    var store = sharedStore.state || (sharedStore.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */
    store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */
    set = function (it, metadata) {
      if (store.has(it)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      store.set(it, metadata);
      return metadata;
    };
    get = function (it) {
      return store.get(it) || {};
    };
    has = function (it) {
      return store.has(it);
    };
  } else {
    var STATE = sharedKey('state');
    hiddenKeys$1[STATE] = true;
    set = function (it, metadata) {
      if (hasOwnProperty_1(it, STATE)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty(it, STATE, metadata);
      return metadata;
    };
    get = function (it) {
      return hasOwnProperty_1(it, STATE) ? it[STATE] : {};
    };
    has = function (it) {
      return hasOwnProperty_1(it, STATE);
    };
  }

  var internalState = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
  };

  var makeBuiltIn_1 = createCommonjsModule(function (module) {





  var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;



  var enforceInternalState = internalState.enforce;
  var getInternalState = internalState.get;
  var $String = String;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty = Object.defineProperty;
  var stringSlice = functionUncurryThis(''.slice);
  var replace = functionUncurryThis(''.replace);
  var join = functionUncurryThis([].join);

  var CONFIGURABLE_LENGTH = descriptors && !fails(function () {
    return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
  });

  var TEMPLATE = String(String).split('String');

  var makeBuiltIn = module.exports = function (value, name, options) {
    if (stringSlice($String(name), 0, 7) === 'Symbol(') {
      name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
    }
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!hasOwnProperty_1(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      if (descriptors) defineProperty(value, 'name', { value: name, configurable: true });
      else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwnProperty_1(options, 'arity') && value.length !== options.arity) {
      defineProperty(value, 'length', { value: options.arity });
    }
    try {
      if (options && hasOwnProperty_1(options, 'constructor') && options.constructor) {
        if (descriptors) defineProperty(value, 'prototype', { writable: false });
      // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
      } else if (value.prototype) value.prototype = undefined;
    } catch (error) { /* empty */ }
    var state = enforceInternalState(value);
    if (!hasOwnProperty_1(state, 'source')) {
      state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
    } return value;
  };

  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  // eslint-disable-next-line no-extend-native -- required
  Function.prototype.toString = makeBuiltIn(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
  }, 'toString');
  });

  var defineBuiltIn = function (O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn_1(value, name, options);
    if (options.global) {
      if (simple) O[key] = value;
      else defineGlobalProperty(key, value);
    } else {
      try {
        if (!options.unsafe) delete O[key];
        else if (O[key]) simple = true;
      } catch (error) { /* empty */ }
      if (simple) O[key] = value;
      else objectDefineProperty.f(O, key, {
        value: value,
        enumerable: false,
        configurable: !options.nonConfigurable,
        writable: !options.nonWritable
      });
    } return O;
  };

  var ceil = Math.ceil;
  var floor$2 = Math.floor;

  // `Math.trunc` method
  // https://tc39.es/ecma262/#sec-math.trunc
  // eslint-disable-next-line es/no-math-trunc -- safe
  var mathTrunc = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor$2 : ceil)(n);
  };

  // `ToIntegerOrInfinity` abstract operation
  // https://tc39.es/ecma262/#sec-tointegerorinfinity
  var toIntegerOrInfinity = function (argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : mathTrunc(number);
  };

  var max$2 = Math.max;
  var min$3 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex = function (index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max$2(integer + length, 0) : min$3(integer, length);
  };

  var min$2 = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  var toLength = function (argument) {
    var len = toIntegerOrInfinity(argument);
    return len > 0 ? min$2(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  // `LengthOfArrayLike` abstract operation
  // https://tc39.es/ecma262/#sec-lengthofarraylike
  var lengthOfArrayLike = function (obj) {
    return toLength(obj.length);
  };

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$2 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject($this);
      var length = lengthOfArrayLike(O);
      if (length === 0) return !IS_INCLUDES && -1;
      var index = toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check
      if (IS_INCLUDES && el !== el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare -- NaN check
        if (value !== value) return true;
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

  var indexOf$1 = arrayIncludes.indexOf;


  var push$2 = functionUncurryThis([].push);

  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !hasOwnProperty_1(hiddenKeys$1, key) && hasOwnProperty_1(O, key) && push$2(result, key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (hasOwnProperty_1(O, key = names[i++])) {
      ~indexOf$1(result, key) || push$2(result, key);
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
  var f$2 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return objectKeysInternal(O, hiddenKeys);
  };

  var objectGetOwnPropertyNames = {
  	f: f$2
  };

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
  var f$1 = Object.getOwnPropertySymbols;

  var objectGetOwnPropertySymbols = {
  	f: f$1
  };

  var concat$1 = functionUncurryThis([].concat);

  // all object keys, includes non-enumerable and symbols
  var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = objectGetOwnPropertyNames.f(anObject(it));
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    return getOwnPropertySymbols ? concat$1(keys, getOwnPropertySymbols(it)) : keys;
  };

  var copyConstructorProperties = function (target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = objectDefineProperty.f;
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!hasOwnProperty_1(target, key) && !(exceptions && hasOwnProperty_1(exceptions, key))) {
        defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    }
  };

  var replacement = /#|\.prototype\./;

  var isForced = function (feature, detection) {
    var value = data[normalize(feature)];
    return value === POLYFILL ? true
      : value === NATIVE ? false
      : isCallable(detection) ? fails(detection)
      : !!detection;
  };

  var normalize = isForced.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced.data = {};
  var NATIVE = isForced.NATIVE = 'N';
  var POLYFILL = isForced.POLYFILL = 'P';

  var isForced_1 = isForced;

  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;






  /*
    options.target         - name of the target object
    options.global         - target is the global object
    options.stat           - export as static methods of target
    options.proto          - export as prototype methods of target
    options.real           - real prototype method for the `pure` version
    options.forced         - export even if the native feature is available
    options.bind           - bind methods to the target, required for the `pure` version
    options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe         - use the simple assignment of property instead of delete + defineProperty
    options.sham           - add a flag to not completely full polyfills
    options.enumerable     - export as enumerable property
    options.dontCallGetSet - prevent calling a getter on target
    options.name           - the .name of the function if it does not match the key
  */
  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = global_1;
    } else if (STATIC) {
      target = global_1[TARGET] || defineGlobalProperty(TARGET, {});
    } else {
      target = global_1[TARGET] && global_1[TARGET].prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor$1(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty == typeof targetProperty) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || (targetProperty && targetProperty.sham)) {
        createNonEnumerableProperty(sourceProperty, 'sham', true);
      }
      defineBuiltIn(target, key, sourceProperty, options);
    }
  };

  var functionUncurryThisClause = function (fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === 'Function') return functionUncurryThis(fn);
  };

  var bind = functionUncurryThisClause(functionUncurryThisClause.bind);

  // optional / simple context binding
  var functionBindContext = function (fn, that) {
    aCallable(fn);
    return that === undefined ? fn : functionBindNative ? bind(fn, that) : function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe
  var isArray = Array.isArray || function isArray(argument) {
    return classofRaw(argument) === 'Array';
  };

  var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
  var test = {};

  test[TO_STRING_TAG$1] = 'z';

  var toStringTagSupport = String(test) === '[object z]';

  var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  var $Object = Object;

  // ES3 wrong here
  var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (error) { /* empty */ }
  };

  // getting tag from ES6+ `Object.prototype.toString`
  var classof = toStringTagSupport ? classofRaw : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
      // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw(O)
      // ES3 arguments fallback
      : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
  };

  var noop = function () { /* empty */ };
  var construct = getBuiltIn('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec$1 = functionUncurryThis(constructorRegExp.exec);
  var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

  var isConstructorModern = function isConstructor(argument) {
    if (!isCallable(argument)) return false;
    try {
      construct(noop, [], argument);
      return true;
    } catch (error) {
      return false;
    }
  };

  var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable(argument)) return false;
    switch (classof(argument)) {
      case 'AsyncFunction':
      case 'GeneratorFunction':
      case 'AsyncGeneratorFunction': return false;
    }
    try {
      // we can't check .prototype since constructors produced by .bind haven't it
      // `Function#toString` throws on some built-it function in some legacy engines
      // (for example, `DOMQuad` and similar in FF41-)
      return INCORRECT_TO_STRING || !!exec$1(constructorRegExp, inspectSource(argument));
    } catch (error) {
      return true;
    }
  };

  isConstructorLegacy.sham = true;

  // `IsConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-isconstructor
  var isConstructor = !construct || fails(function () {
    var called;
    return isConstructorModern(isConstructorModern.call)
      || !isConstructorModern(Object)
      || !isConstructorModern(function () { called = true; })
      || called;
  }) ? isConstructorLegacy : isConstructorModern;

  var SPECIES$3 = wellKnownSymbol('species');
  var $Array = Array;

  // a part of `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesConstructor = function (originalArray) {
    var C;
    if (isArray(originalArray)) {
      C = originalArray.constructor;
      // cross-realm fallback
      if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
      else if (isObject(C)) {
        C = C[SPECIES$3];
        if (C === null) C = undefined;
      }
    } return C === undefined ? $Array : C;
  };

  // `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesCreate = function (originalArray, length) {
    return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
  };

  var push$1 = functionUncurryThis([].push);

  // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
  var createMethod$1 = function (TYPE) {
    var IS_MAP = TYPE === 1;
    var IS_FILTER = TYPE === 2;
    var IS_SOME = TYPE === 3;
    var IS_EVERY = TYPE === 4;
    var IS_FIND_INDEX = TYPE === 6;
    var IS_FILTER_REJECT = TYPE === 7;
    var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject($this);
      var self = indexedObject(O);
      var length = lengthOfArrayLike(self);
      var boundFunction = functionBindContext(callbackfn, that);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate;
      var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
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
            case 2: push$1(target, value);      // filter
          } else switch (TYPE) {
            case 4: return false;             // every
            case 7: push$1(target, value);      // filterReject
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
    // `Array.prototype.filterReject` method
    // https://github.com/tc39/proposal-array-filtering
    filterReject: createMethod$1(7)
  };

  var SPECIES$2 = wellKnownSymbol('species');

  var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return engineV8Version >= 51 || !fails(function () {
      var array = [];
      var constructor = array.constructor = {};
      constructor[SPECIES$2] = function () {
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

  var $TypeError$5 = TypeError;
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

  var doesNotExceedSafeInteger = function (it) {
    if (it > MAX_SAFE_INTEGER) throw $TypeError$5('Maximum allowed index exceeded');
    return it;
  };

  var createProperty = function (object, key, value) {
    if (descriptors) objectDefineProperty.f(object, key, createPropertyDescriptor(0, value));
    else object[key] = value;
  };

  var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });

  var isConcatSpreadable = function (O) {
    if (!isObject(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray(O);
  };

  var FORCED$2 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat');

  // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  _export({ target: 'Array', proto: true, arity: 1, forced: FORCED$2 }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject(this);
      var A = arraySpeciesCreate(O, 0);
      var n = 0;
      var i, k, length, len, E;
      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];
        if (isConcatSpreadable(E)) {
          len = lengthOfArrayLike(E);
          doesNotExceedSafeInteger(n + len);
          for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
        } else {
          doesNotExceedSafeInteger(n + 1);
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
  var f = descriptors && !v8PrototypeDefineBug ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var props = toIndexedObject(Properties);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) objectDefineProperty.f(O, key = keys[index++], props[key]);
    return O;
  };

  var objectDefineProperties = {
  	f: f
  };

  var html = getBuiltIn('document', 'documentElement');

  /* global ActiveXObject -- old IE, WSH */








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
      activeXDocument = new ActiveXObject('htmlfile');
    } catch (error) { /* ignore */ }
    NullProtoObject = typeof document != 'undefined'
      ? document.domain && activeXDocument
        ? NullProtoObjectViaActiveX(activeXDocument) // old IE
        : NullProtoObjectViaIFrame()
      : NullProtoObjectViaActiveX(activeXDocument); // WSH
    var length = enumBugKeys.length;
    while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
    return NullProtoObject();
  };

  hiddenKeys$1[IE_PROTO] = true;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  // eslint-disable-next-line es/no-object-create -- safe
  var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE] = anObject(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : objectDefineProperties.f(result, Properties);
  };

  var defineProperty$1 = objectDefineProperty.f;

  var UNSCOPABLES = wellKnownSymbol('unscopables');
  var ArrayPrototype = Array.prototype;

  // Array.prototype[@@unscopables]
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  if (ArrayPrototype[UNSCOPABLES] === undefined) {
    defineProperty$1(ArrayPrototype, UNSCOPABLES, {
      configurable: true,
      value: objectCreate(null)
    });
  }

  // add a key to Array.prototype[@@unscopables]
  var addToUnscopables = function (key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
  };

  var $includes = arrayIncludes.includes;



  // FF99+ bug
  var BROKEN_ON_SPARSE = fails(function () {
    // eslint-disable-next-line es/no-array-prototype-includes -- detection
    return !Array(1).includes();
  });

  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  _export({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
    includes: function includes(el /* , fromIndex = 0 */) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('includes');

  var arrayMethodIsStrict = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails(function () {
      // eslint-disable-next-line no-useless-call -- required for testing
      method.call(null, argument || function () { return 1; }, 1);
    });
  };

  var nativeJoin = functionUncurryThis([].join);

  var ES3_STRINGS = indexedObject !== Object;
  var FORCED$1 = ES3_STRINGS || !arrayMethodIsStrict('join', ',');

  // `Array.prototype.join` method
  // https://tc39.es/ecma262/#sec-array.prototype.join
  _export({ target: 'Array', proto: true, forced: FORCED$1 }, {
    join: function join(separator) {
      return nativeJoin(toIndexedObject(this), separator === undefined ? ',' : separator);
    }
  });

  // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  var objectToString = toStringTagSupport ? {}.toString : function toString() {
    return '[object ' + classof(this) + ']';
  };

  // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  if (!toStringTagSupport) {
    defineBuiltIn(Object.prototype, 'toString', objectToString, { unsafe: true });
  }

  var MATCH$2 = wellKnownSymbol('match');

  // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp
  var isRegexp = function (it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH$2]) !== undefined ? !!isRegExp : classofRaw(it) === 'RegExp');
  };

  var $TypeError$4 = TypeError;

  var notARegexp = function (it) {
    if (isRegexp(it)) {
      throw new $TypeError$4("The method doesn't accept regular expressions");
    } return it;
  };

  var $String$2 = String;

  var toString_1 = function (argument) {
    if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
    return $String$2(argument);
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

  var stringIndexOf$2 = functionUncurryThis(''.indexOf);

  // `String.prototype.includes` method
  // https://tc39.es/ecma262/#sec-string.prototype.includes
  _export({ target: 'String', proto: true, forced: !correctIsRegexpLogic('includes') }, {
    includes: function includes(searchString /* , position = 0 */) {
      return !!~stringIndexOf$2(
        toString_1(requireObjectCoercible(this)),
        toString_1(notARegexp(searchString)),
        arguments.length > 1 ? arguments[1] : undefined
      );
    }
  });

  var FAILS_ON_PRIMITIVES = fails(function () { objectKeys(1); });

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  _export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
    keys: function keys(it) {
      return objectKeys(toObject(it));
    }
  });

  // `RegExp.prototype.flags` getter implementation
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
  var regexpFlags = function () {
    var that = anObject(this);
    var result = '';
    if (that.hasIndices) result += 'd';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.unicodeSets) result += 'v';
    if (that.sticky) result += 'y';
    return result;
  };

  // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var $RegExp$2 = global_1.RegExp;

  var UNSUPPORTED_Y$2 = fails(function () {
    var re = $RegExp$2('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') !== null;
  });

  // UC Browser bug
  // https://github.com/zloirock/core-js/issues/1008
  var MISSED_STICKY$1 = UNSUPPORTED_Y$2 || fails(function () {
    return !$RegExp$2('a', 'y').sticky;
  });

  var BROKEN_CARET = UNSUPPORTED_Y$2 || fails(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = $RegExp$2('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') !== null;
  });

  var regexpStickyHelpers = {
    BROKEN_CARET: BROKEN_CARET,
    MISSED_STICKY: MISSED_STICKY$1,
    UNSUPPORTED_Y: UNSUPPORTED_Y$2
  };

  // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
  var $RegExp$1 = global_1.RegExp;

  var regexpUnsupportedDotAll = fails(function () {
    var re = $RegExp$1('.', 's');
    return !(re.dotAll && re.test('\n') && re.flags === 's');
  });

  // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
  var $RegExp = global_1.RegExp;

  var regexpUnsupportedNcg = fails(function () {
    var re = $RegExp('(?<a>b)', 'g');
    return re.exec('b').groups.a !== 'b' ||
      'b'.replace(re, '$<a>c') !== 'bc';
  });

  /* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
  /* eslint-disable regexp/no-useless-quantifier -- testing */







  var getInternalState = internalState.get;



  var nativeReplace = shared('native-string-replace', String.prototype.replace);
  var nativeExec = RegExp.prototype.exec;
  var patchedExec = nativeExec;
  var charAt$4 = functionUncurryThis(''.charAt);
  var indexOf = functionUncurryThis(''.indexOf);
  var replace$2 = functionUncurryThis(''.replace);
  var stringSlice$5 = functionUncurryThis(''.slice);

  var UPDATES_LAST_INDEX_WRONG = (function () {
    var re1 = /a/;
    var re2 = /b*/g;
    functionCall(nativeExec, re1, 'a');
    functionCall(nativeExec, re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  })();

  var UNSUPPORTED_Y$1 = regexpStickyHelpers.BROKEN_CARET;

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || regexpUnsupportedDotAll || regexpUnsupportedNcg;

  if (PATCH) {
    patchedExec = function exec(string) {
      var re = this;
      var state = getInternalState(re);
      var str = toString_1(string);
      var raw = state.raw;
      var result, reCopy, lastIndex, match, i, object, group;

      if (raw) {
        raw.lastIndex = re.lastIndex;
        result = functionCall(patchedExec, raw, str);
        re.lastIndex = raw.lastIndex;
        return result;
      }

      var groups = state.groups;
      var sticky = UNSUPPORTED_Y$1 && re.sticky;
      var flags = functionCall(regexpFlags, re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;

      if (sticky) {
        flags = replace$2(flags, 'y', '');
        if (indexOf(flags, 'g') === -1) {
          flags += 'g';
        }

        strCopy = stringSlice$5(str, re.lastIndex);
        // Support anchored sticky behavior.
        if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$4(str, re.lastIndex - 1) !== '\n')) {
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

      match = functionCall(nativeExec, sticky ? reCopy : re, strCopy);

      if (sticky) {
        if (match) {
          match.input = stringSlice$5(match.input, charsAdded);
          match[0] = stringSlice$5(match[0], charsAdded);
          match.index = re.lastIndex;
          re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
        functionCall(nativeReplace, match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      if (match && groups) {
        match.groups = object = objectCreate(null);
        for (i = 0; i < groups.length; i++) {
          group = groups[i];
          object[group[0]] = match[group[1]];
        }
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

  var FunctionPrototype = Function.prototype;
  var apply = FunctionPrototype.apply;
  var call = FunctionPrototype.call;

  // eslint-disable-next-line es/no-reflect -- safe
  var functionApply = typeof Reflect == 'object' && Reflect.apply || (functionBindNative ? call.bind(apply) : function () {
    return call.apply(apply, arguments);
  });

  // TODO: Remove from `core-js@4` since it's moved to entry points








  var SPECIES$1 = wellKnownSymbol('species');
  var RegExpPrototype$3 = RegExp.prototype;

  var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
    var SYMBOL = wellKnownSymbol(KEY);

    var DELEGATES_TO_SYMBOL = !fails(function () {
      // String methods call symbol-named RegExp methods
      var O = {};
      O[SYMBOL] = function () { return 7; };
      return ''[KEY](O) !== 7;
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
        re.constructor[SPECIES$1] = function () { return re; };
        re.flags = '';
        re[SYMBOL] = /./[SYMBOL];
      }

      re.exec = function () {
        execCalled = true;
        return null;
      };

      re[SYMBOL]('');
      return !execCalled;
    });

    if (
      !DELEGATES_TO_SYMBOL ||
      !DELEGATES_TO_EXEC ||
      FORCED
    ) {
      var nativeRegExpMethod = /./[SYMBOL];
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        var $exec = regexp.exec;
        if ($exec === regexpExec || $exec === RegExpPrototype$3.exec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: functionCall(nativeRegExpMethod, regexp, str, arg2) };
          }
          return { done: true, value: functionCall(nativeMethod, str, regexp, arg2) };
        }
        return { done: false };
      });

      defineBuiltIn(String.prototype, KEY, methods[0]);
      defineBuiltIn(RegExpPrototype$3, SYMBOL, methods[1]);
    }

    if (SHAM) createNonEnumerableProperty(RegExpPrototype$3[SYMBOL], 'sham', true);
  };

  var charAt$3 = functionUncurryThis(''.charAt);
  var charCodeAt = functionUncurryThis(''.charCodeAt);
  var stringSlice$4 = functionUncurryThis(''.slice);

  var createMethod = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = toString_1(requireObjectCoercible($this));
      var position = toIntegerOrInfinity(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = charCodeAt(S, position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size
        || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
          ? CONVERT_TO_STRING
            ? charAt$3(S, position)
            : first
          : CONVERT_TO_STRING
            ? stringSlice$4(S, position, position + 2)
            : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
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

  var charAt$2 = stringMultibyte.charAt;

  // `AdvanceStringIndex` abstract operation
  // https://tc39.es/ecma262/#sec-advancestringindex
  var advanceStringIndex = function (S, index, unicode) {
    return index + (unicode ? charAt$2(S, index).length : 1);
  };

  var floor$1 = Math.floor;
  var charAt$1 = functionUncurryThis(''.charAt);
  var replace$1 = functionUncurryThis(''.replace);
  var stringSlice$3 = functionUncurryThis(''.slice);
  // eslint-disable-next-line redos/no-vulnerable -- safe
  var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

  // `GetSubstitution` abstract operation
  // https://tc39.es/ecma262/#sec-getsubstitution
  var getSubstitution = function (matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return replace$1(replacement, symbols, function (match, ch) {
      var capture;
      switch (charAt$1(ch, 0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return stringSlice$3(str, 0, position);
        case "'": return stringSlice$3(str, tailPos);
        case '<':
          capture = namedCaptures[stringSlice$3(ch, 1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor$1(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? charAt$1(ch, 1) : captures[f - 1] + charAt$1(ch, 1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  };

  var $TypeError$3 = TypeError;

  // `RegExpExec` abstract operation
  // https://tc39.es/ecma262/#sec-regexpexec
  var regexpExecAbstract = function (R, S) {
    var exec = R.exec;
    if (isCallable(exec)) {
      var result = functionCall(exec, R, S);
      if (result !== null) anObject(result);
      return result;
    }
    if (classofRaw(R) === 'RegExp') return functionCall(regexpExec, R, S);
    throw new $TypeError$3('RegExp#exec called on incompatible receiver');
  };

  var REPLACE = wellKnownSymbol('replace');
  var max$1 = Math.max;
  var min$1 = Math.min;
  var concat = functionUncurryThis([].concat);
  var push = functionUncurryThis([].push);
  var stringIndexOf$1 = functionUncurryThis(''.indexOf);
  var stringSlice$2 = functionUncurryThis(''.slice);

  var maybeToString = function (it) {
    return it === undefined ? it : String(it);
  };

  // IE <= 11 replaces $0 with the whole match, as if it was $&
  // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
  var REPLACE_KEEPS_$0 = (function () {
    // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
    return 'a'.replace(/./, '$0') === '$0';
  })();

  // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
    if (/./[REPLACE]) {
      return /./[REPLACE]('a', '$0') === '';
    }
    return false;
  })();

  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
    var re = /./;
    re.exec = function () {
      var result = [];
      result.groups = { a: '7' };
      return result;
    };
    // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
    return ''.replace(re, '$<a>') !== '7';
  });

  // @@replace logic
  fixRegexpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

    return [
      // `String.prototype.replace` method
      // https://tc39.es/ecma262/#sec-string.prototype.replace
      function replace(searchValue, replaceValue) {
        var O = requireObjectCoercible(this);
        var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);
        return replacer
          ? functionCall(replacer, searchValue, O, replaceValue)
          : functionCall(nativeReplace, toString_1(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
      function (string, replaceValue) {
        var rx = anObject(this);
        var S = toString_1(string);

        if (
          typeof replaceValue == 'string' &&
          stringIndexOf$1(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
          stringIndexOf$1(replaceValue, '$<') === -1
        ) {
          var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
          if (res.done) return res.value;
        }

        var functionalReplace = isCallable(replaceValue);
        if (!functionalReplace) replaceValue = toString_1(replaceValue);

        var global = rx.global;
        var fullUnicode;
        if (global) {
          fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }

        var results = [];
        var result;
        while (true) {
          result = regexpExecAbstract(rx, S);
          if (result === null) break;

          push(results, result);
          if (!global) break;

          var matchStr = toString_1(result[0]);
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        }

        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];

          var matched = toString_1(result[0]);
          var position = max$1(min$1(toIntegerOrInfinity(result.index), S.length), 0);
          var captures = [];
          var replacement;
          // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
          for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = concat([matched], captures, position, S);
            if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
            replacement = toString_1(functionApply(replaceValue, undefined, replacerArgs));
          } else {
            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }
          if (position >= nextSourcePosition) {
            accumulatedResult += stringSlice$2(S, nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }

        return accumulatedResult + stringSlice$2(S, nextSourcePosition);
      }
    ];
  }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

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

  var namespace = "wza-assist";
  var domain = "";
  var url = "//dict.youdao.com/dictvoice";
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

  var $TypeError$2 = TypeError;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // Safari < 13 does not throw an error in this case
  var SILENT_ON_NON_WRITABLE_LENGTH_SET = descriptors && !function () {
    // makes no sense without proper strict mode support
    if (this !== undefined) return true;
    try {
      // eslint-disable-next-line es/no-object-defineproperty -- safe
      Object.defineProperty([], 'length', { writable: false }).length = 1;
    } catch (error) {
      return error instanceof TypeError;
    }
  }();

  var arraySetLength = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
    if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
      throw new $TypeError$2('Cannot set read only .length');
    } return O.length = length;
  } : function (O, length) {
    return O.length = length;
  };

  var $TypeError$1 = TypeError;

  var deletePropertyOrThrow = function (O, P) {
    if (!delete O[P]) throw new $TypeError$1('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
  };

  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

  var max = Math.max;
  var min = Math.min;

  // `Array.prototype.splice` method
  // https://tc39.es/ecma262/#sec-array.prototype.splice
  // with adding support of @@species
  _export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
    splice: function splice(start, deleteCount /* , ...items */) {
      var O = toObject(this);
      var len = lengthOfArrayLike(O);
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
        actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
      }
      doesNotExceedSafeInteger(len + insertCount - actualDeleteCount);
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
          else deletePropertyOrThrow(O, to);
        }
        for (k = len; k > len - actualDeleteCount + insertCount; k--) deletePropertyOrThrow(O, k - 1);
      } else if (insertCount > actualDeleteCount) {
        for (k = len - actualDeleteCount; k > actualStart; k--) {
          from = k + actualDeleteCount - 1;
          to = k + insertCount - 1;
          if (from in O) O[to] = O[from];
          else deletePropertyOrThrow(O, to);
        }
      }
      for (k = 0; k < insertCount; k++) {
        O[k + actualStart] = arguments[k + 2];
      }
      arraySetLength(O, len - actualDeleteCount + insertCount);
      return A;
    }
  });

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

  // in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`


  var classList = documentCreateElement('span').classList;
  var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

  var domTokenListPrototype = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;

  var $forEach = arrayIteration.forEach;


  var STRICT_METHOD = arrayMethodIsStrict('forEach');

  // `Array.prototype.forEach` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  var arrayForEach = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  } : [].forEach;

  var handlePrototype = function (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype && CollectionPrototype.forEach !== arrayForEach) try {
      createNonEnumerableProperty(CollectionPrototype, 'forEach', arrayForEach);
    } catch (error) {
      CollectionPrototype.forEach = arrayForEach;
    }
  };

  for (var COLLECTION_NAME in domIterables) {
    if (domIterables[COLLECTION_NAME]) {
      handlePrototype(global_1[COLLECTION_NAME] && global_1[COLLECTION_NAME].prototype);
    }
  }

  handlePrototype(domTokenListPrototype);

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
        namespace: 'wza-assist',
        domain: '.xxx.com',
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
          document.body.style.cssText = '';
          //activeBtn.style.display = 'none'
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

  var styles$4 = ".topbar-html {\n  width: 100%;\n  background: #797F8D;\n  overflow: hidden;\n  z-index: 2147483645;\n  position: fixed;\n  top: 0;\n  box-shadow: 0 0 10px 2px #999;\n  left: 0;\n  right: 0;\n}\n.topbar-html-mright {\n  margin-right: 50px !important;\n}\n.topbar-html-margin0 {\n  margin: 0 !important;\n}\n.topbar-html-content {\n  width: 100%;\n  height: 100px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n}\n.topbar-html-content-item {\n  cursor: pointer;\n  margin: 0 6px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.topbar-html-content-item span {\n  height: 30px;\n  line-height: 30px;\n  color: #FFFFFF;\n  font-size: 16px;\n  font-weight: 500;\n  font-family: PingFangSC-Medium;\n}\n.topbar-html-content-item img {\n  height: 52px;\n  width: 52px;\n  border-radius: 5px;\n  display: block;\n}";

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

  var $find = arrayIteration.find;


  var FIND = 'find';
  var SKIPS_HOLES = true;

  // Shouldn't skip holes
  // eslint-disable-next-line es/no-array-prototype-find -- testing
  if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  _export({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
    find: function find(callbackfn /* , that = undefined */) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables(FIND);

  var functionUncurryThisAccessor = function (object, key, method) {
    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      return functionUncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
    } catch (error) { /* empty */ }
  };

  var isPossiblePrototype = function (argument) {
    return isObject(argument) || argument === null;
  };

  var $String$1 = String;
  var $TypeError = TypeError;

  var aPossiblePrototype = function (argument) {
    if (isPossiblePrototype(argument)) return argument;
    throw new $TypeError("Can't set " + $String$1(argument) + ' as a prototype');
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
      setter = functionUncurryThisAccessor(Object.prototype, '__proto__', 'set');
      setter(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) { /* empty */ }
    return function setPrototypeOf(O, proto) {
      anObject(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter(O, proto);
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
      isCallable(NewTarget = dummy.constructor) &&
      NewTarget !== Wrapper &&
      isObject(NewTargetPrototype = NewTarget.prototype) &&
      NewTargetPrototype !== Wrapper.prototype
    ) objectSetPrototypeOf($this, NewTargetPrototype);
    return $this;
  };

  var RegExpPrototype$2 = RegExp.prototype;

  var regexpGetFlags = function (R) {
    var flags = R.flags;
    return flags === undefined && !('flags' in RegExpPrototype$2) && !hasOwnProperty_1(R, 'flags') && objectIsPrototypeOf(RegExpPrototype$2, R)
      ? functionCall(regexpFlags, R) : flags;
  };

  var defineProperty = objectDefineProperty.f;

  var proxyAccessor = function (Target, Source, key) {
    key in Target || defineProperty(Target, key, {
      configurable: true,
      get: function () { return Source[key]; },
      set: function (it) { Source[key] = it; }
    });
  };

  var defineBuiltInAccessor = function (target, name, descriptor) {
    if (descriptor.get) makeBuiltIn_1(descriptor.get, name, { getter: true });
    if (descriptor.set) makeBuiltIn_1(descriptor.set, name, { setter: true });
    return objectDefineProperty.f(target, name, descriptor);
  };

  var SPECIES = wellKnownSymbol('species');

  var setSpecies = function (CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn(CONSTRUCTOR_NAME);

    if (descriptors && Constructor && !Constructor[SPECIES]) {
      defineBuiltInAccessor(Constructor, SPECIES, {
        configurable: true,
        get: function () { return this; }
      });
    }
  };

  var getOwnPropertyNames = objectGetOwnPropertyNames.f;









  var enforceInternalState = internalState.enforce;





  var MATCH = wellKnownSymbol('match');
  var NativeRegExp = global_1.RegExp;
  var RegExpPrototype$1 = NativeRegExp.prototype;
  var SyntaxError = global_1.SyntaxError;
  var exec = functionUncurryThis(RegExpPrototype$1.exec);
  var charAt = functionUncurryThis(''.charAt);
  var replace = functionUncurryThis(''.replace);
  var stringIndexOf = functionUncurryThis(''.indexOf);
  var stringSlice$1 = functionUncurryThis(''.slice);
  // TODO: Use only proper RegExpIdentifierName
  var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
  var re1 = /a/g;
  var re2 = /a/g;

  // "new" should create a new object, old webkit bug
  var CORRECT_NEW = new NativeRegExp(re1) !== re1;

  var MISSED_STICKY = regexpStickyHelpers.MISSED_STICKY;
  var UNSUPPORTED_Y = regexpStickyHelpers.UNSUPPORTED_Y;

  var BASE_FORCED = descriptors &&
    (!CORRECT_NEW || MISSED_STICKY || regexpUnsupportedDotAll || regexpUnsupportedNcg || fails(function () {
      re2[MATCH] = false;
      // RegExp constructor can alter flags and IsRegExp works correct with @@match
      return NativeRegExp(re1) !== re1 || NativeRegExp(re2) === re2 || String(NativeRegExp(re1, 'i')) !== '/a/i';
    }));

  var handleDotAll = function (string) {
    var length = string.length;
    var index = 0;
    var result = '';
    var brackets = false;
    var chr;
    for (; index <= length; index++) {
      chr = charAt(string, index);
      if (chr === '\\') {
        result += chr + charAt(string, ++index);
        continue;
      }
      if (!brackets && chr === '.') {
        result += '[\\s\\S]';
      } else {
        if (chr === '[') {
          brackets = true;
        } else if (chr === ']') {
          brackets = false;
        } result += chr;
      }
    } return result;
  };

  var handleNCG = function (string) {
    var length = string.length;
    var index = 0;
    var result = '';
    var named = [];
    var names = objectCreate(null);
    var brackets = false;
    var ncg = false;
    var groupid = 0;
    var groupname = '';
    var chr;
    for (; index <= length; index++) {
      chr = charAt(string, index);
      if (chr === '\\') {
        chr += charAt(string, ++index);
      } else if (chr === ']') {
        brackets = false;
      } else if (!brackets) switch (true) {
        case chr === '[':
          brackets = true;
          break;
        case chr === '(':
          if (exec(IS_NCG, stringSlice$1(string, index + 1))) {
            index += 2;
            ncg = true;
          }
          result += chr;
          groupid++;
          continue;
        case chr === '>' && ncg:
          if (groupname === '' || hasOwnProperty_1(names, groupname)) {
            throw new SyntaxError('Invalid capture group name');
          }
          names[groupname] = true;
          named[named.length] = [groupname, groupid];
          ncg = false;
          groupname = '';
          continue;
      }
      if (ncg) groupname += chr;
      else result += chr;
    } return [result, named];
  };

  // `RegExp` constructor
  // https://tc39.es/ecma262/#sec-regexp-constructor
  if (isForced_1('RegExp', BASE_FORCED)) {
    var RegExpWrapper = function RegExp(pattern, flags) {
      var thisIsRegExp = objectIsPrototypeOf(RegExpPrototype$1, this);
      var patternIsRegExp = isRegexp(pattern);
      var flagsAreUndefined = flags === undefined;
      var groups = [];
      var rawPattern = pattern;
      var rawFlags, dotAll, sticky, handled, result, state;

      if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
        return pattern;
      }

      if (patternIsRegExp || objectIsPrototypeOf(RegExpPrototype$1, pattern)) {
        pattern = pattern.source;
        if (flagsAreUndefined) flags = regexpGetFlags(rawPattern);
      }

      pattern = pattern === undefined ? '' : toString_1(pattern);
      flags = flags === undefined ? '' : toString_1(flags);
      rawPattern = pattern;

      if (regexpUnsupportedDotAll && 'dotAll' in re1) {
        dotAll = !!flags && stringIndexOf(flags, 's') > -1;
        if (dotAll) flags = replace(flags, /s/g, '');
      }

      rawFlags = flags;

      if (MISSED_STICKY && 'sticky' in re1) {
        sticky = !!flags && stringIndexOf(flags, 'y') > -1;
        if (sticky && UNSUPPORTED_Y) flags = replace(flags, /y/g, '');
      }

      if (regexpUnsupportedNcg) {
        handled = handleNCG(pattern);
        pattern = handled[0];
        groups = handled[1];
      }

      result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$1, RegExpWrapper);

      if (dotAll || sticky || groups.length) {
        state = enforceInternalState(result);
        if (dotAll) {
          state.dotAll = true;
          state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
        }
        if (sticky) state.sticky = true;
        if (groups.length) state.groups = groups;
      }

      if (pattern !== rawPattern) try {
        // fails in old engines, but we have no alternatives for unsupported regex syntax
        createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
      } catch (error) { /* empty */ }

      return result;
    };

    for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
      proxyAccessor(RegExpWrapper, NativeRegExp, keys[index++]);
    }

    RegExpPrototype$1.constructor = RegExpWrapper;
    RegExpWrapper.prototype = RegExpPrototype$1;
    defineBuiltIn(global_1, 'RegExp', RegExpWrapper, { constructor: true });
  }

  // https://tc39.es/ecma262/#sec-get-regexp-@@species
  setSpecies('RegExp');

  var PROPER_FUNCTION_NAME = functionName.PROPER;






  var TO_STRING = 'toString';
  var RegExpPrototype = RegExp.prototype;
  var nativeToString = RegExpPrototype[TO_STRING];

  var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) !== '/a/b'; });
  // FF44- RegExp#toString has a wrong name
  var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name !== TO_STRING;

  // `RegExp.prototype.toString` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.tostring
  if (NOT_GENERIC || INCORRECT_NAME) {
    defineBuiltIn(RegExpPrototype, TO_STRING, function toString() {
      var R = anObject(this);
      var pattern = toString_1(R.source);
      var flags = toString_1(regexpGetFlags(R));
      return '/' + pattern + '/' + flags;
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
      this.isOveread = cookie.get('overead', namespace);
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
      if (this.isOveread) {
        this.pointeReadTabIcon.src = this.pointeReadTabIcon.getAttribute('selected-src');
      } else {
        this.pointeReadTabIcon.src = this.pointeReadTabIcon.getAttribute('source-src');
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
      this.pointeReadTabIcon = document.querySelector("#".concat(namespace, "-pointeread img"));
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
        if (_this.isAudio) {
          Audio.playAudio(audioTabText.pointereadClose);
          _this.closeAudio();
        } else {
          _this.showAudio();
          Audio.playAudio(audioTabText.pointeread);
        }
      };
    },
    showAudio: function showAudio() {
      var namespace = Audio.namespace;
      this.isAudio = true;
      this.addEventMove();
      cookie.set('audio', true, namespace);
      cookie.set('overead', true, namespace);
      this.audioTabImg.src = this.audioTabImg.getAttribute('source-src');
      this.pointeReadTabIcon.src = this.pointeReadTabIcon.getAttribute('selected-src');
    },
    closeAudio: function closeAudio() {
      var namespace = Audio.namespace;
      this.isAudio = false;
      this.stopAudio();
      this.removeEventMove();
      cookie.set('audio', false, namespace);
      cookie.set('overead', false, namespace);
      this.audioTabImg.src = this.audioTabImg.getAttribute('selected-src');
      this.pointeReadTabIcon.src = this.pointeReadTabIcon.getAttribute('source-src');
    },
    addEventMove: function addEventMove() {
      addEvent(this.body, 'mouseover', this.mouseOver);
    },
    removeEventMove: function removeEventMove() {
      removeEvent(this.body, 'mouseover', this.mouseOver);
    },
    forceSafariPlayAudio: function forceSafariPlayAudio() {
      var audio = Audio.audio;
      try {
        audio.load();
        audio.play();
      } catch (err) {}
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
      if (window.speechSynthesis) {
        this.systemAudioAction(text);
      } else {
        this.degradationAudioAction(text);
      }
    },
    stopAudio: function stopAudio() {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      } else {
        this.audio.pause();
      }
    },
    getWindowVoice: function getWindowVoice() {
      // 获取浏览器中语音 (中文 + 本地服务)
      return window.speechSynthesis.getVoices().find(function (item) {
        return item.localService && item.lang === 'zh-CN';
      });
    },
    systemAudioAction: function systemAudioAction(text) {
      var isAudio = Audio.isAudio,
        speed = Audio.speed;
      if (!isAudio) {
        return;
      }
      var __speed = speed == 'middle' ? 1 : 1.5;
      var synth = window.speechSynthesis;
      synth.cancel();
      var msg = new SpeechSynthesisUtterance();
      msg.text = text; // 文字内容
      msg.lang = "zh-CN"; // 使用的语言:中文
      msg.volume = 1; // 声音音量：1
      msg.rate = __speed; // 语速：1
      msg.pitch = 1; // 音高：1
      msg.voice = this.getWindowVoice(); // 使用本地服务合成语音(若是获取不到 请异步获取, 加一个setTimeout)
      synth.speak(msg); // 播放
    },
    degradationAudioAction: function degradationAudioAction(text) {
      var namespace = Audio.namespace,
        AudioApi = Audio.AudioApi,
        isAudio = Audio.isAudio,
        audio = Audio.audio;
        Audio.speed;
        var forceSafariPlayAudio = Audio.forceSafariPlayAudio;
      if (!isAudio) {
        return;
      }
      var AudioParam = "le=zh&audio=".concat(encodeURI(text));
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
  var thisNumberValue = functionUncurryThis(1.0.valueOf);

  var $RangeError$1 = RangeError;

  // `String.prototype.repeat` method implementation
  // https://tc39.es/ecma262/#sec-string.prototype.repeat
  var stringRepeat = function repeat(count) {
    var str = toString_1(requireObjectCoercible(this));
    var result = '';
    var n = toIntegerOrInfinity(count);
    if (n < 0 || n === Infinity) throw new $RangeError$1('Wrong number of repetitions');
    for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
    return result;
  };

  var $RangeError = RangeError;
  var $String = String;
  var floor = Math.floor;
  var repeat = functionUncurryThis(stringRepeat);
  var stringSlice = functionUncurryThis(''.slice);
  var nativeToFixed = functionUncurryThis(1.0.toFixed);

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
        var t = $String(data[index]);
        s = s === '' ? t : s + repeat('0', 7 - t.length) + t;
      }
    } return s;
  };

  var FORCED = fails(function () {
    return nativeToFixed(0.00008, 3) !== '0.000' ||
      nativeToFixed(0.9, 0) !== '1' ||
      nativeToFixed(1.255, 2) !== '1.25' ||
      nativeToFixed(1000000000000000128.0, 0) !== '1000000000000000128';
  }) || !fails(function () {
    // V8 ~ Android 4.3-
    nativeToFixed({});
  });

  // `Number.prototype.toFixed` method
  // https://tc39.es/ecma262/#sec-number.prototype.tofixed
  _export({ target: 'Number', proto: true, forced: FORCED }, {
    toFixed: function toFixed(fractionDigits) {
      var number = thisNumberValue(this);
      var fractDigits = toIntegerOrInfinity(fractionDigits);
      var data = [0, 0, 0, 0, 0, 0];
      var sign = '';
      var result = '0';
      var e, z, j, k;

      // TODO: ES2018 increased the maximum number of fraction digits to 100, need to improve the implementation
      if (fractDigits < 0 || fractDigits > 20) throw new $RangeError('Incorrect fraction digits');
      // eslint-disable-next-line no-self-compare -- NaN check
      if (number !== number) return 'NaN';
      if (number <= -1e21 || number >= 1e21) return $String(number);
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
          result = dataToString(data) + repeat('0', fractDigits);
        }
      }
      if (fractDigits > 0) {
        k = result.length;
        result = sign + (k <= fractDigits
          ? '0.' + repeat('0', fractDigits - k) + result
          : stringSlice(result, 0, k - fractDigits) + '.' + stringSlice(result, k - fractDigits));
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
        el.style.zoom = _this2.size;
        //  el.style.transform = `scale(${this.size})`
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
    function Assist() {
      var _this;
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, Assist);
      _this = _callSuper(this, Assist, [opts]);
      // 合并参数
      _this.mergeConfig(opts);
      // 初始化插件
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
        this.registeHtml();
        // 初始化事件
        InitModules.map(function (item) {
          return _this2.useEvent(item);
        });
        // 格式化大段文本
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

}));
