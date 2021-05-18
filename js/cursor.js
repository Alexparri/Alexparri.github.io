const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:' + (e.pageY - 7) + 'px; left:' + (e.pageX - 7) + 'px;')
})

document.addEventListener('click', () => {
    cursor.classList.add('cursor-click');
    setTimeout(() => {
        cursor.classList.remove('cursor-click');
    }, 500)
})