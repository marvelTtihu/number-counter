let count = 0

const counter = document.querySelector('.counter')
const btns = document.querySelectorAll('.buttons button')

btns.forEach((btns) => {
    btns.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList
        if (styles.contains('btn-decrease')) {
            count--
        } else if (styles.contains('btn-increase')) {
            count++
        } else {
            count = 0
        }
        if (count > 0) {
            counter.style.color = 'green'
        } else if (count < 0) {
            counter.style.color = 'red'
        } else {
            counter.style.color = '#1A1A1A'
        }
        counter.textContent = count
    })
})

