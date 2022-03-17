"use strict"
/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
export function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}

/* Проверка мобильного браузера */


const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};
// Меню бургер на десктопе(выпадающее меню)
const iconMenu = document.querySelector('.header__icon');
const menuBody = document.querySelector('.header__menu');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}
// меню бургер на мобилке
const iconMobile = document.querySelector('.mobile-body__icon');
const menuMobile = document.querySelector('.header__content-mobile');
if (iconMobile) {
	iconMobile.addEventListener("click", function (e) {
		iconMobile.classList.toggle('_mobile');
		menuMobile.classList.toggle('_mobile');
	});
}
//navigation swiper
window.onload = function () {
	var a = document.querySelector('#mouse1');
	a.onmouseover = function (e) {
		document.getElementById('blockone').style.border = '2px solid #33E6FF';
	}
	a.onmouseout = function (e) {
		document.getElementById('blockone').style.border = 'none';
	}

	var b = document.querySelector('#mouse2');
	b.onmouseover = function (e) {
		document.getElementById('blocktwo').style.border = '2px solid #33E6FF';
	}
	b.onmouseout = function (e) {
		document.getElementById('blocktwo').style.border = 'none';
	};
}
// SWIPER
let myImageSlider = new Swiper('.image-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	loop: true,
	speed: 1000,
	// autoplay: {
	// 	delay: 4000,
	// 	stopOnLastSlide: false,
	// 	disableOnInteraction: true,
	// },
});
let myFigureSlider = new Swiper('.figure-slider', {
	loop: true,
	speed: 1500,
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	// autoplay: {
	// 	delay: 4000,
	// 	stopOnLastSlide: false,
	// 	disableOnInteraction: true,
	// },
});
let myZadnikSlider = new Swiper('.zadnik-slider', {
	loop: true,
	speed: 1500,
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	// autoplay: {
	// 	delay: 4000,
	// 	stopOnLastSlide: false,
	// 	disableOnInteraction: true,
	// },
});
myImageSlider.controller.control = myFigureSlider;
myFigureSlider.controller.control = myImageSlider;
myImageSlider.controller.control = myZadnikSlider;
myZadnikSlider.controller.control = myImageSlider;
myZadnikSlider.controller.control = myFigureSlider;
myFigureSlider.controller.control = myZadnikSlider;

new Swiper('.journal-slider', {
	grabCursor: true,
	freeMode: true,
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true
	},
	navigation: {
		nextEl: '.swiper-button-next',
		// prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		// when window width is >= 400px
		320: {
			slidesPerView: 1.3,
			spaceBetween: 33,
			// slidesPerGroup: 1,
		},
		450: {
			slidesPerView: 1.3,
			spaceBetween: 32,
			// slidesPerGroup: 1,
		},
		// 500: {
		// 	slidesPerView: 1.4,
		// 	spaceBetween: 32,
		// 	// slidesPerGroup: 1,
		// },
		550: {
			slidesPerView: 1.5,
			spaceBetween: 32,
			// slidesPerGroup: 1,
		},
		650: {
			slidesPerView: 1.6,
			spaceBetween: 32,
			// slidesPerGroup: 2,
		},
		700: {
			slidesPerView: 1.8,
			spaceBetween: 32,
			slidesPerGroup: 1.1,
		},
		800: {
			slidesPerView: 2,
			spaceBetween: 32,
			slidesPerGroup: 1,
		},
		900: {
			slidesPerView: 2.3,
			spaceBetween: 32,
			slidesPerGroup: 1.7,
		},
		1100: {
			slidesPerView: 2.7,
			spaceBetween: 32,
			slidesPerGroup: 1.3,
			freeMode: false,
		},
		// when window width is >= 1235px
		1235: {
			slidesPerView: 3,
			spaceBetween: 32,
			slidesPerGroup: 1,
			freeMode: false,
		}
	}
});

