var canvas = document.querySelector("canvas#background");
			var ctx = canvas.getContext("2d");

			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;

			var W = canvas.width;
			var H = canvas.height;

			function Particle(){
				
				this.x = Math.random()*W;
				this.y = Math.random()*H;
				this.vx = Math.random()*5;
				this.vy = Math.random()*5;
				this.particleSize = Math.random()*3;
				this.radius = this.particleSize/2;
				this.opacityLimit = Math.random();
				this.opacity = 0;

				var basex = this.x;
				var variance = Math.random()*80;

				this.draw = function(){
					ctx.beginPath();
					ctx.fillStyle = this.color;
					ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
					ctx.fill();

					this.y += this.vy;
					this.x = (Math.sin((this.y/360)*Math.PI) * (this.vx + variance)) + basex;

					if (this.opacity < this.opacityLimit){
						this.opacity += 0.1;
						this.color = "rgba(200,200,200,"+ this.opacity +")";
					}
					if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) {
						particles.splice(particles.indexOf(this), 1);
					}
				}	
			}

			var particles = [];

			setInterval(function(){

				ctx.clearRect(0, 0, W, H);
				particles.push(new Particle());
				for (var i = 0; i < particles.length; i++){
					particles[i].draw();
				}

			}, 20);
