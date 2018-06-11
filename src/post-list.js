import { LitElement, html } from '@polymer/lit-element/lit-element.js'
import '@polymer/app-layout/app-toolbar/app-toolbar.js'
import '@polymer/iron-icon/iron-icon.js'
import '@polymer/iron-list/iron-list.js'

export class PostList extends LitElement {
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
      posts: Object
    }
  }

  _render ({ posts }) {
    return html`
      <style>
        :host { display: block; }
        a {
          color: var(--light-text-color);
          text-decoration: none;
        }
      </style>
      <div class="card">
        <h2>Posts</h2>
        <ul>
          <iron-list items="${posts}" as="post">
            <template>
                <li><a href="#/post-view/[[post.slug]]">• [[post.title]]</a></li>
            </template>
          </iron-list>
        </ul>
      </div>
    `
  }
}

window.customElements.define('post-list', PostList)