new Swiper('.reviews-slider', {
	grabCursor: true,
	freeMode: true,
	spaceBetween: 33,
	navigation: {
		nextEl: '.swiper-button-next',
		// prevEl: '.swiper-button-prev',
	},
	slidesPerGroup: 1,
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 48,
			slidesPerGroup: 1,
		},
		400: {
			slidesPerView: 1.1,
			spaceBetween: 48,
			slidesPerGroup: 1,
		},
		450: {
			slidesPerView: 1.4,
			spaceBetween: 33,
			slidesPerGroup: 1,
		},
		500: {
			slidesPerView: 1.8,
			spaceBetween: 33,
			slidesPerGroup: 1,
		},
		600: {
			slidesPerView: 1.9,
			spaceBetween: 33,
			slidesPerGroup: 1,
		},
		650: {
			slidesPerView: 2.1,
			spaceBetween: 33,
			slidesPerGroup: 1,
		},
		700: {
			slidesPerView: 2.2,
			spaceBetween: 33,
			slidesPerGroup: 1,
		},
		800: {
			slidesPerView: 2.5,
			spaceBetween: 33,
			slidesPerGroup: 1,
		},
		900: {
			slidesPerView: 2.8,
			spaceBetween: 33,
			slidesPerGroup: 1,
		},
		1100: {
			slidesPerView: 3.5,
			spaceBetween: 33,
			slidesPerGroup: 1,
			freeMode: false,
		},
		1235: {
			slidesPerView: 4,
			spaceBetween: 33,
			slidesPerGroup: 1,
			freeMode: false,
		}
	}
});
// POPUP
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__column')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});

