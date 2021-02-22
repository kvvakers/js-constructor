export class Site {
    constructor(element) {
        this.$el = document.querySelector(element)
    }
    render(model) {
        this.$el.innerHTML = ''
        model.forEach(block => this.$el.insertAdjacentHTML('beforeend', block.toHTML()))
    }
}