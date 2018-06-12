import { LitElement, html } from '@polymer/lit-element/lit-element.js'
import '@polymer/app-layout/app-toolbar/app-toolbar.js'
import '@polymer/iron-icon/iron-icon.js'
import '@polymer/paper-spinner/paper-spinner.js'

export class PostView extends LitElement {
  static get properties () {
    return {
      content: String
    }
  }

  dateFormat (date) {
    return window.moment(date).format('LL')
  }

  set post (value) {
    const loading = html([`
      <div id="loading">
        <p>Carregando...</p>
        <paper-spinner alt="procurando..." active></paper-spinner>
      </div>
      `])
    this.content = loading
    this._post = value
    const p = value
    window.fetch(`posts/${p.filename}`)
      .then(response => response.text())
      .then(content => {
        const header = `
          <header>
            <h1 class="title">${p.title}</h1>
            <div class="meta">
              <p class="author">Escrito por ${p.author}</p>
              <p class="release">Publicado em ${this.dateFormat(p.releaseDate)}</p>
              <p class="update">Atualizado em ${this.dateFormat(p.lastUpdate)}</p>
            </div>
          </header>
        `
        this.content = html([header, content])
      })
      .catch(e => console.error(e))
  }

  get post () {
    return this._post
  }

  _render (props) {
    return html`
      <style>
        a {
          color: var(--light-text-color);
        }

        #loading {
          width: 100%;
          text-align: center;
          color: var(--light-text-color);
        }

        paper-spinner {
          height: 100px;
          width: 100px;
          --paper-spinner-layer-1-color: var(--light-text-color);
          --paper-spinner-layer-2-color: var(--light-text-color);
          --paper-spinner-layer-3-color: var(--light-text-color);
          --paper-spinner-layer-4-color: var(--light-text-color);
          --paper-spinner-stroke-width: 10px;
        }

        pre {
          background-color: var(--blog-dark-main);
          padding: 10px 20px;
          overflow: auto;
        }

        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .meta {
          display: flex;
          flex-direction: column;
        }

        .meta > p {
          font-size: small;
          margin: 0;
          text-align: right;
        }

        .title {
          display: flex;
        }
      </style>
      <article id="content">${props.content}</article>
    `
  }
}

window.customElements.define('post-view', PostView)
