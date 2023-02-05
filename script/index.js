import {
    _search,
    _form,
    _button,
    _list,
    _like,
    _modal,
    _backIcon,
    DEFAULT_API,
    TYPE_API,
    SEARCH_API
} from './constanta/index.js'

import {
    getData,
    fetchData,
    typeRender,
    searchRender,
    getTypeResult,
    typeAndSort,
} from './utils/index.js'

window.addEventListener('load', e => {
    e.preventDefault()

    getData(DEFAULT_API)
})

_form.addEventListener('submit', e => {
    e.preventDefault()
    _list.innerHTML = ''

    let {
        type,
        search,
        sort
    } = e.target.elements


    if(type.value == "type" && !search.value){
        getData(DEFAULT_API)
    }
    if (type.value != "type" && search.value) {
        typeRender(TYPE_API + type.value, search.value.trim())
    } else if(type.value != "type" && sort.value != 'filter'){
        typeAndSort(TYPE_API + type.value, sort.value)
    } else if(type.value != "type"){
        getTypeResult(TYPE_API + type.value)
    } else if(search.value) {
        searchRender(SEARCH_API + search.value.trim().toLowerCase())
    }
    _form.reset()
})

_like.addEventListener('click', e => {
    e.preventDefault()
    _modal.style.display = 'flex'
})

_backIcon.addEventListener('click', e => {
    e.preventDefault()
    _modal.style.display = 'none'
})