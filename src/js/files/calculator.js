'use strict'

document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('.tabs-triggers__item')
    const contents = document.querySelectorAll('.tabs-content__item')
    startTabListener(tabs, contents)
});

function removeClassFromArray(nodes, className) {
    nodes.forEach(node => {
        node.classList.remove(className)
    })
}

function startTabListener(tabs, contents) {
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            removeClassFromArray(tabs, 'tabs-triggers__item--activee')
            removeClassFromArray(contents, 'tabs-content__item--activee')
            e.target.classList.add('tabs-triggers__item--activee')
            const tabHash = e.target.getAttribute('href')
            document.querySelector(`${tabHash}`).classList.add('tabs-content__item--activee')

            if (tabHash === '#tab-1') {
                startFirstTab()
            } else if (tabHash === '#tab-2') {
                startSecondTab()
            } else if (tabHash === '#tab-3') {
                startThirdTab()
            }
        })
    })
    
    if (window.location.pathname === '/business.html') {
        tabs[1].click()
    } else if (window.location.pathname === '/loans.html') {
        tabs[2].click()
    } else {
        tabs[0].click()
    }
}

function startFirstTab() {
    const sumInput = document.querySelector('#sum');
    const sumPointer = document.querySelector('#sum-pointer');
    const sumValue = document.querySelector('#sum-value')
    const sumFill = document.querySelector('#sum-fill')

    const timeInput = document.querySelector('#time');
    const timePointer = document.querySelector('#time-pointer');
    const endDates = document.querySelectorAll(".end-date")
    const startDate = document.querySelector(".start-date")

    const refillInput = document.querySelector('#refill');
    const refillPointer = document.querySelector('#refill-pointer');

    sumInput.addEventListener('input', () => {
        sumPointer.innerHTML = toRuCurrency(sumInput.value);
        sumValue.innerHTML = toRuCurrency(sumInput.value);
        setPointerPosition(sumInput, sumPointer);
    })

    timeInput.addEventListener('input', () => {
        timePointer.innerHTML = toRuCurrency(timeInput.value);
        setPointerPosition(timeInput, timePointer);
        sumFill.innerHTML = toRuCurrency(timeInput.value * refillInput.value)

        const now = new Date();
        const months = timeInput.value
        now.setMonth(now.getMonth() + +months);
        endDates.forEach(date => {
            date.innerHTML = `на ${toRuDate(now)} г.`
        })
    })

    refillInput.addEventListener('input', () => {
        refillPointer.innerHTML = toRuCurrency(refillInput.value);
        sumFill.innerHTML = toRuCurrency(timeInput.value * refillInput.value)
        setPointerPosition(refillInput, refillPointer);
    })

    setPointerPosition(sumInput, sumPointer);
    setPointerPosition(timeInput, timePointer);
    setPointerPosition(refillInput, refillPointer);
    startDate.innerHTML = `на ${toRuDate(new Date())} г.`
    sumValue.innerHTML = toRuCurrency(sumInput.value)
    sumFill.innerHTML = toRuCurrency(timeInput.value * refillInput.value)
}

function startSecondTab() {
    const sumInput = document.querySelector('#bsum');
    const sumPointer = document.querySelector('#bsum-pointer');
    const sumValue = document.querySelector('#bsum-value');
    const sumFill = document.querySelector('#bsum-fill')


    const timeInput = document.querySelector('#btime');
    const timePointer = document.querySelector('#btime-pointer');
    const endDates = document.querySelectorAll(".bend-date")
    const startDate = document.querySelector(".bstart-date")

    const refillInput = document.querySelector('#brefill');
    const refillPointer = document.querySelector('#brefill-pointer');

    sumInput.addEventListener('input', () => {
        sumPointer.innerHTML = toRuCurrency(sumInput.value);
        sumValue.innerHTML = toRuCurrency(sumInput.value);
        setPointerPosition(sumInput, sumPointer);
    })

    timeInput.addEventListener('input', () => {
        timePointer.innerHTML = toRuCurrency(timeInput.value);
        setPointerPosition(timeInput, timePointer);
        sumFill.innerHTML = toRuCurrency(timeInput.value * refillInput.value)

        const now = new Date();
        const months = timeInput.value
        now.setMonth(now.getMonth() + +months);
        endDates.forEach(date => {
            date.innerHTML = `на ${toRuDate(now)} г.`
        })
    })

    refillInput.addEventListener('input', () => {
        refillPointer.innerHTML = toRuCurrency(refillInput.value);
        setPointerPosition(refillInput, refillPointer);
        sumFill.innerHTML = toRuCurrency(timeInput.value * refillInput.value)

    })

    setPointerPosition(sumInput, sumPointer);
    setPointerPosition(timeInput, timePointer);
    setPointerPosition(refillInput, refillPointer);
    startDate.innerHTML = `на ${toRuDate(new Date())} г.`
    sumValue.innerHTML = toRuCurrency(sumInput.value)
    sumFill.innerHTML = toRuCurrency(timeInput.value * refillInput.value)

}

function startThirdTab() {
    const sumInput = document.querySelector('#zsum');
    const sumPointer = document.querySelector('#zsum-pointer');

    const timeInput = document.querySelector('#ztime');
    const timePointer = document.querySelector('#ztime-pointer');

    sumInput.addEventListener('input', () => {
        sumPointer.innerHTML = toRuCurrency(sumInput.value);
        setPointerPosition(sumInput, sumPointer);
    })

    timeInput.addEventListener('input', () => {
        timePointer.innerHTML = toRuCurrency(timeInput.value);
        setPointerPosition(timeInput, timePointer);
    })

    setPointerPosition(sumInput, sumPointer);
    setPointerPosition(timeInput, timePointer);
}


function toRuDate(date) {
    return new Intl.DateTimeFormat('ru-RU').format(date).slice(3)
}

function toRuCurrency(number) {
    return new Intl.NumberFormat('ru-RU').format(number)
}

function setPointerPosition(slider, pointer) {
    const radius = slider.scrollHeight;
    const dxPixels = radius / 2 + (slider.valueAsNumber - parseInt(slider.min)) *
        (slider.scrollWidth - radius) / (parseInt(slider.max) - parseInt(slider.min));
    pointer.style.left = dxPixels - (pointer.offsetWidth / 2) + 'px';
}
