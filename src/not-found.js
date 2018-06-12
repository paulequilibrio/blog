import { LitElement, html } from '@polymer/lit-element/lit-element.js'

export class NotFound extends LitElement {
  static get properties () {
    return {
      content: String
    }
  }

  _render (props) {
    return html`
      <style>
        p {
          font-weight: bold;
          text-align: center;
          color: var(--light-text-color);
        }
        img {
          width: 90%;
          display: block;
          margin: 0 auto;
        }
        a {
          color: var(--light-text-color);
          text-decoration: none;
        }
      </style>
      <a href="#/post-list">
        <p>Você encontrou um Link morto</p>
        <img src="/images/dead-link.png" alt="link morto">
        <p>Clique para voltar ao início</p>
      </a>
    `
  }
}

window.customElements.define('not-found', NotFound)
