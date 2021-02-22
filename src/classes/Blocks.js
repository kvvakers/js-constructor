import {row, col, css} from "../utils";


class Block {
    constructor(value, options) {
        this.value = value
        this.options = options
    }
    toHTML() {
        throw new Error('method must be realized')
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }
    toHTML() {
        const {tag = 'h1', styles} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}
export class ColumnsBlock extends Block {
    constructor(value, options) {
        super( value, options);
    }
    toHTML() {
        console.log(123);
        const html = this.value.map(col)
        return row(html.join(''))
    }
}
export class ImageBlock extends Block {
    constructor(value, options) {
        super( value, options);
    }
    toHTML() {
        const imageStyles = css(this.options.imageStyle)
        return row(`<img src="${this.value}" style="${imageStyles}" alt="">`)
    }
}