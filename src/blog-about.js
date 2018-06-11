import { LitElement, html } from '@polymer/lit-element/lit-element.js'
import '@polymer/app-layout/app-toolbar/app-toolbar.js'
import '@polymer/iron-icon/iron-icon.js'

export class BlogAbout extends LitElement {
  connectedCallback () {
    super.connectedCallback()
  }

  disconnectedCallback () {
    super.disconnectedCallback()
  }

  static get properties () {
    return {
      title: {
        type: String,
        reflectToAttribute: true
      }
    }
  }

  _render ({title}) {
    return html`
      <h2>Sobre</h2>
      <p>Aqui compartilho o que vou aprendendo.</p>
    `
    // <p>Última modificação em ${moment('2018-06-11').format('LL')}.</p>
  }
}

window.customElements.define('blog-about', BlogAbout)
