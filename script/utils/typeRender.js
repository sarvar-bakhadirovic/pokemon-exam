import {_list} from '../constanta/index.js'
import {renderData} from './index.js'

export async function typeRender(api, input) {
    const response = await fetch(api)
    const data = await response.json()
    const result = await data.pokemon
    getInputResult(await result, input)
}

async function getInputResult(data, input) {
    await data.forEach(async (element) => {
        const response = await fetch(element.pokemon.url)
        const data = await response.json()

        if(data.name == input.toLowerCase()){
            renderData(await data)
        }
    });
}

export async function getTypeResult(api) {
    const response = await fetch(api)
    const data = await response.json()
    const result = await data.pokemon
    
    await result.forEach(async (element) => {
        const response = await fetch(element.pokemon.url)
        const data = await response.json()
        renderData(await data)
    });
}

export async function typeAndSort(api, sort) {
    const response = await fetch(api)
    const data = await response.json()
    const result = await data.pokemon
    sortFunc(await result, sort)
}

function sortFunc(data, sort) {
    if(sort == 'az'){
        data.sort((a,b) => a.pokemon.name < b.pokemon.name ? -1:1)
        data.forEach(async (item) => {
            const response = await fetch(item.pokemon.url)
            const data = response.json()
            renderData(await data)
        })
    } else if(sort == 'za') {
        data.sort((a,b) => a.pokemon.name > b.pokemon.name ? -1:1)
        data.forEach(async (item) => {
            const response = await fetch(item.pokemon.url)
            const data = response.json()
            renderData(await data)
        })
    }
}