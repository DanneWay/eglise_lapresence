let btn_toggle_menu = document.querySelector('#toggle-menu-btn');
let menu_box = document.querySelector('.menu-box');
let menu_content = document.querySelector('.menu-content');
let menu_items = menu_content.querySelectorAll('ul li a');

btn_toggle_menu.addEventListener("click", function(){
	if(this.classList.contains("fa-bars")){
		this.classList.remove('fa-bars');
		this.classList.add('fa-times');

		if(menu_box.classList.contains('hidden')){
			menu_box.classList.remove('hidden');
		}

		setTimeout(()=>{
			if(!menu_content.classList.contains('open')){
				menu_content.classList.add('open');
			}
		},50);

	}else if(this.classList.contains('fa-times')){
		this.classList.remove('fa-times');
		this.classList.add('fa-bars');


		if(menu_content.classList.contains('open')){
			menu_content.classList.remove('open');
		}
		setTimeout(()=>{
			if(!menu_box.classList.contains('hidden')){
				menu_box.classList.add('hidden');
			}
		},500);
	}
});

menu_items.forEach((item)=>{
	item.addEventListener('click', function(){
		if(btn_toggle_menu.classList.contains('fa-times')){
			btn_toggle_menu.classList.remove('fa-times');
			btn_toggle_menu.classList.add('fa-bars');

			if(menu_content.classList.contains('open')){
				menu_content.classList.remove('open');
			}
			setTimeout(()=>{
				if(!menu_box.classList.contains('hidden')){
					menu_box.classList.add('hidden');
				}
			},500);
		}
	});
});


// Animation au scroll
const reveal = document.querySelectorAll('.anime-reveal');

function animateReveal(el){
	let start = null;
	const duration = 800;
	const fromY = 80;

	function easeOutCubic(t){
		return 1 - Math.pow(1 - t, 3);
	}

	function step(timestamp){
		if(!start) start = timestamp;
		const progress = Math.min((timestamp - start) / duration, 1);
		const eased = easeOutCubic(progress);

		el.style.opacity = eased;
		el.style.transform = `translateY(${fromY * (1 - eased)}px)`;

		if(progress < 1){
			requestAnimationFrame(step);
		}
	}

	requestAnimationFrame(step);
}

const observer = new IntersectionObserver((entries)=>{
		entries.forEach(entry =>{
			if(entry.isIntersecting){
				animateReveal(entry.target);
				observer.unobserve(entry.target);
			}
		});
	}, {
		threshold: 0.2
	}
);

reveal.forEach(el => observer.observe(el));


// annimation au scroll pour la section programme (cards)
const mysection = document.querySelector('.mysection');
const cards = mysection.querySelectorAll(".cards");

const mysection2 = document.querySelector('.mysection2');
const cards2 = mysection2.querySelectorAll(".cards2");

const mysection3 = document.querySelector('.mysection3');
const cards3 = mysection3.querySelectorAll(".cards3");

function animateCard(el, delay = 0){
	let start = null;
	const duration = 800;
	const fromY = 120;

	function easeOutBack(t){
		const c1 = 1.70158;
		const c3 = c1 + 1;

		return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
	}

	function step(timestamp){
		if(!start) start = timestamp + delay;

		const progress = Math.min((timestamp - start) / duration, 1);
		if(progress < 0){
			requestAnimationFrame(step);
			return;
		}

		const eased = easeOutBack(progress);
		el.style.opacity = Math.min(progress * 1.2, 1);
		el.style.transform = `translate3d(0, ${fromY * (1 - eased)}px, 0)`;

		if(progress < 1){
			requestAnimationFrame(step);
		}
	}

	requestAnimationFrame(step);
}
function initObserver(mycards){
	const obser = new IntersectionObserver((entries)=>{
			entries.forEach(entry =>{
				if(entry.isIntersecting){
					mycards.forEach((card, index)=>{
						animateCard(card, index * 100);
					});
					obser.unobserve(entry.target);
				}
			});
		}, {
			threshold: 0.3
		}
	);

	return obser;
}

observer2 = initObserver(cards); 
observer2.observe(mysection);

/*observer3 = initObserver(cards2); 
observer3.observe(mysection2);

observer4 = initObserver(cards3); 
observer4.observe(mysection3); */
