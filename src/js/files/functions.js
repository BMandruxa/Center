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
//=========================TABS
$(document).ready(function () {
	$('.tabs-triggers__item').click(function (e) {
		e.preventDefault();

		window.location.hash = e.target.getAttribute("href")
		$('.tabs-triggers__item').removeClass('tabs-triggers__item--activee');
		$('.tabs-content__item').removeClass('tabs-content__item--activee');

		$(this).addClass('tabs-triggers__item--activee');
		$($(this).attr('href')).addClass('tabs-content__item--activee');
	});
	$('.tabs-triggers__item:first').click();
});
// ==============================

const sumInput = document.querySelector('#sum');
const sumPointer = document.querySelector('#sum-pointer');
const timeInput = document.querySelector('#time');
const timePointer = document.querySelector('#time-pointer');
const refillInput = document.querySelector('#refill');
const refillPointer = document.querySelector('#refill-pointer');

const bsumInput = document.querySelector('#bsum');
const bsumPointer = document.querySelector('#bsum-pointer');
const btimeInput = document.querySelector('#btime');
const btimePointer = document.querySelector('#btime-pointer');
const brefillInput = document.querySelector('#brefill');
const brefillPointer = document.querySelector('#brefill-pointer');

const zsumInput = document.querySelector('#zsum');
const zsumPointer = document.querySelector('#zsum-pointer');
const ztimeInput = document.querySelector('#ztime');
const ztimePointer = document.querySelector('#ztime-pointer');

const startDate = document.querySelector(".start-date")
const endDates = document.querySelectorAll(".end-date")
const now = new Date()

const bstartDate = document.querySelector(".bstart-date")
const bendDates = document.querySelectorAll(".bend-date")

const firstNum = document.querySelector(".first-num")
const twoNum = document.querySelectorAll(".two-num")


function setBagePosition(curentSlider, curentPointer) {
	const radius = curentSlider.scrollHeight;

	const dxPixels = radius / 2 + (curentSlider.valueAsNumber - parseInt(curentSlider.min)) *
		(curentSlider.scrollWidth - radius) / (parseInt(curentSlider.max) - parseInt(curentSlider.min));

	curentPointer.style.left = dxPixels - (curentPointer.offsetWidth / 2) + 'px';
}

sumInput.addEventListener('input', function () {
	// const nums = sumInput.value

	sumPointer.innerHTML = sumInput.value;
	setBagePosition(sumInput, sumPointer);

	// firstNum.forEach(n => { n.innerHTML = `на ${new Intl.DateTimeFormat('ru-RU').format(nums).slice(3)} г.` })

})
timeInput.addEventListener('input', function () {
	const months = timeInput.value

	timePointer.innerHTML = timeInput.value;
	setBagePosition(timeInput, timePointer);

	const end = new Date();
	end.setMonth(end.getMonth() + +months);
	endDates.forEach(d => { d.innerHTML = `на ${new Intl.DateTimeFormat('ru-RU').format(end).slice(3)} г.` })

})
refillInput.addEventListener('input', function () {
	refillPointer.innerHTML = refillInput.value;
	setBagePosition(refillInput, refillPointer);
})

bsumInput.addEventListener('input', function () {
	bsumPointer.innerHTML = bsumInput.value;
	setBagePosition(bsumInput, bsumPointer);
})
btimeInput.addEventListener('input', function () {
	const bmonths = btimeInput.value

	btimePointer.innerHTML = btimeInput.value;
	setBagePosition(btimeInput, btimePointer);

	const bend = new Date();
	bend.setMonth(bend.getMonth() + +bmonths);
	bendDates.forEach(d => { d.innerHTML = `на ${new Intl.DateTimeFormat('ru-RU').format(bend).slice(3)} г.` })
})
brefillInput.addEventListener('input', function () {
	brefillPointer.innerHTML = brefillInput.value;
	setBagePosition(brefillInput, brefillPointer);
})

zsumInput.addEventListener('input', function () {
	zsumPointer.innerHTML = zsumInput.value;
	setBagePosition(zsumInput, zsumPointer);
})
ztimeInput.addEventListener('input', function () {
	ztimePointer.innerHTML = ztimeInput.value;
	setBagePosition(ztimeInput, ztimePointer);
})


$(document).ready(function () {
	setBagePosition(sumInput, sumPointer);
	sumPointer.innerHTML = sumInput.value;
	setBagePosition(timeInput, timePointer);
	timePointer.innerHTML = timeInput.value;
	setBagePosition(refillInput, refillPointer);
	refillPointer.innerHTML = refillInput.value;

	setBagePosition(bsumInput, bsumPointer);
	bsumPointer.innerHTML = bsumInput.value;
	setBagePosition(btimeInput, btimePointer);
	btimePointer.innerHTML = btimeInput.value;
	setBagePosition(brefillInput, brefillPointer);
	brefillPointer.innerHTML = brefillInput.value;

	setBagePosition(zsumInput, zsumPointer);
	zsumPointer.innerHTML = zsumInput.value;
	setBagePosition(ztimeInput, ztimePointer);
	ztimePointer.innerHTML = ztimeInput.value;

	const months = timeInput.value
	// const end = now + months //логика добавления к дате месяцев, получение новой даты newDAte
	const end = new Date();

	end.setMonth(end.getMonth() + +months);
	startDate.innerHTML = `на ${new Intl.DateTimeFormat('ru-RU').format(now).slice(3)} г.`
	endDates.forEach(d => { d.innerHTML = `на ${new Intl.DateTimeFormat('ru-RU').format(end).slice(3)} г.` })


	const bmonths = btimeInput.value

	const bend = new Date();
	bend.setMonth(bend.getMonth() + +bmonths);
	bstartDate.innerHTML = `на ${new Intl.DateTimeFormat('ru-RU').format(now).slice(3)} г.`
	bendDates.forEach(b => { b.innerHTML = `на ${new Intl.DateTimeFormat('ru-RU').format(bend).slice(3)} г.` })
})

$(document).ready(() => {
	window.addEventListener("hashchange", () => {
		const tab = window.location.hash
		console.log(tab)
		if (tab === "#tab-1") {
			setBagePosition(sumInput, sumPointer)
			setBagePosition(timeInput, timePointer)
		} else if (tab === "#tab-2") {
			setBagePosition(bsumInput, bsumPointer)
			setBagePosition(btimeInput, btimePointer)
		} else if (tab === "#tab-3") {
			setBagePosition(zsumInput, zsumPointer)
			setBagePosition(ztimeInput, ztimePointer)
		}
	})
})






















