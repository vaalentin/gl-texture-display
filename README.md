# GL Texture display

Display a WebGL texture. Usefull to display the content of a [fbo](https://github.com/vaalentin/gl-fbo).

## Installation

```sh
$ npm install --save @vaalentin/gl-texture-display
```

## Usage

```js
import TextureDisplay from '@vaalentin/gl-texture-display';

// set gl and texture

const display = new TextureDisplay(gl, texture);

// then in the render loop
display.render();
```

## API

#### `display = new TextureDisplay(gl, texture [, width, height, left, top])`

Create a new instance, where:
- `gl` is the [WebGL context](https://github.com/vaalentin/gl-context).
- `texture` is a [Texture](https://github.com/vaalentin/gl-context)
- `width` (default `0.25`), `height` (default `0.25`), `left` (default `0.75`) and `top` (default `0`)
  are all normalized values (`1` being fullscreen).

#### `display.render([unit])`

Render using the given `unit` (default is `0`).

#### `display.dispose()`

Delete instance. Let the `texture` intact.

## License

MIT, see [LICENSE.md](https://github.com/vaalentin/gl-texture-display/blob/master/LICENSE.md) for more details.
