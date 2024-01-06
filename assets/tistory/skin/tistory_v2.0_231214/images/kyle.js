// const COPY_ERROR_MESSAGE = '코드를 복사할 수 없습니다. 다시 시도해 주세요.';

// const copyBlockCode = async (target = null) => {
//   if (!target) return;
//   try {
//     const code = decodeURI(target.dataset.code);

//     await navigator.clipboard.writeText(code);
//   } catch (error) {
//     alert(COPY_ERROR_MESSAGE);
//     console.error(error);
//   }
// };

window.addEventListener('load', () => {
  // #region 코드블럭 활성화
  const codeBlocks = document.querySelectorAll('pre > code');

  for (const codeBlock of codeBlocks) {
    const codes = codeBlock.innerHTML.match(/(.*)(\n|.*$)/g);

    const processedCodes = codes.reduce((prevCodes, curCode) => prevCodes + `<div class="line">${curCode}</div>`, '');

    const copyButton = `<button class="copy-btn"
    data-code="${encodeURI(codeBlock.textContent)}"
    onclick="copyBlockCode(this)"><i class="fa-regular fa-copy"></i></button>`;

    const codeBody = `<div class="code-body">${processedCodes}</div>`;

    const codeHeader = `<div class="code-header"><span class="red btn"></span><span class="yellow btn"></span><span class="green btn"></span>${copyButton}</div>`;

    codeBlock.innerHTML = codeHeader + codeBody;
  }
  // #endregion

  // #region p,span 태그 빈칸 삭제
  const elements = document.querySelectorAll('p, span');
  const spaces = [];

  for (let i = 0; i < elements.length; i++) {
    if (elements[i].innerHTML === '&nbsp;') {
      spaces.push(elements[i]);
    }
  }

  spaces.forEach((item) => item.classList.add('hidden'));
  // #endregion

  // #region 게시글 네임카드 삭제
  const namecard = document.querySelector('.tt_box_namecard');
  namecard.classList.add('hidden');
});
// #endregion

