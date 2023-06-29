// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8uBhv":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "0b7c8afcb31310b1";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
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
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4aleK":[function(require,module,exports) {
var _router = require("./router");
(function() {
    const root = document.querySelector(".root");
    _router.initRouter(root);
})();

},{"./router":"b2iia"}],"b2iia":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter
);
var _welcomePage = require("./pages/welcome/welcome-page");
var _instructionsPage = require("./pages/instructions/instructions-page");
var _playPage = require("./pages/play/play-page");
var _timeIsUpPage = require("./pages/time-is-up/time-is-up-page");
var _resultPage = require("./pages/result/result-page");
const routes = [
    {
        path: /\/welcome/,
        component: _welcomePage.initWelcomePage
    },
    {
        path: /\/instructions/,
        component: _instructionsPage.initInstructionsPage
    },
    {
        path: /\/play/,
        component: _playPage.initPlayPage
    },
    {
        path: /\/time-is-up/,
        component: _timeIsUpPage.initTimeIsUpPage
    },
    {
        path: /\/result/,
        component: _resultPage.initResultPage
    }, 
];
const BASE_PATH = "/dwf-m5-desafio-final";
function isGitHubPages() {
    return location.host.includes("github.io");
}
function initRouter(container) {
    function goTo(path) {
        const completePath = isGitHubPages() ? BASE_PATH + path : path;
        history.pushState({
        }, "", path);
        handleRoute(completePath);
    }
    function handleRoute(route) {
        const newRoute = isGitHubPages() ? route.replace(BASE_PATH, "") : route;
        for (const r of routes)if (r.path.test(newRoute)) {
            const elemento = r.component({
                goTo: goTo
            });
            if (container.firstChild) container.firstChild.remove();
            container.appendChild(elemento);
        }
    }
    if (location.pathname == "/" || location.host.includes("github.io")) goTo("/welcome");
    else handleRoute(location.pathname);
    window.onpopstate = ()=>{
        handleRoute(location.pathname);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","./pages/welcome/welcome-page":"02ymR","./pages/instructions/instructions-page":"epFVI","./pages/play/play-page":"eXkyY","./pages/time-is-up/time-is-up-page":"36mxN","./pages/result/result-page":"6NO2t"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"02ymR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initWelcomePage", ()=>initWelcomePage
);
var _button = require("../../components/button/button");
var _optionToChoose = require("../../components/option-to-choose/option-to-choose");
function initWelcomePage(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    div.className = "container-welcome-page";
    div.innerHTML = `\n        <h2 class="title">Piedra, Papel o Tijera</h2>\n        <div class="button">\n            <my-button class="button-start">Comenzar</my-button>\n        </div>\n        <div class="container-jugadas">\n            <my-jugada jugada="piedra"></my-jugada>\n            <my-jugada jugada="papel"></my-jugada>\n            <my-jugada jugada="tijera"></my-jugada>\n        </div>\n    `;
    style.innerHTML = `\n        .container-welcome-page {\n            height: 100vh;\n            margin: auto;\n            display: grid;\n        }\n        .title {\n            color: rgba(0, 144, 72, 1);\n            font-size: 100px;\n            width: 300px;\n            text-align: center;\n            margin: auto;\n        }\n        @media (min-width: 960px) {\n            .title {\n                font-size: 130px;\n                width: 550px;\n            }\n        }\n        .button {\n            text-align: center;\n            padding-top: 50px;\n        }\n        @media (min-width: 960px) {\n            .button {\n                padding-top: 25px;\n            }\n        }\n        .container-jugadas {\n            display: grid;\n            grid-template-columns: 100px 100px 100px;\n            justify-content: center;\n            align-content: end;\n        }\n    `;
    const button = div.querySelector(".button-start");
    button.addEventListener("click", ()=>{
        params.goTo("/instructions");
    });
    div.appendChild(style);
    return div;
}

},{"../../components/button/button":"lQKnV","../../components/option-to-choose/option-to-choose":"fAOZY","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"lQKnV":[function(require,module,exports) {
customElements.define("my-button", class extends HTMLElement {
    constructor(){
        super();
        this.render();
    }
    render() {
        const shadow = this.attachShadow({
            mode: "open"
        });
        const button = document.createElement("button");
        const style = document.createElement("style");
        button.className = "root";
        style.innerHTML = `\n                .root{\n                    background-color: #006cfc;\n                    color: rgba(216, 252, 252, 1);\n                    border: 10px solid #001997;\n                    border-radius: 10px;\n                    font-family: "Odibee Sans", cursive;\n                    font-size: 45px;\n                    padding: 15px;\n                    text-align: center;\n                    cursor: pointer;\n                    width: 100%;\n                    max-width: 285px;\n                }\n            `;
        button.textContent = this.textContent;
        shadow.appendChild(button);
        shadow.appendChild(style);
    }
});

},{}],"fAOZY":[function(require,module,exports) {
customElements.define("my-jugada", class extends HTMLElement {
    constructor(){
        super();
        this.render();
    }
    render() {
        const shadow = this.attachShadow({
            mode: "open"
        });
        const div = document.createElement("div");
        const jugada = this.getAttribute("jugada");
        const style = document.createElement("style");
        const image = document.createElement("img");
        image.setAttribute("width", "90px");
        image.setAttribute("height", "200px");
        style.innerHTML = `\n      .piedra, .papel, .tijera {\n        text-align: center;\n        cursor: pointer;\n      }\n      `;
        div.className = jugada;
        if (jugada == "piedra") image.src = require("url:../../images/stone.png");
        else if (jugada == "papel") image.src = require("url:../../images/paper.png");
        else if (jugada == "tijera") image.src = require("url:../../images/scissors.png");
        div.appendChild(image);
        shadow.appendChild(div);
        shadow.appendChild(style);
    }
});

},{"url:../../images/stone.png":"4TrhD","url:../../images/paper.png":"5RLhp","url:../../images/scissors.png":"9swN3"}],"4TrhD":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "stone.765ebe34.png";

},{"./helpers/bundle-url":"8YnfL"}],"8YnfL":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"5RLhp":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "paper.5631fa5a.png";

},{"./helpers/bundle-url":"8YnfL"}],"9swN3":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "scissors.5e107d69.png";

},{"./helpers/bundle-url":"8YnfL"}],"epFVI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initInstructionsPage", ()=>initInstructionsPage
);
var _button = require("../../components/button/button");
var _optionToChoose = require("../../components/option-to-choose/option-to-choose");
function initInstructionsPage(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    div.className = "container-instructions-page";
    div.innerHTML = `\n        <h4 class="text-instructions">\n            Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.\n        </h4>\n        <div class="button">\n            <my-button class="button-start">¡Jugar!</my-button>\n        </div>\n        <div class="container-jugadas">\n            <my-jugada jugada="piedra"></my-jugada>\n            <my-jugada jugada="papel"></my-jugada>\n            <my-jugada jugada="tijera"></my-jugada>\n        </div>\n    `;
    style.innerHTML = `\n        .container-instructions-page {\n            height: 100vh;\n            margin: auto;\n            display: grid;\n        }\n        .text-instructions {\n            font-family: American Typewriter;\n            color: rgba(0, 0, 0, 1);\n            font-size: 40px;\n            width: 400px;\n            text-align: center;\n            margin: auto;\n            padding-top: 40px;\n        }\n        @media (min-width: 960px) {\n            .title {\n                font-size: 130px;\n                width: 550px;\n            }\n        }\n        .button {\n            text-align: center;\n            padding-top: 60px;\n        }\n        @media (min-width: 960px) {\n            .button {\n                padding-top: 25px;\n            }\n        }\n        .container-jugadas {\n            display: grid;\n            grid-template-columns: 100px 100px 100px;\n            justify-content: center;\n            align-content: end;\n        }\n    `;
    const button = div.querySelector(".button-start");
    button.addEventListener("click", ()=>{
        params.goTo("/play");
    });
    div.appendChild(style);
    return div;
}

},{"../../components/button/button":"lQKnV","../../components/option-to-choose/option-to-choose":"fAOZY","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"eXkyY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPlayPage", ()=>initPlayPage
);
var _optionToChoose = require("../../components/option-to-choose/option-to-choose");
var _timer = require("../../components/timer/timer");
var _state = require("../../state");
function initPlayPage(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    div.className = "container-play-page";
    let computerMove;
    let playerMove;
    let counter = 3;
    let activeEvent = false;
    div.innerHTML = `\n        <div class="container-jugadas-computer">\n            <my-jugada jugada="tijera" class="computer-play-tijera"></my-jugada>\n            <my-jugada jugada="papel" class="computer-play-papel"></my-jugada>\n            <my-jugada jugada="piedra" class="computer-play-piedra"></my-jugada>\n        </div>\n        <my-timer class="container-timer"></my-timer>\n        <div class="container-jugadas-player">\n            <my-jugada jugada="piedra" class="player-play-piedra"></my-jugada>\n            <my-jugada jugada="papel" class="player-play-papel"></my-jugada>\n            <my-jugada jugada="tijera" class="player-play-tijera"></my-jugada>\n        </div>\n    `;
    style.innerHTML = `\n    .container-play-page {\n            height: 100vh;\n            margin: auto;\n            display: grid;\n        }\n        .container-timer {\n            text-align: center;\n            height: 50vh;\n        }\n        .container-jugadas-player, .container-jugadas-computer {\n            height: 50vh;\n            max-width: 600px;\n            margin: 0 auto;\n            display: flex;\n            gap: 40px;\n            justify-content: space-evenly;\n            align-items: end;\n        }\n        @media (min-width:960px) {\n            .container-jugadas-player, .container-jugadas-computer {\n                gap: 80px;\n            }\n        }\n        .container-jugadas-computer {\n            transform: rotate(180deg);\n            display: none;\n        }\n        .disable {\n            display: none;\n        }\n        .enable {\n            display: flex;\n        }\n        `;
    function activeEventOn() {
        activeEvent = true;
    }
    function randomComputerMove() {
        let randomNumber = Math.random();
        if (randomNumber < 1 / 3) computerMove = "piedra";
        else if (randomNumber < 2 / 3) computerMove = "papel";
        else computerMove = "tijera";
        return computerMove;
    }
    function stateSubscriber(playerMove1, computerMove1) {
        _state.state.subscribe(()=>{
        });
    }
    function redirectToResult() {
        let counter1 = 1;
        const redirecter = setInterval(()=>{
            counter1--;
            if (counter1 == 0) {
                params.goTo("/result");
                clearInterval(redirecter);
            }
        }, 2000);
    }
    const playerPlayPiedra = div.querySelector(".player-play-piedra");
    const playerPlayPapel = div.querySelector(".player-play-papel");
    const playerPlayTijera = div.querySelector(".player-play-tijera");
    const containerJugadasComputer = div.querySelector(".container-jugadas-computer");
    const computerPlayPiedra = div.querySelector(".computer-play-piedra");
    const computerPlayPapel = div.querySelector(".computer-play-papel");
    const computerPlayTijera = div.querySelector(".computer-play-tijera");
    const timer = div.querySelector(".container-timer");
    function showComputerPlay() {
        containerJugadasComputer.classList.add("enable");
        if (computerMove == "piedra") {
            computerPlayPiedra.classList.add("enable");
            computerPlayPapel.classList.add("disable");
            computerPlayTijera.classList.add("disable");
        } else if (computerMove == "papel") {
            computerPlayPapel.classList.add("enable");
            computerPlayPiedra.classList.add("disable");
            computerPlayTijera.classList.add("disable");
        } else {
            computerPlayTijera.classList.add("enable");
            computerPlayPiedra.classList.add("disable");
            computerPlayPapel.classList.add("disable");
        }
        timer.classList.add("disable");
    }
    (function myPlay() {
        playerPlayPiedra.addEventListener("click", ()=>{
            activeEventOn();
            playerMove = "piedra";
            randomComputerMove();
            showComputerPlay();
            playerPlayPapel.classList.add("disable");
            playerPlayTijera.classList.add("disable");
            _state.state.setMove(playerMove, computerMove);
            stateSubscriber(playerMove, computerMove);
            redirectToResult();
        });
        playerPlayPapel.addEventListener("click", ()=>{
            activeEventOn();
            playerMove = "papel";
            randomComputerMove();
            showComputerPlay();
            playerPlayPiedra.classList.add("disable");
            playerPlayTijera.classList.add("disable");
            _state.state.setMove(playerMove, computerMove);
            stateSubscriber(playerMove, computerMove);
            redirectToResult();
        });
        playerPlayTijera.addEventListener("click", ()=>{
            activeEventOn();
            playerMove = "tijera";
            randomComputerMove();
            showComputerPlay();
            playerPlayPiedra.classList.add("disable");
            playerPlayPapel.classList.add("disable");
            _state.state.setMove(playerMove, computerMove);
            stateSubscriber(playerMove, computerMove);
            redirectToResult();
        });
    })();
    (function timesUp() {
        const intervalId = setInterval(()=>{
            counter--;
            if (counter < 1 && activeEvent == false) {
                clearInterval(intervalId);
                params.goTo("/time-is-up");
            }
        }, 1000);
    })();
    div.appendChild(style);
    return div;
}

},{"../../components/option-to-choose/option-to-choose":"fAOZY","../../components/timer/timer":"6Q1S4","../../state":"28XHA","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"6Q1S4":[function(require,module,exports) {
customElements.define("my-timer", class extends HTMLElement {
    constructor(){
        super();
        this.render();
    }
    render() {
        const shadow = this.attachShadow({
            mode: "open"
        });
        const div = document.createElement("div");
        const style = document.createElement("style");
        div.innerHTML = `\n            <div class="countdown-number"></div>\n            <svg class="svg">\n            <circle class="svg-circle" r="90" cx="140" cy="140"></circle>\n            </svg>\n            `;
        let counter = 3;
        var counterNumber = div.querySelector(".countdown-number");
        counterNumber.textContent = counter;
        const timer = setInterval(()=>{
            counter--;
            if (counter == 0) clearInterval(timer);
            counterNumber.textContent = counter;
        }, 1000);
        style.innerHTML = `\n            .countdown-number {\n                position: relative;\n                top: 169px;\n                font-weight: 400;\n                font-size: 70px;\n                text-align: center;\n                color: black;\n            }\n            .svg {\n                width: 260px;\n                height: 280px;\n                transform: rotateY(-180deg) rotateZ(-90deg);\n            }\n            .svg-circle {\n                stroke-dasharray: 570px;\n                stroke-dashoffset: 0px;\n                stroke-linecap: round;\n                stroke-width: 10px;\n                stroke: black ;\n                fill: none;\n                animation: countdown 3s linear infinite forwards;\n            }\n            @keyframes countdown {\n                from {\n                  stroke-dashoffset: 0px;\n                }\n                to {\n                  stroke-dashoffset: 580px;\n                }\n            }`;
        shadow.appendChild(div);
        shadow.appendChild(style);
    }
});

},{}],"28XHA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
const imgWin = require("url:./images/result-won.png");
const imgLose = require("url:./images/result-lost.png");
const imgTie = require("url:./images/result-tie.png");
const state = {
    data: {
        currentGame: {
            myPlay: "",
            computerPlay: "",
            currentResult: ""
        },
        historyScore: {
            player: 0,
            computer: 0
        }
    },
    listeners: [],
    getState () {
        return this.data;
    },
    setState (newState) {
        this.data = newState;
        for (const callback of this.listeners)callback();
    },
    subscribe (callback) {
        this.listeners.push(callback);
    },
    setMove (myMove, computerMove) {
        const currentState = this.getState();
        state.setState({
            ...currentState,
            currentGame: {
                ...currentState.currentGame,
                myPlay: myMove,
                computerPlay: computerMove
            }
        });
    },
    setResult (result) {
        const currentState = this.getState();
        state.setState({
            ...currentState,
            currentGame: {
                ...currentState.currentGame,
                currentResult: result
            }
        });
    },
    pushToHistory (playerScore, computerScore) {
        const currentState = this.getState();
        state.setState({
            ...currentState,
            historyScore: {
                ...currentState.historyScore,
                player: currentState.historyScore.player + playerScore,
                computer: currentState.historyScore.computer + computerScore
            }
        });
    },
    getHistory () {
        const localData = localStorage.getItem("saved-state");
        this.setState(JSON.parse(localData));
    },
    whoWon (myMove, computerMove) {
        const ganarConPiedra = myMove == "piedra" && computerMove == "tijera";
        const ganarConPapel = myMove == "papel" && computerMove == "piedra";
        const ganarConTijera = myMove == "tijera" && computerMove == "papel";
        const gane = [
            ganarConPiedra,
            ganarConPapel,
            ganarConTijera
        ].includes(true);
        if (gane) {
            this.pushToHistory(1, 0);
            this.setResult("ganaste");
        }
        const perderConPiedra = myMove == "piedra" && computerMove == "papel";
        const perderConPapel = myMove == "papel" && computerMove == "tijera";
        const perderConTijera = myMove == "tijera" && computerMove == "piedra";
        const perdi = [
            perderConPiedra,
            perderConPapel,
            perderConTijera
        ].includes(true);
        if (perdi) {
            this.pushToHistory(0, 1);
            this.setResult("perdiste");
        }
        const empate = myMove == computerMove;
        if (empate) {
            this.pushToHistory(0, 0);
            this.setResult("empataste");
        }
    },
    restartScore () {
        state.setState({
            historyScore: {
                player: 0,
                computer: 0
            }
        });
    }
};

},{"url:./images/result-won.png":"eGulg","url:./images/result-lost.png":"bkflP","url:./images/result-tie.png":"bzKi4","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"eGulg":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "result-won.954cdcf7.png";

},{"./helpers/bundle-url":"8YnfL"}],"bkflP":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "result-lost.3dbb6018.png";

},{"./helpers/bundle-url":"8YnfL"}],"bzKi4":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "result-tie.33f4b4de.png";

},{"./helpers/bundle-url":"8YnfL"}],"36mxN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initTimeIsUpPage", ()=>initTimeIsUpPage
);
var _button = require("../../components/button/button");
function initTimeIsUpPage(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    div.className = "container-instructions-page";
    div.innerHTML = `\n        <h4 class="text-instructions">\n            ¿Qué pasó?\n            <br>\n            ¿Se terminó el tiempo?\n        </h4>\n        <div class="button">\n            <my-button class="button-start">¡Volver a jugar!</my-button>\n        </div>\n    `;
    style.innerHTML = `\n        .container-instructions-page {\n            height: 100vh;\n            margin: auto;\n            display: grid;\n        }\n        .text-instructions {\n            font-family: American Typewriter;\n            color: rgba(0, 0, 0, 1);\n            font-size: 40px;\n            width: 300px;\n            text-align: center;\n            margin: auto;\n            padding-top: 40px;\n        }\n        @media (min-width: 960px) {\n            .text-instructions {\n                font-size: 80px;\n                width: 800px;\n            }\n        }\n        .button {\n            text-align: center;\n            padding-top: 60px;\n        }\n        @media (min-width: 960px) {\n            .button {\n                padding-top: 25px;\n            }\n        }\n    `;
    const button = div.querySelector(".button-start");
    button.addEventListener("click", ()=>{
        params.goTo("/play");
    });
    div.appendChild(style);
    return div;
}

},{"../../components/button/button":"lQKnV","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"6NO2t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initResultPage", ()=>initResultPage
);
var _state = require("../../state");
var _signResult = require("../../components/sign-result/sign-result");
var _score = require("../../components/score/score");
function initResultPage(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    div.className = "container-result-page";
    var currentState = _state.state.getState();
    // movimientos de /play-page
    const currentPlayerChoice = currentState.currentGame.myPlay;
    const currentComputerChoice = currentState.currentGame.computerPlay;
    _state.state.whoWon(currentPlayerChoice, currentComputerChoice);
    var playerScore = _state.state.getState().historyScore.player;
    var computerScore = _state.state.getState().historyScore.computer;
    div.innerHTML = `\n    <div class="container-sign-result">\n    <sign-result result="win" class="sign-result-win disable"></sign-result>\n    <sign-result result="tie" class="sign-result-tie disable"></sign-result>\n    <sign-result result="lose" class="sign-result-lose disable"></sign-result>\n        </div>\n        <div class="container-score-and-button">\n            <div class="container-score">\n            <p class="title-score">Score</p>\n                <div class="container-history-score">\n                    <p><u>Vos</u>: ${playerScore}</p>\n                    <br>\n                    <p><u>Computadora</u>: ${computerScore}</p>\n                </div>\n            </div>\n            <div class="container-button">\n                <my-button class="play-again-button enable">Volver a jugar</my-button>\n                <my-button class="reset-score enable">Reiniciar historial</my-button>\n            </div>\n        </div>\n    `;
    style.innerHTML = `\n    .container-result-page {\n            height: 100vh;\n            margin: auto;\n            display: grid;\n        }\n        .container-sign-result {\n            padding-top: 30px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        }\n        .container-score-and-button {\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        }\n        @media (min-width: 960px) {\n            .container-score-and-button {\n                flex-direction: initial;\n                justify-content: center;\n                gap: 100px;\n                padding-bottom: 30px;\n            }\n        }\n        .container-score {\n            border: solid 8px;\n            border-radius: 8px;\n            width: 300px;\n            background-color: white;\n        }\n        p {\n            margin: 0;\n        }\n        .title-score{\n            font-size: 60px;\n            text-align: center;\n            padding-top: 20px;\n        }\n        .container-history-score {\n            font-size: 40px;\n            text-align: right;\n            padding: 10px 20px 20px 20px;\n        }\n        .container-button {\n            display: flex;\n            flex-direction: column;\n            gap: 45px;\n            padding: 30px 0;\n            \n        }\n        .play-again-button, .reset-score {\n            width: 100%;\n            min-width: 285px;\n        }\n        .disable {\n            display: none;\n        }\n        .enable {\n            display: flex;\n            justify-content: center;\n        }\n    `;
    // contenedores de las imagenes de los resultados
    const containerImgWin = div.querySelector(".sign-result-win");
    const containerImgTie = div.querySelector(".sign-result-tie");
    const containerImgLose = div.querySelector(".sign-result-lose");
    const result = _state.state.getState().currentGame.currentResult;
    if (result == "ganaste") {
        containerImgWin.classList.add("enable");
        div.style.backgroundColor = "var(--background-win-style)";
    } else if (result == "perdiste") {
        containerImgLose.classList.add("enable");
        div.style.backgroundColor = "var(--background-lose-style)";
    } else {
        containerImgTie.classList.add("enable");
        div.style.backgroundColor = "var(--background-tie-style)";
    }
    div.querySelector(".play-again-button").addEventListener("click", ()=>{
        params.goTo("/play");
    });
    div.querySelector(".reset-score").addEventListener("click", ()=>{
        _state.state.restartScore();
        localStorage.removeItem("saved-state");
        params.goTo("/welcome");
    });
    div.appendChild(style);
    return div;
}

},{"../../state":"28XHA","../../components/sign-result/sign-result":"fy5cy","../../components/score/score":"enDmk","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"fy5cy":[function(require,module,exports) {
customElements.define("sign-result", class extends HTMLElement {
    constructor(){
        super();
        this.render();
    }
    render() {
        const shadow = this.attachShadow({
            mode: "open"
        });
        const div = document.createElement("div");
        const result = this.getAttribute("result");
        const style = document.createElement("style");
        const image = document.createElement("img");
        style.innerHTML = `\n      .win, .lose, .tie {\n        text-align: center;\n      }\n      `;
        div.className = result;
        if (result == "win") image.src = require("url:../../images/result-won.png");
        else if (result == "lose") image.src = require("url:../../images/result-lost.png");
        else if (result == "tie") image.src = require("url:../../images/result-tie.png");
        div.appendChild(image);
        shadow.appendChild(div);
        shadow.appendChild(style);
    }
});

},{"url:../../images/result-won.png":"eGulg","url:../../images/result-lost.png":"bkflP","url:../../images/result-tie.png":"bzKi4"}],"enDmk":[function(require,module,exports) {
customElements.define("my-score", class extends HTMLElement {
    constructor(){
        super();
        this.render();
    }
    render() {
        const shadow = this.attachShadow({
            mode: "open"
        });
        const div = document.createElement("div");
        const style = document.createElement("style");
        div.style.display = "flex";
        div.style.justifyContent = "center";
        div.innerHTML = `\n      <div class="container-score">\n        <p class="title-score">Score</p>\n        <div class="container-history-score">\n            <p><u>Vos</u>: </p>\n          <br>\n            <p><u>Computadora</u>: </p>\n        </div>\n      </div>\n      `;
        style.innerHTML = `\n      .container-score {\n        display: flex;\n        justify-content: center;\n        border: solid 8px;\n        border-radius: 8px;\n        height: 100%;\n        width: 300px;\n        background-color: white;\n      }\n      p {\n        margin: 0;\n      }\n      .title-score{\n        font-size: 60px;\n        text-align: center;\n        padding-top: 20px;\n      }\n      .container-history-score {\n        font-size: 40px;\n        text-align: right;\n        padding: 10px 20px 20px 20px;\n      }\n      `;
        shadow.appendChild(div);
        shadow.appendChild(style);
    }
});

},{}]},["8uBhv","4aleK"], "4aleK", "parcelRequire93c5")

//# sourceMappingURL=index.b31310b1.js.map
