import {_list} from '../constanta/index.js'
import {renderData} from './index.js'

export async function searchRender(api) {
    _list.innerHTML = ''
    try{
        const response = await fetch(api)
        const data = await response.json()
        renderData(await data)
    }
    catch(error){
        _list.innerHTML = `<h1 class="notFound">Not Found</h1>`
    }
}