/* #region 배경 CANVAS */
/**
window.addEventListener('load', createShape());
window.addEventListener('resize', createShape());
function createShape() {
  var ShapeController;

  ShapeController = function () {
    class ShapeController {
      constructor() {
        this.draw = this.draw.bind(this);
        this.render = this.render.bind(this);
      }

      init() {
        this.getElements();
        this.initShapes();
        return this.render();
      }

      getElements() {
        this.el = document.getElementsByTagName('canvas')[0];
        return (this.stage = this.el.getContext('2d'));
      }

      initShapes() {
        var i;
        i = 0;
        while (i < this.data.amount) {
          this.addShape();
          i++;
        }
        return console.log(this.shapes);
      }

      addShape(type, color, x, y, r, xvel, yvel, rvel) {
        var buffer, colors, dir, types, vel;
        buffer = this.data.scale * 250;
        types = Object.getOwnPropertyNames(this.data.shapes);
        if (type === void 0 || types.indexOf(type) === -1) {
          type = types[Math.floor(Math.random() * types.length)];
        }
        colors = this.data.colors;
        if (color === void 0 || colors.indexOf(color) === -1) {
          color = colors[Math.floor(Math.random() * colors.length)];
        }
        if (x === void 0) {
          x = -buffer + Math.random() * (window.innerWidth + 2 * buffer);
        }
        if (y === void 0) {
          y = -buffer + Math.random() * (window.innerHeight + 2 * buffer);
        }
        if (r === void 0) {
          r = Math.random() * 360;
        }
        if (xvel === void 0) {
          dir = 0;
          vel = this.data.minVel + Math.random() * (this.data.maxVel - this.data.minVel);
          if (Math.random() > 0.5) {
            dir = -1;
          } else {
            dir = 1;
          }
          xvel = dir * vel;
        }
        if (yvel === void 0) {
          dir = 0;
          vel = this.data.minVel + Math.random() * (this.data.maxVel - this.data.minVel);
          if (Math.random() > 0.5) {
            dir = -1;
          } else {
            dir = 1;
          }
          yvel = dir * vel;
        }
        if (rvel === void 0) {
          dir = 0;
          vel = this.data.minVel + Math.random() * (this.data.maxVel - this.data.minVel);
          if (Math.random() > 0.5) {
            dir = -1;
          } else {
            dir = 1;
          }
          rvel = dir * vel;
        }
        return this.shapes.push({
          type: type,
          color: color,
          mult: 0.5 + Math.random() * 2,
          pos: {
            x: x,
            y: y,
            r: r,
          },
          vel: {
            x: xvel,
            y: yvel,
            r: rvel,
          },
        });
      }

      repo(shape, rate) {
        var buffer, color, colors, shuffle, type, types;
        buffer = this.data.scale * 250;
        shape.pos.x += (shape.vel.x + this.vel.scrollX * shape.mult) * (rate / (1000 / 60));
        shape.pos.y += (shape.vel.y + this.vel.scrollY * shape.mult) * (rate / (1000 / 60));
        shape.pos.r += (shape.vel.r / 2) * (rate / (1000 / 60));
        shuffle = false;
        if (shape.pos.x > window.innerWidth + buffer) {
          shape.pos.x = -buffer;
          shuffle = true;
        }
        if (shape.pos.x < -buffer) {
          shape.pos.x = window.innerWidth + buffer;
          shuffle = true;
        }
        if (shape.pos.y > window.innerHeight + buffer) {
          shape.pos.y = -buffer;
          shuffle = true;
        }
        if (shape.pos.y < -buffer) {
          shape.pos.y = window.innerHeight + buffer;
          shuffle = true;
        }
        if (shape.pos.r > 360) {
          shape.pos.r -= 360;
        }
        if (shape.pos.r < 0) {
          shape.pos.r += 360;
        }
        if (shuffle === true && this.data.allowShuffle === true) {
          types = Object.getOwnPropertyNames(this.data.shapes);
          colors = this.data.colors;
          type = types[Math.floor(Math.random() * types.length)];
          color = colors[Math.floor(Math.random() * colors.length)];
          shape.type = type;
          return (shape.color = color);
        }
      }

      draw(shape) {
        var c, i, m, p, s, x, y;
        c = this.stage;
        s = shape;
        p = this.data.shapes[s.type];
        m = this.data.scale * 200;
        i = 0;
        c.save();
        c.fillStyle = s.color;
        c.translate(s.pos.x, s.pos.y);
        c.rotate(s.pos.r * (Math.PI / 180));
        c.beginPath();
        if (p.length > 1) {
          while (i < p.length) {
            x = (p[i].x - 0.5) * m;
            y = (p[i].y - 0.5) * m;
            if (i === 0) {
              c.moveTo(x, y);
            } else {
              c.lineTo(x, y);
            }
            i++;
          }
        } else {
          c.arc(0, 0, p[0] * m * 0.5, 0, 2 * Math.PI);
        }
        c.fill();
        return c.restore();
      }

      scale() {
        if (this.width !== window.innerWidth || this.height !== window.innerHeight) {
          this.width = window.innerWidth;
          this.height = window.innerHeight;
          this.el.width = document.body.clientWidth;
          return (this.el.height = document.body.clientHeight);
        }
      }

      friction(rate) {
        if (Math.abs(this.vel.scrollX) > 0.01) {
          this.vel.scrollX = Math.round(this.vel.scrollX * 0.95 * 1000) / 1000;
        } else {
          this.vel.scrollX = 0;
        }
        if (Math.abs(this.vel.scrollY) > 0.01) {
          return (this.vel.scrollY = Math.round(this.vel.scrollY * 0.95 * 1000) / 1000);
        } else {
          return (this.vel.scrollY = 0);
        }
      }

      render() {
        var elapsed, i;
        i = 0;
        this.scale();
        elapsed = new Date().getTime();
        this.stage.clearRect(0, 0, this.width, this.height);
        this.friction(elapsed - this.frame);
        while (i < this.shapes.length) {
          this.repo(this.shapes[i], elapsed - this.frame);
          this.draw(this.shapes[i]);
          i++;
        }
        this.frame = elapsed;
        return requestAnimationFrame(this.render);
      }
    }

    ShapeController.prototype.shapes = [];

    ShapeController.prototype.frame = new Date().getTime();

    ShapeController.prototype.vel = {
      scrollX: 0,
      scrollY: 0,
    };

    ShapeController.prototype.data = {
      amount: 15,
      scale: 0.3,
      minVel: 0.2,
      maxVel: 1.0,
      allowShuffle: true,
      colors: ['#f1c40f', '#2ecc71', '#3498db', '#e74c3c'],
      shapes: {
        rectangle: [
          {
            x: 0.33,
            y: -0.33,
          },
          {
            x: 0.66,
            y: -0.33,
          },
          {
            x: 0.66,
            y: 1.33,
          },
          {
            x: 0.33,
            y: 1.33,
          },
          {
            x: 0.33,
            y: -0.33,
          },
        ],
        triangle: [
          {
            x: 0.5,
            y: 0.07,
          },
          {
            x: 1.0,
            y: 0.93,
          },
          {
            x: 0.0,
            y: 0.93,
          },
          {
            x: 0.5,
            y: 0.07,
          },
        ],
        circle: [1],
        cross: [
          {
            x: 0.33,
            y: 0.0,
          },
          {
            x: 0.66,
            y: 0.0,
          },
          {
            x: 0.66,
            y: 0.33,
          },
          {
            x: 1.0,
            y: 0.33,
          },
          {
            x: 1.0,
            y: 0.66,
          },
          {
            x: 0.66,
            y: 0.66,
          },
          {
            x: 0.66,
            y: 1.0,
          },
          {
            x: 0.33,
            y: 1.0,
          },
          {
            x: 0.33,
            y: 0.66,
          },
          {
            x: 0.0,
            y: 0.66,
          },
          {
            x: 0.0,
            y: 0.33,
          },
          {
            x: 0.33,
            y: 0.33,
          },
          {
            x: 0.33,
            y: 0.0,
          },
        ],
      },
    };

    return ShapeController;
  }.call(this);

  window.App = new ShapeController();

  App.init();
}
*/
/* #endregion */
