import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle = "Контакты"
    }

    async getHtml() {
        return `
        <h1>Контакты</h1>

    <p>Здесь вы найдёте мои контактные данные!</p>

      
    <div class="pp"><img src="static/img/free-icon-vk-3670055.png" class="img-cont"><a href="https://vk.com/dmitryvideos">https://vk.com/dmitryvideos</a> </div>
    <div class="pp"><img src="static/img/free-icon-telegram-2111646.png" class="img-cont"><a href="https://t.me/ProstoDimaVed">https://t.me/ProstoDimaVed</a>  </div>
    <div class="pp"><img src="static/img/free-icon-youtube-4494485.png" class="img-cont"><a href="https://www.youtube.com/channel/UCdWoXBH19qMYOnnOiTszPZg">https://www.youtube.com/channel/UCdWoXBH19qMYOnnOiTszPZg</a></div>
    <div class="pp"><img src="static/img/free-icon-instagram-3955024.png" class="img-cont"><a href="https://i.ytimg.com/vi/X_YmVwUcrcU/maxresdefault.jpg">кхм кхм, пожалуй промолчу...</a></div>
    <p>
        <a href="/posts" data-link>Перейти к блогу</a>
    </p>
        `
    }
}