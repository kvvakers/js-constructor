import {block} from "../utils";
import {ColumnsBlock, TitleBlock} from "./Blocks";

export class Sidebar {
    constructor(element, updCallback) {
        this.$el = document.querySelector(element)
        this.update = updCallback
        this.init()
    }
    init () {
        this.$el.insertAdjacentHTML('afterbegin', this.template)
        this.$el.addEventListener('submit', this.add.bind(this))
    }
    get template() {
        return [block('title'), block('columns')].join('')
    }
    add(event) {
        event.preventDefault()
        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value
        let newBlock
        if (type === 'title') {
            newBlock = new TitleBlock(value, {styles})
        } else {
            newBlock = new ColumnsBlock(value, {styles})
        }
        this.update(newBlock)
        event.target.value.value = ''
        event.target.styles.value = ''
    }
}

