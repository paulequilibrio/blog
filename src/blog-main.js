import { LitElement, html } from '@polymer/lit-element/lit-element.js'
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js'
import '@polymer/app-route/app-location.js'
import '@polymer/app-route/app-route.js'
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js'
import '@polymer/app-layout/app-drawer/app-drawer.js'
import '@polymer/app-layout/app-header-layout/app-header-layout.js'
import '@polymer/app-layout/app-header/app-header.js'
import '@polymer/app-layout/app-toolbar/app-toolbar.js'
import '@polymer/iron-icon/iron-icon.js'
import '@polymer/iron-icons/iron-icons.js'
import '@polymer/iron-selector/iron-selector.js'
import '@polymer/iron-pages/iron-pages.js'
import '@polymer/paper-icon-button/paper-icon-button.js'
import './post-list.js'
import './post-view.js'
import './blog-about.js'
import './not-found.js'

export class BlogMain extends LitElement {
  constructor () {
    super()
    setPassiveTouchGestures(true)
  }

  goHome (event) {
    this.appLocation.path = '/post-list'
  }

  reload (event) {
    window.location.reload(true)
  }

  setRoute () {
    this.appRoute.route = this.appLocation.route
    this.slug = this.appRoute.tail.path
    this.page = this.appRoute.data.page
  }

  loadList () {
    return new Promise((resolve, reject) => {
      window.fetch('posts/post-list.json')
        .then(response => response.json())
        .then(posts => {
          this.posts = posts
          resolve(posts)
        })
        .catch(e => reject(e))
    })
  }

  selectPost (posts) {
    this.postView.post = posts.find(post => post.slug === this.slug.slice(1))
  }

  load (event) {
    if (this.appDrawerLayout.narrow) this.appDrawer.close()
    if (event.detail.item.localName === 'post-list') {
      if (!this.posts) {
        this.loadList()
      }
    }
    if (event.detail.item.localName === 'post-view') {
      if (!this.posts) {
        this.loadList()
          .then(this.selectPost.bind(this))
          .catch(e => console.error(e))
      } else {
        this.selectPost(this.posts)
      }
    }
  }

  connectedCallback () {
    super.connectedCallback()
    // this.shadowRoot.querySelector('app-drawer-layout').responsiveWidth = '10px'
    this.appDrawerLayout = this.shadowRoot.querySelector('app-drawer-layout')
    this.appDrawer = this.shadowRoot.querySelector('app-drawer')
    this.appLocation = this.shadowRoot.querySelector('app-location')
    this.appRoute = this.shadowRoot.querySelector('app-route')
    this.ironPages = this.shadowRoot.querySelector('iron-pages')
    this.postList = this.shadowRoot.querySelector('post-list')
    this.postView = this.shadowRoot.querySelector('post-view')
    this.appLocation.addEventListener('path-changed', this.setRoute.bind(this))
    this.ironPages.addEventListener('iron-select', this.load.bind(this))
    if (!this.appRoute.data.page) {
      this.setRoute()
    }
    if (!this.page) {
      this.appLocation.path = '/post-list'
    }
  }

  disconnectedCallback () {
    super.disconnectedCallback()
  }

  static get properties () {
    return {
      page: String,
      posts: Array,
      slug: String,
      appLocation: Object,
      appRoute: Object
    }
  }

