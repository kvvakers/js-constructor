import {Site} from "../classes/site";
import {Sidebar} from "../classes/siebar";

export class App {
    constructor(model) {
        this.model = model
        this.init()
    }
    init () {
        const site = new Site('#site')
        site.render(this.model)
        const updCallback = newBlock => {
            this.model.push(newBlock)
            site.render(this.model)
        }
        const sidebar = new Sidebar('#panel', updCallback)
    }
}