(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();
// ====================VIDEO
document.querySelector('.click-for-video').onclick = function () {
	this.style.display = 'none';
	document.querySelector('div.youtube').style.display = 'block';
	document.querySelector('iframe.youtube')
		.src = 'https://player.vimeo.com/video/651897356?h=f3b32933cf&title=0&byline=0&portrait=0&autoplay=1';
};
// 

//=============================CHECKBOX
$(document).ready(function () {
	$.each($('.checkbox'), function (index, val) {
		if ($(this).find('input').prop('checked') == true) {
			$(this).addClass('active');
		}
	});
	$(document).on('click', '.checkbox', function (event) {
		if ($(this).hasClass('active')) {
			$(this).find('input').prop('checked', false);
		} else {
			$(this).find('input').prop('checked', true);
		}
		$(this).toggleClass('active');

		return false;
	});
});

// progress bar
// const slider = document.querySelector(".slider")
// const bar = document.querySelector(".progress-bar")
// slider.oninput = () => {
// 	let value = slider.value;
// 	bar.style.width = value + '%';
// }

document.addEventListener('DOMContentLoaded', () => {
	new CustomSelect('#select-1', {
		name: 'car',
		targetValue: 'avto',
		options: [
			['avto', 'Автомобиль'],
			['flat', 'Квартира'],
			['house', 'Дом'],
			['realty', 'Ком. недвижимость']
		],
		onSelected(select, option) {
			// выбранное значение
			// console.log(`Выбранное значение: ${select.value}`);
			// индекс выбранной опции
			// console.log(`Индекс выбранной опции: ${select.selectedIndex}`);
			// выбранный текст опции
			const text = option ? option.textContent : '';
			// console.log(`Выбранный текст опции: ${text}`);
		},
	});
	document.querySelector('.select').addEventListener('select.change', (e) => {
		const btn = e.target.querySelector('.select__toggle');
		// выбранное значение
		// console.log(`Выбранное значение: ${btn.value}`);
		// индекс выбранной опции
		// console.log(`Индекс выбранной опции: ${btn.dataset.index}`);
		// выбранный текст опции
		const selected = e.target.querySelector('.select__option_selected');
		const text = selected ? selected.textContent : '';
		// console.log(`Выбранный текст опции: ${text}`);
	});
})

const CLASS_NAME_SELECT = 'select';
const CLASS_NAME_ACTIVE = 'select_show';
const CLASS_NAME_SELECTED = 'select__option_selected';
const SELECTOR_ACTIVE = '.select_show';
const SELECTOR_DATA = '[data-select]';
const SELECTOR_DATA_TOGGLE = '[data-select="toggle"]';
const SELECTOR_OPTION_SELECTED = '.select__option_selected';

class CustomSelect {
	constructor(target, params) {
		this._elRoot = typeof target === 'string' ? document.querySelector(target) : target;
		this._params = params || {};
		if (this._params['options']) {
			this._elRoot.classList.add(CLASS_NAME_SELECT);
			this._elRoot.innerHTML = CustomSelect.template(this._params);
		}
		this._elToggle = this._elRoot.querySelector(SELECTOR_DATA_TOGGLE);
		this._elRoot.addEventListener('click', this._onClick.bind(this));
	}
	_onClick(e) {
		const target = e.target;
		const type = target.closest(SELECTOR_DATA).dataset.select;
		switch (type) {
			case 'toggle':
				this.toggle();
				break;
			case 'option':
				this._changeValue(target);
				break;
		}
	}
	_update(option) {
		option = option.closest('.select__option');
		const selected = this._elRoot.querySelector(SELECTOR_OPTION_SELECTED);
		if (selected) {
			selected.classList.remove(CLASS_NAME_SELECTED);
		}
		option.classList.add(CLASS_NAME_SELECTED);
		this._elToggle.textContent = option.textContent;
		this._elToggle.value = option.dataset['value'];
		this._elToggle.dataset.index = option.dataset['index'];
		this._elRoot.dispatchEvent(new CustomEvent('select.change'));
		this._params.onSelected ? this._params.onSelected(this, option) : null;
		return option.dataset['value'];
	}
	_reset() {
		const selected = this._elRoot.querySelector(SELECTOR_OPTION_SELECTED);
		if (selected) {
			selected.classList.remove(CLASS_NAME_SELECTED);
		}
		this._elToggle.textContent = 'Выберите из списка';
		this._elToggle.value = '';
		this._elToggle.dataset.index = -1;
		this._elRoot.dispatchEvent(new CustomEvent('select.change'));
		this._params.onSelected ? this._params.onSelected(this, null) : null;
		return '';
	}
	_changeValue(option) {
		if (option.classList.contains(CLASS_NAME_SELECTED)) {
			return;
		}
		this._update(option);
		this.hide();
	}
	show() {
		document.querySelectorAll(SELECTOR_ACTIVE).forEach(select => {
			select.classList.remove(CLASS_NAME_ACTIVE);
		});
		this._elRoot.classList.add(CLASS_NAME_ACTIVE);
	}
	hide() {
		this._elRoot.classList.remove(CLASS_NAME_ACTIVE);
	}
	toggle() {
		if (this._elRoot.classList.contains(CLASS_NAME_ACTIVE)) {
			this.hide();
		} else {
			this.show();
		}
	}
	dispose() {
		this._elRoot.removeEventListener('click', this._onClick);
	}
	get value() {
		return this._elToggle.value;
	}
	set value(value) {
		let isExists = false;
		this._elRoot.querySelectorAll('.select__option').forEach((option) => {
			if (option.dataset['value'] === value) {
				isExists = true;
				return this._update(option);
			}
		});
		if (!isExists) {
			return this._reset();
		}
	}
	get selectedIndex() {
		return this._elToggle.dataset['index'];
	}
	set selectedIndex(index) {
		const option = this._elRoot.querySelector(`.select__option[data-index="${index}"]`);
		if (option) {
			return this._update(option);
		}
		return this._reset();
	}
}

CustomSelect.template = params => {
	const name = params['name'];
	const options = params['options'];
	const targetValue = params['targetValue'];
	let items = [];
	let selectedIndex = -1;
	let selectedValue = '';
	let selectedContent = 'Выберите из списка';
	options.forEach((option, index) => {
		let selectedClass = '';
		if (option[0] === targetValue) {
			selectedClass = ' select__option_selected';
			selectedIndex = index;
			selectedValue = option[0];
			selectedContent = option[1];
		}
		items.push(`<li class="select__option${selectedClass}" data-select="option" data-value="${option[0]}" data-index="${index}">${option[1]}</li>`);
	});
	return `<button type="button" class="select__toggle" name="${name}" value="${selectedValue}" data-select="toggle" data-index="${selectedIndex}">${selectedContent}</button>
  <div class="select__dropdown">
    <ul class="select__options">${items.join('')}</ul>
  </div>`;
};


document.addEventListener('click', (e) => {
	if (!e.target.closest('.select')) {
		document.querySelectorAll(SELECTOR_ACTIVE).forEach(select => {
			select.classList.remove(CLASS_NAME_ACTIVE);
		});
	}
});
























