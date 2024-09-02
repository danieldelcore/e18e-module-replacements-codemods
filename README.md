# e18e/module-replacements-codemods

Runnable versions of module-replacements-codemods repo via [@hypermod/cli](https://www.hypermod.io/docs/tools/cli)

## Credits

This project simply redistributes codemods from the [es-tooling/module-replacements-codemods](https://github.com/es-tooling/module-replacements-codemods).

Full credit to the authors and community for this work.

## How to use

### Run `array-from` codemod

```
$ npx @hypermod/cli --packages @hypermod/e18e#array-from path/to/target/files
```

### List available codemods

```
$ npx @hypermod/cli list @hypermod/e18e#array-from path/to/target/files
```

## Complete list of codemods

<!-- CODEGENSTART -->

| Hypermod key | Source |
| ------------ | ------- |
| `@hypermod/e18e#abort-controller` | [abort-controller](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/abort-controller) |
| `@hypermod/e18e#array-buffer-byte-length` | [array-buffer-byte-length](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array-buffer-byte-length) |
| `@hypermod/e18e#array-every` | [array-every](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array-every) |
| `@hypermod/e18e#array-includes` | [array-includes](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array-includes) |
| `@hypermod/e18e#array-map` | [array-map](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array-map) |
| `@hypermod/e18e#array.from` | [array.from](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array.from) |
| `@hypermod/e18e#array.of` | [array.of](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array.of) |
| `@hypermod/e18e#array.prototype.at` | [array.prototype.at](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array.prototype.at) |
| `@hypermod/e18e#array.prototype.concat` | [array.prototype.concat](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array.prototype.concat) |
| `@hypermod/e18e#array.prototype.copywithin` | [array.prototype.copywithin](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array.prototype.copywithin) |
| `@hypermod/e18e#array.prototype.entries` | [array.prototype.entries](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array.prototype.entries) |
| `@hypermod/e18e#array.prototype.every` | [array.prototype.every](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array.prototype.every) |
| `@hypermod/e18e#array.prototype.filter` | [array.prototype.filter](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array.prototype.filter) |
| `@hypermod/e18e#array.prototype.find` | [array.prototype.find](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array.prototype.find) |
| `@hypermod/e18e#array.prototype.findindex` | [array.prototype.findindex](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array.prototype.findindex) |
| `@hypermod/e18e#array.prototype.findlast` | [array.prototype.findlast](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array.prototype.findlast) |
| `@hypermod/e18e#array.prototype.findlastindex` | [array.prototype.findlastindex](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array.prototype.findlastindex) |
| `@hypermod/e18e#array.prototype.flat` | [array.prototype.flat](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array.prototype.flat) |
| `@hypermod/e18e#array.prototype.flatmap` | [array.prototype.flatmap](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array.prototype.flatmap) |
| `@hypermod/e18e#array.prototype.foreach` | [array.prototype.foreach](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array.prototype.foreach) |
| `@hypermod/e18e#array.prototype.indexof` | [array.prototype.indexof](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array.prototype.indexof) |
| `@hypermod/e18e#array.prototype.join` | [array.prototype.join](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array.prototype.join) |
| `@hypermod/e18e#array.prototype.keys` | [array.prototype.keys](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array.prototype.keys) |
| `@hypermod/e18e#array.prototype.lastindexof` | [array.prototype.lastindexof](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array.prototype.lastindexof) |
| `@hypermod/e18e#array.prototype.map` | [array.prototype.map](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array.prototype.map) |
| `@hypermod/e18e#array.prototype.push` | [array.prototype.push](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array.prototype.push) |
| `@hypermod/e18e#array.prototype.reduce` | [array.prototype.reduce](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array.prototype.reduce) |
| `@hypermod/e18e#array.prototype.reduceright` | [array.prototype.reduceright](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array.prototype.reduceright) |
| `@hypermod/e18e#array.prototype.slice` | [array.prototype.slice](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array.prototype.slice) |
| `@hypermod/e18e#array.prototype.some` | [array.prototype.some](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array.prototype.some) |
| `@hypermod/e18e#array.prototype.splice` | [array.prototype.splice](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array.prototype.splice) |
| `@hypermod/e18e#array.prototype.toreversed` | [array.prototype.toreversed](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array.prototype.toreversed) |
| `@hypermod/e18e#array.prototype.tosorted` | [array.prototype.tosorted](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array.prototype.tosorted) |
| `@hypermod/e18e#array.prototype.tospliced` | [array.prototype.tospliced](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array.prototype.tospliced) |
| `@hypermod/e18e#array.prototype.unshift` | [array.prototype.unshift](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array.prototype.unshift) |
| `@hypermod/e18e#array.prototype.values` | [array.prototype.values](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array.prototype.values) |
| `@hypermod/e18e#array.prototype.with` | [array.prototype.with](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/array.prototype.with) |
| `@hypermod/e18e#arraybuffer.prototype.slice` | [arraybuffer.prototype.slice](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/arraybuffer.prototype.slice) |
| `@hypermod/e18e#chalk` | [chalk](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/chalk) |
| `@hypermod/e18e#clone-regexp` | [clone-regexp](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/clone-regexp) |
| `@hypermod/e18e#concat-map` | [concat-map](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/concat-map) |
| `@hypermod/e18e#data-view-buffer` | [data-view-buffer](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/data-view-buffer) |
| `@hypermod/e18e#data-view-byte-length` | [data-view-byte-length](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/data-view-byte-length) |
| `@hypermod/e18e#data-view-byte-offset` | [data-view-byte-offset](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/data-view-byte-offset) |
| `@hypermod/e18e#date` | [date](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/date) |
| `@hypermod/e18e#deep-equal` | [deep-equal](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/deep-equal) |
| `@hypermod/e18e#define-properties` | [define-properties](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/define-properties) |
| `@hypermod/e18e#error-cause` | [error-cause](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/error-cause) |
| `@hypermod/e18e#es-aggregate-error` | [es-aggregate-error](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/es-aggregate-error) |
| `@hypermod/e18e#es-define-property` | [es-define-property](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/es-define-property) |
| `@hypermod/e18e#es-errors` | [es-errors](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/es-errors) |
| `@hypermod/e18e#es-get-iterator` | [es-get-iterator](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/es-get-iterator) |
| `@hypermod/e18e#es-set-tostringtag` | [es-set-tostringtag](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/es-set-tostringtag) |
| `@hypermod/e18e#es-shim-unscopables` | [es-shim-unscopables](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/es-shim-unscopables) |
| `@hypermod/e18e#es-string-html-methods` | [es-string-html-methods](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/es-string-html-methods) |
| `@hypermod/e18e#filter-array` | [filter-array](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/filter-array) |
| `@hypermod/e18e#for-each` | [for-each](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/for-each) |
| `@hypermod/e18e#function-bind` | [function-bind](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/function-bind) |
| `@hypermod/e18e#function.prototype.name` | [function.prototype.name](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/function.prototype.name) |
| `@hypermod/e18e#functions-have-names` | [functions-have-names](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/functions-have-names) |
| `@hypermod/e18e#get-symbol-description` | [get-symbol-description](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/get-symbol-description) |
| `@hypermod/e18e#global` | [global](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/global) |
| `@hypermod/e18e#gopd` | [gopd](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/gopd) |
| `@hypermod/e18e#has` | [has](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/has) |
| `@hypermod/e18e#has-own-prop` | [has-own-prop](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/has-own-prop) |
| `@hypermod/e18e#has-proto` | [has-proto](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/has-proto) |
| `@hypermod/e18e#has-symbols` | [has-symbols](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/has-symbols) |
| `@hypermod/e18e#has-tostringtag` | [has-tostringtag](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/has-tostringtag) |
| `@hypermod/e18e#hasown` | [hasown](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/hasown) |
| `@hypermod/e18e#index-of` | [index-of](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/index-of) |
| `@hypermod/e18e#is-array-buffer` | [is-array-buffer](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/is-array-buffer) |
| `@hypermod/e18e#is-boolean-object` | [is-boolean-object](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/is-boolean-object) |
| `@hypermod/e18e#is-builtin-module` | [is-builtin-module](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/is-builtin-module) |
| `@hypermod/e18e#is-date-object` | [is-date-object](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/is-date-object) |
| `@hypermod/e18e#is-even` | [is-even](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/is-even) |
| `@hypermod/e18e#is-nan` | [is-nan](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/is-nan) |
| `@hypermod/e18e#is-negative-zero` | [is-negative-zero](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/is-negative-zero) |
| `@hypermod/e18e#is-npm` | [is-npm](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/is-npm) |
| `@hypermod/e18e#is-number` | [is-number](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/is-number) |
| `@hypermod/e18e#is-number-object` | [is-number-object](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/is-number-object) |
| `@hypermod/e18e#is-odd` | [is-odd](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/is-odd) |
| `@hypermod/e18e#is-plain-object` | [is-plain-object](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/is-plain-object) |
| `@hypermod/e18e#is-primitive` | [is-primitive](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/is-primitive) |
| `@hypermod/e18e#is-regexp` | [is-regexp](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/is-regexp) |
| `@hypermod/e18e#is-string` | [is-string](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/is-string) |
| `@hypermod/e18e#is-travis` | [is-travis](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/is-travis) |
| `@hypermod/e18e#is-whitespace` | [is-whitespace](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/is-whitespace) |
| `@hypermod/e18e#is-windows` | [is-windows](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/is-windows) |
| `@hypermod/e18e#iterate-value` | [iterate-value](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/iterate-value) |
| `@hypermod/e18e#last-index-of` | [last-index-of](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/last-index-of) |
| `@hypermod/e18e#left-pad` | [left-pad](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/left-pad) |
| `@hypermod/e18e#math.acosh` | [math.acosh](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/math.acosh) |
| `@hypermod/e18e#math.atanh` | [math.atanh](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/math.atanh) |
| `@hypermod/e18e#math.cbrt` | [math.cbrt](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/math.cbrt) |
| `@hypermod/e18e#math.clz32` | [math.clz32](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/math.clz32) |
| `@hypermod/e18e#math.f16round` | [math.f16round](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/math.f16round) |
| `@hypermod/e18e#math.fround` | [math.fround](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/math.fround) |
| `@hypermod/e18e#math.imul` | [math.imul](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/math.imul) |
| `@hypermod/e18e#math.log10` | [math.log10](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/math.log10) |
| `@hypermod/e18e#math.log1p` | [math.log1p](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/math.log1p) |
| `@hypermod/e18e#math.sign` | [math.sign](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/math.sign) |
| `@hypermod/e18e#md5` | [md5](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/md5) |
| `@hypermod/e18e#number.isfinite` | [number.isfinite](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/number.isfinite) |
| `@hypermod/e18e#number.isinteger` | [number.isinteger](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/number.isinteger) |
| `@hypermod/e18e#number.isnan` | [number.isnan](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/number.isnan) |
| `@hypermod/e18e#number.issafeinteger` | [number.issafeinteger](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/number.issafeinteger) |
| `@hypermod/e18e#number.parsefloat` | [number.parsefloat](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/number.parsefloat) |
| `@hypermod/e18e#number.parseint` | [number.parseint](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/number.parseint) |
| `@hypermod/e18e#number.prototype.toexponential` | [number.prototype.toexponential](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/number.prototype.toexponential) |
| `@hypermod/e18e#object-assign` | [object-assign](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/object-assign) |
| `@hypermod/e18e#object-is` | [object-is](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/object-is) |
| `@hypermod/e18e#object-keys` | [object-keys](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/object-keys) |
| `@hypermod/e18e#object.assign` | [object.assign](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/object.assign) |
| `@hypermod/e18e#object.defineproperties` | [object.defineproperties](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/object.defineproperties) |
| `@hypermod/e18e#object.entries` | [object.entries](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/object.entries) |
| `@hypermod/e18e#object.fromentries` | [object.fromentries](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/object.fromentries) |
| `@hypermod/e18e#object.getprototypeof` | [object.getprototypeof](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/object.getprototypeof) |
| `@hypermod/e18e#object.hasown` | [object.hasown](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/object.hasown) |
| `@hypermod/e18e#object.keys` | [object.keys](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/object.keys) |
| `@hypermod/e18e#object.values` | [object.values](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/object.values) |
| `@hypermod/e18e#pad-left` | [pad-left](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/pad-left) |
| `@hypermod/e18e#parseint` | [parseint](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/parseint) |
| `@hypermod/e18e#promise.allsettled` | [promise.allsettled](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/promise.allsettled) |
| `@hypermod/e18e#promise.any` | [promise.any](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/promise.any) |
| `@hypermod/e18e#promise.prototype.finally` | [promise.prototype.finally](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/promise.prototype.finally) |
| `@hypermod/e18e#qs` | [qs](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/qs) |
| `@hypermod/e18e#reflect.getprototypeof` | [reflect.getprototypeof](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/reflect.getprototypeof) |
| `@hypermod/e18e#reflect.ownkeys` | [reflect.ownkeys](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/reflect.ownkeys) |
| `@hypermod/e18e#regexp.prototype.flags` | [regexp.prototype.flags](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/regexp.prototype.flags) |
| `@hypermod/e18e#setprototypeof` | [setprototypeof](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/setprototypeof) |
| `@hypermod/e18e#split-lines` | [split-lines](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/split-lines) |
| `@hypermod/e18e#string.prototype.at` | [string.prototype.at](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/string.prototype.at) |
| `@hypermod/e18e#string.prototype.lastindexof` | [string.prototype.lastindexof](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/string.prototype.lastindexof) |
| `@hypermod/e18e#string.prototype.matchall` | [string.prototype.matchall](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/string.prototype.matchall) |
| `@hypermod/e18e#string.prototype.padend` | [string.prototype.padend](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/string.prototype.padend) |
| `@hypermod/e18e#string.prototype.padleft` | [string.prototype.padleft](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/string.prototype.padleft) |
| `@hypermod/e18e#string.prototype.padright` | [string.prototype.padright](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/string.prototype.padright) |
| `@hypermod/e18e#string.prototype.padstart` | [string.prototype.padstart](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/string.prototype.padstart) |
| `@hypermod/e18e#string.prototype.repeat` | [string.prototype.repeat](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/string.prototype.repeat) |
| `@hypermod/e18e#string.prototype.replaceall` | [string.prototype.replaceall](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/string.prototype.replaceall) |
| `@hypermod/e18e#string.prototype.split` | [string.prototype.split](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/string.prototype.split) |
| `@hypermod/e18e#string.prototype.substr` | [string.prototype.substr](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/string.prototype.substr) |
| `@hypermod/e18e#string.prototype.trim` | [string.prototype.trim](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/string.prototype.trim) |
| `@hypermod/e18e#string.prototype.trimend` | [string.prototype.trimend](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/string.prototype.trimend) |
| `@hypermod/e18e#string.prototype.trimleft` | [string.prototype.trimleft](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/string.prototype.trimleft) |
| `@hypermod/e18e#string.prototype.trimright` | [string.prototype.trimright](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/string.prototype.trimright) |
| `@hypermod/e18e#string.prototype.trimstart` | [string.prototype.trimstart](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/string.prototype.trimstart) |
| `@hypermod/e18e#string.raw` | [string.raw](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/string.raw) |
| `@hypermod/e18e#symbol.prototype.description` | [symbol.prototype.description](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/symbol.prototype.description) |
| `@hypermod/e18e#traverse` | [traverse](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/traverse) |
| `@hypermod/e18e#typed-array-buffer` | [typed-array-buffer](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/typed-array-buffer) |
| `@hypermod/e18e#typed-array-byte-length` | [typed-array-byte-length](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/typed-array-byte-length) |
| `@hypermod/e18e#typed-array-byte-offset` | [typed-array-byte-offset](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/typed-array-byte-offset) |
| `@hypermod/e18e#typed-array-length` | [typed-array-length](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/typed-array-length) |
| `@hypermod/e18e#typedarray.prototype.slice` | [typedarray.prototype.slice](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/typedarray.prototype.slice) |
| `@hypermod/e18e#xtend` | [xtend](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/xtend) |
<!-- CODEGENEND -->
