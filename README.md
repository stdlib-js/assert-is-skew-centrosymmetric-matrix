<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isSkewCentrosymmetricMatrix

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Test if a value is a [skew-centrosymmetric matrix][centrosymmetric-matrix].

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-skew-centrosymmetric-matrix
```

</section>

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var isSkewCentrosymmetricMatrix = require( '@stdlib/assert-is-skew-centrosymmetric-matrix' );
```

#### isSkewCentrosymmetricMatrix( value )

Tests if a value is a [skew-centrosymmetric matrix][centrosymmetric-matrix].

<!-- eslint-disable id-length -->

<!-- eslint-disable array-element-newline -->

```javascript
var ndarray = require( '@stdlib/ndarray-ctor' );

var buffer = [
    1, 2, 3,
    4, 0, -4,
    -3, -2, -1
];
var arr = ndarray( 'generic', buffer, [ 3, 3 ], [ 3, 1 ], 0, 'row-major' );

var bool = isSkewCentrosymmetricMatrix( arr );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable id-length -->

```javascript
var ndarray = require( '@stdlib/ndarray-ctor' );
var isSkewCentrosymmetricMatrix = require( '@stdlib/assert-is-skew-centrosymmetric-matrix' );

var arr = ndarray( 'generic', [ 2, 1, -1, -2 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
var out = isSkewCentrosymmetricMatrix( arr );
// returns true

out = isSkewCentrosymmetricMatrix( [ 1, 2, 3, 4 ] );
// returns false

out = isSkewCentrosymmetricMatrix( {} );
// returns false

out = isSkewCentrosymmetricMatrix( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-centrosymmetric-matrix`][@stdlib/assert/is-centrosymmetric-matrix]</span><span class="delimiter">: </span><span class="description">test if a value is a centrosymmetric matrix.</span>
-   <span class="package-name">[`@stdlib/assert/is-matrix-like`][@stdlib/assert/is-matrix-like]</span><span class="delimiter">: </span><span class="description">test if a value is a 2-dimensional ndarray-like object.</span>
-   <span class="package-name">[`@stdlib/assert/is-skew-symmetric-matrix`][@stdlib/assert/is-skew-symmetric-matrix]</span><span class="delimiter">: </span><span class="description">test if a value is a skew-symmetric matrix.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-skew-centrosymmetric-matrix.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-skew-centrosymmetric-matrix

[test-image]: https://github.com/stdlib-js/assert-is-skew-centrosymmetric-matrix/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/assert-is-skew-centrosymmetric-matrix/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-skew-centrosymmetric-matrix/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-skew-centrosymmetric-matrix?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-skew-centrosymmetric-matrix.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-skew-centrosymmetric-matrix/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-skew-centrosymmetric-matrix/main/LICENSE

[centrosymmetric-matrix]: https://en.wikipedia.org/wiki/Centrosymmetric_matrix

<!-- <related-links> -->

[@stdlib/assert/is-centrosymmetric-matrix]: https://github.com/stdlib-js/assert-is-centrosymmetric-matrix

[@stdlib/assert/is-matrix-like]: https://github.com/stdlib-js/assert-is-matrix-like

[@stdlib/assert/is-skew-symmetric-matrix]: https://github.com/stdlib-js/assert-is-skew-symmetric-matrix

<!-- </related-links> -->

</section>

<!-- /.links -->