  _render ({page, posts, slug}) {
    return html`
      <style>
        :host {
          --app-drawer-width: 256px;

          /* Palette */
          --blog-dark-title: hsl(200, 8%, 19%);
          --blog-dark-main: hsl(200, 8%, 15%);
          --blog-dark-side: hsl(200, 8%, 18%);
          --blog-dark-light: hsl(200, 8%, 22%);
          --blog-black: #0b0c0c;
          --blog-white: #c0c1c2;
          --blog-gray: #898b8b;
          /* Generic colors */
          --light-text-color: #00FF00;
          --dark-text-color: #000000;
          --light-background-color: #FFFFFF;
          --dark-background-color: #000000;

          /* Theme Specific Colors */
          --drawer-toolbar-background-color:     var(--blog-dark-side);
          --drawer-toolbar-color:                var(--light-text-color);
          --drawer-background-color:             var(--blog-dark-side);

          --header-toolbar-background-color:     var(--blog-dark-title);
          --header-toolbar-color:                var(--light-text-color);
          --header-background-color:             var(--blog-dark-main);

          --menu-item-color:                     var(--light-text-color);
          --menu-item-selected-color:            var(--light-text-color);
          --menu-item-selected-background-color: var(--blog-dark-main);
          --menu-item-hover-color:               var(--blog-dark-light);

          --card-background-color:               var(--blog-dark-light);
          --border-layout-color:                 var(--blog-black);
          --ink-color:                           var(--blog-white);
          --icon-color:                          var(--blog-white);

          --table-row-odd:                       #FAFAFA;
          --table-row-even:                      #FFFFFF;
          --table-row-hover:                     #CCCCCC;
        }

        app-drawer-layout:not([narrow]) [drawer-toggle] { display: none; }

        app-drawer-layout {
          background-color: var(--blog-dark-main);
          color: var(--light-text-color);
        }

        a paper-icon-button,
        a:active paper-icon-button,
        a:link paper-icon-button,
        a:visited paper-icon-button {
          color: var(--light-text-color);
        }

        app-header app-toolbar {
          color: var(--header-toolbar-color);
          background-color: var(--header-toolbar-background-color);
          border-bottom: 1px solid var(--border-layout-color);
          /*box-shadow: 100px 20px 50px 20px #888;*/
          /*background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6));*/
        }

        app-header paper-icon-button {
          --paper-icon-button-ink-color: var(--ink-color);
        }

        app-header-layout {
          background-color: var(--header-background-color);
          height: fit-content;
          padding-bottom: 1px;
        }

        app-drawer {
          --app-drawer-content-container: {
            background-color: var(--drawer-background-color);
            border-right: 1px solid var(--border-layout-color);
          };
        }

        app-drawer app-toolbar {
          color: var(--drawer-toolbar-color);
          background-color: var(--drawer-toolbar-background-color);
        }

        .drawer-list {
          margin: 0 20px;
          color: red;
        }

        .drawer-list a {
          display: block;
          padding: 0 16px;
          margin: 5px 0;
          text-decoration: none;
          color: var(--menu-item-color);
          line-height: 40px;
        }

        .drawer-list a.iron-selected, a.iron-selected iron-icon {
          font-weight: bold;
          color: var(--menu-item-selected-color);
          background-color: var(--menu-item-selected-background-color);
        }

        .drawer-list a:hover, .drawer-list a:hover iron-icon {
          background-color: var(--menu-item-hover-color);
        }

        .drawer-list a:focus {
          outline: none;
        }

        .drawer-list iron-icon {
          padding-bottom: 3px;
          padding-right: 5px;
        }

        .card {
          margin: 20px;
          padding: 20px;
          border-radius: 5px;
          background-color: var(--card-background-color);
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
          /* overflow-y: auto; */
        }

        #appIcon {
          width: 40px;
          height: 40px;
          margin-right: 10px;
        }
      </style>

      <app-location use-hash-as-path></app-location>
      <app-route pattern="/:page"></app-route>

      <app-drawer-layout fullbleed>
        <app-drawer id="drawer" slot="drawer" swipe-open no-focus-trap>
          <app-toolbar id="drawerToolbar">
            <iron-icon id="appIcon" src="images/manifest/icon-512x512.png"></iron-icon>
            <span>Menu</span>
          </app-toolbar>
          <div id="drawerContent">
            <iron-selector attr-for-selected="page" id="ironSelector" role="navigation" class="drawer-list">
              <a page="post-list"  href="#/post-list"><iron-icon icon="store"></iron-icon>Início</a>
              <a page="blog-about" href="#/blog-about"><iron-icon icon="info"></iron-icon>Sobre</a>
            </iron-selector>
          </div>
        </app-drawer>
        <app-header-layout>
          <app-header slot="header" fixed>
            <app-toolbar>
              <paper-icon-button icon="menu" drawer-toggle></paper-icon-button>
              <div main-title>Blog Paulo Alexandre</div>
              <paper-icon-button icon="home" on-tap="${(e) => this.goHome(e)}" title="Ir para o início"></paper-icon-button>
              <paper-icon-button icon="refresh" on-tap="${(e) => this.reload(e)}" title="Recarregar"></paper-icon-button>
            </app-toolbar>
          </app-header>
          <div class="card">
            <iron-pages id="ironPages"
              selected="${page}"
              attr-for-selected="page"
              fallback-selection="not-found"
              role="main">
              <post-list page="post-list" posts="${posts}"></post-list>
              <post-view page="post-view"></post-view>
              <blog-about page="blog-about"></blog-about>
              <not-found  page="not-found"></not-found>
            </iron-pages>
          </div>
        </app-header-layout>
      </app-drawer-layout>
    `
  }
}

window.customElements.define('blog-main', BlogMain)
