const operators = document.querySelectorAll('.operator')
operators.forEach(operator => (
    operator.addEventListener('click', () => {
        document.querySelector('body').classList.add('wrapper')
        const url = operator.getAttribute('data-url')
        document.querySelector('.conf-btn').setAttribute('href', url)
})))

document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('body').classList.remove('wrapper')
})
