class AvatarConstructor extends HTMLElement {
    constructor() {
      super();
    }
      connectedCallback() {
        this.innerHTML = `
          <div>
            <label>Выберите цвет:</label>
            <input type="color" id="color-picker">
          </div>
          <div>
            <label>Выберите форму:</label>
            <select id="shape-selector">
              <option value="square">Квадрат</option>
              <option value="circle">Круг</option>
            </select>
          </div>
          <div>
            <label>Выберите размер:</label>
            <input type="range" id="size-slider" min="50" max="200" value="100">
          </div>
          <canvas id="avatar-canvas"></canvas>
        `

        const colorPicker = this.querySelector('#color-picker');
        const shapeSelector = this.querySelector('#shape-selector');
        const sizeSlider = this.querySelector('#size-slider');
        const canvas = this.querySelector('#avatar-canvas');
    
        colorPicker.addEventListener('input', () => {
          this.updateAvatar(canvas, colorPicker.value, shapeSelector.value, sizeSlider.value);
        });
    
        shapeSelector.addEventListener('change', () => {
          this.updateAvatar(canvas, colorPicker.value, shapeSelector.value, sizeSlider.value);
        });
    
        sizeSlider.addEventListener('input', () => {
          this.updateAvatar(canvas, colorPicker.value, shapeSelector.value, sizeSlider.value);
        });
      }
    
      updateAvatar(canvas, color, shape, size, image) {

        canvas.width = canvas.height = size;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, size, size);
        ctx.fillStyle = color;

        if (shape === 'square') {
          ctx.fillRect(0, 0, size, size);
        } 
        else {
          ctx.beginPath();
          ctx.arc(size / 2, size / 2, size / 2, 0, 2 * Math.PI);
          ctx.fill();
        }
      }
    }

    customElements.define('avatar-constructor', AvatarConstructor);