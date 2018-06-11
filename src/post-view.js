import { LitElement, html } from '@polymer/lit-element/lit-element.js'
import '@polymer/app-layout/app-toolbar/app-toolbar.js'
import '@polymer/iron-icon/iron-icon.js'

export class PostView extends LitElement {
  constructor () {
    super()
  }

  connectedCallback () {
    super.connectedCallback()
  }

  disconnectedCallback () {
    super.disconnectedCallback()
  }

  static get properties () {
    return {
      post: Object,
      content: String
    }
  }

  static get observedAttributes () {
    return ['slug', 'post']
  }

  attributeChangedCallback (name, b, c) {
    super.attributeChangedCallback()
    // console.log(name, b, c)
  }

  loadHtml (post) {
    if (post && post.filename) {
      return new Promise((resolve, reject) => {
        window.fetch(`posts/${post.filename}`)
          .then(response => response.text())
          .then(content => {
            // console.log(content)
            this.content = html([content])
            resolve(content)
          })
          .catch(e => reject(e))
      })
    }
  }

  _shouldRender (props, changedProps, prevProps) {
    if (changedProps && 'post' in changedProps) {
      this.loadHtml(changedProps.post)
    }
    return true
  }

  _render (props) {
    return html`
      <style>
        a {
          color: var(--light-text-color);
        }
      </style>
      <div id="content">${props.content}</div>
    `
  }
}

window.customElements.define('post-view', PostView)
