import test from 'tape';
import getGl from '@vaalentin/gl-context';
import Texture from '@vaalentin/gl-texture';
import TextureDisplay from '../src';

const canvas = document.createElement('canvas');
const gl = getGl(canvas);
const texture = new Texture(gl, gl.TEXTURE_2D, 512, 512);

test('should be instanciable', t => {
  t.plan(1);

  const display = new TextureDisplay(gl, texture);

  t.ok(display instanceof TextureDisplay, 'instance of TextureDisplay');
});

test('should bind texture, program and buffers when rendering', t => {
  t.plan(5);

  const display = new TextureDisplay(gl, texture);

  display.render(1);

  t.equal(gl.getParameter(gl.ACTIVE_TEXTURE), gl.TEXTURE1, 'correct active texture');
  t.equal(gl.getParameter(gl.TEXTURE_BINDING_2D), texture.texture, 'corrent texture');
  t.equal(gl.getParameter(gl.CURRENT_PROGRAM), display.program.program, 'correct program');
  t.equal(gl.getParameter(gl.ARRAY_BUFFER_BINDING), display.planeUvsBuffer.buffer, 'correct array buffer');
  t.equal(gl.getParameter(gl.ELEMENT_ARRAY_BUFFER_BINDING), display.planeFacesBuffer.buffer, 'corret element buffer');
});

test('should not delete texture when disposed', t => {
  t.plan(1);

  const display = new TextureDisplay(gl, texture);
  display.dispose();

  t.ok(texture.texture, 'texture still exists');
});

test.onFinish(window.close.bind(window));

