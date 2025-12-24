// ===== Shooting Stars Animation =====
const canvas = document.getElementById('shootingStars');
const ctx = canvas.getContext('2d');

let w, h;

function resize(){
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
resize();

const stars = [];

function spawnStar(){
  stars.push({
    x: Math.random() * w,
    y: Math.random() * h * 0.5,
    vx: 6 + Math.random() * 4,
    vy: 2 + Math.random() * 2,
    life: 0
  });
}

function animate(){
  ctx.clearRect(0,0,w,h);

  for(let i = stars.length - 1; i >= 0; i--){
    const s = stars[i];
    s.x += s.vx;
    s.y += s.vy;
    s.life++;

    ctx.strokeStyle = 'rgba(180,200,255,0.8)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(s.x, s.y);
    ctx.lineTo(s.x - s.vx * 4, s.y - s.vy * 4);
    ctx.stroke();

    if(s.x > w || s.y > h || s.life > 60){
      stars.splice(i,1);
    }
  }

  requestAnimationFrame(animate);
}

setInterval(spawnStar, 900);
animate();
