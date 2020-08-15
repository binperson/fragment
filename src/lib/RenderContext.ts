import { initGL } from './boot/initGL';
import { initProgram } from './boot/initProgram';


export default class RenderContext {
  static gl: WebGLRenderingContext
  static program: WebGLProgram

  static init() {
    if (RenderContext.gl) return;

    const gl = initGL();
    const program = initProgram(gl);
    // gl.canvas.width = gl.canvas.clientWidth
    // gl.canvas.height = gl.canvas.clientHeight
    RenderContext.gl = gl;
    RenderContext.program = program;
  }

  static getGL(): WebGLRenderingContext {
    RenderContext.init();
    return RenderContext.gl;
  }

  static getProgram(): WebGLProgram {
    RenderContext.init();
    return RenderContext.program;
  }
}