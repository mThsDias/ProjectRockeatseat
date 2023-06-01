function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('light')

    const image = document.querySelector('#profile img')

    if(html.classList.contains('light')) {
        image.setAttribute('src', '../img/Userbox_creeper.jpg')
    } else {
        image.setAttribute('src', '../img/5556468.png')
    }
}