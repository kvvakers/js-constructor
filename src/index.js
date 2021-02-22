import {model} from './model'
import './main.css'
import {Site} from "./classes/site";
import {Sidebar} from "./classes/siebar";
import {App} from "./classes/app";

new App(model)

//const $site = document.querySelector('#site')
// const site = new Site('#site')
// site.render(model)
// const updCallback = newBlock => {
//     model.push(newBlock)
//     site.render(model)
// }
// const sidebar = new Sidebar('#panel', updCallback)

// model.forEach(block => {
//     // let html = ''
//     // if (block.type === 'title') {
//     //     html = createTitle(block.value)
//     // } else if (block.type === 'text') {
//     //     html = createText(block.value)
//     // } else if (block.type === 'columns') {
//     //     html = createColumns(block.value)
//     // } else if (block.type === 'image') {
//     //     html = createImg(block.value)
//     // }
//     //const toHtml = templates[block.type]
//     // site.insertAdjacentHTML('beforeend', block.toHTML())
// })

