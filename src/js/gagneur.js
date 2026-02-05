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

