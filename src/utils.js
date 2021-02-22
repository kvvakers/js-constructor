export function row(content, styles = '') {
    return `<div style="${styles}" class="row">${content}</div>`
}
export function col(content) {
    return `<div class="col-sm">${content}</div>`
}
export function css(styles = {}) {
    // const keys = Object.keys(styles)
    // const array = keys.map(key => {
    //     return `${key}: ${styles[key]}`
    // })
    // return array.join(';')
    if (typeof styles === 'string') return styles
    const toString = key => `${key}: ${styles[key]}`
    return Object.keys(styles).map(toString).join(';')
}
export function block(type) {
    return `
    <form name="${type}">
        <h5>${type}</h5>
        <div class="form-group">
            <input type="text" name="value" placeholder="value" class="form-control form-control-sm">
        </div>
        <div class="form-group">
            <input type="text" name="styles" placeholder="styles" class="form-control form-control-sm">
        </div>
        <button type="submit" class="btn btn-info">Добавить</button>
    </form>
    `
}