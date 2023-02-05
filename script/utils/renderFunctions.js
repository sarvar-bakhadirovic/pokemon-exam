import {_list, _modal_list} from '../constanta/index.js'
import {likeBtn} from './index.js'

export async function getData(api) {
    _list.innerHTML = ''
    const response = await fetch(api)
    const data = await response.json()
    const result = await data.results
    getResult(await result)
}

export async function getResult(data) {
    _list.innerHTML = ''
    await data.forEach(async (element) => {
        const response = await fetch(element.url)
        const data = await response.json()
        renderData(await data)
        modalRender(await data)
    });

}
export async function modalRender(data) {
    // create li element
    const pokemon = document.createElement("li")
    pokemon.classList.add('modal__item')

    // create img wrapper element
    const div = document.createElement('div')
    div.classList.add('modal__img')

    // create img element
    const img = document.createElement('img')
    img.src = data.sprites.other['official-artwork'].front_default
    img.alt = data.name
    div.append(img)

    // create title
    const h1 = document.createElement('h1')
    h1.classList.add('modal__title')
    h1.textContent = data.name

    // create type span
    const span = document.createElement('span')
    span.classList.add('modal__type')
    data.types.forEach(typeArr => {
        span.append(typeArr.type.name, ", ")
    })

    // create weight element
    const p = document.createElement('p')
    p.classList.add('modal__weight')
    p.textContent = `${data.weight}kg`

    // create like icon
    const icon = document.createElement('i')
    icon.classList.add('fa-regular')
    icon.classList.add('fa-heart')
    icon.classList.add('modal_icon')

    pokemon.append(div, h1, span, p, icon)
    _modal_list.append(pokemon)
}
export async function renderData(data) {
    // create li element
    const pokemon = document.createElement("li")
    pokemon.classList.add('item')

    // create img wrapper element
    const div = document.createElement('div')
    div.classList.add('item__img')

    // create img element
    const img = document.createElement('img')
    img.src = data.sprites.other['official-artwork'].front_default
    img.alt = data.name
    div.append(img)

    // create title
    const h1 = document.createElement('h1')
    h1.classList.add('item__title')
    h1.textContent = data.name

    // create type span
    const span = document.createElement('span')
    span.classList.add('item__type')
    data.types.forEach(typeArr => {
        span.append(typeArr.type.name, ", ")
    })

    // create weight element
    const p = document.createElement('p')
    p.classList.add('item__weight')
    p.textContent = `${data.weight}kg`

    // create like icon
    const likeBtn = document.createElement('button')
    likeBtn.classList.add('like_icon')

    const icon = document.createElement('i')
    icon.classList.add('fa-solid')
    icon.classList.add('fa-heart')
    likeBtn.append(icon)

    pokemon.append(div, h1, span, p, likeBtn)
    _list.append(pokemon)
}

export async function fetchData(api) {
    const response = await fetch(api)
    const data = await response.json()
    
    console.log(await data);
}
