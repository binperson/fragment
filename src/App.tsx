import React, { useEffect, useRef } from 'react';
import { Model, shape } from './lib'
import RenderContext from './lib/RenderContext'
import './App.css';

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
		if (canvasRef && canvasRef.current) {

      const gl = RenderContext.getGL()
      const mesh = shape.d2_f(100, 100, 100, 150, 30)
      const model = new Model(mesh)
      model.setVectorUniform('u_color', [
        Math.random(),
        Math.random(),
        Math.random(),
        1.0
      ])
      // 分辨率
      model.setVectorUniform('u_resolution', [
        gl.canvas.width,
        gl.canvas.height
      ])
      model.draw()
    }
	})
  return (
    <div className="App">
      <canvas width="400" height="300" ref={ canvasRef } id="canvas"></canvas>
      
    </div>
  );
}

export default App;
