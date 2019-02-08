define(["exports","meta"],function(_exports,meta){/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/'use strict';Object.defineProperty(_exports,"__esModule",{value:true});_exports.renderAttributes=renderAttributes;_exports.classString=classString;_exports.styleString=styleString;_exports.mixinBehaviors=mixinBehaviors;_exports.register=register;_exports.dumpRegistrations=dumpRegistrations;_exports.calculateSplices=calculateSplices;_exports.dashToCamelCase=dashToCamelCase;_exports.camelToDashCase=camelToDashCase;_exports.deepTargetFind=deepTargetFind;_exports.addListener=addListener;_exports.removeListener=removeListener;_exports.register$1=register$1;_exports.setTouchAction=setTouchAction;_exports.prevent=_prevent;_exports.resetMouseCanceller=resetMouseCanceller;_exports.isPath=isPath;_exports.root=root;_exports.isAncestor=isAncestor;_exports.isDescendant=isDescendant;_exports.translate=translate;_exports.matches=matches;_exports.normalize=normalize;_exports.split=split;_exports.get=_get;_exports.set=_set;_exports.flush$2=flush;_exports.beforeNextRender=beforeNextRender;_exports.afterNextRender=afterNextRender;_exports.resolveUrl=_resolveUrl;_exports.resolveCss=resolveCss;_exports.pathFromUrl=pathFromUrl;_exports.stylesFromModules=stylesFromModules;_exports.stylesFromModule=stylesFromModule;_exports.stylesFromTemplate=stylesFromTemplate;_exports.stylesFromModuleImports=stylesFromModuleImports;_exports.cssFromModules=cssFromModules;_exports.cssFromModule=cssFromModule;_exports.cssFromTemplate=cssFromTemplate;_exports.cssFromModuleImports=cssFromModuleImports;_exports.templatize=_templatize;_exports.modelForElement=_modelForElement;_exports.invalidate=invalidate;_exports.invalidateTemplate=invalidateTemplate;_exports.isValid=isValid;_exports.templateIsValid=templateIsValid;_exports.isValidating=isValidating;_exports.templateIsValidating=templateIsValidating;_exports.startValidating=startValidating;_exports.startValidatingTemplate=startValidatingTemplate;_exports.elementsAreInvalid=elementsAreInvalid;_exports.updateNativeProperties=updateNativeProperties;_exports.getComputedStyleValue=_getComputedStyleValue;_exports.detectMixin=_detectMixin;_exports.parse=parse;_exports.stringify=stringify;_exports.removeCustomPropAssignment=removeCustomPropAssignment;_exports.$documentWaitDefault=documentWait;_exports.toCssText=toCssText;_exports.rulesForStyle=rulesForStyle;_exports.isKeyframesSelector=isKeyframesSelector;_exports.forEachRule=forEachRule;_exports.applyCss=applyCss;_exports.createScopeStyle=createScopeStyle;_exports.applyStylePlaceHolder=applyStylePlaceHolder;_exports.applyStyle=applyStyle;_exports.isTargetedBuild=isTargetedBuild;_exports.findMatchingParen=findMatchingParen;_exports.processVariableAndFallback=processVariableAndFallback;_exports.setElementClassRaw=setElementClassRaw;_exports.getIsExtends=getIsExtends;_exports.gatherStyleText=gatherStyleText;_exports.splitSelectorList=splitSelectorList;_exports.getCssBuild=getCssBuild;_exports.elementHasBuiltCss=elementHasBuiltCss;_exports.getBuildComment=getBuildComment;_exports.isOptimalCssBuild=isOptimalCssBuild;_exports.processUnscopedStyle=processUnscopedStyle;_exports.isUnscopedStyle=isUnscopedStyle;_exports.render$2=_exports.render=render;_exports.removeNodesFromTemplate=removeNodesFromTemplate;_exports.insertNodeIntoTemplate=insertNodeIntoTemplate;_exports.render$1=render$1;_exports.defaultTemplateFactory=defaultTemplateFactory;_exports.LitElement=_exports.svg$1=_exports.svg=_exports.html$4=_exports.html=_exports.IronSelection=_exports.IronSelectableBehavior=_exports.IronMultiSelectableBehavior=_exports.IronMultiSelectableBehaviorImpl=_exports.IronScrollTargetBehavior=_exports.IronResizableBehavior=_exports.IronMeta=_exports.IronControlState=_exports.IronButtonState=_exports.IronButtonStateImpl=_exports.IronA11yKeysBehavior=_exports.AppRouteConverterBehavior=_exports.scroll=_exports.queryAllRoot=_exports.registerEffect=_exports.scrollTimingFunction=_exports._scrollTimer=_exports._scrollEffects=_exports.AppScrollEffectsBehavior=_exports.AppLayoutBehavior=_exports.$postView=_exports.$postList=_exports.$notFound=_exports.$blogMain=_exports.$blogAbout=_exports.$litHtml=_exports.$shadyRender=_exports.$modifyTemplate=_exports.$litExtended=_exports.$unscopedStyleHandler=_exports.$templateMap=_exports.$styleUtil=_exports.$styleSettings=_exports.$documentWait=_exports.$customStyleInterface$1=_exports.$cssParse=_exports.$commonUtils=_exports.$commonRegex=_exports.$applyShim$1=_exports.$applyShimUtils=_exports.$polymerLegacy=_exports.$polymerElement=_exports.$templatize=_exports.$styleGather=_exports.$settings=_exports.$resolveUrl=_exports.$renderStatus=_exports.$path=_exports.$mixin=_exports.$htmlTag=_exports.$gestures=_exports.$flush=_exports.$flattenedNodesObserver=_exports.$debounce=_exports.$caseMap=_exports.$async=_exports.$arraySplice=_exports.$templateStamp=_exports.$propertyEffects=_exports.$propertyAccessors=_exports.$propertiesMixin=_exports.$propertiesChanged=_exports.$mutableData=_exports.$gestureEventListeners=_exports.$elementMixin=_exports.$dirMixin=_exports.$templatizerBehavior=_exports.$polymerDom=_exports.$polymerFn=_exports.$mutableDataBehavior=_exports.$legacyElementMixin=_exports.$class=_exports.$domRepeat=_exports.$domModule=_exports.$domIf=_exports.$domBind=_exports.$customStyle=_exports.$arraySelector=_exports.$paperSpinnerBehavior=_exports.$paperRippleBehavior=_exports.$paperInkyFocusBehavior=_exports.$litElement=_exports.$ironSelection=_exports.$ironSelectable=_exports.$ironMultiSelectable=_exports.$ironScrollTargetBehavior=_exports.$ironResizableBehavior=_exports.$ironMeta=_exports.$ironControlState=_exports.$ironButtonState=_exports.$ironA11yKeysBehavior=_exports.$appRouteConverterBehavior=_exports.$helpers=_exports.$appScrollEffectsBehavior=_exports.$appLayoutBehavior=void 0;_exports.EventPart=_exports.PropertyPart=_exports.BooleanAttributePart=_exports.extendedPartCallback=_exports.scopingAttribute=_exports.$templateMapDefault=_exports.wrap=_exports.nativeCssVariables=_exports.disableRuntime=_exports.cssBuild=_exports.nativeShadow=_exports.CustomStyleInterfaceInterface=_exports.$customStyleInterfaceDefault=_exports.CustomStyleProvider=_exports.types=_exports.StyleNode=_exports.HOST_SUFFIX=_exports.HOST_PREFIX=_exports.BRACKETED=_exports.IS_VAR=_exports.MEDIA_MATCH=_exports.ANIMATION_MATCH=_exports.VAR_CONSUMED=_exports.MIXIN_MATCH=_exports.VAR_ASSIGN=_exports.$applyShimDefault=_exports.Base=_exports.PolymerElement=_exports.TemplateInstanceBase=_exports.setAllowTemplateFromDomModule=_exports.allowTemplateFromDomModule=_exports.setStrictTemplatePolicy=_exports.strictTemplatePolicy=_exports.setPassiveTouchGestures=_exports.passiveTouchGestures=_exports.setSanitizeDOMValue=_exports.sanitizeDOMValue=_exports.setRootPath=_exports.rootPath=_exports.useNativeCustomElements=_exports.useNativeCSSProperties=_exports.useShadow=_exports.isDeep=_exports.dedupingMixin=_exports.htmlLiteral=_exports.html$3=_exports.html$2=_exports.html$1=_exports.remove=_exports.add=_exports.findOriginalTarget=_exports.recognizers=_exports.gestures=_exports.FlattenedNodesObserver=_exports.Debouncer=_exports.microTask=_exports.idlePeriod=_exports.animationFrame=_exports.timeOut=_exports.TemplateStamp=_exports.PropertyEffects=_exports.PropertyAccessors=_exports.PropertiesMixin=_exports.PropertiesChanged=_exports.OptionalMutableData=_exports.MutableData=_exports.GestureEventListeners=_exports.updateStyles=_exports.registrations=_exports.instanceCount=_exports.ElementMixin=_exports.version$1=_exports.version=_exports.DirMixin=_exports.Templatizer=_exports.dom=_exports.EventApi=_exports.DomApi=_exports.matchesSelector=_exports.enqueueDebouncer=_exports.addDebouncer=_exports.flush$1=_exports.flush=_exports.Polymer$1=_exports.Polymer=_exports.OptionalMutableDataBehavior=_exports.MutableDataBehavior=_exports.LegacyElementMixin=_exports.Class=_exports.DomRepeat=_exports.DomModule=_exports.DomIf=_exports.DomBind=_exports.CustomStyle=_exports.ArraySelector=_exports.ArraySelectorMixin=_exports.PaperSpinnerBehavior=_exports.PaperRippleBehavior=_exports.PaperInkyFocusBehavior=_exports.PaperInkyFocusBehaviorImpl=void 0;_exports.PostView=_exports.PostList=_exports.NotFound=_exports.BlogMain=_exports.BlogAbout=_exports.removeNodes=_exports.reparentNodes=_exports.TemplateInstance=_exports.defaultPartCallback=_exports.NodePart=_exports.AttributePart=_exports.directiveValue=_exports.noChange=_exports.directive=_exports.getValue=_exports.Template=_exports.isTemplatePartActive=_exports.TemplatePart=_exports.SVGTemplateResult=_exports.templateCaches=_exports.TemplateResult$1=_exports.TemplateResult=_exports.svg$3=_exports.svg$2=_exports.html$6=_exports.html$5=void 0;meta=babelHelpers.interopRequireWildcard(meta);function _templateObject21_7f57aa202bd911e99390d3b784e8dc1a(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style>\n        :host {\n          --app-drawer-width: 256px;\n\n          /* Palette */\n          --blog-dark-title: hsl(200, 8%, 19%);\n          --blog-dark-main: hsl(200, 8%, 15%);\n          --blog-dark-side: hsl(200, 8%, 18%);\n          --blog-dark-light: hsl(200, 8%, 22%);\n          --blog-black: #0b0c0c;\n          --blog-white: #c0c1c2;\n          --blog-gray: #898b8b;\n          /* Generic colors */\n          --light-text-color: #00FF00;\n          --dark-text-color: #000000;\n          --light-background-color: #FFFFFF;\n          --dark-background-color: #000000;\n\n          /* Theme Specific Colors */\n          --drawer-toolbar-background-color:     var(--blog-dark-side);\n          --drawer-toolbar-color:                var(--light-text-color);\n          --drawer-background-color:             var(--blog-dark-side);\n\n          --header-toolbar-background-color:     var(--blog-dark-title);\n          --header-toolbar-color:                var(--light-text-color);\n          --header-background-color:             var(--blog-dark-main);\n\n          --menu-item-color:                     var(--light-text-color);\n          --menu-item-selected-color:            var(--light-text-color);\n          --menu-item-selected-background-color: var(--blog-dark-main);\n          --menu-item-hover-color:               var(--blog-dark-light);\n\n          --card-background-color:               var(--blog-dark-light);\n          --border-layout-color:                 var(--blog-black);\n          --ink-color:                           var(--blog-white);\n          --icon-color:                          var(--blog-white);\n\n          --table-row-odd:                       #FAFAFA;\n          --table-row-even:                      #FFFFFF;\n          --table-row-hover:                     #CCCCCC;\n        }\n\n        app-drawer-layout:not([narrow]) [drawer-toggle] { display: none; }\n\n        app-drawer-layout {\n          background-color: var(--blog-dark-main);\n          color: var(--light-text-color);\n        }\n\n        a paper-icon-button,\n        a:active paper-icon-button,\n        a:link paper-icon-button,\n        a:visited paper-icon-button {\n          color: var(--light-text-color);\n        }\n\n        app-header app-toolbar {\n          color: var(--header-toolbar-color);\n          background-color: var(--header-toolbar-background-color);\n          border-bottom: 1px solid var(--border-layout-color);\n          /*box-shadow: 100px 20px 50px 20px #888;*/\n          /*background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6));*/\n        }\n\n        app-header paper-icon-button {\n          --paper-icon-button-ink-color: var(--ink-color);\n        }\n\n        app-header-layout {\n          background-color: var(--header-background-color);\n          height: fit-content;\n          padding-bottom: 1px;\n        }\n\n        app-drawer {\n          --app-drawer-content-container: {\n            background-color: var(--drawer-background-color);\n            border-right: 1px solid var(--border-layout-color);\n          };\n        }\n\n        app-drawer app-toolbar {\n          color: var(--drawer-toolbar-color);\n          background-color: var(--drawer-toolbar-background-color);\n        }\n\n        .drawer-list {\n          margin: 0 20px;\n          color: red;\n        }\n\n        .drawer-list a {\n          display: block;\n          padding: 0 16px;\n          margin: 5px 0;\n          text-decoration: none;\n          color: var(--menu-item-color);\n          line-height: 40px;\n        }\n\n        .drawer-list a.iron-selected, a.iron-selected iron-icon {\n          font-weight: bold;\n          color: var(--menu-item-selected-color);\n          background-color: var(--menu-item-selected-background-color);\n        }\n\n        .drawer-list a:hover, .drawer-list a:hover iron-icon {\n          background-color: var(--menu-item-hover-color);\n        }\n\n        .drawer-list a:focus {\n          outline: none;\n        }\n\n        .drawer-list iron-icon {\n          padding-bottom: 3px;\n          padding-right: 5px;\n        }\n\n        .card {\n          margin: 20px;\n          padding: 20px;\n          border-radius: 5px;\n          background-color: var(--card-background-color);\n          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n          /* overflow-y: auto; */\n        }\n\n        #appIcon {\n          width: 40px;\n          height: 40px;\n          margin-right: 10px;\n        }\n      </style>\n\n      <app-location use-hash-as-path></app-location>\n      <app-route pattern=\"/:page\"></app-route>\n\n      <app-drawer-layout fullbleed>\n        <app-drawer id=\"drawer\" slot=\"drawer\" swipe-open no-focus-trap>\n          <app-toolbar id=\"drawerToolbar\">\n            <iron-icon id=\"appIcon\" src=\"images/manifest/icon-512x512.png\"></iron-icon>\n            <span>Menu</span>\n          </app-toolbar>\n          <div id=\"drawerContent\">\n            <iron-selector attr-for-selected=\"page\" id=\"ironSelector\" role=\"navigation\" class=\"drawer-list\">\n              <a page=\"post-list\"  href=\"#/post-list\"><iron-icon icon=\"store\"></iron-icon>In\xEDcio</a>\n              <a page=\"blog-about\" href=\"#/blog-about\"><iron-icon icon=\"info\"></iron-icon>Sobre</a>\n            </iron-selector>\n          </div>\n        </app-drawer>\n        <app-header-layout>\n          <app-header slot=\"header\" fixed>\n            <app-toolbar>\n              <paper-icon-button icon=\"menu\" drawer-toggle></paper-icon-button>\n              <div main-title>Blog Paulo Alexandre</div>\n              <paper-icon-button icon=\"home\" on-tap=\"","\" title=\"Ir para o in\xEDcio\"></paper-icon-button>\n              <paper-icon-button icon=\"refresh\" on-tap=\"","\" title=\"Recarregar\"></paper-icon-button>\n            </app-toolbar>\n          </app-header>\n          <div class=\"card\">\n            <iron-pages id=\"ironPages\"\n              selected=\"","\"\n              attr-for-selected=\"page\"\n              fallback-selection=\"not-found\"\n              role=\"main\">\n              <post-list page=\"post-list\" posts=\"","\"></post-list>\n              <post-view page=\"post-view\"></post-view>\n              <blog-about page=\"blog-about\"></blog-about>\n              <not-found  page=\"not-found\"></not-found>\n            </iron-pages>\n          </div>\n        </app-header-layout>\n      </app-drawer-layout>\n    "]);_templateObject21_7f57aa202bd911e99390d3b784e8dc1a=function _templateObject21_7f57aa202bd911e99390d3b784e8dc1a(){return data;};return data;}function _templateObject20_7f57aa202bd911e99390d3b784e8dc1a(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style>\n        p {\n          font-weight: bold;\n          text-align: center;\n          color: var(--light-text-color);\n        }\n        img {\n          width: 90%;\n          display: block;\n          margin: 0 auto;\n        }\n        a {\n          color: var(--light-text-color);\n          text-decoration: none;\n        }\n      </style>\n      <a href=\"#/post-list\">\n        <p>Voc\xEA encontrou um Link morto</p>\n        <img src=\"/images/dead-link.png\" alt=\"link morto\">\n        <p>Clique para voltar ao in\xEDcio</p>\n      </a>\n    "]);_templateObject20_7f57aa202bd911e99390d3b784e8dc1a=function _templateObject20_7f57aa202bd911e99390d3b784e8dc1a(){return data;};return data;}function _templateObject19_7f57aa202bd911e99390d3b784e8dc1a(){var data=babelHelpers.taggedTemplateLiteral(["\n      <link href=\"../node_modules/prismjs/themes/prism-tomorrow.css\" rel=\"stylesheet\" />\n      <link href=\"../node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css\" rel=\"stylesheet\" />\n      <link href=\"../node_modules/prismjs/plugins/unescaped-markup/prism-unescaped-markup.css\" rel=\"stylesheet\" />\n      <style>\n        a {\n          color: var(--light-text-color);\n        }\n\n        #loading {\n          width: 100%;\n          text-align: center;\n          color: var(--light-text-color);\n        }\n\n        paper-spinner {\n          height: 100px;\n          width: 100px;\n          --paper-spinner-layer-1-color: var(--light-text-color);\n          --paper-spinner-layer-2-color: var(--light-text-color);\n          --paper-spinner-layer-3-color: var(--light-text-color);\n          --paper-spinner-layer-4-color: var(--light-text-color);\n          --paper-spinner-stroke-width: 10px;\n        }\n\n        /* pre {\n          background-color: var(--blog-dark-main);\n          padding: 10px 20px;\n          overflow: auto;\n        } */\n\n        header {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n        }\n\n        .meta {\n          display: flex;\n          flex-direction: column;\n        }\n\n        .meta > p {\n          font-size: small;\n          margin: 0;\n          text-align: right;\n        }\n\n        .title {\n          display: flex;\n        }\n\n        pre, code {\n          font-size: small;\n        }\n\n        pre.line-numbers {\n          white-space: pre-wrap;\n        }\n      </style>\n      <article id=\"content\">","</article>\n    "]);_templateObject19_7f57aa202bd911e99390d3b784e8dc1a=function _templateObject19_7f57aa202bd911e99390d3b784e8dc1a(){return data;};return data;}function _templateObject18_7f57aa202bd911e99390d3b784e8dc1a(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style>\n        :host { display: block; }\n        a {\n          color: var(--light-text-color);\n          text-decoration: none;\n        }\n      </style>\n      <div class=\"card\">\n        <h2>Posts</h2>\n        <ul>\n          <iron-list items=\"","\" as=\"post\">\n            <template>\n                <li><a href=\"#/post-view/[[post.slug]]\">\u2022 [[post.title]]</a></li>\n            </template>\n          </iron-list>\n        </ul>\n      </div>\n    "]);_templateObject18_7f57aa202bd911e99390d3b784e8dc1a=function _templateObject18_7f57aa202bd911e99390d3b784e8dc1a(){return data;};return data;}function _templateObject17_7f57aa202bd911e99390d3b784e8dc1a(){var data=babelHelpers.taggedTemplateLiteral(["\n      <h2>Sobre</h2>\n      <p>Aqui compartilho o que vou aprendendo.</p>\n      <p>@paulequilibrio</p>\n    "]);_templateObject17_7f57aa202bd911e99390d3b784e8dc1a=function _templateObject17_7f57aa202bd911e99390d3b784e8dc1a(){return data;};return data;}function _templateObject16_7f57aa202bd911e99390d3b784e8dc1a(){var data=babelHelpers.taggedTemplateLiteral(["\n  <style include=\"paper-spinner-styles\"></style>\n\n  <div id=\"spinnerContainer\" class-name=\"[[__computeContainerClasses(active, __coolingDown)]]\" on-animationend=\"__reset\" on-webkit-animation-end=\"__reset\">\n    <div class=\"spinner-layer layer-1\">\n      <div class=\"circle-clipper left\"></div>\n      <div class=\"circle-clipper right\"></div>\n    </div>\n\n    <div class=\"spinner-layer layer-2\">\n      <div class=\"circle-clipper left\"></div>\n      <div class=\"circle-clipper right\"></div>\n    </div>\n\n    <div class=\"spinner-layer layer-3\">\n      <div class=\"circle-clipper left\"></div>\n      <div class=\"circle-clipper right\"></div>\n    </div>\n\n    <div class=\"spinner-layer layer-4\">\n      <div class=\"circle-clipper left\"></div>\n      <div class=\"circle-clipper right\"></div>\n    </div>\n  </div>\n"]);_templateObject16_7f57aa202bd911e99390d3b784e8dc1a=function _templateObject16_7f57aa202bd911e99390d3b784e8dc1a(){return data;};return data;}function _templateObject15_7f57aa202bd911e99390d3b784e8dc1a(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        padding: 8px;\n        outline: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        cursor: pointer;\n        z-index: 0;\n        line-height: 1;\n\n        width: 40px;\n        height: 40px;\n\n        /*\n          NOTE: Both values are needed, since some phones require the value to\n          be `transparent`.\n        */\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-tap-highlight-color: transparent;\n\n        /* Because of polymer/2558, this style has lower specificity than * */\n        box-sizing: border-box !important;\n\n        @apply --paper-icon-button;\n      }\n\n      :host #ink {\n        color: var(--paper-icon-button-ink-color, var(--primary-text-color));\n        opacity: 0.6;\n      }\n\n      :host([disabled]) {\n        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));\n        pointer-events: none;\n        cursor: auto;\n\n        @apply --paper-icon-button-disabled;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host(:hover) {\n        @apply --paper-icon-button-hover;\n      }\n\n      iron-icon {\n        --iron-icon-width: 100%;\n        --iron-icon-height: 100%;\n      }\n    </style>\n\n    <iron-icon id=\"icon\" src=\"[[src]]\" icon=\"[[icon]]\"\n               alt$=\"[[alt]]\"></iron-icon>\n  "],["\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        padding: 8px;\n        outline: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        cursor: pointer;\n        z-index: 0;\n        line-height: 1;\n\n        width: 40px;\n        height: 40px;\n\n        /*\n          NOTE: Both values are needed, since some phones require the value to\n          be \\`transparent\\`.\n        */\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-tap-highlight-color: transparent;\n\n        /* Because of polymer/2558, this style has lower specificity than * */\n        box-sizing: border-box !important;\n\n        @apply --paper-icon-button;\n      }\n\n      :host #ink {\n        color: var(--paper-icon-button-ink-color, var(--primary-text-color));\n        opacity: 0.6;\n      }\n\n      :host([disabled]) {\n        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));\n        pointer-events: none;\n        cursor: auto;\n\n        @apply --paper-icon-button-disabled;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host(:hover) {\n        @apply --paper-icon-button-hover;\n      }\n\n      iron-icon {\n        --iron-icon-width: 100%;\n        --iron-icon-height: 100%;\n      }\n    </style>\n\n    <iron-icon id=\"icon\" src=\"[[src]]\" icon=\"[[icon]]\"\n               alt$=\"[[alt]]\"></iron-icon>\n  "]);_templateObject15_7f57aa202bd911e99390d3b784e8dc1a=function _templateObject15_7f57aa202bd911e99390d3b784e8dc1a(){return data;};return data;}function _templateObject14_7f57aa202bd911e99390d3b784e8dc1a(){var data=babelHelpers.taggedTemplateLiteral(["\n<custom-style>\n  <style is=\"custom-style\">\n    html {\n      /*\n       * You can use these generic variables in your elements for easy theming.\n       * For example, if all your elements use `--primary-text-color` as its main\n       * color, then switching from a light to a dark theme is just a matter of\n       * changing the value of `--primary-text-color` in your application.\n       */\n      --primary-text-color: var(--light-theme-text-color);\n      --primary-background-color: var(--light-theme-background-color);\n      --secondary-text-color: var(--light-theme-secondary-color);\n      --disabled-text-color: var(--light-theme-disabled-color);\n      --divider-color: var(--light-theme-divider-color);\n      --error-color: var(--paper-deep-orange-a700);\n\n      /*\n       * Primary and accent colors. Also see color.js for more colors.\n       */\n      --primary-color: var(--paper-indigo-500);\n      --light-primary-color: var(--paper-indigo-100);\n      --dark-primary-color: var(--paper-indigo-700);\n\n      --accent-color: var(--paper-pink-a200);\n      --light-accent-color: var(--paper-pink-a100);\n      --dark-accent-color: var(--paper-pink-a400);\n\n\n      /*\n       * Material Design Light background theme\n       */\n      --light-theme-background-color: #ffffff;\n      --light-theme-base-color: #000000;\n      --light-theme-text-color: var(--paper-grey-900);\n      --light-theme-secondary-color: #737373;  /* for secondary text and icons */\n      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */\n      --light-theme-divider-color: #dbdbdb;\n\n      /*\n       * Material Design Dark background theme\n       */\n      --dark-theme-background-color: var(--paper-grey-900);\n      --dark-theme-base-color: #ffffff;\n      --dark-theme-text-color: #ffffff;\n      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */\n      --dark-theme-disabled-color: #646464;  /* disabled/hint text */\n      --dark-theme-divider-color: #3c3c3c;\n\n      /*\n       * Deprecated values because of their confusing names.\n       */\n      --text-primary-color: var(--dark-theme-text-color);\n      --default-primary-color: var(--primary-color);\n    }\n  </style>\n</custom-style>"],["\n<custom-style>\n  <style is=\"custom-style\">\n    html {\n      /*\n       * You can use these generic variables in your elements for easy theming.\n       * For example, if all your elements use \\`--primary-text-color\\` as its main\n       * color, then switching from a light to a dark theme is just a matter of\n       * changing the value of \\`--primary-text-color\\` in your application.\n       */\n      --primary-text-color: var(--light-theme-text-color);\n      --primary-background-color: var(--light-theme-background-color);\n      --secondary-text-color: var(--light-theme-secondary-color);\n      --disabled-text-color: var(--light-theme-disabled-color);\n      --divider-color: var(--light-theme-divider-color);\n      --error-color: var(--paper-deep-orange-a700);\n\n      /*\n       * Primary and accent colors. Also see color.js for more colors.\n       */\n      --primary-color: var(--paper-indigo-500);\n      --light-primary-color: var(--paper-indigo-100);\n      --dark-primary-color: var(--paper-indigo-700);\n\n      --accent-color: var(--paper-pink-a200);\n      --light-accent-color: var(--paper-pink-a100);\n      --dark-accent-color: var(--paper-pink-a400);\n\n\n      /*\n       * Material Design Light background theme\n       */\n      --light-theme-background-color: #ffffff;\n      --light-theme-base-color: #000000;\n      --light-theme-text-color: var(--paper-grey-900);\n      --light-theme-secondary-color: #737373;  /* for secondary text and icons */\n      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */\n      --light-theme-divider-color: #dbdbdb;\n\n      /*\n       * Material Design Dark background theme\n       */\n      --dark-theme-background-color: var(--paper-grey-900);\n      --dark-theme-base-color: #ffffff;\n      --dark-theme-text-color: #ffffff;\n      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */\n      --dark-theme-disabled-color: #646464;  /* disabled/hint text */\n      --dark-theme-divider-color: #3c3c3c;\n\n      /*\n       * Deprecated values because of their confusing names.\n       */\n      --text-primary-color: var(--dark-theme-text-color);\n      --default-primary-color: var(--primary-color);\n    }\n  </style>\n</custom-style>"]);_templateObject14_7f57aa202bd911e99390d3b784e8dc1a=function _templateObject14_7f57aa202bd911e99390d3b784e8dc1a(){return data;};return data;}function _templateObject13_7f57aa202bd911e99390d3b784e8dc1a(){var data=babelHelpers.taggedTemplateLiteral(["\n<custom-style>\n  <style is=\"custom-style\">\n    html {\n\n      /* Material Design color palette for Google products */\n\n      --google-red-100: #f4c7c3;\n      --google-red-300: #e67c73;\n      --google-red-500: #db4437;\n      --google-red-700: #c53929;\n\n      --google-blue-100: #c6dafc;\n      --google-blue-300: #7baaf7;\n      --google-blue-500: #4285f4;\n      --google-blue-700: #3367d6;\n\n      --google-green-100: #b7e1cd;\n      --google-green-300: #57bb8a;\n      --google-green-500: #0f9d58;\n      --google-green-700: #0b8043;\n\n      --google-yellow-100: #fce8b2;\n      --google-yellow-300: #f7cb4d;\n      --google-yellow-500: #f4b400;\n      --google-yellow-700: #f09300;\n\n      --google-grey-100: #f5f5f5;\n      --google-grey-300: #e0e0e0;\n      --google-grey-500: #9e9e9e;\n      --google-grey-700: #616161;\n\n      /* Material Design color palette from online spec document */\n\n      --paper-red-50: #ffebee;\n      --paper-red-100: #ffcdd2;\n      --paper-red-200: #ef9a9a;\n      --paper-red-300: #e57373;\n      --paper-red-400: #ef5350;\n      --paper-red-500: #f44336;\n      --paper-red-600: #e53935;\n      --paper-red-700: #d32f2f;\n      --paper-red-800: #c62828;\n      --paper-red-900: #b71c1c;\n      --paper-red-a100: #ff8a80;\n      --paper-red-a200: #ff5252;\n      --paper-red-a400: #ff1744;\n      --paper-red-a700: #d50000;\n\n      --paper-pink-50: #fce4ec;\n      --paper-pink-100: #f8bbd0;\n      --paper-pink-200: #f48fb1;\n      --paper-pink-300: #f06292;\n      --paper-pink-400: #ec407a;\n      --paper-pink-500: #e91e63;\n      --paper-pink-600: #d81b60;\n      --paper-pink-700: #c2185b;\n      --paper-pink-800: #ad1457;\n      --paper-pink-900: #880e4f;\n      --paper-pink-a100: #ff80ab;\n      --paper-pink-a200: #ff4081;\n      --paper-pink-a400: #f50057;\n      --paper-pink-a700: #c51162;\n\n      --paper-purple-50: #f3e5f5;\n      --paper-purple-100: #e1bee7;\n      --paper-purple-200: #ce93d8;\n      --paper-purple-300: #ba68c8;\n      --paper-purple-400: #ab47bc;\n      --paper-purple-500: #9c27b0;\n      --paper-purple-600: #8e24aa;\n      --paper-purple-700: #7b1fa2;\n      --paper-purple-800: #6a1b9a;\n      --paper-purple-900: #4a148c;\n      --paper-purple-a100: #ea80fc;\n      --paper-purple-a200: #e040fb;\n      --paper-purple-a400: #d500f9;\n      --paper-purple-a700: #aa00ff;\n\n      --paper-deep-purple-50: #ede7f6;\n      --paper-deep-purple-100: #d1c4e9;\n      --paper-deep-purple-200: #b39ddb;\n      --paper-deep-purple-300: #9575cd;\n      --paper-deep-purple-400: #7e57c2;\n      --paper-deep-purple-500: #673ab7;\n      --paper-deep-purple-600: #5e35b1;\n      --paper-deep-purple-700: #512da8;\n      --paper-deep-purple-800: #4527a0;\n      --paper-deep-purple-900: #311b92;\n      --paper-deep-purple-a100: #b388ff;\n      --paper-deep-purple-a200: #7c4dff;\n      --paper-deep-purple-a400: #651fff;\n      --paper-deep-purple-a700: #6200ea;\n\n      --paper-indigo-50: #e8eaf6;\n      --paper-indigo-100: #c5cae9;\n      --paper-indigo-200: #9fa8da;\n      --paper-indigo-300: #7986cb;\n      --paper-indigo-400: #5c6bc0;\n      --paper-indigo-500: #3f51b5;\n      --paper-indigo-600: #3949ab;\n      --paper-indigo-700: #303f9f;\n      --paper-indigo-800: #283593;\n      --paper-indigo-900: #1a237e;\n      --paper-indigo-a100: #8c9eff;\n      --paper-indigo-a200: #536dfe;\n      --paper-indigo-a400: #3d5afe;\n      --paper-indigo-a700: #304ffe;\n\n      --paper-blue-50: #e3f2fd;\n      --paper-blue-100: #bbdefb;\n      --paper-blue-200: #90caf9;\n      --paper-blue-300: #64b5f6;\n      --paper-blue-400: #42a5f5;\n      --paper-blue-500: #2196f3;\n      --paper-blue-600: #1e88e5;\n      --paper-blue-700: #1976d2;\n      --paper-blue-800: #1565c0;\n      --paper-blue-900: #0d47a1;\n      --paper-blue-a100: #82b1ff;\n      --paper-blue-a200: #448aff;\n      --paper-blue-a400: #2979ff;\n      --paper-blue-a700: #2962ff;\n\n      --paper-light-blue-50: #e1f5fe;\n      --paper-light-blue-100: #b3e5fc;\n      --paper-light-blue-200: #81d4fa;\n      --paper-light-blue-300: #4fc3f7;\n      --paper-light-blue-400: #29b6f6;\n      --paper-light-blue-500: #03a9f4;\n      --paper-light-blue-600: #039be5;\n      --paper-light-blue-700: #0288d1;\n      --paper-light-blue-800: #0277bd;\n      --paper-light-blue-900: #01579b;\n      --paper-light-blue-a100: #80d8ff;\n      --paper-light-blue-a200: #40c4ff;\n      --paper-light-blue-a400: #00b0ff;\n      --paper-light-blue-a700: #0091ea;\n\n      --paper-cyan-50: #e0f7fa;\n      --paper-cyan-100: #b2ebf2;\n      --paper-cyan-200: #80deea;\n      --paper-cyan-300: #4dd0e1;\n      --paper-cyan-400: #26c6da;\n      --paper-cyan-500: #00bcd4;\n      --paper-cyan-600: #00acc1;\n      --paper-cyan-700: #0097a7;\n      --paper-cyan-800: #00838f;\n      --paper-cyan-900: #006064;\n      --paper-cyan-a100: #84ffff;\n      --paper-cyan-a200: #18ffff;\n      --paper-cyan-a400: #00e5ff;\n      --paper-cyan-a700: #00b8d4;\n\n      --paper-teal-50: #e0f2f1;\n      --paper-teal-100: #b2dfdb;\n      --paper-teal-200: #80cbc4;\n      --paper-teal-300: #4db6ac;\n      --paper-teal-400: #26a69a;\n      --paper-teal-500: #009688;\n      --paper-teal-600: #00897b;\n      --paper-teal-700: #00796b;\n      --paper-teal-800: #00695c;\n      --paper-teal-900: #004d40;\n      --paper-teal-a100: #a7ffeb;\n      --paper-teal-a200: #64ffda;\n      --paper-teal-a400: #1de9b6;\n      --paper-teal-a700: #00bfa5;\n\n      --paper-green-50: #e8f5e9;\n      --paper-green-100: #c8e6c9;\n      --paper-green-200: #a5d6a7;\n      --paper-green-300: #81c784;\n      --paper-green-400: #66bb6a;\n      --paper-green-500: #4caf50;\n      --paper-green-600: #43a047;\n      --paper-green-700: #388e3c;\n      --paper-green-800: #2e7d32;\n      --paper-green-900: #1b5e20;\n      --paper-green-a100: #b9f6ca;\n      --paper-green-a200: #69f0ae;\n      --paper-green-a400: #00e676;\n      --paper-green-a700: #00c853;\n\n      --paper-light-green-50: #f1f8e9;\n      --paper-light-green-100: #dcedc8;\n      --paper-light-green-200: #c5e1a5;\n      --paper-light-green-300: #aed581;\n      --paper-light-green-400: #9ccc65;\n      --paper-light-green-500: #8bc34a;\n      --paper-light-green-600: #7cb342;\n      --paper-light-green-700: #689f38;\n      --paper-light-green-800: #558b2f;\n      --paper-light-green-900: #33691e;\n      --paper-light-green-a100: #ccff90;\n      --paper-light-green-a200: #b2ff59;\n      --paper-light-green-a400: #76ff03;\n      --paper-light-green-a700: #64dd17;\n\n      --paper-lime-50: #f9fbe7;\n      --paper-lime-100: #f0f4c3;\n      --paper-lime-200: #e6ee9c;\n      --paper-lime-300: #dce775;\n      --paper-lime-400: #d4e157;\n      --paper-lime-500: #cddc39;\n      --paper-lime-600: #c0ca33;\n      --paper-lime-700: #afb42b;\n      --paper-lime-800: #9e9d24;\n      --paper-lime-900: #827717;\n      --paper-lime-a100: #f4ff81;\n      --paper-lime-a200: #eeff41;\n      --paper-lime-a400: #c6ff00;\n      --paper-lime-a700: #aeea00;\n\n      --paper-yellow-50: #fffde7;\n      --paper-yellow-100: #fff9c4;\n      --paper-yellow-200: #fff59d;\n      --paper-yellow-300: #fff176;\n      --paper-yellow-400: #ffee58;\n      --paper-yellow-500: #ffeb3b;\n      --paper-yellow-600: #fdd835;\n      --paper-yellow-700: #fbc02d;\n      --paper-yellow-800: #f9a825;\n      --paper-yellow-900: #f57f17;\n      --paper-yellow-a100: #ffff8d;\n      --paper-yellow-a200: #ffff00;\n      --paper-yellow-a400: #ffea00;\n      --paper-yellow-a700: #ffd600;\n\n      --paper-amber-50: #fff8e1;\n      --paper-amber-100: #ffecb3;\n      --paper-amber-200: #ffe082;\n      --paper-amber-300: #ffd54f;\n      --paper-amber-400: #ffca28;\n      --paper-amber-500: #ffc107;\n      --paper-amber-600: #ffb300;\n      --paper-amber-700: #ffa000;\n      --paper-amber-800: #ff8f00;\n      --paper-amber-900: #ff6f00;\n      --paper-amber-a100: #ffe57f;\n      --paper-amber-a200: #ffd740;\n      --paper-amber-a400: #ffc400;\n      --paper-amber-a700: #ffab00;\n\n      --paper-orange-50: #fff3e0;\n      --paper-orange-100: #ffe0b2;\n      --paper-orange-200: #ffcc80;\n      --paper-orange-300: #ffb74d;\n      --paper-orange-400: #ffa726;\n      --paper-orange-500: #ff9800;\n      --paper-orange-600: #fb8c00;\n      --paper-orange-700: #f57c00;\n      --paper-orange-800: #ef6c00;\n      --paper-orange-900: #e65100;\n      --paper-orange-a100: #ffd180;\n      --paper-orange-a200: #ffab40;\n      --paper-orange-a400: #ff9100;\n      --paper-orange-a700: #ff6500;\n\n      --paper-deep-orange-50: #fbe9e7;\n      --paper-deep-orange-100: #ffccbc;\n      --paper-deep-orange-200: #ffab91;\n      --paper-deep-orange-300: #ff8a65;\n      --paper-deep-orange-400: #ff7043;\n      --paper-deep-orange-500: #ff5722;\n      --paper-deep-orange-600: #f4511e;\n      --paper-deep-orange-700: #e64a19;\n      --paper-deep-orange-800: #d84315;\n      --paper-deep-orange-900: #bf360c;\n      --paper-deep-orange-a100: #ff9e80;\n      --paper-deep-orange-a200: #ff6e40;\n      --paper-deep-orange-a400: #ff3d00;\n      --paper-deep-orange-a700: #dd2c00;\n\n      --paper-brown-50: #efebe9;\n      --paper-brown-100: #d7ccc8;\n      --paper-brown-200: #bcaaa4;\n      --paper-brown-300: #a1887f;\n      --paper-brown-400: #8d6e63;\n      --paper-brown-500: #795548;\n      --paper-brown-600: #6d4c41;\n      --paper-brown-700: #5d4037;\n      --paper-brown-800: #4e342e;\n      --paper-brown-900: #3e2723;\n\n      --paper-grey-50: #fafafa;\n      --paper-grey-100: #f5f5f5;\n      --paper-grey-200: #eeeeee;\n      --paper-grey-300: #e0e0e0;\n      --paper-grey-400: #bdbdbd;\n      --paper-grey-500: #9e9e9e;\n      --paper-grey-600: #757575;\n      --paper-grey-700: #616161;\n      --paper-grey-800: #424242;\n      --paper-grey-900: #212121;\n\n      --paper-blue-grey-50: #eceff1;\n      --paper-blue-grey-100: #cfd8dc;\n      --paper-blue-grey-200: #b0bec5;\n      --paper-blue-grey-300: #90a4ae;\n      --paper-blue-grey-400: #78909c;\n      --paper-blue-grey-500: #607d8b;\n      --paper-blue-grey-600: #546e7a;\n      --paper-blue-grey-700: #455a64;\n      --paper-blue-grey-800: #37474f;\n      --paper-blue-grey-900: #263238;\n\n      /* opacity for dark text on a light background */\n      --dark-divider-opacity: 0.12;\n      --dark-disabled-opacity: 0.38; /* or hint text or icon */\n      --dark-secondary-opacity: 0.54;\n      --dark-primary-opacity: 0.87;\n\n      /* opacity for light text on a dark background */\n      --light-divider-opacity: 0.12;\n      --light-disabled-opacity: 0.3; /* or hint text or icon */\n      --light-secondary-opacity: 0.7;\n      --light-primary-opacity: 1.0;\n\n    }\n\n  </style>\n</custom-style>\n"]);_templateObject13_7f57aa202bd911e99390d3b784e8dc1a=function _templateObject13_7f57aa202bd911e99390d3b784e8dc1a(){return data;};return data;}function _templateObject12_7f57aa202bd911e99390d3b784e8dc1a(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        position: absolute;\n        border-radius: inherit;\n        overflow: hidden;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n\n        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,\n         * creating a node (with a position:absolute) in the middle of an event\n         * handler \"interrupts\" that event handler (which happens when the\n         * ripple is created on demand) */\n        pointer-events: none;\n      }\n\n      :host([animating]) {\n        /* This resolves a rendering issue in Chrome (as of 40) where the\n           ripple is not properly clipped by its parent (which may have\n           rounded corners). See: http://jsbin.com/temexa/4\n\n           Note: We only apply this style conditionally. Otherwise, the browser\n           will create a new compositing layer for every ripple element on the\n           page, and that would be bad. */\n        -webkit-transform: translate(0, 0);\n        transform: translate3d(0, 0, 0);\n      }\n\n      #background,\n      #waves,\n      .wave-container,\n      .wave {\n        pointer-events: none;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n      }\n\n      #background,\n      .wave {\n        opacity: 0;\n      }\n\n      #waves,\n      .wave {\n        overflow: hidden;\n      }\n\n      .wave-container,\n      .wave {\n        border-radius: 50%;\n      }\n\n      :host(.circle) #background,\n      :host(.circle) #waves {\n        border-radius: 50%;\n      }\n\n      :host(.circle) .wave-container {\n        overflow: hidden;\n      }\n    </style>\n\n    <div id=\"background\"></div>\n    <div id=\"waves\"></div>\n"]);_templateObject12_7f57aa202bd911e99390d3b784e8dc1a=function _templateObject12_7f57aa202bd911e99390d3b784e8dc1a(){return data;};return data;}function _templateObject11_7f57aa202bd911e99390d3b784e8dc1a(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host > ::slotted(:not(slot):not(.iron-selected)) {\n        display: none !important;\n      }\n    </style>\n\n    <slot></slot>\n"]);_templateObject11_7f57aa202bd911e99390d3b784e8dc1a=function _templateObject11_7f57aa202bd911e99390d3b784e8dc1a(){return data;};return data;}function _templateObject10_7f57aa202bd911e99390d3b784e8dc1a(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n\n      @media only screen and (-webkit-max-device-pixel-ratio: 1) {\n        :host {\n          will-change: transform;\n        }\n      }\n\n      #items {\n        @apply --iron-list-items-container;\n        position: relative;\n      }\n\n      :host(:not([grid])) #items > ::slotted(*) {\n        width: 100%;\n      }\n\n      #items > ::slotted(*) {\n        box-sizing: border-box;\n        margin: 0;\n        position: absolute;\n        top: 0;\n        will-change: transform;\n      }\n    </style>\n\n    <array-selector id=\"selector\" items=\"{{items}}\" selected=\"{{selectedItems}}\" selected-item=\"{{selectedItem}}\"></array-selector>\n\n    <div id=\"items\">\n      <slot></slot>\n    </div>\n"]);_templateObject10_7f57aa202bd911e99390d3b784e8dc1a=function _templateObject10_7f57aa202bd911e99390d3b784e8dc1a(){return data;};return data;}function _templateObject9_7f57aa202bd911e99390d3b784e8dc1a(){var data=babelHelpers.taggedTemplateLiteral(["<iron-iconset-svg name=\"icons\" size=\"24\">\n<svg><defs>\n<g id=\"3d-rotation\"><path d=\"M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z\"></path></g>\n<g id=\"accessibility\"><path d=\"M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z\"></path></g>\n<g id=\"accessible\"><circle cx=\"12\" cy=\"4\" r=\"2\"></circle><path d=\"M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z\"></path></g>\n<g id=\"account-balance\"><path d=\"M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z\"></path></g>\n<g id=\"account-balance-wallet\"><path d=\"M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z\"></path></g>\n<g id=\"account-box\"><path d=\"M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z\"></path></g>\n<g id=\"account-circle\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z\"></path></g>\n<g id=\"add\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"></path></g>\n<g id=\"add-alert\"><path d=\"M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z\"></path></g>\n<g id=\"add-box\"><path d=\"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z\"></path></g>\n<g id=\"add-circle\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z\"></path></g>\n<g id=\"add-circle-outline\"><path d=\"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"></path></g>\n<g id=\"add-shopping-cart\"><path d=\"M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z\"></path></g>\n<g id=\"alarm\"><path d=\"M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z\"></path></g>\n<g id=\"alarm-add\"><path d=\"M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z\"></path></g>\n<g id=\"alarm-off\"><path d=\"M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z\"></path></g>\n<g id=\"alarm-on\"><path d=\"M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z\"></path></g>\n<g id=\"all-out\"><path d=\"M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z\"></path></g>\n<g id=\"android\"><path d=\"M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z\"></path></g>\n<g id=\"announcement\"><path d=\"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z\"></path></g>\n<g id=\"apps\"><path d=\"M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z\"></path></g>\n<g id=\"archive\"><path d=\"M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z\"></path></g>\n<g id=\"arrow-back\"><path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"></path></g>\n<g id=\"arrow-downward\"><path d=\"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z\"></path></g>\n<g id=\"arrow-drop-down\"><path d=\"M7 10l5 5 5-5z\"></path></g>\n<g id=\"arrow-drop-down-circle\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z\"></path></g>\n<g id=\"arrow-drop-up\"><path d=\"M7 14l5-5 5 5z\"></path></g>\n<g id=\"arrow-forward\"><path d=\"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z\"></path></g>\n<g id=\"arrow-upward\"><path d=\"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z\"></path></g>\n<g id=\"aspect-ratio\"><path d=\"M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z\"></path></g>\n<g id=\"assessment\"><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z\"></path></g>\n<g id=\"assignment\"><path d=\"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z\"></path></g>\n<g id=\"assignment-ind\"><path d=\"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z\"></path></g>\n<g id=\"assignment-late\"><path d=\"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z\"></path></g>\n<g id=\"assignment-return\"><path d=\"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z\"></path></g>\n<g id=\"assignment-returned\"><path d=\"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z\"></path></g>\n<g id=\"assignment-turned-in\"><path d=\"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z\"></path></g>\n<g id=\"attachment\"><path d=\"M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z\"></path></g>\n<g id=\"autorenew\"><path d=\"M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z\"></path></g>\n<g id=\"backspace\"><path d=\"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z\"></path></g>\n<g id=\"backup\"><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z\"></path></g>\n<g id=\"block\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z\"></path></g>\n<g id=\"book\"><path d=\"M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z\"></path></g>\n<g id=\"bookmark\"><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z\"></path></g>\n<g id=\"bookmark-border\"><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z\"></path></g>\n<g id=\"bug-report\"><path d=\"M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z\"></path></g>\n<g id=\"build\"><path d=\"M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z\"></path></g>\n<g id=\"cached\"><path d=\"M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z\"></path></g>\n<g id=\"camera-enhance\"><path d=\"M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z\"></path></g>\n<g id=\"cancel\"><path d=\"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z\"></path></g>\n<g id=\"card-giftcard\"><path d=\"M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z\"></path></g>\n<g id=\"card-membership\"><path d=\"M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z\"></path></g>\n<g id=\"card-travel\"><path d=\"M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z\"></path></g>\n<g id=\"change-history\"><path d=\"M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z\"></path></g>\n<g id=\"check\"><path d=\"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z\"></path></g>\n<g id=\"check-box\"><path d=\"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\"></path></g>\n<g id=\"check-box-outline-blank\"><path d=\"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\"></path></g>\n<g id=\"check-circle\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\"></path></g>\n<g id=\"chevron-left\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></g>\n<g id=\"chevron-right\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"></path></g>\n<g id=\"chrome-reader-mode\"><path d=\"M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z\"></path></g>\n<g id=\"class\"><path d=\"M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z\"></path></g>\n<g id=\"clear\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path></g>\n<g id=\"close\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path></g>\n<g id=\"cloud\"><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z\"></path></g>\n<g id=\"cloud-circle\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z\"></path></g>\n<g id=\"cloud-done\"><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z\"></path></g>\n<g id=\"cloud-download\"><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z\"></path></g>\n<g id=\"cloud-off\"><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z\"></path></g>\n<g id=\"cloud-queue\"><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z\"></path></g>\n<g id=\"cloud-upload\"><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z\"></path></g>\n<g id=\"code\"><path d=\"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z\"></path></g>\n<g id=\"compare-arrows\"><path d=\"M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z\"></path></g>\n<g id=\"content-copy\"><path d=\"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z\"></path></g>\n<g id=\"content-cut\"><path d=\"M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z\"></path></g>\n<g id=\"content-paste\"><path d=\"M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z\"></path></g>\n<g id=\"copyright\"><path d=\"M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"></path></g>\n<g id=\"create\"><path d=\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z\"></path></g>\n<g id=\"create-new-folder\"><path d=\"M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z\"></path></g>\n<g id=\"credit-card\"><path d=\"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z\"></path></g>\n<g id=\"dashboard\"><path d=\"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z\"></path></g>\n<g id=\"date-range\"><path d=\"M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z\"></path></g>\n<g id=\"delete\"><path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z\"></path></g>\n<g id=\"delete-forever\"><path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z\"></path></g>\n<g id=\"delete-sweep\"><path d=\"M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z\"></path></g>\n<g id=\"description\"><path d=\"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z\"></path></g>\n<g id=\"dns\"><path d=\"M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\"></path></g>\n<g id=\"done\"><path d=\"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z\"></path></g>\n<g id=\"done-all\"><path d=\"M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z\"></path></g>\n<g id=\"donut-large\"><path d=\"M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z\"></path></g>\n<g id=\"donut-small\"><path d=\"M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z\"></path></g>\n<g id=\"drafts\"><path d=\"M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z\"></path></g>\n<g id=\"eject\"><path d=\"M5 17h14v2H5zm7-12L5.33 15h13.34z\"></path></g>\n<g id=\"error\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z\"></path></g>\n<g id=\"error-outline\"><path d=\"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"></path></g>\n<g id=\"euro-symbol\"><path d=\"M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z\"></path></g>\n<g id=\"event\"><path d=\"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z\"></path></g>\n<g id=\"event-seat\"><path d=\"M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z\"></path></g>\n<g id=\"exit-to-app\"><path d=\"M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\"></path></g>\n<g id=\"expand-less\"><path d=\"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z\"></path></g>\n<g id=\"expand-more\"><path d=\"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z\"></path></g>\n<g id=\"explore\"><path d=\"M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z\"></path></g>\n<g id=\"extension\"><path d=\"M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z\"></path></g>\n<g id=\"face\"><path d=\"M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z\"></path></g>\n<g id=\"favorite\"><path d=\"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z\"></path></g>\n<g id=\"favorite-border\"><path d=\"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z\"></path></g>\n<g id=\"feedback\"><path d=\"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z\"></path></g>\n<g id=\"file-download\"><path d=\"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z\"></path></g>\n<g id=\"file-upload\"><path d=\"M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z\"></path></g>\n<g id=\"filter-list\"><path d=\"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z\"></path></g>\n<g id=\"find-in-page\"><path d=\"M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z\"></path></g>\n<g id=\"find-replace\"><path d=\"M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z\"></path></g>\n<g id=\"fingerprint\"><path d=\"M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z\"></path></g>\n<g id=\"first-page\"><path d=\"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z\"></path></g>\n<g id=\"flag\"><path d=\"M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z\"></path></g>\n<g id=\"flight-land\"><path d=\"M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z\"></path></g>\n<g id=\"flight-takeoff\"><path d=\"M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z\"></path></g>\n<g id=\"flip-to-back\"><path d=\"M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z\"></path></g>\n<g id=\"flip-to-front\"><path d=\"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z\"></path></g>\n<g id=\"folder\"><path d=\"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z\"></path></g>\n<g id=\"folder-open\"><path d=\"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z\"></path></g>\n<g id=\"folder-shared\"><path d=\"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z\"></path></g>\n<g id=\"font-download\"><path d=\"M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z\"></path></g>\n<g id=\"forward\"><path d=\"M12 8V4l8 8-8 8v-4H4V8z\"></path></g>\n<g id=\"fullscreen\"><path d=\"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z\"></path></g>\n<g id=\"fullscreen-exit\"><path d=\"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z\"></path></g>\n<g id=\"g-translate\"><path d=\"M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z\"></path></g>\n<g id=\"gavel\"><path d=\"M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z\"></path></g>\n<g id=\"gesture\"><path d=\"M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z\"></path></g>\n<g id=\"get-app\"><path d=\"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z\"></path></g>\n<g id=\"gif\"><path d=\"M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z\"></path></g>\n<g id=\"grade\"><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"></path></g>\n<g id=\"group-work\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z\"></path></g>\n<g id=\"help\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z\"></path></g>\n<g id=\"help-outline\"><path d=\"M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z\"></path></g>\n<g id=\"highlight-off\"><path d=\"M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"></path></g>\n<g id=\"history\"><path d=\"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z\"></path></g>\n<g id=\"home\"><path d=\"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z\"></path></g>\n<g id=\"hourglass-empty\"><path d=\"M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z\"></path></g>\n<g id=\"hourglass-full\"><path d=\"M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z\"></path></g>\n<g id=\"http\"><path d=\"M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z\"></path></g>\n<g id=\"https\"><path d=\"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z\"></path></g>\n<g id=\"important-devices\"><path d=\"M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z\"></path></g>\n<g id=\"inbox\"><path d=\"M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z\"></path></g>\n<g id=\"indeterminate-check-box\"><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z\"></path></g>\n<g id=\"info\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z\"></path></g>\n<g id=\"info-outline\"><path d=\"M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z\"></path></g>\n<g id=\"input\"><path d=\"M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z\"></path></g>\n<g id=\"invert-colors\"><path d=\"M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z\"></path></g>\n<g id=\"label\"><path d=\"M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z\"></path></g>\n<g id=\"label-outline\"><path d=\"M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z\"></path></g>\n<g id=\"language\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z\"></path></g>\n<g id=\"last-page\"><path d=\"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z\"></path></g>\n<g id=\"launch\"><path d=\"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z\"></path></g>\n<g id=\"lightbulb-outline\"><path d=\"M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z\"></path></g>\n<g id=\"line-style\"><path d=\"M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z\"></path></g>\n<g id=\"line-weight\"><path d=\"M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z\"></path></g>\n<g id=\"link\"><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"></path></g>\n<g id=\"list\"><path d=\"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z\"></path></g>\n<g id=\"lock\"><path d=\"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z\"></path></g>\n<g id=\"lock-open\"><path d=\"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z\"></path></g>\n<g id=\"lock-outline\"><path d=\"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z\"></path></g>\n<g id=\"low-priority\"><path d=\"M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z\"></path></g>\n<g id=\"loyalty\"><path d=\"M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z\"></path></g>\n<g id=\"mail\"><path d=\"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z\"></path></g>\n<g id=\"markunread\"><path d=\"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z\"></path></g>\n<g id=\"markunread-mailbox\"><path d=\"M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z\"></path></g>\n<g id=\"menu\"><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"></path></g>\n<g id=\"more-horiz\"><path d=\"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\"></path></g>\n<g id=\"more-vert\"><path d=\"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\"></path></g>\n<g id=\"motorcycle\"><path d=\"M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z\"></path></g>\n<g id=\"move-to-inbox\"><path d=\"M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z\"></path></g>\n<g id=\"next-week\"><path d=\"M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z\"></path></g>\n<g id=\"note-add\"><path d=\"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z\"></path></g>\n<g id=\"offline-pin\"><path d=\"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z\"></path></g>\n<g id=\"opacity\"><path d=\"M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z\"></path></g>\n<g id=\"open-in-browser\"><path d=\"M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z\"></path></g>\n<g id=\"open-in-new\"><path d=\"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z\"></path></g>\n<g id=\"open-with\"><path d=\"M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z\"></path></g>\n<g id=\"pageview\"><path d=\"M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z\"></path></g>\n<g id=\"pan-tool\"><path d=\"M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z\"></path></g>\n<g id=\"payment\"><path d=\"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z\"></path></g>\n<g id=\"perm-camera-mic\"><path d=\"M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z\"></path></g>\n<g id=\"perm-contact-calendar\"><path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z\"></path></g>\n<g id=\"perm-data-setting\"><path d=\"M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z\"></path></g>\n<g id=\"perm-device-information\"><path d=\"M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z\"></path></g>\n<g id=\"perm-identity\"><path d=\"M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z\"></path></g>\n<g id=\"perm-media\"><path d=\"M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z\"></path></g>\n<g id=\"perm-phone-msg\"><path d=\"M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z\"></path></g>\n<g id=\"perm-scan-wifi\"><path d=\"M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z\"></path></g>\n<g id=\"pets\"><circle cx=\"4.5\" cy=\"9.5\" r=\"2.5\"></circle><circle cx=\"9\" cy=\"5.5\" r=\"2.5\"></circle><circle cx=\"15\" cy=\"5.5\" r=\"2.5\"></circle><circle cx=\"19.5\" cy=\"9.5\" r=\"2.5\"></circle><path d=\"M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z\"></path></g>\n<g id=\"picture-in-picture\"><path d=\"M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z\"></path></g>\n<g id=\"picture-in-picture-alt\"><path d=\"M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z\"></path></g>\n<g id=\"play-for-work\"><path d=\"M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z\"></path></g>\n<g id=\"polymer\"><path d=\"M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z\"></path></g>\n<g id=\"power-settings-new\"><path d=\"M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z\"></path></g>\n<g id=\"pregnant-woman\"><path d=\"M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z\"></path></g>\n<g id=\"print\"><path d=\"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z\"></path></g>\n<g id=\"query-builder\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z\"></path></g>\n<g id=\"question-answer\"><path d=\"M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z\"></path></g>\n<g id=\"radio-button-checked\"><path d=\"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"></path></g>\n<g id=\"radio-button-unchecked\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"></path></g>\n<g id=\"receipt\"><path d=\"M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z\"></path></g>\n<g id=\"record-voice-over\"><circle cx=\"9\" cy=\"9\" r=\"4\"></circle><path d=\"M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z\"></path></g>\n<g id=\"redeem\"><path d=\"M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z\"></path></g>\n<g id=\"redo\"><path d=\"M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z\"></path></g>\n<g id=\"refresh\"><path d=\"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z\"></path></g>\n<g id=\"remove\"><path d=\"M19 13H5v-2h14v2z\"></path></g>\n<g id=\"remove-circle\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z\"></path></g>\n<g id=\"remove-circle-outline\"><path d=\"M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"></path></g>\n<g id=\"remove-shopping-cart\"><path d=\"M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z\"></path></g>\n<g id=\"reorder\"><path d=\"M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z\"></path></g>\n<g id=\"reply\"><path d=\"M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z\"></path></g>\n<g id=\"reply-all\"><path d=\"M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z\"></path></g>\n<g id=\"report\"><path d=\"M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z\"></path></g>\n<g id=\"report-problem\"><path d=\"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z\"></path></g>\n<g id=\"restore\"><path d=\"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z\"></path></g>\n<g id=\"restore-page\"><path d=\"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z\"></path></g>\n<g id=\"room\"><path d=\"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z\"></path></g>\n<g id=\"rounded-corner\"><path d=\"M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z\"></path></g>\n<g id=\"rowing\"><path d=\"M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75c0 .84-.35 1.61-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z\"></path></g>\n<g id=\"save\"><path d=\"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z\"></path></g>\n<g id=\"schedule\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z\"></path></g>\n<g id=\"search\"><path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\"></path></g>\n<g id=\"select-all\"><path d=\"M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z\"></path></g>\n<g id=\"send\"><path d=\"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z\"></path></g>\n<g id=\"settings\"><path d=\"M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z\"></path></g>\n<g id=\"settings-applications\"><path d=\"M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z\"></path></g>\n<g id=\"settings-backup-restore\"><path d=\"M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z\"></path></g>\n<g id=\"settings-bluetooth\"><path d=\"M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z\"></path></g>\n<g id=\"settings-brightness\"><path d=\"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z\"></path></g>\n<g id=\"settings-cell\"><path d=\"M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z\"></path></g>\n<g id=\"settings-ethernet\"><path d=\"M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z\"></path></g>\n<g id=\"settings-input-antenna\"><path d=\"M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z\"></path></g>\n<g id=\"settings-input-component\"><path d=\"M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z\"></path></g>\n<g id=\"settings-input-composite\"><path d=\"M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z\"></path></g>\n<g id=\"settings-input-hdmi\"><path d=\"M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z\"></path></g>\n<g id=\"settings-input-svideo\"><path d=\"M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z\"></path></g>\n<g id=\"settings-overscan\"><path d=\"M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z\"></path></g>\n<g id=\"settings-phone\"><path d=\"M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z\"></path></g>\n<g id=\"settings-power\"><path d=\"M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z\"></path></g>\n<g id=\"settings-remote\"><path d=\"M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z\"></path></g>\n<g id=\"settings-voice\"><path d=\"M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z\"></path></g>\n<g id=\"shop\"><path d=\"M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z\"></path></g>\n<g id=\"shop-two\"><path d=\"M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z\"></path></g>\n<g id=\"shopping-basket\"><path d=\"M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\"></path></g>\n<g id=\"shopping-cart\"><path d=\"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z\"></path></g>\n<g id=\"sort\"><path d=\"M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z\"></path></g>\n<g id=\"speaker-notes\"><path d=\"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z\"></path></g>\n<g id=\"speaker-notes-off\"><path d=\"M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z\"></path></g>\n<g id=\"spellcheck\"><path d=\"M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z\"></path></g>\n<g id=\"star\"><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"></path></g>\n<g id=\"star-border\"><path d=\"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z\"></path></g>\n<g id=\"star-half\"><path d=\"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z\"></path></g>\n<g id=\"stars\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"></path></g>\n<g id=\"store\"><path d=\"M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z\"></path></g>\n<g id=\"subdirectory-arrow-left\"><path d=\"M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z\"></path></g>\n<g id=\"subdirectory-arrow-right\"><path d=\"M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z\"></path></g>\n<g id=\"subject\"><path d=\"M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z\"></path></g>\n<g id=\"supervisor-account\"><path d=\"M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z\"></path></g>\n<g id=\"swap-horiz\"><path d=\"M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z\"></path></g>\n<g id=\"swap-vert\"><path d=\"M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z\"></path></g>\n<g id=\"swap-vertical-circle\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z\"></path></g>\n<g id=\"system-update-alt\"><path d=\"M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z\"></path></g>\n<g id=\"tab\"><path d=\"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z\"></path></g>\n<g id=\"tab-unselected\"><path d=\"M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z\"></path></g>\n<g id=\"text-format\"><path d=\"M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z\"></path></g>\n<g id=\"theaters\"><path d=\"M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z\"></path></g>\n<g id=\"thumb-down\"><path d=\"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z\"></path></g>\n<g id=\"thumb-up\"><path d=\"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z\"></path></g>\n<g id=\"thumbs-up-down\"><path d=\"M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z\"></path></g>\n<g id=\"timeline\"><path d=\"M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z\"></path></g>\n<g id=\"toc\"><path d=\"M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z\"></path></g>\n<g id=\"today\"><path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z\"></path></g>\n<g id=\"toll\"><path d=\"M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z\"></path></g>\n<g id=\"touch-app\"><path d=\"M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z\"></path></g>\n<g id=\"track-changes\"><path d=\"M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z\"></path></g>\n<g id=\"translate\"><path d=\"M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z\"></path></g>\n<g id=\"trending-down\"><path d=\"M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z\"></path></g>\n<g id=\"trending-flat\"><path d=\"M22 12l-4-4v3H3v2h15v3z\"></path></g>\n<g id=\"trending-up\"><path d=\"M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z\"></path></g>\n<g id=\"turned-in\"><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z\"></path></g>\n<g id=\"turned-in-not\"><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z\"></path></g>\n<g id=\"unarchive\"><path d=\"M20.55 5.22l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z\"></path></g>\n<g id=\"undo\"><path d=\"M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z\"></path></g>\n<g id=\"unfold-less\"><path d=\"M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z\"></path></g>\n<g id=\"unfold-more\"><path d=\"M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z\"></path></g>\n<g id=\"update\"><path d=\"M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z\"></path></g>\n<g id=\"verified-user\"><path d=\"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z\"></path></g>\n<g id=\"view-agenda\"><path d=\"M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z\"></path></g>\n<g id=\"view-array\"><path d=\"M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z\"></path></g>\n<g id=\"view-carousel\"><path d=\"M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z\"></path></g>\n<g id=\"view-column\"><path d=\"M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z\"></path></g>\n<g id=\"view-day\"><path d=\"M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z\"></path></g>\n<g id=\"view-headline\"><path d=\"M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z\"></path></g>\n<g id=\"view-list\"><path d=\"M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z\"></path></g>\n<g id=\"view-module\"><path d=\"M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z\"></path></g>\n<g id=\"view-quilt\"><path d=\"M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z\"></path></g>\n<g id=\"view-stream\"><path d=\"M4 18h17v-6H4v6zM4 5v6h17V5H4z\"></path></g>\n<g id=\"view-week\"><path d=\"M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z\"></path></g>\n<g id=\"visibility\"><path d=\"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z\"></path></g>\n<g id=\"visibility-off\"><path d=\"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z\"></path></g>\n<g id=\"warning\"><path d=\"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z\"></path></g>\n<g id=\"watch-later\"><path d=\"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z\"></path></g>\n<g id=\"weekend\"><path d=\"M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z\"></path></g>\n<g id=\"work\"><path d=\"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z\"></path></g>\n<g id=\"youtube-searched-for\"><path d=\"M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z\"></path></g>\n<g id=\"zoom-in\"><path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z\"></path></g>\n<g id=\"zoom-out\"><path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z\"></path></g>\n</defs></svg>\n</iron-iconset-svg>"]);_templateObject9_7f57aa202bd911e99390d3b784e8dc1a=function _templateObject9_7f57aa202bd911e99390d3b784e8dc1a(){return data;};return data;}function _templateObject8_7f57aa202bd911e99390d3b784e8dc1a(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        @apply --layout-inline;\n        @apply --layout-center-center;\n        position: relative;\n\n        vertical-align: middle;\n\n        fill: var(--iron-icon-fill-color, currentcolor);\n        stroke: var(--iron-icon-stroke-color, none);\n\n        width: var(--iron-icon-width, 24px);\n        height: var(--iron-icon-height, 24px);\n        @apply --iron-icon;\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n    </style>\n"]);_templateObject8_7f57aa202bd911e99390d3b784e8dc1a=function _templateObject8_7f57aa202bd911e99390d3b784e8dc1a(){return data;};return data;}function _templateObject7_7f57aa202bd911e99390d3b784e8dc1a(){var data=babelHelpers.taggedTemplateLiteral(["\n    <iron-query-params params-string=\"{{__query}}\" params-object=\"{{queryParams}}\">\n    </iron-query-params>\n    <iron-location path=\"{{__path}}\" query=\"{{__query}}\" hash=\"{{__hash}}\" url-space-regex=\"[[urlSpaceRegex]]\" dwell-time=\"[[dwellTime]]\">\n    </iron-location>\n  "]);_templateObject7_7f57aa202bd911e99390d3b784e8dc1a=function _templateObject7_7f57aa202bd911e99390d3b784e8dc1a(){return data;};return data;}function _templateObject6_7f57aa202bd911e99390d3b784e8dc1a(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n\n      :host {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        position: relative;\n        height: 64px;\n        padding: 0 16px;\n        pointer-events: none;\n        font-size: var(--app-toolbar-font-size, 20px);\n      }\n\n      :host ::slotted(*) {\n        pointer-events: auto;\n      }\n\n      :host ::slotted(paper-icon-button) {\n        /* paper-icon-button/issues/33 */\n        font-size: 0;\n      }\n\n      :host ::slotted([main-title]),\n      :host ::slotted([condensed-title]) {\n        pointer-events: none;\n        @apply --layout-flex;\n      }\n\n      :host ::slotted([bottom-item]) {\n        position: absolute;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      }\n\n      :host ::slotted([top-item]) {\n        position: absolute;\n        top: 0;\n        right: 0;\n        left: 0;\n      }\n\n      :host ::slotted([spacer]) {\n        margin-left: 64px;\n      }\n    </style>\n\n    <slot></slot>\n"]);_templateObject6_7f57aa202bd911e99390d3b784e8dc1a=function _templateObject6_7f57aa202bd911e99390d3b784e8dc1a(){return data;};return data;}function _templateObject5_7f57aa202bd911e99390d3b784e8dc1a(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        position: relative;\n        display: block;\n        transition-timing-function: linear;\n        transition-property: -webkit-transform;\n        transition-property: transform;\n      }\n\n      :host::before {\n        position: absolute;\n        right: 0px;\n        bottom: -5px;\n        left: 0px;\n        width: 100%;\n        height: 5px;\n        content: \"\";\n        transition: opacity 0.4s;\n        pointer-events: none;\n        opacity: 0;\n        box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4);\n        will-change: opacity;\n        @apply --app-header-shadow;\n      }\n\n      :host([shadow])::before {\n        opacity: 1;\n      }\n\n      #background {\n        @apply --layout-fit;\n        overflow: hidden;\n      }\n\n      #backgroundFrontLayer,\n      #backgroundRearLayer {\n        @apply --layout-fit;\n        height: 100%;\n        pointer-events: none;\n        background-size: cover;\n      }\n\n      #backgroundFrontLayer {\n        @apply --app-header-background-front-layer;\n      }\n\n      #backgroundRearLayer {\n        opacity: 0;\n        @apply --app-header-background-rear-layer;\n      }\n\n      #contentContainer {\n        position: relative;\n        width: 100%;\n        height: 100%;\n      }\n\n      :host([disabled]),\n      :host([disabled])::after,\n      :host([disabled]) #backgroundFrontLayer,\n      :host([disabled]) #backgroundRearLayer,\n      /* Silent scrolling should not run CSS transitions */\n      :host([silent-scroll]),\n      :host([silent-scroll])::after,\n      :host([silent-scroll]) #backgroundFrontLayer,\n      :host([silent-scroll]) #backgroundRearLayer {\n        transition: none !important;\n      }\n\n      :host([disabled]) ::slotted(app-toolbar:first-of-type),\n      :host([disabled]) ::slotted([sticky]),\n      /* Silent scrolling should not run CSS transitions */\n      :host([silent-scroll]) ::slotted(app-toolbar:first-of-type),\n      :host([silent-scroll]) ::slotted([sticky]) {\n        transition: none !important;\n      }\n\n    </style>\n    <div id=\"contentContainer\">\n      <slot id=\"slot\"></slot>\n    </div>\n"]);_templateObject5_7f57aa202bd911e99390d3b784e8dc1a=function _templateObject5_7f57aa202bd911e99390d3b784e8dc1a(){return data;};return data;}function _templateObject4_7f57aa202bd911e99390d3b784e8dc1a(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        /**\n         * Force app-header-layout to have its own stacking context so that its parent can\n         * control the stacking of it relative to other elements (e.g. app-drawer-layout).\n         * This could be done using `isolation: isolate`, but that's not well supported\n         * across browsers.\n         */\n        position: relative;\n        z-index: 0;\n      }\n\n      #wrapper ::slotted([slot=header]) {\n        @apply --layout-fixed-top;\n        z-index: 1;\n      }\n\n      #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) {\n        height: 100%;\n      }\n\n      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {\n        position: absolute;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) #wrapper #contentContainer {\n        @apply --layout-fit;\n        overflow-y: auto;\n        -webkit-overflow-scrolling: touch;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {\n        position: relative;\n      }\n\n      :host([fullbleed]) {\n        @apply --layout-vertical;\n        @apply --layout-fit;\n      }\n\n      :host([fullbleed]) #wrapper,\n      :host([fullbleed]) #wrapper #contentContainer {\n        @apply --layout-vertical;\n        @apply --layout-flex;\n      }\n\n      #contentContainer {\n        /* Create a stacking context here so that all children appear below the header. */\n        position: relative;\n        z-index: 0;\n      }\n\n      @media print {\n        :host([has-scrolling-region]) #wrapper #contentContainer {\n          overflow-y: visible;\n        }\n      }\n\n    </style>\n\n    <div id=\"wrapper\" class=\"initializing\">\n      <slot id=\"headerSlot\" name=\"header\"></slot>\n\n      <div id=\"contentContainer\">\n        <slot></slot>\n      </div>\n    </div>\n"],["\n    <style>\n      :host {\n        display: block;\n        /**\n         * Force app-header-layout to have its own stacking context so that its parent can\n         * control the stacking of it relative to other elements (e.g. app-drawer-layout).\n         * This could be done using \\`isolation: isolate\\`, but that's not well supported\n         * across browsers.\n         */\n        position: relative;\n        z-index: 0;\n      }\n\n      #wrapper ::slotted([slot=header]) {\n        @apply --layout-fixed-top;\n        z-index: 1;\n      }\n\n      #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) {\n        height: 100%;\n      }\n\n      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {\n        position: absolute;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) #wrapper #contentContainer {\n        @apply --layout-fit;\n        overflow-y: auto;\n        -webkit-overflow-scrolling: touch;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {\n        position: relative;\n      }\n\n      :host([fullbleed]) {\n        @apply --layout-vertical;\n        @apply --layout-fit;\n      }\n\n      :host([fullbleed]) #wrapper,\n      :host([fullbleed]) #wrapper #contentContainer {\n        @apply --layout-vertical;\n        @apply --layout-flex;\n      }\n\n      #contentContainer {\n        /* Create a stacking context here so that all children appear below the header. */\n        position: relative;\n        z-index: 0;\n      }\n\n      @media print {\n        :host([has-scrolling-region]) #wrapper #contentContainer {\n          overflow-y: visible;\n        }\n      }\n\n    </style>\n\n    <div id=\"wrapper\" class=\"initializing\">\n      <slot id=\"headerSlot\" name=\"header\"></slot>\n\n      <div id=\"contentContainer\">\n        <slot></slot>\n      </div>\n    </div>\n"]);_templateObject4_7f57aa202bd911e99390d3b784e8dc1a=function _templateObject4_7f57aa202bd911e99390d3b784e8dc1a(){return data;};return data;}function _templateObject3_7f57aa202bd911e99390d3b784e8dc1a(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        position: fixed;\n        top: -120px;\n        right: 0;\n        bottom: -120px;\n        left: 0;\n\n        visibility: hidden;\n\n        transition-property: visibility;\n      }\n\n      :host([opened]) {\n        visibility: visible;\n      }\n\n      :host([persistent]) {\n        width: var(--app-drawer-width, 256px);\n      }\n\n      :host([persistent][position=left]) {\n        right: auto;\n      }\n\n      :host([persistent][position=right]) {\n        left: auto;\n      }\n\n      #contentContainer {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n\n        width: var(--app-drawer-width, 256px);\n        padding: 120px 0;\n\n        transition-property: -webkit-transform;\n        transition-property: transform;\n        -webkit-transform: translate3d(-100%, 0, 0);\n        transform: translate3d(-100%, 0, 0);\n\n        background-color: #FFF;\n\n        @apply --app-drawer-content-container;\n      }\n\n      #contentContainer[persistent] {\n        width: 100%;\n      }\n\n      #contentContainer[position=right] {\n        right: 0;\n        left: auto;\n\n        -webkit-transform: translate3d(100%, 0, 0);\n        transform: translate3d(100%, 0, 0);\n      }\n\n      #contentContainer[swipe-open]::after {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 100%;\n\n        visibility: visible;\n\n        width: 20px;\n\n        content: '';\n      }\n\n      #contentContainer[swipe-open][position=right]::after {\n        right: 100%;\n        left: auto;\n      }\n\n      #contentContainer[opened] {\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0);\n      }\n\n      #scrim {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n\n        transition-property: opacity;\n        -webkit-transform: translateZ(0);\n        transform:  translateZ(0);\n\n        opacity: 0;\n        background: var(--app-drawer-scrim-background, rgba(0, 0, 0, 0.5));\n      }\n\n      #scrim.visible {\n        opacity: 1;\n      }\n\n      :host([no-transition]) #contentContainer {\n        transition-property: none;\n      }\n    </style>\n\n    <div id=\"scrim\" on-click=\"close\"></div>\n\n    <!-- HACK(keanulee): Bind attributes here (in addition to :host) for styling to workaround Safari\n    bug. https://bugs.webkit.org/show_bug.cgi?id=170762 -->\n    <div id=\"contentContainer\" opened$=\"[[opened]]\" persistent$=\"[[persistent]]\" position$=\"[[position]]\" swipe-open$=\"[[swipeOpen]]\">\n      <slot></slot>\n    </div>\n"],["\n    <style>\n      :host {\n        position: fixed;\n        top: -120px;\n        right: 0;\n        bottom: -120px;\n        left: 0;\n\n        visibility: hidden;\n\n        transition-property: visibility;\n      }\n\n      :host([opened]) {\n        visibility: visible;\n      }\n\n      :host([persistent]) {\n        width: var(--app-drawer-width, 256px);\n      }\n\n      :host([persistent][position=left]) {\n        right: auto;\n      }\n\n      :host([persistent][position=right]) {\n        left: auto;\n      }\n\n      #contentContainer {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n\n        width: var(--app-drawer-width, 256px);\n        padding: 120px 0;\n\n        transition-property: -webkit-transform;\n        transition-property: transform;\n        -webkit-transform: translate3d(-100%, 0, 0);\n        transform: translate3d(-100%, 0, 0);\n\n        background-color: #FFF;\n\n        @apply --app-drawer-content-container;\n      }\n\n      #contentContainer[persistent] {\n        width: 100%;\n      }\n\n      #contentContainer[position=right] {\n        right: 0;\n        left: auto;\n\n        -webkit-transform: translate3d(100%, 0, 0);\n        transform: translate3d(100%, 0, 0);\n      }\n\n      #contentContainer[swipe-open]::after {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 100%;\n\n        visibility: visible;\n\n        width: 20px;\n\n        content: '';\n      }\n\n      #contentContainer[swipe-open][position=right]::after {\n        right: 100%;\n        left: auto;\n      }\n\n      #contentContainer[opened] {\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0);\n      }\n\n      #scrim {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n\n        transition-property: opacity;\n        -webkit-transform: translateZ(0);\n        transform:  translateZ(0);\n\n        opacity: 0;\n        background: var(--app-drawer-scrim-background, rgba(0, 0, 0, 0.5));\n      }\n\n      #scrim.visible {\n        opacity: 1;\n      }\n\n      :host([no-transition]) #contentContainer {\n        transition-property: none;\n      }\n    </style>\n\n    <div id=\"scrim\" on-click=\"close\"></div>\n\n    <!-- HACK(keanulee): Bind attributes here (in addition to :host) for styling to workaround Safari\n    bug. https://bugs.webkit.org/show_bug.cgi?id=170762 -->\n    <div id=\"contentContainer\" opened\\$=\"[[opened]]\" persistent\\$=\"[[persistent]]\" position\\$=\"[[position]]\" swipe-open\\$=\"[[swipeOpen]]\">\n      <slot></slot>\n    </div>\n"]);_templateObject3_7f57aa202bd911e99390d3b784e8dc1a=function _templateObject3_7f57aa202bd911e99390d3b784e8dc1a(){return data;};return data;}function _templateObject2_7f57aa202bd911e99390d3b784e8dc1a(){var data=babelHelpers.taggedTemplateLiteral(["\n<custom-style>\n  <style is=\"custom-style\">\n    [hidden] {\n      display: none !important;\n    }\n  </style>\n</custom-style>\n<custom-style>\n  <style is=\"custom-style\">\n    html {\n\n      --layout: {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n      };\n\n      --layout-inline: {\n        display: -ms-inline-flexbox;\n        display: -webkit-inline-flex;\n        display: inline-flex;\n      };\n\n      --layout-horizontal: {\n        @apply --layout;\n\n        -ms-flex-direction: row;\n        -webkit-flex-direction: row;\n        flex-direction: row;\n      };\n\n      --layout-horizontal-reverse: {\n        @apply --layout;\n\n        -ms-flex-direction: row-reverse;\n        -webkit-flex-direction: row-reverse;\n        flex-direction: row-reverse;\n      };\n\n      --layout-vertical: {\n        @apply --layout;\n\n        -ms-flex-direction: column;\n        -webkit-flex-direction: column;\n        flex-direction: column;\n      };\n\n      --layout-vertical-reverse: {\n        @apply --layout;\n\n        -ms-flex-direction: column-reverse;\n        -webkit-flex-direction: column-reverse;\n        flex-direction: column-reverse;\n      };\n\n      --layout-wrap: {\n        -ms-flex-wrap: wrap;\n        -webkit-flex-wrap: wrap;\n        flex-wrap: wrap;\n      };\n\n      --layout-wrap-reverse: {\n        -ms-flex-wrap: wrap-reverse;\n        -webkit-flex-wrap: wrap-reverse;\n        flex-wrap: wrap-reverse;\n      };\n\n      --layout-flex-auto: {\n        -ms-flex: 1 1 auto;\n        -webkit-flex: 1 1 auto;\n        flex: 1 1 auto;\n      };\n\n      --layout-flex-none: {\n        -ms-flex: none;\n        -webkit-flex: none;\n        flex: none;\n      };\n\n      --layout-flex: {\n        -ms-flex: 1 1 0.000000001px;\n        -webkit-flex: 1;\n        flex: 1;\n        -webkit-flex-basis: 0.000000001px;\n        flex-basis: 0.000000001px;\n      };\n\n      --layout-flex-2: {\n        -ms-flex: 2;\n        -webkit-flex: 2;\n        flex: 2;\n      };\n\n      --layout-flex-3: {\n        -ms-flex: 3;\n        -webkit-flex: 3;\n        flex: 3;\n      };\n\n      --layout-flex-4: {\n        -ms-flex: 4;\n        -webkit-flex: 4;\n        flex: 4;\n      };\n\n      --layout-flex-5: {\n        -ms-flex: 5;\n        -webkit-flex: 5;\n        flex: 5;\n      };\n\n      --layout-flex-6: {\n        -ms-flex: 6;\n        -webkit-flex: 6;\n        flex: 6;\n      };\n\n      --layout-flex-7: {\n        -ms-flex: 7;\n        -webkit-flex: 7;\n        flex: 7;\n      };\n\n      --layout-flex-8: {\n        -ms-flex: 8;\n        -webkit-flex: 8;\n        flex: 8;\n      };\n\n      --layout-flex-9: {\n        -ms-flex: 9;\n        -webkit-flex: 9;\n        flex: 9;\n      };\n\n      --layout-flex-10: {\n        -ms-flex: 10;\n        -webkit-flex: 10;\n        flex: 10;\n      };\n\n      --layout-flex-11: {\n        -ms-flex: 11;\n        -webkit-flex: 11;\n        flex: 11;\n      };\n\n      --layout-flex-12: {\n        -ms-flex: 12;\n        -webkit-flex: 12;\n        flex: 12;\n      };\n\n      /* alignment in cross axis */\n\n      --layout-start: {\n        -ms-flex-align: start;\n        -webkit-align-items: flex-start;\n        align-items: flex-start;\n      };\n\n      --layout-center: {\n        -ms-flex-align: center;\n        -webkit-align-items: center;\n        align-items: center;\n      };\n\n      --layout-end: {\n        -ms-flex-align: end;\n        -webkit-align-items: flex-end;\n        align-items: flex-end;\n      };\n\n      --layout-baseline: {\n        -ms-flex-align: baseline;\n        -webkit-align-items: baseline;\n        align-items: baseline;\n      };\n\n      /* alignment in main axis */\n\n      --layout-start-justified: {\n        -ms-flex-pack: start;\n        -webkit-justify-content: flex-start;\n        justify-content: flex-start;\n      };\n\n      --layout-center-justified: {\n        -ms-flex-pack: center;\n        -webkit-justify-content: center;\n        justify-content: center;\n      };\n\n      --layout-end-justified: {\n        -ms-flex-pack: end;\n        -webkit-justify-content: flex-end;\n        justify-content: flex-end;\n      };\n\n      --layout-around-justified: {\n        -ms-flex-pack: distribute;\n        -webkit-justify-content: space-around;\n        justify-content: space-around;\n      };\n\n      --layout-justified: {\n        -ms-flex-pack: justify;\n        -webkit-justify-content: space-between;\n        justify-content: space-between;\n      };\n\n      --layout-center-center: {\n        @apply --layout-center;\n        @apply --layout-center-justified;\n      };\n\n      /* self alignment */\n\n      --layout-self-start: {\n        -ms-align-self: flex-start;\n        -webkit-align-self: flex-start;\n        align-self: flex-start;\n      };\n\n      --layout-self-center: {\n        -ms-align-self: center;\n        -webkit-align-self: center;\n        align-self: center;\n      };\n\n      --layout-self-end: {\n        -ms-align-self: flex-end;\n        -webkit-align-self: flex-end;\n        align-self: flex-end;\n      };\n\n      --layout-self-stretch: {\n        -ms-align-self: stretch;\n        -webkit-align-self: stretch;\n        align-self: stretch;\n      };\n\n      --layout-self-baseline: {\n        -ms-align-self: baseline;\n        -webkit-align-self: baseline;\n        align-self: baseline;\n      };\n\n      /* multi-line alignment in main axis */\n\n      --layout-start-aligned: {\n        -ms-flex-line-pack: start;  /* IE10 */\n        -ms-align-content: flex-start;\n        -webkit-align-content: flex-start;\n        align-content: flex-start;\n      };\n\n      --layout-end-aligned: {\n        -ms-flex-line-pack: end;  /* IE10 */\n        -ms-align-content: flex-end;\n        -webkit-align-content: flex-end;\n        align-content: flex-end;\n      };\n\n      --layout-center-aligned: {\n        -ms-flex-line-pack: center;  /* IE10 */\n        -ms-align-content: center;\n        -webkit-align-content: center;\n        align-content: center;\n      };\n\n      --layout-between-aligned: {\n        -ms-flex-line-pack: justify;  /* IE10 */\n        -ms-align-content: space-between;\n        -webkit-align-content: space-between;\n        align-content: space-between;\n      };\n\n      --layout-around-aligned: {\n        -ms-flex-line-pack: distribute;  /* IE10 */\n        -ms-align-content: space-around;\n        -webkit-align-content: space-around;\n        align-content: space-around;\n      };\n\n      /*******************************\n                Other Layout\n      *******************************/\n\n      --layout-block: {\n        display: block;\n      };\n\n      --layout-invisible: {\n        visibility: hidden !important;\n      };\n\n      --layout-relative: {\n        position: relative;\n      };\n\n      --layout-fit: {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      };\n\n      --layout-scroll: {\n        -webkit-overflow-scrolling: touch;\n        overflow: auto;\n      };\n\n      --layout-fullbleed: {\n        margin: 0;\n        height: 100vh;\n      };\n\n      /* fixed position */\n\n      --layout-fixed-top: {\n        position: fixed;\n        top: 0;\n        left: 0;\n        right: 0;\n      };\n\n      --layout-fixed-right: {\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n      };\n\n      --layout-fixed-bottom: {\n        position: fixed;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      };\n\n      --layout-fixed-left: {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 0;\n      };\n\n    }\n  </style>\n</custom-style>"]);_templateObject2_7f57aa202bd911e99390d3b784e8dc1a=function _templateObject2_7f57aa202bd911e99390d3b784e8dc1a(){return data;};return data;}function _templateObject_7f57aa202bd911e99390d3b784e8dc1a(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        /**\n         * Force app-drawer-layout to have its own stacking context so that its parent can\n         * control the stacking of it relative to other elements.\n         */\n        position: relative;\n        z-index: 0;\n      }\n\n      :host ::slotted([slot=drawer]) {\n        z-index: 1;\n      }\n\n      :host([fullbleed]) {\n        @apply --layout-fit;\n      }\n\n      #contentContainer {\n        /* Create a stacking context here so that all children appear below the header. */\n        position: relative;\n        z-index: 0;\n        height: 100%;\n        transition: var(--app-drawer-layout-content-transition, none);\n      }\n\n      #contentContainer[drawer-position=left] {\n        margin-left: var(--app-drawer-width, 256px);\n      }\n\n      #contentContainer[drawer-position=right] {\n        margin-right: var(--app-drawer-width, 256px);\n      }\n    </style>\n\n    <slot id=\"drawerSlot\" name=\"drawer\"></slot>\n\n    <div id=\"contentContainer\" drawer-position$=\"[[_drawerPosition]]\">\n      <slot></slot>\n    </div>\n\n    <iron-media-query query=\"[[_computeMediaQuery(forceNarrow, responsiveWidth)]]\" on-query-matches-changed=\"_onQueryMatchesChanged\"></iron-media-query>\n"],["\n    <style>\n      :host {\n        display: block;\n        /**\n         * Force app-drawer-layout to have its own stacking context so that its parent can\n         * control the stacking of it relative to other elements.\n         */\n        position: relative;\n        z-index: 0;\n      }\n\n      :host ::slotted([slot=drawer]) {\n        z-index: 1;\n      }\n\n      :host([fullbleed]) {\n        @apply --layout-fit;\n      }\n\n      #contentContainer {\n        /* Create a stacking context here so that all children appear below the header. */\n        position: relative;\n        z-index: 0;\n        height: 100%;\n        transition: var(--app-drawer-layout-content-transition, none);\n      }\n\n      #contentContainer[drawer-position=left] {\n        margin-left: var(--app-drawer-width, 256px);\n      }\n\n      #contentContainer[drawer-position=right] {\n        margin-right: var(--app-drawer-width, 256px);\n      }\n    </style>\n\n    <slot id=\"drawerSlot\" name=\"drawer\"></slot>\n\n    <div id=\"contentContainer\" drawer-position\\$=\"[[_drawerPosition]]\">\n      <slot></slot>\n    </div>\n\n    <iron-media-query query=\"[[_computeMediaQuery(forceNarrow, responsiveWidth)]]\" on-query-matches-changed=\"_onQueryMatchesChanged\"></iron-media-query>\n"]);_templateObject_7f57aa202bd911e99390d3b784e8dc1a=function _templateObject_7f57aa202bd911e99390d3b784e8dc1a(){return data;};return data;}var nativeShadow=!(window['ShadyDOM']&&window['ShadyDOM']['inUse']);_exports.nativeShadow=nativeShadow;var nativeCssVariables_;/**
                          * @param {(ShadyCSSOptions | ShadyCSSInterface)=} settings
                          */function calcCssVariables(settings){if(settings&&settings['shimcssproperties']){nativeCssVariables_=false;}else{// chrome 49 has semi-working css vars, check if box-shadow works
// safari 9.1 has a recalc bug: https://bugs.webkit.org/show_bug.cgi?id=155782
// However, shim css custom properties are only supported with ShadyDOM enabled,
// so fall back on native if we do not detect ShadyDOM
// Edge 15: custom properties used in ::before and ::after will also be used in the parent element
// https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12414257/
nativeCssVariables_=nativeShadow||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports('box-shadow','0 0 0 var(--foo)'));}}/** @type {string | undefined} */var cssBuild;_exports.cssBuild=cssBuild;if(window.ShadyCSS&&window.ShadyCSS.cssBuild!==undefined){_exports.cssBuild=cssBuild=window.ShadyCSS.cssBuild;}/** @type {boolean} */var disableRuntime=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);_exports.disableRuntime=disableRuntime;if(window.ShadyCSS&&window.ShadyCSS.nativeCss!==undefined){nativeCssVariables_=window.ShadyCSS.nativeCss;}else if(window.ShadyCSS){calcCssVariables(window.ShadyCSS);// reset window variable to let ShadyCSS API take its place
window.ShadyCSS=undefined;}else{calcCssVariables(window['WebComponents']&&window['WebComponents']['flags']);}// Hack for type error under new type inference which doesn't like that
// nativeCssVariables is updated in a function and assigns the type
// `function(): ?` instead of `boolean`.
var nativeCssVariables=/** @type {boolean} */nativeCssVariables_;_exports.nativeCssVariables=nativeCssVariables;var styleSettings={nativeShadow:nativeShadow,get cssBuild(){return cssBuild;},disableRuntime:disableRuntime,nativeCssVariables:nativeCssVariables};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */ /*
      Extremely simple css parser. Intended to be not more than what we need
      and definitely not necessarily correct =).
      */_exports.$styleSettings=styleSettings;'use strict';/** @unrestricted */var StyleNode=function StyleNode(){babelHelpers.classCallCheck(this,StyleNode);/** @type {number} */this['start']=0;/** @type {number} */this['end']=0;/** @type {StyleNode} */this['previous']=null;/** @type {StyleNode} */this['parent']=null;/** @type {Array<StyleNode>} */this['rules']=null;/** @type {string} */this['parsedCssText']='';/** @type {string} */this['cssText']='';/** @type {boolean} */this['atRule']=false;/** @type {number} */this['type']=0;/** @type {string} */this['keyframesName']='';/** @type {string} */this['selector']='';/** @type {string} */this['parsedSelector']='';};/**
   * @param {string} text
   * @return {StyleNode}
   */_exports.StyleNode=StyleNode;function parse(text){text=clean(text);return parseCss(lex(text),text);}// remove stuff we don't care about that may hinder parsing
/**
 * @param {string} cssText
 * @return {string}
 */function clean(cssText){return cssText.replace(RX.comments,'').replace(RX.port,'');}// super simple {...} lexer that returns a node tree
/**
 * @param {string} text
 * @return {StyleNode}
 */function lex(text){var root=new StyleNode();root['start']=0;root['end']=text.length;var n=root;for(var i=0,l=text.length;i<l;i++){if(text[i]===OPEN_BRACE){if(!n['rules']){n['rules']=[];}var _p=n;var previous=_p['rules'][_p['rules'].length-1]||null;n=new StyleNode();n['start']=i+1;n['parent']=_p;n['previous']=previous;_p['rules'].push(n);}else if(text[i]===CLOSE_BRACE){n['end']=i+1;n=n['parent']||root;}}return root;}// add selectors/cssText to node tree
/**
 * @param {StyleNode} node
 * @param {string} text
 * @return {StyleNode}
 */function parseCss(node,text){var t=text.substring(node['start'],node['end']-1);node['parsedCssText']=node['cssText']=t.trim();if(node['parent']){var ss=node['previous']?node['previous']['end']:node['parent']['start'];t=text.substring(ss,node['start']-1);t=_expandUnicodeEscapes(t);t=t.replace(RX.multipleSpaces,' ');// TODO(sorvell): ad hoc; make selector include only after last ;
// helps with mixin syntax
t=t.substring(t.lastIndexOf(';')+1);var s=node['parsedSelector']=node['selector']=t.trim();node['atRule']=s.indexOf(AT_START)===0;// note, support a subset of rule types...
if(node['atRule']){if(s.indexOf(MEDIA_START)===0){node['type']=types.MEDIA_RULE;}else if(s.match(RX.keyframesRule)){node['type']=types.KEYFRAMES_RULE;node['keyframesName']=node['selector'].split(RX.multipleSpaces).pop();}}else{if(s.indexOf(VAR_START)===0){node['type']=types.MIXIN_RULE;}else{node['type']=types.STYLE_RULE;}}}var r$=node['rules'];if(r$){for(var i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){parseCss(r,text);}}return node;}/**
   * conversion of sort unicode escapes with spaces like `\33 ` (and longer) into
   * expanded form that doesn't require trailing space `\000033`
   * @param {string} s
   * @return {string}
   */function _expandUnicodeEscapes(s){return s.replace(/\\([0-9a-f]{1,6})\s/gi,function(){var code=arguments[1],repeat=6-code.length;while(repeat--){code='0'+code;}return'\\'+code;});}/**
   * stringify parsed css.
   * @param {StyleNode} node
   * @param {boolean=} preserveProperties
   * @param {string=} text
   * @return {string}
   */function stringify(node,preserveProperties){var text=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'';// calc rule cssText
var cssText='';if(node['cssText']||node['rules']){var r$=node['rules'];if(r$&&!_hasMixinRules(r$)){for(var i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){cssText=stringify(r,preserveProperties,cssText);}}else{cssText=preserveProperties?node['cssText']:removeCustomProps(node['cssText']);cssText=cssText.trim();if(cssText){cssText='  '+cssText+'\n';}}}// emit rule if there is cssText
if(cssText){if(node['selector']){text+=node['selector']+' '+OPEN_BRACE+'\n';}text+=cssText;if(node['selector']){text+=CLOSE_BRACE+'\n\n';}}return text;}/**
   * @param {Array<StyleNode>} rules
   * @return {boolean}
   */function _hasMixinRules(rules){var r=rules[0];return Boolean(r)&&Boolean(r['selector'])&&r['selector'].indexOf(VAR_START)===0;}/**
   * @param {string} cssText
   * @return {string}
   */function removeCustomProps(cssText){cssText=removeCustomPropAssignment(cssText);return removeCustomPropApply(cssText);}/**
   * @param {string} cssText
   * @return {string}
   */function removeCustomPropAssignment(cssText){return cssText.replace(RX.customProp,'').replace(RX.mixinProp,'');}/**
   * @param {string} cssText
   * @return {string}
   */function removeCustomPropApply(cssText){return cssText.replace(RX.mixinApply,'').replace(RX.varApply,'');}/** @enum {number} */var types={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1000};_exports.types=types;var OPEN_BRACE='{';var CLOSE_BRACE='}';// helper regexp's
var RX={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g};var VAR_START='--';var MEDIA_START='@media';var AT_START='@';var cssParse={StyleNode:StyleNode,parse:parse,stringify:stringify,removeCustomPropAssignment:removeCustomPropAssignment,types:types};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$cssParse=cssParse;var VAR_ASSIGN=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi;_exports.VAR_ASSIGN=VAR_ASSIGN;var MIXIN_MATCH=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;_exports.MIXIN_MATCH=MIXIN_MATCH;var VAR_CONSUMED=/(--[\w-]+)\s*([:,;)]|$)/gi;_exports.VAR_CONSUMED=VAR_CONSUMED;var ANIMATION_MATCH=/(animation\s*:)|(animation-name\s*:)/;_exports.ANIMATION_MATCH=ANIMATION_MATCH;var MEDIA_MATCH=/@media\s(.*)/;_exports.MEDIA_MATCH=MEDIA_MATCH;var IS_VAR=/^--/;_exports.IS_VAR=IS_VAR;var BRACKETED=/\{[^}]*\}/g;_exports.BRACKETED=BRACKETED;var HOST_PREFIX='(?:^|[^.#[:])';_exports.HOST_PREFIX=HOST_PREFIX;var HOST_SUFFIX='($|[.:[\\s>+~])';_exports.HOST_SUFFIX=HOST_SUFFIX;var commonRegex={VAR_ASSIGN:VAR_ASSIGN,MIXIN_MATCH:MIXIN_MATCH,VAR_CONSUMED:VAR_CONSUMED,ANIMATION_MATCH:ANIMATION_MATCH,MEDIA_MATCH:MEDIA_MATCH,IS_VAR:IS_VAR,BRACKETED:BRACKETED,HOST_PREFIX:HOST_PREFIX,HOST_SUFFIX:HOST_SUFFIX};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$commonRegex=commonRegex;'use strict';/** @type {!Set<string>} */var styleTextSet=new Set();var scopingAttribute='shady-unscoped';/**
                                                   * Add a specifically-marked style to the document directly, and only one copy of that style.
                                                   *
                                                   * @param {!HTMLStyleElement} style
                                                   * @return {undefined}
                                                   */_exports.scopingAttribute=scopingAttribute;function processUnscopedStyle(style){var text=style.textContent;if(!styleTextSet.has(text)){styleTextSet.add(text);var newStyle=style.cloneNode(true);document.head.appendChild(newStyle);}}/**
   * Check if a style is supposed to be unscoped
   * @param {!HTMLStyleElement} style
   * @return {boolean} true if the style has the unscoping attribute
   */function isUnscopedStyle(style){return style.hasAttribute(scopingAttribute);}var unscopedStyleHandler={scopingAttribute:scopingAttribute,processUnscopedStyle:processUnscopedStyle,isUnscopedStyle:isUnscopedStyle};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$unscopedStyleHandler=unscopedStyleHandler;'use strict';function toCssText(rules,callback){if(!rules){return'';}if(typeof rules==='string'){rules=parse(rules);}if(callback){forEachRule(rules,callback);}return stringify(rules,nativeCssVariables);}/**
   * @param {HTMLStyleElement} style
   * @return {StyleNode}
   */function rulesForStyle(style){if(!style['__cssRules']&&style.textContent){style['__cssRules']=parse(style.textContent);}return style['__cssRules']||null;}// Tests if a rule is a keyframes selector, which looks almost exactly
// like a normal selector but is not (it has nothing to do with scoping
// for example).
/**
 * @param {StyleNode} rule
 * @return {boolean}
 */function isKeyframesSelector(rule){return Boolean(rule['parent'])&&rule['parent']['type']===types.KEYFRAMES_RULE;}/**
   * @param {StyleNode} node
   * @param {Function=} styleRuleCallback
   * @param {Function=} keyframesRuleCallback
   * @param {boolean=} onlyActiveRules
   */function forEachRule(node,styleRuleCallback,keyframesRuleCallback,onlyActiveRules){if(!node){return;}var skipRules=false;var type=node['type'];if(onlyActiveRules){if(type===types.MEDIA_RULE){var matchMedia=node['selector'].match(MEDIA_MATCH);if(matchMedia){// if rule is a non matching @media rule, skip subrules
if(!window.matchMedia(matchMedia[1]).matches){skipRules=true;}}}}if(type===types.STYLE_RULE){styleRuleCallback(node);}else if(keyframesRuleCallback&&type===types.KEYFRAMES_RULE){keyframesRuleCallback(node);}else if(type===types.MIXIN_RULE){skipRules=true;}var r$=node['rules'];if(r$&&!skipRules){for(var i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){forEachRule(r,styleRuleCallback,keyframesRuleCallback,onlyActiveRules);}}}// add a string of cssText to the document.
/**
 * @param {string} cssText
 * @param {string} moniker
 * @param {Node} target
 * @param {Node} contextNode
 * @return {HTMLStyleElement}
 */function applyCss(cssText,moniker,target,contextNode){var style=createScopeStyle(cssText,moniker);applyStyle(style,target,contextNode);return style;}/**
   * @param {string} cssText
   * @param {string} moniker
   * @return {HTMLStyleElement}
   */function createScopeStyle(cssText,moniker){var style=/** @type {HTMLStyleElement} */document.createElement('style');if(moniker){style.setAttribute('scope',moniker);}style.textContent=cssText;return style;}/**
   * Track the position of the last added style for placing placeholders
   * @type {Node}
   */var lastHeadApplyNode=null;// insert a comment node as a styling position placeholder.
/**
 * @param {string} moniker
 * @return {!Comment}
 */function applyStylePlaceHolder(moniker){var placeHolder=document.createComment(' Shady DOM styles for '+moniker+' ');var after=lastHeadApplyNode?lastHeadApplyNode['nextSibling']:null;var scope=document.head;scope.insertBefore(placeHolder,after||scope.firstChild);lastHeadApplyNode=placeHolder;return placeHolder;}/**
   * @param {HTMLStyleElement} style
   * @param {?Node} target
   * @param {?Node} contextNode
   */function applyStyle(style,target,contextNode){target=target||document.head;var after=contextNode&&contextNode.nextSibling||target.firstChild;target.insertBefore(style,after);if(!lastHeadApplyNode){lastHeadApplyNode=style;}else{// only update lastHeadApplyNode if the new style is inserted after the old lastHeadApplyNode
var position=style.compareDocumentPosition(lastHeadApplyNode);if(position===Node.DOCUMENT_POSITION_PRECEDING){lastHeadApplyNode=style;}}}/**
   * @param {string} buildType
   * @return {boolean}
   */function isTargetedBuild(buildType){return nativeShadow?buildType==='shadow':buildType==='shady';}/**
   * Walk from text[start] matching parens and
   * returns position of the outer end paren
   * @param {string} text
   * @param {number} start
   * @return {number}
   */function findMatchingParen(text,start){var level=0;for(var i=start,l=text.length;i<l;i++){if(text[i]==='('){level++;}else if(text[i]===')'){if(--level===0){return i;}}}return-1;}/**
   * @param {string} str
   * @param {function(string, string, string, string)} callback
   */function processVariableAndFallback(str,callback){// find 'var('
var start=str.indexOf('var(');if(start===-1){// no var?, everything is prefix
return callback(str,'','','');}//${prefix}var(${inner})${suffix}
var end=findMatchingParen(str,start+3);var inner=str.substring(start+4,end);var prefix=str.substring(0,start);// suffix may have other variables
var suffix=processVariableAndFallback(str.substring(end+1),callback);var comma=inner.indexOf(',');// value and fallback args should be trimmed to match in property lookup
if(comma===-1){// variable, no fallback
return callback(prefix,inner.trim(),'',suffix);}// var(${value},${fallback})
var value=inner.substring(0,comma).trim();var fallback=inner.substring(comma+1).trim();return callback(prefix,value,fallback,suffix);}/**
   * @param {Element} element
   * @param {string} value
   */function setElementClassRaw(element,value){// use native setAttribute provided by ShadyDOM when setAttribute is patched
if(nativeShadow){element.setAttribute('class',value);}else{window['ShadyDOM']['nativeMethods']['setAttribute'].call(element,'class',value);}}/**
   * @type {function(*):*}
   */var wrap=window['ShadyDOM']&&window['ShadyDOM']['wrap']||function(node){return node;};/**
                                                                                         * @param {Element | {is: string, extends: string}} element
                                                                                         * @return {{is: string, typeExtension: string}}
                                                                                         */_exports.wrap=wrap;function getIsExtends(element){var localName=element['localName'];var is='',typeExtension='';/*
                          NOTE: technically, this can be wrong for certain svg elements
                          with `-` in the name like `<font-face>`
                          */if(localName){if(localName.indexOf('-')>-1){is=localName;}else{typeExtension=localName;is=element.getAttribute&&element.getAttribute('is')||'';}}else{is=/** @type {?} */element.is;typeExtension=/** @type {?} */element.extends;}return{is:is,typeExtension:typeExtension};}/**
   * @param {Element|DocumentFragment} element
   * @return {string}
   */function gatherStyleText(element){/** @type {!Array<string>} */var styleTextParts=[];var styles=/** @type {!NodeList<!HTMLStyleElement>} */element.querySelectorAll('style');for(var i=0;i<styles.length;i++){var _style=styles[i];if(isUnscopedStyle(_style)){if(!nativeShadow){processUnscopedStyle(_style);_style.parentNode.removeChild(_style);}}else{styleTextParts.push(_style.textContent);_style.parentNode.removeChild(_style);}}return styleTextParts.join('').trim();}/**
   * Split a selector separated by commas into an array in a smart way
   * @param {string} selector
   * @return {!Array<string>}
   */function splitSelectorList(selector){var parts=[];var part='';for(var i=0;i>=0&&i<selector.length;i++){// A selector with parentheses will be one complete part
if(selector[i]==='('){// find the matching paren
var end=findMatchingParen(selector,i);// push the paren block into the part
part+=selector.slice(i,end+1);// move the index to after the paren block
i=end;}else if(selector[i]===','){parts.push(part);part='';}else{part+=selector[i];}}// catch any pieces after the last comma
if(part){parts.push(part);}return parts;}var CSS_BUILD_ATTR='css-build';/**
                                     * Return the polymer-css-build "build type" applied to this element
                                     *
                                     * @param {!HTMLElement} element
                                     * @return {string} Can be "", "shady", or "shadow"
                                     */function getCssBuild(element){if(cssBuild!==undefined){return(/** @type {string} */cssBuild);}if(element.__cssBuild===undefined){// try attribute first, as it is the common case
var attrValue=element.getAttribute(CSS_BUILD_ATTR);if(attrValue){element.__cssBuild=attrValue;}else{var buildComment=getBuildComment(element);if(buildComment!==''){// remove build comment so it is not needlessly copied into every element instance
removeBuildComment(element);}element.__cssBuild=buildComment;}}return element.__cssBuild||'';}/**
   * Check if the given element, either a <template> or <style>, has been processed
   * by polymer-css-build.
   *
   * If so, then we can make a number of optimizations:
   * - polymer-css-build will decompose mixins into individual CSS Custom Properties,
   * so the ApplyShim can be skipped entirely.
   * - Under native ShadowDOM, the style text can just be copied into each instance
   * without modification
   * - If the build is "shady" and ShadyDOM is in use, the styling does not need
   * scoping beyond the shimming of CSS Custom Properties
   *
   * @param {!HTMLElement} element
   * @return {boolean}
   */function elementHasBuiltCss(element){return getCssBuild(element)!=='';}/**
   * For templates made with tagged template literals, polymer-css-build will
   * insert a comment of the form `<!--css-build:shadow-->`
   *
   * @param {!HTMLElement} element
   * @return {string}
   */function getBuildComment(element){var buildComment=element.localName==='template'?/** @type {!HTMLTemplateElement} */element.content.firstChild:element.firstChild;if(babelHelpers.instanceof(buildComment,Comment)){var commentParts=buildComment.textContent.trim().split(':');if(commentParts[0]===CSS_BUILD_ATTR){return commentParts[1];}}return'';}/**
   * Check if the css build status is optimal, and do no unneeded work.
   *
   * @param {string=} cssBuild CSS build status
   * @return {boolean} css build is optimal or not
   */function isOptimalCssBuild(){var cssBuild$$1=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';// CSS custom property shim always requires work
if(cssBuild$$1===''||!nativeCssVariables){return false;}return nativeShadow?cssBuild$$1==='shadow':cssBuild$$1==='shady';}/**
   * @param {!HTMLElement} element
   */function removeBuildComment(element){var buildComment=element.localName==='template'?/** @type {!HTMLTemplateElement} */element.content.firstChild:element.firstChild;buildComment.parentNode.removeChild(buildComment);}var styleUtil={toCssText:toCssText,rulesForStyle:rulesForStyle,isKeyframesSelector:isKeyframesSelector,forEachRule:forEachRule,applyCss:applyCss,createScopeStyle:createScopeStyle,applyStylePlaceHolder:applyStylePlaceHolder,applyStyle:applyStyle,isTargetedBuild:isTargetedBuild,findMatchingParen:findMatchingParen,processVariableAndFallback:processVariableAndFallback,setElementClassRaw:setElementClassRaw,wrap:wrap,getIsExtends:getIsExtends,gatherStyleText:gatherStyleText,splitSelectorList:splitSelectorList,getCssBuild:getCssBuild,elementHasBuiltCss:elementHasBuiltCss,getBuildComment:getBuildComment,isOptimalCssBuild:isOptimalCssBuild};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$styleUtil=styleUtil;'use strict';function updateNativeProperties(element,properties){// remove previous properties
for(var _p2 in properties){// NOTE: for bc with shim, don't apply null values.
if(_p2===null){element.style.removeProperty(_p2);}else{element.style.setProperty(_p2,properties[_p2]);}}}/**
   * @param {Element} element
   * @param {string} property
   * @return {string}
   */function _getComputedStyleValue(element,property){/**
   * @const {string}
   */var value=window.getComputedStyle(element).getPropertyValue(property);if(!value){return'';}else{return value.trim();}}/**
   * return true if `cssText` contains a mixin definition or consumption
   * @param {string} cssText
   * @return {boolean}
   */function _detectMixin(cssText){var has=MIXIN_MATCH.test(cssText)||VAR_ASSIGN.test(cssText);// reset state of the regexes
MIXIN_MATCH.lastIndex=0;VAR_ASSIGN.lastIndex=0;return has;}var commonUtils={updateNativeProperties:updateNativeProperties,getComputedStyleValue:_getComputedStyleValue,detectMixin:_detectMixin};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */ /*
       * The apply shim simulates the behavior of `@apply` proposed at
       * https://tabatkins.github.io/specs/css-apply-rule/.
       * The approach is to convert a property like this:
       *
       *    --foo: {color: red; background: blue;}
       *
       * to this:
       *
       *    --foo_-_color: red;
       *    --foo_-_background: blue;
       *
       * Then where `@apply --foo` is used, that is converted to:
       *
       *    color: var(--foo_-_color);
       *    background: var(--foo_-_background);
       *
       * This approach generally works but there are some issues and limitations.
       * Consider, for example, that somewhere *between* where `--foo` is set and used,
       * another element sets it to:
       *
       *    --foo: { border: 2px solid red; }
       *
       * We must now ensure that the color and background from the previous setting
       * do not apply. This is accomplished by changing the property set to this:
       *
       *    --foo_-_border: 2px solid red;
       *    --foo_-_color: initial;
       *    --foo_-_background: initial;
       *
       * This works but introduces one new issue.
       * Consider this setup at the point where the `@apply` is used:
       *
       *    background: orange;
       *    `@apply` --foo;
       *
       * In this case the background will be unset (initial) rather than the desired
       * `orange`. We address this by altering the property set to use a fallback
       * value like this:
       *
       *    color: var(--foo_-_color);
       *    background: var(--foo_-_background, orange);
       *    border: var(--foo_-_border);
       *
       * Note that the default is retained in the property set and the `background` is
       * the desired `orange`. This leads us to a limitation.
       *
       * Limitation 1:
      
       * Only properties in the rule where the `@apply`
       * is used are considered as default values.
       * If another rule matches the element and sets `background` with
       * less specificity than the rule in which `@apply` appears,
       * the `background` will not be set.
       *
       * Limitation 2:
       *
       * When using Polymer's `updateStyles` api, new properties may not be set for
       * `@apply` properties.
      
      */_exports.$commonUtils=commonUtils;'use strict';var APPLY_NAME_CLEAN=/;\s*/m;var INITIAL_INHERIT=/^\s*(initial)|(inherit)\s*$/;var IMPORTANT=/\s*!important/;// separator used between mixin-name and mixin-property-name when producing properties
// NOTE: plain '-' may cause collisions in user styles
var MIXIN_VAR_SEP='_-_';/**
                              * @typedef {!Object<string, string>}
                              */var PropertyEntry;// eslint-disable-line no-unused-vars
/**
 * @typedef {!Object<string, boolean>}
 */var DependantsEntry;// eslint-disable-line no-unused-vars
/** @typedef {{
 *    properties: PropertyEntry,
 *    dependants: DependantsEntry
 * }}
 */var MixinMapEntry;// eslint-disable-line no-unused-vars
// map of mixin to property names
// --foo: {border: 2px} -> {properties: {(--foo, ['border'])}, dependants: {'element-name': proto}}
var MixinMap=/*#__PURE__*/function(){function MixinMap(){babelHelpers.classCallCheck(this,MixinMap);/** @type {!Object<string, !MixinMapEntry>} */this._map={};}/**
     * @param {string} name
     * @param {!PropertyEntry} props
     */babelHelpers.createClass(MixinMap,[{key:"set",value:function set(name,props){name=name.trim();this._map[name]={properties:props,dependants:{}};}/**
     * @param {string} name
     * @return {MixinMapEntry}
     */},{key:"get",value:function get(name){name=name.trim();return this._map[name]||null;}}]);return MixinMap;}();/**
   * Callback for when an element is marked invalid
   * @type {?function(string)}
   */var invalidCallback=null;/** @unrestricted */var ApplyShim=/*#__PURE__*/function(){function ApplyShim(){babelHelpers.classCallCheck(this,ApplyShim);/** @type {?string} */this._currentElement=null;/** @type {HTMLMetaElement} */this._measureElement=null;this._map=new MixinMap();}/**
     * return true if `cssText` contains a mixin definition or consumption
     * @param {string} cssText
     * @return {boolean}
     */babelHelpers.createClass(ApplyShim,[{key:"detectMixin",value:function detectMixin(cssText){return _detectMixin(cssText);}/**
     * Gather styles into one style for easier processing
     * @param {!HTMLTemplateElement} template
     * @return {HTMLStyleElement}
     */},{key:"gatherStyles",value:function gatherStyles(template){var styleText=gatherStyleText(template.content);if(styleText){var _style2=/** @type {!HTMLStyleElement} */document.createElement('style');_style2.textContent=styleText;template.content.insertBefore(_style2,template.content.firstChild);return _style2;}return null;}/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @return {StyleNode}
     */},{key:"transformTemplate",value:function transformTemplate(template,elementName){if(template._gatheredStyle===undefined){template._gatheredStyle=this.gatherStyles(template);}/** @type {HTMLStyleElement} */var style=template._gatheredStyle;return style?this.transformStyle(style,elementName):null;}/**
     * @param {!HTMLStyleElement} style
     * @param {string} elementName
     * @return {StyleNode}
     */},{key:"transformStyle",value:function transformStyle(style){var elementName=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'';var ast=rulesForStyle(style);this.transformRules(ast,elementName);style.textContent=toCssText(ast);return ast;}/**
     * @param {!HTMLStyleElement} style
     * @return {StyleNode}
     */},{key:"transformCustomStyle",value:function transformCustomStyle(style){var _this=this;var ast=rulesForStyle(style);forEachRule(ast,function(rule){if(rule['selector']===':root'){rule['selector']='html';}_this.transformRule(rule);});style.textContent=toCssText(ast);return ast;}/**
     * @param {StyleNode} rules
     * @param {string} elementName
     */},{key:"transformRules",value:function transformRules(rules,elementName){var _this2=this;this._currentElement=elementName;forEachRule(rules,function(r){_this2.transformRule(r);});this._currentElement=null;}/**
     * @param {!StyleNode} rule
     */},{key:"transformRule",value:function transformRule(rule){rule['cssText']=this.transformCssText(rule['parsedCssText'],rule);// :root was only used for variable assignment in property shim,
// but generates invalid selectors with real properties.
// replace with `:host > *`, which serves the same effect
if(rule['selector']===':root'){rule['selector']=':host > *';}}/**
     * @param {string} cssText
     * @param {!StyleNode} rule
     * @return {string}
     */},{key:"transformCssText",value:function transformCssText(cssText,rule){var _this3=this;// produce variables
cssText=cssText.replace(VAR_ASSIGN,function(matchText,propertyName,valueProperty,valueMixin){return _this3._produceCssProperties(matchText,propertyName,valueProperty,valueMixin,rule);});// consume mixins
return this._consumeCssProperties(cssText,rule);}/**
     * @param {string} property
     * @return {string}
     */},{key:"_getInitialValueForProperty",value:function _getInitialValueForProperty(property){if(!this._measureElement){this._measureElement=/** @type {HTMLMetaElement} */document.createElement('meta');this._measureElement.setAttribute('apply-shim-measure','');this._measureElement.style.all='initial';document.head.appendChild(this._measureElement);}return window.getComputedStyle(this._measureElement).getPropertyValue(property);}/**
     * Walk over all rules before this rule to find fallbacks for mixins
     *
     * @param {!StyleNode} startRule
     * @return {!Object}
     */},{key:"_fallbacksFromPreviousRules",value:function _fallbacksFromPreviousRules(startRule){var _this4=this;// find the "top" rule
var topRule=startRule;while(topRule['parent']){topRule=topRule['parent'];}var fallbacks={};var seenStartRule=false;forEachRule(topRule,function(r){// stop when we hit the input rule
seenStartRule=seenStartRule||r===startRule;if(seenStartRule){return;}// NOTE: Only matching selectors are "safe" for this fallback processing
// It would be prohibitive to run `matchesSelector()` on each selector,
// so we cheat and only check if the same selector string is used, which
// guarantees things like specificity matching
if(r['selector']===startRule['selector']){Object.assign(fallbacks,_this4._cssTextToMap(r['parsedCssText']));}});return fallbacks;}/**
     * replace mixin consumption with variable consumption
     * @param {string} text
     * @param {!StyleNode=} rule
     * @return {string}
     */},{key:"_consumeCssProperties",value:function _consumeCssProperties(text,rule){/** @type {Array} */var m=null;// loop over text until all mixins with defintions have been applied
while(m=MIXIN_MATCH.exec(text)){var matchText=m[0];var mixinName=m[1];var idx=m.index;// collect properties before apply to be "defaults" if mixin might override them
// match includes a "prefix", so find the start and end positions of @apply
var applyPos=idx+matchText.indexOf('@apply');var afterApplyPos=idx+matchText.length;// find props defined before this @apply
var textBeforeApply=text.slice(0,applyPos);var textAfterApply=text.slice(afterApplyPos);var defaults=rule?this._fallbacksFromPreviousRules(rule):{};Object.assign(defaults,this._cssTextToMap(textBeforeApply));var replacement=this._atApplyToCssProperties(mixinName,defaults);// use regex match position to replace mixin, keep linear processing time
text="".concat(textBeforeApply).concat(replacement).concat(textAfterApply);// move regex search to _after_ replacement
MIXIN_MATCH.lastIndex=idx+replacement.length;}return text;}/**
     * produce variable consumption at the site of mixin consumption
     * `@apply` --foo; -> for all props (${propname}: var(--foo_-_${propname}, ${fallback[propname]}}))
     * Example:
     *  border: var(--foo_-_border); padding: var(--foo_-_padding, 2px)
     *
     * @param {string} mixinName
     * @param {Object} fallbacks
     * @return {string}
     */},{key:"_atApplyToCssProperties",value:function _atApplyToCssProperties(mixinName,fallbacks){mixinName=mixinName.replace(APPLY_NAME_CLEAN,'');var vars=[];var mixinEntry=this._map.get(mixinName);// if we depend on a mixin before it is created
// make a sentinel entry in the map to add this element as a dependency for when it is defined.
if(!mixinEntry){this._map.set(mixinName,{});mixinEntry=this._map.get(mixinName);}if(mixinEntry){if(this._currentElement){mixinEntry.dependants[this._currentElement]=true;}var _p3,parts,f;var properties=mixinEntry.properties;for(_p3 in properties){f=fallbacks&&fallbacks[_p3];parts=[_p3,': var(',mixinName,MIXIN_VAR_SEP,_p3];if(f){parts.push(',',f.replace(IMPORTANT,''));}parts.push(')');if(IMPORTANT.test(properties[_p3])){parts.push(' !important');}vars.push(parts.join(''));}}return vars.join('; ');}/**
     * @param {string} property
     * @param {string} value
     * @return {string}
     */},{key:"_replaceInitialOrInherit",value:function _replaceInitialOrInherit(property,value){var match=INITIAL_INHERIT.exec(value);if(match){if(match[1]){// initial
// replace `initial` with the concrete initial value for this property
value=this._getInitialValueForProperty(property);}else{// inherit
// with this purposfully illegal value, the variable will be invalid at
// compute time (https://www.w3.org/TR/css-variables/#invalid-at-computed-value-time)
// and for inheriting values, will behave similarly
// we cannot support the same behavior for non inheriting values like 'border'
value='apply-shim-inherit';}}return value;}/**
     * "parse" a mixin definition into a map of properties and values
     * cssTextToMap('border: 2px solid black') -> ('border', '2px solid black')
     * @param {string} text
     * @param {boolean=} replaceInitialOrInherit
     * @return {!Object<string, string>}
     */},{key:"_cssTextToMap",value:function _cssTextToMap(text){var replaceInitialOrInherit=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var props=text.split(';');var property,value;var out={};for(var i=0,_p4,sp;i<props.length;i++){_p4=props[i];if(_p4){sp=_p4.split(':');// ignore lines that aren't definitions like @media
if(sp.length>1){property=sp[0].trim();// some properties may have ':' in the value, like data urls
value=sp.slice(1).join(':');if(replaceInitialOrInherit){value=this._replaceInitialOrInherit(property,value);}out[property]=value;}}}return out;}/**
     * @param {MixinMapEntry} mixinEntry
     */},{key:"_invalidateMixinEntry",value:function _invalidateMixinEntry(mixinEntry){if(!invalidCallback){return;}for(var elementName in mixinEntry.dependants){if(elementName!==this._currentElement){invalidCallback(elementName);}}}/**
     * @param {string} matchText
     * @param {string} propertyName
     * @param {?string} valueProperty
     * @param {?string} valueMixin
     * @param {!StyleNode} rule
     * @return {string}
     */},{key:"_produceCssProperties",value:function _produceCssProperties(matchText,propertyName,valueProperty,valueMixin,rule){var _this5=this;// handle case where property value is a mixin
if(valueProperty){// form: --mixin2: var(--mixin1), where --mixin1 is in the map
processVariableAndFallback(valueProperty,function(prefix,value){if(value&&_this5._map.get(value)){valueMixin="@apply ".concat(value,";");}});}if(!valueMixin){return matchText;}var mixinAsProperties=this._consumeCssProperties(''+valueMixin,rule);var prefix=matchText.slice(0,matchText.indexOf('--'));// `initial` and `inherit` as properties in a map should be replaced because
// these keywords are eagerly evaluated when the mixin becomes CSS Custom Properties,
// and would set the variable value, rather than carry the keyword to the `var()` usage.
var mixinValues=this._cssTextToMap(mixinAsProperties,true);var combinedProps=mixinValues;var mixinEntry=this._map.get(propertyName);var oldProps=mixinEntry&&mixinEntry.properties;if(oldProps){// NOTE: since we use mixin, the map of properties is updated here
// and this is what we want.
combinedProps=Object.assign(Object.create(oldProps),mixinValues);}else{this._map.set(propertyName,combinedProps);}var out=[];var p,v;// set variables defined by current mixin
var needToInvalidate=false;for(p in combinedProps){v=mixinValues[p];// if property not defined by current mixin, set initial
if(v===undefined){v='initial';}if(oldProps&&!(p in oldProps)){needToInvalidate=true;}out.push("".concat(propertyName).concat(MIXIN_VAR_SEP).concat(p,": ").concat(v));}if(needToInvalidate){this._invalidateMixinEntry(mixinEntry);}if(mixinEntry){mixinEntry.properties=combinedProps;}// because the mixinMap is global, the mixin might conflict with
// a different scope's simple variable definition:
// Example:
// some style somewhere:
// --mixin1:{ ... }
// --mixin2: var(--mixin1);
// some other element:
// --mixin1: 10px solid red;
// --foo: var(--mixin1);
// In this case, we leave the original variable definition in place.
if(valueProperty){prefix="".concat(matchText,";").concat(prefix);}return"".concat(prefix).concat(out.join('; '),";");}}]);return ApplyShim;}();/* exports */ /* eslint-disable no-self-assign */_exports.$applyShimDefault=ApplyShim;ApplyShim.prototype['detectMixin']=ApplyShim.prototype.detectMixin;ApplyShim.prototype['transformStyle']=ApplyShim.prototype.transformStyle;ApplyShim.prototype['transformCustomStyle']=ApplyShim.prototype.transformCustomStyle;ApplyShim.prototype['transformRules']=ApplyShim.prototype.transformRules;ApplyShim.prototype['transformRule']=ApplyShim.prototype.transformRule;ApplyShim.prototype['transformTemplate']=ApplyShim.prototype.transformTemplate;ApplyShim.prototype['_separator']=MIXIN_VAR_SEP;/* eslint-enable no-self-assign */Object.defineProperty(ApplyShim.prototype,'invalidCallback',{/** @return {?function(string)} */get:function get(){return invalidCallback;},/** @param {?function(string)} cb */set:function set(cb){invalidCallback=cb;}});var applyShim={default:ApplyShim};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$applyShim$1=applyShim;'use strict';/**
               * @const {!Object<string, !HTMLTemplateElement>}
               */var templateMap={};_exports.$templateMapDefault=templateMap;var templateMap$1={default:templateMap};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$templateMap=templateMap$1;'use strict';/*
               * Utilities for handling invalidating apply-shim mixins for a given template.
               *
               * The invalidation strategy involves keeping track of the "current" version of a template's mixins, and updating that count when a mixin is invalidated.
               * The template
               */ /** @const {string} */var CURRENT_VERSION='_applyShimCurrentVersion';/** @const {string} */var NEXT_VERSION='_applyShimNextVersion';/** @const {string} */var VALIDATING_VERSION='_applyShimValidatingVersion';/**
                                                           * @const {Promise<void>}
                                                           */var promise=Promise.resolve();/**
                                    * @param {string} elementName
                                    */function invalidate(elementName){var template=templateMap[elementName];if(template){invalidateTemplate(template);}}/**
   * This function can be called multiple times to mark a template invalid
   * and signal that the style inside must be regenerated.
   *
   * Use `startValidatingTemplate` to begin an asynchronous validation cycle.
   * During that cycle, call `templateIsValidating` to see if the template must
   * be revalidated
   * @param {HTMLTemplateElement} template
   */function invalidateTemplate(template){// default the current version to 0
template[CURRENT_VERSION]=template[CURRENT_VERSION]||0;// ensure the "validating for" flag exists
template[VALIDATING_VERSION]=template[VALIDATING_VERSION]||0;// increment the next version
template[NEXT_VERSION]=(template[NEXT_VERSION]||0)+1;}/**
   * @param {string} elementName
   * @return {boolean}
   */function isValid(elementName){var template=templateMap[elementName];if(template){return templateIsValid(template);}return true;}/**
   * @param {HTMLTemplateElement} template
   * @return {boolean}
   */function templateIsValid(template){return template[CURRENT_VERSION]===template[NEXT_VERSION];}/**
   * @param {string} elementName
   * @return {boolean}
   */function isValidating(elementName){var template=templateMap[elementName];if(template){return templateIsValidating(template);}return false;}/**
   * Returns true if the template is currently invalid and `startValidating` has been called since the last invalidation.
   * If false, the template must be validated.
   * @param {HTMLTemplateElement} template
   * @return {boolean}
   */function templateIsValidating(template){return!templateIsValid(template)&&template[VALIDATING_VERSION]===template[NEXT_VERSION];}/**
   * the template is marked as `validating` for one microtask so that all instances
   * found in the tree crawl of `applyStyle` will update themselves,
   * but the template will only be updated once.
   * @param {string} elementName
  */function startValidating(elementName){var template=templateMap[elementName];startValidatingTemplate(template);}/**
   * Begin an asynchronous invalidation cycle.
   * This should be called after every validation of a template
   *
   * After one microtask, the template will be marked as valid until the next call to `invalidateTemplate`
   * @param {HTMLTemplateElement} template
   */function startValidatingTemplate(template){// remember that the current "next version" is the reason for this validation cycle
template[VALIDATING_VERSION]=template[NEXT_VERSION];// however, there only needs to be one async task to clear the counters
if(!template._validating){template._validating=true;promise.then(function(){// sync the current version to let future invalidations cause a refresh cycle
template[CURRENT_VERSION]=template[NEXT_VERSION];template._validating=false;});}}/**
   * @return {boolean}
   */function elementsAreInvalid(){for(var elementName in templateMap){var _template=templateMap[elementName];if(!templateIsValid(_template)){return true;}}return false;}var applyShimUtils={invalidate:invalidate,invalidateTemplate:invalidateTemplate,isValid:isValid,templateIsValid:templateIsValid,isValidating:isValidating,templateIsValidating:templateIsValidating,startValidating:startValidating,startValidatingTemplate:startValidatingTemplate,elementsAreInvalid:elementsAreInvalid};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$applyShimUtils=applyShimUtils;'use strict';/** @type {Promise<void>} */var readyPromise=null;/** @type {?function(?function())} */var whenReady=window['HTMLImports']&&window['HTMLImports']['whenReady']||null;/** @type {function()} */var resolveFn;/**
                * @param {?function()} callback
                */function documentWait(callback){requestAnimationFrame(function(){if(whenReady){whenReady(callback);}else{if(!readyPromise){readyPromise=new Promise(function(resolve){resolveFn=resolve;});if(document.readyState==='complete'){resolveFn();}else{document.addEventListener('readystatechange',function(){if(document.readyState==='complete'){resolveFn();}});}}readyPromise.then(function(){callback&&callback();});}});}var documentWait$1={default:documentWait};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$documentWait=documentWait$1;'use strict';var CustomStyleProvider;_exports.CustomStyleProvider=CustomStyleProvider;var SEEN_MARKER='__seenByShadyCSS';var CACHED_STYLE='__shadyCSSCachedStyle';/** @type {?function(!HTMLStyleElement)} */var transformFn=null;/** @type {?function()} */var validateFn=null;/**
                       This interface is provided to add document-level <style> elements to ShadyCSS for processing.
                       These styles must be processed by ShadyCSS to simulate ShadowRoot upper-bound encapsulation from outside styles
                       In addition, these styles may also need to be processed for @apply rules and CSS Custom Properties
                       
                       To add document-level styles to ShadyCSS, one can call `ShadyCSS.addDocumentStyle(styleElement)` or `ShadyCSS.addDocumentStyle({getStyle: () => styleElement})`
                       
                       In addition, if the process used to discover document-level styles can be synchronously flushed, one should set `ShadyCSS.documentStyleFlush`.
                       This function will be called when calculating styles.
                       
                       An example usage of the document-level styling api can be found in `examples/document-style-lib.js`
                       
                       @unrestricted
                       */var CustomStyleInterface=/*#__PURE__*/function(){function CustomStyleInterface(){babelHelpers.classCallCheck(this,CustomStyleInterface);/** @type {!Array<!CustomStyleProvider>} */this['customStyles']=[];this['enqueued']=false;// NOTE(dfreedm): use quotes here to prevent closure inlining to `function(){}`;
documentWait(function(){if(window['ShadyCSS']['flushCustomStyles']){window['ShadyCSS']['flushCustomStyles']();}});}/**
     * Queue a validation for new custom styles to batch style recalculations
     */babelHelpers.createClass(CustomStyleInterface,[{key:"enqueueDocumentValidation",value:function enqueueDocumentValidation(){if(this['enqueued']||!validateFn){return;}this['enqueued']=true;documentWait(validateFn);}/**
     * @param {!HTMLStyleElement} style
     */},{key:"addCustomStyle",value:function addCustomStyle(style){if(!style[SEEN_MARKER]){style[SEEN_MARKER]=true;this['customStyles'].push(style);this.enqueueDocumentValidation();}}/**
     * @param {!CustomStyleProvider} customStyle
     * @return {HTMLStyleElement}
     */},{key:"getStyleForCustomStyle",value:function getStyleForCustomStyle(customStyle){if(customStyle[CACHED_STYLE]){return customStyle[CACHED_STYLE];}var style;if(customStyle['getStyle']){style=customStyle['getStyle']();}else{style=customStyle;}return style;}/**
     * @return {!Array<!CustomStyleProvider>}
     */},{key:"processStyles",value:function processStyles(){var cs=this['customStyles'];for(var i=0;i<cs.length;i++){var _customStyle=cs[i];if(_customStyle[CACHED_STYLE]){continue;}var _style3=this.getStyleForCustomStyle(_customStyle);if(_style3){// HTMLImports polyfill may have cloned the style into the main document,
// which is referenced with __appliedElement.
var styleToTransform=/** @type {!HTMLStyleElement} */_style3['__appliedElement']||_style3;if(transformFn){transformFn(styleToTransform);}_customStyle[CACHED_STYLE]=styleToTransform;}}return cs;}}]);return CustomStyleInterface;}();/* eslint-disable no-self-assign */_exports.$customStyleInterfaceDefault=CustomStyleInterface;CustomStyleInterface.prototype['addCustomStyle']=CustomStyleInterface.prototype.addCustomStyle;CustomStyleInterface.prototype['getStyleForCustomStyle']=CustomStyleInterface.prototype.getStyleForCustomStyle;CustomStyleInterface.prototype['processStyles']=CustomStyleInterface.prototype.processStyles;/* eslint-enable no-self-assign */Object.defineProperties(CustomStyleInterface.prototype,{'transformCallback':{/** @return {?function(!HTMLStyleElement)} */get:function get(){return transformFn;},/** @param {?function(!HTMLStyleElement)} fn */set:function set(fn){transformFn=fn;}},'validateCallback':{/** @return {?function()} */get:function get(){return validateFn;},/**
     * @param {?function()} fn
     * @this {CustomStyleInterface}
     */set:function set(fn){var needsEnqueue=false;if(!validateFn){needsEnqueue=true;}validateFn=fn;if(needsEnqueue){this.enqueueDocumentValidation();}}}});/** @typedef {{
     * customStyles: !Array<!CustomStyleProvider>,
     * addCustomStyle: function(!CustomStyleProvider),
     * getStyleForCustomStyle: function(!CustomStyleProvider): HTMLStyleElement,
     * findStyles: function(),
     * transformCallback: ?function(!HTMLStyleElement),
     * validateCallback: ?function()
     * }}
     */var CustomStyleInterfaceInterface={};_exports.CustomStyleInterfaceInterface=CustomStyleInterfaceInterface;var customStyleInterface={CustomStyleProvider:CustomStyleProvider,default:CustomStyleInterface,CustomStyleInterfaceInterface:CustomStyleInterfaceInterface};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$customStyleInterface$1=customStyleInterface;'use strict';var applyShim$1=new ApplyShim();var ApplyShimInterface=/*#__PURE__*/function(){function ApplyShimInterface(){babelHelpers.classCallCheck(this,ApplyShimInterface);/** @type {?CustomStyleInterfaceInterface} */this.customStyleInterface=null;applyShim$1['invalidCallback']=invalidate;}babelHelpers.createClass(ApplyShimInterface,[{key:"ensure",value:function ensure(){var _this6=this;if(this.customStyleInterface){return;}if(window.ShadyCSS.CustomStyleInterface){this.customStyleInterface=/** @type {!CustomStyleInterfaceInterface} */window.ShadyCSS.CustomStyleInterface;this.customStyleInterface['transformCallback']=function(style){applyShim$1.transformCustomStyle(style);};this.customStyleInterface['validateCallback']=function(){requestAnimationFrame(function(){if(_this6.customStyleInterface['enqueued']){_this6.flushCustomStyles();}});};}}/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     */},{key:"prepareTemplate",value:function prepareTemplate(template,elementName){this.ensure();if(elementHasBuiltCss(template)){return;}templateMap[elementName]=template;var ast=applyShim$1.transformTemplate(template,elementName);// save original style ast to use for revalidating instances
template['_styleAst']=ast;}},{key:"flushCustomStyles",value:function flushCustomStyles(){this.ensure();if(!this.customStyleInterface){return;}var styles=this.customStyleInterface['processStyles']();if(!this.customStyleInterface['enqueued']){return;}for(var i=0;i<styles.length;i++){var cs=styles[i];var _style4=this.customStyleInterface['getStyleForCustomStyle'](cs);if(_style4){applyShim$1.transformCustomStyle(_style4);}}this.customStyleInterface['enqueued']=false;}/**
     * @param {HTMLElement} element
     * @param {Object=} properties
     */},{key:"styleSubtree",value:function styleSubtree(element,properties){this.ensure();if(properties){updateNativeProperties(element,properties);}if(element.shadowRoot){this.styleElement(element);var shadowChildren=/** @type {!ParentNode} */element.shadowRoot.children||element.shadowRoot.childNodes;for(var i=0;i<shadowChildren.length;i++){this.styleSubtree(/** @type {HTMLElement} */shadowChildren[i]);}}else{var children=element.children||element.childNodes;for(var _i=0;_i<children.length;_i++){this.styleSubtree(/** @type {HTMLElement} */children[_i]);}}}/**
     * @param {HTMLElement} element
     */},{key:"styleElement",value:function styleElement(element){this.ensure();var _getIsExtends=getIsExtends(element),is=_getIsExtends.is;var template=templateMap[is];if(template&&elementHasBuiltCss(template)){return;}if(template&&!templateIsValid(template)){// only revalidate template once
if(!templateIsValidating(template)){this.prepareTemplate(template,is);startValidatingTemplate(template);}// update this element instance
var _root=element.shadowRoot;if(_root){var _style5=/** @type {HTMLStyleElement} */_root.querySelector('style');if(_style5){// reuse the template's style ast, it has all the original css text
_style5['__cssRules']=template['_styleAst'];_style5.textContent=toCssText(template['_styleAst']);}}}}/**
     * @param {Object=} properties
     */},{key:"styleDocument",value:function styleDocument(properties){this.ensure();this.styleSubtree(document.body,properties);}}]);return ApplyShimInterface;}();if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){var applyShimInterface=new ApplyShimInterface();var CustomStyleInterface$$1=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;/** @suppress {duplicate} */window.ShadyCSS={/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @param {string=} elementExtends
     */prepareTemplate:function prepareTemplate(template,elementName,elementExtends){// eslint-disable-line no-unused-vars
applyShimInterface.flushCustomStyles();applyShimInterface.prepareTemplate(template,elementName);},/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @param {string=} elementExtends
     */prepareTemplateStyles:function prepareTemplateStyles(template,elementName,elementExtends){window.ShadyCSS.prepareTemplate(template,elementName,elementExtends);},/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     */prepareTemplateDom:function prepareTemplateDom(template,elementName){},// eslint-disable-line no-unused-vars
/**
     * @param {!HTMLElement} element
     * @param {Object=} properties
     */styleSubtree:function styleSubtree(element,properties){applyShimInterface.flushCustomStyles();applyShimInterface.styleSubtree(element,properties);},/**
     * @param {!HTMLElement} element
     */styleElement:function styleElement(element){applyShimInterface.flushCustomStyles();applyShimInterface.styleElement(element);},/**
     * @param {Object=} properties
     */styleDocument:function styleDocument(properties){applyShimInterface.flushCustomStyles();applyShimInterface.styleDocument(properties);},/**
     * @param {Element} element
     * @param {string} property
     * @return {string}
     */getComputedStyleValue:function getComputedStyleValue(element,property){return _getComputedStyleValue(element,property);},flushCustomStyles:function flushCustomStyles(){applyShimInterface.flushCustomStyles();},nativeCss:nativeCssVariables,nativeShadow:nativeShadow,cssBuild:cssBuild,disableRuntime:disableRuntime};if(CustomStyleInterface$$1){window.ShadyCSS.CustomStyleInterface=CustomStyleInterface$$1;}}window.ShadyCSS.ApplyShim=applyShim$1;/**
                                         @license
                                         Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                                         This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
                                         The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
                                         The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
                                         Code distributed by Google as part of the polymer project is also
                                         subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
                                         */ /* eslint-disable no-unused-vars */ /**
                                                                                 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is replaced by the munged name for object[property]
                                                                                 * We cannot alias this function, so we have to use a small shim that has the same behavior when not compiling.
                                                                                 *
                                                                                 * @param {string} prop Property name
                                                                                 * @param {?Object} obj Reference object
                                                                                 * @return {string} Potentially renamed property name
                                                                                 */window.JSCompiler_renameProperty=function(prop,obj){return prop;};/* eslint-enable */var CSS_URL_RX=/(url\()([^)]*)(\))/g;var ABS_URL=/(^\/)|(^#)|(^[\w-\d]*:)/;var workingURL;var resolveDoc;/**
                 * Resolves the given URL against the provided `baseUri'.
                 *
                 * Note that this function performs no resolution for URLs that start
                 * with `/` (absolute URLs) or `#` (hash identifiers).  For general purpose
                 * URL resolution, use `window.URL`.
                 *
                 * @param {string} url Input URL to resolve
                 * @param {?string=} baseURI Base URI to resolve the URL against
                 * @return {string} resolved URL
                 */function _resolveUrl(url,baseURI){if(url&&ABS_URL.test(url)){return url;}// Lazy feature detection.
if(workingURL===undefined){workingURL=false;try{var u=new URL('b','http://a');u.pathname='c%20d';workingURL=u.href==='http://a/c%20d';}catch(e){// silently fail
}}if(!baseURI){baseURI=document.baseURI||window.location.href;}if(workingURL){return new URL(url,baseURI).href;}// Fallback to creating an anchor into a disconnected document.
if(!resolveDoc){resolveDoc=document.implementation.createHTMLDocument('temp');resolveDoc.base=resolveDoc.createElement('base');resolveDoc.head.appendChild(resolveDoc.base);resolveDoc.anchor=resolveDoc.createElement('a');resolveDoc.body.appendChild(resolveDoc.anchor);}resolveDoc.base.href=baseURI;resolveDoc.anchor.href=url;return resolveDoc.anchor.href||url;}/**
   * Resolves any relative URL's in the given CSS text against the provided
   * `ownerDocument`'s `baseURI`.
   *
   * @param {string} cssText CSS text to process
   * @param {string} baseURI Base URI to resolve the URL against
   * @return {string} Processed CSS text with resolved URL's
   */function resolveCss(cssText,baseURI){return cssText.replace(CSS_URL_RX,function(m,pre,url,post){return pre+'\''+_resolveUrl(url.replace(/["']/g,''),baseURI)+'\''+post;});}/**
   * Returns a path from a given `url`. The path includes the trailing
   * `/` from the url.
   *
   * @param {string} url Input URL to transform
   * @return {string} resolved path
   */function pathFromUrl(url){return url.substring(0,url.lastIndexOf('/')+1);}var resolveUrl$1={resolveUrl:_resolveUrl,resolveCss:resolveCss,pathFromUrl:pathFromUrl};_exports.$resolveUrl=resolveUrl$1;var useShadow=!window.ShadyDOM;_exports.useShadow=useShadow;var useNativeCSSProperties=Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);_exports.useNativeCSSProperties=useNativeCSSProperties;var useNativeCustomElements=!window.customElements.polyfillWrapFlushCallback;/**
                                                                                          * Globally settable property that is automatically assigned to
                                                                                          * `ElementMixin` instances, useful for binding in templates to
                                                                                          * make URL's relative to an application's root.  Defaults to the main
                                                                                          * document URL, but can be overridden by users.  It may be useful to set
                                                                                          * `rootPath` to provide a stable application mount path when
                                                                                          * using client side routing.
                                                                                          */_exports.useNativeCustomElements=useNativeCustomElements;var rootPath=undefined||pathFromUrl(document.baseURI||window.location.href);/**
                                                                                           * Sets the global rootPath property used by `ElementMixin` and
                                                                                           * available via `rootPath`.
                                                                                           *
                                                                                           * @param {string} path The new root path
                                                                                           * @return {void}
                                                                                           */_exports.rootPath=rootPath;var setRootPath=function setRootPath(path){_exports.rootPath=rootPath=path;};/**
    * A global callback used to sanitize any value before inserting it into the DOM.
    * The callback signature is:
    *
    *  function sanitizeDOMValue(value, name, type, node) { ... }
    *
    * Where:
    *
    * `value` is the value to sanitize.
    * `name` is the name of an attribute or property (for example, href).
    * `type` indicates where the value is being inserted: one of property, attribute, or text.
    * `node` is the node where the value is being inserted.
    *
    * @type {(function(*,string,string,Node):*)|undefined}
    */_exports.setRootPath=setRootPath;var sanitizeDOMValue=window.Polymer&&window.Polymer.sanitizeDOMValue||undefined;/**
                                                                                               * Sets the global sanitizeDOMValue available via this module's exported
                                                                                               * `sanitizeDOMValue` variable.
                                                                                               *
                                                                                               * @param {(function(*,string,string,Node):*)|undefined} newSanitizeDOMValue the global sanitizeDOMValue callback
                                                                                               * @return {void}
                                                                                               */_exports.sanitizeDOMValue=sanitizeDOMValue;var setSanitizeDOMValue=function setSanitizeDOMValue(newSanitizeDOMValue){_exports.sanitizeDOMValue=sanitizeDOMValue=newSanitizeDOMValue;};/**
    * Globally settable property to make Polymer Gestures use passive TouchEvent listeners when recognizing gestures.
    * When set to `true`, gestures made from touch will not be able to prevent scrolling, allowing for smoother
    * scrolling performance.
    * Defaults to `false` for backwards compatibility.
    */_exports.setSanitizeDOMValue=setSanitizeDOMValue;var passiveTouchGestures=false;/**
                                          * Sets `passiveTouchGestures` globally for all elements using Polymer Gestures.
                                          *
                                          * @param {boolean} usePassive enable or disable passive touch gestures globally
                                          * @return {void}
                                          */_exports.passiveTouchGestures=passiveTouchGestures;var setPassiveTouchGestures=function setPassiveTouchGestures(usePassive){_exports.passiveTouchGestures=passiveTouchGestures=usePassive;};/**
    * Setting to ensure Polymer template evaluation only occurs based on tempates
    * defined in trusted script.  When true, `<dom-module>` re-registration is
    * disallowed, `<dom-bind>` is disabled, and `<dom-if>`/`<dom-repeat>`
    * templates will only evaluate in the context of a trusted element template.
    */_exports.setPassiveTouchGestures=setPassiveTouchGestures;var strictTemplatePolicy=false;/**
                                          * Sets `strictTemplatePolicy` globally for all elements
                                          *
                                          * @param {boolean} useStrictPolicy enable or disable strict template policy
                                          *   globally
                                          * @return {void}
                                          */_exports.strictTemplatePolicy=strictTemplatePolicy;var setStrictTemplatePolicy=function setStrictTemplatePolicy(useStrictPolicy){_exports.strictTemplatePolicy=strictTemplatePolicy=useStrictPolicy;};/**
    * Setting to enable dom-module lookup from Polymer.Element.  By default,
    * templates must be defined in script using the `static get template()`
    * getter and the `html` tag function.  To enable legacy loading of templates
    * via dom-module, set this flag to true.
    */_exports.setStrictTemplatePolicy=setStrictTemplatePolicy;var allowTemplateFromDomModule=false;/**
                                                * Sets `lookupTemplateFromDomModule` globally for all elements
                                                *
                                                * @param {boolean} allowDomModule enable or disable template lookup 
                                                *   globally
                                                * @return {void}
                                                */_exports.allowTemplateFromDomModule=allowTemplateFromDomModule;var setAllowTemplateFromDomModule=function setAllowTemplateFromDomModule(allowDomModule){_exports.allowTemplateFromDomModule=allowTemplateFromDomModule=allowDomModule;};_exports.setAllowTemplateFromDomModule=setAllowTemplateFromDomModule;var settings={useShadow:useShadow,useNativeCSSProperties:useNativeCSSProperties,useNativeCustomElements:useNativeCustomElements,get rootPath(){return rootPath;},setRootPath:setRootPath,get sanitizeDOMValue(){return sanitizeDOMValue;},setSanitizeDOMValue:setSanitizeDOMValue,get passiveTouchGestures(){return passiveTouchGestures;},setPassiveTouchGestures:setPassiveTouchGestures,get strictTemplatePolicy(){return strictTemplatePolicy;},setStrictTemplatePolicy:setStrictTemplatePolicy,get allowTemplateFromDomModule(){return allowTemplateFromDomModule;},setAllowTemplateFromDomModule:setAllowTemplateFromDomModule};_exports.$settings=settings;var dedupeId=0;/**
                   * @constructor
                   * @extends {Function}
                   * @private
                   */function MixinFunction(){}/** @type {(WeakMap | undefined)} */MixinFunction.prototype.__mixinApplications;/** @type {(Object | undefined)} */MixinFunction.prototype.__mixinSet;/* eslint-disable valid-jsdoc */ /**
                                                                      * Wraps an ES6 class expression mixin such that the mixin is only applied
                                                                      * if it has not already been applied its base argument. Also memoizes mixin
                                                                      * applications.
                                                                      *
                                                                      * @template T
                                                                      * @param {T} mixin ES6 class expression mixin to wrap
                                                                      * @return {T}
                                                                      * @suppress {invalidCasts}
                                                                      */var dedupingMixin=function dedupingMixin(mixin){var mixinApplications=/** @type {!MixinFunction} */mixin.__mixinApplications;if(!mixinApplications){mixinApplications=new WeakMap();/** @type {!MixinFunction} */mixin.__mixinApplications=mixinApplications;}// maintain a unique id for each mixin
var mixinDedupeId=dedupeId++;function dedupingMixin(base){var baseSet=/** @type {!MixinFunction} */base.__mixinSet;if(baseSet&&baseSet[mixinDedupeId]){return base;}var map=mixinApplications;var extended=map.get(base);if(!extended){extended=/** @type {!Function} */mixin(base);map.set(base,extended);}// copy inherited mixin set from the extended class, or the base class
// NOTE: we avoid use of Set here because some browser (IE11)
// cannot extend a base Set via the constructor.
var mixinSet=Object.create(/** @type {!MixinFunction} */extended.__mixinSet||baseSet||null);mixinSet[mixinDedupeId]=true;/** @type {!MixinFunction} */extended.__mixinSet=mixinSet;return extended;}return dedupingMixin;};/* eslint-enable valid-jsdoc */_exports.dedupingMixin=dedupingMixin;var mixin={dedupingMixin:dedupingMixin};_exports.$mixin=mixin;var modules={};var lcModules={};/**
                     * Sets a dom-module into the global registry by id.
                     *
                     * @param {string} id dom-module id
                     * @param {DomModule} module dom-module instance
                     * @return {void}
                     */function setModule(id,module){// store id separate from lowercased id so that
// in all cases mixedCase id will stored distinctly
// and lowercase version is a fallback
modules[id]=lcModules[id.toLowerCase()]=module;}/**
   * Retrieves a dom-module from the global registry by id.
   *
   * @param {string} id dom-module id
   * @return {DomModule!} dom-module instance
   */function findModule(id){return modules[id]||lcModules[id.toLowerCase()];}function styleOutsideTemplateCheck(inst){if(inst.querySelector('style')){console.warn('dom-module %s has style outside template',inst.id);}}/**
   * The `dom-module` element registers the dom it contains to the name given
   * by the module's id attribute. It provides a unified database of dom
   * accessible via its static `import` API.
   *
   * A key use case of `dom-module` is for providing custom element `<template>`s
   * via HTML imports that are parsed by the native HTML parser, that can be
   * relocated during a bundling pass and still looked up by `id`.
   *
   * Example:
   *
   *     <dom-module id="foo">
   *       <img src="stuff.png">
   *     </dom-module>
   *
   * Then in code in some other location that cannot access the dom-module above
   *
   *     let img = customElements.get('dom-module').import('foo', 'img');
   *
   * @customElement
   * @extends HTMLElement
   * @summary Custom element that provides a registry of relocatable DOM content
   *   by `id` that is agnostic to bundling.
   * @unrestricted
   */var DomModule=/*#__PURE__*/function(_HTMLElement){babelHelpers.inherits(DomModule,_HTMLElement);function DomModule(){babelHelpers.classCallCheck(this,DomModule);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DomModule).apply(this,arguments));}babelHelpers.createClass(DomModule,[{key:"attributeChangedCallback",/* eslint-disable no-unused-vars */ /**
                                         * @param {string} name Name of attribute.
                                         * @param {?string} old Old value of attribute.
                                         * @param {?string} value Current value of attribute.
                                         * @param {?string} namespace Attribute namespace.
                                         * @return {void}
                                         * @override
                                         */value:function attributeChangedCallback(name,old,value,namespace){if(old!==value){this.register();}}/* eslint-enable no-unused-args */ /**
                                        * The absolute URL of the original location of this `dom-module`.
                                        *
                                        * This value will differ from this element's `ownerDocument` in the
                                        * following ways:
                                        * - Takes into account any `assetpath` attribute added during bundling
                                        *   to indicate the original location relative to the bundled location
                                        * - Uses the HTMLImports polyfill's `importForElement` API to ensure
                                        *   the path is relative to the import document's location since
                                        *   `ownerDocument` is not currently polyfilled
                                        */},{key:"register",/**
     * Registers the dom-module at a given id. This method should only be called
     * when a dom-module is imperatively created. For
     * example, `document.createElement('dom-module').register('foo')`.
     * @param {string=} id The id at which to register the dom-module.
     * @return {void}
     */value:function register(id){id=id||this.id;if(id){// Under strictTemplatePolicy, reject and null out any re-registered
// dom-module since it is ambiguous whether first-in or last-in is trusted
if(strictTemplatePolicy&&findModule(id)!==undefined){setModule(id,null);throw new Error("strictTemplatePolicy: dom-module ".concat(id," re-registered"));}this.id=id;setModule(id,this);styleOutsideTemplateCheck(this);}}},{key:"assetpath",get:function get(){// Don't override existing assetpath.
if(!this.__assetpath){// note: assetpath set via an attribute must be relative to this
// element's location; accomodate polyfilled HTMLImports
var owner=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument;var url=_resolveUrl(this.getAttribute('assetpath')||'',owner.baseURI);this.__assetpath=pathFromUrl(url);}return this.__assetpath;}}],[{key:"import",/**
     * Retrieves the element specified by the css `selector` in the module
     * registered by `id`. For example, this.import('foo', 'img');
     * @param {string} id The id of the dom-module in which to search.
     * @param {string=} selector The css selector by which to find the element.
     * @return {Element} Returns the element which matches `selector` in the
     * module registered at the specified `id`.
     *
     * @export
     * @nocollapse Referred to indirectly in style-gather.js
     */value:function _import(id,selector){if(id){var m=findModule(id);if(m&&selector){return m.querySelector(selector);}return m;}return null;}},{key:"observedAttributes",get:function get(){return['id'];}}]);return DomModule;}(babelHelpers.wrapNativeSuper(HTMLElement));_exports.DomModule=DomModule;DomModule.prototype['modules']=modules;customElements.define('dom-module',DomModule);var domModule={DomModule:DomModule};_exports.$domModule=domModule;var MODULE_STYLE_LINK_SELECTOR='link[rel=import][type~=css]';var INCLUDE_ATTR='include';var SHADY_UNSCOPED_ATTR='shady-unscoped';/**
                                               * @param {string} moduleId .
                                               * @return {?DomModule} .
                                               */function importModule(moduleId){return(/** @type {?DomModule} */DomModule.import(moduleId));}function styleForImport(importDoc){// NOTE: polyfill affordance.
// under the HTMLImports polyfill, there will be no 'body',
// but the import pseudo-doc can be used directly.
var container=importDoc.body?importDoc.body:importDoc;var importCss=resolveCss(container.textContent,importDoc.baseURI);var style=document.createElement('style');style.textContent=importCss;return style;}/** @typedef {{assetpath: string}} */var templateWithAssetPath;// eslint-disable-line no-unused-vars
/**
 * Returns a list of <style> elements in a space-separated list of `dom-module`s.
 *
 * @function
 * @param {string} moduleIds List of dom-module id's within which to
 * search for css.
 * @return {!Array<!HTMLStyleElement>} Array of contained <style> elements
 */function stylesFromModules(moduleIds){var modules=moduleIds.trim().split(/\s+/);var styles=[];for(var i=0;i<modules.length;i++){styles.push.apply(styles,babelHelpers.toConsumableArray(stylesFromModule(modules[i])));}return styles;}/**
   * Returns a list of <style> elements in a given `dom-module`.
   * Styles in a `dom-module` can come either from `<style>`s within the
   * first `<template>`, or else from one or more
   * `<link rel="import" type="css">` links outside the template.
   *
   * @param {string} moduleId dom-module id to gather styles from
   * @return {!Array<!HTMLStyleElement>} Array of contained styles.
   */function stylesFromModule(moduleId){var m=importModule(moduleId);if(!m){console.warn('Could not find style data in module named',moduleId);return[];}if(m._styles===undefined){var styles=[];// module imports: <link rel="import" type="css">
styles.push.apply(styles,babelHelpers.toConsumableArray(_stylesFromModuleImports(m)));// include css from the first template in the module
var _template2=/** @type {?HTMLTemplateElement} */m.querySelector('template');if(_template2){styles.push.apply(styles,babelHelpers.toConsumableArray(stylesFromTemplate(_template2,/** @type {templateWithAssetPath} */m.assetpath)));}m._styles=styles;}return m._styles;}/**
   * Returns the `<style>` elements within a given template.
   *
   * @param {!HTMLTemplateElement} template Template to gather styles from
   * @param {string} baseURI baseURI for style content
   * @return {!Array<!HTMLStyleElement>} Array of styles
   */function stylesFromTemplate(template,baseURI){if(!template._styles){var styles=[];// if element is a template, get content from its .content
var e$=template.content.querySelectorAll('style');for(var i=0;i<e$.length;i++){var e=e$[i];// support style sharing by allowing styles to "include"
// other dom-modules that contain styling
var include=e.getAttribute(INCLUDE_ATTR);if(include){styles.push.apply(styles,babelHelpers.toConsumableArray(stylesFromModules(include).filter(function(item,index,self){return self.indexOf(item)===index;})));}if(baseURI){e.textContent=resolveCss(e.textContent,baseURI);}styles.push(e);}template._styles=styles;}return template._styles;}/**
   * Returns a list of <style> elements  from stylesheets loaded via `<link rel="import" type="css">` links within the specified `dom-module`.
   *
   * @param {string} moduleId Id of `dom-module` to gather CSS from
   * @return {!Array<!HTMLStyleElement>} Array of contained styles.
   */function stylesFromModuleImports(moduleId){var m=importModule(moduleId);return m?_stylesFromModuleImports(m):[];}/**
   * @param {!HTMLElement} module dom-module element that could contain `<link rel="import" type="css">` styles
   * @return {!Array<!HTMLStyleElement>} Array of contained styles
   */function _stylesFromModuleImports(module){var styles=[];var p$=module.querySelectorAll(MODULE_STYLE_LINK_SELECTOR);for(var i=0;i<p$.length;i++){var _p5=p$[i];if(_p5.import){var importDoc=_p5.import;var unscoped=_p5.hasAttribute(SHADY_UNSCOPED_ATTR);if(unscoped&&!importDoc._unscopedStyle){var _style6=styleForImport(importDoc);_style6.setAttribute(SHADY_UNSCOPED_ATTR,'');importDoc._unscopedStyle=_style6;}else if(!importDoc._style){importDoc._style=styleForImport(importDoc);}styles.push(unscoped?importDoc._unscopedStyle:importDoc._style);}}return styles;}/**
   *
   * Returns CSS text of styles in a space-separated list of `dom-module`s.
   * Note: This method is deprecated, use `stylesFromModules` instead.
   *
   * @deprecated
   * @param {string} moduleIds List of dom-module id's within which to
   * search for css.
   * @return {string} Concatenated CSS content from specified `dom-module`s
   */function cssFromModules(moduleIds){var modules=moduleIds.trim().split(/\s+/);var cssText='';for(var i=0;i<modules.length;i++){cssText+=cssFromModule(modules[i]);}return cssText;}/**
   * Returns CSS text of styles in a given `dom-module`.  CSS in a `dom-module`
   * can come either from `<style>`s within the first `<template>`, or else
   * from one or more `<link rel="import" type="css">` links outside the
   * template.
   *
   * Any `<styles>` processed are removed from their original location.
   * Note: This method is deprecated, use `styleFromModule` instead.
   *
   * @deprecated
   * @param {string} moduleId dom-module id to gather styles from
   * @return {string} Concatenated CSS content from specified `dom-module`
   */function cssFromModule(moduleId){var m=importModule(moduleId);if(m&&m._cssText===undefined){// module imports: <link rel="import" type="css">
var cssText=_cssFromModuleImports(m);// include css from the first template in the module
var t=/** @type {?HTMLTemplateElement} */m.querySelector('template');if(t){cssText+=cssFromTemplate(t,/** @type {templateWithAssetPath} */m.assetpath);}m._cssText=cssText||null;}if(!m){console.warn('Could not find style data in module named',moduleId);}return m&&m._cssText||'';}/**
   * Returns CSS text of `<styles>` within a given template.
   *
   * Any `<styles>` processed are removed from their original location.
   * Note: This method is deprecated, use `styleFromTemplate` instead.
   *
   * @deprecated
   * @param {!HTMLTemplateElement} template Template to gather styles from
   * @param {string} baseURI Base URI to resolve the URL against
   * @return {string} Concatenated CSS content from specified template
   */function cssFromTemplate(template,baseURI){var cssText='';var e$=stylesFromTemplate(template,baseURI);// if element is a template, get content from its .content
for(var i=0;i<e$.length;i++){var e=e$[i];if(e.parentNode){e.parentNode.removeChild(e);}cssText+=e.textContent;}return cssText;}/**
   * Returns CSS text from stylesheets loaded via `<link rel="import" type="css">`
   * links within the specified `dom-module`.
   *
   * Note: This method is deprecated, use `stylesFromModuleImports` instead.
   *
   * @deprecated
   *
   * @param {string} moduleId Id of `dom-module` to gather CSS from
   * @return {string} Concatenated CSS content from links in specified `dom-module`
   */function cssFromModuleImports(moduleId){var m=importModule(moduleId);return m?_cssFromModuleImports(m):'';}/**
   * @deprecated
   * @param {!HTMLElement} module dom-module element that could contain `<link rel="import" type="css">` styles
   * @return {string} Concatenated CSS content from links in the dom-module
   */function _cssFromModuleImports(module){var cssText='';var styles=_stylesFromModuleImports(module);for(var i=0;i<styles.length;i++){cssText+=styles[i].textContent;}return cssText;}var styleGather={stylesFromModules:stylesFromModules,stylesFromModule:stylesFromModule,stylesFromTemplate:stylesFromTemplate,stylesFromModuleImports:stylesFromModuleImports,cssFromModules:cssFromModules,cssFromModule:cssFromModule,cssFromTemplate:cssFromTemplate,cssFromModuleImports:cssFromModuleImports};_exports.$styleGather=styleGather;function isPath(path){return path.indexOf('.')>=0;}/**
   * Returns the root property name for the given path.
   *
   * Example:
   *
   * ```
   * root('foo.bar.baz') // 'foo'
   * root('foo')         // 'foo'
   * ```
   *
   * @param {string} path Path string
   * @return {string} Root property name
   */function root(path){var dotIndex=path.indexOf('.');if(dotIndex===-1){return path;}return path.slice(0,dotIndex);}/**
   * Given `base` is `foo.bar`, `foo` is an ancestor, `foo.bar` is not
   * Returns true if the given path is an ancestor of the base path.
   *
   * Example:
   *
   * ```
   * isAncestor('foo.bar', 'foo')         // true
   * isAncestor('foo.bar', 'foo.bar')     // false
   * isAncestor('foo.bar', 'foo.bar.baz') // false
   * ```
   *
   * @param {string} base Path string to test against.
   * @param {string} path Path string to test.
   * @return {boolean} True if `path` is an ancestor of `base`.
   */function isAncestor(base,path){//     base.startsWith(path + '.');
return base.indexOf(path+'.')===0;}/**
   * Given `base` is `foo.bar`, `foo.bar.baz` is an descendant
   *
   * Example:
   *
   * ```
   * isDescendant('foo.bar', 'foo.bar.baz') // true
   * isDescendant('foo.bar', 'foo.bar')     // false
   * isDescendant('foo.bar', 'foo')         // false
   * ```
   *
   * @param {string} base Path string to test against.
   * @param {string} path Path string to test.
   * @return {boolean} True if `path` is a descendant of `base`.
   */function isDescendant(base,path){//     path.startsWith(base + '.');
return path.indexOf(base+'.')===0;}/**
   * Replaces a previous base path with a new base path, preserving the
   * remainder of the path.
   *
   * User must ensure `path` has a prefix of `base`.
   *
   * Example:
   *
   * ```
   * translate('foo.bar', 'zot', 'foo.bar.baz') // 'zot.baz'
   * ```
   *
   * @param {string} base Current base string to remove
   * @param {string} newBase New base string to replace with
   * @param {string} path Path to translate
   * @return {string} Translated string
   */function translate(base,newBase,path){return newBase+path.slice(base.length);}/**
   * @param {string} base Path string to test against
   * @param {string} path Path string to test
   * @return {boolean} True if `path` is equal to `base`
   */function matches(base,path){return base===path||isAncestor(base,path)||isDescendant(base,path);}/**
   * Converts array-based paths to flattened path.  String-based paths
   * are returned as-is.
   *
   * Example:
   *
   * ```
   * normalize(['foo.bar', 0, 'baz'])  // 'foo.bar.0.baz'
   * normalize('foo.bar.0.baz')        // 'foo.bar.0.baz'
   * ```
   *
   * @param {string | !Array<string|number>} path Input path
   * @return {string} Flattened path
   */function normalize(path){if(Array.isArray(path)){var parts=[];for(var i=0;i<path.length;i++){var args=path[i].toString().split('.');for(var j=0;j<args.length;j++){parts.push(args[j]);}}return parts.join('.');}else{return path;}}/**
   * Splits a path into an array of property names. Accepts either arrays
   * of path parts or strings.
   *
   * Example:
   *
   * ```
   * split(['foo.bar', 0, 'baz'])  // ['foo', 'bar', '0', 'baz']
   * split('foo.bar.0.baz')        // ['foo', 'bar', '0', 'baz']
   * ```
   *
   * @param {string | !Array<string|number>} path Input path
   * @return {!Array<string>} Array of path parts
   * @suppress {checkTypes}
   */function split(path){if(Array.isArray(path)){return normalize(path).split('.');}return path.toString().split('.');}/**
   * Reads a value from a path.  If any sub-property in the path is `undefined`,
   * this method returns `undefined` (will never throw.
   *
   * @param {Object} root Object from which to dereference path from
   * @param {string | !Array<string|number>} path Path to read
   * @param {Object=} info If an object is provided to `info`, the normalized
   *  (flattened) path will be set to `info.path`.
   * @return {*} Value at path, or `undefined` if the path could not be
   *  fully dereferenced.
   */function _get(root,path,info){var prop=root;var parts=split(path);// Loop over path parts[0..n-1] and dereference
for(var i=0;i<parts.length;i++){if(!prop){return;}var part=parts[i];prop=prop[part];}if(info){info.path=parts.join('.');}return prop;}/**
   * Sets a value to a path.  If any sub-property in the path is `undefined`,
   * this method will no-op.
   *
   * @param {Object} root Object from which to dereference path from
   * @param {string | !Array<string|number>} path Path to set
   * @param {*} value Value to set to path
   * @return {string | undefined} The normalized version of the input path
   */function _set(root,path,value){var prop=root;var parts=split(path);var last=parts[parts.length-1];if(parts.length>1){// Loop over path parts[0..n-2] and dereference
for(var i=0;i<parts.length-1;i++){var part=parts[i];prop=prop[part];if(!prop){return;}}// Set value to object at end of path
prop[last]=value;}else{// Simple property set
prop[path]=value;}return parts.join('.');}/**
   * Returns true if the given string is a structured data path (has dots).
   *
   * This function is deprecated.  Use `isPath` instead.
   *
   * Example:
   *
   * ```
   * isDeep('foo.bar.baz') // true
   * isDeep('foo')         // false
   * ```
   *
   * @deprecated
   * @param {string} path Path string
   * @return {boolean} True if the string contained one or more dots
   */var isDeep=isPath;_exports.isDeep=isDeep;var path={isPath:isPath,root:root,isAncestor:isAncestor,isDescendant:isDescendant,translate:translate,matches:matches,normalize:normalize,split:split,get:_get,set:_set,isDeep:isDeep};_exports.$path=path;var caseMap={};var DASH_TO_CAMEL=/-[a-z]/g;var CAMEL_TO_DASH=/([A-Z])/g;/**
                                   * @fileoverview Module with utilities for converting between "dash-case" and
                                   * "camelCase" identifiers.
                                   */ /**
                                       * Converts "dash-case" identifier (e.g. `foo-bar-baz`) to "camelCase"
                                       * (e.g. `fooBarBaz`).
                                       *
                                       * @param {string} dash Dash-case identifier
                                       * @return {string} Camel-case representation of the identifier
                                       */function dashToCamelCase(dash){return caseMap[dash]||(caseMap[dash]=dash.indexOf('-')<0?dash:dash.replace(DASH_TO_CAMEL,function(m){return m[1].toUpperCase();}));}/**
   * Converts "camelCase" identifier (e.g. `fooBarBaz`) to "dash-case"
   * (e.g. `foo-bar-baz`).
   *
   * @param {string} camel Camel-case identifier
   * @return {string} Dash-case representation of the identifier
   */function camelToDashCase(camel){return caseMap[camel]||(caseMap[camel]=camel.replace(CAMEL_TO_DASH,'-$1').toLowerCase());}var caseMap$1={dashToCamelCase:dashToCamelCase,camelToDashCase:camelToDashCase};_exports.$caseMap=caseMap$1;var microtaskCurrHandle=0;var microtaskLastHandle=0;var microtaskCallbacks=[];var microtaskNodeContent=0;var microtaskNode=document.createTextNode('');new window.MutationObserver(microtaskFlush).observe(microtaskNode,{characterData:true});function microtaskFlush(){var len=microtaskCallbacks.length;for(var i=0;i<len;i++){var cb=microtaskCallbacks[i];if(cb){try{cb();}catch(e){setTimeout(function(){throw e;});}}}microtaskCallbacks.splice(0,len);microtaskLastHandle+=len;}/**
   * Async interface wrapper around `setTimeout`.
   *
   * @namespace
   * @summary Async interface wrapper around `setTimeout`.
   */var timeOut={/**
   * Returns a sub-module with the async interface providing the provided
   * delay.
   *
   * @memberof timeOut
   * @param {number=} delay Time to wait before calling callbacks in ms
   * @return {!AsyncInterface} An async timeout interface
   */after:function after(delay){return{run:function run(fn){return window.setTimeout(fn,delay);},cancel:function cancel(handle){window.clearTimeout(handle);}};},/**
   * Enqueues a function called in the next task.
   *
   * @memberof timeOut
   * @param {!Function} fn Callback to run
   * @param {number=} delay Delay in milliseconds
   * @return {number} Handle used for canceling task
   */run:function run(fn,delay){return window.setTimeout(fn,delay);},/**
   * Cancels a previously enqueued `timeOut` callback.
   *
   * @memberof timeOut
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel:function cancel(handle){window.clearTimeout(handle);}};_exports.timeOut=timeOut;var animationFrame={/**
   * Enqueues a function called at `requestAnimationFrame` timing.
   *
   * @memberof animationFrame
   * @param {function(number):void} fn Callback to run
   * @return {number} Handle used for canceling task
   */run:function run(fn){return window.requestAnimationFrame(fn);},/**
   * Cancels a previously enqueued `animationFrame` callback.
   *
   * @memberof animationFrame
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel:function cancel(handle){window.cancelAnimationFrame(handle);}};_exports.animationFrame=animationFrame;var idlePeriod={/**
   * Enqueues a function called at `requestIdleCallback` timing.
   *
   * @memberof idlePeriod
   * @param {function(!IdleDeadline):void} fn Callback to run
   * @return {number} Handle used for canceling task
   */run:function run(fn){return window.requestIdleCallback?window.requestIdleCallback(fn):window.setTimeout(fn,16);},/**
   * Cancels a previously enqueued `idlePeriod` callback.
   *
   * @memberof idlePeriod
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel:function cancel(handle){window.cancelIdleCallback?window.cancelIdleCallback(handle):window.clearTimeout(handle);}};_exports.idlePeriod=idlePeriod;var microTask={/**
   * Enqueues a function called at microtask timing.
   *
   * @memberof microTask
   * @param {!Function=} callback Callback to run
   * @return {number} Handle used for canceling task
   */run:function run(callback){microtaskNode.textContent=microtaskNodeContent++;microtaskCallbacks.push(callback);return microtaskCurrHandle++;},/**
   * Cancels a previously enqueued `microTask` callback.
   *
   * @memberof microTask
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel:function cancel(handle){var idx=handle-microtaskLastHandle;if(idx>=0){if(!microtaskCallbacks[idx]){throw new Error('invalid async handle: '+handle);}microtaskCallbacks[idx]=null;}}};_exports.microTask=microTask;var async={timeOut:timeOut,animationFrame:animationFrame,idlePeriod:idlePeriod,microTask:microTask};_exports.$async=async;var microtask=microTask;/**
                              * Element class mixin that provides basic meta-programming for creating one
                              * or more property accessors (getter/setter pair) that enqueue an async
                              * (batched) `_propertiesChanged` callback.
                              *
                              * For basic usage of this mixin, call `MyClass.createProperties(props)`
                              * once at class definition time to create property accessors for properties
                              * named in props, implement `_propertiesChanged` to react as desired to
                              * property changes, and implement `static get observedAttributes()` and
                              * include lowercase versions of any property names that should be set from
                              * attributes. Last, call `this._enableProperties()` in the element's
                              * `connectedCallback` to enable the accessors.
                              *
                              * @mixinFunction
                              * @polymer
                              * @summary Element class mixin for reacting to property changes from
                              *   generated property accessors.
                              */var PropertiesChanged=dedupingMixin(/**
                                                 * @template T
                                                 * @param {function(new:T)} superClass Class to apply mixin to.
                                                 * @return {function(new:T)} superClass with mixin applied.
                                                 */function(superClass){/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_PropertiesChanged}
   * @unrestricted
   */var PropertiesChanged=/*#__PURE__*/function(_superClass){babelHelpers.inherits(PropertiesChanged,_superClass);babelHelpers.createClass(PropertiesChanged,[{key:"_createPropertyAccessor",//eslint-disable-line no-unused-vars
/**
     * Creates a setter/getter pair for the named property with its own
     * local storage.  The getter returns the value in the local storage,
     * and the setter calls `_setProperty`, which updates the local storage
     * for the property and enqueues a `_propertiesChanged` callback.
     *
     * This method may be called on a prototype or an instance.  Calling
     * this method may overwrite a property value that already exists on
     * the prototype/instance by creating the accessor.
     *
     * @param {string} property Name of the property
     * @param {boolean=} readOnly When true, no setter is created; the
     *   protected `_setProperty` function must be used to set the property
     * @return {void}
     * @protected
     * @override
     */value:function _createPropertyAccessor(property,readOnly){this._addPropertyToAttributeMap(property);if(!this.hasOwnProperty('__dataHasAccessor')){this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor);}if(!this.__dataHasAccessor[property]){this.__dataHasAccessor[property]=true;this._definePropertyAccessor(property,readOnly);}}/**
       * Adds the given `property` to a map matching attribute names
       * to property names, using `attributeNameForProperty`. This map is
       * used when deserializing attribute values to properties.
       *
       * @param {string} property Name of the property
       * @override
       */},{key:"_addPropertyToAttributeMap",value:function _addPropertyToAttributeMap(property){if(!this.hasOwnProperty('__dataAttributes')){this.__dataAttributes=Object.assign({},this.__dataAttributes);}if(!this.__dataAttributes[property]){var _attr=this.constructor.attributeNameForProperty(property);this.__dataAttributes[_attr]=property;}}/**
       * Defines a property accessor for the given property.
       * @param {string} property Name of the property
       * @param {boolean=} readOnly When true, no setter is created
       * @return {void}
       * @override
       */},{key:"_definePropertyAccessor",value:function _definePropertyAccessor(property,readOnly){Object.defineProperty(this,property,{/* eslint-disable valid-jsdoc */ /** @this {PropertiesChanged} */get:function get(){return this._getProperty(property);},/** @this {PropertiesChanged} */set:readOnly?function(){}:function(value){this._setProperty(property,value);}/* eslint-enable */});}}],[{key:"createProperties",/**
     * Creates property accessors for the given property names.
     * @param {!Object} props Object whose keys are names of accessors.
     * @return {void}
     * @protected
     */value:function createProperties(props){var proto=this.prototype;for(var prop in props){// don't stomp an existing accessor
if(!(prop in proto)){proto._createPropertyAccessor(prop);}}}/**
       * Returns an attribute name that corresponds to the given property.
       * The attribute name is the lowercased property name. Override to
       * customize this mapping.
       * @param {string} property Property to convert
       * @return {string} Attribute name corresponding to the given property.
       *
       * @protected
       */},{key:"attributeNameForProperty",value:function attributeNameForProperty(property){return property.toLowerCase();}/**
       * Override point to provide a type to which to deserialize a value to
       * a given property.
       * @param {string} name Name of property
       *
       * @protected
       */},{key:"typeForProperty",value:function typeForProperty(name){}}]);function PropertiesChanged(){var _this7;babelHelpers.classCallCheck(this,PropertiesChanged);_this7=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PropertiesChanged).call(this));_this7.__dataEnabled=false;_this7.__dataReady=false;_this7.__dataInvalid=false;_this7.__data={};_this7.__dataPending=null;_this7.__dataOld=null;_this7.__dataInstanceProps=null;_this7.__serializing=false;_this7._initializeProperties();return _this7;}/**
       * Lifecycle callback called when properties are enabled via
       * `_enableProperties`.
       *
       * Users may override this function to implement behavior that is
       * dependent on the element having its property data initialized, e.g.
       * from defaults (initialized from `constructor`, `_initializeProperties`),
       * `attributeChangedCallback`, or values propagated from host e.g. via
       * bindings.  `super.ready()` must be called to ensure the data system
       * becomes enabled.
       *
       * @return {void}
       * @public
       * @override
       */babelHelpers.createClass(PropertiesChanged,[{key:"ready",value:function ready(){this.__dataReady=true;this._flushProperties();}/**
       * Initializes the local storage for property accessors.
       *
       * Provided as an override point for performing any setup work prior
       * to initializing the property accessor system.
       *
       * @return {void}
       * @protected
       * @override
       */},{key:"_initializeProperties",value:function _initializeProperties(){// Capture instance properties; these will be set into accessors
// during first flush. Don't set them here, since we want
// these to overwrite defaults/constructor assignments
for(var _p6 in this.__dataHasAccessor){if(this.hasOwnProperty(_p6)){this.__dataInstanceProps=this.__dataInstanceProps||{};this.__dataInstanceProps[_p6]=this[_p6];delete this[_p6];}}}/**
       * Called at ready time with bag of instance properties that overwrote
       * accessors when the element upgraded.
       *
       * The default implementation sets these properties back into the
       * setter at ready time.  This method is provided as an override
       * point for customizing or providing more efficient initialization.
       *
       * @param {Object} props Bag of property values that were overwritten
       *   when creating property accessors.
       * @return {void}
       * @protected
       * @override
       */},{key:"_initializeInstanceProperties",value:function _initializeInstanceProperties(props){Object.assign(this,props);}/**
       * Updates the local storage for a property (via `_setPendingProperty`)
       * and enqueues a `_proeprtiesChanged` callback.
       *
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @return {void}
       * @protected
       * @override
       */},{key:"_setProperty",value:function _setProperty(property,value){if(this._setPendingProperty(property,value)){this._invalidateProperties();}}/**
       * Returns the value for the given property.
       * @param {string} property Name of property
       * @return {*} Value for the given property
       * @protected
       * @override
       */},{key:"_getProperty",value:function _getProperty(property){return this.__data[property];}/* eslint-disable no-unused-vars */ /**
                                           * Updates the local storage for a property, records the previous value,
                                           * and adds it to the set of "pending changes" that will be passed to the
                                           * `_propertiesChanged` callback.  This method does not enqueue the
                                           * `_propertiesChanged` callback.
                                           *
                                           * @param {string} property Name of the property
                                           * @param {*} value Value to set
                                           * @param {boolean=} ext Not used here; affordance for closure
                                           * @return {boolean} Returns true if the property changed
                                           * @protected
                                           * @override
                                           */},{key:"_setPendingProperty",value:function _setPendingProperty(property,value,ext){var old=this.__data[property];var changed=this._shouldPropertyChange(property,value,old);if(changed){if(!this.__dataPending){this.__dataPending={};this.__dataOld={};}// Ensure old is captured from the last turn
if(this.__dataOld&&!(property in this.__dataOld)){this.__dataOld[property]=old;}this.__data[property]=value;this.__dataPending[property]=value;}return changed;}/* eslint-enable */ /**
                           * Marks the properties as invalid, and enqueues an async
                           * `_propertiesChanged` callback.
                           *
                           * @return {void}
                           * @protected
                           * @override
                           */},{key:"_invalidateProperties",value:function _invalidateProperties(){var _this8=this;if(!this.__dataInvalid&&this.__dataReady){this.__dataInvalid=true;microtask.run(function(){if(_this8.__dataInvalid){_this8.__dataInvalid=false;_this8._flushProperties();}});}}/**
       * Call to enable property accessor processing. Before this method is
       * called accessor values will be set but side effects are
       * queued. When called, any pending side effects occur immediately.
       * For elements, generally `connectedCallback` is a normal spot to do so.
       * It is safe to call this method multiple times as it only turns on
       * property accessors once.
       *
       * @return {void}
       * @protected
       * @override
       */},{key:"_enableProperties",value:function _enableProperties(){if(!this.__dataEnabled){this.__dataEnabled=true;if(this.__dataInstanceProps){this._initializeInstanceProperties(this.__dataInstanceProps);this.__dataInstanceProps=null;}this.ready();}}/**
       * Calls the `_propertiesChanged` callback with the current set of
       * pending changes (and old values recorded when pending changes were
       * set), and resets the pending set of changes. Generally, this method
       * should not be called in user code.
       *
       * @return {void}
       * @protected
       * @override
       */},{key:"_flushProperties",value:function _flushProperties(){var props=this.__data;var changedProps=this.__dataPending;var old=this.__dataOld;if(this._shouldPropertiesChange(props,changedProps,old)){this.__dataPending=null;this.__dataOld=null;this._propertiesChanged(props,changedProps,old);}}/**
       * Called in `_flushProperties` to determine if `_propertiesChanged`
       * should be called. The default implementation returns true if
       * properties are pending. Override to customize when
       * `_propertiesChanged` is called.
       * @param {!Object} currentProps Bag of all current accessor values
       * @param {?Object} changedProps Bag of properties changed since the last
       *   call to `_propertiesChanged`
       * @param {?Object} oldProps Bag of previous values for each property
       *   in `changedProps`
       * @return {boolean} true if changedProps is truthy
       * @override
       */},{key:"_shouldPropertiesChange",value:function _shouldPropertiesChange(currentProps,changedProps,oldProps){// eslint-disable-line no-unused-vars
return Boolean(changedProps);}/**
       * Callback called when any properties with accessors created via
       * `_createPropertyAccessor` have been set.
       *
       * @param {!Object} currentProps Bag of all current accessor values
       * @param {?Object} changedProps Bag of properties changed since the last
       *   call to `_propertiesChanged`
       * @param {?Object} oldProps Bag of previous values for each property
       *   in `changedProps`
       * @return {void}
       * @protected
       * @override
       */},{key:"_propertiesChanged",value:function _propertiesChanged(currentProps,changedProps,oldProps){}// eslint-disable-line no-unused-vars
/**
     * Method called to determine whether a property value should be
     * considered as a change and cause the `_propertiesChanged` callback
     * to be enqueued.
     *
     * The default implementation returns `true` if a strict equality
     * check fails. The method always returns false for `NaN`.
     *
     * Override this method to e.g. provide stricter checking for
     * Objects/Arrays when using immutable patterns.
     *
     * @param {string} property Property name
     * @param {*} value New property value
     * @param {*} old Previous property value
     * @return {boolean} Whether the property should be considered a change
     *   and enqueue a `_proeprtiesChanged` callback
     * @protected
     * @override
     */},{key:"_shouldPropertyChange",value:function _shouldPropertyChange(property,value,old){return(// Strict equality check
old!==value&&(// This ensures (old==NaN, value==NaN) always returns false
old===old||value===value));}/**
       * Implements native Custom Elements `attributeChangedCallback` to
       * set an attribute value to a property via `_attributeToProperty`.
       *
       * @param {string} name Name of attribute that changed
       * @param {?string} old Old attribute value
       * @param {?string} value New attribute value
       * @param {?string} namespace Attribute namespace.
       * @return {void}
       * @suppress {missingProperties} Super may or may not implement the callback
       * @override
       */},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,old,value,namespace){if(old!==value){this._attributeToProperty(name,value);}if(babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesChanged.prototype),"attributeChangedCallback",this)){babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesChanged.prototype),"attributeChangedCallback",this).call(this,name,old,value,namespace);}}/**
       * Deserializes an attribute to its associated property.
       *
       * This method calls the `_deserializeValue` method to convert the string to
       * a typed value.
       *
       * @param {string} attribute Name of attribute to deserialize.
       * @param {?string} value of the attribute.
       * @param {*=} type type to deserialize to, defaults to the value
       * returned from `typeForProperty`
       * @return {void}
       * @override
       */},{key:"_attributeToProperty",value:function _attributeToProperty(attribute,value,type){if(!this.__serializing){var map=this.__dataAttributes;var property=map&&map[attribute]||attribute;this[property]=this._deserializeValue(value,type||this.constructor.typeForProperty(property));}}/**
       * Serializes a property to its associated attribute.
       *
       * @suppress {invalidCasts} Closure can't figure out `this` is an element.
       *
       * @param {string} property Property name to reflect.
       * @param {string=} attribute Attribute name to reflect to.
       * @param {*=} value Property value to refect.
       * @return {void}
       * @override
       */},{key:"_propertyToAttribute",value:function _propertyToAttribute(property,attribute,value){this.__serializing=true;value=arguments.length<3?this[property]:value;this._valueToNodeAttribute(/** @type {!HTMLElement} */this,value,attribute||this.constructor.attributeNameForProperty(property));this.__serializing=false;}/**
       * Sets a typed value to an HTML attribute on a node.
       *
       * This method calls the `_serializeValue` method to convert the typed
       * value to a string.  If the `_serializeValue` method returns `undefined`,
       * the attribute will be removed (this is the default for boolean
       * type `false`).
       *
       * @param {Element} node Element to set attribute to.
       * @param {*} value Value to serialize.
       * @param {string} attribute Attribute name to serialize to.
       * @return {void}
       * @override
       */},{key:"_valueToNodeAttribute",value:function _valueToNodeAttribute(node,value,attribute){var str=this._serializeValue(value);if(str===undefined){node.removeAttribute(attribute);}else{node.setAttribute(attribute,str);}}/**
       * Converts a typed JavaScript value to a string.
       *
       * This method is called when setting JS property values to
       * HTML attributes.  Users may override this method to provide
       * serialization for custom types.
       *
       * @param {*} value Property value to serialize.
       * @return {string | undefined} String serialized from the provided
       * property  value.
       * @override
       */},{key:"_serializeValue",value:function _serializeValue(value){switch(babelHelpers.typeof(value)){case'boolean':return value?'':undefined;default:return value!=null?value.toString():undefined;}}/**
       * Converts a string to a typed JavaScript value.
       *
       * This method is called when reading HTML attribute values to
       * JS properties.  Users may override this method to provide
       * deserialization for custom `type`s. Types for `Boolean`, `String`,
       * and `Number` convert attributes to the expected types.
       *
       * @param {?string} value Value to deserialize.
       * @param {*=} type Type to deserialize the string to.
       * @return {*} Typed value deserialized from the provided string.
       * @override
       */},{key:"_deserializeValue",value:function _deserializeValue(value,type){switch(type){case Boolean:return value!==null;case Number:return Number(value);default:return value;}}}]);return PropertiesChanged;}(superClass);return PropertiesChanged;});_exports.PropertiesChanged=PropertiesChanged;var propertiesChanged={PropertiesChanged:PropertiesChanged};// that won't have their values "saved" by `saveAccessorValue`, since
// reading from an HTMLElement accessor from the context of a prototype throws
_exports.$propertiesChanged=propertiesChanged;var nativeProperties={};var proto=HTMLElement.prototype;while(proto){var props=Object.getOwnPropertyNames(proto);for(var i=0;i<props.length;i++){nativeProperties[props[i]]=true;}proto=Object.getPrototypeOf(proto);}/**
   * Used to save the value of a property that will be overridden with
   * an accessor. If the `model` is a prototype, the values will be saved
   * in `__dataProto`, and it's up to the user (or downstream mixin) to
   * decide how/when to set these values back into the accessors.
   * If `model` is already an instance (it has a `__data` property), then
   * the value will be set as a pending property, meaning the user should
   * call `_invalidateProperties` or `_flushProperties` to take effect
   *
   * @param {Object} model Prototype or instance
   * @param {string} property Name of property
   * @return {void}
   * @private
   */function saveAccessorValue(model,property){// Don't read/store value for any native properties since they could throw
if(!nativeProperties[property]){var value=model[property];if(value!==undefined){if(model.__data){// Adding accessor to instance; update the property
// It is the user's responsibility to call _flushProperties
model._setPendingProperty(property,value);}else{// Adding accessor to proto; save proto's value for instance-time use
if(!model.__dataProto){model.__dataProto={};}else if(!model.hasOwnProperty(JSCompiler_renameProperty('__dataProto',model))){model.__dataProto=Object.create(model.__dataProto);}model.__dataProto[property]=value;}}}}/**
   * Element class mixin that provides basic meta-programming for creating one
   * or more property accessors (getter/setter pair) that enqueue an async
   * (batched) `_propertiesChanged` callback.
   *
   * For basic usage of this mixin:
   *
   * -   Declare attributes to observe via the standard `static get observedAttributes()`. Use
   *     `dash-case` attribute names to represent `camelCase` property names.
   * -   Implement the `_propertiesChanged` callback on the class.
   * -   Call `MyClass.createPropertiesForAttributes()` **once** on the class to generate
   *     property accessors for each observed attribute. This must be called before the first
   *     instance is created, for example, by calling it before calling `customElements.define`.
   *     It can also be called lazily from the element's `constructor`, as long as it's guarded so
   *     that the call is only made once, when the first instance is created.
   * -   Call `this._enableProperties()` in the element's `connectedCallback` to enable
   *     the accessors.
   *
   * Any `observedAttributes` will automatically be
   * deserialized via `attributeChangedCallback` and set to the associated
   * property using `dash-case`-to-`camelCase` convention.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertiesChanged
   * @summary Element class mixin for reacting to property changes from
   *   generated property accessors.
   */var PropertyAccessors=dedupingMixin(function(superClass){/**
   * @constructor
   * @extends {superClass}
   * @implements {Polymer_PropertiesChanged}
   * @unrestricted
   * @private
   */var base=PropertiesChanged(superClass);/**
                                                  * @polymer
                                                  * @mixinClass
                                                  * @implements {Polymer_PropertyAccessors}
                                                  * @extends {base}
                                                  * @unrestricted
                                                  */var PropertyAccessors=/*#__PURE__*/function(_base){babelHelpers.inherits(PropertyAccessors,_base);function PropertyAccessors(){babelHelpers.classCallCheck(this,PropertyAccessors);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PropertyAccessors).apply(this,arguments));}babelHelpers.createClass(PropertyAccessors,[{key:"_initializeProperties",/**
       * Overrides PropertiesChanged implementation to initialize values for
       * accessors created for values that already existed on the element
       * prototype.
       *
       * @return {void}
       * @protected
       */value:function _initializeProperties(){if(this.__dataProto){this._initializeProtoProperties(this.__dataProto);this.__dataProto=null;}babelHelpers.get(babelHelpers.getPrototypeOf(PropertyAccessors.prototype),"_initializeProperties",this).call(this);}/**
       * Called at instance time with bag of properties that were overwritten
       * by accessors on the prototype when accessors were created.
       *
       * The default implementation sets these properties back into the
       * setter at instance time.  This method is provided as an override
       * point for customizing or providing more efficient initialization.
       *
       * @param {Object} props Bag of property values that were overwritten
       *   when creating property accessors.
       * @return {void}
       * @protected
       */},{key:"_initializeProtoProperties",value:function _initializeProtoProperties(props){for(var _p7 in props){this._setProperty(_p7,props[_p7]);}}/**
       * Ensures the element has the given attribute. If it does not,
       * assigns the given value to the attribute.
       *
       * @suppress {invalidCasts} Closure can't figure out `this` is infact an element
       *
       * @param {string} attribute Name of attribute to ensure is set.
       * @param {string} value of the attribute.
       * @return {void}
       */},{key:"_ensureAttribute",value:function _ensureAttribute(attribute,value){var el=/** @type {!HTMLElement} */this;if(!el.hasAttribute(attribute)){this._valueToNodeAttribute(el,value,attribute);}}/**
       * Overrides PropertiesChanged implemention to serialize objects as JSON.
       *
       * @param {*} value Property value to serialize.
       * @return {string | undefined} String serialized from the provided property value.
       */},{key:"_serializeValue",value:function _serializeValue(value){/* eslint-disable no-fallthrough */switch(babelHelpers.typeof(value)){case'object':if(babelHelpers.instanceof(value,Date)){return value.toString();}else if(value){try{return JSON.stringify(value);}catch(x){return'';}}default:return babelHelpers.get(babelHelpers.getPrototypeOf(PropertyAccessors.prototype),"_serializeValue",this).call(this,value);}}/**
       * Converts a string to a typed JavaScript value.
       *
       * This method is called by Polymer when reading HTML attribute values to
       * JS properties.  Users may override this method on Polymer element
       * prototypes to provide deserialization for custom `type`s.  Note,
       * the `type` argument is the value of the `type` field provided in the
       * `properties` configuration object for a given property, and is
       * by convention the constructor for the type to deserialize.
       *
       *
       * @param {?string} value Attribute value to deserialize.
       * @param {*=} type Type to deserialize the string to.
       * @return {*} Typed value deserialized from the provided string.
       */},{key:"_deserializeValue",value:function _deserializeValue(value,type){/**
       * @type {*}
       */var outValue;switch(type){case Object:try{outValue=JSON.parse(/** @type {string} */value);}catch(x){// allow non-JSON literals like Strings and Numbers
outValue=value;}break;case Array:try{outValue=JSON.parse(/** @type {string} */value);}catch(x){outValue=null;console.warn("Polymer::Attributes: couldn't decode Array as JSON: ".concat(value));}break;case Date:outValue=isNaN(value)?String(value):Number(value);outValue=new Date(outValue);break;default:outValue=babelHelpers.get(babelHelpers.getPrototypeOf(PropertyAccessors.prototype),"_deserializeValue",this).call(this,value,type);break;}return outValue;}/* eslint-enable no-fallthrough */ /**
                                          * Overrides PropertiesChanged implementation to save existing prototype
                                          * property value so that it can be reset.
                                          * @param {string} property Name of the property
                                          * @param {boolean=} readOnly When true, no setter is created
                                          *
                                          * When calling on a prototype, any overwritten values are saved in
                                          * `__dataProto`, and it is up to the subclasser to decide how/when
                                          * to set those properties back into the accessor.  When calling on an
                                          * instance, the overwritten value is set via `_setPendingProperty`,
                                          * and the user should call `_invalidateProperties` or `_flushProperties`
                                          * for the values to take effect.
                                          * @protected
                                          * @return {void}
                                          */},{key:"_definePropertyAccessor",value:function _definePropertyAccessor(property,readOnly){saveAccessorValue(this,property);babelHelpers.get(babelHelpers.getPrototypeOf(PropertyAccessors.prototype),"_definePropertyAccessor",this).call(this,property,readOnly);}/**
       * Returns true if this library created an accessor for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if an accessor was created
       */},{key:"_hasAccessor",value:function _hasAccessor(property){return this.__dataHasAccessor&&this.__dataHasAccessor[property];}/**
       * Returns true if the specified property has a pending change.
       *
       * @param {string} prop Property name
       * @return {boolean} True if property has a pending change
       * @protected
       */},{key:"_isPropertyPending",value:function _isPropertyPending(prop){return Boolean(this.__dataPending&&prop in this.__dataPending);}}],[{key:"createPropertiesForAttributes",/**
     * Generates property accessors for all attributes in the standard
     * static `observedAttributes` array.
     *
     * Attribute names are mapped to property names using the `dash-case` to
     * `camelCase` convention
     *
     * @return {void}
     */value:function createPropertiesForAttributes(){var a$=this.observedAttributes;for(var _i2=0;_i2<a$.length;_i2++){this.prototype._createPropertyAccessor(dashToCamelCase(a$[_i2]));}}/**
       * Returns an attribute name that corresponds to the given property.
       * By default, converts camel to dash case, e.g. `fooBar` to `foo-bar`.
       * @param {string} property Property to convert
       * @return {string} Attribute name corresponding to the given property.
       *
       * @protected
       */},{key:"attributeNameForProperty",value:function attributeNameForProperty(property){return camelToDashCase(property);}}]);return PropertyAccessors;}(base);return PropertyAccessors;});_exports.PropertyAccessors=PropertyAccessors;var propertyAccessors={PropertyAccessors:PropertyAccessors};// This is a clear layering violation and gives favored-nation status to
// dom-if and dom-repeat templates.  This is a conceit we're choosing to keep
// a.) to ease 1.x backwards-compatibility due to loss of `is`, and
// b.) to maintain if/repeat capability in parser-constrained elements
//     (e.g. table, select) in lieu of native CE type extensions without
//     massive new invention in this space (e.g. directive system)
_exports.$propertyAccessors=propertyAccessors;var templateExtensions={'dom-if':true,'dom-repeat':true};function wrapTemplateExtension(node){var is=node.getAttribute('is');if(is&&templateExtensions[is]){var t=node;t.removeAttribute('is');node=t.ownerDocument.createElement(is);t.parentNode.replaceChild(node,t);node.appendChild(t);while(t.attributes.length){node.setAttribute(t.attributes[0].name,t.attributes[0].value);t.removeAttribute(t.attributes[0].name);}}return node;}function findTemplateNode(root,nodeInfo){// recursively ascend tree until we hit root
var parent=nodeInfo.parentInfo&&findTemplateNode(root,nodeInfo.parentInfo);// unwind the stack, returning the indexed node at each level
if(parent){// note: marginally faster than indexing via childNodes
// (http://jsperf.com/childnodes-lookup)
for(var n=parent.firstChild,_i3=0;n;n=n.nextSibling){if(nodeInfo.parentIndex===_i3++){return n;}}}else{return root;}}// construct `$` map (from id annotations)
function applyIdToMap(inst,map,node,nodeInfo){if(nodeInfo.id){map[nodeInfo.id]=node;}}// install event listeners (from event annotations)
function applyEventListener(inst,node,nodeInfo){if(nodeInfo.events&&nodeInfo.events.length){for(var j=0,e$=nodeInfo.events,e;j<e$.length&&(e=e$[j]);j++){inst._addMethodEventListenerToNode(node,e.name,e.value,inst);}}}// push configuration references at configure time
function applyTemplateContent(inst,node,nodeInfo){if(nodeInfo.templateInfo){node._templateInfo=nodeInfo.templateInfo;}}function createNodeEventHandler(context,eventName,methodName){// Instances can optionally have a _methodHost which allows redirecting where
// to find methods. Currently used by `templatize`.
context=context._methodHost||context;var handler=function handler(e){if(context[methodName]){context[methodName](e,e.detail);}else{console.warn('listener method `'+methodName+'` not defined');}};return handler;}/**
   * Element mixin that provides basic template parsing and stamping, including
   * the following template-related features for stamped templates:
   *
   * - Declarative event listeners (`on-eventname="listener"`)
   * - Map of node id's to stamped node instances (`this.$.id`)
   * - Nested template content caching/removal and re-installation (performance
   *   optimization)
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin that provides basic template parsing and stamping
   */var TemplateStamp=dedupingMixin(/**
                                             * @template T
                                             * @param {function(new:T)} superClass Class to apply mixin to.
                                             * @return {function(new:T)} superClass with mixin applied.
                                             */function(superClass){/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_TemplateStamp}
   */var TemplateStamp=/*#__PURE__*/function(_superClass2){babelHelpers.inherits(TemplateStamp,_superClass2);function TemplateStamp(){babelHelpers.classCallCheck(this,TemplateStamp);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(TemplateStamp).apply(this,arguments));}babelHelpers.createClass(TemplateStamp,[{key:"_stampTemplate",/**
       * Clones the provided template content and returns a document fragment
       * containing the cloned dom.
       *
       * The template is parsed (once and memoized) using this library's
       * template parsing features, and provides the following value-added
       * features:
       * * Adds declarative event listeners for `on-event="handler"` attributes
       * * Generates an "id map" for all nodes with id's under `$` on returned
       *   document fragment
       * * Passes template info including `content` back to templates as
       *   `_templateInfo` (a performance optimization to avoid deep template
       *   cloning)
       *
       * Note that the memoized template parsing process is destructive to the
       * template: attributes for bindings and declarative event listeners are
       * removed after being noted in notes, and any nested `<template>.content`
       * is removed and stored in notes as well.
       *
       * @param {!HTMLTemplateElement} template Template to stamp
       * @return {!StampedTemplate} Cloned template content
       * @override
       */value:function _stampTemplate(template){// Polyfill support: bootstrap the template if it has not already been
if(template&&!template.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate){HTMLTemplateElement.decorate(template);}var templateInfo=this.constructor._parseTemplate(template);var nodeInfo=templateInfo.nodeInfoList;var content=templateInfo.content||template.content;var dom=/** @type {DocumentFragment} */document.importNode(content,true);// NOTE: ShadyDom optimization indicating there is an insertion point
dom.__noInsertionPoint=!templateInfo.hasInsertionPoint;var nodes=dom.nodeList=new Array(nodeInfo.length);dom.$={};for(var _i4=0,l=nodeInfo.length,info;_i4<l&&(info=nodeInfo[_i4]);_i4++){var node=nodes[_i4]=findTemplateNode(dom,info);applyIdToMap(this,dom.$,node,info);applyTemplateContent(this,node,info);applyEventListener(this,node,info);}dom=/** @type {!StampedTemplate} */dom;// eslint-disable-line no-self-assign
return dom;}/**
       * Adds an event listener by method name for the event provided.
       *
       * This method generates a handler function that looks up the method
       * name at handling time.
       *
       * @param {!EventTarget} node Node to add listener on
       * @param {string} eventName Name of event
       * @param {string} methodName Name of method
       * @param {*=} context Context the method will be called on (defaults
       *   to `node`)
       * @return {Function} Generated handler function
       * @override
       */},{key:"_addMethodEventListenerToNode",value:function _addMethodEventListenerToNode(node,eventName,methodName,context){context=context||node;var handler=createNodeEventHandler(context,eventName,methodName);this._addEventListenerToNode(node,eventName,handler);return handler;}/**
       * Override point for adding custom or simulated event handling.
       *
       * @param {!EventTarget} node Node to add event listener to
       * @param {string} eventName Name of event
       * @param {function(!Event):void} handler Listener function to add
       * @return {void}
       * @override
       */},{key:"_addEventListenerToNode",value:function _addEventListenerToNode(node,eventName,handler){node.addEventListener(eventName,handler);}/**
       * Override point for adding custom or simulated event handling.
       *
       * @param {!EventTarget} node Node to remove event listener from
       * @param {string} eventName Name of event
       * @param {function(!Event):void} handler Listener function to remove
       * @return {void}
       * @override
       */},{key:"_removeEventListenerFromNode",value:function _removeEventListenerFromNode(node,eventName,handler){node.removeEventListener(eventName,handler);}}],[{key:"_parseTemplate",/**
     * Scans a template to produce template metadata.
     *
     * Template-specific metadata are stored in the object returned, and node-
     * specific metadata are stored in objects in its flattened `nodeInfoList`
     * array.  Only nodes in the template that were parsed as nodes of
     * interest contain an object in `nodeInfoList`.  Each `nodeInfo` object
     * contains an `index` (`childNodes` index in parent) and optionally
     * `parent`, which points to node info of its parent (including its index).
     *
     * The template metadata object returned from this method has the following
     * structure (many fields optional):
     *
     * ```js
     *   {
     *     // Flattened list of node metadata (for nodes that generated metadata)
     *     nodeInfoList: [
     *       {
     *         // `id` attribute for any nodes with id's for generating `$` map
     *         id: {string},
     *         // `on-event="handler"` metadata
     *         events: [
     *           {
     *             name: {string},   // event name
     *             value: {string},  // handler method name
     *           }, ...
     *         ],
     *         // Notes when the template contained a `<slot>` for shady DOM
     *         // optimization purposes
     *         hasInsertionPoint: {boolean},
     *         // For nested `<template>`` nodes, nested template metadata
     *         templateInfo: {object}, // nested template metadata
     *         // Metadata to allow efficient retrieval of instanced node
     *         // corresponding to this metadata
     *         parentInfo: {number},   // reference to parent nodeInfo>
     *         parentIndex: {number},  // index in parent's `childNodes` collection
     *         infoIndex: {number},    // index of this `nodeInfo` in `templateInfo.nodeInfoList`
     *       },
     *       ...
     *     ],
     *     // When true, the template had the `strip-whitespace` attribute
     *     // or was nested in a template with that setting
     *     stripWhitespace: {boolean},
     *     // For nested templates, nested template content is moved into
     *     // a document fragment stored here; this is an optimization to
     *     // avoid the cost of nested template cloning
     *     content: {DocumentFragment}
     *   }
     * ```
     *
     * This method kicks off a recursive treewalk as follows:
     *
     * ```
     *    _parseTemplate <---------------------+
     *      _parseTemplateContent              |
     *        _parseTemplateNode  <------------|--+
     *          _parseTemplateNestedTemplate --+  |
     *          _parseTemplateChildNodes ---------+
     *          _parseTemplateNodeAttributes
     *            _parseTemplateNodeAttribute
     *
     * ```
     *
     * These methods may be overridden to add custom metadata about templates
     * to either `templateInfo` or `nodeInfo`.
     *
     * Note that this method may be destructive to the template, in that
     * e.g. event annotations may be removed after being noted in the
     * template metadata.
     *
     * @param {!HTMLTemplateElement} template Template to parse
     * @param {TemplateInfo=} outerTemplateInfo Template metadata from the outer
     *   template, for parsing nested templates
     * @return {!TemplateInfo} Parsed template metadata
     */value:function _parseTemplate(template,outerTemplateInfo){// since a template may be re-used, memo-ize metadata
if(!template._templateInfo){var templateInfo=template._templateInfo={};templateInfo.nodeInfoList=[];templateInfo.stripWhiteSpace=outerTemplateInfo&&outerTemplateInfo.stripWhiteSpace||template.hasAttribute('strip-whitespace');this._parseTemplateContent(template,templateInfo,{parent:null});}return template._templateInfo;}},{key:"_parseTemplateContent",value:function _parseTemplateContent(template,templateInfo,nodeInfo){return this._parseTemplateNode(template.content,templateInfo,nodeInfo);}/**
       * Parses template node and adds template and node metadata based on
       * the current node, and its `childNodes` and `attributes`.
       *
       * This method may be overridden to add custom node or template specific
       * metadata based on this node.
       *
       * @param {Node} node Node to parse
       * @param {!TemplateInfo} templateInfo Template metadata for current template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       */},{key:"_parseTemplateNode",value:function _parseTemplateNode(node,templateInfo,nodeInfo){var noted;var element=/** @type {Element} */node;if(element.localName=='template'&&!element.hasAttribute('preserve-content')){noted=this._parseTemplateNestedTemplate(element,templateInfo,nodeInfo)||noted;}else if(element.localName==='slot'){// For ShadyDom optimization, indicating there is an insertion point
templateInfo.hasInsertionPoint=true;}if(element.firstChild){noted=this._parseTemplateChildNodes(element,templateInfo,nodeInfo)||noted;}if(element.hasAttributes&&element.hasAttributes()){noted=this._parseTemplateNodeAttributes(element,templateInfo,nodeInfo)||noted;}return noted;}/**
       * Parses template child nodes for the given root node.
       *
       * This method also wraps whitelisted legacy template extensions
       * (`is="dom-if"` and `is="dom-repeat"`) with their equivalent element
       * wrappers, collapses text nodes, and strips whitespace from the template
       * if the `templateInfo.stripWhitespace` setting was provided.
       *
       * @param {Node} root Root node whose `childNodes` will be parsed
       * @param {!TemplateInfo} templateInfo Template metadata for current template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {void}
       */},{key:"_parseTemplateChildNodes",value:function _parseTemplateChildNodes(root,templateInfo,nodeInfo){if(root.localName==='script'||root.localName==='style'){return;}for(var node=root.firstChild,parentIndex=0,next;node;node=next){// Wrap templates
if(node.localName=='template'){node=wrapTemplateExtension(node);}// collapse adjacent textNodes: fixes an IE issue that can cause
// text nodes to be inexplicably split =(
// note that root.normalize() should work but does not so we do this
// manually.
next=node.nextSibling;if(node.nodeType===Node.TEXT_NODE){var/** Node */n=next;while(n&&n.nodeType===Node.TEXT_NODE){node.textContent+=n.textContent;next=n.nextSibling;root.removeChild(n);n=next;}// optionally strip whitespace
if(templateInfo.stripWhiteSpace&&!node.textContent.trim()){root.removeChild(node);continue;}}var childInfo={parentIndex:parentIndex,parentInfo:nodeInfo};if(this._parseTemplateNode(node,templateInfo,childInfo)){childInfo.infoIndex=templateInfo.nodeInfoList.push(/** @type {!NodeInfo} */childInfo)-1;}// Increment if not removed
if(node.parentNode){parentIndex++;}}}/**
       * Parses template content for the given nested `<template>`.
       *
       * Nested template info is stored as `templateInfo` in the current node's
       * `nodeInfo`. `template.content` is removed and stored in `templateInfo`.
       * It will then be the responsibility of the host to set it back to the
       * template and for users stamping nested templates to use the
       * `_contentForTemplate` method to retrieve the content for this template
       * (an optimization to avoid the cost of cloning nested template content).
       *
       * @param {HTMLTemplateElement} node Node to parse (a <template>)
       * @param {TemplateInfo} outerTemplateInfo Template metadata for current template
       *   that includes the template `node`
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       */},{key:"_parseTemplateNestedTemplate",value:function _parseTemplateNestedTemplate(node,outerTemplateInfo,nodeInfo){var templateInfo=this._parseTemplate(node,outerTemplateInfo);var content=templateInfo.content=node.content.ownerDocument.createDocumentFragment();content.appendChild(node.content);nodeInfo.templateInfo=templateInfo;return true;}/**
       * Parses template node attributes and adds node metadata to `nodeInfo`
       * for nodes of interest.
       *
       * @param {Element} node Node to parse
       * @param {TemplateInfo} templateInfo Template metadata for current template
       * @param {NodeInfo} nodeInfo Node metadata for current template.
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       */},{key:"_parseTemplateNodeAttributes",value:function _parseTemplateNodeAttributes(node,templateInfo,nodeInfo){// Make copy of original attribute list, since the order may change
// as attributes are added and removed
var noted=false;var attrs=Array.from(node.attributes);for(var _i5=attrs.length-1,a;a=attrs[_i5];_i5--){noted=this._parseTemplateNodeAttribute(node,templateInfo,nodeInfo,a.name,a.value)||noted;}return noted;}/**
       * Parses a single template node attribute and adds node metadata to
       * `nodeInfo` for attributes of interest.
       *
       * This implementation adds metadata for `on-event="handler"` attributes
       * and `id` attributes.
       *
       * @param {Element} node Node to parse
       * @param {!TemplateInfo} templateInfo Template metadata for current template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @param {string} name Attribute name
       * @param {string} value Attribute value
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       */},{key:"_parseTemplateNodeAttribute",value:function _parseTemplateNodeAttribute(node,templateInfo,nodeInfo,name,value){// events (on-*)
if(name.slice(0,3)==='on-'){node.removeAttribute(name);nodeInfo.events=nodeInfo.events||[];nodeInfo.events.push({name:name.slice(3),value:value});return true;}// static id
else if(name==='id'){nodeInfo.id=value;return true;}return false;}/**
       * Returns the `content` document fragment for a given template.
       *
       * For nested templates, Polymer performs an optimization to cache nested
       * template content to avoid the cost of cloning deeply nested templates.
       * This method retrieves the cached content for a given template.
       *
       * @param {HTMLTemplateElement} template Template to retrieve `content` for
       * @return {DocumentFragment} Content fragment
       */},{key:"_contentForTemplate",value:function _contentForTemplate(template){var templateInfo=/** @type {HTMLTemplateElementWithInfo} */template._templateInfo;return templateInfo&&templateInfo.content||template.content;}}]);return TemplateStamp;}(superClass);return TemplateStamp;});_exports.TemplateStamp=TemplateStamp;var templateStamp={TemplateStamp:TemplateStamp};// from multiple properties in the same turn
_exports.$templateStamp=templateStamp;var dedupeId$1=0;/**
                    * Property effect types; effects are stored on the prototype using these keys
                    * @enum {string}
                    */var TYPES={COMPUTE:'__computeEffects',REFLECT:'__reflectEffects',NOTIFY:'__notifyEffects',PROPAGATE:'__propagateEffects',OBSERVE:'__observeEffects',READ_ONLY:'__readOnly'};/** @const {RegExp} */var capitalAttributeRegex=/[A-Z]/;/**
                                        * @typedef {{
                                        * name: (string | undefined),
                                        * structured: (boolean | undefined),
                                        * wildcard: (boolean | undefined)
                                        * }}
                                        */var DataTrigger;//eslint-disable-line no-unused-vars
/**
 * @typedef {{
 * info: ?,
 * trigger: (!DataTrigger | undefined),
 * fn: (!Function | undefined)
 * }}
 */var DataEffect;//eslint-disable-line no-unused-vars
var PropertyEffectsType;//eslint-disable-line no-unused-vars
/**
 * Ensures that the model has an own-property map of effects for the given type.
 * The model may be a prototype or an instance.
 *
 * Property effects are stored as arrays of effects by property in a map,
 * by named type on the model. e.g.
 *
 *   __computeEffects: {
 *     foo: [ ... ],
 *     bar: [ ... ]
 *   }
 *
 * If the model does not yet have an effect map for the type, one is created
 * and returned.  If it does, but it is not an own property (i.e. the
 * prototype had effects), the the map is deeply cloned and the copy is
 * set on the model and returned, ready for new effects to be added.
 *
 * @param {Object} model Prototype or instance
 * @param {string} type Property effect type
 * @return {Object} The own-property map of effects for the given type
 * @private
 */function ensureOwnEffectMap(model,type){var effects=model[type];if(!effects){effects=model[type]={};}else if(!model.hasOwnProperty(type)){effects=model[type]=Object.create(model[type]);for(var _p8 in effects){var protoFx=effects[_p8];var instFx=effects[_p8]=Array(protoFx.length);for(var _i6=0;_i6<protoFx.length;_i6++){instFx[_i6]=protoFx[_i6];}}}return effects;}// -- effects ----------------------------------------------
/**
 * Runs all effects of a given type for the given set of property changes
 * on an instance.
 *
 * @param {!PropertyEffectsType} inst The instance with effects to run
 * @param {Object} effects Object map of property-to-Array of effects
 * @param {Object} props Bag of current property changes
 * @param {Object=} oldProps Bag of previous values for changed properties
 * @param {boolean=} hasPaths True with `props` contains one or more paths
 * @param {*=} extraArgs Additional metadata to pass to effect function
 * @return {boolean} True if an effect ran for this property
 * @private
 */function runEffects(inst,effects,props,oldProps,hasPaths,extraArgs){if(effects){var ran=false;var id=dedupeId$1++;for(var prop in props){if(runEffectsForProperty(inst,effects,id,prop,props,oldProps,hasPaths,extraArgs)){ran=true;}}return ran;}return false;}/**
   * Runs a list of effects for a given property.
   *
   * @param {!PropertyEffectsType} inst The instance with effects to run
   * @param {Object} effects Object map of property-to-Array of effects
   * @param {number} dedupeId Counter used for de-duping effects
   * @param {string} prop Name of changed property
   * @param {*} props Changed properties
   * @param {*} oldProps Old properties
   * @param {boolean=} hasPaths True with `props` contains one or more paths
   * @param {*=} extraArgs Additional metadata to pass to effect function
   * @return {boolean} True if an effect ran for this property
   * @private
   */function runEffectsForProperty(inst,effects,dedupeId,prop,props,oldProps,hasPaths,extraArgs){var ran=false;var rootProperty=hasPaths?root(prop):prop;var fxs=effects[rootProperty];if(fxs){for(var _i7=0,l=fxs.length,fx;_i7<l&&(fx=fxs[_i7]);_i7++){if((!fx.info||fx.info.lastRun!==dedupeId)&&(!hasPaths||pathMatchesTrigger(prop,fx.trigger))){if(fx.info){fx.info.lastRun=dedupeId;}fx.fn(inst,prop,props,oldProps,fx.info,hasPaths,extraArgs);ran=true;}}}return ran;}/**
   * Determines whether a property/path that has changed matches the trigger
   * criteria for an effect.  A trigger is a descriptor with the following
   * structure, which matches the descriptors returned from `parseArg`.
   * e.g. for `foo.bar.*`:
   * ```
   * trigger: {
   *   name: 'a.b',
   *   structured: true,
   *   wildcard: true
   * }
   * ```
   * If no trigger is given, the path is deemed to match.
   *
   * @param {string} path Path or property that changed
   * @param {DataTrigger} trigger Descriptor
   * @return {boolean} Whether the path matched the trigger
   */function pathMatchesTrigger(path,trigger){if(trigger){var triggerPath=trigger.name;return triggerPath==path||trigger.structured&&isAncestor(triggerPath,path)||trigger.wildcard&&isDescendant(triggerPath,path);}else{return true;}}/**
   * Implements the "observer" effect.
   *
   * Calls the method with `info.methodName` on the instance, passing the
   * new and old values.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {void}
   * @private
   */function runObserverEffect(inst,property,props,oldProps,info){var fn=typeof info.method==="string"?inst[info.method]:info.method;var changedProp=info.property;if(fn){fn.call(inst,inst.__data[changedProp],oldProps[changedProp]);}else if(!info.dynamicFn){console.warn('observer method `'+info.method+'` not defined');}}/**
   * Runs "notify" effects for a set of changed properties.
   *
   * This method differs from the generic `runEffects` method in that it
   * will dispatch path notification events in the case that the property
   * changed was a path and the root property for that path didn't have a
   * "notify" effect.  This is to maintain 1.0 behavior that did not require
   * `notify: true` to ensure object sub-property notifications were
   * sent.
   *
   * @param {!PropertyEffectsType} inst The instance with effects to run
   * @param {Object} notifyProps Bag of properties to notify
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */function runNotifyEffects(inst,notifyProps,props,oldProps,hasPaths){// Notify
var fxs=inst[TYPES.NOTIFY];var notified;var id=dedupeId$1++;// Try normal notify effects; if none, fall back to try path notification
for(var prop in notifyProps){if(notifyProps[prop]){if(fxs&&runEffectsForProperty(inst,fxs,id,prop,props,oldProps,hasPaths)){notified=true;}else if(hasPaths&&notifyPath(inst,prop,props)){notified=true;}}}// Flush host if we actually notified and host was batching
// And the host has already initialized clients; this prevents
// an issue with a host observing data changes before clients are ready.
var host;if(notified&&(host=inst.__dataHost)&&host._invalidateProperties){host._invalidateProperties();}}/**
   * Dispatches {property}-changed events with path information in the detail
   * object to indicate a sub-path of the property was changed.
   *
   * @param {!PropertyEffectsType} inst The element from which to fire the event
   * @param {string} path The path that was changed
   * @param {Object} props Bag of current property changes
   * @return {boolean} Returns true if the path was notified
   * @private
   */function notifyPath(inst,path,props){var rootProperty=root(path);if(rootProperty!==path){var eventName=camelToDashCase(rootProperty)+'-changed';dispatchNotifyEvent(inst,eventName,props[path],path);return true;}return false;}/**
   * Dispatches {property}-changed events to indicate a property (or path)
   * changed.
   *
   * @param {!PropertyEffectsType} inst The element from which to fire the event
   * @param {string} eventName The name of the event to send ('{property}-changed')
   * @param {*} value The value of the changed property
   * @param {string | null | undefined} path If a sub-path of this property changed, the path
   *   that changed (optional).
   * @return {void}
   * @private
   * @suppress {invalidCasts}
   */function dispatchNotifyEvent(inst,eventName,value,path){var detail={value:value,queueProperty:true};if(path){detail.path=path;}/** @type {!HTMLElement} */inst.dispatchEvent(new CustomEvent(eventName,{detail:detail}));}/**
   * Implements the "notify" effect.
   *
   * Dispatches a non-bubbling event named `info.eventName` on the instance
   * with a detail object containing the new `value`.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */function runNotifyEffect(inst,property,props,oldProps,info,hasPaths){var rootProperty=hasPaths?root(property):property;var path=rootProperty!=property?property:null;var value=path?_get(inst,path):inst.__data[property];if(path&&value===undefined){value=props[property];// specifically for .splices
}dispatchNotifyEvent(inst,info.eventName,value,path);}/**
   * Handler function for 2-way notification events. Receives context
   * information captured in the `addNotifyListener` closure from the
   * `__notifyListeners` metadata.
   *
   * Sets the value of the notified property to the host property or path.  If
   * the event contained path information, translate that path to the host
   * scope's name for that path first.
   *
   * @param {CustomEvent} event Notification event (e.g. '<property>-changed')
   * @param {!PropertyEffectsType} inst Host element instance handling the notification event
   * @param {string} fromProp Child element property that was bound
   * @param {string} toPath Host property/path that was bound
   * @param {boolean} negate Whether the binding was negated
   * @return {void}
   * @private
   */function handleNotification(event,inst,fromProp,toPath,negate){var value;var detail=/** @type {Object} */event.detail;var fromPath=detail&&detail.path;if(fromPath){toPath=translate(fromProp,toPath,fromPath);value=detail&&detail.value;}else{value=event.currentTarget[fromProp];}value=negate?!value:value;if(!inst[TYPES.READ_ONLY]||!inst[TYPES.READ_ONLY][toPath]){if(inst._setPendingPropertyOrPath(toPath,value,true,Boolean(fromPath))&&(!detail||!detail.queueProperty)){inst._invalidateProperties();}}}/**
   * Implements the "reflect" effect.
   *
   * Sets the attribute named `info.attrName` to the given property value.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {void}
   * @private
   */function runReflectEffect(inst,property,props,oldProps,info){var value=inst.__data[property];if(sanitizeDOMValue){value=sanitizeDOMValue(value,info.attrName,'attribute',/** @type {Node} */inst);}inst._propertyToAttribute(property,info.attrName,value);}/**
   * Runs "computed" effects for a set of changed properties.
   *
   * This method differs from the generic `runEffects` method in that it
   * continues to run computed effects based on the output of each pass until
   * there are no more newly computed properties.  This ensures that all
   * properties that will be computed by the initial set of changes are
   * computed before other effects (binding propagation, observers, and notify)
   * run.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {!Object} changedProps Bag of changed properties
   * @param {!Object} oldProps Bag of previous values for changed properties
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */function runComputedEffects(inst,changedProps,oldProps,hasPaths){var computeEffects=inst[TYPES.COMPUTE];if(computeEffects){var inputProps=changedProps;while(runEffects(inst,computeEffects,inputProps,oldProps,hasPaths)){Object.assign(oldProps,inst.__dataOld);Object.assign(changedProps,inst.__dataPending);inputProps=inst.__dataPending;inst.__dataPending=null;}}}/**
   * Implements the "computed property" effect by running the method with the
   * values of the arguments specified in the `info` object and setting the
   * return value to the computed property specified.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {void}
   * @private
   */function runComputedEffect(inst,property,props,oldProps,info){var result=runMethodEffect(inst,property,props,oldProps,info);var computedProp=info.methodInfo;if(inst.__dataHasAccessor&&inst.__dataHasAccessor[computedProp]){inst._setPendingProperty(computedProp,result,true);}else{inst[computedProp]=result;}}/**
   * Computes path changes based on path links set up using the `linkPaths`
   * API.
   *
   * @param {!PropertyEffectsType} inst The instance whose props are changing
   * @param {string | !Array<(string|number)>} path Path that has changed
   * @param {*} value Value of changed path
   * @return {void}
   * @private
   */function computeLinkedPaths(inst,path,value){var links=inst.__dataLinkedPaths;if(links){var link;for(var a in links){var b=links[a];if(isDescendant(a,path)){link=translate(a,b,path);inst._setPendingPropertyOrPath(link,value,true,true);}else if(isDescendant(b,path)){link=translate(b,a,path);inst._setPendingPropertyOrPath(link,value,true,true);}}}}// -- bindings ----------------------------------------------
/**
 * Adds binding metadata to the current `nodeInfo`, and binding effects
 * for all part dependencies to `templateInfo`.
 *
 * @param {Function} constructor Class that `_parseTemplate` is currently
 *   running on
 * @param {TemplateInfo} templateInfo Template metadata for current template
 * @param {NodeInfo} nodeInfo Node metadata for current template node
 * @param {string} kind Binding kind, either 'property', 'attribute', or 'text'
 * @param {string} target Target property name
 * @param {!Array<!BindingPart>} parts Array of binding part metadata
 * @param {string=} literal Literal text surrounding binding parts (specified
 *   only for 'property' bindings, since these must be initialized as part
 *   of boot-up)
 * @return {void}
 * @private
 */function addBinding(constructor,templateInfo,nodeInfo,kind,target,parts,literal){// Create binding metadata and add to nodeInfo
nodeInfo.bindings=nodeInfo.bindings||[];var/** Binding */binding={kind:kind,target:target,parts:parts,literal:literal,isCompound:parts.length!==1};nodeInfo.bindings.push(binding);// Add listener info to binding metadata
if(shouldAddListener(binding)){var _binding$parts$=binding.parts[0],event=_binding$parts$.event,negate=_binding$parts$.negate;binding.listenerEvent=event||camelToDashCase(target)+'-changed';binding.listenerNegate=negate;}// Add "propagate" property effects to templateInfo
var index=templateInfo.nodeInfoList.length;for(var _i8=0;_i8<binding.parts.length;_i8++){var part=binding.parts[_i8];part.compoundIndex=_i8;addEffectForBindingPart(constructor,templateInfo,binding,part,index);}}/**
   * Adds property effects to the given `templateInfo` for the given binding
   * part.
   *
   * @param {Function} constructor Class that `_parseTemplate` is currently
   *   running on
   * @param {TemplateInfo} templateInfo Template metadata for current template
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @param {number} index Index into `nodeInfoList` for this node
   * @return {void}
   */function addEffectForBindingPart(constructor,templateInfo,binding,part,index){if(!part.literal){if(binding.kind==='attribute'&&binding.target[0]==='-'){console.warn('Cannot set attribute '+binding.target+' because "-" is not a valid attribute starting character');}else{var dependencies=part.dependencies;var info={index:index,binding:binding,part:part,evaluator:constructor};for(var j=0;j<dependencies.length;j++){var trigger=dependencies[j];if(typeof trigger=='string'){trigger=parseArg(trigger);trigger.wildcard=true;}constructor._addTemplatePropertyEffect(templateInfo,trigger.rootProperty,{fn:runBindingEffect,info:info,trigger:trigger});}}}}/**
   * Implements the "binding" (property/path binding) effect.
   *
   * Note that binding syntax is overridable via `_parseBindings` and
   * `_evaluateBinding`.  This method will call `_evaluateBinding` for any
   * non-literal parts returned from `_parseBindings`.  However,
   * there is no support for _path_ bindings via custom binding parts,
   * as this is specific to Polymer's path binding syntax.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} path Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @param {Array} nodeList List of nodes associated with `nodeInfoList` template
   *   metadata
   * @return {void}
   * @private
   */function runBindingEffect(inst,path,props,oldProps,info,hasPaths,nodeList){var node=nodeList[info.index];var binding=info.binding;var part=info.part;// Subpath notification: transform path and set to client
// e.g.: foo="{{obj.sub}}", path: 'obj.sub.prop', set 'foo.prop'=obj.sub.prop
if(hasPaths&&part.source&&path.length>part.source.length&&binding.kind=='property'&&!binding.isCompound&&node.__isPropertyEffectsClient&&node.__dataHasAccessor&&node.__dataHasAccessor[binding.target]){var value=props[path];path=translate(part.source,binding.target,path);if(node._setPendingPropertyOrPath(path,value,false,true)){inst._enqueueClient(node);}}else{var _value=info.evaluator._evaluateBinding(inst,part,path,props,oldProps,hasPaths);// Propagate value to child
applyBindingValue(inst,node,binding,part,_value);}}/**
   * Sets the value for an "binding" (binding) effect to a node,
   * either as a property or attribute.
   *
   * @param {!PropertyEffectsType} inst The instance owning the binding effect
   * @param {Node} node Target node for binding
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @param {*} value Value to set
   * @return {void}
   * @private
   */function applyBindingValue(inst,node,binding,part,value){value=computeBindingValue(node,value,binding,part);if(sanitizeDOMValue){value=sanitizeDOMValue(value,binding.target,binding.kind,node);}if(binding.kind=='attribute'){// Attribute binding
inst._valueToNodeAttribute(/** @type {Element} */node,value,binding.target);}else{// Property binding
var prop=binding.target;if(node.__isPropertyEffectsClient&&node.__dataHasAccessor&&node.__dataHasAccessor[prop]){if(!node[TYPES.READ_ONLY]||!node[TYPES.READ_ONLY][prop]){if(node._setPendingProperty(prop,value)){inst._enqueueClient(node);}}}else{inst._setUnmanagedPropertyToNode(node,prop,value);}}}/**
   * Transforms an "binding" effect value based on compound & negation
   * effect metadata, as well as handling for special-case properties
   *
   * @param {Node} node Node the value will be set to
   * @param {*} value Value to set
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @return {*} Transformed value to set
   * @private
   */function computeBindingValue(node,value,binding,part){if(binding.isCompound){var storage=node.__dataCompoundStorage[binding.target];storage[part.compoundIndex]=value;value=storage.join('');}if(binding.kind!=='attribute'){// Some browsers serialize `undefined` to `"undefined"`
if(binding.target==='textContent'||binding.target==='value'&&(node.localName==='input'||node.localName==='textarea')){value=value==undefined?'':value;}}return value;}/**
   * Returns true if a binding's metadata meets all the requirements to allow
   * 2-way binding, and therefore a `<property>-changed` event listener should be
   * added:
   * - used curly braces
   * - is a property (not attribute) binding
   * - is not a textContent binding
   * - is not compound
   *
   * @param {!Binding} binding Binding metadata
   * @return {boolean} True if 2-way listener should be added
   * @private
   */function shouldAddListener(binding){return Boolean(binding.target)&&binding.kind!='attribute'&&binding.kind!='text'&&!binding.isCompound&&binding.parts[0].mode==='{';}/**
   * Setup compound binding storage structures, notify listeners, and dataHost
   * references onto the bound nodeList.
   *
   * @param {!PropertyEffectsType} inst Instance that bas been previously bound
   * @param {TemplateInfo} templateInfo Template metadata
   * @return {void}
   * @private
   */function setupBindings(inst,templateInfo){// Setup compound storage, dataHost, and notify listeners
var nodeList=templateInfo.nodeList,nodeInfoList=templateInfo.nodeInfoList;if(nodeInfoList.length){for(var _i9=0;_i9<nodeInfoList.length;_i9++){var info=nodeInfoList[_i9];var node=nodeList[_i9];var bindings=info.bindings;if(bindings){for(var _i10=0;_i10<bindings.length;_i10++){var binding=bindings[_i10];setupCompoundStorage(node,binding);addNotifyListener(node,inst,binding);}}node.__dataHost=inst;}}}/**
   * Initializes `__dataCompoundStorage` local storage on a bound node with
   * initial literal data for compound bindings, and sets the joined
   * literal parts to the bound property.
   *
   * When changes to compound parts occur, they are first set into the compound
   * storage array for that property, and then the array is joined to result in
   * the final value set to the property/attribute.
   *
   * @param {Node} node Bound node to initialize
   * @param {Binding} binding Binding metadata
   * @return {void}
   * @private
   */function setupCompoundStorage(node,binding){if(binding.isCompound){// Create compound storage map
var storage=node.__dataCompoundStorage||(node.__dataCompoundStorage={});var parts=binding.parts;// Copy literals from parts into storage for this binding
var literals=new Array(parts.length);for(var j=0;j<parts.length;j++){literals[j]=parts[j].literal;}var target=binding.target;storage[target]=literals;// Configure properties with their literal parts
if(binding.literal&&binding.kind=='property'){node[target]=binding.literal;}}}/**
   * Adds a 2-way binding notification event listener to the node specified
   *
   * @param {Object} node Child element to add listener to
   * @param {!PropertyEffectsType} inst Host element instance to handle notification event
   * @param {Binding} binding Binding metadata
   * @return {void}
   * @private
   */function addNotifyListener(node,inst,binding){if(binding.listenerEvent){var part=binding.parts[0];node.addEventListener(binding.listenerEvent,function(e){handleNotification(e,inst,binding.target,part.source,part.negate);});}}// -- for method-based effects (complexObserver & computed) --------------
/**
 * Adds property effects for each argument in the method signature (and
 * optionally, for the method name if `dynamic` is true) that calls the
 * provided effect function.
 *
 * @param {Element | Object} model Prototype or instance
 * @param {!MethodSignature} sig Method signature metadata
 * @param {string} type Type of property effect to add
 * @param {Function} effectFn Function to run when arguments change
 * @param {*=} methodInfo Effect-specific information to be included in
 *   method effect metadata
 * @param {boolean|Object=} dynamicFn Boolean or object map indicating whether
 *   method names should be included as a dependency to the effect. Note,
 *   defaults to true if the signature is static (sig.static is true).
 * @return {void}
 * @private
 */function createMethodEffect(model,sig,type,effectFn,methodInfo,dynamicFn){dynamicFn=sig.static||dynamicFn&&(babelHelpers.typeof(dynamicFn)!=='object'||dynamicFn[sig.methodName]);var info={methodName:sig.methodName,args:sig.args,methodInfo:methodInfo,dynamicFn:dynamicFn};for(var _i11=0,arg;_i11<sig.args.length&&(arg=sig.args[_i11]);_i11++){if(!arg.literal){model._addPropertyEffect(arg.rootProperty,type,{fn:effectFn,info:info,trigger:arg});}}if(dynamicFn){model._addPropertyEffect(sig.methodName,type,{fn:effectFn,info:info});}}/**
   * Calls a method with arguments marshaled from properties on the instance
   * based on the method signature contained in the effect metadata.
   *
   * Multi-property observers, computed properties, and inline computing
   * functions call this function to invoke the method, then use the return
   * value accordingly.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {*} Returns the return value from the method invocation
   * @private
   */function runMethodEffect(inst,property,props,oldProps,info){// Instances can optionally have a _methodHost which allows redirecting where
// to find methods. Currently used by `templatize`.
var context=inst._methodHost||inst;var fn=context[info.methodName];if(fn){var args=inst._marshalArgs(info.args,property,props);return fn.apply(context,args);}else if(!info.dynamicFn){console.warn('method `'+info.methodName+'` not defined');}}var emptyArray=[];// Regular expressions used for binding
var IDENT='(?:'+'[a-zA-Z_$][\\w.:$\\-*]*'+')';var NUMBER='(?:'+'[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?'+')';var SQUOTE_STRING='(?:'+'\'(?:[^\'\\\\]|\\\\.)*\''+')';var DQUOTE_STRING='(?:'+'"(?:[^"\\\\]|\\\\.)*"'+')';var STRING='(?:'+SQUOTE_STRING+'|'+DQUOTE_STRING+')';var ARGUMENT='(?:('+IDENT+'|'+NUMBER+'|'+STRING+')\\s*'+')';var ARGUMENTS='(?:'+ARGUMENT+'(?:,\\s*'+ARGUMENT+')*'+')';var ARGUMENT_LIST='(?:'+'\\(\\s*'+'(?:'+ARGUMENTS+'?'+')'+'\\)\\s*'+')';var BINDING='('+IDENT+'\\s*'+ARGUMENT_LIST+'?'+')';// Group 3
var OPEN_BRACKET='(\\[\\[|{{)'+'\\s*';var CLOSE_BRACKET='(?:]]|}})';var NEGATE='(?:(!)\\s*)?';// Group 2
var EXPRESSION=OPEN_BRACKET+NEGATE+BINDING+CLOSE_BRACKET;var bindingRegex=new RegExp(EXPRESSION,"g");/**
                                                   * Create a string from binding parts of all the literal parts
                                                   *
                                                   * @param {!Array<BindingPart>} parts All parts to stringify
                                                   * @return {string} String made from the literal parts
                                                   */function literalFromParts(parts){var s='';for(var _i12=0;_i12<parts.length;_i12++){var literal=parts[_i12].literal;s+=literal||'';}return s;}/**
   * Parses an expression string for a method signature, and returns a metadata
   * describing the method in terms of `methodName`, `static` (whether all the
   * arguments are literals), and an array of `args`
   *
   * @param {string} expression The expression to parse
   * @return {?MethodSignature} The method metadata object if a method expression was
   *   found, otherwise `undefined`
   * @private
   */function parseMethod(expression){// tries to match valid javascript property names
var m=expression.match(/([^\s]+?)\(([\s\S]*)\)/);if(m){var methodName=m[1];var sig={methodName:methodName,static:true,args:emptyArray};if(m[2].trim()){// replace escaped commas with comma entity, split on un-escaped commas
var args=m[2].replace(/\\,/g,'&comma;').split(',');return parseArgs(args,sig);}else{return sig;}}return null;}/**
   * Parses an array of arguments and sets the `args` property of the supplied
   * signature metadata object. Sets the `static` property to false if any
   * argument is a non-literal.
   *
   * @param {!Array<string>} argList Array of argument names
   * @param {!MethodSignature} sig Method signature metadata object
   * @return {!MethodSignature} The updated signature metadata object
   * @private
   */function parseArgs(argList,sig){sig.args=argList.map(function(rawArg){var arg=parseArg(rawArg);if(!arg.literal){sig.static=false;}return arg;},this);return sig;}/**
   * Parses an individual argument, and returns an argument metadata object
   * with the following fields:
   *
   *   {
   *     value: 'prop',        // property/path or literal value
   *     literal: false,       // whether argument is a literal
   *     structured: false,    // whether the property is a path
   *     rootProperty: 'prop', // the root property of the path
   *     wildcard: false       // whether the argument was a wildcard '.*' path
   *   }
   *
   * @param {string} rawArg The string value of the argument
   * @return {!MethodArg} Argument metadata object
   * @private
   */function parseArg(rawArg){// clean up whitespace
var arg=rawArg.trim()// replace comma entity with comma
.replace(/&comma;/g,',')// repair extra escape sequences; note only commas strictly need
// escaping, but we allow any other char to be escaped since its
// likely users will do this
.replace(/\\(.)/g,'\$1');// basic argument descriptor
var a={name:arg,value:'',literal:false};// detect literal value (must be String or Number)
var fc=arg[0];if(fc==='-'){fc=arg[1];}if(fc>='0'&&fc<='9'){fc='#';}switch(fc){case"'":case'"':a.value=arg.slice(1,-1);a.literal=true;break;case'#':a.value=Number(arg);a.literal=true;break;}// if not literal, look for structured path
if(!a.literal){a.rootProperty=root(arg);// detect structured path (has dots)
a.structured=isPath(arg);if(a.structured){a.wildcard=arg.slice(-2)=='.*';if(a.wildcard){a.name=arg.slice(0,-2);}}}return a;}// data api
/**
 * Sends array splice notifications (`.splices` and `.length`)
 *
 * Note: this implementation only accepts normalized paths
 *
 * @param {!PropertyEffectsType} inst Instance to send notifications to
 * @param {Array} array The array the mutations occurred on
 * @param {string} path The path to the array that was mutated
 * @param {Array} splices Array of splice records
 * @return {void}
 * @private
 */function _notifySplices(inst,array,path,splices){var splicesPath=path+'.splices';inst.notifyPath(splicesPath,{indexSplices:splices});inst.notifyPath(path+'.length',array.length);// Null here to allow potentially large splice records to be GC'ed.
inst.__data[splicesPath]={indexSplices:null};}/**
   * Creates a splice record and sends an array splice notification for
   * the described mutation
   *
   * Note: this implementation only accepts normalized paths
   *
   * @param {!PropertyEffectsType} inst Instance to send notifications to
   * @param {Array} array The array the mutations occurred on
   * @param {string} path The path to the array that was mutated
   * @param {number} index Index at which the array mutation occurred
   * @param {number} addedCount Number of added items
   * @param {Array} removed Array of removed items
   * @return {void}
   * @private
   */function notifySplice(inst,array,path,index,addedCount,removed){_notifySplices(inst,array,path,[{index:index,addedCount:addedCount,removed:removed,object:array,type:'splice'}]);}/**
   * Returns an upper-cased version of the string.
   *
   * @param {string} name String to uppercase
   * @return {string} Uppercased string
   * @private
   */function upper(name){return name[0].toUpperCase()+name.substring(1);}/**
   * Element class mixin that provides meta-programming for Polymer's template
   * binding and data observation (collectively, "property effects") system.
   *
   * This mixin uses provides the following key static methods for adding
   * property effects to an element class:
   * - `addPropertyEffect`
   * - `createPropertyObserver`
   * - `createMethodObserver`
   * - `createNotifyingProperty`
   * - `createReadOnlyProperty`
   * - `createReflectedProperty`
   * - `createComputedProperty`
   * - `bindTemplate`
   *
   * Each method creates one or more property accessors, along with metadata
   * used by this mixin's implementation of `_propertiesChanged` to perform
   * the property effects.
   *
   * Underscored versions of the above methods also exist on the element
   * prototype for adding property effects on instances at runtime.
   *
   * Note that this mixin overrides several `PropertyAccessors` methods, in
   * many cases to maintain guarantees provided by the Polymer 1.x features;
   * notably it changes property accessors to be synchronous by default
   * whereas the default when using `PropertyAccessors` standalone is to be
   * async by default.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin TemplateStamp
   * @appliesMixin PropertyAccessors
   * @summary Element class mixin that provides meta-programming for Polymer's
   * template binding and data observation system.
   */var PropertyEffects=dedupingMixin(function(superClass){/**
   * @constructor
   * @extends {superClass}
   * @implements {Polymer_PropertyAccessors}
   * @implements {Polymer_TemplateStamp}
   * @unrestricted
   * @private
   */var propertyEffectsBase=TemplateStamp(PropertyAccessors(superClass));/**
                                                                                * @polymer
                                                                                * @mixinClass
                                                                                * @implements {Polymer_PropertyEffects}
                                                                                * @extends {propertyEffectsBase}
                                                                                * @unrestricted
                                                                                */var PropertyEffects=/*#__PURE__*/function(_propertyEffectsBase){babelHelpers.inherits(PropertyEffects,_propertyEffectsBase);function PropertyEffects(){var _this9;babelHelpers.classCallCheck(this,PropertyEffects);_this9=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PropertyEffects).call(this));/** @type {boolean} */ // Used to identify users of this mixin, ala instanceof
_this9.__isPropertyEffectsClient=true;/** @type {number} */ // NOTE: used to track re-entrant calls to `_flushProperties`
// path changes dirty check against `__dataTemp` only during one "turn"
// and are cleared when `__dataCounter` returns to 0.
_this9.__dataCounter=0;/** @type {boolean} */_this9.__dataClientsReady;/** @type {Array} */_this9.__dataPendingClients;/** @type {Object} */_this9.__dataToNotify;/** @type {Object} */_this9.__dataLinkedPaths;/** @type {boolean} */_this9.__dataHasPaths;/** @type {Object} */_this9.__dataCompoundStorage;/** @type {Polymer_PropertyEffects} */_this9.__dataHost;/** @type {!Object} */_this9.__dataTemp;/** @type {boolean} */_this9.__dataClientsInitialized;/** @type {!Object} */_this9.__data;/** @type {!Object} */_this9.__dataPending;/** @type {!Object} */_this9.__dataOld;/** @type {Object} */_this9.__computeEffects;/** @type {Object} */_this9.__reflectEffects;/** @type {Object} */_this9.__notifyEffects;/** @type {Object} */_this9.__propagateEffects;/** @type {Object} */_this9.__observeEffects;/** @type {Object} */_this9.__readOnly;/** @type {!TemplateInfo} */_this9.__templateInfo;return _this9;}babelHelpers.createClass(PropertyEffects,[{key:"_initializeProperties",/**
       * @return {void}
       */value:function _initializeProperties(){babelHelpers.get(babelHelpers.getPrototypeOf(PropertyEffects.prototype),"_initializeProperties",this).call(this);hostStack.registerHost(this);this.__dataClientsReady=false;this.__dataPendingClients=null;this.__dataToNotify=null;this.__dataLinkedPaths=null;this.__dataHasPaths=false;// May be set on instance prior to upgrade
this.__dataCompoundStorage=this.__dataCompoundStorage||null;this.__dataHost=this.__dataHost||null;this.__dataTemp={};this.__dataClientsInitialized=false;}/**
       * Overrides `PropertyAccessors` implementation to provide a
       * more efficient implementation of initializing properties from
       * the prototype on the instance.
       *
       * @override
       * @param {Object} props Properties to initialize on the prototype
       * @return {void}
       */},{key:"_initializeProtoProperties",value:function _initializeProtoProperties(props){this.__data=Object.create(props);this.__dataPending=Object.create(props);this.__dataOld={};}/**
       * Overrides `PropertyAccessors` implementation to avoid setting
       * `_setProperty`'s `shouldNotify: true`.
       *
       * @override
       * @param {Object} props Properties to initialize on the instance
       * @return {void}
       */},{key:"_initializeInstanceProperties",value:function _initializeInstanceProperties(props){var readOnly=this[TYPES.READ_ONLY];for(var prop in props){if(!readOnly||!readOnly[prop]){this.__dataPending=this.__dataPending||{};this.__dataOld=this.__dataOld||{};this.__data[prop]=this.__dataPending[prop]=props[prop];}}}// Prototype setup ----------------------------------------
/**
     * Equivalent to static `addPropertyEffect` API but can be called on
     * an instance to add effects at runtime.  See that method for
     * full API docs.
     *
     * @param {string} property Property that should trigger the effect
     * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
     * @param {Object=} effect Effect metadata object
     * @return {void}
     * @protected
     */},{key:"_addPropertyEffect",value:function _addPropertyEffect(property,type,effect){this._createPropertyAccessor(property,type==TYPES.READ_ONLY);// effects are accumulated into arrays per property based on type
var effects=ensureOwnEffectMap(this,type)[property];if(!effects){effects=this[type][property]=[];}effects.push(effect);}/**
       * Removes the given property effect.
       *
       * @param {string} property Property the effect was associated with
       * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
       * @param {Object=} effect Effect metadata object to remove
       * @return {void}
       */},{key:"_removePropertyEffect",value:function _removePropertyEffect(property,type,effect){var effects=ensureOwnEffectMap(this,type)[property];var idx=effects.indexOf(effect);if(idx>=0){effects.splice(idx,1);}}/**
       * Returns whether the current prototype/instance has a property effect
       * of a certain type.
       *
       * @param {string} property Property name
       * @param {string=} type Effect type, from this.PROPERTY_EFFECT_TYPES
       * @return {boolean} True if the prototype/instance has an effect of this type
       * @protected
       */},{key:"_hasPropertyEffect",value:function _hasPropertyEffect(property,type){var effects=this[type];return Boolean(effects&&effects[property]);}/**
       * Returns whether the current prototype/instance has a "read only"
       * accessor for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this type
       * @protected
       */},{key:"_hasReadOnlyEffect",value:function _hasReadOnlyEffect(property){return this._hasPropertyEffect(property,TYPES.READ_ONLY);}/**
       * Returns whether the current prototype/instance has a "notify"
       * property effect for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this type
       * @protected
       */},{key:"_hasNotifyEffect",value:function _hasNotifyEffect(property){return this._hasPropertyEffect(property,TYPES.NOTIFY);}/**
       * Returns whether the current prototype/instance has a "reflect to attribute"
       * property effect for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this type
       * @protected
       */},{key:"_hasReflectEffect",value:function _hasReflectEffect(property){return this._hasPropertyEffect(property,TYPES.REFLECT);}/**
       * Returns whether the current prototype/instance has a "computed"
       * property effect for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this type
       * @protected
       */},{key:"_hasComputedEffect",value:function _hasComputedEffect(property){return this._hasPropertyEffect(property,TYPES.COMPUTE);}// Runtime ----------------------------------------
/**
     * Sets a pending property or path.  If the root property of the path in
     * question had no accessor, the path is set, otherwise it is enqueued
     * via `_setPendingProperty`.
     *
     * This function isolates relatively expensive functionality necessary
     * for the public API (`set`, `setProperties`, `notifyPath`, and property
     * change listeners via {{...}} bindings), such that it is only done
     * when paths enter the system, and not at every propagation step.  It
     * also sets a `__dataHasPaths` flag on the instance which is used to
     * fast-path slower path-matching code in the property effects host paths.
     *
     * `path` can be a path string or array of path parts as accepted by the
     * public API.
     *
     * @param {string | !Array<number|string>} path Path to set
     * @param {*} value Value to set
     * @param {boolean=} shouldNotify Set to true if this change should
     *  cause a property notification event dispatch
     * @param {boolean=} isPathNotification If the path being set is a path
     *   notification of an already changed value, as opposed to a request
     *   to set and notify the change.  In the latter `false` case, a dirty
     *   check is performed and then the value is set to the path before
     *   enqueuing the pending property change.
     * @return {boolean} Returns true if the property/path was enqueued in
     *   the pending changes bag.
     * @protected
     */},{key:"_setPendingPropertyOrPath",value:function _setPendingPropertyOrPath(path,value,shouldNotify,isPathNotification){if(isPathNotification||root(Array.isArray(path)?path[0]:path)!==path){// Dirty check changes being set to a path against the actual object,
// since this is the entry point for paths into the system; from here
// the only dirty checks are against the `__dataTemp` cache to prevent
// duplicate work in the same turn only. Note, if this was a notification
// of a change already set to a path (isPathNotification: true),
// we always let the change through and skip the `set` since it was
// already dirty checked at the point of entry and the underlying
// object has already been updated
if(!isPathNotification){var old=_get(this,path);path=/** @type {string} */_set(this,path,value);// Use property-accessor's simpler dirty check
if(!path||!babelHelpers.get(babelHelpers.getPrototypeOf(PropertyEffects.prototype),"_shouldPropertyChange",this).call(this,path,value,old)){return false;}}this.__dataHasPaths=true;if(this._setPendingProperty(/**@type{string}*/path,value,shouldNotify)){computeLinkedPaths(this,path,value);return true;}}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[path]){return this._setPendingProperty(/**@type{string}*/path,value,shouldNotify);}else{this[path]=value;}}return false;}/**
       * Applies a value to a non-Polymer element/node's property.
       *
       * The implementation makes a best-effort at binding interop:
       * Some native element properties have side-effects when
       * re-setting the same value (e.g. setting `<input>.value` resets the
       * cursor position), so we do a dirty-check before setting the value.
       * However, for better interop with non-Polymer custom elements that
       * accept objects, we explicitly re-set object changes coming from the
       * Polymer world (which may include deep object changes without the
       * top reference changing), erring on the side of providing more
       * information.
       *
       * Users may override this method to provide alternate approaches.
       *
       * @param {!Node} node The node to set a property on
       * @param {string} prop The property to set
       * @param {*} value The value to set
       * @return {void}
       * @protected
       */},{key:"_setUnmanagedPropertyToNode",value:function _setUnmanagedPropertyToNode(node,prop,value){// It is a judgment call that resetting primitives is
// "bad" and resettings objects is also "good"; alternatively we could
// implement a whitelist of tag & property values that should never
// be reset (e.g. <input>.value && <select>.value)
if(value!==node[prop]||babelHelpers.typeof(value)=='object'){node[prop]=value;}}/**
       * Overrides the `PropertiesChanged` implementation to introduce special
       * dirty check logic depending on the property & value being set:
       *
       * 1. Any value set to a path (e.g. 'obj.prop': 42 or 'obj.prop': {...})
       *    Stored in `__dataTemp`, dirty checked against `__dataTemp`
       * 2. Object set to simple property (e.g. 'prop': {...})
       *    Stored in `__dataTemp` and `__data`, dirty checked against
       *    `__dataTemp` by default implementation of `_shouldPropertyChange`
       * 3. Primitive value set to simple property (e.g. 'prop': 42)
       *    Stored in `__data`, dirty checked against `__data`
       *
       * The dirty-check is important to prevent cycles due to two-way
       * notification, but paths and objects are only dirty checked against any
       * previous value set during this turn via a "temporary cache" that is
       * cleared when the last `_propertiesChanged` exits. This is so:
       * a. any cached array paths (e.g. 'array.3.prop') may be invalidated
       *    due to array mutations like shift/unshift/splice; this is fine
       *    since path changes are dirty-checked at user entry points like `set`
       * b. dirty-checking for objects only lasts one turn to allow the user
       *    to mutate the object in-place and re-set it with the same identity
       *    and have all sub-properties re-propagated in a subsequent turn.
       *
       * The temp cache is not necessarily sufficient to prevent invalid array
       * paths, since a splice can happen during the same turn (with pathological
       * user code); we could introduce a "fixup" for temporarily cached array
       * paths if needed: https://github.com/Polymer/polymer/issues/4227
       *
       * @override
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @param {boolean=} shouldNotify True if property should fire notification
       *   event (applies only for `notify: true` properties)
       * @return {boolean} Returns true if the property changed
       */},{key:"_setPendingProperty",value:function _setPendingProperty(property,value,shouldNotify){var propIsPath=this.__dataHasPaths&&isPath(property);var prevProps=propIsPath?this.__dataTemp:this.__data;if(this._shouldPropertyChange(property,value,prevProps[property])){if(!this.__dataPending){this.__dataPending={};this.__dataOld={};}// Ensure old is captured from the last turn
if(!(property in this.__dataOld)){this.__dataOld[property]=this.__data[property];}// Paths are stored in temporary cache (cleared at end of turn),
// which is used for dirty-checking, all others stored in __data
if(propIsPath){this.__dataTemp[property]=value;}else{this.__data[property]=value;}// All changes go into pending property bag, passed to _propertiesChanged
this.__dataPending[property]=value;// Track properties that should notify separately
if(propIsPath||this[TYPES.NOTIFY]&&this[TYPES.NOTIFY][property]){this.__dataToNotify=this.__dataToNotify||{};this.__dataToNotify[property]=shouldNotify;}return true;}return false;}/**
       * Overrides base implementation to ensure all accessors set `shouldNotify`
       * to true, for per-property notification tracking.
       *
       * @override
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @return {void}
       */},{key:"_setProperty",value:function _setProperty(property,value){if(this._setPendingProperty(property,value,true)){this._invalidateProperties();}}/**
       * Overrides `PropertyAccessor`'s default async queuing of
       * `_propertiesChanged`: if `__dataReady` is false (has not yet been
       * manually flushed), the function no-ops; otherwise flushes
       * `_propertiesChanged` synchronously.
       *
       * @override
       * @return {void}
       */},{key:"_invalidateProperties",value:function _invalidateProperties(){if(this.__dataReady){this._flushProperties();}}/**
       * Enqueues the given client on a list of pending clients, whose
       * pending property changes can later be flushed via a call to
       * `_flushClients`.
       *
       * @param {Object} client PropertyEffects client to enqueue
       * @return {void}
       * @protected
       */},{key:"_enqueueClient",value:function _enqueueClient(client){this.__dataPendingClients=this.__dataPendingClients||[];if(client!==this){this.__dataPendingClients.push(client);}}/**
       * Overrides superclass implementation.
       *
       * @return {void}
       * @protected
       */},{key:"_flushProperties",value:function _flushProperties(){this.__dataCounter++;babelHelpers.get(babelHelpers.getPrototypeOf(PropertyEffects.prototype),"_flushProperties",this).call(this);this.__dataCounter--;}/**
       * Flushes any clients previously enqueued via `_enqueueClient`, causing
       * their `_flushProperties` method to run.
       *
       * @return {void}
       * @protected
       */},{key:"_flushClients",value:function _flushClients(){if(!this.__dataClientsReady){this.__dataClientsReady=true;this._readyClients();// Override point where accessors are turned on; importantly,
// this is after clients have fully readied, providing a guarantee
// that any property effects occur only after all clients are ready.
this.__dataReady=true;}else{this.__enableOrFlushClients();}}// NOTE: We ensure clients either enable or flush as appropriate. This
// handles two corner cases:
// (1) clients flush properly when connected/enabled before the host
// enables; e.g.
//   (a) Templatize stamps with no properties and does not flush and
//   (b) the instance is inserted into dom and
//   (c) then the instance flushes.
// (2) clients enable properly when not connected/enabled when the host
// flushes; e.g.
//   (a) a template is runtime stamped and not yet connected/enabled
//   (b) a host sets a property, causing stamped dom to flush
//   (c) the stamped dom enables.
},{key:"__enableOrFlushClients",value:function __enableOrFlushClients(){var clients=this.__dataPendingClients;if(clients){this.__dataPendingClients=null;for(var _i13=0;_i13<clients.length;_i13++){var client=clients[_i13];if(!client.__dataEnabled){client._enableProperties();}else if(client.__dataPending){client._flushProperties();}}}}/**
       * Perform any initial setup on client dom. Called before the first
       * `_flushProperties` call on client dom and before any element
       * observers are called.
       *
       * @return {void}
       * @protected
       */},{key:"_readyClients",value:function _readyClients(){this.__enableOrFlushClients();}/**
       * Sets a bag of property changes to this instance, and
       * synchronously processes all effects of the properties as a batch.
       *
       * Property names must be simple properties, not paths.  Batched
       * path propagation is not supported.
       *
       * @param {Object} props Bag of one or more key-value pairs whose key is
       *   a property and value is the new value to set for that property.
       * @param {boolean=} setReadOnly When true, any private values set in
       *   `props` will be set. By default, `setProperties` will not set
       *   `readOnly: true` root properties.
       * @return {void}
       * @public
       */},{key:"setProperties",value:function setProperties(props,setReadOnly){for(var _path in props){if(setReadOnly||!this[TYPES.READ_ONLY]||!this[TYPES.READ_ONLY][_path]){//TODO(kschaaf): explicitly disallow paths in setProperty?
// wildcard observers currently only pass the first changed path
// in the `info` object, and you could do some odd things batching
// paths, e.g. {'foo.bar': {...}, 'foo': null}
this._setPendingPropertyOrPath(_path,props[_path],true);}}this._invalidateProperties();}/**
       * Overrides `PropertyAccessors` so that property accessor
       * side effects are not enabled until after client dom is fully ready.
       * Also calls `_flushClients` callback to ensure client dom is enabled
       * that was not enabled as a result of flushing properties.
       *
       * @override
       * @return {void}
       */},{key:"ready",value:function ready(){// It is important that `super.ready()` is not called here as it
// immediately turns on accessors. Instead, we wait until `readyClients`
// to enable accessors to provide a guarantee that clients are ready
// before processing any accessors side effects.
this._flushProperties();// If no data was pending, `_flushProperties` will not `flushClients`
// so ensure this is done.
if(!this.__dataClientsReady){this._flushClients();}// Before ready, client notifications do not trigger _flushProperties.
// Therefore a flush is necessary here if data has been set.
if(this.__dataPending){this._flushProperties();}}/**
       * Implements `PropertyAccessors`'s properties changed callback.
       *
       * Runs each class of effects for the batch of changed properties in
       * a specific order (compute, propagate, reflect, observe, notify).
       *
       * @param {!Object} currentProps Bag of all current accessor values
       * @param {?Object} changedProps Bag of properties changed since the last
       *   call to `_propertiesChanged`
       * @param {?Object} oldProps Bag of previous values for each property
       *   in `changedProps`
       * @return {void}
       */},{key:"_propertiesChanged",value:function _propertiesChanged(currentProps,changedProps,oldProps){// ----------------------------
// let c = Object.getOwnPropertyNames(changedProps || {});
// window.debug && console.group(this.localName + '#' + this.id + ': ' + c);
// if (window.debug) { debugger; }
// ----------------------------
var hasPaths=this.__dataHasPaths;this.__dataHasPaths=false;// Compute properties
runComputedEffects(this,changedProps,oldProps,hasPaths);// Clear notify properties prior to possible reentry (propagate, observe),
// but after computing effects have a chance to add to them
var notifyProps=this.__dataToNotify;this.__dataToNotify=null;// Propagate properties to clients
this._propagatePropertyChanges(changedProps,oldProps,hasPaths);// Flush clients
this._flushClients();// Reflect properties
runEffects(this,this[TYPES.REFLECT],changedProps,oldProps,hasPaths);// Observe properties
runEffects(this,this[TYPES.OBSERVE],changedProps,oldProps,hasPaths);// Notify properties to host
if(notifyProps){runNotifyEffects(this,notifyProps,changedProps,oldProps,hasPaths);}// Clear temporary cache at end of turn
if(this.__dataCounter==1){this.__dataTemp={};}// ----------------------------
// window.debug && console.groupEnd(this.localName + '#' + this.id + ': ' + c);
// ----------------------------
}/**
       * Called to propagate any property changes to stamped template nodes
       * managed by this element.
       *
       * @param {Object} changedProps Bag of changed properties
       * @param {Object} oldProps Bag of previous values for changed properties
       * @param {boolean} hasPaths True with `props` contains one or more paths
       * @return {void}
       * @protected
       */},{key:"_propagatePropertyChanges",value:function _propagatePropertyChanges(changedProps,oldProps,hasPaths){if(this[TYPES.PROPAGATE]){runEffects(this,this[TYPES.PROPAGATE],changedProps,oldProps,hasPaths);}var templateInfo=this.__templateInfo;while(templateInfo){runEffects(this,templateInfo.propertyEffects,changedProps,oldProps,hasPaths,templateInfo.nodeList);templateInfo=templateInfo.nextTemplateInfo;}}/**
       * Aliases one data path as another, such that path notifications from one
       * are routed to the other.
       *
       * @param {string | !Array<string|number>} to Target path to link.
       * @param {string | !Array<string|number>} from Source path to link.
       * @return {void}
       * @public
       */},{key:"linkPaths",value:function linkPaths(to,from){to=normalize(to);from=normalize(from);this.__dataLinkedPaths=this.__dataLinkedPaths||{};this.__dataLinkedPaths[to]=from;}/**
       * Removes a data path alias previously established with `_linkPaths`.
       *
       * Note, the path to unlink should be the target (`to`) used when
       * linking the paths.
       *
       * @param {string | !Array<string|number>} path Target path to unlink.
       * @return {void}
       * @public
       */},{key:"unlinkPaths",value:function unlinkPaths(path){path=normalize(path);if(this.__dataLinkedPaths){delete this.__dataLinkedPaths[path];}}/**
       * Notify that an array has changed.
       *
       * Example:
       *
       *     this.items = [ {name: 'Jim'}, {name: 'Todd'}, {name: 'Bill'} ];
       *     ...
       *     this.items.splice(1, 1, {name: 'Sam'});
       *     this.items.push({name: 'Bob'});
       *     this.notifySplices('items', [
       *       { index: 1, removed: [{name: 'Todd'}], addedCount: 1, object: this.items, type: 'splice' },
       *       { index: 3, removed: [], addedCount: 1, object: this.items, type: 'splice'}
       *     ]);
       *
       * @param {string} path Path that should be notified.
       * @param {Array} splices Array of splice records indicating ordered
       *   changes that occurred to the array. Each record should have the
       *   following fields:
       *    * index: index at which the change occurred
       *    * removed: array of items that were removed from this index
       *    * addedCount: number of new items added at this index
       *    * object: a reference to the array in question
       *    * type: the string literal 'splice'
       *
       *   Note that splice records _must_ be normalized such that they are
       *   reported in index order (raw results from `Object.observe` are not
       *   ordered and must be normalized/merged before notifying).
       * @return {void}
       * @public
      */},{key:"notifySplices",value:function notifySplices(path,splices){var info={path:''};var array=/** @type {Array} */_get(this,path,info);_notifySplices(this,array,info.path,splices);}/**
       * Convenience method for reading a value from a path.
       *
       * Note, if any part in the path is undefined, this method returns
       * `undefined` (this method does not throw when dereferencing undefined
       * paths).
       *
       * @param {(string|!Array<(string|number)>)} path Path to the value
       *   to read.  The path may be specified as a string (e.g. `foo.bar.baz`)
       *   or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
       *   bracketed expressions are not supported; string-based path parts
       *   *must* be separated by dots.  Note that when dereferencing array
       *   indices, the index may be used as a dotted part directly
       *   (e.g. `users.12.name` or `['users', 12, 'name']`).
       * @param {Object=} root Root object from which the path is evaluated.
       * @return {*} Value at the path, or `undefined` if any part of the path
       *   is undefined.
       * @public
       */},{key:"get",value:function get(path,root$$1){return _get(root$$1||this,path);}/**
       * Convenience method for setting a value to a path and notifying any
       * elements bound to the same path.
       *
       * Note, if any part in the path except for the last is undefined,
       * this method does nothing (this method does not throw when
       * dereferencing undefined paths).
       *
       * @param {(string|!Array<(string|number)>)} path Path to the value
       *   to write.  The path may be specified as a string (e.g. `'foo.bar.baz'`)
       *   or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
       *   bracketed expressions are not supported; string-based path parts
       *   *must* be separated by dots.  Note that when dereferencing array
       *   indices, the index may be used as a dotted part directly
       *   (e.g. `'users.12.name'` or `['users', 12, 'name']`).
       * @param {*} value Value to set at the specified path.
       * @param {Object=} root Root object from which the path is evaluated.
       *   When specified, no notification will occur.
       * @return {void}
       * @public
      */},{key:"set",value:function set(path,value,root$$1){if(root$$1){_set(root$$1,path,value);}else{if(!this[TYPES.READ_ONLY]||!this[TYPES.READ_ONLY][/** @type {string} */path]){if(this._setPendingPropertyOrPath(path,value,true)){this._invalidateProperties();}}}}/**
       * Adds items onto the end of the array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.push`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @param {string | !Array<string|number>} path Path to array.
       * @param {...*} items Items to push onto array
       * @return {number} New length of the array.
       * @public
       */},{key:"push",value:function push(path){var info={path:''};var array=/** @type {Array}*/_get(this,path,info);var len=array.length;for(var _len=arguments.length,items=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){items[_key-1]=arguments[_key];}var ret=array.push.apply(array,items);if(items.length){notifySplice(this,array,info.path,len,items.length,[]);}return ret;}/**
       * Removes an item from the end of array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.pop`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @param {string | !Array<string|number>} path Path to array.
       * @return {*} Item that was removed.
       * @public
       */},{key:"pop",value:function pop(path){var info={path:''};var array=/** @type {Array} */_get(this,path,info);var hadLength=Boolean(array.length);var ret=array.pop();if(hadLength){notifySplice(this,array,info.path,array.length,0,[ret]);}return ret;}/**
       * Starting from the start index specified, removes 0 or more items
       * from the array and inserts 0 or more new items in their place.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.splice`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @param {string | !Array<string|number>} path Path to array.
       * @param {number} start Index from which to start removing/inserting.
       * @param {number=} deleteCount Number of items to remove.
       * @param {...*} items Items to insert into array.
       * @return {Array} Array of removed items.
       * @public
       */},{key:"splice",value:function splice(path,start,deleteCount){for(var _len2=arguments.length,items=new Array(_len2>3?_len2-3:0),_key2=3;_key2<_len2;_key2++){items[_key2-3]=arguments[_key2];}var info={path:''};var array=/** @type {Array} */_get(this,path,info);// Normalize fancy native splice handling of crazy start values
if(start<0){start=array.length-Math.floor(-start);}else if(start){start=Math.floor(start);}// array.splice does different things based on the number of arguments
// you pass in. Therefore, array.splice(0) and array.splice(0, undefined)
// do different things. In the former, the whole array is cleared. In the
// latter, no items are removed.
// This means that we need to detect whether 1. one of the arguments
// is actually passed in and then 2. determine how many arguments
// we should pass on to the native array.splice
//
var ret;// Omit any additional arguments if they were not passed in
if(arguments.length===2){ret=array.splice(start);// Either start was undefined and the others were defined, but in this
// case we can safely pass on all arguments
//
// Note: this includes the case where none of the arguments were passed in,
// e.g. this.splice('array'). However, if both start and deleteCount
// are undefined, array.splice will not modify the array (as expected)
}else{ret=array.splice.apply(array,[start,deleteCount].concat(items));}// At the end, check whether any items were passed in (e.g. insertions)
// or if the return array contains items (e.g. deletions).
// Only notify if items were added or deleted.
if(items.length||ret.length){notifySplice(this,array,info.path,start,items.length,ret);}return ret;}/**
       * Removes an item from the beginning of array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.pop`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @param {string | !Array<string|number>} path Path to array.
       * @return {*} Item that was removed.
       * @public
       */},{key:"shift",value:function shift(path){var info={path:''};var array=/** @type {Array} */_get(this,path,info);var hadLength=Boolean(array.length);var ret=array.shift();if(hadLength){notifySplice(this,array,info.path,0,0,[ret]);}return ret;}/**
       * Adds items onto the beginning of the array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.push`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @param {string | !Array<string|number>} path Path to array.
       * @param {...*} items Items to insert info array
       * @return {number} New length of the array.
       * @public
       */},{key:"unshift",value:function unshift(path){var info={path:''};var array=/** @type {Array} */_get(this,path,info);for(var _len3=arguments.length,items=new Array(_len3>1?_len3-1:0),_key3=1;_key3<_len3;_key3++){items[_key3-1]=arguments[_key3];}var ret=array.unshift.apply(array,items);if(items.length){notifySplice(this,array,info.path,0,items.length,[]);}return ret;}/**
       * Notify that a path has changed.
       *
       * Example:
       *
       *     this.item.user.name = 'Bob';
       *     this.notifyPath('item.user.name');
       *
       * @param {string} path Path that should be notified.
       * @param {*=} value Value at the path (optional).
       * @return {void}
       * @public
      */},{key:"notifyPath",value:function notifyPath(path,value){/** @type {string} */var propPath;if(arguments.length==1){// Get value if not supplied
var info={path:''};value=_get(this,path,info);propPath=info.path;}else if(Array.isArray(path)){// Normalize path if needed
propPath=normalize(path);}else{propPath=/** @type{string} */path;}if(this._setPendingPropertyOrPath(propPath,value,true,true)){this._invalidateProperties();}}/**
       * Equivalent to static `createReadOnlyProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} property Property name
       * @param {boolean=} protectedSetter Creates a custom protected setter
       *   when `true`.
       * @return {void}
       * @protected
       */},{key:"_createReadOnlyProperty",value:function _createReadOnlyProperty(property,protectedSetter){this._addPropertyEffect(property,TYPES.READ_ONLY);if(protectedSetter){this['_set'+upper(property)]=/** @this {PropertyEffects} */function(value){this._setProperty(property,value);};}}/**
       * Equivalent to static `createPropertyObserver` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} property Property name
       * @param {string|function(*,*)} method Function or name of observer method to call
       * @param {boolean=} dynamicFn Whether the method name should be included as
       *   a dependency to the effect.
       * @return {void}
       * @protected
       */},{key:"_createPropertyObserver",value:function _createPropertyObserver(property,method,dynamicFn){var info={property:property,method:method,dynamicFn:Boolean(dynamicFn)};this._addPropertyEffect(property,TYPES.OBSERVE,{fn:runObserverEffect,info:info,trigger:{name:property}});if(dynamicFn){this._addPropertyEffect(/** @type {string} */method,TYPES.OBSERVE,{fn:runObserverEffect,info:info,trigger:{name:method}});}}/**
       * Equivalent to static `createMethodObserver` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating
       *   whether method names should be included as a dependency to the effect.
       * @return {void}
       * @protected
       */},{key:"_createMethodObserver",value:function _createMethodObserver(expression,dynamicFn){var sig=parseMethod(expression);if(!sig){throw new Error("Malformed observer expression '"+expression+"'");}createMethodEffect(this,sig,TYPES.OBSERVE,runMethodEffect,null,dynamicFn);}/**
       * Equivalent to static `createNotifyingProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} property Property name
       * @return {void}
       * @protected
       */},{key:"_createNotifyingProperty",value:function _createNotifyingProperty(property){this._addPropertyEffect(property,TYPES.NOTIFY,{fn:runNotifyEffect,info:{eventName:camelToDashCase(property)+'-changed',property:property}});}/**
       * Equivalent to static `createReflectedProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} property Property name
       * @return {void}
       * @protected
       */},{key:"_createReflectedProperty",value:function _createReflectedProperty(property){var attr=this.constructor.attributeNameForProperty(property);if(attr[0]==='-'){console.warn('Property '+property+' cannot be reflected to attribute '+attr+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.');}else{this._addPropertyEffect(property,TYPES.REFLECT,{fn:runReflectEffect,info:{attrName:attr}});}}/**
       * Equivalent to static `createComputedProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} property Name of computed property to set
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating
       *   whether method names should be included as a dependency to the effect.
       * @return {void}
       * @protected
       */},{key:"_createComputedProperty",value:function _createComputedProperty(property,expression,dynamicFn){var sig=parseMethod(expression);if(!sig){throw new Error("Malformed computed expression '"+expression+"'");}createMethodEffect(this,sig,TYPES.COMPUTE,runComputedEffect,property,dynamicFn);}/**
       * Gather the argument values for a method specified in the provided array
       * of argument metadata.
       *
       * The `path` and `value` arguments are used to fill in wildcard descriptor
       * when the method is being called as a result of a path notification.
       *
       * @param {!Array<!MethodArg>} args Array of argument metadata
       * @param {string} path Property/path name that triggered the method effect
       * @param {Object} props Bag of current property changes
       * @return {Array<*>} Array of argument values
       * @private
       */},{key:"_marshalArgs",value:function _marshalArgs(args,path,props){var data=this.__data;var values=[];for(var _i14=0,l=args.length;_i14<l;_i14++){var arg=args[_i14];var name=arg.name;var v=void 0;if(arg.literal){v=arg.value;}else{if(arg.structured){v=_get(data,name);// when data is not stored e.g. `splices`
if(v===undefined){v=props[name];}}else{v=data[name];}}if(arg.wildcard){// Only send the actual path changed info if the change that
// caused the observer to run matched the wildcard
var baseChanged=name.indexOf(path+'.')===0;var matches$$1=path.indexOf(name)===0&&!baseChanged;values[_i14]={path:matches$$1?path:name,value:matches$$1?props[path]:v,base:v};}else{values[_i14]=v;}}return values;}// -- static class methods ------------
/**
     * Ensures an accessor exists for the specified property, and adds
     * to a list of "property effects" that will run when the accessor for
     * the specified property is set.  Effects are grouped by "type", which
     * roughly corresponds to a phase in effect processing.  The effect
     * metadata should be in the following form:
     *
     *     {
     *       fn: effectFunction, // Reference to function to call to perform effect
     *       info: { ... }       // Effect metadata passed to function
     *       trigger: {          // Optional triggering metadata; if not provided
     *         name: string      // the property is treated as a wildcard
     *         structured: boolean
     *         wildcard: boolean
     *       }
     *     }
     *
     * Effects are called from `_propertiesChanged` in the following order by
     * type:
     *
     * 1. COMPUTE
     * 2. PROPAGATE
     * 3. REFLECT
     * 4. OBSERVE
     * 5. NOTIFY
     *
     * Effect functions are called with the following signature:
     *
     *     effectFunction(inst, path, props, oldProps, info, hasPaths)
     *
     * @param {string} property Property that should trigger the effect
     * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
     * @param {Object=} effect Effect metadata object
     * @return {void}
     * @protected
     */},{key:"_bindTemplate",// -- binding ----------------------------------------------
/**
     * Equivalent to static `bindTemplate` API but can be called on
     * an instance to add effects at runtime.  See that method for
     * full API docs.
     *
     * This method may be called on the prototype (for prototypical template
     * binding, to avoid creating accessors every instance) once per prototype,
     * and will be called with `runtimeBinding: true` by `_stampTemplate` to
     * create and link an instance of the template metadata associated with a
     * particular stamping.
     *
     * @param {!HTMLTemplateElement} template Template containing binding
     *   bindings
     * @param {boolean=} instanceBinding When false (default), performs
     *   "prototypical" binding of the template and overwrites any previously
     *   bound template for the class. When true (as passed from
     *   `_stampTemplate`), the template info is instanced and linked into
     *   the list of bound templates.
     * @return {!TemplateInfo} Template metadata object; for `runtimeBinding`,
     *   this is an instance of the prototypical template info
     * @protected
     */value:function _bindTemplate(template,instanceBinding){var templateInfo=this.constructor._parseTemplate(template);var wasPreBound=this.__templateInfo==templateInfo;// Optimization: since this is called twice for proto-bound templates,
// don't attempt to recreate accessors if this template was pre-bound
if(!wasPreBound){for(var prop in templateInfo.propertyEffects){this._createPropertyAccessor(prop);}}if(instanceBinding){// For instance-time binding, create instance of template metadata
// and link into list of templates if necessary
templateInfo=/** @type {!TemplateInfo} */Object.create(templateInfo);templateInfo.wasPreBound=wasPreBound;if(!wasPreBound&&this.__templateInfo){var last=this.__templateInfoLast||this.__templateInfo;this.__templateInfoLast=last.nextTemplateInfo=templateInfo;templateInfo.previousTemplateInfo=last;return templateInfo;}}return this.__templateInfo=templateInfo;}/**
       * Adds a property effect to the given template metadata, which is run
       * at the "propagate" stage of `_propertiesChanged` when the template
       * has been bound to the element via `_bindTemplate`.
       *
       * The `effect` object should match the format in `_addPropertyEffect`.
       *
       * @param {Object} templateInfo Template metadata to add effect to
       * @param {string} prop Property that should trigger the effect
       * @param {Object=} effect Effect metadata object
       * @return {void}
       * @protected
       */},{key:"_stampTemplate",/**
       * Stamps the provided template and performs instance-time setup for
       * Polymer template features, including data bindings, declarative event
       * listeners, and the `this.$` map of `id`'s to nodes.  A document fragment
       * is returned containing the stamped DOM, ready for insertion into the
       * DOM.
       *
       * This method may be called more than once; however note that due to
       * `shadycss` polyfill limitations, only styles from templates prepared
       * using `ShadyCSS.prepareTemplate` will be correctly polyfilled (scoped
       * to the shadow root and support CSS custom properties), and note that
       * `ShadyCSS.prepareTemplate` may only be called once per element. As such,
       * any styles required by in runtime-stamped templates must be included
       * in the main element template.
       *
       * @param {!HTMLTemplateElement} template Template to stamp
       * @return {!StampedTemplate} Cloned template content
       * @override
       * @protected
       */value:function _stampTemplate(template){// Ensures that created dom is `_enqueueClient`'d to this element so
// that it can be flushed on next call to `_flushProperties`
hostStack.beginHosting(this);var dom=babelHelpers.get(babelHelpers.getPrototypeOf(PropertyEffects.prototype),"_stampTemplate",this).call(this,template);hostStack.endHosting(this);var templateInfo=/** @type {!TemplateInfo} */this._bindTemplate(template,true);// Add template-instance-specific data to instanced templateInfo
templateInfo.nodeList=dom.nodeList;// Capture child nodes to allow unstamping of non-prototypical templates
if(!templateInfo.wasPreBound){var nodes=templateInfo.childNodes=[];for(var n=dom.firstChild;n;n=n.nextSibling){nodes.push(n);}}dom.templateInfo=templateInfo;// Setup compound storage, 2-way listeners, and dataHost for bindings
setupBindings(this,templateInfo);// Flush properties into template nodes if already booted
if(this.__dataReady){runEffects(this,templateInfo.propertyEffects,this.__data,null,false,templateInfo.nodeList);}return dom;}/**
       * Removes and unbinds the nodes previously contained in the provided
       * DocumentFragment returned from `_stampTemplate`.
       *
       * @param {!StampedTemplate} dom DocumentFragment previously returned
       *   from `_stampTemplate` associated with the nodes to be removed
       * @return {void}
       * @protected
       */},{key:"_removeBoundDom",value:function _removeBoundDom(dom){// Unlink template info
var templateInfo=dom.templateInfo;if(templateInfo.previousTemplateInfo){templateInfo.previousTemplateInfo.nextTemplateInfo=templateInfo.nextTemplateInfo;}if(templateInfo.nextTemplateInfo){templateInfo.nextTemplateInfo.previousTemplateInfo=templateInfo.previousTemplateInfo;}if(this.__templateInfoLast==templateInfo){this.__templateInfoLast=templateInfo.previousTemplateInfo;}templateInfo.previousTemplateInfo=templateInfo.nextTemplateInfo=null;// Remove stamped nodes
var nodes=templateInfo.childNodes;for(var _i15=0;_i15<nodes.length;_i15++){var node=nodes[_i15];node.parentNode.removeChild(node);}}/**
       * Overrides default `TemplateStamp` implementation to add support for
       * parsing bindings from `TextNode`'s' `textContent`.  A `bindings`
       * array is added to `nodeInfo` and populated with binding metadata
       * with information capturing the binding target, and a `parts` array
       * with one or more metadata objects capturing the source(s) of the
       * binding.
       *
       * @override
       * @param {Node} node Node to parse
       * @param {TemplateInfo} templateInfo Template metadata for current template
       * @param {NodeInfo} nodeInfo Node metadata for current template node
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       */},{key:"PROPERTY_EFFECT_TYPES",get:function get(){return TYPES;}}],[{key:"addPropertyEffect",value:function addPropertyEffect(property,type,effect){this.prototype._addPropertyEffect(property,type,effect);}/**
       * Creates a single-property observer for the given property.
       *
       * @param {string} property Property name
       * @param {string|function(*,*)} method Function or name of observer method to call
       * @param {boolean=} dynamicFn Whether the method name should be included as
       *   a dependency to the effect.
       * @return {void}
       * @protected
       */},{key:"createPropertyObserver",value:function createPropertyObserver(property,method,dynamicFn){this.prototype._createPropertyObserver(property,method,dynamicFn);}/**
       * Creates a multi-property "method observer" based on the provided
       * expression, which should be a string in the form of a normal JavaScript
       * function signature: `'methodName(arg1, [..., argn])'`.  Each argument
       * should correspond to a property or path in the context of this
       * prototype (or instance), or may be a literal string or number.
       *
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating
       * @return {void}
       *   whether method names should be included as a dependency to the effect.
       * @protected
       */},{key:"createMethodObserver",value:function createMethodObserver(expression,dynamicFn){this.prototype._createMethodObserver(expression,dynamicFn);}/**
       * Causes the setter for the given property to dispatch `<property>-changed`
       * events to notify of changes to the property.
       *
       * @param {string} property Property name
       * @return {void}
       * @protected
       */},{key:"createNotifyingProperty",value:function createNotifyingProperty(property){this.prototype._createNotifyingProperty(property);}/**
       * Creates a read-only accessor for the given property.
       *
       * To set the property, use the protected `_setProperty` API.
       * To create a custom protected setter (e.g. `_setMyProp()` for
       * property `myProp`), pass `true` for `protectedSetter`.
       *
       * Note, if the property will have other property effects, this method
       * should be called first, before adding other effects.
       *
       * @param {string} property Property name
       * @param {boolean=} protectedSetter Creates a custom protected setter
       *   when `true`.
       * @return {void}
       * @protected
       */},{key:"createReadOnlyProperty",value:function createReadOnlyProperty(property,protectedSetter){this.prototype._createReadOnlyProperty(property,protectedSetter);}/**
       * Causes the setter for the given property to reflect the property value
       * to a (dash-cased) attribute of the same name.
       *
       * @param {string} property Property name
       * @return {void}
       * @protected
       */},{key:"createReflectedProperty",value:function createReflectedProperty(property){this.prototype._createReflectedProperty(property);}/**
       * Creates a computed property whose value is set to the result of the
       * method described by the given `expression` each time one or more
       * arguments to the method changes.  The expression should be a string
       * in the form of a normal JavaScript function signature:
       * `'methodName(arg1, [..., argn])'`
       *
       * @param {string} property Name of computed property to set
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating whether
       *   method names should be included as a dependency to the effect.
       * @return {void}
       * @protected
       */},{key:"createComputedProperty",value:function createComputedProperty(property,expression,dynamicFn){this.prototype._createComputedProperty(property,expression,dynamicFn);}/**
       * Parses the provided template to ensure binding effects are created
       * for them, and then ensures property accessors are created for any
       * dependent properties in the template.  Binding effects for bound
       * templates are stored in a linked list on the instance so that
       * templates can be efficiently stamped and unstamped.
       *
       * @param {!HTMLTemplateElement} template Template containing binding
       *   bindings
       * @return {!TemplateInfo} Template metadata object
       * @protected
       */},{key:"bindTemplate",value:function bindTemplate(template){return this.prototype._bindTemplate(template);}},{key:"_addTemplatePropertyEffect",value:function _addTemplatePropertyEffect(templateInfo,prop,effect){var hostProps=templateInfo.hostProps=templateInfo.hostProps||{};hostProps[prop]=true;var effects=templateInfo.propertyEffects=templateInfo.propertyEffects||{};var propEffects=effects[prop]=effects[prop]||[];propEffects.push(effect);}},{key:"_parseTemplateNode",value:function _parseTemplateNode(node,templateInfo,nodeInfo){var noted=babelHelpers.get(babelHelpers.getPrototypeOf(PropertyEffects),"_parseTemplateNode",this).call(this,node,templateInfo,nodeInfo);if(node.nodeType===Node.TEXT_NODE){var parts=this._parseBindings(node.textContent,templateInfo);if(parts){// Initialize the textContent with any literal parts
// NOTE: default to a space here so the textNode remains; some browsers
// (IE) omit an empty textNode following cloneNode/importNode.
node.textContent=literalFromParts(parts)||' ';addBinding(this,templateInfo,nodeInfo,'text','textContent',parts);noted=true;}}return noted;}/**
       * Overrides default `TemplateStamp` implementation to add support for
       * parsing bindings from attributes.  A `bindings`
       * array is added to `nodeInfo` and populated with binding metadata
       * with information capturing the binding target, and a `parts` array
       * with one or more metadata objects capturing the source(s) of the
       * binding.
       *
       * @override
       * @param {Element} node Node to parse
       * @param {TemplateInfo} templateInfo Template metadata for current template
       * @param {NodeInfo} nodeInfo Node metadata for current template node
       * @param {string} name Attribute name
       * @param {string} value Attribute value
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       */},{key:"_parseTemplateNodeAttribute",value:function _parseTemplateNodeAttribute(node,templateInfo,nodeInfo,name,value){var parts=this._parseBindings(value,templateInfo);if(parts){// Attribute or property
var origName=name;var kind='property';// The only way we see a capital letter here is if the attr has
// a capital letter in it per spec. In this case, to make sure
// this binding works, we go ahead and make the binding to the attribute.
if(capitalAttributeRegex.test(name)){kind='attribute';}else if(name[name.length-1]=='$'){name=name.slice(0,-1);kind='attribute';}// Initialize attribute bindings with any literal parts
var literal=literalFromParts(parts);if(literal&&kind=='attribute'){node.setAttribute(name,literal);}// Clear attribute before removing, since IE won't allow removing
// `value` attribute if it previously had a value (can't
// unconditionally set '' before removing since attributes with `$`
// can't be set using setAttribute)
if(node.localName==='input'&&origName==='value'){node.setAttribute(origName,'');}// Remove annotation
node.removeAttribute(origName);// Case hackery: attributes are lower-case, but bind targets
// (properties) are case sensitive. Gambit is to map dash-case to
// camel-case: `foo-bar` becomes `fooBar`.
// Attribute bindings are excepted.
if(kind==='property'){name=dashToCamelCase(name);}addBinding(this,templateInfo,nodeInfo,kind,name,parts,literal);return true;}else{return babelHelpers.get(babelHelpers.getPrototypeOf(PropertyEffects),"_parseTemplateNodeAttribute",this).call(this,node,templateInfo,nodeInfo,name,value);}}/**
       * Overrides default `TemplateStamp` implementation to add support for
       * binding the properties that a nested template depends on to the template
       * as `_host_<property>`.
       *
       * @override
       * @param {Node} node Node to parse
       * @param {TemplateInfo} templateInfo Template metadata for current template
       * @param {NodeInfo} nodeInfo Node metadata for current template node
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       */},{key:"_parseTemplateNestedTemplate",value:function _parseTemplateNestedTemplate(node,templateInfo,nodeInfo){var noted=babelHelpers.get(babelHelpers.getPrototypeOf(PropertyEffects),"_parseTemplateNestedTemplate",this).call(this,node,templateInfo,nodeInfo);// Merge host props into outer template and add bindings
var hostProps=nodeInfo.templateInfo.hostProps;var mode='{';for(var source in hostProps){var parts=[{mode:mode,source:source,dependencies:[source]}];addBinding(this,templateInfo,nodeInfo,'property','_host_'+source,parts);}return noted;}/**
       * Called to parse text in a template (either attribute values or
       * textContent) into binding metadata.
       *
       * Any overrides of this method should return an array of binding part
       * metadata  representing one or more bindings found in the provided text
       * and any "literal" text in between.  Any non-literal parts will be passed
       * to `_evaluateBinding` when any dependencies change.  The only required
       * fields of each "part" in the returned array are as follows:
       *
       * - `dependencies` - Array containing trigger metadata for each property
       *   that should trigger the binding to update
       * - `literal` - String containing text if the part represents a literal;
       *   in this case no `dependencies` are needed
       *
       * Additional metadata for use by `_evaluateBinding` may be provided in
       * each part object as needed.
       *
       * The default implementation handles the following types of bindings
       * (one or more may be intermixed with literal strings):
       * - Property binding: `[[prop]]`
       * - Path binding: `[[object.prop]]`
       * - Negated property or path bindings: `[[!prop]]` or `[[!object.prop]]`
       * - Two-way property or path bindings (supports negation):
       *   `{{prop}}`, `{{object.prop}}`, `{{!prop}}` or `{{!object.prop}}`
       * - Inline computed method (supports negation):
       *   `[[compute(a, 'literal', b)]]`, `[[!compute(a, 'literal', b)]]`
       *
       * The default implementation uses a regular expression for best
       * performance. However, the regular expression uses a white-list of
       * allowed characters in a data-binding, which causes problems for
       * data-bindings that do use characters not in this white-list.
       *
       * Instead of updating the white-list with all allowed characters,
       * there is a StrictBindingParser (see lib/mixins/strict-binding-parser)
       * that uses a state machine instead. This state machine is able to handle
       * all characters. However, it is slightly less performant, therefore we
       * extracted it into a separate optional mixin.
       *
       * @param {string} text Text to parse from attribute or textContent
       * @param {Object} templateInfo Current template metadata
       * @return {Array<!BindingPart>} Array of binding part metadata
       * @protected
       */},{key:"_parseBindings",value:function _parseBindings(text,templateInfo){var parts=[];var lastIndex=0;var m;// Example: "literal1{{prop}}literal2[[!compute(foo,bar)]]final"
// Regex matches:
//        Iteration 1:  Iteration 2:
// m[1]: '{{'          '[['
// m[2]: ''            '!'
// m[3]: 'prop'        'compute(foo,bar)'
while((m=bindingRegex.exec(text))!==null){// Add literal part
if(m.index>lastIndex){parts.push({literal:text.slice(lastIndex,m.index)});}// Add binding part
var mode=m[1][0];var negate=Boolean(m[2]);var source=m[3].trim();var customEvent=false,notifyEvent='',colon=-1;if(mode=='{'&&(colon=source.indexOf('::'))>0){notifyEvent=source.substring(colon+2);source=source.substring(0,colon);customEvent=true;}var signature=parseMethod(source);var dependencies=[];if(signature){// Inline computed function
var args=signature.args,methodName=signature.methodName;for(var _i16=0;_i16<args.length;_i16++){var arg=args[_i16];if(!arg.literal){dependencies.push(arg);}}var dynamicFns=templateInfo.dynamicFns;if(dynamicFns&&dynamicFns[methodName]||signature.static){dependencies.push(methodName);signature.dynamicFn=true;}}else{// Property or path
dependencies.push(source);}parts.push({source:source,mode:mode,negate:negate,customEvent:customEvent,signature:signature,dependencies:dependencies,event:notifyEvent});lastIndex=bindingRegex.lastIndex;}// Add a final literal part
if(lastIndex&&lastIndex<text.length){var literal=text.substring(lastIndex);if(literal){parts.push({literal:literal});}}if(parts.length){return parts;}else{return null;}}/**
       * Called to evaluate a previously parsed binding part based on a set of
       * one or more changed dependencies.
       *
       * @param {this} inst Element that should be used as scope for
       *   binding dependencies
       * @param {BindingPart} part Binding part metadata
       * @param {string} path Property/path that triggered this effect
       * @param {Object} props Bag of current property changes
       * @param {Object} oldProps Bag of previous values for changed properties
       * @param {boolean} hasPaths True with `props` contains one or more paths
       * @return {*} Value the binding part evaluated to
       * @protected
       */},{key:"_evaluateBinding",value:function _evaluateBinding(inst,part,path,props,oldProps,hasPaths){var value;if(part.signature){value=runMethodEffect(inst,path,props,oldProps,part.signature);}else if(path!=part.source){value=_get(inst,part.source);}else{if(hasPaths&&isPath(path)){value=_get(inst,path);}else{value=inst.__data[path];}}if(part.negate){value=!value;}return value;}}]);return PropertyEffects;}(propertyEffectsBase);// make a typing for closure :P
PropertyEffectsType=PropertyEffects;return PropertyEffects;});/**
     * Helper api for enqueuing client dom created by a host element.
     *
     * By default elements are flushed via `_flushProperties` when
     * `connectedCallback` is called. Elements attach their client dom to
     * themselves at `ready` time which results from this first flush.
     * This provides an ordering guarantee that the client dom an element
     * creates is flushed before the element itself (i.e. client `ready`
     * fires before host `ready`).
     *
     * However, if `_flushProperties` is called *before* an element is connected,
     * as for example `Templatize` does, this ordering guarantee cannot be
     * satisfied because no elements are connected. (Note: Bound elements that
     * receive data do become enqueued clients and are properly ordered but
     * unbound elements are not.)
     *
     * To maintain the desired "client before host" ordering guarantee for this
     * case we rely on the "host stack. Client nodes registers themselves with
     * the creating host element when created. This ensures that all client dom
     * is readied in the proper order, maintaining the desired guarantee.
     *
     * @private
     */_exports.PropertyEffects=PropertyEffects;var HostStack=/*#__PURE__*/function(){function HostStack(){babelHelpers.classCallCheck(this,HostStack);this.stack=[];}/**
     * @param {*} inst Instance to add to hostStack
     * @return {void}
     */babelHelpers.createClass(HostStack,[{key:"registerHost",value:function registerHost(inst){if(this.stack.length){var host=this.stack[this.stack.length-1];host._enqueueClient(inst);}}/**
     * @param {*} inst Instance to begin hosting
     * @return {void}
     */},{key:"beginHosting",value:function beginHosting(inst){this.stack.push(inst);}/**
     * @param {*} inst Instance to end hosting
     * @return {void}
     */},{key:"endHosting",value:function endHosting(inst){var stackLen=this.stack.length;if(stackLen&&this.stack[stackLen-1]==inst){this.stack.pop();}}}]);return HostStack;}();var hostStack=new HostStack();var propertyEffects={PropertyEffects:PropertyEffects};_exports.$propertyEffects=propertyEffects;function normalizeProperties(props){var output={};for(var _p9 in props){var o=props[_p9];output[_p9]=typeof o==='function'?{type:o}:o;}return output;}/**
   * Mixin that provides a minimal starting point to using the PropertiesChanged
   * mixin by providing a mechanism to declare properties in a static
   * getter (e.g. static get properties() { return { foo: String } }). Changes
   * are reported via the `_propertiesChanged` method.
   *
   * This mixin provides no specific support for rendering. Users are expected
   * to create a ShadowRoot and put content into it and update it in whatever
   * way makes sense. This can be done in reaction to properties changing by
   * implementing `_propertiesChanged`.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertiesChanged
   * @summary Mixin that provides a minimal starting point for using
   * the PropertiesChanged mixin by providing a declarative `properties` object.
   */var PropertiesMixin=dedupingMixin(function(superClass){/**
   * @constructor
   * @implements {Polymer_PropertiesChanged}
   * @private
   */var base=PropertiesChanged(superClass);/**
                                                  * Returns the super class constructor for the given class, if it is an
                                                  * instance of the PropertiesMixin.
                                                  *
                                                  * @param {!PropertiesMixinConstructor} constructor PropertiesMixin constructor
                                                  * @return {?PropertiesMixinConstructor} Super class constructor
                                                  */function superPropertiesClass(constructor){var superCtor=Object.getPrototypeOf(constructor);// Note, the `PropertiesMixin` class below only refers to the class
// generated by this call to the mixin; the instanceof test only works
// because the mixin is deduped and guaranteed only to apply once, hence
// all constructors in a proto chain will see the same `PropertiesMixin`
return babelHelpers.instanceof(superCtor.prototype,PropertiesMixin)?/** @type {!PropertiesMixinConstructor} */superCtor:null;}/**
     * Returns a memoized version of the `properties` object for the
     * given class. Properties not in object format are converted to at
     * least {type}.
     *
     * @param {PropertiesMixinConstructor} constructor PropertiesMixin constructor
     * @return {Object} Memoized properties object
     */function ownProperties(constructor){if(!constructor.hasOwnProperty(JSCompiler_renameProperty('__ownProperties',constructor))){var _props2=null;if(constructor.hasOwnProperty(JSCompiler_renameProperty('properties',constructor))){var properties=constructor.properties;if(properties){_props2=normalizeProperties(properties);}}constructor.__ownProperties=_props2;}return constructor.__ownProperties;}/**
     * @polymer
     * @mixinClass
     * @extends {base}
     * @implements {Polymer_PropertiesMixin}
     * @unrestricted
     */var PropertiesMixin=/*#__PURE__*/function(_base2){babelHelpers.inherits(PropertiesMixin,_base2);function PropertiesMixin(){babelHelpers.classCallCheck(this,PropertiesMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PropertiesMixin).apply(this,arguments));}babelHelpers.createClass(PropertiesMixin,[{key:"_initializeProperties",/**
       * Overrides `PropertiesChanged` method and adds a call to
       * `finalize` which lazily configures the element's property accessors.
       * @override
       * @return {void}
       */value:function _initializeProperties(){this.constructor.finalize();babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesMixin.prototype),"_initializeProperties",this).call(this);}/**
       * Called when the element is added to a document.
       * Calls `_enableProperties` to turn on property system from
       * `PropertiesChanged`.
       * @suppress {missingProperties} Super may or may not implement the callback
       * @return {void}
       * @override
       */},{key:"connectedCallback",value:function connectedCallback(){if(babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesMixin.prototype),"connectedCallback",this)){babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesMixin.prototype),"connectedCallback",this).call(this);}this._enableProperties();}/**
       * Called when the element is removed from a document
       * @suppress {missingProperties} Super may or may not implement the callback
       * @return {void}
       * @override
       */},{key:"disconnectedCallback",value:function disconnectedCallback(){if(babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesMixin.prototype),"disconnectedCallback",this)){babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesMixin.prototype),"disconnectedCallback",this).call(this);}}}],[{key:"finalize",/**
       * Finalizes an element definition, including ensuring any super classes
       * are also finalized. This includes ensuring property
       * accessors exist on the element prototype. This method calls
       * `_finalizeClass` to finalize each constructor in the prototype chain.
       * @return {void}
       */value:function finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty('__finalized',this))){var superCtor=superPropertiesClass(/** @type {!PropertiesMixinConstructor} */this);if(superCtor){superCtor.finalize();}this.__finalized=true;this._finalizeClass();}}/**
       * Finalize an element class. This includes ensuring property
       * accessors exist on the element prototype. This method is called by
       * `finalize` and finalizes the class constructor.
       *
       * @protected
       */},{key:"_finalizeClass",value:function _finalizeClass(){var props=ownProperties(/** @type {!PropertiesMixinConstructor} */this);if(props){this.createProperties(props);}}/**
       * Returns a memoized version of all properties, including those inherited
       * from super classes. Properties not in object format are converted to
       * at least {type}.
       *
       * @return {Object} Object containing properties for this class
       * @protected
       */},{key:"typeForProperty",/**
       * Overrides `PropertiesChanged` method to return type specified in the
       * static `properties` object for the given property.
       * @param {string} name Name of property
       * @return {*} Type to which to deserialize attribute
       *
       * @protected
       */value:function typeForProperty(name){var info=this._properties[name];return info&&info.type;}},{key:"observedAttributes",/**
     * Implements standard custom elements getter to observes the attributes
     * listed in `properties`.
     * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
     */get:function get(){var _this10=this;var props=this._properties;return props?Object.keys(props).map(function(p){return _this10.attributeNameForProperty(p);}):[];}},{key:"_properties",get:function get(){if(!this.hasOwnProperty(JSCompiler_renameProperty('__properties',this))){var superCtor=superPropertiesClass(/** @type {!PropertiesMixinConstructor} */this);this.__properties=Object.assign({},superCtor&&superCtor._properties,ownProperties(/** @type {PropertiesMixinConstructor} */this));}return this.__properties;}}]);return PropertiesMixin;}(base);return PropertiesMixin;});_exports.PropertiesMixin=PropertiesMixin;var propertiesMixin={PropertiesMixin:PropertiesMixin};_exports.$propertiesMixin=propertiesMixin;var bundledImportMeta=babelHelpers.objectSpread({},meta,{url:new URL('../node_modules/%40polymer/polymer/lib/mixins/element-mixin.js',meta.url).href});var version='3.0.5';/**
                                 * Element class mixin that provides the core API for Polymer's meta-programming
                                 * features including template stamping, data-binding, attribute deserialization,
                                 * and property change observation.
                                 *
                                 * Subclassers may provide the following static getters to return metadata
                                 * used to configure Polymer's features for the class:
                                 *
                                 * - `static get is()`: When the template is provided via a `dom-module`,
                                 *   users should return the `dom-module` id from a static `is` getter.  If
                                 *   no template is needed or the template is provided directly via the
                                 *   `template` getter, there is no need to define `is` for the element.
                                 *
                                 * - `static get template()`: Users may provide the template directly (as
                                 *   opposed to via `dom-module`) by implementing a static `template` getter.
                                 *   The getter must return an `HTMLTemplateElement`.
                                 *
                                 * - `static get properties()`: Should return an object describing
                                 *   property-related metadata used by Polymer features (key: property name
                                 *   value: object containing property metadata). Valid keys in per-property
                                 *   metadata include:
                                 *   - `type` (String|Number|Object|Array|...): Used by
                                 *     `attributeChangedCallback` to determine how string-based attributes
                                 *     are deserialized to JavaScript property values.
                                 *   - `notify` (boolean): Causes a change in the property to fire a
                                 *     non-bubbling event called `<property>-changed`. Elements that have
                                 *     enabled two-way binding to the property use this event to observe changes.
                                 *   - `readOnly` (boolean): Creates a getter for the property, but no setter.
                                 *     To set a read-only property, use the private setter method
                                 *     `_setProperty(property, value)`.
                                 *   - `observer` (string): Observer method name that will be called when
                                 *     the property changes. The arguments of the method are
                                 *     `(value, previousValue)`.
                                 *   - `computed` (string): String describing method and dependent properties
                                 *     for computing the value of this property (e.g. `'computeFoo(bar, zot)'`).
                                 *     Computed properties are read-only by default and can only be changed
                                 *     via the return value of the computing method.
                                 *
                                 * - `static get observers()`: Array of strings describing multi-property
                                 *   observer methods and their dependent properties (e.g.
                                 *   `'observeABC(a, b, c)'`).
                                 *
                                 * The base class provides default implementations for the following standard
                                 * custom element lifecycle callbacks; users may override these, but should
                                 * call the super method to ensure
                                 * - `constructor`: Run when the element is created or upgraded
                                 * - `connectedCallback`: Run each time the element is connected to the
                                 *   document
                                 * - `disconnectedCallback`: Run each time the element is disconnected from
                                 *   the document
                                 * - `attributeChangedCallback`: Run each time an attribute in
                                 *   `observedAttributes` is set or removed (note: this element's default
                                 *   `observedAttributes` implementation will automatically return an array
                                 *   of dash-cased attributes based on `properties`)
                                 *
                                 * @mixinFunction
                                 * @polymer
                                 * @appliesMixin PropertyEffects
                                 * @appliesMixin PropertiesMixin
                                 * @property rootPath {string} Set to the value of `rootPath`,
                                 *   which defaults to the main document path
                                 * @property importPath {string} Set to the value of the class's static
                                 *   `importPath` property, which defaults to the path of this element's
                                 *   `dom-module` (when `is` is used), but can be overridden for other
                                 *   import strategies.
                                 * @summary Element class mixin that provides the core API for Polymer's
                                 * meta-programming features.
                                 */_exports.version$1=_exports.version=version;var ElementMixin=dedupingMixin(function(base){/**
   * @constructor
   * @extends {base}
   * @implements {Polymer_PropertyEffects}
   * @implements {Polymer_PropertiesMixin}
   * @private
   */var polymerElementBase=PropertiesMixin(PropertyEffects(base));/**
                                                                         * Returns a list of properties with default values.
                                                                         * This list is created as an optimization since it is a subset of
                                                                         * the list returned from `_properties`.
                                                                         * This list is used in `_initializeProperties` to set property defaults.
                                                                         *
                                                                         * @param {PolymerElementConstructor} constructor Element class
                                                                         * @return {PolymerElementProperties} Flattened properties for this class
                                                                         *   that have default values
                                                                         * @private
                                                                         */function propertyDefaults(constructor){if(!constructor.hasOwnProperty(JSCompiler_renameProperty('__propertyDefaults',constructor))){constructor.__propertyDefaults=null;var _props3=constructor._properties;for(var _p10 in _props3){var info=_props3[_p10];if('value'in info){constructor.__propertyDefaults=constructor.__propertyDefaults||{};constructor.__propertyDefaults[_p10]=info;}}}return constructor.__propertyDefaults;}/**
     * Returns a memoized version of the `observers` array.
     * @param {PolymerElementConstructor} constructor Element class
     * @return {Array} Array containing own observers for the given class
     * @protected
     */function ownObservers(constructor){if(!constructor.hasOwnProperty(JSCompiler_renameProperty('__ownObservers',constructor))){constructor.__ownObservers=constructor.hasOwnProperty(JSCompiler_renameProperty('observers',constructor))?/** @type {PolymerElementConstructor} */constructor.observers:null;}return constructor.__ownObservers;}/**
     * Creates effects for a property.
     *
     * Note, once a property has been set to
     * `readOnly`, `computed`, `reflectToAttribute`, or `notify`
     * these values may not be changed. For example, a subclass cannot
     * alter these settings. However, additional `observers` may be added
     * by subclasses.
     *
     * The info object should contain property metadata as follows:
     *
     * * `type`: {function} type to which an attribute matching the property
     * is deserialized. Note the property is camel-cased from a dash-cased
     * attribute. For example, 'foo-bar' attribute is deserialized to a
     * property named 'fooBar'.
     *
     * * `readOnly`: {boolean} creates a readOnly property and
     * makes a private setter for the private of the form '_setFoo' for a
     * property 'foo',
     *
     * * `computed`: {string} creates a computed property. A computed property
     * is also automatically set to `readOnly: true`. The value is calculated
     * by running a method and arguments parsed from the given string. For
     * example 'compute(foo)' will compute a given property when the
     * 'foo' property changes by executing the 'compute' method. This method
     * must return the computed value.
     *
     * * `reflectToAttribute`: {boolean} If true, the property value is reflected
     * to an attribute of the same name. Note, the attribute is dash-cased
     * so a property named 'fooBar' is reflected as 'foo-bar'.
     *
     * * `notify`: {boolean} sends a non-bubbling notification event when
     * the property changes. For example, a property named 'foo' sends an
     * event named 'foo-changed' with `event.detail` set to the value of
     * the property.
     *
     * * observer: {string} name of a method that runs when the property
     * changes. The arguments of the method are (value, previousValue).
     *
     * Note: Users may want control over modifying property
     * effects via subclassing. For example, a user might want to make a
     * reflectToAttribute property not do so in a subclass. We've chosen to
     * disable this because it leads to additional complication.
     * For example, a readOnly effect generates a special setter. If a subclass
     * disables the effect, the setter would fail unexpectedly.
     * Based on feedback, we may want to try to make effects more malleable
     * and/or provide an advanced api for manipulating them.
     * Also consider adding warnings when an effect cannot be changed.
     *
     * @param {!PolymerElement} proto Element class prototype to add accessors
     *   and effects to
     * @param {string} name Name of the property.
     * @param {Object} info Info object from which to create property effects.
     * Supported keys:
     * @param {Object} allProps Flattened map of all properties defined in this
     *   element (including inherited properties)
     * @return {void}
     * @private
     */function createPropertyFromConfig(proto,name,info,allProps){// computed forces readOnly...
if(info.computed){info.readOnly=true;}// Note, since all computed properties are readOnly, this prevents
// adding additional computed property effects (which leads to a confusing
// setup where multiple triggers for setting a property)
// While we do have `hasComputedEffect` this is set on the property's
// dependencies rather than itself.
if(info.computed&&!proto._hasReadOnlyEffect(name)){proto._createComputedProperty(name,info.computed,allProps);}if(info.readOnly&&!proto._hasReadOnlyEffect(name)){proto._createReadOnlyProperty(name,!info.computed);}if(info.reflectToAttribute&&!proto._hasReflectEffect(name)){proto._createReflectedProperty(name);}if(info.notify&&!proto._hasNotifyEffect(name)){proto._createNotifyingProperty(name);}// always add observer
if(info.observer){proto._createPropertyObserver(name,info.observer,allProps[info.observer]);}// always create the mapping from attribute back to property for deserialization.
proto._addPropertyToAttributeMap(name);}/**
     * Process all style elements in the element template. Styles with the
     * `include` attribute are processed such that any styles in
     * the associated "style modules" are included in the element template.
     * @param {PolymerElementConstructor} klass Element class
     * @param {!HTMLTemplateElement} template Template to process
     * @param {string} is Name of element
     * @param {string} baseURI Base URI for element
     * @private
     */function processElementStyles(klass,template,is,baseURI){var templateStyles=template.content.querySelectorAll('style');var stylesWithImports=stylesFromTemplate(template);// insert styles from <link rel="import" type="css"> at the top of the template
var linkedStyles=stylesFromModuleImports(is);var firstTemplateChild=template.content.firstElementChild;for(var idx=0;idx<linkedStyles.length;idx++){var s=linkedStyles[idx];s.textContent=klass._processStyleText(s.textContent,baseURI);template.content.insertBefore(s,firstTemplateChild);}// keep track of the last "concrete" style in the template we have encountered
var templateStyleIndex=0;// ensure all gathered styles are actually in this template.
for(var _i17=0;_i17<stylesWithImports.length;_i17++){var _s=stylesWithImports[_i17];var templateStyle=templateStyles[templateStyleIndex];// if the style is not in this template, it's been "included" and
// we put a clone of it in the template before the style that included it
if(templateStyle!==_s){_s=_s.cloneNode(true);templateStyle.parentNode.insertBefore(_s,templateStyle);}else{templateStyleIndex++;}_s.textContent=klass._processStyleText(_s.textContent,baseURI);}if(window.ShadyCSS){window.ShadyCSS.prepareTemplate(template,is);}}/**
     * Look up template from dom-module for element
     *
     * @param {!string} is Element name to look up
     * @return {!HTMLTemplateElement} Template found in dom module, or
     *   undefined if not found
     * @protected
     */function getTemplateFromDomModule(is){var template=null;// Under strictTemplatePolicy in 3.x+, dom-module lookup is only allowed
// when opted-in via allowTemplateFromDomModule
if(is&&(!strictTemplatePolicy||allowTemplateFromDomModule)){template=DomModule.import(is,'template');// Under strictTemplatePolicy, require any element with an `is`
// specified to have a dom-module
if(strictTemplatePolicy&&!template){throw new Error("strictTemplatePolicy: expecting dom-module or null template for ".concat(is));}}return template;}/**
     * @polymer
     * @mixinClass
     * @unrestricted
     * @implements {Polymer_ElementMixin}
     */var PolymerElement=/*#__PURE__*/function(_polymerElementBase){babelHelpers.inherits(PolymerElement,_polymerElementBase);babelHelpers.createClass(PolymerElement,null,[{key:"_finalizeClass",/**
       * Override of PropertiesMixin _finalizeClass to create observers and
       * find the template.
       * @return {void}
       * @protected
       * @override
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       */value:function _finalizeClass(){babelHelpers.get(babelHelpers.getPrototypeOf(PolymerElement),"_finalizeClass",this).call(this);if(this.hasOwnProperty(JSCompiler_renameProperty('is',this))&&this.is){register(this.prototype);}var observers=ownObservers(this);if(observers){this.createObservers(observers,this._properties);}// note: create "working" template that is finalized at instance time
var template=/** @type {PolymerElementConstructor} */this.template;if(template){if(typeof template==='string'){console.error('template getter must return HTMLTemplateElement');template=null;}else{template=template.cloneNode(true);}}this.prototype._template=template;}/**
       * Override of PropertiesChanged createProperties to create accessors
       * and property effects for all of the properties.
       * @return {void}
       * @protected
       * @override
       */},{key:"createProperties",value:function createProperties(props){for(var _p11 in props){createPropertyFromConfig(this.prototype,_p11,props[_p11],props);}}/**
       * Creates observers for the given `observers` array.
       * Leverages `PropertyEffects` to create observers.
       * @param {Object} observers Array of observer descriptors for
       *   this class
       * @param {Object} dynamicFns Object containing keys for any properties
       *   that are functions and should trigger the effect when the function
       *   reference is changed
       * @return {void}
       * @protected
       */},{key:"createObservers",value:function createObservers(observers,dynamicFns){var proto=this.prototype;for(var _i18=0;_i18<observers.length;_i18++){proto._createMethodObserver(observers[_i18],dynamicFns);}}/**
       * Returns the template that will be stamped into this element's shadow root.
       *
       * If a `static get is()` getter is defined, the default implementation
       * will return the first `<template>` in a `dom-module` whose `id`
       * matches this element's `is`.
       *
       * Users may override this getter to return an arbitrary template
       * (in which case the `is` getter is unnecessary). The template returned
       * must be an `HTMLTemplateElement`.
       *
       * Note that when subclassing, if the super class overrode the default
       * implementation and the subclass would like to provide an alternate
       * template via a `dom-module`, it should override this getter and
       * return `DomModule.import(this.is, 'template')`.
       *
       * If a subclass would like to modify the super class template, it should
       * clone it rather than modify it in place.  If the getter does expensive
       * work such as cloning/modifying a template, it should memoize the
       * template for maximum performance:
       *
       *   let memoizedTemplate;
       *   class MySubClass extends MySuperClass {
       *     static get template() {
       *       if (!memoizedTemplate) {
       *         memoizedTemplate = super.template.cloneNode(true);
       *         let subContent = document.createElement('div');
       *         subContent.textContent = 'This came from MySubClass';
       *         memoizedTemplate.content.appendChild(subContent);
       *       }
       *       return memoizedTemplate;
       *     }
       *   }
       *
       * @return {!HTMLTemplateElement|string} Template to be stamped
       */},{key:"polymerElementVersion",/**
     * Current Polymer version in Semver notation.
     * @type {string} Semver notation of the current version of Polymer.
     */get:function get(){return version;}},{key:"template",get:function get(){// Explanation of template-related properties:
// - constructor.template (this getter): the template for the class.
//     This can come from the prototype (for legacy elements), from a
//     dom-module, or from the super class's template (or can be overridden
//     altogether by the user)
// - constructor._template: memoized version of constructor.template
// - prototype._template: working template for the element, which will be
//     parsed and modified in place. It is a cloned version of
//     constructor.template, saved in _finalizeClass(). Note that before
//     this getter is called, for legacy elements this could be from a
//     _template field on the info object passed to Polymer(), a behavior,
//     or set in registered(); once the static getter runs, a clone of it
//     will overwrite it on the prototype as the working template.
if(!this.hasOwnProperty(JSCompiler_renameProperty('_template',this))){this._template=// If user has put template on prototype (e.g. in legacy via registered
// callback or info object), prefer that first
this.prototype.hasOwnProperty(JSCompiler_renameProperty('_template',this.prototype))?this.prototype._template:// Look in dom-module associated with this element's is
getTemplateFromDomModule(/** @type {PolymerElementConstructor}*/this.is)||// Next look for superclass template (call the super impl this
// way so that `this` points to the superclass)
Object.getPrototypeOf(/** @type {PolymerElementConstructor}*/this.prototype).constructor.template;}return this._template;}/**
       * Set the template.
       *
       * @param {!HTMLTemplateElement|string} value Template to set.
       */,set:function set(value){this._template=value;}/**
       * Path matching the url from which the element was imported.
       *
       * This path is used to resolve url's in template style cssText.
       * The `importPath` property is also set on element instances and can be
       * used to create bindings relative to the import path.
       *
       * For elements defined in ES modules, users should implement
       * `static get importMeta() { return import.meta; }`, and the default
       * implementation of `importPath` will  return `import.meta.url`'s path.
       * For elements defined in HTML imports, this getter will return the path
       * to the document containing a `dom-module` element matching this
       * element's static `is` property.
       *
       * Note, this path should contain a trailing `/`.
       *
       * @return {string} The import path for this element class
       * @suppress {missingProperties}
       */},{key:"importPath",get:function get(){if(!this.hasOwnProperty(JSCompiler_renameProperty('_importPath',this))){var meta=this.importMeta;if(meta){this._importPath=pathFromUrl(meta.url);}else{var module=DomModule.import(/** @type {PolymerElementConstructor} */this.is);this._importPath=module&&module.assetpath||Object.getPrototypeOf(/** @type {PolymerElementConstructor}*/this.prototype).constructor.importPath;}}return this._importPath;}}]);function PolymerElement(){var _this11;babelHelpers.classCallCheck(this,PolymerElement);_this11=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PolymerElement).call(this));/** @type {HTMLTemplateElement} */_this11._template;/** @type {string} */_this11._importPath;/** @type {string} */_this11.rootPath;/** @type {string} */_this11.importPath;/** @type {StampedTemplate | HTMLElement | ShadowRoot} */_this11.root;/** @type {!Object<string, !Element>} */_this11.$;return _this11;}/**
       * Overrides the default `PropertyAccessors` to ensure class
       * metaprogramming related to property accessors and effects has
       * completed (calls `finalize`).
       *
       * It also initializes any property defaults provided via `value` in
       * `properties` metadata.
       *
       * @return {void}
       * @override
       * @suppress {invalidCasts}
       */babelHelpers.createClass(PolymerElement,[{key:"_initializeProperties",value:function _initializeProperties(){_exports.instanceCount=instanceCount=instanceCount+1;this.constructor.finalize();// note: finalize template when we have access to `localName` to
// avoid dependence on `is` for polyfilling styling.
this.constructor._finalizeTemplate(/** @type {!HTMLElement} */this.localName);babelHelpers.get(babelHelpers.getPrototypeOf(PolymerElement.prototype),"_initializeProperties",this).call(this);// set path defaults
this.rootPath=rootPath;this.importPath=this.constructor.importPath;// apply property defaults...
var p$=propertyDefaults(this.constructor);if(!p$){return;}for(var _p12 in p$){var info=p$[_p12];// Don't set default value if there is already an own property, which
// happens when a `properties` property with default but no effects had
// a property set (e.g. bound) by its host before upgrade
if(!this.hasOwnProperty(_p12)){var value=typeof info.value=='function'?info.value.call(this):info.value;// Set via `_setProperty` if there is an accessor, to enable
// initializing readOnly property defaults
if(this._hasAccessor(_p12)){this._setPendingProperty(_p12,value,true);}else{this[_p12]=value;}}}}/**
       * Gather style text for a style element in the template.
       *
       * @param {string} cssText Text containing styling to process
       * @param {string} baseURI Base URI to rebase CSS paths against
       * @return {string} The processed CSS text
       * @protected
       */},{key:"connectedCallback",/**
       * Provides a default implementation of the standard Custom Elements
       * `connectedCallback`.
       *
       * The default implementation enables the property effects system and
       * flushes any pending properties, and updates shimmed CSS properties
       * when using the ShadyCSS scoping/custom properties polyfill.
       *
       * @suppress {missingProperties, invalidCasts} Super may or may not implement the callback
       * @return {void}
       */value:function connectedCallback(){if(window.ShadyCSS&&this._template){window.ShadyCSS.styleElement(/** @type {!HTMLElement} */this);}babelHelpers.get(babelHelpers.getPrototypeOf(PolymerElement.prototype),"connectedCallback",this).call(this);}/**
       * Stamps the element template.
       *
       * @return {void}
       * @override
       */},{key:"ready",value:function ready(){if(this._template){this.root=this._stampTemplate(this._template);this.$=this.root.$;}babelHelpers.get(babelHelpers.getPrototypeOf(PolymerElement.prototype),"ready",this).call(this);}/**
       * Implements `PropertyEffects`'s `_readyClients` call. Attaches
       * element dom by calling `_attachDom` with the dom stamped from the
       * element's template via `_stampTemplate`. Note that this allows
       * client dom to be attached to the element prior to any observers
       * running.
       *
       * @return {void}
       * @override
       */},{key:"_readyClients",value:function _readyClients(){if(this._template){this.root=this._attachDom(/** @type {StampedTemplate} */this.root);}// The super._readyClients here sets the clients initialized flag.
// We must wait to do this until after client dom is created/attached
// so that this flag can be checked to prevent notifications fired
// during this process from being handled before clients are ready.
babelHelpers.get(babelHelpers.getPrototypeOf(PolymerElement.prototype),"_readyClients",this).call(this);}/**
       * Attaches an element's stamped dom to itself. By default,
       * this method creates a `shadowRoot` and adds the dom to it.
       * However, this method may be overridden to allow an element
       * to put its dom in another location.
       *
       * @throws {Error}
       * @suppress {missingReturn}
       * @param {StampedTemplate} dom to attach to the element.
       * @return {ShadowRoot} node to which the dom has been attached.
       */},{key:"_attachDom",value:function _attachDom(dom){if(this.attachShadow){if(dom){if(!this.shadowRoot){this.attachShadow({mode:'open'});}this.shadowRoot.appendChild(dom);return this.shadowRoot;}return null;}else{throw new Error('ShadowDOM not available. '+// TODO(sorvell): move to compile-time conditional when supported
'PolymerElement can create dom as children instead of in '+'ShadowDOM by setting `this.root = this;\` before \`ready\`.');}}/**
       * When using the ShadyCSS scoping and custom property shim, causes all
       * shimmed styles in this element (and its subtree) to be updated
       * based on current custom property values.
       *
       * The optional parameter overrides inline custom property styles with an
       * object of properties where the keys are CSS properties, and the values
       * are strings.
       *
       * Example: `this.updateStyles({'--color': 'blue'})`
       *
       * These properties are retained unless a value of `null` is set.
       *
       * Note: This function does not support updating CSS mixins.
       * You can not dynamically change the value of an `@apply`.
       *
       * @param {Object=} properties Bag of custom property key/values to
       *   apply to this element.
       * @return {void}
       * @suppress {invalidCasts}
       */},{key:"updateStyles",value:function updateStyles(properties){if(window.ShadyCSS){window.ShadyCSS.styleSubtree(/** @type {!HTMLElement} */this,properties);}}/**
       * Rewrites a given URL relative to a base URL. The base URL defaults to
       * the original location of the document containing the `dom-module` for
       * this element. This method will return the same URL before and after
       * bundling.
       *
       * Note that this function performs no resolution for URLs that start
       * with `/` (absolute URLs) or `#` (hash identifiers).  For general purpose
       * URL resolution, use `window.URL`.
       *
       * @param {string} url URL to resolve.
       * @param {string=} base Optional base URL to resolve against, defaults
       * to the element's `importPath`
       * @return {string} Rewritten URL relative to base
       */},{key:"resolveUrl",value:function resolveUrl(url,base){if(!base&&this.importPath){base=_resolveUrl(this.importPath);}return _resolveUrl(url,base);}/**
       * Overrides `PropertyAccessors` to add map of dynamic functions on
       * template info, for consumption by `PropertyEffects` template binding
       * code. This map determines which method templates should have accessors
       * created for them.
       *
       * @override
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       */}],[{key:"_processStyleText",value:function _processStyleText(cssText,baseURI){return resolveCss(cssText,baseURI);}/**
      * Configures an element `proto` to function with a given `template`.
      * The element name `is` and extends `ext` must be specified for ShadyCSS
      * style scoping.
      *
      * @param {string} is Tag name (or type extension name) for this element
      * @return {void}
      * @protected
      */},{key:"_finalizeTemplate",value:function _finalizeTemplate(is){/** @const {HTMLTemplateElement} */var template=this.prototype._template;if(template&&!template.__polymerFinalized){template.__polymerFinalized=true;var importPath=this.importPath;var baseURI=importPath?_resolveUrl(importPath):'';// e.g. support `include="module-name"`, and ShadyCSS
processElementStyles(this,template,is,baseURI);this.prototype._bindTemplate(template);}}},{key:"_parseTemplateContent",value:function _parseTemplateContent(template,templateInfo,nodeInfo){templateInfo.dynamicFns=templateInfo.dynamicFns||this._properties;return babelHelpers.get(babelHelpers.getPrototypeOf(PolymerElement),"_parseTemplateContent",this).call(this,template,templateInfo,nodeInfo);}}]);return PolymerElement;}(polymerElementBase);return PolymerElement;});/**
     * Total number of Polymer element instances created.
     * @type {number}
     */_exports.ElementMixin=ElementMixin;var instanceCount=0;/**
                               * Array of Polymer element classes that have been finalized.
                               * @type {Array<PolymerElement>}
                               */_exports.instanceCount=instanceCount;var registrations=[];/**
                                  * @param {!PolymerElementConstructor} prototype Element prototype to log
                                  * @this {this}
                                  * @private
                                  */_exports.registrations=registrations;function _regLog(prototype){console.log('['+prototype.is+']: registered');}/**
   * Registers a class prototype for telemetry purposes.
   * @param {HTMLElement} prototype Element prototype to register
   * @this {this}
   * @protected
   */function register(prototype){registrations.push(prototype);}/**
   * Logs all elements registered with an `is` to the console.
   * @public
   * @this {this}
   */function dumpRegistrations(){registrations.forEach(_regLog);}/**
   * When using the ShadyCSS scoping and custom property shim, causes all
   * shimmed `styles` (via `custom-style`) in the document (and its subtree)
   * to be updated based on current custom property values.
   *
   * The optional parameter overrides inline custom property styles with an
   * object of properties where the keys are CSS properties, and the values
   * are strings.
   *
   * Example: `updateStyles({'--color': 'blue'})`
   *
   * These properties are retained unless a value of `null` is set.
   *
   * @param {Object=} props Bag of custom property key/values to
   *   apply to the document.
   * @return {void}
   */var updateStyles=function updateStyles(props){if(window.ShadyCSS){window.ShadyCSS.styleDocument(props);}};_exports.updateStyles=updateStyles;var elementMixin={version:version,ElementMixin:ElementMixin,get instanceCount(){return instanceCount;},registrations:registrations,register:register,dumpRegistrations:dumpRegistrations,updateStyles:updateStyles};_exports.$elementMixin=elementMixin;var Debouncer=/*#__PURE__*/function(){function Debouncer(){babelHelpers.classCallCheck(this,Debouncer);this._asyncModule=null;this._callback=null;this._timer=null;}/**
     * Sets the scheduler; that is, a module with the Async interface,
     * a callback and optional arguments to be passed to the run function
     * from the async module.
     *
     * @param {!AsyncInterface} asyncModule Object with Async interface.
     * @param {function()} callback Callback to run.
     * @return {void}
     */babelHelpers.createClass(Debouncer,[{key:"setConfig",value:function setConfig(asyncModule,callback){var _this12=this;this._asyncModule=asyncModule;this._callback=callback;this._timer=this._asyncModule.run(function(){_this12._timer=null;_this12._callback();});}/**
     * Cancels an active debouncer and returns a reference to itself.
     *
     * @return {void}
     */},{key:"cancel",value:function cancel(){if(this.isActive()){this._asyncModule.cancel(/** @type {number} */this._timer);this._timer=null;}}/**
     * Flushes an active debouncer and returns a reference to itself.
     *
     * @return {void}
     */},{key:"flush",value:function flush(){if(this.isActive()){this.cancel();this._callback();}}/**
     * Returns true if the debouncer is active.
     *
     * @return {boolean} True if active.
     */},{key:"isActive",value:function isActive(){return this._timer!=null;}/**
     * Creates a debouncer if no debouncer is passed as a parameter
     * or it cancels an active debouncer otherwise. The following
     * example shows how a debouncer can be called multiple times within a
     * microtask and "debounced" such that the provided callback function is
     * called once. Add this method to a custom element:
     *
     * ```js
     * import {microTask} from '@polymer/polymer/lib/utils/async.js';
     * import {Debouncer} from '@polymer/polymer/lib/utils/debounce.js';
     * // ...
     *
     * _debounceWork() {
     *   this._debounceJob = Debouncer.debounce(this._debounceJob,
     *       microTask, () => this._doWork());
     * }
     * ```
     *
     * If the `_debounceWork` method is called multiple times within the same
     * microtask, the `_doWork` function will be called only once at the next
     * microtask checkpoint.
     *
     * Note: In testing it is often convenient to avoid asynchrony. To accomplish
     * this with a debouncer, you can use `enqueueDebouncer` and
     * `flush`. For example, extend the above example by adding
     * `enqueueDebouncer(this._debounceJob)` at the end of the
     * `_debounceWork` method. Then in a test, call `flush` to ensure
     * the debouncer has completed.
     *
     * @param {Debouncer?} debouncer Debouncer object.
     * @param {!AsyncInterface} asyncModule Object with Async interface
     * @param {function()} callback Callback to run.
     * @return {!Debouncer} Returns a debouncer object.
     */}],[{key:"debounce",value:function debounce(debouncer,asyncModule,callback){if(babelHelpers.instanceof(debouncer,Debouncer)){debouncer.cancel();}else{debouncer=new Debouncer();}debouncer.setConfig(asyncModule,callback);return debouncer;}}]);return Debouncer;}();_exports.Debouncer=Debouncer;var debounce={Debouncer:Debouncer};_exports.$debounce=debounce;var HAS_NATIVE_TA=typeof document.head.style.touchAction==='string';var GESTURE_KEY='__polymerGestures';var HANDLED_OBJ='__polymerGesturesHandled';var TOUCH_ACTION='__polymerGesturesTouchAction';// radius for tap and track
var TAP_DISTANCE=25;var TRACK_DISTANCE=5;// number of last N track positions to keep
var TRACK_LENGTH=2;// Disabling "mouse" handlers for 2500ms is enough
var MOUSE_TIMEOUT=2500;var MOUSE_EVENTS=['mousedown','mousemove','mouseup','click'];// an array of bitmask values for mapping MouseEvent.which to MouseEvent.buttons
var MOUSE_WHICH_TO_BUTTONS=[0,1,4,2];var MOUSE_HAS_BUTTONS=function(){try{return new MouseEvent('test',{buttons:1}).buttons===1;}catch(e){return false;}}();/**
      * @param {string} name Possible mouse event name
      * @return {boolean} true if mouse event, false if not
      */function isMouseEvent(name){return MOUSE_EVENTS.indexOf(name)>-1;}/* eslint no-empty: ["error", { "allowEmptyCatch": true }] */ // check for passive event listeners
var SUPPORTS_PASSIVE=false;(function(){try{var opts=Object.defineProperty({},'passive',{get:function get(){SUPPORTS_PASSIVE=true;}});window.addEventListener('test',null,opts);window.removeEventListener('test',null,opts);}catch(e){}})();/**
       * Generate settings for event listeners, dependant on `passiveTouchGestures`
       *
       * @param {string} eventName Event name to determine if `{passive}` option is
       *   needed
       * @return {{passive: boolean} | undefined} Options to use for addEventListener
       *   and removeEventListener
       */function PASSIVE_TOUCH(eventName){if(isMouseEvent(eventName)||eventName==='touchend'){return;}if(HAS_NATIVE_TA&&SUPPORTS_PASSIVE&&passiveTouchGestures){return{passive:true};}else{return;}}// Check for touch-only devices
var IS_TOUCH_ONLY=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);// keep track of any labels hit by the mouseCanceller
/** @type {!Array<!HTMLLabelElement>} */var clickedLabels=[];/** @type {!Object<boolean>} */var labellable={'button':true,'input':true,'keygen':true,'meter':true,'output':true,'textarea':true,'progress':true,'select':true};// Defined at https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#enabling-and-disabling-form-controls:-the-disabled-attribute
/** @type {!Object<boolean>} */var canBeDisabled={'button':true,'command':true,'fieldset':true,'input':true,'keygen':true,'optgroup':true,'option':true,'select':true,'textarea':true};/**
    * @param {HTMLElement} el Element to check labelling status
    * @return {boolean} element can have labels
    */function canBeLabelled(el){return labellable[el.localName]||false;}/**
   * @param {HTMLElement} el Element that may be labelled.
   * @return {!Array<!HTMLLabelElement>} Relevant label for `el`
   */function matchingLabels(el){var labels=Array.prototype.slice.call(/** @type {HTMLInputElement} */el.labels||[]);// IE doesn't have `labels` and Safari doesn't populate `labels`
// if element is in a shadowroot.
// In this instance, finding the non-ancestor labels is enough,
// as the mouseCancellor code will handle ancstor labels
if(!labels.length){labels=[];var _root2=el.getRootNode();// if there is an id on `el`, check for all labels with a matching `for` attribute
if(el.id){var matching=_root2.querySelectorAll("label[for = ".concat(el.id,"]"));for(var _i19=0;_i19<matching.length;_i19++){labels.push(/** @type {!HTMLLabelElement} */matching[_i19]);}}}return labels;}// touch will make synthetic mouse events
// `preventDefault` on touchend will cancel them,
// but this breaks `<input>` focus and link clicks
// disable mouse handlers for MOUSE_TIMEOUT ms after
// a touchend to ignore synthetic mouse events
var mouseCanceller=function mouseCanceller(mouseEvent){// Check for sourceCapabilities, used to distinguish synthetic events
// if mouseEvent did not come from a device that fires touch events,
// it was made by a real mouse and should be counted
// http://wicg.github.io/InputDeviceCapabilities/#dom-inputdevicecapabilities-firestouchevents
var sc=mouseEvent.sourceCapabilities;if(sc&&!sc.firesTouchEvents){return;}// skip synthetic mouse events
mouseEvent[HANDLED_OBJ]={skip:true};// disable "ghost clicks"
if(mouseEvent.type==='click'){var clickFromLabel=false;var _path2=mouseEvent.composedPath&&mouseEvent.composedPath();if(_path2){for(var _i20=0;_i20<_path2.length;_i20++){if(_path2[_i20].nodeType===Node.ELEMENT_NODE){if(_path2[_i20].localName==='label'){clickedLabels.push(_path2[_i20]);}else if(canBeLabelled(_path2[_i20])){var ownerLabels=matchingLabels(_path2[_i20]);// check if one of the clicked labels is labelling this element
for(var j=0;j<ownerLabels.length;j++){clickFromLabel=clickFromLabel||clickedLabels.indexOf(ownerLabels[j])>-1;}}}if(_path2[_i20]===POINTERSTATE.mouse.target){return;}}}// if one of the clicked labels was labelling the target element,
// this is not a ghost click
if(clickFromLabel){return;}mouseEvent.preventDefault();mouseEvent.stopPropagation();}};/**
    * @param {boolean=} setup True to add, false to remove.
    * @return {void}
    */function setupTeardownMouseCanceller(setup){var events=IS_TOUCH_ONLY?['click']:MOUSE_EVENTS;for(var _i21=0,en;_i21<events.length;_i21++){en=events[_i21];if(setup){// reset clickLabels array
clickedLabels.length=0;document.addEventListener(en,mouseCanceller,true);}else{document.removeEventListener(en,mouseCanceller,true);}}}function ignoreMouse(e){if(!POINTERSTATE.mouse.mouseIgnoreJob){setupTeardownMouseCanceller(true);}var unset=function unset(){setupTeardownMouseCanceller();POINTERSTATE.mouse.target=null;POINTERSTATE.mouse.mouseIgnoreJob=null;};POINTERSTATE.mouse.target=e.composedPath()[0];POINTERSTATE.mouse.mouseIgnoreJob=Debouncer.debounce(POINTERSTATE.mouse.mouseIgnoreJob,timeOut.after(MOUSE_TIMEOUT),unset);}/**
   * @param {MouseEvent} ev event to test for left mouse button down
   * @return {boolean} has left mouse button down
   */function hasLeftMouseButton(ev){var type=ev.type;// exit early if the event is not a mouse event
if(!isMouseEvent(type)){return false;}// ev.button is not reliable for mousemove (0 is overloaded as both left button and no buttons)
// instead we use ev.buttons (bitmask of buttons) or fall back to ev.which (deprecated, 0 for no buttons, 1 for left button)
if(type==='mousemove'){// allow undefined for testing events
var buttons=ev.buttons===undefined?1:ev.buttons;if(babelHelpers.instanceof(ev,window.MouseEvent)&&!MOUSE_HAS_BUTTONS){buttons=MOUSE_WHICH_TO_BUTTONS[ev.which]||0;}// buttons is a bitmask, check that the left button bit is set (1)
return Boolean(buttons&1);}else{// allow undefined for testing events
var button=ev.button===undefined?0:ev.button;// ev.button is 0 in mousedown/mouseup/click for left button activation
return button===0;}}function isSyntheticClick(ev){if(ev.type==='click'){// ev.detail is 0 for HTMLElement.click in most browsers
if(ev.detail===0){return true;}// in the worst case, check that the x/y position of the click is within
// the bounding box of the target of the event
// Thanks IE 10 >:(
var t=_findOriginalTarget(ev);// make sure the target of the event is an element so we can use getBoundingClientRect,
// if not, just assume it is a synthetic click
if(!t.nodeType||/** @type {Element} */t.nodeType!==Node.ELEMENT_NODE){return true;}var bcr=/** @type {Element} */t.getBoundingClientRect();// use page x/y to account for scrolling
var x=ev.pageX,y=ev.pageY;// ev is a synthetic click if the position is outside the bounding box of the target
return!(x>=bcr.left&&x<=bcr.right&&y>=bcr.top&&y<=bcr.bottom);}return false;}var POINTERSTATE={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:false}};function firstTouchAction(ev){var ta='auto';var path=ev.composedPath&&ev.composedPath();if(path){for(var _i22=0,n;_i22<path.length;_i22++){n=path[_i22];if(n[TOUCH_ACTION]){ta=n[TOUCH_ACTION];break;}}}return ta;}function trackDocument(stateObj,movefn,upfn){stateObj.movefn=movefn;stateObj.upfn=upfn;document.addEventListener('mousemove',movefn);document.addEventListener('mouseup',upfn);}function untrackDocument(stateObj){document.removeEventListener('mousemove',stateObj.movefn);document.removeEventListener('mouseup',stateObj.upfn);stateObj.movefn=null;stateObj.upfn=null;}// use a document-wide touchend listener to start the ghost-click prevention mechanism
// Use passive event listeners, if supported, to not affect scrolling performance
document.addEventListener('touchend',ignoreMouse,SUPPORTS_PASSIVE?{passive:true}:false);/** @type {!Object<string, !GestureRecognizer>} */var gestures={};/** @type {!Array<!GestureRecognizer>} */_exports.gestures=gestures;var recognizers=[];/**
                                * Finds the element rendered on the screen at the provided coordinates.
                                *
                                * Similar to `document.elementFromPoint`, but pierces through
                                * shadow roots.
                                *
                                * @param {number} x Horizontal pixel coordinate
                                * @param {number} y Vertical pixel coordinate
                                * @return {Element} Returns the deepest shadowRoot inclusive element
                                * found at the screen position given.
                                */_exports.recognizers=recognizers;function deepTargetFind(x,y){var node=document.elementFromPoint(x,y);var next=node;// this code path is only taken when native ShadowDOM is used
// if there is a shadowroot, it may have a node at x/y
// if there is not a shadowroot, exit the loop
while(next&&next.shadowRoot&&!window.ShadyDOM){// if there is a node at x/y in the shadowroot, look deeper
var oldNext=next;next=next.shadowRoot.elementFromPoint(x,y);// on Safari, elementFromPoint may return the shadowRoot host
if(oldNext===next){break;}if(next){node=next;}}return node;}/**
   * a cheaper check than ev.composedPath()[0];
   *
   * @private
   * @param {Event|Touch} ev Event.
   * @return {EventTarget} Returns the event target.
   */function _findOriginalTarget(ev){// shadowdom
if(ev.composedPath){var targets=/** @type {!Array<!EventTarget>} */ev.composedPath();// It shouldn't be, but sometimes targets is empty (window on Safari).
return targets.length>0?targets[0]:ev.target;}// shadydom
return ev.target;}/**
   * @private
   * @param {Event} ev Event.
   * @return {void}
   */function _handleNative(ev){var handled;var type=ev.type;var node=ev.currentTarget;var gobj=node[GESTURE_KEY];if(!gobj){return;}var gs=gobj[type];if(!gs){return;}if(!ev[HANDLED_OBJ]){ev[HANDLED_OBJ]={};if(type.slice(0,5)==='touch'){ev=/** @type {TouchEvent} */ev;// eslint-disable-line no-self-assign
var t=ev.changedTouches[0];if(type==='touchstart'){// only handle the first finger
if(ev.touches.length===1){POINTERSTATE.touch.id=t.identifier;}}if(POINTERSTATE.touch.id!==t.identifier){return;}if(!HAS_NATIVE_TA){if(type==='touchstart'||type==='touchmove'){_handleTouchAction(ev);}}}}handled=ev[HANDLED_OBJ];// used to ignore synthetic mouse events
if(handled.skip){return;}// reset recognizer state
for(var _i23=0,r;_i23<recognizers.length;_i23++){r=recognizers[_i23];if(gs[r.name]&&!handled[r.name]){if(r.flow&&r.flow.start.indexOf(ev.type)>-1&&r.reset){r.reset();}}}// enforce gesture recognizer order
for(var _i24=0,_r;_i24<recognizers.length;_i24++){_r=recognizers[_i24];if(gs[_r.name]&&!handled[_r.name]){handled[_r.name]=true;_r[type](ev);}}}/**
   * @private
   * @param {TouchEvent} ev Event.
   * @return {void}
   */function _handleTouchAction(ev){var t=ev.changedTouches[0];var type=ev.type;if(type==='touchstart'){POINTERSTATE.touch.x=t.clientX;POINTERSTATE.touch.y=t.clientY;POINTERSTATE.touch.scrollDecided=false;}else if(type==='touchmove'){if(POINTERSTATE.touch.scrollDecided){return;}POINTERSTATE.touch.scrollDecided=true;var ta=firstTouchAction(ev);var shouldPrevent=false;var dx=Math.abs(POINTERSTATE.touch.x-t.clientX);var dy=Math.abs(POINTERSTATE.touch.y-t.clientY);if(!ev.cancelable){// scrolling is happening
}else if(ta==='none'){shouldPrevent=true;}else if(ta==='pan-x'){shouldPrevent=dy>dx;}else if(ta==='pan-y'){shouldPrevent=dx>dy;}if(shouldPrevent){ev.preventDefault();}else{_prevent('track');}}}/**
   * Adds an event listener to a node for the given gesture type.
   *
   * @param {!EventTarget} node Node to add listener on
   * @param {string} evType Gesture type: `down`, `up`, `track`, or `tap`
   * @param {!function(!Event):void} handler Event listener function to call
   * @return {boolean} Returns true if a gesture event listener was added.
   */function addListener(node,evType,handler){if(gestures[evType]){_add(node,evType,handler);return true;}return false;}/**
   * Removes an event listener from a node for the given gesture type.
   *
   * @param {!EventTarget} node Node to remove listener from
   * @param {string} evType Gesture type: `down`, `up`, `track`, or `tap`
   * @param {!function(!Event):void} handler Event listener function previously passed to
   *  `addListener`.
   * @return {boolean} Returns true if a gesture event listener was removed.
   */function removeListener(node,evType,handler){if(gestures[evType]){_remove(node,evType,handler);return true;}return false;}/**
   * automate the event listeners for the native events
   *
   * @private
   * @param {!EventTarget} node Node on which to add the event.
   * @param {string} evType Event type to add.
   * @param {function(!Event)} handler Event handler function.
   * @return {void}
   */function _add(node,evType,handler){var recognizer=gestures[evType];var deps=recognizer.deps;var name=recognizer.name;var gobj=node[GESTURE_KEY];if(!gobj){node[GESTURE_KEY]=gobj={};}for(var _i25=0,dep,gd;_i25<deps.length;_i25++){dep=deps[_i25];// don't add mouse handlers on iOS because they cause gray selection overlays
if(IS_TOUCH_ONLY&&isMouseEvent(dep)&&dep!=='click'){continue;}gd=gobj[dep];if(!gd){gobj[dep]=gd={_count:0};}if(gd._count===0){node.addEventListener(dep,_handleNative,PASSIVE_TOUCH(dep));}gd[name]=(gd[name]||0)+1;gd._count=(gd._count||0)+1;}node.addEventListener(evType,handler);if(recognizer.touchAction){setTouchAction(node,recognizer.touchAction);}}/**
   * automate event listener removal for native events
   *
   * @private
   * @param {!EventTarget} node Node on which to remove the event.
   * @param {string} evType Event type to remove.
   * @param {function(!Event): void} handler Event handler function.
   * @return {void}
   */function _remove(node,evType,handler){var recognizer=gestures[evType];var deps=recognizer.deps;var name=recognizer.name;var gobj=node[GESTURE_KEY];if(gobj){for(var _i26=0,dep,gd;_i26<deps.length;_i26++){dep=deps[_i26];gd=gobj[dep];if(gd&&gd[name]){gd[name]=(gd[name]||1)-1;gd._count=(gd._count||1)-1;if(gd._count===0){node.removeEventListener(dep,_handleNative,PASSIVE_TOUCH(dep));}}}}node.removeEventListener(evType,handler);}/**
   * Registers a new gesture event recognizer for adding new custom
   * gesture event types.
   *
   * @param {!GestureRecognizer} recog Gesture recognizer descriptor
   * @return {void}
   */function register$1(recog){recognizers.push(recog);for(var _i27=0;_i27<recog.emits.length;_i27++){gestures[recog.emits[_i27]]=recog;}}/**
   * @private
   * @param {string} evName Event name.
   * @return {Object} Returns the gesture for the given event name.
   */function _findRecognizerByEvent(evName){for(var _i28=0,r;_i28<recognizers.length;_i28++){r=recognizers[_i28];for(var j=0,n;j<r.emits.length;j++){n=r.emits[j];if(n===evName){return r;}}}return null;}/**
   * Sets scrolling direction on node.
   *
   * This value is checked on first move, thus it should be called prior to
   * adding event listeners.
   *
   * @param {!EventTarget} node Node to set touch action setting on
   * @param {string} value Touch action value
   * @return {void}
   */function setTouchAction(node,value){if(HAS_NATIVE_TA&&babelHelpers.instanceof(node,HTMLElement)){// NOTE: add touchAction async so that events can be added in
// custom element constructors. Otherwise we run afoul of custom
// elements restriction against settings attributes (style) in the
// constructor.
microTask.run(function(){node.style.touchAction=value;});}node[TOUCH_ACTION]=value;}/**
   * Dispatches an event on the `target` element of `type` with the given
   * `detail`.
   * @private
   * @param {!EventTarget} target The element on which to fire an event.
   * @param {string} type The type of event to fire.
   * @param {!Object=} detail The detail object to populate on the event.
   * @return {void}
   */function _fire(target,type,detail){var ev=new Event(type,{bubbles:true,cancelable:true,composed:true});ev.detail=detail;target.dispatchEvent(ev);// forward `preventDefault` in a clean way
if(ev.defaultPrevented){var preventer=detail.preventer||detail.sourceEvent;if(preventer&&preventer.preventDefault){preventer.preventDefault();}}}/**
   * Prevents the dispatch and default action of the given event name.
   *
   * @param {string} evName Event name.
   * @return {void}
   */function _prevent(evName){var recognizer=_findRecognizerByEvent(evName);if(recognizer.info){recognizer.info.prevent=true;}}/**
   * Reset the 2500ms timeout on processing mouse input after detecting touch input.
   *
   * Touch inputs create synthesized mouse inputs anywhere from 0 to 2000ms after the touch.
   * This method should only be called during testing with simulated touch inputs.
   * Calling this method in production may cause duplicate taps or other Gestures.
   *
   * @return {void}
   */function resetMouseCanceller(){if(POINTERSTATE.mouse.mouseIgnoreJob){POINTERSTATE.mouse.mouseIgnoreJob.flush();}}/* eslint-disable valid-jsdoc */register$1({name:'downup',deps:['mousedown','touchstart','touchend'],flow:{start:['mousedown','touchstart'],end:['mouseup','touchend']},emits:['down','up'],info:{movefn:null,upfn:null},/**
   * @this {GestureRecognizer}
   * @return {void}
   */reset:function reset(){untrackDocument(this.info);},/**
   * @this {GestureRecognizer}
   * @param {MouseEvent} e
   * @return {void}
   */mousedown:function mousedown(e){if(!hasLeftMouseButton(e)){return;}var t=_findOriginalTarget(e);var self=this;var movefn=function movefn(e){if(!hasLeftMouseButton(e)){downupFire('up',t,e);untrackDocument(self.info);}};var upfn=function upfn(e){if(hasLeftMouseButton(e)){downupFire('up',t,e);}untrackDocument(self.info);};trackDocument(this.info,movefn,upfn);downupFire('down',t,e);},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchstart:function touchstart(e){downupFire('down',_findOriginalTarget(e),e.changedTouches[0],e);},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchend:function touchend(e){downupFire('up',_findOriginalTarget(e),e.changedTouches[0],e);}});/**
     * @param {string} type
     * @param {EventTarget} target
     * @param {Event|Touch} event
     * @param {Event=} preventer
     * @return {void}
     */function downupFire(type,target,event,preventer){if(!target){return;}_fire(target,type,{x:event.clientX,y:event.clientY,sourceEvent:event,preventer:preventer,prevent:function prevent(e){return _prevent(e);}});}register$1({name:'track',touchAction:'none',deps:['mousedown','touchstart','touchmove','touchend'],flow:{start:['mousedown','touchstart'],end:['mouseup','touchend']},emits:['track'],info:{x:0,y:0,state:'start',started:false,moves:[],/** @this {GestureInfo} */addMove:function addMove(move){if(this.moves.length>TRACK_LENGTH){this.moves.shift();}this.moves.push(move);},movefn:null,upfn:null,prevent:false},/**
   * @this {GestureRecognizer}
   * @return {void}
   */reset:function reset(){this.info.state='start';this.info.started=false;this.info.moves=[];this.info.x=0;this.info.y=0;this.info.prevent=false;untrackDocument(this.info);},/**
   * @this {GestureRecognizer}
   * @param {MouseEvent} e
   * @return {void}
   */mousedown:function mousedown(e){if(!hasLeftMouseButton(e)){return;}var t=_findOriginalTarget(e);var self=this;var movefn=function movefn(e){var x=e.clientX,y=e.clientY;if(trackHasMovedEnough(self.info,x,y)){// first move is 'start', subsequent moves are 'move', mouseup is 'end'
self.info.state=self.info.started?e.type==='mouseup'?'end':'track':'start';if(self.info.state==='start'){// if and only if tracking, always prevent tap
_prevent('tap');}self.info.addMove({x:x,y:y});if(!hasLeftMouseButton(e)){// always fire "end"
self.info.state='end';untrackDocument(self.info);}if(t){trackFire(self.info,t,e);}self.info.started=true;}};var upfn=function upfn(e){if(self.info.started){movefn(e);}// remove the temporary listeners
untrackDocument(self.info);};// add temporary document listeners as mouse retargets
trackDocument(this.info,movefn,upfn);this.info.x=e.clientX;this.info.y=e.clientY;},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchstart:function touchstart(e){var ct=e.changedTouches[0];this.info.x=ct.clientX;this.info.y=ct.clientY;},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchmove:function touchmove(e){var t=_findOriginalTarget(e);var ct=e.changedTouches[0];var x=ct.clientX,y=ct.clientY;if(trackHasMovedEnough(this.info,x,y)){if(this.info.state==='start'){// if and only if tracking, always prevent tap
_prevent('tap');}this.info.addMove({x:x,y:y});trackFire(this.info,t,ct);this.info.state='track';this.info.started=true;}},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchend:function touchend(e){var t=_findOriginalTarget(e);var ct=e.changedTouches[0];// only trackend if track was started and not aborted
if(this.info.started){// reset started state on up
this.info.state='end';this.info.addMove({x:ct.clientX,y:ct.clientY});trackFire(this.info,t,ct);}}});/**
     * @param {!GestureInfo} info
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */function trackHasMovedEnough(info,x,y){if(info.prevent){return false;}if(info.started){return true;}var dx=Math.abs(info.x-x);var dy=Math.abs(info.y-y);return dx>=TRACK_DISTANCE||dy>=TRACK_DISTANCE;}/**
   * @param {!GestureInfo} info
   * @param {?EventTarget} target
   * @param {Touch} touch
   * @return {void}
   */function trackFire(info,target,touch){if(!target){return;}var secondlast=info.moves[info.moves.length-2];var lastmove=info.moves[info.moves.length-1];var dx=lastmove.x-info.x;var dy=lastmove.y-info.y;var ddx,ddy=0;if(secondlast){ddx=lastmove.x-secondlast.x;ddy=lastmove.y-secondlast.y;}_fire(target,'track',{state:info.state,x:touch.clientX,y:touch.clientY,dx:dx,dy:dy,ddx:ddx,ddy:ddy,sourceEvent:touch,hover:function hover(){return deepTargetFind(touch.clientX,touch.clientY);}});}register$1({name:'tap',deps:['mousedown','click','touchstart','touchend'],flow:{start:['mousedown','touchstart'],end:['click','touchend']},emits:['tap'],info:{x:NaN,y:NaN,prevent:false},/**
   * @this {GestureRecognizer}
   * @return {void}
   */reset:function reset(){this.info.x=NaN;this.info.y=NaN;this.info.prevent=false;},/**
   * @this {GestureRecognizer}
   * @param {MouseEvent} e
   * @return {void}
   */mousedown:function mousedown(e){if(hasLeftMouseButton(e)){this.info.x=e.clientX;this.info.y=e.clientY;}},/**
   * @this {GestureRecognizer}
   * @param {MouseEvent} e
   * @return {void}
   */click:function click(e){if(hasLeftMouseButton(e)){trackForward(this.info,e);}},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchstart:function touchstart(e){var touch=e.changedTouches[0];this.info.x=touch.clientX;this.info.y=touch.clientY;},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchend:function touchend(e){trackForward(this.info,e.changedTouches[0],e);}});/**
     * @param {!GestureInfo} info
     * @param {Event | Touch} e
     * @param {Event=} preventer
     * @return {void}
     */function trackForward(info,e,preventer){var dx=Math.abs(e.clientX-info.x);var dy=Math.abs(e.clientY-info.y);// find original target from `preventer` for TouchEvents, or `e` for MouseEvents
var t=_findOriginalTarget(preventer||e);if(!t||canBeDisabled[/** @type {!HTMLElement} */t.localName]&&t.hasAttribute('disabled')){return;}// dx,dy can be NaN if `click` has been simulated and there was no `down` for `start`
if(isNaN(dx)||isNaN(dy)||dx<=TAP_DISTANCE&&dy<=TAP_DISTANCE||isSyntheticClick(e)){// prevent taps from being generated if an event has canceled them
if(!info.prevent){_fire(t,'tap',{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:preventer});}}}/* eslint-enable valid-jsdoc */ /** @deprecated */var findOriginalTarget=_findOriginalTarget;/** @deprecated */_exports.findOriginalTarget=findOriginalTarget;var add=addListener;/** @deprecated */_exports.add=add;var remove=removeListener;_exports.remove=remove;var gestures$1={gestures:gestures,recognizers:recognizers,deepTargetFind:deepTargetFind,addListener:addListener,removeListener:removeListener,register:register$1,setTouchAction:setTouchAction,prevent:_prevent,resetMouseCanceller:resetMouseCanceller,findOriginalTarget:findOriginalTarget,add:add,remove:remove};_exports.$gestures=gestures$1;var GestureEventListeners=dedupingMixin(/**
                                                     * @template T
                                                     * @param {function(new:T)} superClass Class to apply mixin to.
                                                     * @return {function(new:T)} superClass with mixin applied.
                                                     */function(superClass){/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_GestureEventListeners}
   */var GestureEventListeners=/*#__PURE__*/function(_superClass3){babelHelpers.inherits(GestureEventListeners,_superClass3);function GestureEventListeners(){babelHelpers.classCallCheck(this,GestureEventListeners);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(GestureEventListeners).apply(this,arguments));}babelHelpers.createClass(GestureEventListeners,[{key:"_addEventListenerToNode",/**
     * Add the event listener to the node if it is a gestures event.
     *
     * @param {!EventTarget} node Node to add event listener to
     * @param {string} eventName Name of event
     * @param {function(!Event):void} handler Listener function to add
     * @return {void}
     * @override
     */value:function _addEventListenerToNode(node,eventName,handler){if(!addListener(node,eventName,handler)){babelHelpers.get(babelHelpers.getPrototypeOf(GestureEventListeners.prototype),"_addEventListenerToNode",this).call(this,node,eventName,handler);}}/**
       * Remove the event listener to the node if it is a gestures event.
       *
       * @param {!EventTarget} node Node to remove event listener from
       * @param {string} eventName Name of event
       * @param {function(!Event):void} handler Listener function to remove
       * @return {void}
       * @override
       */},{key:"_removeEventListenerFromNode",value:function _removeEventListenerFromNode(node,eventName,handler){if(!removeListener(node,eventName,handler)){babelHelpers.get(babelHelpers.getPrototypeOf(GestureEventListeners.prototype),"_removeEventListenerFromNode",this).call(this,node,eventName,handler);}}}]);return GestureEventListeners;}(superClass);return GestureEventListeners;});_exports.GestureEventListeners=GestureEventListeners;var gestureEventListeners={GestureEventListeners:GestureEventListeners};_exports.$gestureEventListeners=gestureEventListeners;var HOST_DIR=/:host\(:dir\((ltr|rtl)\)\)/g;var HOST_DIR_REPLACMENT=':host([dir="$1"])';var EL_DIR=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g;var EL_DIR_REPLACMENT=':host([dir="$2"]) $1';/**
                                                   * @type {!Array<!Polymer_DirMixin>}
                                                   */var DIR_INSTANCES=[];/** @type {MutationObserver} */var observer=null;var DOCUMENT_DIR='';function getRTL(){DOCUMENT_DIR=document.documentElement.getAttribute('dir');}/**
   * @param {!Polymer_DirMixin} instance Instance to set RTL status on
   */function setRTL(instance){if(!instance.__autoDirOptOut){var el=/** @type {!HTMLElement} */instance;el.setAttribute('dir',DOCUMENT_DIR);}}function updateDirection(){getRTL();DOCUMENT_DIR=document.documentElement.getAttribute('dir');for(var _i29=0;_i29<DIR_INSTANCES.length;_i29++){setRTL(DIR_INSTANCES[_i29]);}}function takeRecords(){if(observer&&observer.takeRecords().length){updateDirection();}}/**
   * Element class mixin that allows elements to use the `:dir` CSS Selector to
   * have text direction specific styling.
   *
   * With this mixin, any stylesheet provided in the template will transform
   * `:dir` into `:host([dir])` and sync direction with the page via the
   * element's `dir` attribute.
   *
   * Elements can opt out of the global page text direction by setting the `dir`
   * attribute directly in `ready()` or in HTML.
   *
   * Caveats:
   * - Applications must set `<html dir="ltr">` or `<html dir="rtl">` to sync
   *   direction
   * - Automatic left-to-right or right-to-left styling is sync'd with the
   *   `<html>` element only.
   * - Changing `dir` at runtime is supported.
   * - Opting out of the global direction styling is permanent
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertyAccessors
   */var DirMixin=dedupingMixin(function(base){if(!observer){getRTL();observer=new MutationObserver(updateDirection);observer.observe(document.documentElement,{attributes:true,attributeFilter:['dir']});}/**
     * @constructor
     * @extends {base}
     * @implements {Polymer_PropertyAccessors}
     * @private
     */var elementBase=PropertyAccessors(base);/**
                                                * @polymer
                                                * @mixinClass
                                                * @implements {Polymer_DirMixin}
                                                */var Dir=/*#__PURE__*/function(_elementBase){babelHelpers.inherits(Dir,_elementBase);babelHelpers.createClass(Dir,null,[{key:"_processStyleText",/**
     * @override
     * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
     */value:function _processStyleText(cssText,baseURI){cssText=babelHelpers.get(babelHelpers.getPrototypeOf(Dir),"_processStyleText",this).call(this,cssText,baseURI);cssText=this._replaceDirInCssText(cssText);return cssText;}/**
       * Replace `:dir` in the given CSS text
       *
       * @param {string} text CSS text to replace DIR
       * @return {string} Modified CSS
       */},{key:"_replaceDirInCssText",value:function _replaceDirInCssText(text){var replacedText=text;replacedText=replacedText.replace(HOST_DIR,HOST_DIR_REPLACMENT);replacedText=replacedText.replace(EL_DIR,EL_DIR_REPLACMENT);if(text!==replacedText){this.__activateDir=true;}return replacedText;}}]);function Dir(){var _this13;babelHelpers.classCallCheck(this,Dir);_this13=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(Dir).call(this));/** @type {boolean} */_this13.__autoDirOptOut=false;return _this13;}/**
       * @suppress {invalidCasts} Closure doesn't understand that `this` is an HTMLElement
       * @return {void}
       */babelHelpers.createClass(Dir,[{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(Dir.prototype),"ready",this).call(this);this.__autoDirOptOut=/** @type {!HTMLElement} */this.hasAttribute('dir');}/**
       * @suppress {missingProperties} If it exists on elementBase, it can be super'd
       * @return {void}
       */},{key:"connectedCallback",value:function connectedCallback(){if(elementBase.prototype.connectedCallback){babelHelpers.get(babelHelpers.getPrototypeOf(Dir.prototype),"connectedCallback",this).call(this);}if(this.constructor.__activateDir){takeRecords();DIR_INSTANCES.push(this);setRTL(this);}}/**
       * @suppress {missingProperties} If it exists on elementBase, it can be super'd
       * @return {void}
       */},{key:"disconnectedCallback",value:function disconnectedCallback(){if(elementBase.prototype.disconnectedCallback){babelHelpers.get(babelHelpers.getPrototypeOf(Dir.prototype),"disconnectedCallback",this).call(this);}if(this.constructor.__activateDir){var idx=DIR_INSTANCES.indexOf(this);if(idx>-1){DIR_INSTANCES.splice(idx,1);}}}}]);return Dir;}(elementBase);Dir.__activateDir=false;return Dir;});_exports.DirMixin=DirMixin;var dirMixin={DirMixin:DirMixin};_exports.$dirMixin=dirMixin;var scheduled=false;var beforeRenderQueue=[];var afterRenderQueue=[];function schedule(){scheduled=true;// before next render
requestAnimationFrame(function(){scheduled=false;flushQueue(beforeRenderQueue);// after the render
setTimeout(function(){runQueue(afterRenderQueue);});});}function flushQueue(queue){while(queue.length){callMethod(queue.shift());}}function runQueue(queue){for(var _i30=0,l=queue.length;_i30<l;_i30++){callMethod(queue.shift());}}function callMethod(info){var context=info[0];var callback=info[1];var args=info[2];try{callback.apply(context,args);}catch(e){setTimeout(function(){throw e;});}}/**
   * Flushes all `beforeNextRender` tasks, followed by all `afterNextRender`
   * tasks.
   *
   * @return {void}
   */function flush(){while(beforeRenderQueue.length||afterRenderQueue.length){flushQueue(beforeRenderQueue);flushQueue(afterRenderQueue);}scheduled=false;}/**
   * Enqueues a callback which will be run before the next render, at
   * `requestAnimationFrame` timing.
   *
   * This method is useful for enqueuing work that requires DOM measurement,
   * since measurement may not be reliable in custom element callbacks before
   * the first render, as well as for batching measurement tasks in general.
   *
   * Tasks in this queue may be flushed by calling `flush()`.
   *
   * @param {*} context Context object the callback function will be bound to
   * @param {function(...*):void} callback Callback function
   * @param {!Array=} args An array of arguments to call the callback function with
   * @return {void}
   */function beforeNextRender(context,callback,args){if(!scheduled){schedule();}beforeRenderQueue.push([context,callback,args]);}/**
   * Enqueues a callback which will be run after the next render, equivalent
   * to one task (`setTimeout`) after the next `requestAnimationFrame`.
   *
   * This method is useful for tuning the first-render performance of an
   * element or application by deferring non-critical work until after the
   * first paint.  Typical non-render-critical work may include adding UI
   * event listeners and aria attributes.
   *
   * @param {*} context Context object the callback function will be bound to
   * @param {function(...*):void} callback Callback function
   * @param {!Array=} args An array of arguments to call the callback function with
   * @return {void}
   */function afterNextRender(context,callback,args){if(!scheduled){schedule();}afterRenderQueue.push([context,callback,args]);}var renderStatus={flush:flush,beforeNextRender:beforeNextRender,afterNextRender:afterNextRender};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$renderStatus=renderStatus;function resolve(){document.body.removeAttribute('unresolved');}if(document.readyState==='interactive'||document.readyState==='complete'){resolve();}else{window.addEventListener('DOMContentLoaded',resolve);}function newSplice(index,removed,addedCount){return{index:index,removed:removed,addedCount:addedCount};}var EDIT_LEAVE=0;var EDIT_UPDATE=1;var EDIT_ADD=2;var EDIT_DELETE=3;// Note: This function is *based* on the computation of the Levenshtein
// "edit" distance. The one change is that "updates" are treated as two
// edits - not one. With Array splices, an update is really a delete
// followed by an add. By retaining this, we optimize for "keeping" the
// maximum array items in the original array. For example:
//
//   'xxxx123' -> '123yyyy'
//
// With 1-edit updates, the shortest path would be just to update all seven
// characters. With 2-edit updates, we delete 4, leave 3, and add 4. This
// leaves the substring '123' intact.
function calcEditDistances(current,currentStart,currentEnd,old,oldStart,oldEnd){// "Deletion" columns
var rowCount=oldEnd-oldStart+1;var columnCount=currentEnd-currentStart+1;var distances=new Array(rowCount);// "Addition" rows. Initialize null column.
for(var _i31=0;_i31<rowCount;_i31++){distances[_i31]=new Array(columnCount);distances[_i31][0]=_i31;}// Initialize null row
for(var j=0;j<columnCount;j++){distances[0][j]=j;}for(var _i32=1;_i32<rowCount;_i32++){for(var _j=1;_j<columnCount;_j++){if(equals(current[currentStart+_j-1],old[oldStart+_i32-1]))distances[_i32][_j]=distances[_i32-1][_j-1];else{var north=distances[_i32-1][_j]+1;var west=distances[_i32][_j-1]+1;distances[_i32][_j]=north<west?north:west;}}}return distances;}// This starts at the final weight, and walks "backward" by finding
// the minimum previous weight recursively until the origin of the weight
// matrix.
function spliceOperationsFromEditDistances(distances){var i=distances.length-1;var j=distances[0].length-1;var current=distances[i][j];var edits=[];while(i>0||j>0){if(i==0){edits.push(EDIT_ADD);j--;continue;}if(j==0){edits.push(EDIT_DELETE);i--;continue;}var northWest=distances[i-1][j-1];var west=distances[i-1][j];var north=distances[i][j-1];var min=void 0;if(west<north)min=west<northWest?west:northWest;else min=north<northWest?north:northWest;if(min==northWest){if(northWest==current){edits.push(EDIT_LEAVE);}else{edits.push(EDIT_UPDATE);current=northWest;}i--;j--;}else if(min==west){edits.push(EDIT_DELETE);i--;current=west;}else{edits.push(EDIT_ADD);j--;current=north;}}edits.reverse();return edits;}/**
   * Splice Projection functions:
   *
   * A splice map is a representation of how a previous array of items
   * was transformed into a new array of items. Conceptually it is a list of
   * tuples of
   *
   *   <index, removed, addedCount>
   *
   * which are kept in ascending index order of. The tuple represents that at
   * the |index|, |removed| sequence of items were removed, and counting forward
   * from |index|, |addedCount| items were added.
   */ /**
       * Lacking individual splice mutation information, the minimal set of
       * splices can be synthesized given the previous state and final state of an
       * array. The basic approach is to calculate the edit distance matrix and
       * choose the shortest path through it.
       *
       * Complexity: O(l * p)
       *   l: The length of the current array
       *   p: The length of the old array
       *
       * @param {!Array} current The current "changed" array for which to
       * calculate splices.
       * @param {number} currentStart Starting index in the `current` array for
       * which splices are calculated.
       * @param {number} currentEnd Ending index in the `current` array for
       * which splices are calculated.
       * @param {!Array} old The original "unchanged" array to compare `current`
       * against to determine splices.
       * @param {number} oldStart Starting index in the `old` array for
       * which splices are calculated.
       * @param {number} oldEnd Ending index in the `old` array for
       * which splices are calculated.
       * @return {!Array} Returns an array of splice record objects. Each of these
       * contains: `index` the location where the splice occurred; `removed`
       * the array of removed items from this location; `addedCount` the number
       * of items added at this location.
       */function calcSplices(current,currentStart,currentEnd,old,oldStart,oldEnd){var prefixCount=0;var suffixCount=0;var splice;var minLength=Math.min(currentEnd-currentStart,oldEnd-oldStart);if(currentStart==0&&oldStart==0)prefixCount=sharedPrefix(current,old,minLength);if(currentEnd==current.length&&oldEnd==old.length)suffixCount=sharedSuffix(current,old,minLength-prefixCount);currentStart+=prefixCount;oldStart+=prefixCount;currentEnd-=suffixCount;oldEnd-=suffixCount;if(currentEnd-currentStart==0&&oldEnd-oldStart==0)return[];if(currentStart==currentEnd){splice=newSplice(currentStart,[],0);while(oldStart<oldEnd){splice.removed.push(old[oldStart++]);}return[splice];}else if(oldStart==oldEnd)return[newSplice(currentStart,[],currentEnd-currentStart)];var ops=spliceOperationsFromEditDistances(calcEditDistances(current,currentStart,currentEnd,old,oldStart,oldEnd));splice=undefined;var splices=[];var index=currentStart;var oldIndex=oldStart;for(var _i33=0;_i33<ops.length;_i33++){switch(ops[_i33]){case EDIT_LEAVE:if(splice){splices.push(splice);splice=undefined;}index++;oldIndex++;break;case EDIT_UPDATE:if(!splice)splice=newSplice(index,[],0);splice.addedCount++;index++;splice.removed.push(old[oldIndex]);oldIndex++;break;case EDIT_ADD:if(!splice)splice=newSplice(index,[],0);splice.addedCount++;index++;break;case EDIT_DELETE:if(!splice)splice=newSplice(index,[],0);splice.removed.push(old[oldIndex]);oldIndex++;break;}}if(splice){splices.push(splice);}return splices;}function sharedPrefix(current,old,searchLength){for(var _i34=0;_i34<searchLength;_i34++){if(!equals(current[_i34],old[_i34]))return _i34;}return searchLength;}function sharedSuffix(current,old,searchLength){var index1=current.length;var index2=old.length;var count=0;while(count<searchLength&&equals(current[--index1],old[--index2])){count++;}return count;}/**
   * Returns an array of splice records indicating the minimum edits required
   * to transform the `previous` array into the `current` array.
   *
   * Splice records are ordered by index and contain the following fields:
   * - `index`: index where edit started
   * - `removed`: array of removed items from this index
   * - `addedCount`: number of items added at this index
   *
   * This function is based on the Levenshtein "minimum edit distance"
   * algorithm. Note that updates are treated as removal followed by addition.
   *
   * The worst-case time complexity of this algorithm is `O(l * p)`
   *   l: The length of the current array
   *   p: The length of the previous array
   *
   * However, the worst-case complexity is reduced by an `O(n)` optimization
   * to detect any shared prefix & suffix between the two arrays and only
   * perform the more expensive minimum edit distance calculation over the
   * non-shared portions of the arrays.
   *
   * @function
   * @param {!Array} current The "changed" array for which splices will be
   * calculated.
   * @param {!Array} previous The "unchanged" original array to compare
   * `current` against to determine the splices.
   * @return {!Array} Returns an array of splice record objects. Each of these
   * contains: `index` the location where the splice occurred; `removed`
   * the array of removed items from this location; `addedCount` the number
   * of items added at this location.
   */function calculateSplices(current,previous){return calcSplices(current,0,current.length,previous,0,previous.length);}function equals(currentValue,previousValue){return currentValue===previousValue;}var arraySplice={calculateSplices:calculateSplices};_exports.$arraySplice=arraySplice;function isSlot(node){return node.localName==='slot';}/**
   * Class that listens for changes (additions or removals) to
   * "flattened nodes" on a given `node`. The list of flattened nodes consists
   * of a node's children and, for any children that are `<slot>` elements,
   * the expanded flattened list of `assignedNodes`.
   * For example, if the observed node has children `<a></a><slot></slot><b></b>`
   * and the `<slot>` has one `<div>` assigned to it, then the flattened
   * nodes list is `<a></a><div></div><b></b>`. If the `<slot>` has other
   * `<slot>` elements assigned to it, these are flattened as well.
   *
   * The provided `callback` is called whenever any change to this list
   * of flattened nodes occurs, where an addition or removal of a node is
   * considered a change. The `callback` is called with one argument, an object
   * containing an array of any `addedNodes` and `removedNodes`.
   *
   * Note: the callback is called asynchronous to any changes
   * at a microtask checkpoint. This is because observation is performed using
   * `MutationObserver` and the `<slot>` element's `slotchange` event which
   * are asynchronous.
   *
   * An example:
   * ```js
   * class TestSelfObserve extends PolymerElement {
   *   static get is() { return 'test-self-observe';}
   *   connectedCallback() {
   *     super.connectedCallback();
   *     this._observer = new FlattenedNodesObserver(this, (info) => {
   *       this.info = info;
   *     });
   *   }
   *   disconnectedCallback() {
   *     super.disconnectedCallback();
   *     this._observer.disconnect();
   *   }
   * }
   * customElements.define(TestSelfObserve.is, TestSelfObserve);
   * ```
   *
   * @summary Class that listens for changes (additions or removals) to
   * "flattened nodes" on a given `node`.
   */var FlattenedNodesObserver=/*#__PURE__*/function(){babelHelpers.createClass(FlattenedNodesObserver,null,[{key:"getFlattenedNodes",/**
   * Returns the list of flattened nodes for the given `node`.
   * This list consists of a node's children and, for any children
   * that are `<slot>` elements, the expanded flattened list of `assignedNodes`.
   * For example, if the observed node has children `<a></a><slot></slot><b></b>`
   * and the `<slot>` has one `<div>` assigned to it, then the flattened
   * nodes list is `<a></a><div></div><b></b>`. If the `<slot>` has other
   * `<slot>` elements assigned to it, these are flattened as well.
   *
   * @param {!HTMLElement|!HTMLSlotElement} node The node for which to
   *      return the list of flattened nodes.
   * @return {!Array<!Node>} The list of flattened nodes for the given `node`.
   * @nocollapse See https://github.com/google/closure-compiler/issues/2763
   */value:function getFlattenedNodes(node){if(isSlot(node)){node=/** @type {!HTMLSlotElement} */node;// eslint-disable-line no-self-assign
return node.assignedNodes({flatten:true});}else{return Array.from(node.childNodes).map(function(node){if(isSlot(node)){node=/** @type {!HTMLSlotElement} */node;// eslint-disable-line no-self-assign
return node.assignedNodes({flatten:true});}else{return[node];}}).reduce(function(a,b){return a.concat(b);},[]);}}/**
     * @param {!HTMLElement} target Node on which to listen for changes.
     * @param {?function(this: Element, { target: !HTMLElement, addedNodes: !Array<!Element>, removedNodes: !Array<!Element> }):void} callback Function called when there are additions
     * or removals from the target's list of flattened nodes.
     */}]);function FlattenedNodesObserver(target,callback){var _this14=this;babelHelpers.classCallCheck(this,FlattenedNodesObserver);/**
     * @type {MutationObserver}
     * @private
     */this._shadyChildrenObserver=null;/**
                                            * @type {MutationObserver}
                                            * @private
                                            */this._nativeChildrenObserver=null;this._connected=false;/**
                              * @type {!HTMLElement}
                              * @private
                              */this._target=target;this.callback=callback;this._effectiveNodes=[];this._observer=null;this._scheduled=false;/**
                              * @type {function()}
                              * @private
                              */this._boundSchedule=function(){_this14._schedule();};this.connect();this._schedule();}/**
     * Activates an observer. This method is automatically called when
     * a `FlattenedNodesObserver` is created. It should only be called to
     * re-activate an observer that has been deactivated via the `disconnect` method.
     *
     * @return {void}
     */babelHelpers.createClass(FlattenedNodesObserver,[{key:"connect",value:function connect(){var _this15=this;if(isSlot(this._target)){this._listenSlots([this._target]);}else if(this._target.children){this._listenSlots(/** @type {!NodeList<!Node>} */this._target.children);if(window.ShadyDOM){this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,function(mutations){_this15._processMutations(mutations);});}else{this._nativeChildrenObserver=new MutationObserver(function(mutations){_this15._processMutations(mutations);});this._nativeChildrenObserver.observe(this._target,{childList:true});}}this._connected=true;}/**
     * Deactivates the flattened nodes observer. After calling this method
     * the observer callback will not be called when changes to flattened nodes
     * occur. The `connect` method may be subsequently called to reactivate
     * the observer.
     *
     * @return {void}
     */},{key:"disconnect",value:function disconnect(){if(isSlot(this._target)){this._unlistenSlots([this._target]);}else if(this._target.children){this._unlistenSlots(/** @type {!NodeList<!Node>} */this._target.children);if(window.ShadyDOM&&this._shadyChildrenObserver){ShadyDOM.unobserveChildren(this._shadyChildrenObserver);this._shadyChildrenObserver=null;}else if(this._nativeChildrenObserver){this._nativeChildrenObserver.disconnect();this._nativeChildrenObserver=null;}}this._connected=false;}/**
     * @return {void}
     * @private
     */},{key:"_schedule",value:function _schedule(){var _this16=this;if(!this._scheduled){this._scheduled=true;microTask.run(function(){return _this16.flush();});}}/**
     * @param {Array<MutationRecord>} mutations Mutations signaled by the mutation observer
     * @return {void}
     * @private
     */},{key:"_processMutations",value:function _processMutations(mutations){this._processSlotMutations(mutations);this.flush();}/**
     * @param {Array<MutationRecord>} mutations Mutations signaled by the mutation observer
     * @return {void}
     * @private
     */},{key:"_processSlotMutations",value:function _processSlotMutations(mutations){if(mutations){for(var _i35=0;_i35<mutations.length;_i35++){var mutation=mutations[_i35];if(mutation.addedNodes){this._listenSlots(mutation.addedNodes);}if(mutation.removedNodes){this._unlistenSlots(mutation.removedNodes);}}}}/**
     * Flushes the observer causing any pending changes to be immediately
     * delivered the observer callback. By default these changes are delivered
     * asynchronously at the next microtask checkpoint.
     *
     * @return {boolean} Returns true if any pending changes caused the observer
     * callback to run.
     */},{key:"flush",value:function flush(){if(!this._connected){return false;}if(window.ShadyDOM){ShadyDOM.flush();}if(this._nativeChildrenObserver){this._processSlotMutations(this._nativeChildrenObserver.takeRecords());}else if(this._shadyChildrenObserver){this._processSlotMutations(this._shadyChildrenObserver.takeRecords());}this._scheduled=false;var info={target:this._target,addedNodes:[],removedNodes:[]};var newNodes=this.constructor.getFlattenedNodes(this._target);var splices=calculateSplices(newNodes,this._effectiveNodes);// process removals
for(var _i36=0,s;_i36<splices.length&&(s=splices[_i36]);_i36++){for(var j=0,n;j<s.removed.length&&(n=s.removed[j]);j++){info.removedNodes.push(n);}}// process adds
for(var _i37=0,_s2;_i37<splices.length&&(_s2=splices[_i37]);_i37++){for(var _j2=_s2.index;_j2<_s2.index+_s2.addedCount;_j2++){info.addedNodes.push(newNodes[_j2]);}}// update cache
this._effectiveNodes=newNodes;var didFlush=false;if(info.addedNodes.length||info.removedNodes.length){didFlush=true;this.callback.call(this._target,info);}return didFlush;}/**
     * @param {!Array<!Node>|!NodeList<!Node>} nodeList Nodes that could change
     * @return {void}
     * @private
     */},{key:"_listenSlots",value:function _listenSlots(nodeList){for(var _i38=0;_i38<nodeList.length;_i38++){var n=nodeList[_i38];if(isSlot(n)){n.addEventListener('slotchange',this._boundSchedule);}}}/**
     * @param {!Array<!Node>|!NodeList<!Node>} nodeList Nodes that could change
     * @return {void}
     * @private
     */},{key:"_unlistenSlots",value:function _unlistenSlots(nodeList){for(var _i39=0;_i39<nodeList.length;_i39++){var n=nodeList[_i39];if(isSlot(n)){n.removeEventListener('slotchange',this._boundSchedule);}}}}]);return FlattenedNodesObserver;}();_exports.FlattenedNodesObserver=FlattenedNodesObserver;var flattenedNodesObserver={FlattenedNodesObserver:FlattenedNodesObserver};/* eslint-enable no-unused-vars */_exports.$flattenedNodesObserver=flattenedNodesObserver;var debouncerQueue=[];/**
                          * Adds a `Debouncer` to a list of globally flushable tasks.
                          *
                          * @param {!Debouncer} debouncer Debouncer to enqueue
                          * @return {void}
                          */var enqueueDebouncer=function enqueueDebouncer(debouncer){debouncerQueue.push(debouncer);};_exports.enqueueDebouncer=_exports.addDebouncer=enqueueDebouncer;function flushDebouncers(){var didFlush=Boolean(debouncerQueue.length);while(debouncerQueue.length){try{debouncerQueue.shift().flush();}catch(e){setTimeout(function(){throw e;});}}return didFlush;}/**
   * Forces several classes of asynchronously queued tasks to flush:
   * - Debouncers added via `enqueueDebouncer`
   * - ShadyDOM distribution
   *
   * @return {void}
   */var flush$1=function flush$1(){var shadyDOM,debouncers;do{shadyDOM=window.ShadyDOM&&ShadyDOM.flush();if(window.ShadyCSS&&window.ShadyCSS.ScopingShim){window.ShadyCSS.ScopingShim.flush();}debouncers=flushDebouncers();}while(shadyDOM||debouncers);};_exports.flush$1=_exports.flush=flush$1;var flush$2={enqueueDebouncer:enqueueDebouncer,flush:flush$1};/* eslint-enable no-unused-vars */_exports.$flush=flush$2;var p=Element.prototype;/**
                              * @const {function(this:Node, string): boolean}
                              */var normalizedMatchesSelector=p.matches||p.matchesSelector||p.mozMatchesSelector||p.msMatchesSelector||p.oMatchesSelector||p.webkitMatchesSelector;/**
                                                                                                                                                                   * Cross-platform `element.matches` shim.
                                                                                                                                                                   *
                                                                                                                                                                   * @function matchesSelector
                                                                                                                                                                   * @param {!Node} node Node to check selector against
                                                                                                                                                                   * @param {string} selector Selector to match
                                                                                                                                                                   * @return {boolean} True if node matched selector
                                                                                                                                                                   */var matchesSelector=function matchesSelector(node,selector){return normalizedMatchesSelector.call(node,selector);};/**
    * Node API wrapper class returned from `Polymer.dom.(target)` when
    * `target` is a `Node`.
    *
    */_exports.matchesSelector=matchesSelector;var DomApi=/*#__PURE__*/function(){/**
   * @param {Node} node Node for which to create a Polymer.dom helper object.
   */function DomApi(node){babelHelpers.classCallCheck(this,DomApi);this.node=node;}/**
     * Returns an instance of `FlattenedNodesObserver` that
     * listens for node changes on this element.
     *
     * @param {function(this:HTMLElement, { target: !HTMLElement, addedNodes: !Array<!Element>, removedNodes: !Array<!Element> }):void} callback Called when direct or distributed children
     *   of this element changes
     * @return {!FlattenedNodesObserver} Observer instance
     */babelHelpers.createClass(DomApi,[{key:"observeNodes",value:function observeNodes(callback){return new FlattenedNodesObserver(/** @type {!HTMLElement} */this.node,callback);}/**
     * Disconnects an observer previously created via `observeNodes`
     *
     * @param {!FlattenedNodesObserver} observerHandle Observer instance
     *   to disconnect.
     * @return {void}
     */},{key:"unobserveNodes",value:function unobserveNodes(observerHandle){observerHandle.disconnect();}/**
     * Provided as a backwards-compatible API only.  This method does nothing.
     * @return {void}
     */},{key:"notifyObserver",value:function notifyObserver(){}/**
                       * Returns true if the provided node is contained with this element's
                       * light-DOM children or shadow root, including any nested shadow roots
                       * of children therein.
                       *
                       * @param {Node} node Node to test
                       * @return {boolean} Returns true if the given `node` is contained within
                       *   this element's light or shadow DOM.
                       */},{key:"deepContains",value:function deepContains(node){if(this.node.contains(node)){return true;}var n=node;var doc=node.ownerDocument;// walk from node to `this` or `document`
while(n&&n!==doc&&n!==this.node){// use logical parentnode, or native ShadowRoot host
n=n.parentNode||n.host;}return n===this.node;}/**
     * Returns the root node of this node.  Equivalent to `getRootNode()`.
     *
     * @return {Node} Top most element in the dom tree in which the node
     * exists. If the node is connected to a document this is either a
     * shadowRoot or the document; otherwise, it may be the node
     * itself or a node or document fragment containing it.
     */},{key:"getOwnerRoot",value:function getOwnerRoot(){return this.node.getRootNode();}/**
     * For slot elements, returns the nodes assigned to the slot; otherwise
     * an empty array. It is equivalent to `<slot>.addignedNodes({flatten:true})`.
     *
     * @return {!Array<!Node>} Array of assigned nodes
     */},{key:"getDistributedNodes",value:function getDistributedNodes(){return this.node.localName==='slot'?this.node.assignedNodes({flatten:true}):[];}/**
     * Returns an array of all slots this element was distributed to.
     *
     * @return {!Array<!HTMLSlotElement>} Description
     */},{key:"getDestinationInsertionPoints",value:function getDestinationInsertionPoints(){var ip$=[];var n=this.node.assignedSlot;while(n){ip$.push(n);n=n.assignedSlot;}return ip$;}/**
     * Calls `importNode` on the `ownerDocument` for this node.
     *
     * @param {!Node} node Node to import
     * @param {boolean} deep True if the node should be cloned deeply during
     *   import
     * @return {Node} Clone of given node imported to this owner document
     */},{key:"importNode",value:function importNode(node,deep){var doc=babelHelpers.instanceof(this.node,Document)?this.node:this.node.ownerDocument;return doc.importNode(node,deep);}/**
     * @return {!Array<!Node>} Returns a flattened list of all child nodes and
     * nodes assigned to child slots.
     */},{key:"getEffectiveChildNodes",value:function getEffectiveChildNodes(){return FlattenedNodesObserver.getFlattenedNodes(/** @type {!HTMLElement} */this.node);}/**
     * Returns a filtered list of flattened child elements for this element based
     * on the given selector.
     *
     * @param {string} selector Selector to filter nodes against
     * @return {!Array<!HTMLElement>} List of flattened child elements
     */},{key:"queryDistributedElements",value:function queryDistributedElements(selector){var c$=this.getEffectiveChildNodes();var list=[];for(var _i40=0,l=c$.length,c;_i40<l&&(c=c$[_i40]);_i40++){if(c.nodeType===Node.ELEMENT_NODE&&matchesSelector(c,selector)){list.push(c);}}return list;}/**
     * For shadow roots, returns the currently focused element within this
     * shadow root.
     *
     * @return {Node|undefined} Currently focused element
     */},{key:"activeElement",get:function get(){var node=this.node;return node._activeElement!==undefined?node._activeElement:node.activeElement;}}]);return DomApi;}();_exports.DomApi=DomApi;function forwardMethods(proto,methods){var _loop=function _loop(_i41){var method=methods[_i41];/* eslint-disable valid-jsdoc */proto[method]=/** @this {DomApi} */function(){return this.node[method].apply(this.node,arguments);};/* eslint-enable */};for(var _i41=0;_i41<methods.length;_i41++){_loop(_i41);}}function forwardReadOnlyProperties(proto,properties){var _loop2=function _loop2(_i42){var name=properties[_i42];Object.defineProperty(proto,name,{get:function get(){var domApi=/** @type {DomApi} */this;return domApi.node[name];},configurable:true});};for(var _i42=0;_i42<properties.length;_i42++){_loop2(_i42);}}function forwardProperties(proto,properties){var _loop3=function _loop3(_i43){var name=properties[_i43];Object.defineProperty(proto,name,{/**
       * @this {DomApi}
       * @return {*} .
       */get:function get(){return this.node[name];},/**
       * @this {DomApi}
       * @param {*} value .
       */set:function set(value){this.node[name]=value;},configurable:true});};for(var _i43=0;_i43<properties.length;_i43++){_loop3(_i43);}}/**
   * Event API wrapper class returned from `dom.(target)` when
   * `target` is an `Event`.
   */var EventApi=/*#__PURE__*/function(){function EventApi(event){babelHelpers.classCallCheck(this,EventApi);this.event=event;}/**
     * Returns the first node on the `composedPath` of this event.
     *
     * @return {!EventTarget} The node this event was dispatched to
     */babelHelpers.createClass(EventApi,[{key:"rootTarget",get:function get(){return this.event.composedPath()[0];}/**
     * Returns the local (re-targeted) target for this event.
     *
     * @return {!EventTarget} The local (re-targeted) target for this event.
     */},{key:"localTarget",get:function get(){return this.event.target;}/**
     * Returns the `composedPath` for this event.
     * @return {!Array<!EventTarget>} The nodes this event propagated through
     */},{key:"path",get:function get(){return this.event.composedPath();}}]);return EventApi;}();/**
   * @function
   * @param {boolean=} deep
   * @return {!Node}
   */_exports.EventApi=EventApi;DomApi.prototype.cloneNode;/**
                             * @function
                             * @param {!Node} node
                             * @return {!Node}
                             */DomApi.prototype.appendChild;/**
                               * @function
                               * @param {!Node} newChild
                               * @param {Node} refChild
                               * @return {!Node}
                               */DomApi.prototype.insertBefore;/**
                                * @function
                                * @param {!Node} node
                                * @return {!Node}
                                */DomApi.prototype.removeChild;/**
                               * @function
                               * @param {!Node} oldChild
                               * @param {!Node} newChild
                               * @return {!Node}
                               */DomApi.prototype.replaceChild;/**
                                * @function
                                * @param {string} name
                                * @param {string} value
                                * @return {void}
                                */DomApi.prototype.setAttribute;/**
                                * @function
                                * @param {string} name
                                * @return {void}
                                */DomApi.prototype.removeAttribute;/**
                                   * @function
                                   * @param {string} selector
                                   * @return {?Element}
                                   */DomApi.prototype.querySelector;/**
                                 * @function
                                 * @param {string} selector
                                 * @return {!NodeList<!Element>}
                                 */DomApi.prototype.querySelectorAll;/** @type {?Node} */DomApi.prototype.parentNode;/** @type {?Node} */DomApi.prototype.firstChild;/** @type {?Node} */DomApi.prototype.lastChild;/** @type {?Node} */DomApi.prototype.nextSibling;/** @type {?Node} */DomApi.prototype.previousSibling;/** @type {?HTMLElement} */DomApi.prototype.firstElementChild;/** @type {?HTMLElement} */DomApi.prototype.lastElementChild;/** @type {?HTMLElement} */DomApi.prototype.nextElementSibling;/** @type {?HTMLElement} */DomApi.prototype.previousElementSibling;/** @type {!Array<!Node>} */DomApi.prototype.childNodes;/** @type {!Array<!HTMLElement>} */DomApi.prototype.children;/** @type {?DOMTokenList} */DomApi.prototype.classList;/** @type {string} */DomApi.prototype.textContent;/** @type {string} */DomApi.prototype.innerHTML;forwardMethods(DomApi.prototype,['cloneNode','appendChild','insertBefore','removeChild','replaceChild','setAttribute','removeAttribute','querySelector','querySelectorAll']);forwardReadOnlyProperties(DomApi.prototype,['parentNode','firstChild','lastChild','nextSibling','previousSibling','firstElementChild','lastElementChild','nextElementSibling','previousElementSibling','childNodes','children','classList']);forwardProperties(DomApi.prototype,['textContent','innerHTML']);/**
                                                                    * Legacy DOM and Event manipulation API wrapper factory used to abstract
                                                                    * differences between native Shadow DOM and "Shady DOM" when polyfilling on
                                                                    * older browsers.
                                                                    *
                                                                    * Note that in Polymer 2.x use of `Polymer.dom` is no longer required and
                                                                    * in the majority of cases simply facades directly to the standard native
                                                                    * API.
                                                                    *
                                                                    * @summary Legacy DOM and Event manipulation API wrapper factory used to
                                                                    * abstract differences between native Shadow DOM and "Shady DOM."
                                                                    * @param {(Node|Event)=} obj Node or event to operate on
                                                                    * @return {!DomApi|!EventApi} Wrapper providing either node API or event API
                                                                    */var dom=function dom(obj){obj=obj||document;if(!obj.__domApi){var helper;if(babelHelpers.instanceof(obj,Event)){helper=new EventApi(obj);}else{helper=new DomApi(obj);}obj.__domApi=helper;}return obj.__domApi;};_exports.dom=dom;var polymer_dom={matchesSelector:matchesSelector,DomApi:DomApi,EventApi:EventApi,dom:dom,flush:flush$1,addDebouncer:enqueueDebouncer};_exports.$polymerDom=polymer_dom;var bundledImportMeta$1=babelHelpers.objectSpread({},meta,{url:new URL('../node_modules/%40polymer/polymer/lib/legacy/legacy-element-mixin.js',meta.url).href});var styleInterface=window.ShadyCSS;/**
                                       * Element class mixin that provides Polymer's "legacy" API intended to be
                                       * backward-compatible to the greatest extent possible with the API
                                       * found on the Polymer 1.x `Polymer.Base` prototype applied to all elements
                                       * defined using the `Polymer({...})` function.
                                       *
                                       * @mixinFunction
                                       * @polymer
                                       * @appliesMixin ElementMixin
                                       * @appliesMixin GestureEventListeners
                                       * @property isAttached {boolean} Set to `true` in this element's
                                       *   `connectedCallback` and `false` in `disconnectedCallback`
                                       * @summary Element class mixin that provides Polymer's "legacy" API
                                       */var LegacyElementMixin=dedupingMixin(function(base){/**
   * @constructor
   * @extends {base}
   * @implements {Polymer_ElementMixin}
   * @implements {Polymer_GestureEventListeners}
   * @implements {Polymer_DirMixin}
   * @private
   */var legacyElementBase=DirMixin(GestureEventListeners(ElementMixin(base)));/**
                                                                                     * Map of simple names to touch action names
                                                                                     * @dict
                                                                                     */var DIRECTION_MAP={'x':'pan-x','y':'pan-y','none':'none','all':'auto'};/**
      * @polymer
      * @mixinClass
      * @extends {legacyElementBase}
      * @implements {Polymer_LegacyElementMixin}
      * @unrestricted
      */var LegacyElement=/*#__PURE__*/function(_legacyElementBase){babelHelpers.inherits(LegacyElement,_legacyElementBase);function LegacyElement(){var _this17;babelHelpers.classCallCheck(this,LegacyElement);_this17=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(LegacyElement).call(this));/** @type {boolean} */_this17.isAttached;/** @type {WeakMap<!Element, !Object<string, !Function>>} */_this17.__boundListeners;/** @type {Object<string, Function>} */_this17._debouncers;// Ensure listeners are applied immediately so that they are
// added before declarative event listeners. This allows an element to
// decorate itself via an event prior to any declarative listeners
// seeing the event. Note, this ensures compatibility with 1.x ordering.
_this17._applyListeners();return _this17;}/**
       * Forwards `importMeta` from the prototype (i.e. from the info object
       * passed to `Polymer({...})`) to the static API.
       *
       * @return {!Object} The `import.meta` object set on the prototype
       * @suppress {missingProperties} `this` is always in the instance in
       *  closure for some reason even in a static method, rather than the class
       */babelHelpers.createClass(LegacyElement,[{key:"created",/**
       * Legacy callback called during the `constructor`, for overriding
       * by the user.
       * @return {void}
       */value:function created(){}/**
                  * Provides an implementation of `connectedCallback`
                  * which adds Polymer legacy API's `attached` method.
                  * @return {void}
                  * @override
                  */},{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(LegacyElement.prototype),"connectedCallback",this).call(this);this.isAttached=true;this.attached();}/**
       * Legacy callback called during `connectedCallback`, for overriding
       * by the user.
       * @return {void}
       */},{key:"attached",value:function attached(){}/**
                   * Provides an implementation of `disconnectedCallback`
                   * which adds Polymer legacy API's `detached` method.
                   * @return {void}
                   * @override
                   */},{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(LegacyElement.prototype),"disconnectedCallback",this).call(this);this.isAttached=false;this.detached();}/**
       * Legacy callback called during `disconnectedCallback`, for overriding
       * by the user.
       * @return {void}
       */},{key:"detached",value:function detached(){}/**
                   * Provides an override implementation of `attributeChangedCallback`
                   * which adds the Polymer legacy API's `attributeChanged` method.
                   * @param {string} name Name of attribute.
                   * @param {?string} old Old value of attribute.
                   * @param {?string} value Current value of attribute.
                   * @param {?string} namespace Attribute namespace.
                   * @return {void}
                   * @override
                   */},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,old,value,namespace){if(old!==value){babelHelpers.get(babelHelpers.getPrototypeOf(LegacyElement.prototype),"attributeChangedCallback",this).call(this,name,old,value,namespace);this.attributeChanged(name,old,value);}}/**
       * Legacy callback called during `attributeChangedChallback`, for overriding
       * by the user.
       * @param {string} name Name of attribute.
       * @param {?string} old Old value of attribute.
       * @param {?string} value Current value of attribute.
       * @return {void}
       */},{key:"attributeChanged",value:function attributeChanged(name,old,value){}// eslint-disable-line no-unused-vars
/**
     * Overrides the default `Polymer.PropertyEffects` implementation to
     * add support for class initialization via the `_registered` callback.
     * This is called only when the first instance of the element is created.
     *
     * @return {void}
     * @override
     * @suppress {invalidCasts}
     */},{key:"_initializeProperties",value:function _initializeProperties(){var proto=Object.getPrototypeOf(this);if(!proto.hasOwnProperty('__hasRegisterFinished')){proto.__hasRegisterFinished=true;this._registered();}babelHelpers.get(babelHelpers.getPrototypeOf(LegacyElement.prototype),"_initializeProperties",this).call(this);this.root=/** @type {HTMLElement} */this;this.created();}/**
       * Called automatically when an element is initializing.
       * Users may override this method to perform class registration time
       * work. The implementation should ensure the work is performed
       * only once for the class.
       * @protected
       * @return {void}
       */},{key:"_registered",value:function _registered(){}/**
                      * Overrides the default `Polymer.PropertyEffects` implementation to
                      * add support for installing `hostAttributes` and `listeners`.
                      *
                      * @return {void}
                      * @override
                      */},{key:"ready",value:function ready(){this._ensureAttributes();babelHelpers.get(babelHelpers.getPrototypeOf(LegacyElement.prototype),"ready",this).call(this);}/**
       * Ensures an element has required attributes. Called when the element
       * is being readied via `ready`. Users should override to set the
       * element's required attributes. The implementation should be sure
       * to check and not override existing attributes added by
       * the user of the element. Typically, setting attributes should be left
       * to the element user and not done here; reasonable exceptions include
       * setting aria roles and focusability.
       * @protected
       * @return {void}
       */},{key:"_ensureAttributes",value:function _ensureAttributes(){}/**
                            * Adds element event listeners. Called when the element
                            * is being readied via `ready`. Users should override to
                            * add any required element event listeners.
                            * In performance critical elements, the work done here should be kept
                            * to a minimum since it is done before the element is rendered. In
                            * these elements, consider adding listeners asynchronously so as not to
                            * block render.
                            * @protected
                            * @return {void}
                            */},{key:"_applyListeners",value:function _applyListeners(){}/**
                          * Converts a typed JavaScript value to a string.
                          *
                          * Note this method is provided as backward-compatible legacy API
                          * only.  It is not directly called by any Polymer features. To customize
                          * how properties are serialized to attributes for attribute bindings and
                          * `reflectToAttribute: true` properties as well as this method, override
                          * the `_serializeValue` method provided by `Polymer.PropertyAccessors`.
                          *
                          * @param {*} value Value to deserialize
                          * @return {string | undefined} Serialized value
                          */},{key:"serialize",value:function serialize(value){return this._serializeValue(value);}/**
       * Converts a string to a typed JavaScript value.
       *
       * Note this method is provided as backward-compatible legacy API
       * only.  It is not directly called by any Polymer features.  To customize
       * how attributes are deserialized to properties for in
       * `attributeChangedCallback`, override `_deserializeValue` method
       * provided by `Polymer.PropertyAccessors`.
       *
       * @param {string} value String to deserialize
       * @param {*} type Type to deserialize the string to
       * @return {*} Returns the deserialized value in the `type` given.
       */},{key:"deserialize",value:function deserialize(value,type){return this._deserializeValue(value,type);}/**
       * Serializes a property to its associated attribute.
       *
       * Note this method is provided as backward-compatible legacy API
       * only.  It is not directly called by any Polymer features.
       *
       * @param {string} property Property name to reflect.
       * @param {string=} attribute Attribute name to reflect.
       * @param {*=} value Property value to reflect.
       * @return {void}
       */},{key:"reflectPropertyToAttribute",value:function reflectPropertyToAttribute(property,attribute,value){this._propertyToAttribute(property,attribute,value);}/**
       * Sets a typed value to an HTML attribute on a node.
       *
       * Note this method is provided as backward-compatible legacy API
       * only.  It is not directly called by any Polymer features.
       *
       * @param {*} value Value to serialize.
       * @param {string} attribute Attribute name to serialize to.
       * @param {Element} node Element to set attribute to.
       * @return {void}
       */},{key:"serializeValueToAttribute",value:function serializeValueToAttribute(value,attribute,node){this._valueToNodeAttribute(/** @type {Element} */node||this,value,attribute);}/**
       * Copies own properties (including accessor descriptors) from a source
       * object to a target object.
       *
       * @param {Object} prototype Target object to copy properties to.
       * @param {Object} api Source object to copy properties from.
       * @return {Object} prototype object that was passed as first argument.
       */},{key:"extend",value:function extend(prototype,api){if(!(prototype&&api)){return prototype||api;}var n$=Object.getOwnPropertyNames(api);for(var _i44=0,n;_i44<n$.length&&(n=n$[_i44]);_i44++){var pd=Object.getOwnPropertyDescriptor(api,n);if(pd){Object.defineProperty(prototype,n,pd);}}return prototype;}/**
       * Copies props from a source object to a target object.
       *
       * Note, this method uses a simple `for...in` strategy for enumerating
       * properties.  To ensure only `ownProperties` are copied from source
       * to target and that accessor implementations are copied, use `extend`.
       *
       * @param {!Object} target Target object to copy properties to.
       * @param {!Object} source Source object to copy properties from.
       * @return {!Object} Target object that was passed as first argument.
       */},{key:"mixin",value:function mixin(target,source){for(var _i45 in source){target[_i45]=source[_i45];}return target;}/**
       * Sets the prototype of an object.
       *
       * Note this method is provided as backward-compatible legacy API
       * only.  It is not directly called by any Polymer features.
       * @param {Object} object The object on which to set the prototype.
       * @param {Object} prototype The prototype that will be set on the given
       * `object`.
       * @return {Object} Returns the given `object` with its prototype set
       * to the given `prototype` object.
       */},{key:"chainObject",value:function chainObject(object,prototype){if(object&&prototype&&object!==prototype){object.__proto__=prototype;}return object;}/* **** Begin Template **** */ /**
                                      * Calls `importNode` on the `content` of the `template` specified and
                                      * returns a document fragment containing the imported content.
                                      *
                                      * @param {HTMLTemplateElement} template HTML template element to instance.
                                      * @return {!DocumentFragment} Document fragment containing the imported
                                      *   template content.
                                     */},{key:"instanceTemplate",value:function instanceTemplate(template){var content=this.constructor._contentForTemplate(template);var dom$$1=/** @type {!DocumentFragment} */document.importNode(content,true);return dom$$1;}/* **** Begin Events **** */ /**
                                    * Dispatches a custom event with an optional detail value.
                                    *
                                    * @param {string} type Name of event type.
                                    * @param {*=} detail Detail value containing event-specific
                                    *   payload.
                                    * @param {{ bubbles: (boolean|undefined), cancelable: (boolean|undefined), composed: (boolean|undefined) }=}
                                    *  options Object specifying options.  These may include:
                                    *  `bubbles` (boolean, defaults to `true`),
                                    *  `cancelable` (boolean, defaults to false), and
                                    *  `node` on which to fire the event (HTMLElement, defaults to `this`).
                                    * @return {!Event} The new event that was fired.
                                    */},{key:"fire",value:function fire(type,detail,options){options=options||{};detail=detail===null||detail===undefined?{}:detail;var event=new Event(type,{bubbles:options.bubbles===undefined?true:options.bubbles,cancelable:Boolean(options.cancelable),composed:options.composed===undefined?true:options.composed});event.detail=detail;var node=options.node||this;node.dispatchEvent(event);return event;}/**
       * Convenience method to add an event listener on a given element,
       * late bound to a named method on this element.
       *
       * @param {?EventTarget} node Element to add event listener to.
       * @param {string} eventName Name of event to listen for.
       * @param {string} methodName Name of handler method on `this` to call.
       * @return {void}
       */},{key:"listen",value:function listen(node,eventName,methodName){node=/** @type {!EventTarget} */node||this;var hbl=this.__boundListeners||(this.__boundListeners=new WeakMap());var bl=hbl.get(node);if(!bl){bl={};hbl.set(node,bl);}var key=eventName+methodName;if(!bl[key]){bl[key]=this._addMethodEventListenerToNode(node,eventName,methodName,this);}}/**
       * Convenience method to remove an event listener from a given element,
       * late bound to a named method on this element.
       *
       * @param {?EventTarget} node Element to remove event listener from.
       * @param {string} eventName Name of event to stop listening to.
       * @param {string} methodName Name of handler method on `this` to not call
       anymore.
       * @return {void}
       */},{key:"unlisten",value:function unlisten(node,eventName,methodName){node=/** @type {!EventTarget} */node||this;var bl=this.__boundListeners&&this.__boundListeners.get(node);var key=eventName+methodName;var handler=bl&&bl[key];if(handler){this._removeEventListenerFromNode(node,eventName,handler);bl[key]=null;}}/**
       * Override scrolling behavior to all direction, one direction, or none.
       *
       * Valid scroll directions:
       *   - 'all': scroll in any direction
       *   - 'x': scroll only in the 'x' direction
       *   - 'y': scroll only in the 'y' direction
       *   - 'none': disable scrolling for this node
       *
       * @param {string=} direction Direction to allow scrolling
       * Defaults to `all`.
       * @param {Element=} node Element to apply scroll direction setting.
       * Defaults to `this`.
       * @return {void}
       */},{key:"setScrollDirection",value:function setScrollDirection(direction,node){setTouchAction(/** @type {Element} */node||this,DIRECTION_MAP[direction]||'auto');}/* **** End Events **** */ /**
                                  * Convenience method to run `querySelector` on this local DOM scope.
                                  *
                                  * This function calls `Polymer.dom(this.root).querySelector(slctr)`.
                                  *
                                  * @param {string} slctr Selector to run on this local DOM scope
                                  * @return {Element} Element found by the selector, or null if not found.
                                  */},{key:"$$",value:function $$(slctr){return this.root.querySelector(slctr);}/**
       * Return the element whose local dom within which this element
       * is contained. This is a shorthand for
       * `this.getRootNode().host`.
       * @this {Element}
       */},{key:"distributeContent",/**
       * Force this element to distribute its children to its local dom.
       * This should not be necessary as of Polymer 2.0.2 and is provided only
       * for backwards compatibility.
       * @return {void}
       */value:function distributeContent(){if(window.ShadyDOM&&this.shadowRoot){ShadyDOM.flush();}}/**
       * Returns a list of nodes that are the effective childNodes. The effective
       * childNodes list is the same as the element's childNodes except that
       * any `<content>` elements are replaced with the list of nodes distributed
       * to the `<content>`, the result of its `getDistributedNodes` method.
       * @return {!Array<!Node>} List of effective child nodes.
       * @suppress {invalidCasts} LegacyElementMixin must be applied to an HTMLElement
       */},{key:"getEffectiveChildNodes",value:function getEffectiveChildNodes(){var thisEl=/** @type {Element} */this;var domApi=/** @type {DomApi} */dom(thisEl);return domApi.getEffectiveChildNodes();}/**
       * Returns a list of nodes distributed within this element that match
       * `selector`. These can be dom children or elements distributed to
       * children that are insertion points.
       * @param {string} selector Selector to run.
       * @return {!Array<!Node>} List of distributed elements that match selector.
       * @suppress {invalidCasts} LegacyElementMixin must be applied to an HTMLElement
       */},{key:"queryDistributedElements",value:function queryDistributedElements(selector){var thisEl=/** @type {Element} */this;var domApi=/** @type {DomApi} */dom(thisEl);return domApi.queryDistributedElements(selector);}/**
       * Returns a list of elements that are the effective children. The effective
       * children list is the same as the element's children except that
       * any `<content>` elements are replaced with the list of elements
       * distributed to the `<content>`.
       *
       * @return {!Array<!Node>} List of effective children.
       */},{key:"getEffectiveChildren",value:function getEffectiveChildren(){var list=this.getEffectiveChildNodes();return list.filter(function(/** @type {!Node} */n){return n.nodeType===Node.ELEMENT_NODE;});}/**
       * Returns a string of text content that is the concatenation of the
       * text content's of the element's effective childNodes (the elements
       * returned by <a href="#getEffectiveChildNodes>getEffectiveChildNodes</a>.
       *
       * @return {string} List of effective children.
       */},{key:"getEffectiveTextContent",value:function getEffectiveTextContent(){var cn=this.getEffectiveChildNodes();var tc=[];for(var _i46=0,c;c=cn[_i46];_i46++){if(c.nodeType!==Node.COMMENT_NODE){tc.push(c.textContent);}}return tc.join('');}/**
       * Returns the first effective childNode within this element that
       * match `selector`. These can be dom child nodes or elements distributed
       * to children that are insertion points.
       * @param {string} selector Selector to run.
       * @return {Node} First effective child node that matches selector.
       */},{key:"queryEffectiveChildren",value:function queryEffectiveChildren(selector){var e$=this.queryDistributedElements(selector);return e$&&e$[0];}/**
       * Returns a list of effective childNodes within this element that
       * match `selector`. These can be dom child nodes or elements distributed
       * to children that are insertion points.
       * @param {string} selector Selector to run.
       * @return {!Array<!Node>} List of effective child nodes that match selector.
       */},{key:"queryAllEffectiveChildren",value:function queryAllEffectiveChildren(selector){return this.queryDistributedElements(selector);}/**
       * Returns a list of nodes distributed to this element's `<slot>`.
       *
       * If this element contains more than one `<slot>` in its local DOM,
       * an optional selector may be passed to choose the desired content.
       *
       * @param {string=} slctr CSS selector to choose the desired
       *   `<slot>`.  Defaults to `content`.
       * @return {!Array<!Node>} List of distributed nodes for the `<slot>`.
       */},{key:"getContentChildNodes",value:function getContentChildNodes(slctr){var content=this.root.querySelector(slctr||'slot');return content?/** @type {DomApi} */dom(content).getDistributedNodes():[];}/**
       * Returns a list of element children distributed to this element's
       * `<slot>`.
       *
       * If this element contains more than one `<slot>` in its
       * local DOM, an optional selector may be passed to choose the desired
       * content.  This method differs from `getContentChildNodes` in that only
       * elements are returned.
       *
       * @param {string=} slctr CSS selector to choose the desired
       *   `<content>`.  Defaults to `content`.
       * @return {!Array<!HTMLElement>} List of distributed nodes for the
       *   `<slot>`.
       * @suppress {invalidCasts}
       */},{key:"getContentChildren",value:function getContentChildren(slctr){var children=/** @type {!Array<!HTMLElement>} */this.getContentChildNodes(slctr).filter(function(n){return n.nodeType===Node.ELEMENT_NODE;});return children;}/**
       * Checks whether an element is in this element's light DOM tree.
       *
       * @param {?Node} node The element to be checked.
       * @return {boolean} true if node is in this element's light DOM tree.
       * @suppress {invalidCasts} LegacyElementMixin must be applied to an HTMLElement
       */},{key:"isLightDescendant",value:function isLightDescendant(node){var thisNode=/** @type {Node} */this;return thisNode!==node&&thisNode.contains(node)&&thisNode.getRootNode()===node.getRootNode();}/**
       * Checks whether an element is in this element's local DOM tree.
       *
       * @param {!Element} node The element to be checked.
       * @return {boolean} true if node is in this element's local DOM tree.
       */},{key:"isLocalDescendant",value:function isLocalDescendant(node){return this.root===node.getRootNode();}/**
       * No-op for backwards compatibility. This should now be handled by
       * ShadyCss library.
       * @param  {*} container Unused
       * @param  {*} shouldObserve Unused
       * @return {void}
       */},{key:"scopeSubtree",value:function scopeSubtree(container,shouldObserve){}// eslint-disable-line no-unused-vars
/**
     * Returns the computed style value for the given property.
     * @param {string} property The css property name.
     * @return {string} Returns the computed css property value for the given
     * `property`.
     * @suppress {invalidCasts} LegacyElementMixin must be applied to an HTMLElement
     */},{key:"getComputedStyleValue",value:function getComputedStyleValue(property){return styleInterface.getComputedStyleValue(/** @type {!Element} */this,property);}// debounce
/**
     * Call `debounce` to collapse multiple requests for a named task into
     * one invocation which is made after the wait time has elapsed with
     * no new request.  If no wait time is given, the callback will be called
     * at microtask timing (guaranteed before paint).
     *
     *     debouncedClickAction(e) {
     *       // will not call `processClick` more than once per 100ms
     *       this.debounce('click', function() {
     *        this.processClick();
     *       } 100);
     *     }
     *
     * @param {string} jobName String to identify the debounce job.
     * @param {function():void} callback Function that is called (with `this`
     *   context) when the wait time elapses.
     * @param {number} wait Optional wait time in milliseconds (ms) after the
     *   last signal that must elapse before invoking `callback`
     * @return {!Object} Returns a debouncer object on which exists the
     * following methods: `isActive()` returns true if the debouncer is
     * active; `cancel()` cancels the debouncer if it is active;
     * `flush()` immediately invokes the debounced callback if the debouncer
     * is active.
     */},{key:"debounce",value:function debounce(jobName,callback,wait){this._debouncers=this._debouncers||{};return this._debouncers[jobName]=Debouncer.debounce(this._debouncers[jobName],wait>0?timeOut.after(wait):microTask,callback.bind(this));}/**
       * Returns whether a named debouncer is active.
       *
       * @param {string} jobName The name of the debouncer started with `debounce`
       * @return {boolean} Whether the debouncer is active (has not yet fired).
       */},{key:"isDebouncerActive",value:function isDebouncerActive(jobName){this._debouncers=this._debouncers||{};var debouncer=this._debouncers[jobName];return!!(debouncer&&debouncer.isActive());}/**
       * Immediately calls the debouncer `callback` and inactivates it.
       *
       * @param {string} jobName The name of the debouncer started with `debounce`
       * @return {void}
       */},{key:"flushDebouncer",value:function flushDebouncer(jobName){this._debouncers=this._debouncers||{};var debouncer=this._debouncers[jobName];if(debouncer){debouncer.flush();}}/**
       * Cancels an active debouncer.  The `callback` will not be called.
       *
       * @param {string} jobName The name of the debouncer started with `debounce`
       * @return {void}
       */},{key:"cancelDebouncer",value:function cancelDebouncer(jobName){this._debouncers=this._debouncers||{};var debouncer=this._debouncers[jobName];if(debouncer){debouncer.cancel();}}/**
       * Runs a callback function asynchronously.
       *
       * By default (if no waitTime is specified), async callbacks are run at
       * microtask timing, which will occur before paint.
       *
       * @param {!Function} callback The callback function to run, bound to `this`.
       * @param {number=} waitTime Time to wait before calling the
       *   `callback`.  If unspecified or 0, the callback will be run at microtask
       *   timing (before paint).
       * @return {number} Handle that may be used to cancel the async job.
       */},{key:"async",value:function async(callback,waitTime){return waitTime>0?timeOut.run(callback.bind(this),waitTime):~microTask.run(callback.bind(this));}/**
       * Cancels an async operation started with `async`.
       *
       * @param {number} handle Handle returned from original `async` call to
       *   cancel.
       * @return {void}
       */},{key:"cancelAsync",value:function cancelAsync(handle){handle<0?microTask.cancel(~handle):timeOut.cancel(handle);}// other
/**
     * Convenience method for creating an element and configuring it.
     *
     * @param {string} tag HTML element tag to create.
     * @param {Object=} props Object of properties to configure on the
     *    instance.
     * @return {!Element} Newly created and configured element.
     */},{key:"create",value:function create(tag,props){var elt=document.createElement(tag);if(props){if(elt.setProperties){elt.setProperties(props);}else{for(var n in props){elt[n]=props[n];}}}return elt;}/**
       * Polyfill for Element.prototype.matches, which is sometimes still
       * prefixed.
       *
       * @param {string} selector Selector to test.
       * @param {!Element=} node Element to test the selector against.
       * @return {boolean} Whether the element matches the selector.
       */},{key:"elementMatches",value:function elementMatches(selector,node){return matchesSelector(node||this,selector);}/**
       * Toggles an HTML attribute on or off.
       *
       * @param {string} name HTML attribute name
       * @param {boolean=} bool Boolean to force the attribute on or off.
       *    When unspecified, the state of the attribute will be reversed.
       * @return {boolean} true if the attribute now exists
       */},{key:"toggleAttribute",value:function toggleAttribute(name,bool){var node=/** @type {Element} */this;if(arguments.length===3){node=/** @type {Element} */arguments[2];}if(arguments.length==1){bool=!node.hasAttribute(name);}if(bool){node.setAttribute(name,'');return true;}else{node.removeAttribute(name);return false;}}/**
       * Toggles a CSS class on or off.
       *
       * @param {string} name CSS class name
       * @param {boolean=} bool Boolean to force the class on or off.
       *    When unspecified, the state of the class will be reversed.
       * @param {Element=} node Node to target.  Defaults to `this`.
       * @return {void}
       */},{key:"toggleClass",value:function toggleClass(name,bool,node){node=/** @type {Element} */node||this;if(arguments.length==1){bool=!node.classList.contains(name);}if(bool){node.classList.add(name);}else{node.classList.remove(name);}}/**
       * Cross-platform helper for setting an element's CSS `transform` property.
       *
       * @param {string} transformText Transform setting.
       * @param {Element=} node Element to apply the transform to.
       * Defaults to `this`
       * @return {void}
       */},{key:"transform",value:function transform(transformText,node){node=/** @type {Element} */node||this;node.style.webkitTransform=transformText;node.style.transform=transformText;}/**
       * Cross-platform helper for setting an element's CSS `translate3d`
       * property.
       *
       * @param {number} x X offset.
       * @param {number} y Y offset.
       * @param {number} z Z offset.
       * @param {Element=} node Element to apply the transform to.
       * Defaults to `this`.
       * @return {void}
       */},{key:"translate3d",value:function translate3d(x,y,z,node){node=/** @type {Element} */node||this;this.transform('translate3d('+x+','+y+','+z+')',node);}/**
       * Removes an item from an array, if it exists.
       *
       * If the array is specified by path, a change notification is
       * generated, so that observers, data bindings and computed
       * properties watching that path can update.
       *
       * If the array is passed directly, **no change
       * notification is generated**.
       *
       * @param {string | !Array<number|string>} arrayOrPath Path to array from which to remove the item
       *   (or the array itself).
       * @param {*} item Item to remove.
       * @return {Array} Array containing item removed.
       */},{key:"arrayDelete",value:function arrayDelete(arrayOrPath,item){var index;if(Array.isArray(arrayOrPath)){index=arrayOrPath.indexOf(item);if(index>=0){return arrayOrPath.splice(index,1);}}else{var arr=_get(this,arrayOrPath);index=arr.indexOf(item);if(index>=0){return this.splice(arrayOrPath,index,1);}}return null;}// logging
/**
     * Facades `console.log`/`warn`/`error` as override point.
     *
     * @param {string} level One of 'log', 'warn', 'error'
     * @param {Array} args Array of strings or objects to log
     * @return {void}
     */},{key:"_logger",value:function _logger(level,args){var _console;// accept ['foo', 'bar'] and [['foo', 'bar']]
if(Array.isArray(args)&&args.length===1&&Array.isArray(args[0])){args=args[0];}switch(level){case'log':case'warn':case'error':(_console=console)[level].apply(_console,babelHelpers.toConsumableArray(args));}}/**
       * Facades `console.log` as an override point.
       *
       * @param {...*} args Array of strings or objects to log
       * @return {void}
       */},{key:"_log",value:function _log(){for(var _len4=arguments.length,args=new Array(_len4),_key4=0;_key4<_len4;_key4++){args[_key4]=arguments[_key4];}this._logger('log',args);}/**
       * Facades `console.warn` as an override point.
       *
       * @param {...*} args Array of strings or objects to log
       * @return {void}
       */},{key:"_warn",value:function _warn(){for(var _len5=arguments.length,args=new Array(_len5),_key5=0;_key5<_len5;_key5++){args[_key5]=arguments[_key5];}this._logger('warn',args);}/**
       * Facades `console.error` as an override point.
       *
       * @param {...*} args Array of strings or objects to log
       * @return {void}
       */},{key:"_error",value:function _error(){for(var _len6=arguments.length,args=new Array(_len6),_key6=0;_key6<_len6;_key6++){args[_key6]=arguments[_key6];}this._logger('error',args);}/**
       * Formats a message using the element type an a method name.
       *
       * @param {string} methodName Method name to associate with message
       * @param {...*} args Array of strings or objects to log
       * @return {Array} Array with formatting information for `console`
       *   logging.
       */},{key:"_logf",value:function _logf(methodName){for(var _len7=arguments.length,args=new Array(_len7>1?_len7-1:0),_key7=1;_key7<_len7;_key7++){args[_key7-1]=arguments[_key7];}return['[%s::%s]',this.is,methodName].concat(args);}},{key:"domHost",get:function get(){var root$$1=this.getRootNode();return babelHelpers.instanceof(root$$1,DocumentFragment)?/** @type {ShadowRoot} */root$$1.host:root$$1;}}],[{key:"importMeta",get:function get(){return this.prototype.importMeta;}}]);return LegacyElement;}(legacyElementBase);LegacyElement.prototype.is='';return LegacyElement;});_exports.LegacyElementMixin=LegacyElementMixin;var legacyElementMixin={LegacyElementMixin:LegacyElementMixin};_exports.$legacyElementMixin=legacyElementMixin;var metaProps={attached:true,detached:true,ready:true,created:true,beforeRegister:true,registered:true,attributeChanged:true,// meta objects
behaviors:true};/**
    * Applies a "legacy" behavior or array of behaviors to the provided class.
    *
    * Note: this method will automatically also apply the `LegacyElementMixin`
    * to ensure that any legacy behaviors can rely on legacy Polymer API on
    * the underlying element.
    *
    * @function
    * @template T
    * @param {!Object|!Array<!Object>} behaviors Behavior object or array of behaviors.
    * @param {function(new:T)} klass Element class.
    * @return {?} Returns a new Element class extended by the
    * passed in `behaviors` and also by `LegacyElementMixin`.
    * @suppress {invalidCasts, checkTypes}
    */function mixinBehaviors(behaviors,klass){if(!behaviors){klass=/** @type {HTMLElement} */klass;// eslint-disable-line no-self-assign
return klass;}// NOTE: ensure the behavior is extending a class with
// legacy element api. This is necessary since behaviors expect to be able
// to access 1.x legacy api.
klass=LegacyElementMixin(klass);if(!Array.isArray(behaviors)){behaviors=[behaviors];}var superBehaviors=klass.prototype.behaviors;// get flattened, deduped list of behaviors *not* already on super class
behaviors=flattenBehaviors(behaviors,null,superBehaviors);// mixin new behaviors
klass=_mixinBehaviors(behaviors,klass);if(superBehaviors){behaviors=superBehaviors.concat(behaviors);}// Set behaviors on prototype for BC...
klass.prototype.behaviors=behaviors;return klass;}// NOTE:
// 1.x
// Behaviors were mixed in *in reverse order* and de-duped on the fly.
// The rule was that behavior properties were copied onto the element
// prototype if and only if the property did not already exist.
// Given: Polymer{ behaviors: [A, B, C, A, B]}, property copy order was:
// (1), B, (2), A, (3) C. This means prototype properties win over
// B properties win over A win over C. This mirrors what would happen
// with inheritance if element extended B extended A extended C.
//
// Again given, Polymer{ behaviors: [A, B, C, A, B]}, the resulting
// `behaviors` array was [C, A, B].
// Behavior lifecycle methods were called in behavior array order
// followed by the element, e.g. (1) C.created, (2) A.created,
// (3) B.created, (4) element.created. There was no support for
// super, and "super-behavior" methods were callable only by name).
//
// 2.x
// Behaviors are made into proper mixins which live in the
// element's prototype chain. Behaviors are placed in the element prototype
// eldest to youngest and de-duped youngest to oldest:
// So, first [A, B, C, A, B] becomes [C, A, B] then,
// the element prototype becomes (oldest) (1) PolymerElement, (2) class(C),
// (3) class(A), (4) class(B), (5) class(Polymer({...})).
// Result:
// This means element properties win over B properties win over A win
// over C. (same as 1.x)
// If lifecycle is called (super then me), order is
// (1) C.created, (2) A.created, (3) B.created, (4) element.created
// (again same as 1.x)
function _mixinBehaviors(behaviors,klass){for(var _i47=0;_i47<behaviors.length;_i47++){var b=behaviors[_i47];if(b){klass=Array.isArray(b)?_mixinBehaviors(b,klass):GenerateClassFromInfo(b,klass);}}return klass;}/**
   * @param {Array} behaviors List of behaviors to flatten.
   * @param {Array=} list Target list to flatten behaviors into.
   * @param {Array=} exclude List of behaviors to exclude from the list.
   * @return {!Array} Returns the list of flattened behaviors.
   */function flattenBehaviors(behaviors,list,exclude){list=list||[];for(var _i48=behaviors.length-1;_i48>=0;_i48--){var b=behaviors[_i48];if(b){if(Array.isArray(b)){flattenBehaviors(b,list);}else{// dedup
if(list.indexOf(b)<0&&(!exclude||exclude.indexOf(b)<0)){list.unshift(b);}}}else{console.warn('behavior is null, check for missing or 404 import');}}return list;}/**
   * @param {!PolymerInit} info Polymer info object
   * @param {function(new:HTMLElement)} Base base class to extend with info object
   * @return {function(new:HTMLElement)} Generated class
   * @suppress {checkTypes}
   * @private
   */function GenerateClassFromInfo(info,Base){/** @private */var PolymerGenerated=/*#__PURE__*/function(_Base){babelHelpers.inherits(PolymerGenerated,_Base);function PolymerGenerated(){babelHelpers.classCallCheck(this,PolymerGenerated);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PolymerGenerated).apply(this,arguments));}babelHelpers.createClass(PolymerGenerated,[{key:"created",/**
       * @return {void}
       */value:function created(){babelHelpers.get(babelHelpers.getPrototypeOf(PolymerGenerated.prototype),"created",this).call(this);if(info.created){info.created.call(this);}}/**
       * @return {void}
       */},{key:"_registered",value:function _registered(){babelHelpers.get(babelHelpers.getPrototypeOf(PolymerGenerated.prototype),"_registered",this).call(this);/* NOTE: `beforeRegister` is called here for bc, but the behavior
                            is different than in 1.x. In 1.0, the method was called *after*
                            mixing prototypes together but *before* processing of meta-objects.
                            However, dynamic effects can still be set here and can be done either
                            in `beforeRegister` or `registered`. It is no longer possible to set
                            `is` in `beforeRegister` as you could in 1.x.
                           */if(info.beforeRegister){info.beforeRegister.call(Object.getPrototypeOf(this));}if(info.registered){info.registered.call(Object.getPrototypeOf(this));}}/**
       * @return {void}
       */},{key:"_applyListeners",value:function _applyListeners(){babelHelpers.get(babelHelpers.getPrototypeOf(PolymerGenerated.prototype),"_applyListeners",this).call(this);if(info.listeners){for(var l in info.listeners){this._addMethodEventListenerToNode(this,l,info.listeners[l]);}}}// note: exception to "super then me" rule;
// do work before calling super so that super attributes
// only apply if not already set.
/**
     * @return {void}
     */},{key:"_ensureAttributes",value:function _ensureAttributes(){if(info.hostAttributes){for(var a in info.hostAttributes){this._ensureAttribute(a,info.hostAttributes[a]);}}babelHelpers.get(babelHelpers.getPrototypeOf(PolymerGenerated.prototype),"_ensureAttributes",this).call(this);}/**
       * @return {void}
       */},{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(PolymerGenerated.prototype),"ready",this).call(this);if(info.ready){info.ready.call(this);}}/**
       * @return {void}
       */},{key:"attached",value:function attached(){babelHelpers.get(babelHelpers.getPrototypeOf(PolymerGenerated.prototype),"attached",this).call(this);if(info.attached){info.attached.call(this);}}/**
       * @return {void}
       */},{key:"detached",value:function detached(){babelHelpers.get(babelHelpers.getPrototypeOf(PolymerGenerated.prototype),"detached",this).call(this);if(info.detached){info.detached.call(this);}}/**
       * Implements native Custom Elements `attributeChangedCallback` to
       * set an attribute value to a property via `_attributeToProperty`.
       *
       * @param {string} name Name of attribute that changed
       * @param {?string} old Old attribute value
       * @param {?string} value New attribute value
       * @return {void}
       */},{key:"attributeChanged",value:function attributeChanged(name,old,value){babelHelpers.get(babelHelpers.getPrototypeOf(PolymerGenerated.prototype),"attributeChanged",this).call(this,name,old,value);if(info.attributeChanged){info.attributeChanged.call(this,name,old,value);}}}],[{key:"properties",get:function get(){return info.properties;}},{key:"observers",get:function get(){return info.observers;}}]);return PolymerGenerated;}(Base);PolymerGenerated.generatedFrom=info;for(var _p13 in info){// NOTE: cannot copy `metaProps` methods onto prototype at least because
// `super.ready` must be called and is not included in the user fn.
if(!(_p13 in metaProps)){var pd=Object.getOwnPropertyDescriptor(info,_p13);if(pd){Object.defineProperty(PolymerGenerated.prototype,_p13,pd);}}}return PolymerGenerated;}/**
   * Generates a class that extends `LegacyElement` based on the
   * provided info object.  Metadata objects on the `info` object
   * (`properties`, `observers`, `listeners`, `behaviors`, `is`) are used
   * for Polymer's meta-programming systems, and any functions are copied
   * to the generated class.
   *
   * Valid "metadata" values are as follows:
   *
   * `is`: String providing the tag name to register the element under. In
   * addition, if a `dom-module` with the same id exists, the first template
   * in that `dom-module` will be stamped into the shadow root of this element,
   * with support for declarative event listeners (`on-...`), Polymer data
   * bindings (`[[...]]` and `{{...}}`), and id-based node finding into
   * `this.$`.
   *
   * `properties`: Object describing property-related metadata used by Polymer
   * features (key: property names, value: object containing property metadata).
   * Valid keys in per-property metadata include:
   * - `type` (String|Number|Object|Array|...): Used by
   *   `attributeChangedCallback` to determine how string-based attributes
   *   are deserialized to JavaScript property values.
   * - `notify` (boolean): Causes a change in the property to fire a
   *   non-bubbling event called `<property>-changed`. Elements that have
   *   enabled two-way binding to the property use this event to observe changes.
   * - `readOnly` (boolean): Creates a getter for the property, but no setter.
   *   To set a read-only property, use the private setter method
   *   `_setProperty(property, value)`.
   * - `observer` (string): Observer method name that will be called when
   *   the property changes. The arguments of the method are
   *   `(value, previousValue)`.
   * - `computed` (string): String describing method and dependent properties
   *   for computing the value of this property (e.g. `'computeFoo(bar, zot)'`).
   *   Computed properties are read-only by default and can only be changed
   *   via the return value of the computing method.
   *
   * `observers`: Array of strings describing multi-property observer methods
   *  and their dependent properties (e.g. `'observeABC(a, b, c)'`).
   *
   * `listeners`: Object describing event listeners to be added to each
   *  instance of this element (key: event name, value: method name).
   *
   * `behaviors`: Array of additional `info` objects containing metadata
   * and callbacks in the same format as the `info` object here which are
   * merged into this element.
   *
   * `hostAttributes`: Object listing attributes to be applied to the host
   *  once created (key: attribute name, value: attribute value).  Values
   *  are serialized based on the type of the value.  Host attributes should
   *  generally be limited to attributes such as `tabIndex` and `aria-...`.
   *  Attributes in `hostAttributes` are only applied if a user-supplied
   *  attribute is not already present (attributes in markup override
   *  `hostAttributes`).
   *
   * In addition, the following Polymer-specific callbacks may be provided:
   * - `registered`: called after first instance of this element,
   * - `created`: called during `constructor`
   * - `attached`: called during `connectedCallback`
   * - `detached`: called during `disconnectedCallback`
   * - `ready`: called before first `attached`, after all properties of
   *   this element have been propagated to its template and all observers
   *   have run
   *
   * @param {!PolymerInit} info Object containing Polymer metadata and functions
   *   to become class methods.
   * @template T
   * @param {function(T):T} mixin Optional mixin to apply to legacy base class
   *   before extending with Polymer metaprogramming.
   * @return {function(new:HTMLElement)} Generated class
   */var Class=function Class(info,mixin){if(!info){console.warn("Polymer's Class function requires `info` argument");}var baseWithBehaviors=info.behaviors?// note: mixinBehaviors ensures `LegacyElementMixin`.
mixinBehaviors(info.behaviors,HTMLElement):LegacyElementMixin(HTMLElement);var baseWithMixin=mixin?mixin(baseWithBehaviors):baseWithBehaviors;var klass=GenerateClassFromInfo(info,baseWithMixin);// decorate klass with registration info
klass.is=info.is;return klass;};_exports.Class=Class;var _class={mixinBehaviors:mixinBehaviors,Class:Class};_exports.$class=_class;var Polymer$1=function Polymer$1(info){// if input is a `class` (aka a function with a prototype), use the prototype
// remember that the `constructor` will never be called
var klass;if(typeof info==='function'){klass=info;}else{klass=Polymer$1.Class(info);}customElements.define(klass.is,/** @type {!HTMLElement} */klass);return klass;};_exports.Polymer$1=_exports.Polymer=Polymer$1;Polymer$1.Class=Class;var polymerFn={Polymer:Polymer$1};_exports.$polymerFn=polymerFn;function mutablePropertyChange(inst,property,value,old,mutableData){var isObject;if(mutableData){isObject=babelHelpers.typeof(value)==='object'&&value!==null;// Pull `old` for Objects from temp cache, but treat `null` as a primitive
if(isObject){old=inst.__dataTemp[property];}}// Strict equality check, but return false for NaN===NaN
var shouldChange=old!==value&&(old===old||value===value);// Objects are stored in temporary cache (cleared at end of
// turn), which is used for dirty-checking
if(isObject&&shouldChange){inst.__dataTemp[property]=value;}return shouldChange;}/**
   * Element class mixin to skip strict dirty-checking for objects and arrays
   * (always consider them to be "dirty"), for use on elements utilizing
   * `PropertyEffects`
   *
   * By default, `PropertyEffects` performs strict dirty checking on
   * objects, which means that any deep modifications to an object or array will
   * not be propagated unless "immutable" data patterns are used (i.e. all object
   * references from the root to the mutation were changed).
   *
   * Polymer also provides a proprietary data mutation and path notification API
   * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
   * mutation and notification of deep changes in an object graph to all elements
   * bound to the same object graph.
   *
   * In cases where neither immutable patterns nor the data mutation API can be
   * used, applying this mixin will cause Polymer to skip dirty checking for
   * objects and arrays (always consider them to be "dirty").  This allows a
   * user to make a deep modification to a bound object graph, and then either
   * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
   * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
   * elements that wish to be updated based on deep mutations must apply this
   * mixin or otherwise skip strict dirty checking for objects/arrays.
   * Specifically, any elements in the binding tree between the source of a
   * mutation and the consumption of it must apply this mixin or enable the
   * `OptionalMutableData` mixin.
   *
   * In order to make the dirty check strategy configurable, see
   * `OptionalMutableData`.
   *
   * Note, the performance characteristics of propagating large object graphs
   * will be worse as opposed to using strict dirty checking with immutable
   * patterns or Polymer's path notification API.
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin to skip strict dirty-checking for objects
   *   and arrays
   */var MutableData=dedupingMixin(function(superClass){/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_MutableData}
   */var MutableData=/*#__PURE__*/function(_superClass4){babelHelpers.inherits(MutableData,_superClass4);function MutableData(){babelHelpers.classCallCheck(this,MutableData);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(MutableData).apply(this,arguments));}babelHelpers.createClass(MutableData,[{key:"_shouldPropertyChange",/**
     * Overrides `PropertyEffects` to provide option for skipping
     * strict equality checking for Objects and Arrays.
     *
     * This method pulls the value to dirty check against from the `__dataTemp`
     * cache (rather than the normal `__data` cache) for Objects.  Since the temp
     * cache is cleared at the end of a turn, this implementation allows
     * side-effects of deep object changes to be processed by re-setting the
     * same object (using the temp cache as an in-turn backstop to prevent
     * cycles due to 2-way notification).
     *
     * @param {string} property Property name
     * @param {*} value New property value
     * @param {*} old Previous property value
     * @return {boolean} Whether the property should be considered a change
     * @protected
     */value:function _shouldPropertyChange(property,value,old){return mutablePropertyChange(this,property,value,old,true);}}]);return MutableData;}(superClass);return MutableData;});/**
     * Element class mixin to add the optional ability to skip strict
     * dirty-checking for objects and arrays (always consider them to be
     * "dirty") by setting a `mutable-data` attribute on an element instance.
     *
     * By default, `PropertyEffects` performs strict dirty checking on
     * objects, which means that any deep modifications to an object or array will
     * not be propagated unless "immutable" data patterns are used (i.e. all object
     * references from the root to the mutation were changed).
     *
     * Polymer also provides a proprietary data mutation and path notification API
     * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
     * mutation and notification of deep changes in an object graph to all elements
     * bound to the same object graph.
     *
     * In cases where neither immutable patterns nor the data mutation API can be
     * used, applying this mixin will allow Polymer to skip dirty checking for
     * objects and arrays (always consider them to be "dirty").  This allows a
     * user to make a deep modification to a bound object graph, and then either
     * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
     * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
     * elements that wish to be updated based on deep mutations must apply this
     * mixin or otherwise skip strict dirty checking for objects/arrays.
     * Specifically, any elements in the binding tree between the source of a
     * mutation and the consumption of it must enable this mixin or apply the
     * `MutableData` mixin.
     *
     * While this mixin adds the ability to forgo Object/Array dirty checking,
     * the `mutableData` flag defaults to false and must be set on the instance.
     *
     * Note, the performance characteristics of propagating large object graphs
     * will be worse by relying on `mutableData: true` as opposed to using
     * strict dirty checking with immutable patterns or Polymer's path notification
     * API.
     *
     * @mixinFunction
     * @polymer
     * @summary Element class mixin to optionally skip strict dirty-checking
     *   for objects and arrays
     */_exports.MutableData=MutableData;var OptionalMutableData=dedupingMixin(function(superClass){/**
   * @mixinClass
   * @polymer
   * @implements {Polymer_OptionalMutableData}
   */var OptionalMutableData=/*#__PURE__*/function(_superClass5){babelHelpers.inherits(OptionalMutableData,_superClass5);function OptionalMutableData(){babelHelpers.classCallCheck(this,OptionalMutableData);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(OptionalMutableData).apply(this,arguments));}babelHelpers.createClass(OptionalMutableData,[{key:"_shouldPropertyChange",/**
       * Overrides `PropertyEffects` to provide option for skipping
       * strict equality checking for Objects and Arrays.
       *
       * When `this.mutableData` is true on this instance, this method
       * pulls the value to dirty check against from the `__dataTemp` cache
       * (rather than the normal `__data` cache) for Objects.  Since the temp
       * cache is cleared at the end of a turn, this implementation allows
       * side-effects of deep object changes to be processed by re-setting the
       * same object (using the temp cache as an in-turn backstop to prevent
       * cycles due to 2-way notification).
       *
       * @param {string} property Property name
       * @param {*} value New property value
       * @param {*} old Previous property value
       * @return {boolean} Whether the property should be considered a change
       * @protected
       */value:function _shouldPropertyChange(property,value,old){return mutablePropertyChange(this,property,value,old,this.mutableData);}}],[{key:"properties",get:function get(){return{/**
         * Instance-level flag for configuring the dirty-checking strategy
         * for this element.  When true, Objects and Arrays will skip dirty
         * checking, otherwise strict equality checking will be used.
         */mutableData:Boolean};}}]);return OptionalMutableData;}(superClass);return OptionalMutableData;});// Export for use by legacy behavior
_exports.OptionalMutableData=OptionalMutableData;MutableData._mutablePropertyChange=mutablePropertyChange;var mutableData={MutableData:MutableData,OptionalMutableData:OptionalMutableData};// machinery for propagating host properties to children. This is an ES5
// class only because Babel (incorrectly) requires super() in the class
// constructor even though no `this` is used and it returns an instance.
_exports.$mutableData=mutableData;var newInstance=null;/**
                         * @constructor
                         * @extends {HTMLTemplateElement}
                         * @private
                         */function HTMLTemplateElementExtension(){return newInstance;}HTMLTemplateElementExtension.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:HTMLTemplateElementExtension,writable:true}});/**
     * @constructor
     * @implements {Polymer_PropertyEffects}
     * @extends {HTMLTemplateElementExtension}
     * @private
     */var DataTemplate=PropertyEffects(HTMLTemplateElementExtension);/**
                                                                     * @constructor
                                                                     * @implements {Polymer_MutableData}
                                                                     * @extends {DataTemplate}
                                                                     * @private
                                                                     */var MutableDataTemplate=MutableData(DataTemplate);// Applies a DataTemplate subclass to a <template> instance
function upgradeTemplate(template,constructor){newInstance=template;Object.setPrototypeOf(template,constructor.prototype);new constructor();newInstance=null;}/**
   * Base class for TemplateInstance.
   * @constructor
   * @implements {Polymer_PropertyEffects}
   * @private
   */var base=PropertyEffects(/*#__PURE__*/function(){function _class2(){babelHelpers.classCallCheck(this,_class2);}return _class2;}());/**
                                         * @polymer
                                         * @customElement
                                         * @appliesMixin PropertyEffects
                                         * @unrestricted
                                         */var TemplateInstanceBase=/*#__PURE__*/function(_base3){babelHelpers.inherits(TemplateInstanceBase,_base3);function TemplateInstanceBase(props){var _this18;babelHelpers.classCallCheck(this,TemplateInstanceBase);_this18=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(TemplateInstanceBase).call(this));_this18._configureProperties(props);_this18.root=_this18._stampTemplate(_this18.__dataHost);// Save list of stamped children
var children=_this18.children=[];for(var n=_this18.root.firstChild;n;n=n.nextSibling){children.push(n);n.__templatizeInstance=babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(_this18));}if(_this18.__templatizeOwner&&_this18.__templatizeOwner.__hideTemplateChildren__){_this18._showHideChildren(true);}// Flush props only when props are passed if instance props exist
// or when there isn't instance props.
var options=_this18.__templatizeOptions;if(props&&options.instanceProps||!options.instanceProps){_this18._enableProperties();}return _this18;}/**
     * Configure the given `props` by calling `_setPendingProperty`. Also
     * sets any properties stored in `__hostProps`.
     * @private
     * @param {Object} props Object of property name-value pairs to set.
     * @return {void}
     */babelHelpers.createClass(TemplateInstanceBase,[{key:"_configureProperties",value:function _configureProperties(props){var options=this.__templatizeOptions;if(options.forwardHostProp){for(var hprop in this.__hostProps){this._setPendingProperty(hprop,this.__dataHost['_host_'+hprop]);}}// Any instance props passed in the constructor will overwrite host props;
// normally this would be a user error but we don't specifically filter them
for(var iprop in props){this._setPendingProperty(iprop,props[iprop]);}}/**
     * Forwards a host property to this instance.  This method should be
     * called on instances from the `options.forwardHostProp` callback
     * to propagate changes of host properties to each instance.
     *
     * Note this method enqueues the change, which are flushed as a batch.
     *
     * @param {string} prop Property or path name
     * @param {*} value Value of the property to forward
     * @return {void}
     */},{key:"forwardHostProp",value:function forwardHostProp(prop,value){if(this._setPendingPropertyOrPath(prop,value,false,true)){this.__dataHost._enqueueClient(this);}}/**
     * Override point for adding custom or simulated event handling.
     *
     * @override
     * @param {!Node} node Node to add event listener to
     * @param {string} eventName Name of event
     * @param {function(!Event):void} handler Listener function to add
     * @return {void}
     */},{key:"_addEventListenerToNode",value:function _addEventListenerToNode(node,eventName,handler){var _this19=this;if(this._methodHost&&this.__templatizeOptions.parentModel){// If this instance should be considered a parent model, decorate
// events this template instance as `model`
this._methodHost._addEventListenerToNode(node,eventName,function(e){e.model=_this19;handler(e);});}else{// Otherwise delegate to the template's host (which could be)
// another template instance
var templateHost=this.__dataHost.__dataHost;if(templateHost){templateHost._addEventListenerToNode(node,eventName,handler);}}}/**
     * Shows or hides the template instance top level child elements. For
     * text nodes, `textContent` is removed while "hidden" and replaced when
     * "shown."
     * @param {boolean} hide Set to true to hide the children;
     * set to false to show them.
     * @return {void}
     * @protected
     */},{key:"_showHideChildren",value:function _showHideChildren(hide){var c=this.children;for(var _i49=0;_i49<c.length;_i49++){var n=c[_i49];// Ignore non-changes
if(Boolean(hide)!=Boolean(n.__hideTemplateChildren__)){if(n.nodeType===Node.TEXT_NODE){if(hide){n.__polymerTextContent__=n.textContent;n.textContent='';}else{n.textContent=n.__polymerTextContent__;}// remove and replace slot
}else if(n.localName==='slot'){if(hide){n.__polymerReplaced__=document.createComment('hidden-slot');n.parentNode.replaceChild(n.__polymerReplaced__,n);}else{var replace=n.__polymerReplaced__;if(replace){replace.parentNode.replaceChild(n,replace);}}}else if(n.style){if(hide){n.__polymerDisplay__=n.style.display;n.style.display='none';}else{n.style.display=n.__polymerDisplay__;}}}n.__hideTemplateChildren__=hide;if(n._showHideChildren){n._showHideChildren(hide);}}}/**
     * Overrides default property-effects implementation to intercept
     * textContent bindings while children are "hidden" and cache in
     * private storage for later retrieval.
     *
     * @override
     * @param {!Node} node The node to set a property on
     * @param {string} prop The property to set
     * @param {*} value The value to set
     * @return {void}
     * @protected
     */},{key:"_setUnmanagedPropertyToNode",value:function _setUnmanagedPropertyToNode(node,prop,value){if(node.__hideTemplateChildren__&&node.nodeType==Node.TEXT_NODE&&prop=='textContent'){node.__polymerTextContent__=value;}else{babelHelpers.get(babelHelpers.getPrototypeOf(TemplateInstanceBase.prototype),"_setUnmanagedPropertyToNode",this).call(this,node,prop,value);}}/**
     * Find the parent model of this template instance.  The parent model
     * is either another templatize instance that had option `parentModel: true`,
     * or else the host element.
     *
     * @return {!Polymer_PropertyEffects} The parent model of this instance
     */},{key:"dispatchEvent",/**
     * Stub of HTMLElement's `dispatchEvent`, so that effects that may
     * dispatch events safely no-op.
     *
     * @param {Event} event Event to dispatch
     * @return {boolean} Always true.
     */value:function dispatchEvent(event){// eslint-disable-line no-unused-vars
return true;}},{key:"parentModel",get:function get(){var model=this.__parentModel;if(!model){var options;model=this;do{// A template instance's `__dataHost` is a <template>
// `model.__dataHost.__dataHost` is the template's host
model=model.__dataHost.__dataHost;}while((options=model.__templatizeOptions)&&!options.parentModel);this.__parentModel=model;}return model;}}]);return TemplateInstanceBase;}(base);/** @type {!DataTemplate} */_exports.TemplateInstanceBase=TemplateInstanceBase;TemplateInstanceBase.prototype.__dataHost;/** @type {!TemplatizeOptions} */TemplateInstanceBase.prototype.__templatizeOptions;/** @type {!Polymer_PropertyEffects} */TemplateInstanceBase.prototype._methodHost;/** @type {!Object} */TemplateInstanceBase.prototype.__templatizeOwner;/** @type {!Object} */TemplateInstanceBase.prototype.__hostProps;/**
                                             * @constructor
                                             * @extends {TemplateInstanceBase}
                                             * @implements {Polymer_MutableData}
                                             * @private
                                             */var MutableTemplateInstanceBase=MutableData(TemplateInstanceBase);function findMethodHost(template){// Technically this should be the owner of the outermost template.
// In shadow dom, this is always getRootNode().host, but we can
// approximate this via cooperation with our dataHost always setting
// `_methodHost` as long as there were bindings (or id's) on this
// instance causing it to get a dataHost.
var templateHost=template.__dataHost;return templateHost&&templateHost._methodHost||templateHost;}/* eslint-disable valid-jsdoc */ /**
                                    * @suppress {missingProperties} class.prototype is not defined for some reason
                                    */function createTemplatizerClass(template,templateInfo,options){// Anonymous class created by the templatize
var base=options.mutableData?MutableTemplateInstanceBase:TemplateInstanceBase;/**
                                                                                        * @constructor
                                                                                        * @extends {base}
                                                                                        * @private
                                                                                        */var klass=/*#__PURE__*/function(_base4){babelHelpers.inherits(klass,_base4);function klass(){babelHelpers.classCallCheck(this,klass);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(klass).apply(this,arguments));}return klass;}(base);klass.prototype.__templatizeOptions=options;klass.prototype._bindTemplate(template);addNotifyEffects(klass,template,templateInfo,options);return klass;}/**
   * @suppress {missingProperties} class.prototype is not defined for some reason
   */function addPropagateEffects(template,templateInfo,options){var userForwardHostProp=options.forwardHostProp;if(userForwardHostProp){// Provide data API and property effects on memoized template class
var klass=templateInfo.templatizeTemplateClass;if(!klass){var _base5=options.mutableData?MutableDataTemplate:DataTemplate;/** @private */klass=templateInfo.templatizeTemplateClass=/*#__PURE__*/function(_base6){babelHelpers.inherits(TemplatizedTemplate,_base6);function TemplatizedTemplate(){babelHelpers.classCallCheck(this,TemplatizedTemplate);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(TemplatizedTemplate).apply(this,arguments));}return TemplatizedTemplate;}(_base5);// Add template - >instances effects
// and host <- template effects
var hostProps=templateInfo.hostProps;for(var prop in hostProps){klass.prototype._addPropertyEffect('_host_'+prop,klass.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:createForwardHostPropEffect(prop,userForwardHostProp)});klass.prototype._createNotifyingProperty('_host_'+prop);}}upgradeTemplate(template,klass);// Mix any pre-bound data into __data; no need to flush this to
// instances since they pull from the template at instance-time
if(template.__dataProto){// Note, generally `__dataProto` could be chained, but it's guaranteed
// to not be since this is a vanilla template we just added effects to
Object.assign(template.__data,template.__dataProto);}// Clear any pending data for performance
template.__dataTemp={};template.__dataPending=null;template.__dataOld=null;template._enableProperties();}}/* eslint-enable valid-jsdoc */function createForwardHostPropEffect(hostProp,userForwardHostProp){return function forwardHostProp(template,prop,props){userForwardHostProp.call(template.__templatizeOwner,prop.substring('_host_'.length),props[prop]);};}function addNotifyEffects(klass,template,templateInfo,options){var hostProps=templateInfo.hostProps||{};for(var iprop in options.instanceProps){delete hostProps[iprop];var userNotifyInstanceProp=options.notifyInstanceProp;if(userNotifyInstanceProp){klass.prototype._addPropertyEffect(iprop,klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:createNotifyInstancePropEffect(iprop,userNotifyInstanceProp)});}}if(options.forwardHostProp&&template.__dataHost){for(var hprop in hostProps){klass.prototype._addPropertyEffect(hprop,klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:createNotifyHostPropEffect()});}}}function createNotifyInstancePropEffect(instProp,userNotifyInstanceProp){return function notifyInstanceProp(inst,prop,props){userNotifyInstanceProp.call(inst.__templatizeOwner,inst,prop,props[prop]);};}function createNotifyHostPropEffect(){return function notifyHostProp(inst,prop,props){inst.__dataHost._setPendingPropertyOrPath('_host_'+prop,props[prop],true,true);};}/**
   * Returns an anonymous `PropertyEffects` class bound to the
   * `<template>` provided.  Instancing the class will result in the
   * template being stamped into a document fragment stored as the instance's
   * `root` property, after which it can be appended to the DOM.
   *
   * Templates may utilize all Polymer data-binding features as well as
   * declarative event listeners.  Event listeners and inline computing
   * functions in the template will be called on the host of the template.
   *
   * The constructor returned takes a single argument dictionary of initial
   * property values to propagate into template bindings.  Additionally
   * host properties can be forwarded in, and instance properties can be
   * notified out by providing optional callbacks in the `options` dictionary.
   *
   * Valid configuration in `options` are as follows:
   *
   * - `forwardHostProp(property, value)`: Called when a property referenced
   *   in the template changed on the template's host. As this library does
   *   not retain references to templates instanced by the user, it is the
   *   templatize owner's responsibility to forward host property changes into
   *   user-stamped instances.  The `instance.forwardHostProp(property, value)`
   *    method on the generated class should be called to forward host
   *   properties into the template to prevent unnecessary property-changed
   *   notifications. Any properties referenced in the template that are not
   *   defined in `instanceProps` will be notified up to the template's host
   *   automatically.
   * - `instanceProps`: Dictionary of property names that will be added
   *   to the instance by the templatize owner.  These properties shadow any
   *   host properties, and changes within the template to these properties
   *   will result in `notifyInstanceProp` being called.
   * - `mutableData`: When `true`, the generated class will skip strict
   *   dirty-checking for objects and arrays (always consider them to be
   *   "dirty").
   * - `notifyInstanceProp(instance, property, value)`: Called when
   *   an instance property changes.  Users may choose to call `notifyPath`
   *   on e.g. the owner to notify the change.
   * - `parentModel`: When `true`, events handled by declarative event listeners
   *   (`on-event="handler"`) will be decorated with a `model` property pointing
   *   to the template instance that stamped it.  It will also be returned
   *   from `instance.parentModel` in cases where template instance nesting
   *   causes an inner model to shadow an outer model.
   *
   * All callbacks are called bound to the `owner`. Any context
   * needed for the callbacks (such as references to `instances` stamped)
   * should be stored on the `owner` such that they can be retrieved via
   * `this`.
   *
   * When `options.forwardHostProp` is declared as an option, any properties
   * referenced in the template will be automatically forwarded from the host of
   * the `<template>` to instances, with the exception of any properties listed in
   * the `options.instanceProps` object.  `instanceProps` are assumed to be
   * managed by the owner of the instances, either passed into the constructor
   * or set after the fact.  Note, any properties passed into the constructor will
   * always be set to the instance (regardless of whether they would normally
   * be forwarded from the host).
   *
   * Note that `templatize()` can be run only once for a given `<template>`.
   * Further calls will result in an error. Also, there is a special
   * behavior if the template was duplicated through a mechanism such as
   * `<dom-repeat>` or `<test-fixture>`. In this case, all calls to
   * `templatize()` return the same class for all duplicates of a template.
   * The class returned from `templatize()` is generated only once using
   * the `options` from the first call. This means that any `options`
   * provided to subsequent calls will be ignored. Therefore, it is very
   * important not to close over any variables inside the callbacks. Also,
   * arrow functions must be avoided because they bind the outer `this`.
   * Inside the callbacks, any contextual information can be accessed
   * through `this`, which points to the `owner`.
   *
   * @param {!HTMLTemplateElement} template Template to templatize
   * @param {Polymer_PropertyEffects=} owner Owner of the template instances;
   *   any optional callbacks will be bound to this owner.
   * @param {Object=} options Options dictionary (see summary for details)
   * @return {function(new:TemplateInstanceBase)} Generated class bound to the template
   *   provided
   * @suppress {invalidCasts}
   */function _templatize(template,owner,options){// Under strictTemplatePolicy, the templatized element must be owned
// by a (trusted) Polymer element, indicated by existence of _methodHost;
// e.g. for dom-if & dom-repeat in main document, _methodHost is null
if(strictTemplatePolicy&&!findMethodHost(template)){throw new Error('strictTemplatePolicy: template owner not trusted');}options=/** @type {!TemplatizeOptions} */options||{};if(template.__templatizeOwner){throw new Error('A <template> can only be templatized once');}template.__templatizeOwner=owner;var ctor=owner?owner.constructor:TemplateInstanceBase;var templateInfo=ctor._parseTemplate(template);// Get memoized base class for the prototypical template, which
// includes property effects for binding template & forwarding
var baseClass=templateInfo.templatizeInstanceClass;if(!baseClass){baseClass=createTemplatizerClass(template,templateInfo,options);templateInfo.templatizeInstanceClass=baseClass;}// Host property forwarding must be installed onto template instance
addPropagateEffects(template,templateInfo,options);// Subclass base class and add reference for this specific template
/** @private */var klass=/*#__PURE__*/function(_baseClass){babelHelpers.inherits(TemplateInstance,_baseClass);function TemplateInstance(){babelHelpers.classCallCheck(this,TemplateInstance);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(TemplateInstance).apply(this,arguments));}return TemplateInstance;}(baseClass);klass.prototype._methodHost=findMethodHost(template);klass.prototype.__dataHost=template;klass.prototype.__templatizeOwner=owner;klass.prototype.__hostProps=templateInfo.hostProps;klass=/** @type {function(new:TemplateInstanceBase)} */klass;//eslint-disable-line no-self-assign
return klass;}/**
   * Returns the template "model" associated with a given element, which
   * serves as the binding scope for the template instance the element is
   * contained in. A template model is an instance of
   * `TemplateInstanceBase`, and should be used to manipulate data
   * associated with this template instance.
   *
   * Example:
   *
   *   let model = modelForElement(el);
   *   if (model.index < 10) {
   *     model.set('item.checked', true);
   *   }
   *
   * @param {HTMLTemplateElement} template The model will be returned for
   *   elements stamped from this template
   * @param {Node=} node Node for which to return a template model.
   * @return {TemplateInstanceBase} Template instance representing the
   *   binding scope for the element
   */function _modelForElement(template,node){var model;while(node){// An element with a __templatizeInstance marks the top boundary
// of a scope; walk up until we find one, and then ensure that
// its __dataHost matches `this`, meaning this dom-repeat stamped it
if(model=node.__templatizeInstance){// Found an element stamped by another template; keep walking up
// from its __dataHost
if(model.__dataHost!=template){node=model.__dataHost;}else{return model;}}else{// Still in a template scope, keep going up until
// a __templatizeInstance is found
node=node.parentNode;}}return null;}var templatize$1={templatize:_templatize,modelForElement:_modelForElement,TemplateInstanceBase:TemplateInstanceBase};/**
    * @typedef {{
    *   _templatizerTemplate: HTMLTemplateElement,
    *   _parentModel: boolean,
    *   _instanceProps: Object,
    *   _forwardHostPropV2: Function,
    *   _notifyInstancePropV2: Function,
    *   ctor: TemplateInstanceBase
    * }}
    */_exports.$templatize=templatize$1;var TemplatizerUser;// eslint-disable-line
/**
 * The `Templatizer` behavior adds methods to generate instances of
 * templates that are each managed by an anonymous `PropertyEffects`
 * instance where data-bindings in the stamped template content are bound to
 * accessors on itself.
 *
 * This behavior is provided in Polymer 2.x-3.x as a hybrid-element convenience
 * only.  For non-hybrid usage, the `Templatize` library
 * should be used instead.
 *
 * Example:
 *
 *     import {dom} from '@polymer/polymer/lib/legacy/polymer.dom.js';
 *     // Get a template from somewhere, e.g. light DOM
 *     let template = this.querySelector('template');
 *     // Prepare the template
 *     this.templatize(template);
 *     // Instance the template with an initial data model
 *     let instance = this.stamp({myProp: 'initial'});
 *     // Insert the instance's DOM somewhere, e.g. light DOM
 *     dom(this).appendChild(instance.root);
 *     // Changing a property on the instance will propagate to bindings
 *     // in the template
 *     instance.myProp = 'new value';
 *
 * Users of `Templatizer` may need to implement the following abstract
 * API's to determine how properties and paths from the host should be
 * forwarded into to instances:
 *
 *     _forwardHostPropV2: function(prop, value)
 *
 * Likewise, users may implement these additional abstract API's to determine
 * how instance-specific properties that change on the instance should be
 * forwarded out to the host, if necessary.
 *
 *     _notifyInstancePropV2: function(inst, prop, value)
 *
 * In order to determine which properties are instance-specific and require
 * custom notification via `_notifyInstanceProp`, define an `_instanceProps`
 * object containing keys for each instance prop, for example:
 *
 *     _instanceProps: {
 *       item: true,
 *       index: true
 *     }
 *
 * Any properties used in the template that are not defined in _instanceProp
 * will be forwarded out to the Templatize `owner` automatically.
 *
 * Users may also implement the following abstract function to show or
 * hide any DOM generated using `stamp`:
 *
 *     _showHideChildren: function(shouldHide)
 *
 * Note that some callbacks are suffixed with `V2` in the Polymer 2.x behavior
 * as the implementations will need to differ from the callbacks required
 * by the 1.x Templatizer API due to changes in the `TemplateInstance` API
 * between versions 1.x and 2.x.
 *
 * @polymerBehavior
 */var Templatizer={/**
   * Generates an anonymous `TemplateInstance` class (stored as `this.ctor`)
   * for the provided template.  This method should be called once per
   * template to prepare an element for stamping the template, followed
   * by `stamp` to create new instances of the template.
   *
   * @param {!HTMLTemplateElement} template Template to prepare
   * @param {boolean=} mutableData When `true`, the generated class will skip
   *   strict dirty-checking for objects and arrays (always consider them to
   *   be "dirty"). Defaults to false.
   * @return {void}
   * @this {TemplatizerUser}
   */templatize:function templatize(template,mutableData){this._templatizerTemplate=template;this.ctor=_templatize(template,this,{mutableData:Boolean(mutableData),parentModel:this._parentModel,instanceProps:this._instanceProps,forwardHostProp:this._forwardHostPropV2,notifyInstanceProp:this._notifyInstancePropV2});},/**
   * Creates an instance of the template prepared by `templatize`.  The object
   * returned is an instance of the anonymous class generated by `templatize`
   * whose `root` property is a document fragment containing newly cloned
   * template content, and which has property accessors corresponding to
   * properties referenced in template bindings.
   *
   * @param {Object=} model Object containing initial property values to
   *   populate into the template bindings.
   * @return {TemplateInstanceBase} Returns the created instance of
   * the template prepared by `templatize`.
   * @this {TemplatizerUser}
   */stamp:function stamp(model){return new this.ctor(model);},/**
   * Returns the template "model" (`TemplateInstance`) associated with
   * a given element, which serves as the binding scope for the template
   * instance the element is contained in.  A template model should be used
   * to manipulate data associated with this template instance.
   *
   * @param {HTMLElement} el Element for which to return a template model.
   * @return {TemplateInstanceBase} Model representing the binding scope for
   *   the element.
   * @this {TemplatizerUser}
   */modelForElement:function modelForElement(el){return _modelForElement(this._templatizerTemplate,el);}};_exports.Templatizer=Templatizer;var templatizerBehavior={Templatizer:Templatizer};_exports.$templatizerBehavior=templatizerBehavior;var domBindBase=GestureEventListeners(OptionalMutableData(PropertyEffects(HTMLElement)));/**
                                                                                               * Custom element to allow using Polymer's template features (data binding,
                                                                                               * declarative event listeners, etc.) in the main document without defining
                                                                                               * a new custom element.
                                                                                               *
                                                                                               * `<template>` tags utilizing bindings may be wrapped with the `<dom-bind>`
                                                                                               * element, which will immediately stamp the wrapped template into the main
                                                                                               * document and bind elements to the `dom-bind` element itself as the
                                                                                               * binding scope.
                                                                                               *
                                                                                               * @polymer
                                                                                               * @customElement
                                                                                               * @appliesMixin PropertyEffects
                                                                                               * @appliesMixin OptionalMutableData
                                                                                               * @appliesMixin GestureEventListeners
                                                                                               * @extends {domBindBase}
                                                                                               * @summary Custom element to allow using Polymer's template features (data
                                                                                               *   binding, declarative event listeners, etc.) in the main document.
                                                                                               */var DomBind=/*#__PURE__*/function(_domBindBase){babelHelpers.inherits(DomBind,_domBindBase);babelHelpers.createClass(DomBind,null,[{key:"observedAttributes",get:function get(){return['mutable-data'];}}]);function DomBind(){var _this20;babelHelpers.classCallCheck(this,DomBind);_this20=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DomBind).call(this));if(strictTemplatePolicy){throw new Error("strictTemplatePolicy: dom-bind not allowed");}_this20.root=null;_this20.$=null;_this20.__children=null;return _this20;}/**
     * @override
     * @return {void}
     */babelHelpers.createClass(DomBind,[{key:"attributeChangedCallback",value:function attributeChangedCallback(){// assumes only one observed attribute
this.mutableData=true;}/**
     * @override
     * @return {void}
     */},{key:"connectedCallback",value:function connectedCallback(){this.style.display='none';this.render();}/**
     * @override
     * @return {void}
     */},{key:"disconnectedCallback",value:function disconnectedCallback(){this.__removeChildren();}},{key:"__insertChildren",value:function __insertChildren(){this.parentNode.insertBefore(this.root,this);}},{key:"__removeChildren",value:function __removeChildren(){if(this.__children){for(var _i50=0;_i50<this.__children.length;_i50++){this.root.appendChild(this.__children[_i50]);}}}/**
     * Forces the element to render its content. This is typically only
     * necessary to call if HTMLImports with the async attribute are used.
     * @return {void}
     */},{key:"render",value:function render(){var _this21=this;var template;if(!this.__children){template=/** @type {HTMLTemplateElement} */template||this.querySelector('template');if(!template){// Wait until childList changes and template should be there by then
var _observer=new MutationObserver(function(){template=/** @type {HTMLTemplateElement} */_this21.querySelector('template');if(template){_observer.disconnect();_this21.render();}else{throw new Error('dom-bind requires a <template> child');}});_observer.observe(this,{childList:true});return;}this.root=this._stampTemplate(/** @type {!HTMLTemplateElement} */template);this.$=this.root.$;this.__children=[];for(var n=this.root.firstChild;n;n=n.nextSibling){this.__children[this.__children.length]=n;}this._enableProperties();}this.__insertChildren();this.dispatchEvent(new CustomEvent('dom-change',{bubbles:true,composed:true}));}}]);return DomBind;}(domBindBase);_exports.DomBind=DomBind;customElements.define('dom-bind',DomBind);var domBind={DomBind:DomBind};_exports.$domBind=domBind;var LiteralString=/*#__PURE__*/function(){function LiteralString(string){babelHelpers.classCallCheck(this,LiteralString);/** @type {string} */this.value=string.toString();}/**
     * @return {string} LiteralString string value
     * @override
     */babelHelpers.createClass(LiteralString,[{key:"toString",value:function toString(){return this.value;}}]);return LiteralString;}();/**
   * @param {*} value Object to stringify into HTML
   * @return {string} HTML stringified form of `obj`
   */function literalValue(value){if(babelHelpers.instanceof(value,LiteralString)){return(/** @type {!LiteralString} */value.value);}else{throw new Error("non-literal value passed to Polymer's htmlLiteral function: ".concat(value));}}/**
   * @param {*} value Object to stringify into HTML
   * @return {string} HTML stringified form of `obj`
   */function htmlValue(value){if(babelHelpers.instanceof(value,HTMLTemplateElement)){return(/** @type {!HTMLTemplateElement } */value.innerHTML);}else if(babelHelpers.instanceof(value,LiteralString)){return literalValue(value);}else{throw new Error("non-template value passed to Polymer's html function: ".concat(value));}}/**
   * A template literal tag that creates an HTML <template> element from the
   * contents of the string.
   *
   * This allows you to write a Polymer Template in JavaScript.
   *
   * Templates can be composed by interpolating `HTMLTemplateElement`s in
   * expressions in the JavaScript template literal. The nested template's
   * `innerHTML` is included in the containing template.  The only other
   * values allowed in expressions are those returned from `htmlLiteral`
   * which ensures only literal values from JS source ever reach the HTML, to
   * guard against XSS risks.
   *
   * All other values are disallowed in expressions to help prevent XSS
   * attacks; however, `htmlLiteral` can be used to compose static
   * string values into templates. This is useful to compose strings into
   * places that do not accept html, like the css text of a `style`
   * element.
   *
   * Example:
   *
   *     static get template() {
   *       return html`
   *         <style>:host{ content:"..." }</style>
   *         <div class="shadowed">${this.partialTemplate}</div>
   *         ${super.template}
   *       `;
   *     }
   *     static get partialTemplate() { return html`<span>Partial!</span>`; }
   *
   * @param {!ITemplateArray} strings Constant parts of tagged template literal
   * @param {...*} values Variable parts of tagged template literal
   * @return {!HTMLTemplateElement} Constructed HTMLTemplateElement
   */var html=function html(strings){var template=/** @type {!HTMLTemplateElement} */document.createElement('template');for(var _len8=arguments.length,values=new Array(_len8>1?_len8-1:0),_key8=1;_key8<_len8;_key8++){values[_key8-1]=arguments[_key8];}template.innerHTML=values.reduce(function(acc,v,idx){return acc+htmlValue(v)+strings[idx+1];},strings[0]);return template;};/**
    * An html literal tag that can be used with `html` to compose.
    * a literal string.
    *
    * Example:
    *
    *     static get template() {
    *       return html`
    *         <style>
    *           :host { display: block; }
    *           ${this.styleTemplate()}
    *         </style>
    *         <div class="shadowed">${staticValue}</div>
    *         ${super.template}
    *       `;
    *     }
    *     static get styleTemplate() {
    *        return htmlLiteral`.shadowed { background: gray; }`;
    *     }
    *
    * @param {!ITemplateArray} strings Constant parts of tagged template literal
    * @param {...*} values Variable parts of tagged template literal
    * @return {!LiteralString} Constructed literal string
    */_exports.html$3=_exports.html$2=_exports.html$1=html;var htmlLiteral=function htmlLiteral(strings){for(var _len9=arguments.length,values=new Array(_len9>1?_len9-1:0),_key9=1;_key9<_len9;_key9++){values[_key9-1]=arguments[_key9];}return new LiteralString(values.reduce(function(acc,v,idx){return acc+literalValue(v)+strings[idx+1];},strings[0]));};_exports.htmlLiteral=htmlLiteral;var htmlTag={html:html,htmlLiteral:htmlLiteral};_exports.$htmlTag=htmlTag;var PolymerElement=ElementMixin(HTMLElement);_exports.PolymerElement=PolymerElement;var polymerElement={version:version,PolymerElement:PolymerElement,html:html};_exports.$polymerElement=polymerElement;var domRepeatBase=OptionalMutableData(PolymerElement);/**
                                                            * The `<dom-repeat>` element will automatically stamp and binds one instance
                                                            * of template content to each object in a user-provided array.
                                                            * `dom-repeat` accepts an `items` property, and one instance of the template
                                                            * is stamped for each item into the DOM at the location of the `dom-repeat`
                                                            * element.  The `item` property will be set on each instance's binding
                                                            * scope, thus templates should bind to sub-properties of `item`.
                                                            *
                                                            * Example:
                                                            *
                                                            * ```html
                                                            * <dom-module id="employee-list">
                                                            *
                                                            *   <template>
                                                            *
                                                            *     <div> Employee list: </div>
                                                            *     <dom-repeat items="{{employees}}">
                                                            *       <template>
                                                            *         <div>First name: <span>{{item.first}}</span></div>
                                                            *         <div>Last name: <span>{{item.last}}</span></div>
                                                            *       </template>
                                                            *     </dom-repeat>
                                                            *
                                                            *   </template>
                                                            *
                                                            * </dom-module>
                                                            * ```
                                                            *
                                                            * With the following custom element definition:
                                                            *
                                                            * ```js
                                                            * class EmployeeList extends PolymerElement {
                                                            *   static get is() { return 'employee-list'; }
                                                            *   static get properties() {
                                                            *     return {
                                                            *       employees: {
                                                            *         value() {
                                                            *           return [
                                                            *             {first: 'Bob', last: 'Smith'},
                                                            *             {first: 'Sally', last: 'Johnson'},
                                                            *             ...
                                                            *           ];
                                                            *         }
                                                            *       }
                                                            *     };
                                                            *   }
                                                            * }
                                                            * ```
                                                            *
                                                            * Notifications for changes to items sub-properties will be forwarded to template
                                                            * instances, which will update via the normal structured data notification system.
                                                            *
                                                            * Mutations to the `items` array itself should be made using the Array
                                                            * mutation API's on the PropertyEffects mixin (`push`, `pop`, `splice`,
                                                            * `shift`, `unshift`), and template instances will be kept in sync with the
                                                            * data in the array.
                                                            *
                                                            * Events caught by event handlers within the `dom-repeat` template will be
                                                            * decorated with a `model` property, which represents the binding scope for
                                                            * each template instance.  The model should be used to manipulate data on the
                                                            * instance, for example `event.model.set('item.checked', true);`.
                                                            *
                                                            * Alternatively, the model for a template instance for an element stamped by
                                                            * a `dom-repeat` can be obtained using the `modelForElement` API on the
                                                            * `dom-repeat` that stamped it, for example
                                                            * `this.$.domRepeat.modelForElement(event.target).set('item.checked', true);`.
                                                            * This may be useful for manipulating instance data of event targets obtained
                                                            * by event handlers on parents of the `dom-repeat` (event delegation).
                                                            *
                                                            * A view-specific filter/sort may be applied to each `dom-repeat` by supplying a
                                                            * `filter` and/or `sort` property.  This may be a string that names a function on
                                                            * the host, or a function may be assigned to the property directly.  The functions
                                                            * should implemented following the standard `Array` filter/sort API.
                                                            *
                                                            * In order to re-run the filter or sort functions based on changes to sub-fields
                                                            * of `items`, the `observe` property may be set as a space-separated list of
                                                            * `item` sub-fields that should cause a re-filter/sort when modified.  If
                                                            * the filter or sort function depends on properties not contained in `items`,
                                                            * the user should observe changes to those properties and call `render` to update
                                                            * the view based on the dependency change.
                                                            *
                                                            * For example, for an `dom-repeat` with a filter of the following:
                                                            *
                                                            * ```js
                                                            * isEngineer(item) {
                                                            *   return item.type == 'engineer' || item.manager.type == 'engineer';
                                                            * }
                                                            * ```
                                                            *
                                                            * Then the `observe` property should be configured as follows:
                                                            *
                                                            * ```html
                                                            * <dom-repeat items="{{employees}}" filter="isEngineer" observe="type manager.type">
                                                            * ```
                                                            *
                                                            * @customElement
                                                            * @polymer
                                                            * @extends {domRepeatBase}
                                                            * @appliesMixin OptionalMutableData
                                                            * @summary Custom element for stamping instance of a template bound to
                                                            *   items in an array.
                                                            */var DomRepeat=/*#__PURE__*/function(_domRepeatBase){babelHelpers.inherits(DomRepeat,_domRepeatBase);babelHelpers.createClass(DomRepeat,null,[{key:"is",// Not needed to find template; can be removed once the analyzer
// can find the tag name from customElements.define call
get:function get(){return'dom-repeat';}},{key:"template",get:function get(){return null;}},{key:"properties",get:function get(){/**
     * Fired whenever DOM is added or removed by this template (by
     * default, rendering occurs lazily).  To force immediate rendering, call
     * `render`.
     *
     * @event dom-change
     */return{/**
       * An array containing items determining how many instances of the template
       * to stamp and that that each template instance should bind to.
       */items:{type:Array},/**
       * The name of the variable to add to the binding scope for the array
       * element associated with a given template instance.
       */as:{type:String,value:'item'},/**
       * The name of the variable to add to the binding scope with the index
       * of the instance in the sorted and filtered list of rendered items.
       * Note, for the index in the `this.items` array, use the value of the
       * `itemsIndexAs` property.
       */indexAs:{type:String,value:'index'},/**
       * The name of the variable to add to the binding scope with the index
       * of the instance in the `this.items` array. Note, for the index of
       * this instance in the sorted and filtered list of rendered items,
       * use the value of the `indexAs` property.
       */itemsIndexAs:{type:String,value:'itemsIndex'},/**
       * A function that should determine the sort order of the items.  This
       * property should either be provided as a string, indicating a method
       * name on the element's host, or else be an actual function.  The
       * function should match the sort function passed to `Array.sort`.
       * Using a sort function has no effect on the underlying `items` array.
       */sort:{type:Function,observer:'__sortChanged'},/**
       * A function that can be used to filter items out of the view.  This
       * property should either be provided as a string, indicating a method
       * name on the element's host, or else be an actual function.  The
       * function should match the sort function passed to `Array.filter`.
       * Using a filter function has no effect on the underlying `items` array.
       */filter:{type:Function,observer:'__filterChanged'},/**
       * When using a `filter` or `sort` function, the `observe` property
       * should be set to a space-separated list of the names of item
       * sub-fields that should trigger a re-sort or re-filter when changed.
       * These should generally be fields of `item` that the sort or filter
       * function depends on.
       */observe:{type:String,observer:'__observeChanged'},/**
       * When using a `filter` or `sort` function, the `delay` property
       * determines a debounce time in ms after a change to observed item
       * properties that must pass before the filter or sort is re-run.
       * This is useful in rate-limiting shuffling of the view when
       * item changes may be frequent.
       */delay:Number,/**
       * Count of currently rendered items after `filter` (if any) has been applied.
       * If "chunking mode" is enabled, `renderedItemCount` is updated each time a
       * set of template instances is rendered.
       *
       */renderedItemCount:{type:Number,notify:true,readOnly:true},/**
       * Defines an initial count of template instances to render after setting
       * the `items` array, before the next paint, and puts the `dom-repeat`
       * into "chunking mode".  The remaining items will be created and rendered
       * incrementally at each animation frame therof until all instances have
       * been rendered.
       */initialCount:{type:Number,observer:'__initializeChunking'},/**
       * When `initialCount` is used, this property defines a frame rate (in
       * fps) to target by throttling the number of instances rendered each
       * frame to not exceed the budget for the target frame rate.  The
       * framerate is effectively the number of `requestAnimationFrame`s that
       * it tries to allow to actually fire in a given second. It does this
       * by measuring the time between `rAF`s and continuously adjusting the
       * number of items created each `rAF` to maintain the target framerate.
       * Setting this to a higher number allows lower latency and higher
       * throughput for event handlers and other tasks, but results in a
       * longer time for the remaining items to complete rendering.
       */targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:'__computeFrameTime(targetFramerate)'}};}},{key:"observers",get:function get(){return['__itemsChanged(items.*)'];}}]);function DomRepeat(){var _this22;babelHelpers.classCallCheck(this,DomRepeat);_this22=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DomRepeat).call(this));_this22.__instances=[];_this22.__limit=Infinity;_this22.__pool=[];_this22.__renderDebouncer=null;_this22.__itemsIdxToInstIdx={};_this22.__chunkCount=null;_this22.__lastChunkTime=null;_this22.__sortFn=null;_this22.__filterFn=null;_this22.__observePaths=null;/** @type {?function(new:Polymer.TemplateInstanceBase, *)} */_this22.__ctor=null;_this22.__isDetached=true;_this22.template=null;return _this22;}/**
     * @override
     * @return {void}
     */babelHelpers.createClass(DomRepeat,[{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(DomRepeat.prototype),"disconnectedCallback",this).call(this);this.__isDetached=true;for(var _i51=0;_i51<this.__instances.length;_i51++){this.__detachInstance(_i51);}}/**
     * @override
     * @return {void}
     */},{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(DomRepeat.prototype),"connectedCallback",this).call(this);this.style.display='none';// only perform attachment if the element was previously detached.
if(this.__isDetached){this.__isDetached=false;var parent=this.parentNode;for(var _i52=0;_i52<this.__instances.length;_i52++){this.__attachInstance(_i52,parent);}}}},{key:"__ensureTemplatized",value:function __ensureTemplatized(){var _this23=this;// Templatizing (generating the instance constructor) needs to wait
// until ready, since won't have its template content handed back to
// it until then
if(!this.__ctor){var _template3=this.template=/** @type {HTMLTemplateElement} */this.querySelector('template');if(!_template3){// // Wait until childList changes and template should be there by then
var _observer2=new MutationObserver(function(){if(_this23.querySelector('template')){_observer2.disconnect();_this23.__render();}else{throw new Error('dom-repeat requires a <template> child');}});_observer2.observe(this,{childList:true});return false;}// Template instance props that should be excluded from forwarding
var instanceProps={};instanceProps[this.as]=true;instanceProps[this.indexAs]=true;instanceProps[this.itemsIndexAs]=true;this.__ctor=_templatize(_template3,this,{mutableData:this.mutableData,parentModel:true,instanceProps:instanceProps,/**
         * @this {DomRepeat}
         * @param {string} prop Property to set
         * @param {*} value Value to set property to
         */forwardHostProp:function forwardHostProp(prop,value){var i$=this.__instances;for(var _i53=0,inst;_i53<i$.length&&(inst=i$[_i53]);_i53++){inst.forwardHostProp(prop,value);}},/**
         * @this {DomRepeat}
         * @param {Object} inst Instance to notify
         * @param {string} prop Property to notify
         * @param {*} value Value to notify
         */notifyInstanceProp:function notifyInstanceProp(inst,prop,value){if(matches(this.as,prop)){var idx=inst[this.itemsIndexAs];if(prop==this.as){this.items[idx]=value;}var _path3=translate(this.as,'items.'+idx,prop);this.notifyPath(_path3,value);}}});}return true;}},{key:"__getMethodHost",value:function __getMethodHost(){// Technically this should be the owner of the outermost template.
// In shadow dom, this is always getRootNode().host, but we can
// approximate this via cooperation with our dataHost always setting
// `_methodHost` as long as there were bindings (or id's) on this
// instance causing it to get a dataHost.
return this.__dataHost._methodHost||this.__dataHost;}},{key:"__functionFromPropertyValue",value:function __functionFromPropertyValue(functionOrMethodName){if(typeof functionOrMethodName==='string'){var methodName=functionOrMethodName;var obj=this.__getMethodHost();return function(){return obj[methodName].apply(obj,arguments);};}return functionOrMethodName;}},{key:"__sortChanged",value:function __sortChanged(sort){this.__sortFn=this.__functionFromPropertyValue(sort);if(this.items){this.__debounceRender(this.__render);}}},{key:"__filterChanged",value:function __filterChanged(filter){this.__filterFn=this.__functionFromPropertyValue(filter);if(this.items){this.__debounceRender(this.__render);}}},{key:"__computeFrameTime",value:function __computeFrameTime(rate){return Math.ceil(1000/rate);}},{key:"__initializeChunking",value:function __initializeChunking(){if(this.initialCount){this.__limit=this.initialCount;this.__chunkCount=this.initialCount;this.__lastChunkTime=performance.now();}}},{key:"__tryRenderChunk",value:function __tryRenderChunk(){// Debounced so that multiple calls through `_render` between animation
// frames only queue one new rAF (e.g. array mutation & chunked render)
if(this.items&&this.__limit<this.items.length){this.__debounceRender(this.__requestRenderChunk);}}},{key:"__requestRenderChunk",value:function __requestRenderChunk(){var _this24=this;requestAnimationFrame(function(){return _this24.__renderChunk();});}},{key:"__renderChunk",value:function __renderChunk(){// Simple auto chunkSize throttling algorithm based on feedback loop:
// measure actual time between frames and scale chunk count by ratio
// of target/actual frame time
var currChunkTime=performance.now();var ratio=this._targetFrameTime/(currChunkTime-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*ratio)||1;this.__limit+=this.__chunkCount;this.__lastChunkTime=currChunkTime;this.__debounceRender(this.__render);}},{key:"__observeChanged",value:function __observeChanged(){this.__observePaths=this.observe&&this.observe.replace('.*','.').split(' ');}},{key:"__itemsChanged",value:function __itemsChanged(change){if(this.items&&!Array.isArray(this.items)){console.warn('dom-repeat expected array for `items`, found',this.items);}// If path was to an item (e.g. 'items.3' or 'items.3.foo'), forward the
// path to that instance synchronously (returns false for non-item paths)
if(!this.__handleItemPath(change.path,change.value)){// Otherwise, the array was reset ('items') or spliced ('items.splices'),
// so queue a full refresh
this.__initializeChunking();this.__debounceRender(this.__render);}}},{key:"__handleObservedPaths",value:function __handleObservedPaths(path){// Handle cases where path changes should cause a re-sort/filter
if(this.__sortFn||this.__filterFn){if(!path){// Always re-render if the item itself changed
this.__debounceRender(this.__render,this.delay);}else if(this.__observePaths){// Otherwise, re-render if the path changed matches an observed path
var paths=this.__observePaths;for(var _i54=0;_i54<paths.length;_i54++){if(path.indexOf(paths[_i54])===0){this.__debounceRender(this.__render,this.delay);}}}}}/**
     * @param {function(this:DomRepeat)} fn Function to debounce.
     * @param {number=} delay Delay in ms to debounce by.
     */},{key:"__debounceRender",value:function __debounceRender(fn){var delay=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;this.__renderDebouncer=Debouncer.debounce(this.__renderDebouncer,delay>0?timeOut.after(delay):microTask,fn.bind(this));enqueueDebouncer(this.__renderDebouncer);}/**
     * Forces the element to render its content. Normally rendering is
     * asynchronous to a provoking change. This is done for efficiency so
     * that multiple changes trigger only a single render. The render method
     * should be called if, for example, template rendering is required to
     * validate application state.
     * @return {void}
     */},{key:"render",value:function render(){// Queue this repeater, then flush all in order
this.__debounceRender(this.__render);flush$1();}},{key:"__render",value:function __render(){if(!this.__ensureTemplatized()){// No template found yet
return;}this.__applyFullRefresh();// Reset the pool
// TODO(kschaaf): Reuse pool across turns and nested templates
// Now that objects/arrays are re-evaluated when set, we can safely
// reuse pooled instances across turns, however we still need to decide
// semantics regarding how long to hold, how many to hold, etc.
this.__pool.length=0;// Set rendered item count
this._setRenderedItemCount(this.__instances.length);// Notify users
this.dispatchEvent(new CustomEvent('dom-change',{bubbles:true,composed:true}));// Check to see if we need to render more items
this.__tryRenderChunk();}},{key:"__applyFullRefresh",value:function __applyFullRefresh(){var _this25=this;var items=this.items||[];var isntIdxToItemsIdx=new Array(items.length);for(var _i55=0;_i55<items.length;_i55++){isntIdxToItemsIdx[_i55]=_i55;}// Apply user filter
if(this.__filterFn){isntIdxToItemsIdx=isntIdxToItemsIdx.filter(function(i,idx,array){return _this25.__filterFn(items[i],idx,array);});}// Apply user sort
if(this.__sortFn){isntIdxToItemsIdx.sort(function(a,b){return _this25.__sortFn(items[a],items[b]);});}// items->inst map kept for item path forwarding
var itemsIdxToInstIdx=this.__itemsIdxToInstIdx={};var instIdx=0;// Generate instances and assign items
var limit=Math.min(isntIdxToItemsIdx.length,this.__limit);for(;instIdx<limit;instIdx++){var inst=this.__instances[instIdx];var itemIdx=isntIdxToItemsIdx[instIdx];var item=items[itemIdx];itemsIdxToInstIdx[itemIdx]=instIdx;if(inst){inst._setPendingProperty(this.as,item);inst._setPendingProperty(this.indexAs,instIdx);inst._setPendingProperty(this.itemsIndexAs,itemIdx);inst._flushProperties();}else{this.__insertInstance(item,instIdx,itemIdx);}}// Remove any extra instances from previous state
for(var _i56=this.__instances.length-1;_i56>=instIdx;_i56--){this.__detachAndRemoveInstance(_i56);}}},{key:"__detachInstance",value:function __detachInstance(idx){var inst=this.__instances[idx];for(var _i57=0;_i57<inst.children.length;_i57++){var el=inst.children[_i57];inst.root.appendChild(el);}return inst;}},{key:"__attachInstance",value:function __attachInstance(idx,parent){var inst=this.__instances[idx];parent.insertBefore(inst.root,this);}},{key:"__detachAndRemoveInstance",value:function __detachAndRemoveInstance(idx){var inst=this.__detachInstance(idx);if(inst){this.__pool.push(inst);}this.__instances.splice(idx,1);}},{key:"__stampInstance",value:function __stampInstance(item,instIdx,itemIdx){var model={};model[this.as]=item;model[this.indexAs]=instIdx;model[this.itemsIndexAs]=itemIdx;return new this.__ctor(model);}},{key:"__insertInstance",value:function __insertInstance(item,instIdx,itemIdx){var inst=this.__pool.pop();if(inst){// TODO(kschaaf): If the pool is shared across turns, hostProps
// need to be re-set to reused instances in addition to item
inst._setPendingProperty(this.as,item);inst._setPendingProperty(this.indexAs,instIdx);inst._setPendingProperty(this.itemsIndexAs,itemIdx);inst._flushProperties();}else{inst=this.__stampInstance(item,instIdx,itemIdx);}var beforeRow=this.__instances[instIdx+1];var beforeNode=beforeRow?beforeRow.children[0]:this;this.parentNode.insertBefore(inst.root,beforeNode);this.__instances[instIdx]=inst;return inst;}// Implements extension point from Templatize mixin
/**
   * Shows or hides the template instance top level child elements. For
   * text nodes, `textContent` is removed while "hidden" and replaced when
   * "shown."
   * @param {boolean} hidden Set to true to hide the children;
   * set to false to show them.
   * @return {void}
   * @protected
   */},{key:"_showHideChildren",value:function _showHideChildren(hidden){for(var _i58=0;_i58<this.__instances.length;_i58++){this.__instances[_i58]._showHideChildren(hidden);}}// Called as a side effect of a host items.<key>.<path> path change,
// responsible for notifying item.<path> changes to inst for key
},{key:"__handleItemPath",value:function __handleItemPath(path,value){var itemsPath=path.slice(6);// 'items.'.length == 6
var dot=itemsPath.indexOf('.');var itemsIdx=dot<0?itemsPath:itemsPath.substring(0,dot);// If path was index into array...
if(itemsIdx==parseInt(itemsIdx,10)){var itemSubPath=dot<0?'':itemsPath.substring(dot+1);// If the path is observed, it will trigger a full refresh
this.__handleObservedPaths(itemSubPath);// Note, even if a rull refresh is triggered, always do the path
// notification because unless mutableData is used for dom-repeat
// and all elements in the instance subtree, a full refresh may
// not trigger the proper update.
var instIdx=this.__itemsIdxToInstIdx[itemsIdx];var inst=this.__instances[instIdx];if(inst){var itemPath=this.as+(itemSubPath?'.'+itemSubPath:'');// This is effectively `notifyPath`, but avoids some of the overhead
// of the public API
inst._setPendingPropertyOrPath(itemPath,value,false,true);inst._flushProperties();}return true;}}/**
     * Returns the item associated with a given element stamped by
     * this `dom-repeat`.
     *
     * Note, to modify sub-properties of the item,
     * `modelForElement(el).set('item.<sub-prop>', value)`
     * should be used.
     *
     * @param {!HTMLElement} el Element for which to return the item.
     * @return {*} Item associated with the element.
     */},{key:"itemForElement",value:function itemForElement(el){var instance=this.modelForElement(el);return instance&&instance[this.as];}/**
     * Returns the inst index for a given element stamped by this `dom-repeat`.
     * If `sort` is provided, the index will reflect the sorted order (rather
     * than the original array order).
     *
     * @param {!HTMLElement} el Element for which to return the index.
     * @return {?number} Row index associated with the element (note this may
     *   not correspond to the array index if a user `sort` is applied).
     */},{key:"indexForElement",value:function indexForElement(el){var instance=this.modelForElement(el);return instance&&instance[this.indexAs];}/**
     * Returns the template "model" associated with a given element, which
     * serves as the binding scope for the template instance the element is
     * contained in. A template model
     * should be used to manipulate data associated with this template instance.
     *
     * Example:
     *
     *   let model = modelForElement(el);
     *   if (model.index < 10) {
     *     model.set('item.checked', true);
     *   }
     *
     * @param {!HTMLElement} el Element for which to return a template model.
     * @return {TemplateInstanceBase} Model representing the binding scope for
     *   the element.
     */},{key:"modelForElement",value:function modelForElement(el){return _modelForElement(this.template,el);}}]);return DomRepeat;}(domRepeatBase);_exports.DomRepeat=DomRepeat;customElements.define(DomRepeat.is,DomRepeat);var domRepeat={DomRepeat:DomRepeat};_exports.$domRepeat=domRepeat;var DomIf=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(DomIf,_PolymerElement);babelHelpers.createClass(DomIf,null,[{key:"is",// Not needed to find template; can be removed once the analyzer
// can find the tag name from customElements.define call
get:function get(){return'dom-if';}},{key:"template",get:function get(){return null;}},{key:"properties",get:function get(){return{/**
       * Fired whenever DOM is added or removed/hidden by this template (by
       * default, rendering occurs lazily).  To force immediate rendering, call
       * `render`.
       *
       * @event dom-change
       */ /**
           * A boolean indicating whether this template should stamp.
           */if:{type:Boolean,observer:'__debounceRender'},/**
       * When true, elements will be removed from DOM and discarded when `if`
       * becomes false and re-created and added back to the DOM when `if`
       * becomes true.  By default, stamped elements will be hidden but left
       * in the DOM when `if` becomes false, which is generally results
       * in better performance.
       */restamp:{type:Boolean,observer:'__debounceRender'}};}}]);function DomIf(){var _this26;babelHelpers.classCallCheck(this,DomIf);_this26=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DomIf).call(this));_this26.__renderDebouncer=null;_this26.__invalidProps=null;_this26.__instance=null;_this26._lastIf=false;_this26.__ctor=null;_this26.__hideTemplateChildren__=false;return _this26;}babelHelpers.createClass(DomIf,[{key:"__debounceRender",value:function __debounceRender(){var _this27=this;// Render is async for 2 reasons:
// 1. To eliminate dom creation trashing if user code thrashes `if` in the
//    same turn. This was more common in 1.x where a compound computed
//    property could result in the result changing multiple times, but is
//    mitigated to a large extent by batched property processing in 2.x.
// 2. To avoid double object propagation when a bag including values bound
//    to the `if` property as well as one or more hostProps could enqueue
//    the <dom-if> to flush before the <template>'s host property
//    forwarding. In that scenario creating an instance would result in
//    the host props being set once, and then the enqueued changes on the
//    template would set properties a second time, potentially causing an
//    object to be set to an instance more than once.  Creating the
//    instance async from flushing data ensures this doesn't happen. If
//    we wanted a sync option in the future, simply having <dom-if> flush
//    (or clear) its template's pending host properties before creating
//    the instance would also avoid the problem.
this.__renderDebouncer=Debouncer.debounce(this.__renderDebouncer,microTask,function(){return _this27.__render();});enqueueDebouncer(this.__renderDebouncer);}/**
     * @override
     * @return {void}
     */},{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(DomIf.prototype),"disconnectedCallback",this).call(this);if(!this.parentNode||this.parentNode.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!this.parentNode.host){this.__teardownInstance();}}/**
     * @override
     * @return {void}
     */},{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(DomIf.prototype),"connectedCallback",this).call(this);this.style.display='none';if(this.if){this.__debounceRender();}}/**
     * Forces the element to render its content. Normally rendering is
     * asynchronous to a provoking change. This is done for efficiency so
     * that multiple changes trigger only a single render. The render method
     * should be called if, for example, template rendering is required to
     * validate application state.
     * @return {void}
     */},{key:"render",value:function render(){flush$1();}},{key:"__render",value:function __render(){if(this.if){if(!this.__ensureInstance()){// No template found yet
return;}this._showHideChildren();}else if(this.restamp){this.__teardownInstance();}if(!this.restamp&&this.__instance){this._showHideChildren();}if(this.if!=this._lastIf){this.dispatchEvent(new CustomEvent('dom-change',{bubbles:true,composed:true}));this._lastIf=this.if;}}},{key:"__ensureInstance",value:function __ensureInstance(){var _this28=this;var parentNode=this.parentNode;// Guard against element being detached while render was queued
if(parentNode){if(!this.__ctor){var _template4=/** @type {HTMLTemplateElement} */this.querySelector('template');if(!_template4){// Wait until childList changes and template should be there by then
var _observer3=new MutationObserver(function(){if(_this28.querySelector('template')){_observer3.disconnect();_this28.__render();}else{throw new Error('dom-if requires a <template> child');}});_observer3.observe(this,{childList:true});return false;}this.__ctor=_templatize(_template4,this,{// dom-if templatizer instances require `mutable: true`, as
// `__syncHostProperties` relies on that behavior to sync objects
mutableData:true,/**
           * @param {string} prop Property to forward
           * @param {*} value Value of property
           * @this {DomIf}
           */forwardHostProp:function forwardHostProp(prop,value){if(this.__instance){if(this.if){this.__instance.forwardHostProp(prop,value);}else{// If we have an instance but are squelching host property
// forwarding due to if being false, note the invalidated
// properties so `__syncHostProperties` can sync them the next
// time `if` becomes true
this.__invalidProps=this.__invalidProps||Object.create(null);this.__invalidProps[root(prop)]=true;}}}});}if(!this.__instance){this.__instance=new this.__ctor();parentNode.insertBefore(this.__instance.root,this);}else{this.__syncHostProperties();var c$=this.__instance.children;if(c$&&c$.length){// Detect case where dom-if was re-attached in new position
var lastChild=this.previousSibling;if(lastChild!==c$[c$.length-1]){for(var _i59=0,n;_i59<c$.length&&(n=c$[_i59]);_i59++){parentNode.insertBefore(n,this);}}}}}return true;}},{key:"__syncHostProperties",value:function __syncHostProperties(){var props=this.__invalidProps;if(props){for(var prop in props){this.__instance._setPendingProperty(prop,this.__dataHost[prop]);}this.__invalidProps=null;this.__instance._flushProperties();}}},{key:"__teardownInstance",value:function __teardownInstance(){if(this.__instance){var c$=this.__instance.children;if(c$&&c$.length){// use first child parent, for case when dom-if may have been detached
var parent=c$[0].parentNode;// Instance children may be disconnected from parents when dom-if
// detaches if a tree was innerHTML'ed
if(parent){for(var _i60=0,n;_i60<c$.length&&(n=c$[_i60]);_i60++){parent.removeChild(n);}}}this.__instance=null;this.__invalidProps=null;}}/**
     * Shows or hides the template instance top level child elements. For
     * text nodes, `textContent` is removed while "hidden" and replaced when
     * "shown."
     * @return {void}
     * @protected
     * @suppress {visibility}
     */},{key:"_showHideChildren",value:function _showHideChildren(){var hidden=this.__hideTemplateChildren__||!this.if;if(this.__instance){this.__instance._showHideChildren(hidden);}}}]);return DomIf;}(PolymerElement);_exports.DomIf=DomIf;customElements.define(DomIf.is,DomIf);var domIf={DomIf:DomIf};_exports.$domIf=domIf;var ArraySelectorMixin=dedupingMixin(function(superClass){/**
   * @constructor
   * @extends {superClass}
   * @implements {Polymer_ElementMixin}
   * @private
   */var elementBase=ElementMixin(superClass);/**
                                                  * @polymer
                                                  * @mixinClass
                                                  * @implements {Polymer_ArraySelectorMixin}
                                                  * @unrestricted
                                                  */var ArraySelectorMixin=/*#__PURE__*/function(_elementBase2){babelHelpers.inherits(ArraySelectorMixin,_elementBase2);babelHelpers.createClass(ArraySelectorMixin,null,[{key:"properties",get:function get(){return{/**
         * An array containing items from which selection will be made.
         */items:{type:Array},/**
         * When `true`, multiple items may be selected at once (in this case,
         * `selected` is an array of currently selected items).  When `false`,
         * only one item may be selected at a time.
         */multi:{type:Boolean,value:false},/**
         * When `multi` is true, this is an array that contains any selected.
         * When `multi` is false, this is the currently selected item, or `null`
         * if no item is selected.
         * @type {?(Object|Array<!Object>)}
         */selected:{type:Object,notify:true},/**
         * When `multi` is false, this is the currently selected item, or `null`
         * if no item is selected.
         * @type {?Object}
         */selectedItem:{type:Object,notify:true},/**
         * When `true`, calling `select` on an item that is already selected
         * will deselect the item.
         */toggle:{type:Boolean,value:false}};}},{key:"observers",get:function get(){return['__updateSelection(multi, items.*)'];}}]);function ArraySelectorMixin(){var _this29;babelHelpers.classCallCheck(this,ArraySelectorMixin);_this29=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ArraySelectorMixin).call(this));_this29.__lastItems=null;_this29.__lastMulti=null;_this29.__selectedMap=null;return _this29;}babelHelpers.createClass(ArraySelectorMixin,[{key:"__updateSelection",value:function __updateSelection(multi,itemsInfo){var path=itemsInfo.path;if(path=='items'){// Case 1 - items array changed, so diff against previous array and
// deselect any removed items and adjust selected indices
var newItems=itemsInfo.base||[];var lastItems=this.__lastItems;var lastMulti=this.__lastMulti;if(multi!==lastMulti){this.clearSelection();}if(lastItems){var splices=calculateSplices(newItems,lastItems);this.__applySplices(splices);}this.__lastItems=newItems;this.__lastMulti=multi;}else if(itemsInfo.path=='items.splices'){// Case 2 - got specific splice information describing the array mutation:
// deselect any removed items and adjust selected indices
this.__applySplices(itemsInfo.value.indexSplices);}else{// Case 3 - an array element was changed, so deselect the previous
// item for that index if it was previously selected
var part=path.slice('items.'.length);var idx=parseInt(part,10);if(part.indexOf('.')<0&&part==idx){this.__deselectChangedIdx(idx);}}}},{key:"__applySplices",value:function __applySplices(splices){var _this30=this;var selected=this.__selectedMap;// Adjust selected indices and mark removals
var _loop4=function _loop4(_i61){var s=splices[_i61];selected.forEach(function(idx,item){if(idx<s.index){// no change
}else if(idx>=s.index+s.removed.length){// adjust index
selected.set(item,idx+s.addedCount-s.removed.length);}else{// remove index
selected.set(item,-1);}});for(var j=0;j<s.addedCount;j++){var idx=s.index+j;if(selected.has(_this30.items[idx])){selected.set(_this30.items[idx],idx);}}};for(var _i61=0;_i61<splices.length;_i61++){_loop4(_i61);}// Update linked paths
this.__updateLinks();// Remove selected items that were removed from the items array
var sidx=0;selected.forEach(function(idx,item){if(idx<0){if(_this30.multi){_this30.splice('selected',sidx,1);}else{_this30.selected=_this30.selectedItem=null;}selected.delete(item);}else{sidx++;}});}},{key:"__updateLinks",value:function __updateLinks(){var _this31=this;this.__dataLinkedPaths={};if(this.multi){var sidx=0;this.__selectedMap.forEach(function(idx){if(idx>=0){_this31.linkPaths('items.'+idx,'selected.'+sidx++);}});}else{this.__selectedMap.forEach(function(idx){_this31.linkPaths('selected','items.'+idx);_this31.linkPaths('selectedItem','items.'+idx);});}}/**
       * Clears the selection state.
       * @return {void}
       */},{key:"clearSelection",value:function clearSelection(){// Unbind previous selection
this.__dataLinkedPaths={};// The selected map stores 3 pieces of information:
// key: items array object
// value: items array index
// order: selected array index
this.__selectedMap=new Map();// Initialize selection
this.selected=this.multi?[]:null;this.selectedItem=null;}/**
       * Returns whether the item is currently selected.
       *
       * @param {*} item Item from `items` array to test
       * @return {boolean} Whether the item is selected
       */},{key:"isSelected",value:function isSelected(item){return this.__selectedMap.has(item);}/**
       * Returns whether the item is currently selected.
       *
       * @param {number} idx Index from `items` array to test
       * @return {boolean} Whether the item is selected
       */},{key:"isIndexSelected",value:function isIndexSelected(idx){return this.isSelected(this.items[idx]);}},{key:"__deselectChangedIdx",value:function __deselectChangedIdx(idx){var _this32=this;var sidx=this.__selectedIndexForItemIndex(idx);if(sidx>=0){var _i62=0;this.__selectedMap.forEach(function(idx,item){if(sidx==_i62++){_this32.deselect(item);}});}}},{key:"__selectedIndexForItemIndex",value:function __selectedIndexForItemIndex(idx){var selected=this.__dataLinkedPaths['items.'+idx];if(selected){return parseInt(selected.slice('selected.'.length),10);}}/**
       * Deselects the given item if it is already selected.
       *
       * @param {*} item Item from `items` array to deselect
       * @return {void}
       */},{key:"deselect",value:function deselect(item){var idx=this.__selectedMap.get(item);if(idx>=0){this.__selectedMap.delete(item);var sidx;if(this.multi){sidx=this.__selectedIndexForItemIndex(idx);}this.__updateLinks();if(this.multi){this.splice('selected',sidx,1);}else{this.selected=this.selectedItem=null;}}}/**
       * Deselects the given index if it is already selected.
       *
       * @param {number} idx Index from `items` array to deselect
       * @return {void}
       */},{key:"deselectIndex",value:function deselectIndex(idx){this.deselect(this.items[idx]);}/**
       * Selects the given item.  When `toggle` is true, this will automatically
       * deselect the item if already selected.
       *
       * @param {*} item Item from `items` array to select
       * @return {void}
       */},{key:"select",value:function select(item){this.selectIndex(this.items.indexOf(item));}/**
       * Selects the given index.  When `toggle` is true, this will automatically
       * deselect the item if already selected.
       *
       * @param {number} idx Index from `items` array to select
       * @return {void}
       */},{key:"selectIndex",value:function selectIndex(idx){var item=this.items[idx];if(!this.isSelected(item)){if(!this.multi){this.__selectedMap.clear();}this.__selectedMap.set(item,idx);this.__updateLinks();if(this.multi){this.push('selected',item);}else{this.selected=this.selectedItem=item;}}else if(this.toggle){this.deselectIndex(idx);}}}]);return ArraySelectorMixin;}(elementBase);return ArraySelectorMixin;});// export mixin
_exports.ArraySelectorMixin=ArraySelectorMixin;var baseArraySelector=ArraySelectorMixin(PolymerElement);/**
                                                             * Element implementing the `ArraySelector` mixin, which records
                                                             * dynamic associations between item paths in a master `items` array and a
                                                             * `selected` array such that path changes to the master array (at the host)
                                                             * element or elsewhere via data-binding) are correctly propagated to items
                                                             * in the selected array and vice-versa.
                                                             *
                                                             * The `items` property accepts an array of user data, and via the
                                                             * `select(item)` and `deselect(item)` API, updates the `selected` property
                                                             * which may be bound to other parts of the application, and any changes to
                                                             * sub-fields of `selected` item(s) will be kept in sync with items in the
                                                             * `items` array.  When `multi` is false, `selected` is a property
                                                             * representing the last selected item.  When `multi` is true, `selected`
                                                             * is an array of multiply selected items.
                                                             *
                                                             * Example:
                                                             *
                                                             * ```js
                                                             * import {PolymerElement} from '@polymer/polymer';
                                                             * import '@polymer/polymer/lib/elements/array-selector.js';
                                                             *
                                                             * class EmployeeList extends PolymerElement {
                                                             *   static get _template() {
                                                             *     return html`
                                                             *         <div> Employee list: </div>
                                                             *         <dom-repeat id="employeeList" items="{{employees}}">
                                                             *           <template>
                                                             *             <div>First name: <span>{{item.first}}</span></div>
                                                             *               <div>Last name: <span>{{item.last}}</span></div>
                                                             *               <button on-click="toggleSelection">Select</button>
                                                             *           </template>
                                                             *         </dom-repeat>
                                                             *
                                                             *         <array-selector id="selector"
                                                             *                         items="{{employees}}"
                                                             *                         selected="{{selected}}"
                                                             *                         multi toggle></array-selector>
                                                             *
                                                             *         <div> Selected employees: </div>
                                                             *         <dom-repeat items="{{selected}}">
                                                             *           <template>
                                                             *             <div>First name: <span>{{item.first}}</span></div>
                                                             *             <div>Last name: <span>{{item.last}}</span></div>
                                                             *           </template>
                                                             *         </dom-repeat>`;
                                                             *   }
                                                             *   static get is() { return 'employee-list'; }
                                                             *   static get properties() {
                                                             *     return {
                                                             *       employees: {
                                                             *         value() {
                                                             *           return [
                                                             *             {first: 'Bob', last: 'Smith'},
                                                             *             {first: 'Sally', last: 'Johnson'},
                                                             *             ...
                                                             *           ];
                                                             *         }
                                                             *       }
                                                             *     };
                                                             *   }
                                                             *   toggleSelection(e) {
                                                             *     const item = this.$.employeeList.itemForElement(e.target);
                                                             *     this.$.selector.select(item);
                                                             *   }
                                                             * }
                                                             * ```
                                                             *
                                                             * @polymer
                                                             * @customElement
                                                             * @extends {baseArraySelector}
                                                             * @appliesMixin ArraySelectorMixin
                                                             * @summary Custom element that links paths between an input `items` array and
                                                             *   an output `selected` item or array based on calls to its selection API.
                                                             */var ArraySelector=/*#__PURE__*/function(_baseArraySelector){babelHelpers.inherits(ArraySelector,_baseArraySelector);function ArraySelector(){babelHelpers.classCallCheck(this,ArraySelector);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ArraySelector).apply(this,arguments));}babelHelpers.createClass(ArraySelector,null,[{key:"is",// Not needed to find template; can be removed once the analyzer
// can find the tag name from customElements.define call
get:function get(){return'array-selector';}}]);return ArraySelector;}(baseArraySelector);_exports.ArraySelector=ArraySelector;customElements.define(ArraySelector.is,ArraySelector);var arraySelector={ArraySelectorMixin:ArraySelectorMixin,ArraySelector:ArraySelector};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$arraySelector=arraySelector;'use strict';var customStyleInterface$1=new CustomStyleInterface();if(!window.ShadyCSS){window.ShadyCSS={/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @param {string=} elementExtends
     */prepareTemplate:function prepareTemplate(template,elementName,elementExtends){},// eslint-disable-line no-unused-vars
/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     */prepareTemplateDom:function prepareTemplateDom(template,elementName){},// eslint-disable-line no-unused-vars
/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @param {string=} elementExtends
     */prepareTemplateStyles:function prepareTemplateStyles(template,elementName,elementExtends){},// eslint-disable-line no-unused-vars
/**
     * @param {Element} element
     * @param {Object=} properties
     */styleSubtree:function styleSubtree(element,properties){customStyleInterface$1.processStyles();updateNativeProperties(element,properties);},/**
     * @param {Element} element
     */styleElement:function styleElement(element){// eslint-disable-line no-unused-vars
customStyleInterface$1.processStyles();},/**
     * @param {Object=} properties
     */styleDocument:function styleDocument(properties){customStyleInterface$1.processStyles();updateNativeProperties(document.body,properties);},/**
     * @param {Element} element
     * @param {string} property
     * @return {string}
     */getComputedStyleValue:function getComputedStyleValue(element,property){return _getComputedStyleValue(element,property);},flushCustomStyles:function flushCustomStyles(){},nativeCss:nativeCssVariables,nativeShadow:nativeShadow,cssBuild:cssBuild,disableRuntime:disableRuntime};}window.ShadyCSS.CustomStyleInterface=customStyleInterface$1;var attr='include';var CustomStyleInterface$1=window.ShadyCSS.CustomStyleInterface;/**
                                                                     * Custom element for defining styles in the main document that can take
                                                                     * advantage of [shady DOM](https://github.com/webcomponents/shadycss) shims
                                                                     * for style encapsulation, custom properties, and custom mixins.
                                                                     *
                                                                     * - Document styles defined in a `<custom-style>` are shimmed to ensure they
                                                                     *   do not leak into local DOM when running on browsers without native
                                                                     *   Shadow DOM.
                                                                     * - Custom properties can be defined in a `<custom-style>`. Use the `html` selector
                                                                     *   to define custom properties that apply to all custom elements.
                                                                     * - Custom mixins can be defined in a `<custom-style>`, if you import the optional
                                                                     *   [apply shim](https://github.com/webcomponents/shadycss#about-applyshim)
                                                                     *   (`shadycss/apply-shim.html`).
                                                                     *
                                                                     * To use:
                                                                     *
                                                                     * - Import `custom-style.html`.
                                                                     * - Place a `<custom-style>` element in the main document, wrapping an inline `<style>` tag that
                                                                     *   contains the CSS rules you want to shim.
                                                                     *
                                                                     * For example:
                                                                     *
                                                                     * ```html
                                                                     * <!-- import apply shim--only required if using mixins -->
                                                                     * <link rel="import" href="bower_components/shadycss/apply-shim.html">
                                                                     * <!-- import custom-style element -->
                                                                     * <link rel="import" href="bower_components/polymer/lib/elements/custom-style.html">
                                                                     *
                                                                     * <custom-style>
                                                                     *   <style>
                                                                     *     html {
                                                                     *       --custom-color: blue;
                                                                     *       --custom-mixin: {
                                                                     *         font-weight: bold;
                                                                     *         color: red;
                                                                     *       };
                                                                     *     }
                                                                     *   </style>
                                                                     * </custom-style>
                                                                     * ```
                                                                     *
                                                                     * @customElement
                                                                     * @extends HTMLElement
                                                                     * @summary Custom element for defining styles in the main document that can
                                                                     *   take advantage of Polymer's style scoping and custom properties shims.
                                                                     */var CustomStyle=/*#__PURE__*/function(_HTMLElement2){babelHelpers.inherits(CustomStyle,_HTMLElement2);function CustomStyle(){var _this33;babelHelpers.classCallCheck(this,CustomStyle);_this33=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(CustomStyle).call(this));_this33._style=null;CustomStyleInterface$1.addCustomStyle(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(_this33)));return _this33;}/**
     * Returns the light-DOM `<style>` child this element wraps.  Upon first
     * call any style modules referenced via the `include` attribute will be
     * concatenated to this element's `<style>`.
     *
     * @export
     * @return {HTMLStyleElement} This element's light-DOM `<style>`
     */babelHelpers.createClass(CustomStyle,[{key:"getStyle",value:function getStyle(){if(this._style){return this._style;}var style=/** @type {HTMLStyleElement} */this.querySelector('style');if(!style){return null;}this._style=style;var include=style.getAttribute(attr);if(include){style.removeAttribute(attr);style.textContent=cssFromModules(include)+style.textContent;}/*
      HTML Imports styling the main document are deprecated in Chrome
      https://crbug.com/523952
       If this element is not in the main document, then it must be in an HTML Import document.
      In that case, move the custom style to the main document.
       The ordering of `<custom-style>` should stay the same as when loaded by HTML Imports, but there may be odd
      cases of ordering w.r.t the main document styles.
      */if(this.ownerDocument!==window.document){window.document.head.appendChild(this);}return this._style;}}]);return CustomStyle;}(babelHelpers.wrapNativeSuper(HTMLElement));_exports.CustomStyle=CustomStyle;window.customElements.define('custom-style',CustomStyle);var customStyle={CustomStyle:CustomStyle};_exports.$customStyle=customStyle;var mutablePropertyChange$1;/** @suppress {missingProperties} */(function(){mutablePropertyChange$1=MutableData._mutablePropertyChange;})();/**
       * Legacy element behavior to skip strict dirty-checking for objects and arrays,
       * (always consider them to be "dirty") for use on legacy API Polymer elements.
       *
       * By default, `Polymer.PropertyEffects` performs strict dirty checking on
       * objects, which means that any deep modifications to an object or array will
       * not be propagated unless "immutable" data patterns are used (i.e. all object
       * references from the root to the mutation were changed).
       *
       * Polymer also provides a proprietary data mutation and path notification API
       * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
       * mutation and notification of deep changes in an object graph to all elements
       * bound to the same object graph.
       *
       * In cases where neither immutable patterns nor the data mutation API can be
       * used, applying this mixin will cause Polymer to skip dirty checking for
       * objects and arrays (always consider them to be "dirty").  This allows a
       * user to make a deep modification to a bound object graph, and then either
       * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
       * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
       * elements that wish to be updated based on deep mutations must apply this
       * mixin or otherwise skip strict dirty checking for objects/arrays.
       * Specifically, any elements in the binding tree between the source of a
       * mutation and the consumption of it must apply this behavior or enable the
       * `Polymer.OptionalMutableDataBehavior`.
       *
       * In order to make the dirty check strategy configurable, see
       * `Polymer.OptionalMutableDataBehavior`.
       *
       * Note, the performance characteristics of propagating large object graphs
       * will be worse as opposed to using strict dirty checking with immutable
       * patterns or Polymer's path notification API.
       *
       * @polymerBehavior
       * @summary Behavior to skip strict dirty-checking for objects and
       *   arrays
       */var MutableDataBehavior={/**
   * Overrides `Polymer.PropertyEffects` to provide option for skipping
   * strict equality checking for Objects and Arrays.
   *
   * This method pulls the value to dirty check against from the `__dataTemp`
   * cache (rather than the normal `__data` cache) for Objects.  Since the temp
   * cache is cleared at the end of a turn, this implementation allows
   * side-effects of deep object changes to be processed by re-setting the
   * same object (using the temp cache as an in-turn backstop to prevent
   * cycles due to 2-way notification).
   *
   * @param {string} property Property name
   * @param {*} value New property value
   * @param {*} old Previous property value
   * @return {boolean} Whether the property should be considered a change
   * @protected
   */_shouldPropertyChange:function _shouldPropertyChange(property,value,old){return mutablePropertyChange$1(this,property,value,old,true);}};/**
    * Legacy element behavior to add the optional ability to skip strict
    * dirty-checking for objects and arrays (always consider them to be
    * "dirty") by setting a `mutable-data` attribute on an element instance.
    *
    * By default, `Polymer.PropertyEffects` performs strict dirty checking on
    * objects, which means that any deep modifications to an object or array will
    * not be propagated unless "immutable" data patterns are used (i.e. all object
    * references from the root to the mutation were changed).
    *
    * Polymer also provides a proprietary data mutation and path notification API
    * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
    * mutation and notification of deep changes in an object graph to all elements
    * bound to the same object graph.
    *
    * In cases where neither immutable patterns nor the data mutation API can be
    * used, applying this mixin will allow Polymer to skip dirty checking for
    * objects and arrays (always consider them to be "dirty").  This allows a
    * user to make a deep modification to a bound object graph, and then either
    * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
    * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
    * elements that wish to be updated based on deep mutations must apply this
    * mixin or otherwise skip strict dirty checking for objects/arrays.
    * Specifically, any elements in the binding tree between the source of a
    * mutation and the consumption of it must enable this behavior or apply the
    * `Polymer.OptionalMutableDataBehavior`.
    *
    * While this behavior adds the ability to forgo Object/Array dirty checking,
    * the `mutableData` flag defaults to false and must be set on the instance.
    *
    * Note, the performance characteristics of propagating large object graphs
    * will be worse by relying on `mutableData: true` as opposed to using
    * strict dirty checking with immutable patterns or Polymer's path notification
    * API.
    *
    * @polymerBehavior
    * @summary Behavior to optionally skip strict dirty-checking for objects and
    *   arrays
    */_exports.MutableDataBehavior=MutableDataBehavior;var OptionalMutableDataBehavior={properties:{/**
     * Instance-level flag for configuring the dirty-checking strategy
     * for this element.  When true, Objects and Arrays will skip dirty
     * checking, otherwise strict equality checking will be used.
     */mutableData:Boolean},/**
   * Overrides `Polymer.PropertyEffects` to skip strict equality checking
   * for Objects and Arrays.
   *
   * Pulls the value to dirty check against from the `__dataTemp` cache
   * (rather than the normal `__data` cache) for Objects.  Since the temp
   * cache is cleared at the end of a turn, this implementation allows
   * side-effects of deep object changes to be processed by re-setting the
   * same object (using the temp cache as an in-turn backstop to prevent
   * cycles due to 2-way notification).
   *
   * @param {string} property Property name
   * @param {*} value New property value
   * @param {*} old Previous property value
   * @return {boolean} Whether the property should be considered a change
   * @this {this}
   * @protected
   */_shouldPropertyChange:function _shouldPropertyChange(property,value,old){return mutablePropertyChange$1(this,property,value,old,this.mutableData);}};_exports.OptionalMutableDataBehavior=OptionalMutableDataBehavior;var mutableDataBehavior={MutableDataBehavior:MutableDataBehavior,OptionalMutableDataBehavior:OptionalMutableDataBehavior};_exports.$mutableDataBehavior=mutableDataBehavior;var Base=LegacyElementMixin(HTMLElement).prototype;_exports.Base=Base;var polymerLegacy={Base:Base,Polymer:Polymer$1,html:html};_exports.$polymerLegacy=polymerLegacy;Polymer$1({is:'iron-media-query',properties:{/**
     * The Boolean return value of the media query.
     */queryMatches:{type:Boolean,value:false,readOnly:true,notify:true},/**
     * The CSS media query to evaluate.
     */query:{type:String,observer:'queryChanged'},/**
     * If true, the query attribute is assumed to be a complete media query
     * string rather than a single media feature.
     */full:{type:Boolean,value:false},/**
     * @type {function(MediaQueryList)}
     */_boundMQHandler:{value:function value(){return this.queryHandler.bind(this);}},/**
     * @type {MediaQueryList}
     */_mq:{value:null}},attached:function attached(){this.style.display='none';this.queryChanged();},detached:function detached(){this._remove();},_add:function _add(){if(this._mq){this._mq.addListener(this._boundMQHandler);}},_remove:function _remove(){if(this._mq){this._mq.removeListener(this._boundMQHandler);}this._mq=null;},queryChanged:function queryChanged(){this._remove();var query=this.query;if(!query){return;}if(!this.full&&query[0]!=='('){query='('+query+')';}this._mq=window.matchMedia(query);this._add();this.queryHandler(this._mq);},queryHandler:function queryHandler(mq){this._setQueryMatches(mq.matches);}});var ORPHANS=new Set();/**
                          * `IronResizableBehavior` is a behavior that can be used in Polymer elements to
                          * coordinate the flow of resize events between "resizers" (elements that
                          *control the size or hidden state of their children) and "resizables" (elements
                          *that need to be notified when they are resized or un-hidden by their parents
                          *in order to take action on their new measurements).
                          *
                          * Elements that perform measurement should add the `IronResizableBehavior`
                          *behavior to their element definition and listen for the `iron-resize` event on
                          *themselves. This event will be fired when they become showing after having
                          *been hidden, when they are resized explicitly by another resizable, or when
                          *the window has been resized.
                          *
                          * Note, the `iron-resize` event is non-bubbling.
                          *
                          * @polymerBehavior
                          * @demo demo/index.html
                          **/var IronResizableBehavior={properties:{/**
     * The closest ancestor element that implements `IronResizableBehavior`.
     */_parentResizable:{type:Object,observer:'_parentResizableChanged'},/**
     * True if this element is currently notifying its descendant elements of
     * resize.
     */_notifyingDescendant:{type:Boolean,value:false}},listeners:{'iron-request-resize-notifications':'_onIronRequestResizeNotifications'},created:function created(){// We don't really need property effects on these, and also we want them
// to be created before the `_parentResizable` observer fires:
this._interestedResizables=[];this._boundNotifyResize=this.notifyResize.bind(this);this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this);},attached:function attached(){this._requestResizeNotifications();},detached:function detached(){if(this._parentResizable){this._parentResizable.stopResizeNotificationsFor(this);}else{ORPHANS.delete(this);window.removeEventListener('resize',this._boundNotifyResize);}this._parentResizable=null;},/**
   * Can be called to manually notify a resizable and its descendant
   * resizables of a resize change.
   */notifyResize:function notifyResize(){if(!this.isAttached){return;}this._interestedResizables.forEach(function(resizable){if(this.resizerShouldNotify(resizable)){this._notifyDescendant(resizable);}},this);this._fireResize();},/**
   * Used to assign the closest resizable ancestor to this resizable
   * if the ancestor detects a request for notifications.
   */assignParentResizable:function assignParentResizable(parentResizable){if(this._parentResizable){this._parentResizable.stopResizeNotificationsFor(this);}this._parentResizable=parentResizable;if(parentResizable&&parentResizable._interestedResizables.indexOf(this)===-1){parentResizable._interestedResizables.push(this);parentResizable._subscribeIronResize(this);}},/**
   * Used to remove a resizable descendant from the list of descendants
   * that should be notified of a resize change.
   */stopResizeNotificationsFor:function stopResizeNotificationsFor(target){var index=this._interestedResizables.indexOf(target);if(index>-1){this._interestedResizables.splice(index,1);this._unsubscribeIronResize(target);}},/**
   * Subscribe this element to listen to iron-resize events on the given target.
   *
   * Preferred over target.listen because the property renamer does not
   * understand to rename when the target is not specifically "this"
   *
   * @param {!HTMLElement} target Element to listen to for iron-resize events.
   */_subscribeIronResize:function _subscribeIronResize(target){target.addEventListener('iron-resize',this._boundOnDescendantIronResize);},/**
   * Unsubscribe this element from listening to to iron-resize events on the
   * given target.
   *
   * Preferred over target.unlisten because the property renamer does not
   * understand to rename when the target is not specifically "this"
   *
   * @param {!HTMLElement} target Element to listen to for iron-resize events.
   */_unsubscribeIronResize:function _unsubscribeIronResize(target){target.removeEventListener('iron-resize',this._boundOnDescendantIronResize);},/**
   * This method can be overridden to filter nested elements that should or
   * should not be notified by the current element. Return true if an element
   * should be notified, or false if it should not be notified.
   *
   * @param {HTMLElement} element A candidate descendant element that
   * implements `IronResizableBehavior`.
   * @return {boolean} True if the `element` should be notified of resize.
   */resizerShouldNotify:function resizerShouldNotify(element){return true;},_onDescendantIronResize:function _onDescendantIronResize(event){if(this._notifyingDescendant){event.stopPropagation();return;}// no need to use this during shadow dom because of event retargeting
if(!useShadow){this._fireResize();}},_fireResize:function _fireResize(){this.fire('iron-resize',null,{node:this,bubbles:false});},_onIronRequestResizeNotifications:function _onIronRequestResizeNotifications(event){var target=/** @type {!EventTarget} */dom(event).rootTarget;if(target===this){return;}target.assignParentResizable(this);this._notifyDescendant(target);event.stopPropagation();},_parentResizableChanged:function _parentResizableChanged(parentResizable){if(parentResizable){window.removeEventListener('resize',this._boundNotifyResize);}},_notifyDescendant:function _notifyDescendant(descendant){// NOTE(cdata): In IE10, attached is fired on children first, so it's
// important not to notify them if the parent is not attached yet (or
// else they will get redundantly notified when the parent attaches).
if(!this.isAttached){return;}this._notifyingDescendant=true;descendant.notifyResize();this._notifyingDescendant=false;},_requestResizeNotifications:function _requestResizeNotifications(){if(!this.isAttached){return;}if(document.readyState==='loading'){var _requestResizeNotifications=this._requestResizeNotifications.bind(this);document.addEventListener('readystatechange',function readystatechanged(){document.removeEventListener('readystatechange',readystatechanged);_requestResizeNotifications();});}else{this._findParent();if(!this._parentResizable){// If this resizable is an orphan, tell other orphans to try to find
// their parent again, in case it's this resizable.
ORPHANS.forEach(function(orphan){if(orphan!==this){orphan._findParent();}},this);window.addEventListener('resize',this._boundNotifyResize);this.notifyResize();}else{// If this resizable has a parent, tell other child resizables of
// that parent to try finding their parent again, in case it's this
// resizable.
this._parentResizable._interestedResizables.forEach(function(resizable){if(resizable!==this){resizable._findParent();}},this);}}},_findParent:function _findParent(){this.assignParentResizable(null);this.fire('iron-request-resize-notifications',null,{node:this,bubbles:true,cancelable:true});if(!this._parentResizable){ORPHANS.add(this);}else{ORPHANS.delete(this);}}};_exports.IronResizableBehavior=IronResizableBehavior;var ironResizableBehavior={IronResizableBehavior:IronResizableBehavior};_exports.$ironResizableBehavior=ironResizableBehavior;var AppLayoutBehavior=[IronResizableBehavior,{listeners:{'app-reset-layout':'_appResetLayoutHandler','iron-resize':'resetLayout'},attached:function attached(){this.fire('app-reset-layout');},_appResetLayoutHandler:function _appResetLayoutHandler(e){if(dom(e).path[0]===this){return;}this.resetLayout();e.stopPropagation();},_updateLayoutStates:function _updateLayoutStates(){console.error('unimplemented');},/**
   * Resets the layout. If you changed the size of this element via CSS
   * you can notify the changes by either firing the `iron-resize` event
   * or calling `resetLayout` directly.
   *
   * @method resetLayout
   */resetLayout:function resetLayout(){var self=this;var cb=this._updateLayoutStates.bind(this);this._layoutDebouncer=Debouncer.debounce(this._layoutDebouncer,animationFrame,cb);enqueueDebouncer(this._layoutDebouncer);this._notifyDescendantResize();},_notifyLayoutChanged:function _notifyLayoutChanged(){var self=this;// TODO: the event `app-reset-layout` can be fired synchronously
// as long as `_updateLayoutStates` waits for all the microtasks after
// rAF. E.g. requestAnimationFrame(setTimeOut())
requestAnimationFrame(function(){self.fire('app-reset-layout');});},_notifyDescendantResize:function _notifyDescendantResize(){if(!this.isAttached){return;}this._interestedResizables.forEach(function(resizable){if(this.resizerShouldNotify(resizable)){this._notifyDescendant(resizable);}},this);}}];_exports.AppLayoutBehavior=AppLayoutBehavior;var appLayoutBehavior={AppLayoutBehavior:AppLayoutBehavior};_exports.$appLayoutBehavior=appLayoutBehavior;Polymer$1({_template:html(_templateObject_7f57aa202bd911e99390d3b784e8dc1a()),is:'app-drawer-layout',behaviors:[AppLayoutBehavior],properties:{/**
     * If true, ignore `responsiveWidth` setting and force the narrow layout.
     */forceNarrow:{type:Boolean,value:false},/**
     * If the viewport's width is smaller than this value, the panel will change
     * to narrow layout. In the mode the drawer will be closed.
     */responsiveWidth:{type:String,value:'640px'},/**
     * Returns true if it is in narrow layout. This is useful if you need to
     * show/hide elements based on the layout.
     */narrow:{type:Boolean,reflectToAttribute:true,readOnly:true,notify:true},/**
     * If true, the drawer will initially be opened when in narrow layout mode.
     */openedWhenNarrow:{type:Boolean,value:false},_drawerPosition:{type:String}},listeners:{'click':'_clickHandler'},observers:['_narrowChanged(narrow)'],/**
   * A reference to the app-drawer element.
   *
   * @property drawer
   */get drawer(){return dom(this.$.drawerSlot).getDistributedNodes()[0];},attached:function attached(){// Disable drawer transitions until after app-drawer-layout sets the initial
// opened state.
var drawer=this.drawer;if(drawer){drawer.setAttribute('no-transition','');}},_clickHandler:function _clickHandler(e){var target=dom(e).localTarget;if(target&&target.hasAttribute('drawer-toggle')){var drawer=this.drawer;if(drawer&&!drawer.persistent){drawer.toggle();}}},_updateLayoutStates:function _updateLayoutStates(){var drawer=this.drawer;if(!this.isAttached||!drawer){return;}this._drawerPosition=this.narrow?null:drawer.position;if(this._drawerNeedsReset){if(this.narrow){drawer.opened=this.openedWhenNarrow;drawer.persistent=false;}else{drawer.opened=drawer.persistent=true;}if(drawer.hasAttribute('no-transition')){// Enable drawer transitions after app-drawer-layout sets the initial
// opened state.
afterNextRender(this,function(){drawer.removeAttribute('no-transition');});}this._drawerNeedsReset=false;}},_narrowChanged:function _narrowChanged(){this._drawerNeedsReset=true;this.resetLayout();},_onQueryMatchesChanged:function _onQueryMatchesChanged(event){this._setNarrow(event.detail.value);},_computeMediaQuery:function _computeMediaQuery(forceNarrow,responsiveWidth){return forceNarrow?'(min-width: 0px)':'(max-width: '+responsiveWidth+')';}});var template=html(_templateObject2_7f57aa202bd911e99390d3b784e8dc1a());template.setAttribute('style','display: none;');document.head.appendChild(template.content);var style=document.createElement('style');style.textContent='[hidden] { display: none !important; }';document.head.appendChild(style);Polymer$1({_template:html(_templateObject3_7f57aa202bd911e99390d3b784e8dc1a()),is:'app-drawer',properties:{/**
     * The opened state of the drawer.
     */opened:{type:Boolean,value:false,notify:true,reflectToAttribute:true},/**
     * The drawer does not have a scrim and cannot be swiped close.
     */persistent:{type:Boolean,value:false,reflectToAttribute:true},/**
     * The transition duration of the drawer in milliseconds.
     */transitionDuration:{type:Number,value:200},/**
     * The alignment of the drawer on the screen ('left', 'right', 'start' or
     * 'end'). 'start' computes to left and 'end' to right in LTR layout and
     * vice versa in RTL layout.
     */align:{type:String,value:'left'},/**
     * The computed, read-only position of the drawer on the screen ('left' or
     * 'right').
     */position:{type:String,readOnly:true,reflectToAttribute:true},/**
     * Create an area at the edge of the screen to swipe open the drawer.
     */swipeOpen:{type:Boolean,value:false,reflectToAttribute:true},/**
     * Trap keyboard focus when the drawer is opened and not persistent.
     */noFocusTrap:{type:Boolean,value:false},/**
     * Disables swiping on the drawer.
     */disableSwipe:{type:Boolean,value:false}},observers:['resetLayout(position, isAttached)','_resetPosition(align, isAttached)','_styleTransitionDuration(transitionDuration)','_openedPersistentChanged(opened, persistent)'],_translateOffset:0,_trackDetails:null,_drawerState:0,_boundEscKeydownHandler:null,_firstTabStop:null,_lastTabStop:null,attached:function attached(){afterNextRender(this,function(){this._boundEscKeydownHandler=this._escKeydownHandler.bind(this);this.addEventListener('keydown',this._tabKeydownHandler.bind(this));// Only listen for horizontal track so you can vertically scroll
// inside the drawer.
this.listen(this,'track','_track');this.setScrollDirection('y');});this.fire('app-reset-layout');},detached:function detached(){document.removeEventListener('keydown',this._boundEscKeydownHandler);},/**
   * Opens the drawer.
   */open:function open(){this.opened=true;},/**
   * Closes the drawer.
   */close:function close(){this.opened=false;},/**
   * Toggles the drawer open and close.
   */toggle:function toggle(){this.opened=!this.opened;},/**
   * Gets the width of the drawer.
   *
   * @return {number} The width of the drawer in pixels.
   */getWidth:function getWidth(){return this._savedWidth||this.$.contentContainer.offsetWidth;},_isRTL:function _isRTL(){return window.getComputedStyle(this).direction==='rtl';},_resetPosition:function _resetPosition(){switch(this.align){case'start':this._setPosition(this._isRTL()?'right':'left');return;case'end':this._setPosition(this._isRTL()?'left':'right');return;}this._setPosition(this.align);},_escKeydownHandler:function _escKeydownHandler(event){var ESC_KEYCODE=27;if(event.keyCode===ESC_KEYCODE){// Prevent any side effects if app-drawer closes.
event.preventDefault();this.close();}},_track:function _track(event){if(this.persistent||this.disableSwipe){return;}// Disable user selection on desktop.
event.preventDefault();switch(event.detail.state){case'start':this._trackStart(event);break;case'track':this._trackMove(event);break;case'end':this._trackEnd(event);break;}},_trackStart:function _trackStart(event){this._drawerState=this._DRAWER_STATE.TRACKING;var rect=this.$.contentContainer.getBoundingClientRect();this._savedWidth=rect.width;if(this.position==='left'){this._translateOffset=rect.left;}else{this._translateOffset=rect.right-window.innerWidth;}this._trackDetails=[];// Disable transitions since style attributes will reflect user track
// events.
this._styleTransitionDuration(0);this.style.visibility='visible';},_trackMove:function _trackMove(event){this._translateDrawer(event.detail.dx+this._translateOffset);// Use Date.now() since event.timeStamp is inconsistent across browsers
// (e.g. most browsers use milliseconds but FF 44 uses microseconds).
this._trackDetails.push({dx:event.detail.dx,timeStamp:Date.now()});},_trackEnd:function _trackEnd(event){var x=event.detail.dx+this._translateOffset;var drawerWidth=this.getWidth();var isPositionLeft=this.position==='left';var isInEndState=isPositionLeft?x>=0||x<=-drawerWidth:x<=0||x>=drawerWidth;if(!isInEndState){// No longer need the track events after this method returns - allow them
// to be GC'd.
var trackDetails=this._trackDetails;this._trackDetails=null;this._flingDrawer(event,trackDetails);if(this._drawerState===this._DRAWER_STATE.FLINGING){return;}}// If the drawer is not flinging, toggle the opened state based on the
// position of the drawer.
var halfWidth=drawerWidth/2;if(event.detail.dx<-halfWidth){this.opened=this.position==='right';}else if(event.detail.dx>halfWidth){this.opened=this.position==='left';}if(isInEndState){this.debounce('_resetDrawerState',this._resetDrawerState);}else{this.debounce('_resetDrawerState',this._resetDrawerState,this.transitionDuration);}this._styleTransitionDuration(this.transitionDuration);this._resetDrawerTranslate();this.style.visibility='';},_calculateVelocity:function _calculateVelocity(event,trackDetails){// Find the oldest track event that is within 100ms using binary search.
var now=Date.now();var timeLowerBound=now-100;var trackDetail;var min=0;var max=trackDetails.length-1;while(min<=max){// Floor of average of min and max.
var mid=min+max>>1;var d=trackDetails[mid];if(d.timeStamp>=timeLowerBound){trackDetail=d;max=mid-1;}else{min=mid+1;}}if(trackDetail){var dx=event.detail.dx-trackDetail.dx;var dt=now-trackDetail.timeStamp||1;return dx/dt;}return 0;},_flingDrawer:function _flingDrawer(event,trackDetails){var velocity=this._calculateVelocity(event,trackDetails);// Do not fling if velocity is not above a threshold.
if(Math.abs(velocity)<this._MIN_FLING_THRESHOLD){return;}this._drawerState=this._DRAWER_STATE.FLINGING;var x=event.detail.dx+this._translateOffset;var drawerWidth=this.getWidth();var isPositionLeft=this.position==='left';var isVelocityPositive=velocity>0;var isClosingLeft=!isVelocityPositive&&isPositionLeft;var isClosingRight=isVelocityPositive&&!isPositionLeft;var dx;if(isClosingLeft){dx=-(x+drawerWidth);}else if(isClosingRight){dx=drawerWidth-x;}else{dx=-x;}// Enforce a minimum transition velocity to make the drawer feel snappy.
if(isVelocityPositive){velocity=Math.max(velocity,this._MIN_TRANSITION_VELOCITY);this.opened=this.position==='left';}else{velocity=Math.min(velocity,-this._MIN_TRANSITION_VELOCITY);this.opened=this.position==='right';}// Calculate the amount of time needed to finish the transition based on the
// initial slope of the timing function.
var t=this._FLING_INITIAL_SLOPE*dx/velocity;this._styleTransitionDuration(t);this._styleTransitionTimingFunction(this._FLING_TIMING_FUNCTION);this._resetDrawerTranslate();this.debounce('_resetDrawerState',this._resetDrawerState,t);},_styleTransitionDuration:function _styleTransitionDuration(duration){this.style.transitionDuration=duration+'ms';this.$.contentContainer.style.transitionDuration=duration+'ms';this.$.scrim.style.transitionDuration=duration+'ms';},_styleTransitionTimingFunction:function _styleTransitionTimingFunction(timingFunction){this.$.contentContainer.style.transitionTimingFunction=timingFunction;this.$.scrim.style.transitionTimingFunction=timingFunction;},_translateDrawer:function _translateDrawer(x){var drawerWidth=this.getWidth();if(this.position==='left'){x=Math.max(-drawerWidth,Math.min(x,0));this.$.scrim.style.opacity=1+x/drawerWidth;}else{x=Math.max(0,Math.min(x,drawerWidth));this.$.scrim.style.opacity=1-x/drawerWidth;}this.translate3d(x+'px','0','0',this.$.contentContainer);},_resetDrawerTranslate:function _resetDrawerTranslate(){this.$.scrim.style.opacity='';this.transform('',this.$.contentContainer);},_resetDrawerState:function _resetDrawerState(){var oldState=this._drawerState;// If the drawer was flinging, we need to reset the style attributes.
if(oldState===this._DRAWER_STATE.FLINGING){this._styleTransitionDuration(this.transitionDuration);this._styleTransitionTimingFunction('');this.style.visibility='';}this._savedWidth=null;if(this.opened){this._drawerState=this.persistent?this._DRAWER_STATE.OPENED_PERSISTENT:this._DRAWER_STATE.OPENED;}else{this._drawerState=this._DRAWER_STATE.CLOSED;}if(oldState!==this._drawerState){if(this._drawerState===this._DRAWER_STATE.OPENED){this._setKeyboardFocusTrap();document.addEventListener('keydown',this._boundEscKeydownHandler);document.body.style.overflow='hidden';}else{document.removeEventListener('keydown',this._boundEscKeydownHandler);document.body.style.overflow='';}// Don't fire the event on initial load.
if(oldState!==this._DRAWER_STATE.INIT){this.fire('app-drawer-transitioned');}}},/**
   * Resets the layout.
   *
   * @method resetLayout
   */resetLayout:function resetLayout(){this.fire('app-reset-layout');},_setKeyboardFocusTrap:function _setKeyboardFocusTrap(){if(this.noFocusTrap){return;}// NOTE: Unless we use /deep/ (which we shouldn't since it's deprecated),
// this will not select focusable elements inside shadow roots.
var focusableElementsSelector=['a[href]:not([tabindex="-1"])','area[href]:not([tabindex="-1"])','input:not([disabled]):not([tabindex="-1"])','select:not([disabled]):not([tabindex="-1"])','textarea:not([disabled]):not([tabindex="-1"])','button:not([disabled]):not([tabindex="-1"])','iframe:not([tabindex="-1"])','[tabindex]:not([tabindex="-1"])','[contentEditable=true]:not([tabindex="-1"])'].join(',');var focusableElements=dom(this).querySelectorAll(focusableElementsSelector);if(focusableElements.length>0){this._firstTabStop=focusableElements[0];this._lastTabStop=focusableElements[focusableElements.length-1];}else{// Reset saved tab stops when there are no focusable elements in the
// drawer.
this._firstTabStop=null;this._lastTabStop=null;}// Focus on app-drawer if it has non-zero tabindex. Otherwise, focus the
// first focusable element in the drawer, if it exists. Use the tabindex
// attribute since the this.tabIndex property in IE/Edge returns 0 (instead
// of -1) when the attribute is not set.
var tabindex=this.getAttribute('tabindex');if(tabindex&&parseInt(tabindex,10)>-1){this.focus();}else if(this._firstTabStop){this._firstTabStop.focus();}},_tabKeydownHandler:function _tabKeydownHandler(event){if(this.noFocusTrap){return;}var TAB_KEYCODE=9;if(this._drawerState===this._DRAWER_STATE.OPENED&&event.keyCode===TAB_KEYCODE){if(event.shiftKey){if(this._firstTabStop&&dom(event).localTarget===this._firstTabStop){event.preventDefault();this._lastTabStop.focus();}}else{if(this._lastTabStop&&dom(event).localTarget===this._lastTabStop){event.preventDefault();this._firstTabStop.focus();}}}},_openedPersistentChanged:function _openedPersistentChanged(opened,persistent){this.toggleClass('visible',opened&&!persistent,this.$.scrim);// Use a debounce timer instead of transitionend since transitionend won't
// fire when app-drawer is display: none.
this.debounce('_resetDrawerState',this._resetDrawerState,this.transitionDuration);},_MIN_FLING_THRESHOLD:0.2,_MIN_TRANSITION_VELOCITY:1.2,_FLING_TIMING_FUNCTION:'cubic-bezier(0.667, 1, 0.667, 1)',_FLING_INITIAL_SLOPE:1.5,_DRAWER_STATE:{INIT:0,OPENED:1,OPENED_PERSISTENT:2,CLOSED:3,TRACKING:4,FLINGING:5/**
                 * Fired when the layout of app-drawer has changed.
                 *
                 * @event app-reset-layout
                 */ /**
                     * Fired when app-drawer has finished transitioning.
                     *
                     * @event app-drawer-transitioned
                     */}});Polymer$1({_template:html(_templateObject4_7f57aa202bd911e99390d3b784e8dc1a()),is:'app-header-layout',behaviors:[AppLayoutBehavior],properties:{/**
     * If true, the current element will have its own scrolling region.
     * Otherwise, it will use the document scroll to control the header.
     */hasScrollingRegion:{type:Boolean,value:false,reflectToAttribute:true}},observers:['resetLayout(isAttached, hasScrollingRegion)'],/**
   * A reference to the app-header element.
   *
   * @property header
   */get header(){return dom(this.$.headerSlot).getDistributedNodes()[0];},_updateLayoutStates:function _updateLayoutStates(){var header=this.header;if(!this.isAttached||!header){return;}// Remove the initializing class, which staticly positions the header and
// the content until the height of the header can be read.
this.$.wrapper.classList.remove('initializing');// Update scroll target.
header.scrollTarget=this.hasScrollingRegion?this.$.contentContainer:this.ownerDocument.documentElement;// Get header height here so that style reads are batched together before
// style writes (i.e. getBoundingClientRect() below).
var headerHeight=header.offsetHeight;// Update the header position.
if(!this.hasScrollingRegion){requestAnimationFrame(function(){var rect=this.getBoundingClientRect();var rightOffset=document.documentElement.clientWidth-rect.right;header.style.left=rect.left+'px';header.style.right=rightOffset+'px';}.bind(this));}else{header.style.left='';header.style.right='';}// Update the content container position.
var containerStyle=this.$.contentContainer.style;if(header.fixed&&!header.condenses&&this.hasScrollingRegion){// If the header size does not change and we're using a scrolling region,
// exclude the header area from the scrolling region so that the header
// doesn't overlap the scrollbar.
containerStyle.marginTop=headerHeight+'px';containerStyle.paddingTop='';}else{containerStyle.paddingTop=headerHeight+'px';containerStyle.marginTop='';}}});var IronScrollTargetBehavior={properties:{/**
     * Specifies the element that will handle the scroll event
     * on the behalf of the current element. This is typically a reference to an
     *element, but there are a few more posibilities:
     *
     * ### Elements id
     *
     *```html
     * <div id="scrollable-element" style="overflow: auto;">
     *  <x-element scroll-target="scrollable-element">
     *    <!-- Content-->
     *  </x-element>
     * </div>
     *```
     * In this case, the `scrollTarget` will point to the outer div element.
     *
     * ### Document scrolling
     *
     * For document scrolling, you can use the reserved word `document`:
     *
     *```html
     * <x-element scroll-target="document">
     *   <!-- Content -->
     * </x-element>
     *```
     *
     * ### Elements reference
     *
     *```js
     * appHeader.scrollTarget = document.querySelector('#scrollable-element');
     *```
     *
     * @type {HTMLElement}
     * @default document
     */scrollTarget:{type:HTMLElement,value:function value(){return this._defaultScrollTarget;}}},observers:['_scrollTargetChanged(scrollTarget, isAttached)'],/**
   * True if the event listener should be installed.
   */_shouldHaveListener:true,_scrollTargetChanged:function _scrollTargetChanged(scrollTarget,isAttached){var eventTarget;if(this._oldScrollTarget){this._toggleScrollListener(false,this._oldScrollTarget);this._oldScrollTarget=null;}if(!isAttached){return;}// Support element id references
if(scrollTarget==='document'){this.scrollTarget=this._doc;}else if(typeof scrollTarget==='string'){var domHost=this.domHost;this.scrollTarget=domHost&&domHost.$?domHost.$[scrollTarget]:dom(this.ownerDocument).querySelector('#'+scrollTarget);}else if(this._isValidScrollTarget()){this._oldScrollTarget=scrollTarget;this._toggleScrollListener(this._shouldHaveListener,scrollTarget);}},/**
   * Runs on every scroll event. Consumer of this behavior may override this
   * method.
   *
   * @protected
   */_scrollHandler:function scrollHandler(){},/**
   * The default scroll target. Consumers of this behavior may want to customize
   * the default scroll target.
   *
   * @type {Element}
   */get _defaultScrollTarget(){return this._doc;},/**
   * Shortcut for the document element
   *
   * @type {Element}
   */get _doc(){return this.ownerDocument.documentElement;},/**
   * Gets the number of pixels that the content of an element is scrolled
   * upward.
   *
   * @type {number}
   */get _scrollTop(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop;}return 0;},/**
   * Gets the number of pixels that the content of an element is scrolled to the
   * left.
   *
   * @type {number}
   */get _scrollLeft(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft;}return 0;},/**
   * Sets the number of pixels that the content of an element is scrolled
   * upward.
   *
   * @type {number}
   */set _scrollTop(top){if(this.scrollTarget===this._doc){window.scrollTo(window.pageXOffset,top);}else if(this._isValidScrollTarget()){this.scrollTarget.scrollTop=top;}},/**
   * Sets the number of pixels that the content of an element is scrolled to the
   * left.
   *
   * @type {number}
   */set _scrollLeft(left){if(this.scrollTarget===this._doc){window.scrollTo(left,window.pageYOffset);}else if(this._isValidScrollTarget()){this.scrollTarget.scrollLeft=left;}},/**
   * Scrolls the content to a particular place.
   *
   * @method scroll
   * @param {number|!{left: number, top: number}} leftOrOptions The left position or scroll options
   * @param {number=} top The top position
   * @return {void}
   */scroll:function scroll(leftOrOptions,top){var left;if(babelHelpers.typeof(leftOrOptions)==='object'){left=leftOrOptions.left;top=leftOrOptions.top;}else{left=leftOrOptions;}left=left||0;top=top||0;if(this.scrollTarget===this._doc){window.scrollTo(left,top);}else if(this._isValidScrollTarget()){this.scrollTarget.scrollLeft=left;this.scrollTarget.scrollTop=top;}},/**
   * Gets the width of the scroll target.
   *
   * @type {number}
   */get _scrollTargetWidth(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth;}return 0;},/**
   * Gets the height of the scroll target.
   *
   * @type {number}
   */get _scrollTargetHeight(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight;}return 0;},/**
   * Returns true if the scroll target is a valid HTMLElement.
   *
   * @return {boolean}
   */_isValidScrollTarget:function _isValidScrollTarget(){return babelHelpers.instanceof(this.scrollTarget,HTMLElement);},_toggleScrollListener:function _toggleScrollListener(yes,scrollTarget){var eventTarget=scrollTarget===this._doc?window:scrollTarget;if(yes){if(!this._boundScrollHandler){this._boundScrollHandler=this._scrollHandler.bind(this);eventTarget.addEventListener('scroll',this._boundScrollHandler);}}else{if(this._boundScrollHandler){eventTarget.removeEventListener('scroll',this._boundScrollHandler);this._boundScrollHandler=null;}}},/**
   * Enables or disables the scroll event listener.
   *
   * @param {boolean} yes True to add the event, False to remove it.
   */toggleScrollListener:function toggleScrollListener(yes){this._shouldHaveListener=yes;this._toggleScrollListener(yes,this.scrollTarget);}};_exports.IronScrollTargetBehavior=IronScrollTargetBehavior;var ironScrollTargetBehavior={IronScrollTargetBehavior:IronScrollTargetBehavior};_exports.$ironScrollTargetBehavior=ironScrollTargetBehavior;var _scrollEffects={};_exports._scrollEffects=_scrollEffects;var _scrollTimer=null;_exports._scrollTimer=_scrollTimer;var scrollTimingFunction=function easeOutQuad(t,b,c,d){t/=d;return-c*t*(t-2)+b;};/**
    * Registers a scroll effect to be used in elements that implement the
    * `Polymer.AppScrollEffectsBehavior` behavior.
    *
    * @param {string} effectName The effect name.
    * @param {Object} effectDef The effect definition.
    */_exports.scrollTimingFunction=scrollTimingFunction;var registerEffect=function registerEffect(effectName,effectDef){if(_scrollEffects[effectName]!=null){throw new Error('effect `'+effectName+'` is already registered.');}_scrollEffects[effectName]=effectDef;};_exports.registerEffect=registerEffect;var queryAllRoot=function queryAllRoot(selector,root){var queue=[root];var matches=[];while(queue.length>0){var node=queue.shift();matches.push.apply(matches,node.querySelectorAll(selector));for(var i=0;node.children[i];i++){if(node.children[i].shadowRoot){queue.push(node.children[i].shadowRoot);}}}return matches;};/**
    * Scrolls to a particular set of coordinates in a scroll target.
    * If the scroll target is not defined, then it would use the main document as
    * the target.
    *
    * To scroll in a smooth fashion, you can set the option `behavior: 'smooth'`.
    * e.g.
    *
    * ```js
    * Polymer.AppLayout.scroll({top: 0, behavior: 'smooth'});
    * ```
    *
    * To scroll in a silent mode, without notifying scroll changes to any
    * app-layout elements, you can set the option `behavior: 'silent'`. This is
    * particularly useful we you are using `app-header` and you desire to scroll to
    * the top of a scrolling region without running scroll effects. e.g.
    *
    * ```js
    * Polymer.AppLayout.scroll({top: 0, behavior: 'silent'});
    * ```
    *
    * @param {Object} options {top: Number, left: Number, behavior: String(smooth | silent)}
    */_exports.queryAllRoot=queryAllRoot;var scroll=function scroll(options){options=options||{};var docEl=document.documentElement;var target=options.target||docEl;var hasNativeScrollBehavior='scrollBehavior'in target.style&&target.scroll;var scrollClassName='app-layout-silent-scroll';var scrollTop=options.top||0;var scrollLeft=options.left||0;var scrollTo=target===docEl?window.scrollTo:function scrollTo(scrollLeft,scrollTop){target.scrollLeft=scrollLeft;target.scrollTop=scrollTop;};if(options.behavior==='smooth'){if(hasNativeScrollBehavior){target.scroll(options);}else{var timingFn=scrollTimingFunction;var startTime=Date.now();var currentScrollTop=target===docEl?window.pageYOffset:target.scrollTop;var currentScrollLeft=target===docEl?window.pageXOffset:target.scrollLeft;var deltaScrollTop=scrollTop-currentScrollTop;var deltaScrollLeft=scrollLeft-currentScrollLeft;var duration=300;var updateFrame=function updateFrame(){var now=Date.now();var elapsedTime=now-startTime;if(elapsedTime<duration){scrollTo(timingFn(elapsedTime,currentScrollLeft,deltaScrollLeft,duration),timingFn(elapsedTime,currentScrollTop,deltaScrollTop,duration));requestAnimationFrame(updateFrame);}else{scrollTo(scrollLeft,scrollTop);}}.bind(this);updateFrame();}}else if(options.behavior==='silent'){var headers=queryAllRoot('app-header',document.body);headers.forEach(function(header){header.setAttribute('silent-scroll','');});// Browsers keep the scroll momentum even if the bottom of the scrolling
// content was reached. This means that calling scroll({top: 0, behavior:
// 'silent'}) when the momentum is still going will result in more scroll
// events and thus scroll effects. This seems to only apply when using
// document scrolling. Therefore, when should we remove the class from the
// document element?
if(_scrollTimer){window.cancelAnimationFrame(_scrollTimer);}_exports._scrollTimer=_scrollTimer=window.requestAnimationFrame(function(){headers.forEach(function(header){header.removeAttribute('silent-scroll');});_exports._scrollTimer=_scrollTimer=null;});scrollTo(scrollLeft,scrollTop);}else{scrollTo(scrollLeft,scrollTop);}};_exports.scroll=scroll;var helpers={_scrollEffects:_scrollEffects,get _scrollTimer(){return _scrollTimer;},scrollTimingFunction:scrollTimingFunction,registerEffect:registerEffect,queryAllRoot:queryAllRoot,scroll:scroll};_exports.$helpers=helpers;var AppScrollEffectsBehavior=[IronScrollTargetBehavior,{properties:{/**
     * A space-separated list of the effects names that will be triggered when
     * the user scrolls. e.g. `waterfall parallax-background` installs the
     * `waterfall` and `parallax-background`.
     */effects:{type:String},/**
     * An object that configurates the effects installed via the `effects`
     * property. e.g.
     * ```js
     *  element.effectsConfig = {
     *   "blend-background": {
     *     "startsAt": 0.5
     *   }
     * };
     * ```
     * Every effect has at least two config properties: `startsAt` and
     * `endsAt`. These properties indicate when the event should start and end
     * respectively and relative to the overall element progress. So for
     * example, if `blend-background` starts at `0.5`, the effect will only
     * start once the current element reaches 0.5 of its progress. In this
     * context, the progress is a value in the range of `[0, 1]` that
     * indicates where this element is on the screen relative to the viewport.
     */effectsConfig:{type:Object,value:function value(){return{};}},/**
     * Disables CSS transitions and scroll effects on the element.
     */disabled:{type:Boolean,reflectToAttribute:true,value:false},/**
     * Allows to set a `scrollTop` threshold. When greater than 0,
     * `thresholdTriggered` is true only when the scroll target's `scrollTop`
     * has reached this value.
     *
     * For example, if `threshold = 100`, `thresholdTriggered` is true when
     * the `scrollTop` is at least `100`.
     */threshold:{type:Number,value:0},/**
     * True if the `scrollTop` threshold (set in `scrollTopThreshold`) has
     * been reached.
     */thresholdTriggered:{type:Boolean,notify:true,readOnly:true,reflectToAttribute:true}},observers:['_effectsChanged(effects, effectsConfig, isAttached)'],/**
   * Updates the scroll state. This method should be overridden
   * by the consumer of this behavior.
   *
   * @method _updateScrollState
   * @param {number} scrollTop
   */_updateScrollState:function _updateScrollState(scrollTop){},/**
   * Returns true if the current element is on the screen.
   * That is, visible in the current viewport. This method should be
   * overridden by the consumer of this behavior.
   *
   * @method isOnScreen
   * @return {boolean}
   */isOnScreen:function isOnScreen(){return false;},/**
   * Returns true if there's content below the current element. This method
   * should be overridden by the consumer of this behavior.
   *
   * @method isContentBelow
   * @return {boolean}
   */isContentBelow:function isContentBelow(){return false;},/**
   * List of effects handlers that will take place during scroll.
   *
   * @type {Array<Function>}
   */_effectsRunFn:null,/**
   * List of the effects definitions installed via the `effects` property.
   *
   * @type {Array<Object>}
   */_effects:null,/**
   * The clamped value of `_scrollTop`.
   * @type number
   */get _clampedScrollTop(){return Math.max(0,this._scrollTop);},attached:function attached(){this._scrollStateChanged();},detached:function detached(){this._tearDownEffects();},/**
   * Creates an effect object from an effect's name that can be used to run
   * effects programmatically.
   *
   * @method createEffect
   * @param {string} effectName The effect's name registered via `Polymer.AppLayout.registerEffect`.
   * @param {Object=} effectConfig The effect config object. (Optional)
   * @return {Object} An effect object with the following functions:
   *
   *  * `effect.setUp()`, Sets up the requirements for the effect.
   *       This function is called automatically before the `effect` function
   * returns.
   *  * `effect.run(progress, y)`, Runs the effect given a `progress`.
   *  * `effect.tearDown()`, Cleans up any DOM nodes or element references
   * used by the effect.
   *
   * Example:
   * ```js
   * var parallax = element.createEffect('parallax-background');
   * // runs the effect
   * parallax.run(0.5, 0);
   * ```
   */createEffect:function createEffect(effectName,effectConfig){var effectDef=_scrollEffects[effectName];if(!effectDef){throw new ReferenceError(this._getUndefinedMsg(effectName));}var prop=this._boundEffect(effectDef,effectConfig||{});prop.setUp();return prop;},/**
   * Called when `effects` or `effectsConfig` changes.
   */_effectsChanged:function _effectsChanged(effects,effectsConfig,isAttached){this._tearDownEffects();if(!effects||!isAttached){return;}effects.split(' ').forEach(function(effectName){var effectDef;if(effectName!==''){if(effectDef=_scrollEffects[effectName]){this._effects.push(this._boundEffect(effectDef,effectsConfig[effectName]));}else{console.warn(this._getUndefinedMsg(effectName));}}},this);this._setUpEffect();},/**
   * Forces layout
   */_layoutIfDirty:function _layoutIfDirty(){return this.offsetWidth;},/**
   * Returns an effect object bound to the current context.
   *
   * @param {Object} effectDef
   * @param {Object=} effectsConfig The effect config object if the effect accepts config values. (Optional)
   */_boundEffect:function _boundEffect(effectDef,effectsConfig){effectsConfig=effectsConfig||{};var startsAt=parseFloat(effectsConfig.startsAt||0);var endsAt=parseFloat(effectsConfig.endsAt||1);var deltaS=endsAt-startsAt;var noop=function noop(){};// fast path if possible
var runFn=startsAt===0&&endsAt===1?effectDef.run:function(progress,y){effectDef.run.call(this,Math.max(0,(progress-startsAt)/deltaS),y);};return{setUp:effectDef.setUp?effectDef.setUp.bind(this,effectsConfig):noop,run:effectDef.run?runFn.bind(this):noop,tearDown:effectDef.tearDown?effectDef.tearDown.bind(this):noop};},/**
   * Sets up the effects.
   */_setUpEffect:function _setUpEffect(){if(this.isAttached&&this._effects){this._effectsRunFn=[];this._effects.forEach(function(effectDef){// install the effect only if no error was reported
if(effectDef.setUp()!==false){this._effectsRunFn.push(effectDef.run);}},this);}},/**
   * Tears down the effects.
   */_tearDownEffects:function _tearDownEffects(){if(this._effects){this._effects.forEach(function(effectDef){effectDef.tearDown();});}this._effectsRunFn=[];this._effects=[];},/**
   * Runs the effects.
   *
   * @param {number} p The progress
   * @param {number} y The top position of the current element relative to the viewport.
   */_runEffects:function _runEffects(p,y){if(this._effectsRunFn){this._effectsRunFn.forEach(function(run){run(p,y);});}},/**
   * Overrides the `_scrollHandler`.
   */_scrollHandler:function _scrollHandler(){this._scrollStateChanged();},_scrollStateChanged:function _scrollStateChanged(){if(!this.disabled){var scrollTop=this._clampedScrollTop;this._updateScrollState(scrollTop);if(this.threshold>0){this._setThresholdTriggered(scrollTop>=this.threshold);}}},/**
   * Override this method to return a reference to a node in the local DOM.
   * The node is consumed by a scroll effect.
   *
   * @param {string} id The id for the node.
   */_getDOMRef:function _getDOMRef(id){console.warn('_getDOMRef','`'+id+'` is undefined');},_getUndefinedMsg:function _getUndefinedMsg(effectName){return'Scroll effect `'+effectName+'` is undefined. '+'Did you forget to import app-layout/app-scroll-effects/effects/'+effectName+'.html ?';}}];_exports.AppScrollEffectsBehavior=AppScrollEffectsBehavior;var appScrollEffectsBehavior={AppScrollEffectsBehavior:AppScrollEffectsBehavior};_exports.$appScrollEffectsBehavior=appScrollEffectsBehavior;Polymer$1({_template:html(_templateObject5_7f57aa202bd911e99390d3b784e8dc1a()),is:'app-header',behaviors:[AppScrollEffectsBehavior,AppLayoutBehavior],properties:{/**
     * If true, the header will automatically collapse when scrolling down.
     * That is, the `sticky` element remains visible when the header is fully
     *condensed whereas the rest of the elements will collapse below `sticky`
     *element.
     *
     * By default, the `sticky` element is the first toolbar in the light DOM:
     *
     *```html
     * <app-header condenses>
     *   <app-toolbar>This toolbar remains on top</app-toolbar>
     *   <app-toolbar></app-toolbar>
     *   <app-toolbar></app-toolbar>
     * </app-header>
     * ```
     *
     * Additionally, you can specify which toolbar or element remains visible in
     *condensed mode by adding the `sticky` attribute to that element. For
     *example: if we want the last toolbar to remain visible, we can add the
     *`sticky` attribute to it.
     *
     *```html
     * <app-header condenses>
     *   <app-toolbar></app-toolbar>
     *   <app-toolbar></app-toolbar>
     *   <app-toolbar sticky>This toolbar remains on top</app-toolbar>
     * </app-header>
     * ```
     *
     * Note the `sticky` element must be a direct child of `app-header`.
     */condenses:{type:Boolean,value:false},/**
     * Mantains the header fixed at the top so it never moves away.
     */fixed:{type:Boolean,value:false},/**
     * Slides back the header when scrolling back up.
     */reveals:{type:Boolean,value:false},/**
     * Displays a shadow below the header.
     */shadow:{type:Boolean,reflectToAttribute:true,value:false}},observers:['_configChanged(isAttached, condenses, fixed)'],/**
   * A cached offsetHeight of the current element.
   *
   * @type {number}
   */_height:0,/**
   * The distance in pixels the header will be translated to when scrolling.
   *
   * @type {number}
   */_dHeight:0,/**
   * The offsetTop of `_stickyEl`
   *
   * @type {number}
   */_stickyElTop:0,/**
   * A reference to the element that remains visible when the header condenses.
   *
   * @type {HTMLElement}
   */_stickyElRef:null,/**
   * The header's top value used for the `transformY`
   *
   * @type {number}
   */_top:0,/**
   * The current scroll progress.
   *
   * @type {number}
   */_progress:0,_wasScrollingDown:false,_initScrollTop:0,_initTimestamp:0,_lastTimestamp:0,_lastScrollTop:0,/**
   * The distance the header is allowed to move away.
   *
   * @type {number}
   */get _maxHeaderTop(){return this.fixed?this._dHeight:this._height+5;},/**
   * Returns a reference to the sticky element.
   *
   * @return {HTMLElement}?
   */get _stickyEl(){if(this._stickyElRef){return this._stickyElRef;}var nodes=dom(this.$.slot).getDistributedNodes();// Get the element with the sticky attribute on it or the first element in
// the light DOM.
for(var i=0,node;node=/** @type {!HTMLElement} */nodes[i];i++){if(node.nodeType===Node.ELEMENT_NODE){if(node.hasAttribute('sticky')){this._stickyElRef=node;break;}else if(!this._stickyElRef){this._stickyElRef=node;}}}return this._stickyElRef;},_configChanged:function _configChanged(){this.resetLayout();this._notifyLayoutChanged();},_updateLayoutStates:function _updateLayoutStates(){if(this.offsetWidth===0&&this.offsetHeight===0){return;}var scrollTop=this._clampedScrollTop;var firstSetup=this._height===0||scrollTop===0;var currentDisabled=this.disabled;this._height=this.offsetHeight;this._stickyElRef=null;this.disabled=true;// prepare for measurement
if(!firstSetup){this._updateScrollState(0,true);}if(this._mayMove()){this._dHeight=this._stickyEl?this._height-this._stickyEl.offsetHeight:0;}else{this._dHeight=0;}this._stickyElTop=this._stickyEl?this._stickyEl.offsetTop:0;this._setUpEffect();if(firstSetup){this._updateScrollState(scrollTop,true);}else{this._updateScrollState(this._lastScrollTop,true);this._layoutIfDirty();}// restore no transition
this.disabled=currentDisabled;},/**
   * Updates the scroll state.
   *
   * @param {number} scrollTop
   * @param {boolean=} forceUpdate (default: false)
   */_updateScrollState:function _updateScrollState(scrollTop,forceUpdate){if(this._height===0){return;}var progress=0;var top=0;var lastTop=this._top;var lastScrollTop=this._lastScrollTop;var maxHeaderTop=this._maxHeaderTop;var dScrollTop=scrollTop-this._lastScrollTop;var absDScrollTop=Math.abs(dScrollTop);var isScrollingDown=scrollTop>this._lastScrollTop;var now=performance.now();if(this._mayMove()){top=this._clamp(this.reveals?lastTop+dScrollTop:scrollTop,0,maxHeaderTop);}if(scrollTop>=this._dHeight){top=this.condenses&&!this.fixed?Math.max(this._dHeight,top):top;this.style.transitionDuration='0ms';}if(this.reveals&&!this.disabled&&absDScrollTop<100){// set the initial scroll position
if(now-this._initTimestamp>300||this._wasScrollingDown!==isScrollingDown){this._initScrollTop=scrollTop;this._initTimestamp=now;}if(scrollTop>=maxHeaderTop){// check if the header is allowed to snap
if(Math.abs(this._initScrollTop-scrollTop)>30||absDScrollTop>10){if(isScrollingDown&&scrollTop>=maxHeaderTop){top=maxHeaderTop;}else if(!isScrollingDown&&scrollTop>=this._dHeight){top=this.condenses&&!this.fixed?this._dHeight:0;}var scrollVelocity=dScrollTop/(now-this._lastTimestamp);this.style.transitionDuration=this._clamp((top-lastTop)/scrollVelocity,0,300)+'ms';}else{top=this._top;}}}if(this._dHeight===0){progress=scrollTop>0?1:0;}else{progress=top/this._dHeight;}if(!forceUpdate){this._lastScrollTop=scrollTop;this._top=top;this._wasScrollingDown=isScrollingDown;this._lastTimestamp=now;}if(forceUpdate||progress!==this._progress||lastTop!==top||scrollTop===0){this._progress=progress;this._runEffects(progress,top);this._transformHeader(top);}},/**
   * Returns true if the current header is allowed to move as the user scrolls.
   *
   * @return {boolean}
   */_mayMove:function _mayMove(){return this.condenses||!this.fixed;},/**
   * Returns true if the current header will condense based on the size of the
   * header and the `consenses` property.
   *
   * @return {boolean}
   */willCondense:function willCondense(){return this._dHeight>0&&this.condenses;},/**
   * Returns true if the current element is on the screen.
   * That is, visible in the current viewport.
   *
   * @method isOnScreen
   * @return {boolean}
   */isOnScreen:function isOnScreen(){return this._height!==0&&this._top<this._height;},/**
   * Returns true if there's content below the current element.
   *
   * @method isContentBelow
   * @return {boolean}
   */isContentBelow:function isContentBelow(){return this._top===0?this._clampedScrollTop>0:this._clampedScrollTop-this._maxHeaderTop>=0;},/**
   * Transforms the header.
   *
   * @param {number} y
   */_transformHeader:function _transformHeader(y){this.translate3d(0,-y+'px',0);if(this._stickyEl){this.translate3d(0,this.condenses&&y>=this._stickyElTop?Math.min(y,this._dHeight)-this._stickyElTop+'px':0,0,this._stickyEl);}},_clamp:function _clamp(v,min,max){return Math.min(max,Math.max(min,v));},_ensureBgContainers:function _ensureBgContainers(){if(!this._bgContainer){this._bgContainer=document.createElement('div');this._bgContainer.id='background';this._bgRear=document.createElement('div');this._bgRear.id='backgroundRearLayer';this._bgContainer.appendChild(this._bgRear);this._bgFront=document.createElement('div');this._bgFront.id='backgroundFrontLayer';this._bgContainer.appendChild(this._bgFront);dom(this.root).insertBefore(this._bgContainer,this.$.contentContainer);}},_getDOMRef:function _getDOMRef(id){switch(id){case'backgroundFrontLayer':this._ensureBgContainers();return this._bgFront;case'backgroundRearLayer':this._ensureBgContainers();return this._bgRear;case'background':this._ensureBgContainers();return this._bgContainer;case'mainTitle':return dom(this).querySelector('[main-title]');case'condensedTitle':return dom(this).querySelector('[condensed-title]');}return null;},/**
   * Returns an object containing the progress value of the scroll effects
   * and the top position of the header.
   *
   * @method getScrollState
   * @return {Object}
   */getScrollState:function getScrollState(){return{progress:this._progress,top:this._top};}});Polymer$1({_template:html(_templateObject6_7f57aa202bd911e99390d3b784e8dc1a()),is:'app-toolbar'});Polymer$1({is:'iron-location',properties:{/**
     * The pathname component of the URL.
     */path:{type:String,notify:true,value:function value(){return window.decodeURIComponent(window.location.pathname);}},/**
     * The query string portion of the URL.
     */query:{type:String,notify:true,value:function value(){return window.location.search.slice(1);}},/**
     * The hash component of the URL.
     */hash:{type:String,notify:true,value:function value(){return window.decodeURIComponent(window.location.hash.slice(1));}},/**
     * If the user was on a URL for less than `dwellTime` milliseconds, it
     * won't be added to the browser's history, but instead will be replaced
     * by the next entry.
     *
     * This is to prevent large numbers of entries from clogging up the user's
     * browser history. Disable by setting to a negative number.
     */dwellTime:{type:Number,value:2000},/**
     * A regexp that defines the set of URLs that should be considered part
     * of this web app.
     *
     * Clicking on a link that matches this regex won't result in a full page
     * navigation, but will instead just update the URL state in place.
     *
     * This regexp is given everything after the origin in an absolute
     * URL. So to match just URLs that start with /search/ do:
     *     url-space-regex="^/search/"
     *
     * @type {string|RegExp}
     */urlSpaceRegex:{type:String,value:''},/**
     * A flag that specifies whether the spaces in query that would normally be
     * encoded as %20 should be encoded as +.
     *
     * Given an example text "hello world", it is encoded in query as
     * - "hello%20world" without the parameter
     * - "hello+world" with the parameter
     */encodeSpaceAsPlusInQuery:{type:Boolean,value:false},/**
     * urlSpaceRegex, but coerced into a regexp.
     *
     * @type {RegExp}
     */_urlSpaceRegExp:{computed:'_makeRegExp(urlSpaceRegex)'},_lastChangedAt:{type:Number},_initialized:{type:Boolean,value:false}},hostAttributes:{hidden:true},observers:['_updateUrl(path, query, hash)'],created:function created(){this.__location=window.location;},attached:function attached(){this.listen(window,'hashchange','_hashChanged');this.listen(window,'location-changed','_urlChanged');this.listen(window,'popstate','_urlChanged');this.listen(/** @type {!HTMLBodyElement} */document.body,'click','_globalOnClick');// Give a 200ms grace period to make initial redirects without any
// additions to the user's history.
this._lastChangedAt=window.performance.now()-(this.dwellTime-200);this._initialized=true;this._urlChanged();},detached:function detached(){this.unlisten(window,'hashchange','_hashChanged');this.unlisten(window,'location-changed','_urlChanged');this.unlisten(window,'popstate','_urlChanged');this.unlisten(/** @type {!HTMLBodyElement} */document.body,'click','_globalOnClick');this._initialized=false;},_hashChanged:function _hashChanged(){this.hash=window.decodeURIComponent(this.__location.hash.substring(1));},_urlChanged:function _urlChanged(){// We want to extract all info out of the updated URL before we
// try to write anything back into it.
//
// i.e. without _dontUpdateUrl we'd overwrite the new path with the old
// one when we set this.hash. Likewise for query.
this._dontUpdateUrl=true;this._hashChanged();this.path=window.decodeURIComponent(this.__location.pathname);this.query=this.__location.search.substring(1);this._dontUpdateUrl=false;this._updateUrl();},_getUrl:function _getUrl(){var partiallyEncodedPath=window.encodeURI(this.path).replace(/\#/g,'%23').replace(/\?/g,'%3F');var partiallyEncodedQuery='';if(this.query){partiallyEncodedQuery='?'+this.query.replace(/\#/g,'%23');if(this.encodeSpaceAsPlusInQuery){partiallyEncodedQuery=partiallyEncodedQuery.replace(/\+/g,'%2B').replace(/ /g,'+').replace(/%20/g,'+');}else{// required for edge
partiallyEncodedQuery=partiallyEncodedQuery.replace(/\+/g,'%2B').replace(/ /g,'%20');}}var partiallyEncodedHash='';if(this.hash){partiallyEncodedHash='#'+window.encodeURI(this.hash);}return partiallyEncodedPath+partiallyEncodedQuery+partiallyEncodedHash;},_updateUrl:function _updateUrl(){if(this._dontUpdateUrl||!this._initialized){return;}if(this.path===window.decodeURIComponent(this.__location.pathname)&&this.query===this.__location.search.substring(1)&&this.hash===window.decodeURIComponent(this.__location.hash.substring(1))){// Nothing to do, the current URL is a representation of our properties.
return;}var newUrl=this._getUrl();// Need to use a full URL in case the containing page has a base URI.
var fullNewUrl=new URL(newUrl,this.__location.protocol+'//'+this.__location.host).href;var now=window.performance.now();var shouldReplace=this._lastChangedAt+this.dwellTime>now;this._lastChangedAt=now;if(shouldReplace){window.history.replaceState({},'',fullNewUrl);}else{window.history.pushState({},'',fullNewUrl);}this.fire('location-changed',{},{node:window});},/**
   * A necessary evil so that links work as expected. Does its best to
   * bail out early if possible.
   *
   * @param {MouseEvent} event .
   */_globalOnClick:function _globalOnClick(event){// If another event handler has stopped this event then there's nothing
// for us to do. This can happen e.g. when there are multiple
// iron-location elements in a page.
if(event.defaultPrevented){return;}var href=this._getSameOriginLinkHref(event);if(!href){return;}event.preventDefault();// If the navigation is to the current page we shouldn't add a history
// entry or fire a change event.
if(href===this.__location.href){return;}window.history.pushState({},'',href);this.fire('location-changed',{},{node:window});},/**
   * Returns the absolute URL of the link (if any) that this click event
   * is clicking on, if we can and should override the resulting full
   * page navigation. Returns null otherwise.
   *
   * @param {MouseEvent} event .
   * @return {string?} .
   */_getSameOriginLinkHref:function _getSameOriginLinkHref(event){// We only care about left-clicks.
if(event.button!==0){return null;}// We don't want modified clicks, where the intent is to open the page
// in a new tab.
if(event.metaKey||event.ctrlKey){return null;}var eventPath=dom(event).path;var anchor=null;for(var i=0;i<eventPath.length;i++){var element=eventPath[i];if(element.tagName==='A'&&element.href){anchor=element;break;}}// If there's no link there's nothing to do.
if(!anchor){return null;}// Target blank is a new tab, don't intercept.
if(anchor.target==='_blank'){return null;}// If the link is for an existing parent frame, don't intercept.
if((anchor.target==='_top'||anchor.target==='_parent')&&window.top!==window){return null;}// If the link is a download, don't intercept.
if(anchor.download){return null;}var href=anchor.href;// It only makes sense for us to intercept same-origin navigations.
// pushState/replaceState don't work with cross-origin links.
var url;if(document.baseURI!=null){url=new URL(href,/** @type {string} */document.baseURI);}else{url=new URL(href);}var origin;// IE Polyfill
if(this.__location.origin){origin=this.__location.origin;}else{origin=this.__location.protocol+'//'+this.__location.host;}var urlOrigin;if(url.origin){urlOrigin=url.origin;}else{// IE always adds port number on HTTP and HTTPS on <a>.host but not on
// window.location.host
var urlHost=url.host;var urlPort=url.port;var urlProtocol=url.protocol;var isExtraneousHTTPS=urlProtocol==='https:'&&urlPort==='443';var isExtraneousHTTP=urlProtocol==='http:'&&urlPort==='80';if(isExtraneousHTTPS||isExtraneousHTTP){urlHost=url.hostname;}urlOrigin=urlProtocol+'//'+urlHost;}if(urlOrigin!==origin){return null;}var normalizedHref=url.pathname+url.search+url.hash;// pathname should start with '/', but may not if `new URL` is not supported
if(normalizedHref[0]!=='/'){normalizedHref='/'+normalizedHref;}// If we've been configured not to handle this url... don't handle it!
if(this._urlSpaceRegExp&&!this._urlSpaceRegExp.test(normalizedHref)){return null;}// Need to use a full URL in case the containing page has a base URI.
var fullNormalizedHref=new URL(normalizedHref,this.__location.href).href;return fullNormalizedHref;},_makeRegExp:function _makeRegExp(urlSpaceRegex){return RegExp(urlSpaceRegex);}});Polymer$1({is:'iron-query-params',properties:{/**
     * @type{string|undefined}
     */paramsString:{type:String,notify:true,observer:'paramsStringChanged'},/**
     * @type{Object|undefined}
     */paramsObject:{type:Object,notify:true},_dontReact:{type:Boolean,value:false}},hostAttributes:{hidden:true},observers:['paramsObjectChanged(paramsObject.*)'],paramsStringChanged:function paramsStringChanged(){this._dontReact=true;this.paramsObject=this._decodeParams(this.paramsString);this._dontReact=false;},paramsObjectChanged:function paramsObjectChanged(){if(this._dontReact){return;}this.paramsString=this._encodeParams(this.paramsObject).replace(/%3F/g,'?').replace(/%2F/g,'/').replace(/'/g,'%27');},_encodeParams:function _encodeParams(params){var encodedParams=[];for(var key in params){var value=params[key];if(value===''){encodedParams.push(encodeURIComponent(key));}else if(value){encodedParams.push(encodeURIComponent(key)+'='+encodeURIComponent(value.toString()));}}return encodedParams.join('&');},_decodeParams:function _decodeParams(paramString){var params={};// Work around a bug in decodeURIComponent where + is not
// converted to spaces:
paramString=(paramString||'').replace(/\+/g,'%20');var paramList=paramString.split('&');for(var i=0;i<paramList.length;i++){var param=paramList[i].split('=');if(param[0]){params[decodeURIComponent(param[0])]=decodeURIComponent(param[1]||'');}}return params;}});var AppRouteConverterBehavior={properties:{/**
     * A model representing the deserialized path through the route tree, as
     * well as the current queryParams.
     *
     * A route object is the kernel of the routing system. It is intended to
     * be fed into consuming elements such as `app-route`.
     *
     * @type {?Object|undefined}
     */route:{type:Object,notify:true},/**
     * A set of key/value pairs that are universally accessible to branches of
     * the route tree.
     *
     * @type {?Object}
     */queryParams:{type:Object,notify:true},/**
     * The serialized path through the route tree. This corresponds to the
     * `window.location.pathname` value, and will update to reflect changes
     * to that value.
     */path:{type:String,notify:true}},observers:['_locationChanged(path, queryParams)','_routeChanged(route.prefix, route.path)','_routeQueryParamsChanged(route.__queryParams)'],created:function created(){this.linkPaths('route.__queryParams','queryParams');this.linkPaths('queryParams','route.__queryParams');},/**
   * Handler called when the path or queryParams change.
   */_locationChanged:function _locationChanged(){if(this.route&&this.route.path===this.path&&this.queryParams===this.route.__queryParams){return;}this.route={prefix:'',path:this.path,__queryParams:this.queryParams};},/**
   * Handler called when the route prefix and route path change.
   */_routeChanged:function _routeChanged(){if(!this.route){return;}this.path=this.route.prefix+this.route.path;},/**
   * Handler called when the route queryParams change.
   *
   * @param  {Object} queryParams A set of key/value pairs that are
   * universally accessible to branches of the route tree.
   */_routeQueryParamsChanged:function _routeQueryParamsChanged(queryParams){if(!this.route){return;}this.queryParams=queryParams;}};_exports.AppRouteConverterBehavior=AppRouteConverterBehavior;var appRouteConverterBehavior={AppRouteConverterBehavior:AppRouteConverterBehavior};_exports.$appRouteConverterBehavior=appRouteConverterBehavior;Polymer$1({_template:html(_templateObject7_7f57aa202bd911e99390d3b784e8dc1a()),is:'app-location',properties:{/**
     * A model representing the deserialized path through the route tree, as
     * well as the current queryParams.
     */route:{type:Object,notify:true},/**
     * In many scenarios, it is convenient to treat the `hash` as a stand-in
     * alternative to the `path`. For example, if deploying an app to a static
     * web server (e.g., Github Pages) - where one does not have control over
     * server-side routing - it is usually a better experience to use the hash
     * to represent paths through one's app.
     *
     * When this property is set to true, the `hash` will be used in place of
      * the `path` for generating a `route`.
     */useHashAsPath:{type:Boolean,value:false},/**
     * A regexp that defines the set of URLs that should be considered part
     * of this web app.
     *
     * Clicking on a link that matches this regex won't result in a full page
     * navigation, but will instead just update the URL state in place.
     *
     * This regexp is given everything after the origin in an absolute
     * URL. So to match just URLs that start with /search/ do:
     *     url-space-regex="^/search/"
     *
     * @type {string|RegExp}
     */urlSpaceRegex:{type:String,notify:true},/**
     * A set of key/value pairs that are universally accessible to branches
     * of the route tree.
     */__queryParams:{type:Object},/**
     * The pathname component of the current URL.
     */__path:{type:String},/**
     * The query string portion of the current URL.
     */__query:{type:String},/**
     * The hash portion of the current URL.
     */__hash:{type:String},/**
     * The route path, which will be either the hash or the path, depending
     * on useHashAsPath.
     */path:{type:String,observer:'__onPathChanged'},/**
     * Whether or not the ready function has been called.
     */_isReady:{type:Boolean},/**
     * If the user was on a URL for less than `dwellTime` milliseconds, it
     * won't be added to the browser's history, but instead will be
     * replaced by the next entry.
     *
     * This is to prevent large numbers of entries from clogging up the
     * user's browser history. Disable by setting to a negative number.
     *
     * See `iron-location` for more information.
     */dwellTime:{type:Number}},behaviors:[AppRouteConverterBehavior],observers:['__computeRoutePath(useHashAsPath, __hash, __path)'],ready:function ready(){this._isReady=true;},__computeRoutePath:function __computeRoutePath(){this.path=this.useHashAsPath?this.__hash:this.__path;},__onPathChanged:function __onPathChanged(){if(!this._isReady){return;}if(this.useHashAsPath){this.__hash=this.path;}else{this.__path=this.path;}}});Polymer$1({is:'app-route',properties:{/**
     * The URL component managed by this element.
     */route:{type:Object,notify:true},/**
     * The pattern of slash-separated segments to match `route.path` against.
     *
     * For example the pattern "/foo" will match "/foo" or "/foo/bar"
     * but not "/foobar".
     *
     * Path segments like `/:named` are mapped to properties on the `data`
     * object.
     */pattern:{type:String},/**
     * The parameterized values that are extracted from the route as
     * described by `pattern`.
     */data:{type:Object,value:function value(){return{};},notify:true},/**
     * Auto activate route if path empty
     */autoActivate:{type:Boolean,value:false},_queryParamsUpdating:{type:Boolean,value:false},/**
     * @type {?Object}
     */queryParams:{type:Object,value:function value(){return{};},notify:true},/**
     * The part of `route.path` NOT consumed by `pattern`.
     */tail:{type:Object,value:function value(){return{path:null,prefix:null,__queryParams:null};},notify:true},/**
     * Whether the current route is active. True if `route.path` matches the
     * `pattern`, false otherwise.
     */active:{type:Boolean,notify:true,readOnly:true},/**
     * @type {?string}
     */_matched:{type:String,value:''}},observers:['__tryToMatch(route.path, pattern)','__updatePathOnDataChange(data.*)','__tailPathChanged(tail.path)','__routeQueryParamsChanged(route.__queryParams)','__tailQueryParamsChanged(tail.__queryParams)','__queryParamsChanged(queryParams.*)'],created:function created(){this.linkPaths('route.__queryParams','tail.__queryParams');this.linkPaths('tail.__queryParams','route.__queryParams');},/**
   * Deal with the query params object being assigned to wholesale.
   */__routeQueryParamsChanged:function __routeQueryParamsChanged(queryParams){if(queryParams&&this.tail){if(this.tail.__queryParams!==queryParams){this.set('tail.__queryParams',queryParams);}if(!this.active||this._queryParamsUpdating){return;}// Copy queryParams and track whether there are any differences compared
// to the existing query params.
var copyOfQueryParams={};var anythingChanged=false;for(var key in queryParams){copyOfQueryParams[key]=queryParams[key];if(anythingChanged||!this.queryParams||queryParams[key]!==this.queryParams[key]){anythingChanged=true;}}// Need to check whether any keys were deleted
for(var key in this.queryParams){if(anythingChanged||!(key in queryParams)){anythingChanged=true;break;}}if(!anythingChanged){return;}this._queryParamsUpdating=true;this.set('queryParams',copyOfQueryParams);this._queryParamsUpdating=false;}},__tailQueryParamsChanged:function __tailQueryParamsChanged(queryParams){if(queryParams&&this.route&&this.route.__queryParams!=queryParams){this.set('route.__queryParams',queryParams);}},__queryParamsChanged:function __queryParamsChanged(changes){if(!this.active||this._queryParamsUpdating){return;}this.set('route.__'+changes.path,changes.value);},__resetProperties:function __resetProperties(){this._setActive(false);this._matched=null;},__tryToMatch:function __tryToMatch(){if(!this.route){return;}var path=this.route.path;var pattern=this.pattern;if(this.autoActivate&&path===''){path='/';}if(!pattern){return;}if(!path){this.__resetProperties();return;}var remainingPieces=path.split('/');var patternPieces=pattern.split('/');var matched=[];var namedMatches={};for(var i=0;i<patternPieces.length;i++){var patternPiece=patternPieces[i];if(!patternPiece&&patternPiece!==''){break;}var pathPiece=remainingPieces.shift();// We don't match this path.
if(!pathPiece&&pathPiece!==''){this.__resetProperties();return;}matched.push(pathPiece);if(patternPiece.charAt(0)==':'){namedMatches[patternPiece.slice(1)]=pathPiece;}else if(patternPiece!==pathPiece){this.__resetProperties();return;}}this._matched=matched.join('/');// Properties that must be updated atomically.
var propertyUpdates={};// this.active
if(!this.active){propertyUpdates.active=true;}// this.tail
var tailPrefix=this.route.prefix+this._matched;var tailPath=remainingPieces.join('/');if(remainingPieces.length>0){tailPath='/'+tailPath;}if(!this.tail||this.tail.prefix!==tailPrefix||this.tail.path!==tailPath){propertyUpdates.tail={prefix:tailPrefix,path:tailPath,__queryParams:this.route.__queryParams};}// this.data
propertyUpdates.data=namedMatches;this._dataInUrl={};for(var key in namedMatches){this._dataInUrl[key]=namedMatches[key];}if(this.setProperties){// atomic update
this.setProperties(propertyUpdates,true);}else{this.__setMulti(propertyUpdates);}},__tailPathChanged:function __tailPathChanged(path){if(!this.active){return;}var tailPath=path;var newPath=this._matched;if(tailPath){if(tailPath.charAt(0)!=='/'){tailPath='/'+tailPath;}newPath+=tailPath;}this.set('route.path',newPath);},__updatePathOnDataChange:function __updatePathOnDataChange(){if(!this.route||!this.active){return;}var newPath=this.__getLink({});var oldPath=this.__getLink(this._dataInUrl);if(newPath===oldPath){return;}this.set('route.path',newPath);},__getLink:function __getLink(overrideValues){var values={tail:null};for(var key in this.data){values[key]=this.data[key];}for(var key in overrideValues){values[key]=overrideValues[key];}var patternPieces=this.pattern.split('/');var interp=patternPieces.map(function(value){if(value[0]==':'){value=values[value.slice(1)];}return value;},this);if(values.tail&&values.tail.path){if(interp.length>0&&values.tail.path.charAt(0)==='/'){interp.push(values.tail.path.slice(1));}else{interp.push(values.tail.path);}}return interp.join('/');},__setMulti:function __setMulti(setObj){// HACK(rictic): skirting around 1.0's lack of a setMulti by poking at
//     internal data structures. I would not advise that you copy this
//     example.
//
//     In the future this will be a feature of Polymer itself.
//     See: https://github.com/Polymer/polymer/issues/3640
//
//     Hacking around with private methods like this is juggling footguns,
//     and is likely to have unexpected and unsupported rough edges.
//
//     Be ye so warned.
for(var property in setObj){this._propertySetter(property,setObj[property]);}// notify in a specific order
if(setObj.data!==undefined){this._pathEffector('data',this.data);this._notifyChange('data');}if(setObj.active!==undefined){this._pathEffector('active',this.active);this._notifyChange('active');}if(setObj.tail!==undefined){this._pathEffector('tail',this.tail);this._notifyChange('tail');}}});var KEY_IDENTIFIER={'U+0008':'backspace','U+0009':'tab','U+001B':'esc','U+0020':'space','U+007F':'del'};/**
    * Special table for KeyboardEvent.keyCode.
    * KeyboardEvent.keyIdentifier is better, and KeyBoardEvent.key is even better
    * than that.
    *
    * Values from:
    * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent.keyCode#Value_of_keyCode
    */var KEY_CODE={8:'backspace',9:'tab',13:'enter',27:'esc',33:'pageup',34:'pagedown',35:'end',36:'home',32:'space',37:'left',38:'up',39:'right',40:'down',46:'del',106:'*'};/**
    * MODIFIER_KEYS maps the short name for modifier keys used in a key
    * combo string to the property name that references those same keys
    * in a KeyboardEvent instance.
    */var MODIFIER_KEYS={'shift':'shiftKey','ctrl':'ctrlKey','alt':'altKey','meta':'metaKey'};/**
    * KeyboardEvent.key is mostly represented by printable character made by
    * the keyboard, with unprintable keys labeled nicely.
    *
    * However, on OS X, Alt+char can make a Unicode character that follows an
    * Apple-specific mapping. In this case, we fall back to .keyCode.
    */var KEY_CHAR=/[a-z0-9*]/;/**
                             * Matches a keyIdentifier string.
                             */var IDENT_CHAR=/U\+/;/**
                         * Matches arrow keys in Gecko 27.0+
                         */var ARROW_KEY=/^arrow/;/**
                           * Matches space keys everywhere (notably including IE10's exceptional name
                           * `spacebar`).
                           */var SPACE_KEY=/^space(bar)?/;/**
                                 * Matches ESC key.
                                 *
                                 * Value from: http://w3c.github.io/uievents-key/#key-Escape
                                 */var ESC_KEY=/^escape$/;/**
                           * Transforms the key.
                           * @param {string} key The KeyBoardEvent.key
                           * @param {Boolean} [noSpecialChars] Limits the transformation to
                           * alpha-numeric characters.
                           */function transformKey(key,noSpecialChars){var validKey='';if(key){var lKey=key.toLowerCase();if(lKey===' '||SPACE_KEY.test(lKey)){validKey='space';}else if(ESC_KEY.test(lKey)){validKey='esc';}else if(lKey.length==1){if(!noSpecialChars||KEY_CHAR.test(lKey)){validKey=lKey;}}else if(ARROW_KEY.test(lKey)){validKey=lKey.replace('arrow','');}else if(lKey=='multiply'){// numpad '*' can map to Multiply on IE/Windows
validKey='*';}else{validKey=lKey;}}return validKey;}function transformKeyIdentifier(keyIdent){var validKey='';if(keyIdent){if(keyIdent in KEY_IDENTIFIER){validKey=KEY_IDENTIFIER[keyIdent];}else if(IDENT_CHAR.test(keyIdent)){keyIdent=parseInt(keyIdent.replace('U+','0x'),16);validKey=String.fromCharCode(keyIdent).toLowerCase();}else{validKey=keyIdent.toLowerCase();}}return validKey;}function transformKeyCode(keyCode){var validKey='';if(Number(keyCode)){if(keyCode>=65&&keyCode<=90){// ascii a-z
// lowercase is 32 offset from uppercase
validKey=String.fromCharCode(32+keyCode);}else if(keyCode>=112&&keyCode<=123){// function keys f1-f12
validKey='f'+(keyCode-112+1);}else if(keyCode>=48&&keyCode<=57){// top 0-9 keys
validKey=String(keyCode-48);}else if(keyCode>=96&&keyCode<=105){// num pad 0-9
validKey=String(keyCode-96);}else{validKey=KEY_CODE[keyCode];}}return validKey;}/**
   * Calculates the normalized key for a KeyboardEvent.
   * @param {KeyboardEvent} keyEvent
   * @param {Boolean} [noSpecialChars] Set to true to limit keyEvent.key
   * transformation to alpha-numeric chars. This is useful with key
   * combinations like shift + 2, which on FF for MacOS produces
   * keyEvent.key = @
   * To get 2 returned, set noSpecialChars = true
   * To get @ returned, set noSpecialChars = false
   */function normalizedKeyForEvent(keyEvent,noSpecialChars){// Fall back from .key, to .detail.key for artifical keyboard events,
// and then to deprecated .keyIdentifier and .keyCode.
if(keyEvent.key){return transformKey(keyEvent.key,noSpecialChars);}if(keyEvent.detail&&keyEvent.detail.key){return transformKey(keyEvent.detail.key,noSpecialChars);}return transformKeyIdentifier(keyEvent.keyIdentifier)||transformKeyCode(keyEvent.keyCode)||'';}function keyComboMatchesEvent(keyCombo,event){// For combos with modifiers we support only alpha-numeric keys
var keyEvent=normalizedKeyForEvent(event,keyCombo.hasModifiers);return keyEvent===keyCombo.key&&(!keyCombo.hasModifiers||!!event.shiftKey===!!keyCombo.shiftKey&&!!event.ctrlKey===!!keyCombo.ctrlKey&&!!event.altKey===!!keyCombo.altKey&&!!event.metaKey===!!keyCombo.metaKey);}function parseKeyComboString(keyComboString){if(keyComboString.length===1){return{combo:keyComboString,key:keyComboString,event:'keydown'};}return keyComboString.split('+').reduce(function(parsedKeyCombo,keyComboPart){var eventParts=keyComboPart.split(':');var keyName=eventParts[0];var event=eventParts[1];if(keyName in MODIFIER_KEYS){parsedKeyCombo[MODIFIER_KEYS[keyName]]=true;parsedKeyCombo.hasModifiers=true;}else{parsedKeyCombo.key=keyName;parsedKeyCombo.event=event||'keydown';}return parsedKeyCombo;},{combo:keyComboString.split(':').shift()});}function parseEventString(eventString){return eventString.trim().split(' ').map(function(keyComboString){return parseKeyComboString(keyComboString);});}/**
   * `Polymer.IronA11yKeysBehavior` provides a normalized interface for processing
   * keyboard commands that pertain to [WAI-ARIA best
   * practices](http://www.w3.org/TR/wai-aria-practices/#kbd_general_binding). The
   * element takes care of browser differences with respect to Keyboard events and
   * uses an expressive syntax to filter key presses.
   *
   * Use the `keyBindings` prototype property to express what combination of keys
   * will trigger the callback. A key binding has the format
   * `"KEY+MODIFIER:EVENT": "callback"` (`"KEY": "callback"` or
   * `"KEY:EVENT": "callback"` are valid as well). Some examples:
   *
   *      keyBindings: {
   *        'space': '_onKeydown', // same as 'space:keydown'
   *        'shift+tab': '_onKeydown',
   *        'enter:keypress': '_onKeypress',
   *        'esc:keyup': '_onKeyup'
   *      }
   *
   * The callback will receive with an event containing the following information
   * in `event.detail`:
   *
   *      _onKeydown: function(event) {
   *        console.log(event.detail.combo); // KEY+MODIFIER, e.g. "shift+tab"
   *        console.log(event.detail.key); // KEY only, e.g. "tab"
   *        console.log(event.detail.event); // EVENT, e.g. "keydown"
   *        console.log(event.detail.keyboardEvent); // the original KeyboardEvent
   *      }
   *
   * Use the `keyEventTarget` attribute to set up event handlers on a specific
   * node.
   *
   * See the [demo source
   * code](https://github.com/PolymerElements/iron-a11y-keys-behavior/blob/master/demo/x-key-aware.html)
   * for an example.
   *
   * @demo demo/index.html
   * @polymerBehavior
   */var IronA11yKeysBehavior={properties:{/**
     * The EventTarget that will be firing relevant KeyboardEvents. Set it to
     * `null` to disable the listeners.
     * @type {?EventTarget}
     */keyEventTarget:{type:Object,value:function value(){return this;}},/**
     * If true, this property will cause the implementing element to
     * automatically stop propagation on any handled KeyboardEvents.
     */stopKeyboardEventPropagation:{type:Boolean,value:false},_boundKeyHandlers:{type:Array,value:function value(){return[];}},// We use this due to a limitation in IE10 where instances will have
// own properties of everything on the "prototype".
_imperativeKeyBindings:{type:Object,value:function value(){return{};}}},observers:['_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)'],/**
   * To be used to express what combination of keys  will trigger the relative
   * callback. e.g. `keyBindings: { 'esc': '_onEscPressed'}`
   * @type {!Object}
   */keyBindings:{},registered:function registered(){this._prepKeyBindings();},attached:function attached(){this._listenKeyEventListeners();},detached:function detached(){this._unlistenKeyEventListeners();},/**
   * Can be used to imperatively add a key binding to the implementing
   * element. This is the imperative equivalent of declaring a keybinding
   * in the `keyBindings` prototype property.
   *
   * @param {string} eventString
   * @param {string} handlerName
   */addOwnKeyBinding:function addOwnKeyBinding(eventString,handlerName){this._imperativeKeyBindings[eventString]=handlerName;this._prepKeyBindings();this._resetKeyEventListeners();},/**
   * When called, will remove all imperatively-added key bindings.
   */removeOwnKeyBindings:function removeOwnKeyBindings(){this._imperativeKeyBindings={};this._prepKeyBindings();this._resetKeyEventListeners();},/**
   * Returns true if a keyboard event matches `eventString`.
   *
   * @param {KeyboardEvent} event
   * @param {string} eventString
   * @return {boolean}
   */keyboardEventMatchesKeys:function keyboardEventMatchesKeys(event,eventString){var keyCombos=parseEventString(eventString);for(var i=0;i<keyCombos.length;++i){if(keyComboMatchesEvent(keyCombos[i],event)){return true;}}return false;},_collectKeyBindings:function _collectKeyBindings(){var keyBindings=this.behaviors.map(function(behavior){return behavior.keyBindings;});if(keyBindings.indexOf(this.keyBindings)===-1){keyBindings.push(this.keyBindings);}return keyBindings;},_prepKeyBindings:function _prepKeyBindings(){this._keyBindings={};this._collectKeyBindings().forEach(function(keyBindings){for(var eventString in keyBindings){this._addKeyBinding(eventString,keyBindings[eventString]);}},this);for(var eventString in this._imperativeKeyBindings){this._addKeyBinding(eventString,this._imperativeKeyBindings[eventString]);}// Give precedence to combos with modifiers to be checked first.
for(var eventName in this._keyBindings){this._keyBindings[eventName].sort(function(kb1,kb2){var b1=kb1[0].hasModifiers;var b2=kb2[0].hasModifiers;return b1===b2?0:b1?-1:1;});}},_addKeyBinding:function _addKeyBinding(eventString,handlerName){parseEventString(eventString).forEach(function(keyCombo){this._keyBindings[keyCombo.event]=this._keyBindings[keyCombo.event]||[];this._keyBindings[keyCombo.event].push([keyCombo,handlerName]);},this);},_resetKeyEventListeners:function _resetKeyEventListeners(){this._unlistenKeyEventListeners();if(this.isAttached){this._listenKeyEventListeners();}},_listenKeyEventListeners:function _listenKeyEventListeners(){if(!this.keyEventTarget){return;}Object.keys(this._keyBindings).forEach(function(eventName){var keyBindings=this._keyBindings[eventName];var boundKeyHandler=this._onKeyBindingEvent.bind(this,keyBindings);this._boundKeyHandlers.push([this.keyEventTarget,eventName,boundKeyHandler]);this.keyEventTarget.addEventListener(eventName,boundKeyHandler);},this);},_unlistenKeyEventListeners:function _unlistenKeyEventListeners(){var keyHandlerTuple;var keyEventTarget;var eventName;var boundKeyHandler;while(this._boundKeyHandlers.length){// My kingdom for block-scope binding and destructuring assignment..
keyHandlerTuple=this._boundKeyHandlers.pop();keyEventTarget=keyHandlerTuple[0];eventName=keyHandlerTuple[1];boundKeyHandler=keyHandlerTuple[2];keyEventTarget.removeEventListener(eventName,boundKeyHandler);}},_onKeyBindingEvent:function _onKeyBindingEvent(keyBindings,event){if(this.stopKeyboardEventPropagation){event.stopPropagation();}// if event has been already prevented, don't do anything
if(event.defaultPrevented){return;}for(var i=0;i<keyBindings.length;i++){var keyCombo=keyBindings[i][0];var handlerName=keyBindings[i][1];if(keyComboMatchesEvent(keyCombo,event)){this._triggerKeyHandler(keyCombo,handlerName,event);// exit the loop if eventDefault was prevented
if(event.defaultPrevented){return;}}}},_triggerKeyHandler:function _triggerKeyHandler(keyCombo,handlerName,keyboardEvent){var detail=Object.create(keyCombo);detail.keyboardEvent=keyboardEvent;var event=new CustomEvent(keyCombo.event,{detail:detail,cancelable:true});this[handlerName].call(this,event);if(event.defaultPrevented){keyboardEvent.preventDefault();}}};_exports.IronA11yKeysBehavior=IronA11yKeysBehavior;var ironA11yKeysBehavior={IronA11yKeysBehavior:IronA11yKeysBehavior};_exports.$ironA11yKeysBehavior=ironA11yKeysBehavior;var IronControlState={properties:{/**
     * If true, the element currently has focus.
     */focused:{type:Boolean,value:false,notify:true,readOnly:true,reflectToAttribute:true},/**
     * If true, the user cannot interact with this element.
     */disabled:{type:Boolean,value:false,notify:true,observer:'_disabledChanged',reflectToAttribute:true},/**
     * Value of the `tabindex` attribute before `disabled` was activated.
     * `null` means the attribute was not present.
     * @type {?string|undefined}
     */_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function value(){return this._focusBlurHandler.bind(this);}}},observers:['_changedControlState(focused, disabled)'],/**
   * @return {void}
   */ready:function ready(){this.addEventListener('focus',this._boundFocusBlurHandler,true);this.addEventListener('blur',this._boundFocusBlurHandler,true);},_focusBlurHandler:function _focusBlurHandler(event){// Polymer takes care of retargeting events.
this._setFocused(event.type==='focus');return;},_disabledChanged:function _disabledChanged(disabled,old){this.setAttribute('aria-disabled',disabled?'true':'false');this.style.pointerEvents=disabled?'none':'';if(disabled){// Read the `tabindex` attribute instead of the `tabIndex` property.
// The property returns `-1` if there is no `tabindex` attribute.
// This distinction is important when restoring the value because
// leaving `-1` hides shadow root children from the tab order.
this._oldTabIndex=this.getAttribute('tabindex');this._setFocused(false);this.tabIndex=-1;this.blur();}else if(this._oldTabIndex!==undefined){if(this._oldTabIndex===null){this.removeAttribute('tabindex');}else{this.setAttribute('tabindex',this._oldTabIndex);}}},_changedControlState:function _changedControlState(){// _controlStateChanged is abstract, follow-on behaviors may implement it
if(this._controlStateChanged){this._controlStateChanged();}}};_exports.IronControlState=IronControlState;var ironControlState={IronControlState:IronControlState};_exports.$ironControlState=ironControlState;var IronButtonStateImpl={properties:{/**
     * If true, the user is currently holding down the button.
     */pressed:{type:Boolean,readOnly:true,value:false,reflectToAttribute:true,observer:'_pressedChanged'},/**
     * If true, the button toggles the active state with each tap or press
     * of the spacebar.
     */toggles:{type:Boolean,value:false,reflectToAttribute:true},/**
     * If true, the button is a toggle and is currently in the active state.
     */active:{type:Boolean,value:false,notify:true,reflectToAttribute:true},/**
     * True if the element is currently being pressed by a "pointer," which
     * is loosely defined as mouse or touch input (but specifically excluding
     * keyboard input).
     */pointerDown:{type:Boolean,readOnly:true,value:false},/**
     * True if the input device that caused the element to receive focus
     * was a keyboard.
     */receivedFocusFromKeyboard:{type:Boolean,readOnly:true},/**
     * The aria attribute to be set if the button is a toggle and in the
     * active state.
     */ariaActiveAttribute:{type:String,value:'aria-pressed',observer:'_ariaActiveAttributeChanged'}},listeners:{down:'_downHandler',up:'_upHandler',tap:'_tapHandler'},observers:['_focusChanged(focused)','_activeChanged(active, ariaActiveAttribute)'],/**
   * @type {!Object}
   */keyBindings:{'enter:keydown':'_asyncClick','space:keydown':'_spaceKeyDownHandler','space:keyup':'_spaceKeyUpHandler'},_mouseEventRe:/^mouse/,_tapHandler:function _tapHandler(){if(this.toggles){// a tap is needed to toggle the active state
this._userActivate(!this.active);}else{this.active=false;}},_focusChanged:function _focusChanged(focused){this._detectKeyboardFocus(focused);if(!focused){this._setPressed(false);}},_detectKeyboardFocus:function _detectKeyboardFocus(focused){this._setReceivedFocusFromKeyboard(!this.pointerDown&&focused);},// to emulate native checkbox, (de-)activations from a user interaction fire
// 'change' events
_userActivate:function _userActivate(active){if(this.active!==active){this.active=active;this.fire('change');}},_downHandler:function _downHandler(event){this._setPointerDown(true);this._setPressed(true);this._setReceivedFocusFromKeyboard(false);},_upHandler:function _upHandler(){this._setPointerDown(false);this._setPressed(false);},/**
   * @param {!KeyboardEvent} event .
   */_spaceKeyDownHandler:function _spaceKeyDownHandler(event){var keyboardEvent=event.detail.keyboardEvent;var target=dom(keyboardEvent).localTarget;// Ignore the event if this is coming from a focused light child, since that
// element will deal with it.
if(this.isLightDescendant(/** @type {Node} */target))return;keyboardEvent.preventDefault();keyboardEvent.stopImmediatePropagation();this._setPressed(true);},/**
   * @param {!KeyboardEvent} event .
   */_spaceKeyUpHandler:function _spaceKeyUpHandler(event){var keyboardEvent=event.detail.keyboardEvent;var target=dom(keyboardEvent).localTarget;// Ignore the event if this is coming from a focused light child, since that
// element will deal with it.
if(this.isLightDescendant(/** @type {Node} */target))return;if(this.pressed){this._asyncClick();}this._setPressed(false);},// trigger click asynchronously, the asynchrony is useful to allow one
// event handler to unwind before triggering another event
_asyncClick:function _asyncClick(){this.async(function(){this.click();},1);},// any of these changes are considered a change to button state
_pressedChanged:function _pressedChanged(pressed){this._changedButtonState();},_ariaActiveAttributeChanged:function _ariaActiveAttributeChanged(value,oldValue){if(oldValue&&oldValue!=value&&this.hasAttribute(oldValue)){this.removeAttribute(oldValue);}},_activeChanged:function _activeChanged(active,ariaActiveAttribute){if(this.toggles){this.setAttribute(this.ariaActiveAttribute,active?'true':'false');}else{this.removeAttribute(this.ariaActiveAttribute);}this._changedButtonState();},_controlStateChanged:function _controlStateChanged(){if(this.disabled){this._setPressed(false);}else{this._changedButtonState();}},// provide hook for follow-on behaviors to react to button-state
_changedButtonState:function _changedButtonState(){if(this._buttonStateChanged){this._buttonStateChanged();// abstract
}}};/** @polymerBehavior */_exports.IronButtonStateImpl=IronButtonStateImpl;var IronButtonState=[IronA11yKeysBehavior,IronButtonStateImpl];_exports.IronButtonState=IronButtonState;var ironButtonState={IronButtonStateImpl:IronButtonStateImpl,IronButtonState:IronButtonState};_exports.$ironButtonState=ironButtonState;var IronMeta=/*#__PURE__*/function(){/**
   * @param {{
   *   type: (string|null|undefined),
   *   key: (string|null|undefined),
   *   value: *,
   * }=} options
   */function IronMeta(options){babelHelpers.classCallCheck(this,IronMeta);IronMeta[' '](options);/** @type {string} */this.type=options&&options.type||'default';/** @type {string|null|undefined} */this.key=options&&options.key;if(options&&'value'in options){/** @type {*} */this.value=options.value;}}/** @return {*} */babelHelpers.createClass(IronMeta,[{key:"byKey",/**
     * @param {string} key
     * @return {*}
     */value:function byKey(key){this.key=key;return this.value;}},{key:"value",get:function get(){var type=this.type;var key=this.key;if(type&&key){return IronMeta.types[type]&&IronMeta.types[type][key];}}/** @param {*} value */,set:function set(value){var type=this.type;var key=this.key;if(type&&key){type=IronMeta.types[type]=IronMeta.types[type]||{};if(value==null){delete type[key];}else{type[key]=value;}}}/** @return {!Array<*>} */},{key:"list",get:function get(){var type=this.type;if(type){var items=IronMeta.types[this.type];if(!items){return[];}return Object.keys(items).map(function(key){return metaDatas[this.type][key];},this);}}}]);return IronMeta;}();// This function is used to convince Closure not to remove constructor calls
// for instances that are not held anywhere. For example, when
// `new IronMeta({...})` is used only for the side effect of adding a value.
_exports.IronMeta=IronMeta;IronMeta[' ']=function(){};IronMeta.types={};var metaDatas=IronMeta.types;/**
                                `iron-meta` is a generic element you can use for sharing information across the
                                DOM tree. It uses [monostate pattern](http://c2.com/cgi/wiki?MonostatePattern)
                                such that any instance of iron-meta has access to the shared information. You
                                can use `iron-meta` to share whatever you want (or create an extension [like
                                x-meta] for enhancements).
                                
                                The `iron-meta` instances containing your actual data can be loaded in an
                                import, or constructed in any way you see fit. The only requirement is that you
                                create them before you try to access them.
                                
                                Examples:
                                
                                If I create an instance like this:
                                
                                    <iron-meta key="info" value="foo/bar"></iron-meta>
                                
                                Note that value="foo/bar" is the metadata I've defined. I could define more
                                attributes or use child nodes to define additional metadata.
                                
                                Now I can access that element (and it's metadata) from any iron-meta instance
                                via the byKey method, e.g.
                                
                                    meta.byKey('info');
                                
                                Pure imperative form would be like:
                                
                                    document.createElement('iron-meta').byKey('info');
                                
                                Or, in a Polymer element, you can include a meta in your template:
                                
                                    <iron-meta id="meta"></iron-meta>
                                    ...
                                    this.$.meta.byKey('info');
                                
                                @group Iron Elements
                                @demo demo/index.html
                                @element iron-meta
                                */Polymer$1({is:'iron-meta',properties:{/**
     * The type of meta-data.  All meta-data of the same type is stored
     * together.
     * @type {string}
     */type:{type:String,value:'default'},/**
     * The key used to store `value` under the `type` namespace.
     * @type {?string}
     */key:{type:String},/**
     * The meta-data to store or retrieve.
     * @type {*}
     */value:{type:String,notify:true},/**
     * If true, `value` is set to the iron-meta instance itself.
     */self:{type:Boolean,observer:'_selfChanged'},__meta:{type:Boolean,computed:'__computeMeta(type, key, value)'}},hostAttributes:{hidden:true},__computeMeta:function __computeMeta(type,key,value){var meta=new IronMeta({type:type,key:key});if(value!==undefined&&value!==meta.value){meta.value=value;}else if(this.value!==meta.value){this.value=meta.value;}return meta;},get list(){return this.__meta&&this.__meta.list;},_selfChanged:function _selfChanged(self){if(self){this.value=this;}},/**
   * Retrieves meta data value by key.
   *
   * @method byKey
   * @param {string} key The key of the meta-data to be returned.
   * @return {*}
   */byKey:function byKey(key){return new IronMeta({type:this.type,key:key}).value;}});var ironMeta={IronMeta:IronMeta};_exports.$ironMeta=ironMeta;Polymer$1({_template:html(_templateObject8_7f57aa202bd911e99390d3b784e8dc1a()),is:'iron-icon',properties:{/**
     * The name of the icon to use. The name should be of the form:
     * `iconset_name:icon_name`.
     */icon:{type:String},/**
     * The name of the theme to used, if one is specified by the
     * iconset.
     */theme:{type:String},/**
     * If using iron-icon without an iconset, you can set the src to be
     * the URL of an individual icon image file. Note that this will take
     * precedence over a given icon attribute.
     */src:{type:String},/**
     * @type {!IronMeta}
     */_meta:{value:Base.create('iron-meta',{type:'iconset'})}},observers:['_updateIcon(_meta, isAttached)','_updateIcon(theme, isAttached)','_srcChanged(src, isAttached)','_iconChanged(icon, isAttached)'],_DEFAULT_ICONSET:'icons',_iconChanged:function _iconChanged(icon){var parts=(icon||'').split(':');this._iconName=parts.pop();this._iconsetName=parts.pop()||this._DEFAULT_ICONSET;this._updateIcon();},_srcChanged:function _srcChanged(src){this._updateIcon();},_usesIconset:function _usesIconset(){return this.icon||!this.src;},/** @suppress {visibility} */_updateIcon:function _updateIcon(){if(this._usesIconset()){if(this._img&&this._img.parentNode){dom(this.root).removeChild(this._img);}if(this._iconName===''){if(this._iconset){this._iconset.removeIcon(this);}}else if(this._iconsetName&&this._meta){this._iconset=/** @type {?Polymer.Iconset} */this._meta.byKey(this._iconsetName);if(this._iconset){this._iconset.applyIcon(this,this._iconName,this.theme);this.unlisten(window,'iron-iconset-added','_updateIcon');}else{this.listen(window,'iron-iconset-added','_updateIcon');}}}else{if(this._iconset){this._iconset.removeIcon(this);}if(!this._img){this._img=document.createElement('img');this._img.style.width='100%';this._img.style.height='100%';this._img.draggable=false;}this._img.src=this.src;dom(this.root).appendChild(this._img);}}});Polymer$1({is:'iron-iconset-svg',properties:{/**
     * The name of the iconset.
     */name:{type:String,observer:'_nameChanged'},/**
     * The size of an individual icon. Note that icons must be square.
     */size:{type:Number,value:24},/**
     * Set to true to enable mirroring of icons where specified when they are
     * stamped. Icons that should be mirrored should be decorated with a
     * `mirror-in-rtl` attribute.
     *
     * NOTE: For performance reasons, direction will be resolved once per
     * document per iconset, so moving icons in and out of RTL subtrees will
     * not cause their mirrored state to change.
     */rtlMirroring:{type:Boolean,value:false},/**
     * Set to true to measure RTL based on the dir attribute on the body or
     * html elements (measured on document.body or document.documentElement as
     * available).
     */useGlobalRtlAttribute:{type:Boolean,value:false}},created:function created(){this._meta=new IronMeta({type:'iconset',key:null,value:null});},attached:function attached(){this.style.display='none';},/**
   * Construct an array of all icon names in this iconset.
   *
   * @return {!Array} Array of icon names.
   */getIconNames:function getIconNames(){this._icons=this._createIconMap();return Object.keys(this._icons).map(function(n){return this.name+':'+n;},this);},/**
   * Applies an icon to the given element.
   *
   * An svg icon is prepended to the element's shadowRoot if it exists,
   * otherwise to the element itself.
   *
   * If RTL mirroring is enabled, and the icon is marked to be mirrored in
   * RTL, the element will be tested (once and only once ever for each
   * iconset) to determine the direction of the subtree the element is in.
   * This direction will apply to all future icon applications, although only
   * icons marked to be mirrored will be affected.
   *
   * @method applyIcon
   * @param {Element} element Element to which the icon is applied.
   * @param {string} iconName Name of the icon to apply.
   * @return {?Element} The svg element which renders the icon.
   */applyIcon:function applyIcon(element,iconName){// Remove old svg element
this.removeIcon(element);// install new svg element
var svg=this._cloneIcon(iconName,this.rtlMirroring&&this._targetIsRTL(element));if(svg){// insert svg element into shadow root, if it exists
var pde=dom(element.root||element);pde.insertBefore(svg,pde.childNodes[0]);return element._svgIcon=svg;}return null;},/**
   * Remove an icon from the given element by undoing the changes effected
   * by `applyIcon`.
   *
   * @param {Element} element The element from which the icon is removed.
   */removeIcon:function removeIcon(element){// Remove old svg element
if(element._svgIcon){dom(element.root||element).removeChild(element._svgIcon);element._svgIcon=null;}},/**
   * Measures and memoizes the direction of the element. Note that this
   * measurement is only done once and the result is memoized for future
   * invocations.
   */_targetIsRTL:function _targetIsRTL(target){if(this.__targetIsRTL==null){if(this.useGlobalRtlAttribute){var globalElement=document.body&&document.body.hasAttribute('dir')?document.body:document.documentElement;this.__targetIsRTL=globalElement.getAttribute('dir')==='rtl';}else{if(target&&target.nodeType!==Node.ELEMENT_NODE){target=target.host;}this.__targetIsRTL=target&&window.getComputedStyle(target)['direction']==='rtl';}}return this.__targetIsRTL;},/**
   *
   * When name is changed, register iconset metadata
   *
   */_nameChanged:function _nameChanged(){this._meta.value=null;this._meta.key=this.name;this._meta.value=this;this.async(function(){this.fire('iron-iconset-added',this,{node:window});});},/**
   * Create a map of child SVG elements by id.
   *
   * @return {!Object} Map of id's to SVG elements.
   */_createIconMap:function _createIconMap(){// Objects chained to Object.prototype (`{}`) have members. Specifically,
// on FF there is a `watch` method that confuses the icon map, so we
// need to use a null-based object here.
var icons=Object.create(null);dom(this).querySelectorAll('[id]').forEach(function(icon){icons[icon.id]=icon;});return icons;},/**
   * Produce installable clone of the SVG element matching `id` in this
   * iconset, or `undefined` if there is no matching element.
   *
   * @return {Element} Returns an installable clone of the SVG element
   * matching `id`.
   */_cloneIcon:function _cloneIcon(id,mirrorAllowed){// create the icon map on-demand, since the iconset itself has no discrete
// signal to know when it's children are fully parsed
this._icons=this._icons||this._createIconMap();return this._prepareSvgClone(this._icons[id],this.size,mirrorAllowed);},/**
   * @param {Element} sourceSvg
   * @param {number} size
   * @param {Boolean} mirrorAllowed
   * @return {Element}
   */_prepareSvgClone:function _prepareSvgClone(sourceSvg,size,mirrorAllowed){if(sourceSvg){var content=sourceSvg.cloneNode(true),svg=document.createElementNS('http://www.w3.org/2000/svg','svg'),viewBox=content.getAttribute('viewBox')||'0 0 '+size+' '+size,cssText='pointer-events: none; display: block; width: 100%; height: 100%;';if(mirrorAllowed&&content.hasAttribute('mirror-in-rtl')){cssText+='-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;';}svg.setAttribute('viewBox',viewBox);svg.setAttribute('preserveAspectRatio','xMidYMid meet');svg.setAttribute('focusable','false');// TODO(dfreedm): `pointer-events: none` works around
// https://crbug.com/370136
// TODO(sjmiles): inline style may not be ideal, but avoids requiring a
// shadow-root
svg.style.cssText=cssText;svg.appendChild(content).removeAttribute('id');return svg;}return null;}});var template$1=html(_templateObject9_7f57aa202bd911e99390d3b784e8dc1a());document.head.appendChild(template$1.content);var IOS=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/);var IOS_TOUCH_SCROLLING=IOS&&IOS[1]>=8;var DEFAULT_PHYSICAL_COUNT=3;var HIDDEN_Y='-10000px';var ITEM_WIDTH=0;var ITEM_HEIGHT=1;var SECRET_TABINDEX=-100;var IS_V2=flush$1!=null;var ANIMATION_FRAME=IS_V2?animationFrame:0;var IDLE_TIME=IS_V2?idlePeriod:1;var MICRO_TASK=IS_V2?microTask:2;/* Polymer.OptionalMutableDataBehavior is only available with Polymer 2.0. */if(!OptionalMutableDataBehavior){/** @polymerBehavior */Polymer.OptionalMutableDataBehavior={};}/**
  
  `iron-list` displays a virtual, 'infinite' list. The template inside
  the iron-list element represents the DOM to create for each list item.
  The `items` property specifies an array of list item data.
  
  For performance reasons, not every item in the list is rendered at once;
  instead a small subset of actual template elements *(enough to fill the
  viewport)* are rendered and reused as the user scrolls. As such, it is important
  that all state of the list template is bound to the model driving it, since the
  view may be reused with a new model at any time. Particularly, any state that
  may change as the result of a user interaction with the list item must be bound
  to the model to avoid view state inconsistency.
  
  ### Sizing iron-list
  
  `iron-list` must either be explicitly sized, or delegate scrolling to an
  explicitly sized parent. By "explicitly sized", we mean it either has an
  explicit CSS `height` property set via a class or inline style, or else is sized
  by other layout means (e.g. the `flex` or `fit` classes).
  
  #### Flexbox - [jsbin](https://jsbin.com/vejoni/edit?html,output)
  
  ```html
  <template is="x-list">
    <style>
      :host {
        display: block;
        height: 100vh;
        display: flex;
        flex-direction: column;
      }
  
      iron-list {
        flex: 1 1 auto;
      }
    </style>
    <app-toolbar>App name</app-toolbar>
    <iron-list items="[[items]]">
      <template>
        <div>
          ...
        </div>
      </template>
    </iron-list>
  </template>
  ```
  #### Explicit size - [jsbin](https://jsbin.com/vopucus/edit?html,output)
  ```html
  <template is="x-list">
    <style>
      :host {
        display: block;
      }
  
      iron-list {
        height: 100vh; /* don't use % values unless the parent element is sized.
  *\/
      }
    </style>
    <iron-list items="[[items]]">
      <template>
        <div>
          ...
        </div>
      </template>
    </iron-list>
  </template>
  ```
  #### Main document scrolling -
  [jsbin](https://jsbin.com/wevirow/edit?html,output)
  ```html
  <head>
    <style>
      body {
        height: 100vh;
        margin: 0;
        display: flex;
        flex-direction: column;
      }
  
      app-toolbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      }
  
      iron-list {
        /* add padding since the app-toolbar is fixed at the top *\/
        padding-top: 64px;
      }
    </style>
  </head>
  <body>
    <app-toolbar>App name</app-toolbar>
    <iron-list scroll-target="document">
      <template>
        <div>
          ...
        </div>
      </template>
    </iron-list>
  </body>
  ```
  
  `iron-list` must be given a `<template>` which contains exactly one element. In
  the examples above we used a `<div>`, but you can provide any element (including
  custom elements).
  
  ### Template model
  
  List item templates should bind to template models of the following structure:
  
  ```js
  {
    index: 0,        // index in the item array
    selected: false, // true if the current item is selected
    tabIndex: -1,    // a dynamically generated tabIndex for focus management
    item: {}         // user data corresponding to items[index]
  }
  ```
  
  Alternatively, you can change the property name used as data index by changing
  the `indexAs` property. The `as` property defines the name of the variable to
  add to the binding scope for the array.
  
  For example, given the following `data` array:
  
  ##### data.json
  
  ```js
  [
    {"name": "Bob"},
    {"name": "Tim"},
    {"name": "Mike"}
  ]
  ```
  
  The following code would render the list (note the name property is bound from
  the model object provided to the template scope):
  
  ```html
  <iron-ajax url="data.json" last-response="{{data}}" auto></iron-ajax>
  <iron-list items="[[data]]" as="item">
    <template>
      <div>
        Name: [[item.name]]
      </div>
    </template>
  </iron-list>
  ```
  
  ### Grid layout
  
  `iron-list` supports a grid layout in addition to linear layout by setting
  the `grid` attribute.  In this case, the list template item must have both fixed
  width and height (e.g. via CSS). Based on this, the number of items
  per row are determined automatically based on the size of the list viewport.
  
  ### Accessibility
  
  `iron-list` automatically manages the focus state for the items. It also
  provides a `tabIndex` property within the template scope that can be used for
  keyboard navigation. For example, users can press the up and down keys to move
  to previous and next items in the list:
  
  ```html
  <iron-list items="[[data]]" as="item">
    <template>
      <div tabindex$="[[tabIndex]]">
        Name: [[item.name]]
      </div>
    </template>
  </iron-list>
  ```
  
  ### Styling
  
  You can use the `--iron-list-items-container` mixin to style the container of
  items:
  
  ```css
  iron-list {
   --iron-list-items-container: {
      margin: auto;
    };
  }
  ```
  
  ### Resizing
  
  `iron-list` lays out the items when it receives a notification via the
  `iron-resize` event. This event is fired by any element that implements
  `IronResizableBehavior`.
  
  By default, elements such as `iron-pages`, `paper-tabs` or `paper-dialog` will
  trigger this event automatically. If you hide the list manually (e.g. you use
  `display: none`) you might want to implement `IronResizableBehavior` or fire
  this event manually right after the list became visible again. For example:
  
  ```js
  document.querySelector('iron-list').fire('iron-resize');
  ```
  
  ### When should `<iron-list>` be used?
  
  `iron-list` should be used when a page has significantly more DOM nodes than the
  ones visible on the screen. e.g. the page has 500 nodes, but only 20 are visible
  at a time. This is why we refer to it as a `virtual` list. In this case, a
  `dom-repeat` will still create 500 nodes which could slow down the web app, but
  `iron-list` will only create 20.
  
  However, having an `iron-list` does not mean that you can load all the data at
  once. Say you have a million records in the database, you want to split the data
  into pages so you can bring in a page at the time. The page could contain 500
  items, and iron-list will only render 20.
  
  @group Iron Element
  @element iron-list
  @demo demo/index.html
  
  */Polymer$1({_template:html(_templateObject10_7f57aa202bd911e99390d3b784e8dc1a()),is:'iron-list',properties:{/**
     * An array containing items determining how many instances of the template
     * to stamp and that that each template instance should bind to.
     */items:{type:Array},/**
     * The name of the variable to add to the binding scope for the array
     * element associated with a given template instance.
     */as:{type:String,value:'item'},/**
     * The name of the variable to add to the binding scope with the index
     * for the row.
     */indexAs:{type:String,value:'index'},/**
     * The name of the variable to add to the binding scope to indicate
     * if the row is selected.
     */selectedAs:{type:String,value:'selected'},/**
     * When true, the list is rendered as a grid. Grid items must have
     * fixed width and height set via CSS. e.g.
     *
     * ```html
     * <iron-list grid>
     *   <template>
     *      <div style="width: 100px; height: 100px;"> 100x100 </div>
     *   </template>
     * </iron-list>
     * ```
     */grid:{type:Boolean,value:false,reflectToAttribute:true,observer:'_gridChanged'},/**
     * When true, tapping a row will select the item, placing its data model
     * in the set of selected items retrievable via the selection property.
     *
     * Note that tapping focusable elements within the list item will not
     * result in selection, since they are presumed to have their * own action.
     */selectionEnabled:{type:Boolean,value:false},/**
     * When `multiSelection` is false, this is the currently selected item, or
     * `null` if no item is selected.
     */selectedItem:{type:Object,notify:true},/**
     * When `multiSelection` is true, this is an array that contains the
     * selected items.
     */selectedItems:{type:Object,notify:true},/**
     * When `true`, multiple items may be selected at once (in this case,
     * `selected` is an array of currently selected items).  When `false`,
     * only one item may be selected at a time.
     */multiSelection:{type:Boolean,value:false},/**
     * The offset top from the scrolling element to the iron-list element.
     * This value can be computed using the position returned by
     * `getBoundingClientRect()` although it's preferred to use a constant value
     * when possible.
     *
     * This property is useful when an external scrolling element is used and
     * there's some offset between the scrolling element and the list. For
     * example: a header is placed above the list.
     */scrollOffset:{type:Number,value:0}},observers:['_itemsChanged(items.*)','_selectionEnabledChanged(selectionEnabled)','_multiSelectionChanged(multiSelection)','_setOverflow(scrollTarget, scrollOffset)'],behaviors:[Templatizer,IronResizableBehavior,IronScrollTargetBehavior,OptionalMutableDataBehavior],/**
   * The ratio of hidden tiles that should remain in the scroll direction.
   * Recommended value ~0.5, so it will distribute tiles evenly in both
   * directions.
   */_ratio:0.5,/**
   * The padding-top value for the list.
   */_scrollerPaddingTop:0,/**
   * This value is the same as `scrollTop`.
   */_scrollPosition:0,/**
   * The sum of the heights of all the tiles in the DOM.
   */_physicalSize:0,/**
   * The average `offsetHeight` of the tiles observed till now.
   */_physicalAverage:0,/**
   * The number of tiles which `offsetHeight` > 0 observed until now.
   */_physicalAverageCount:0,/**
   * The Y position of the item rendered in the `_physicalStart`
   * tile relative to the scrolling list.
   */_physicalTop:0,/**
   * The number of items in the list.
   */_virtualCount:0,/**
   * The estimated scroll height based on `_physicalAverage`
   */_estScrollHeight:0,/**
   * The scroll height of the dom node
   */_scrollHeight:0,/**
   * The height of the list. This is referred as the viewport in the context of
   * list.
   */_viewportHeight:0,/**
   * The width of the list. This is referred as the viewport in the context of
   * list.
   */_viewportWidth:0,/**
   * An array of DOM nodes that are currently in the tree
   * @type {?Array<!TemplatizerNode>}
   */_physicalItems:null,/**
   * An array of heights for each item in `_physicalItems`
   * @type {?Array<number>}
   */_physicalSizes:null,/**
   * A cached value for the first visible index.
   * See `firstVisibleIndex`
   * @type {?number}
   */_firstVisibleIndexVal:null,/**
   * A Polymer collection for the items.
   * @type {?Polymer.Collection}
   */_collection:null,/**
   * A cached value for the last visible index.
   * See `lastVisibleIndex`
   * @type {?number}
   */_lastVisibleIndexVal:null,/**
   * The max number of pages to render. One page is equivalent to the height of
   * the list.
   */_maxPages:2,/**
   * The currently focused physical item.
   */_focusedItem:null,/**
   * The virtual index of the focused item.
   */_focusedVirtualIndex:-1,/**
   * The physical index of the focused item.
   */_focusedPhysicalIndex:-1,/**
   * The the item that is focused if it is moved offscreen.
   * @private {?TemplatizerNode}
   */_offscreenFocusedItem:null,/**
   * The item that backfills the `_offscreenFocusedItem` in the physical items
   * list when that item is moved offscreen.
   */_focusBackfillItem:null,/**
   * The maximum items per row
   */_itemsPerRow:1,/**
   * The width of each grid item
   */_itemWidth:0,/**
   * The height of the row in grid layout.
   */_rowHeight:0,/**
   * The cost of stamping a template in ms.
   */_templateCost:0,/**
   * Needed to pass event.model property to declarative event handlers -
   * see polymer/polymer#4339.
   */_parentModel:true,/**
   * The bottom of the physical content.
   */get _physicalBottom(){return this._physicalTop+this._physicalSize;},/**
   * The bottom of the scroll.
   */get _scrollBottom(){return this._scrollPosition+this._viewportHeight;},/**
   * The n-th item rendered in the last physical item.
   */get _virtualEnd(){return this._virtualStart+this._physicalCount-1;},/**
   * The height of the physical content that isn't on the screen.
   */get _hiddenContentSize(){var size=this.grid?this._physicalRows*this._rowHeight:this._physicalSize;return size-this._viewportHeight;},/**
   * The parent node for the _userTemplate.
   */get _itemsParent(){return dom(dom(this._userTemplate).parentNode);},/**
   * The maximum scroll top value.
   */get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset;},/**
   * The largest n-th value for an item such that it can be rendered in
   * `_physicalStart`.
   */get _maxVirtualStart(){var virtualCount=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,virtualCount-this._physicalCount);},set _virtualStart(val){val=this._clamp(val,0,this._maxVirtualStart);if(this.grid){val=val-val%this._itemsPerRow;}this._virtualStartVal=val;},get _virtualStart(){return this._virtualStartVal||0;},/**
   * The k-th tile that is at the top of the scrolling list.
   */set _physicalStart(val){val=val%this._physicalCount;if(val<0){val=this._physicalCount+val;}if(this.grid){val=val-val%this._itemsPerRow;}this._physicalStartVal=val;},get _physicalStart(){return this._physicalStartVal||0;},/**
   * The k-th tile that is at the bottom of the scrolling list.
   */get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount;},set _physicalCount(val){this._physicalCountVal=val;},get _physicalCount(){return this._physicalCountVal||0;},/**
   * An optimal physical size such that we will have enough physical items
   * to fill up the viewport and recycle when the user scrolls.
   *
   * This default value assumes that we will at least have the equivalent
   * to a viewport of physical items above and below the user's viewport.
   */get _optPhysicalSize(){return this._viewportHeight===0?Infinity:this._viewportHeight*this._maxPages;},/**
   * True if the current list is visible.
   */get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight);},/**
   * Gets the index of the first visible item in the viewport.
   *
   * @type {number}
   */get firstVisibleIndex(){var idx=this._firstVisibleIndexVal;if(idx==null){var physicalOffset=this._physicalTop+this._scrollOffset;idx=this._iterateItems(function(pidx,vidx){physicalOffset+=this._getPhysicalSizeIncrement(pidx);if(physicalOffset>this._scrollPosition){return this.grid?vidx-vidx%this._itemsPerRow:vidx;}// Handle a partially rendered final row in grid mode
if(this.grid&&this._virtualCount-1===vidx){return vidx-vidx%this._itemsPerRow;}})||0;this._firstVisibleIndexVal=idx;}return idx;},/**
   * Gets the index of the last visible item in the viewport.
   *
   * @type {number}
   */get lastVisibleIndex(){var idx=this._lastVisibleIndexVal;if(idx==null){if(this.grid){idx=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1);}else{var physicalOffset=this._physicalTop+this._scrollOffset;this._iterateItems(function(pidx,vidx){if(physicalOffset<this._scrollBottom){idx=vidx;}physicalOffset+=this._getPhysicalSizeIncrement(pidx);});}this._lastVisibleIndexVal=idx;}return idx;},get _defaultScrollTarget(){return this;},get _virtualRowCount(){return Math.ceil(this._virtualCount/this._itemsPerRow);},get _estRowsInView(){return Math.ceil(this._viewportHeight/this._rowHeight);},get _physicalRows(){return Math.ceil(this._physicalCount/this._itemsPerRow);},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset;},ready:function ready(){this.addEventListener('focus',this._didFocus.bind(this),true);},attached:function attached(){this._debounce('_render',this._render,ANIMATION_FRAME);// `iron-resize` is fired when the list is attached if the event is added
// before attached causing unnecessary work.
this.listen(this,'iron-resize','_resizeHandler');this.listen(this,'keydown','_keydownHandler');},detached:function detached(){this.unlisten(this,'iron-resize','_resizeHandler');this.unlisten(this,'keydown','_keydownHandler');},/**
   * Set the overflow property if this element has its own scrolling region
   */_setOverflow:function _setOverflow(scrollTarget){this.style.webkitOverflowScrolling=scrollTarget===this?'touch':'';this.style.overflowY=scrollTarget===this?'auto':'';// Clear cache.
this._lastVisibleIndexVal=null;this._firstVisibleIndexVal=null;this._debounce('_render',this._render,ANIMATION_FRAME);},/**
   * Invoke this method if you dynamically update the viewport's
   * size or CSS padding.
   *
   * @method updateViewportBoundaries
   */updateViewportBoundaries:function updateViewportBoundaries(){var styles=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(styles['padding-top'],10);this._isRTL=Boolean(styles.direction==='rtl');this._viewportWidth=this.$.items.offsetWidth;this._viewportHeight=this._scrollTargetHeight;this.grid&&this._updateGridMetrics();},/**
   * Recycles the physical items when needed.
   */_scrollHandler:function _scrollHandler(){var scrollTop=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));var delta=scrollTop-this._scrollPosition;var isScrollingDown=delta>=0;// Track the current scroll position.
this._scrollPosition=scrollTop;// Clear indexes for first and last visible indexes.
this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;// Random access.
if(Math.abs(delta)>this._physicalSize&&this._physicalSize>0){delta=delta-this._scrollOffset;var idxAdjustment=Math.round(delta/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+idxAdjustment;this._physicalStart=this._physicalStart+idxAdjustment;// Estimate new physical offset.
this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;this._update();}else if(this._physicalCount>0){var reusables=this._getReusables(isScrollingDown);if(isScrollingDown){this._physicalTop=reusables.physicalTop;this._virtualStart=this._virtualStart+reusables.indexes.length;this._physicalStart=this._physicalStart+reusables.indexes.length;}else{this._virtualStart=this._virtualStart-reusables.indexes.length;this._physicalStart=this._physicalStart-reusables.indexes.length;}this._update(reusables.indexes,isScrollingDown?null:reusables.indexes);this._debounce('_increasePoolIfNeeded',this._increasePoolIfNeeded.bind(this,0),MICRO_TASK);}},/**
   * Returns an object that contains the indexes of the physical items
   * that might be reused and the physicalTop.
   *
   * @param {boolean} fromTop If the potential reusable items are above the scrolling region.
   */_getReusables:function _getReusables(fromTop){var ith,lastIth,offsetContent,physicalItemHeight;var idxs=[];var protectedOffsetContent=this._hiddenContentSize*this._ratio;var virtualStart=this._virtualStart;var virtualEnd=this._virtualEnd;var physicalCount=this._physicalCount;var top=this._physicalTop+this._scrollOffset;var bottom=this._physicalBottom+this._scrollOffset;var scrollTop=this._scrollTop;var scrollBottom=this._scrollBottom;if(fromTop){ith=this._physicalStart;lastIth=this._physicalEnd;offsetContent=scrollTop-top;}else{ith=this._physicalEnd;lastIth=this._physicalStart;offsetContent=bottom-scrollBottom;}while(true){physicalItemHeight=this._getPhysicalSizeIncrement(ith);offsetContent=offsetContent-physicalItemHeight;if(idxs.length>=physicalCount||offsetContent<=protectedOffsetContent){break;}if(fromTop){// Check that index is within the valid range.
if(virtualEnd+idxs.length+1>=this._virtualCount){break;}// Check that the index is not visible.
if(top+physicalItemHeight>=scrollTop-this._scrollOffset){break;}idxs.push(ith);top=top+physicalItemHeight;ith=(ith+1)%physicalCount;}else{// Check that index is within the valid range.
if(virtualStart-idxs.length<=0){break;}// Check that the index is not visible.
if(top+this._physicalSize-physicalItemHeight<=scrollBottom){break;}idxs.push(ith);top=top-physicalItemHeight;ith=ith===0?physicalCount-1:ith-1;}}return{indexes:idxs,physicalTop:top-this._scrollOffset};},/**
   * Update the list of items, starting from the `_virtualStart` item.
   * @param {!Array<number>=} itemSet
   * @param {!Array<number>=} movingUp
   */_update:function _update(itemSet,movingUp){if(itemSet&&itemSet.length===0||this._physicalCount===0){return;}this._manageFocus();this._assignModels(itemSet);this._updateMetrics(itemSet);// Adjust offset after measuring.
if(movingUp){while(movingUp.length){var idx=movingUp.pop();this._physicalTop-=this._getPhysicalSizeIncrement(idx);}}this._positionItems();this._updateScrollerSize();},/**
   * Creates a pool of DOM elements and attaches them to the local dom.
   *
   * @param {number} size Size of the pool
   */_createPool:function _createPool(size){this._ensureTemplatized();var i,inst;var physicalItems=new Array(size);for(i=0;i<size;i++){inst=this.stamp(null);// TODO(blasten):
// First element child is item; Safari doesn't support children[0]
// on a doc fragment. Test this to see if it still matters.
physicalItems[i]=inst.root.querySelector('*');this._itemsParent.appendChild(inst.root);}return physicalItems;},_isClientFull:function _isClientFull(){return this._scrollBottom!=0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition;},/**
   * Increases the pool size.
   */_increasePoolIfNeeded:function _increasePoolIfNeeded(count){var nextPhysicalCount=this._clamp(this._physicalCount+count,DEFAULT_PHYSICAL_COUNT,this._virtualCount-this._virtualStart);nextPhysicalCount=this._convertIndexToCompleteRow(nextPhysicalCount);if(this.grid){var correction=nextPhysicalCount%this._itemsPerRow;if(correction&&nextPhysicalCount-correction<=this._physicalCount){nextPhysicalCount+=this._itemsPerRow;}nextPhysicalCount-=correction;}var delta=nextPhysicalCount-this._physicalCount;var nextIncrease=Math.round(this._physicalCount*0.5);if(delta<0){return;}if(delta>0){var ts=window.performance.now();// Concat arrays in place.
[].push.apply(this._physicalItems,this._createPool(delta));// Push 0s into physicalSizes. Can't use Array.fill because IE11 doesn't
// support it.
for(var i=0;i<delta;i++){this._physicalSizes.push(0);}this._physicalCount=this._physicalCount+delta;// Update the physical start if it needs to preserve the model of the
// focused item. In this situation, the focused item is currently rendered
// and its model would have changed after increasing the pool if the
// physical start remained unchanged.
if(this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd){this._physicalStart=this._physicalStart+delta;}this._update();this._templateCost=(window.performance.now()-ts)/delta;nextIncrease=Math.round(this._physicalCount*0.5);}// The upper bounds is not fixed when dealing with a grid that doesn't
// fill it's last row with the exact number of items per row.
if(this._virtualEnd>=this._virtualCount-1||nextIncrease===0){// Do nothing.
}else if(!this._isClientFull()){this._debounce('_increasePoolIfNeeded',this._increasePoolIfNeeded.bind(this,nextIncrease),MICRO_TASK);}else if(this._physicalSize<this._optPhysicalSize){// Yield and increase the pool during idle time until the physical size is
// optimal.
this._debounce('_increasePoolIfNeeded',this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,nextIncrease)),IDLE_TIME);}},/**
   * Renders the a new list.
   */_render:function _render(){if(!this.isAttached||!this._isVisible){return;}if(this._physicalCount!==0){var reusables=this._getReusables(true);this._physicalTop=reusables.physicalTop;this._virtualStart=this._virtualStart+reusables.indexes.length;this._physicalStart=this._physicalStart+reusables.indexes.length;this._update(reusables.indexes);this._update();this._increasePoolIfNeeded(0);}else if(this._virtualCount>0){// Initial render
this.updateViewportBoundaries();this._increasePoolIfNeeded(DEFAULT_PHYSICAL_COUNT);}},/**
   * Templetizes the user template.
   */_ensureTemplatized:function _ensureTemplatized(){if(this.ctor){return;}this._userTemplate=this.queryEffectiveChildren('template');if(!this._userTemplate){console.warn('iron-list requires a template to be provided in light-dom');}var instanceProps={};instanceProps.__key__=true;instanceProps[this.as]=true;instanceProps[this.indexAs]=true;instanceProps[this.selectedAs]=true;instanceProps.tabIndex=true;this._instanceProps=instanceProps;this.templatize(this._userTemplate,this.mutableData);},_gridChanged:function _gridChanged(newGrid,oldGrid){if(typeof oldGrid==='undefined')return;this.notifyResize();flush$1?flush$1():flush$1();newGrid&&this._updateGridMetrics();},/**
   * Called when the items have changed. That is, reassignments
   * to `items`, splices or updates to a single item.
   */_itemsChanged:function _itemsChanged(change){if(change.path==='items'){this._virtualStart=0;this._physicalTop=0;this._virtualCount=this.items?this.items.length:0;this._collection=this.items&&undefined?undefined.get(this.items):null;this._physicalIndexForKey={};this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;this._physicalCount=this._physicalCount||0;this._physicalItems=this._physicalItems||[];this._physicalSizes=this._physicalSizes||[];this._physicalStart=0;if(this._scrollTop>this._scrollOffset){this._resetScrollPosition(0);}this._removeFocusedItem();this._debounce('_render',this._render,ANIMATION_FRAME);}else if(change.path==='items.splices'){this._adjustVirtualIndex(change.value.indexSplices);this._virtualCount=this.items?this.items.length:0;// Only blur if at least one item is added or removed.
var itemAddedOrRemoved=change.value.indexSplices.some(function(splice){return splice.addedCount>0||splice.removed.length>0;});if(itemAddedOrRemoved){// Only blur activeElement if it is a descendant of the list (#505,
// #507).
var activeElement=this._getActiveElement();if(this.contains(activeElement)){activeElement.blur();}}// Render only if the affected index is rendered.
var affectedIndexRendered=change.value.indexSplices.some(function(splice){return splice.index+splice.addedCount>=this._virtualStart&&splice.index<=this._virtualEnd;},this);if(!this._isClientFull()||affectedIndexRendered){this._debounce('_render',this._render,ANIMATION_FRAME);}}else if(change.path!=='items.length'){this._forwardItemPath(change.path,change.value);}},_forwardItemPath:function _forwardItemPath(path,value){path=path.slice(6);// 'items.'.length == 6
var dot=path.indexOf('.');if(dot===-1){dot=path.length;}var isIndexRendered;var pidx;var inst;var offscreenInstance=this.modelForElement(this._offscreenFocusedItem);if(IS_V2){var vidx=parseInt(path.substring(0,dot),10);isIndexRendered=this._isIndexRendered(vidx);if(isIndexRendered){pidx=this._getPhysicalIndex(vidx);inst=this.modelForElement(this._physicalItems[pidx]);}else if(offscreenInstance){inst=offscreenInstance;}if(!inst||inst[this.indexAs]!==vidx){return;}}else{// Polymer 1.x - get physical instance by key (`#1`), not index.
var key=path.substring(0,dot);if(offscreenInstance&&offscreenInstance.__key__===key){inst=offscreenInstance;}else{pidx=this._physicalIndexForKey[key];inst=this.modelForElement(this._physicalItems[pidx]);if(!inst||inst.__key__!==key){return;}}}path=path.substring(dot+1);path=this.as+(path?'.'+path:'');IS_V2?inst._setPendingPropertyOrPath(path,value,false,true):inst.notifyPath(path,value,true);inst._flushProperties&&inst._flushProperties(true);// TODO(blasten): V1 doesn't do this and it's a bug
if(isIndexRendered){this._updateMetrics([pidx]);this._positionItems();this._updateScrollerSize();}},/**
   * @param {!Array<!PolymerSplice>} splices
   */_adjustVirtualIndex:function _adjustVirtualIndex(splices){splices.forEach(function(splice){// deselect removed items
splice.removed.forEach(this._removeItem,this);// We only need to care about changes happening above the current position
if(splice.index<this._virtualStart){var delta=Math.max(splice.addedCount-splice.removed.length,splice.index-this._virtualStart);this._virtualStart=this._virtualStart+delta;if(this._focusedVirtualIndex>=0){this._focusedVirtualIndex=this._focusedVirtualIndex+delta;}}},this);},_removeItem:function _removeItem(item){this.$.selector.deselect(item);// remove the current focused item
if(this._focusedItem&&this.modelForElement(this._focusedItem)[this.as]===item){this._removeFocusedItem();}},/**
   * Executes a provided function per every physical index in `itemSet`
   * `itemSet` default value is equivalent to the entire set of physical
   * indexes.
   *
   * @param {!function(number, number)} fn
   * @param {!Array<number>=} itemSet
   */_iterateItems:function _iterateItems(fn,itemSet){var pidx,vidx,rtn,i;if(arguments.length===2&&itemSet){for(i=0;i<itemSet.length;i++){pidx=itemSet[i];vidx=this._computeVidx(pidx);if((rtn=fn.call(this,pidx,vidx))!=null){return rtn;}}}else{pidx=this._physicalStart;vidx=this._virtualStart;for(;pidx<this._physicalCount;pidx++,vidx++){if((rtn=fn.call(this,pidx,vidx))!=null){return rtn;}}for(pidx=0;pidx<this._physicalStart;pidx++,vidx++){if((rtn=fn.call(this,pidx,vidx))!=null){return rtn;}}}},/**
   * Returns the virtual index for a given physical index
   *
   * @param {number} pidx Physical index
   * @return {number}
   */_computeVidx:function _computeVidx(pidx){if(pidx>=this._physicalStart){return this._virtualStart+(pidx-this._physicalStart);}return this._virtualStart+(this._physicalCount-this._physicalStart)+pidx;},/**
   * Assigns the data models to a given set of items.
   * @param {!Array<number>=} itemSet
   */_assignModels:function _assignModels(itemSet){this._iterateItems(function(pidx,vidx){var el=this._physicalItems[pidx];var item=this.items&&this.items[vidx];if(item!=null){var inst=this.modelForElement(el);inst.__key__=this._collection?this._collection.getKey(item):null;this._forwardProperty(inst,this.as,item);this._forwardProperty(inst,this.selectedAs,this.$.selector.isSelected(item));this._forwardProperty(inst,this.indexAs,vidx);this._forwardProperty(inst,'tabIndex',this._focusedVirtualIndex===vidx?0:-1);this._physicalIndexForKey[inst.__key__]=pidx;inst._flushProperties&&inst._flushProperties(true);el.removeAttribute('hidden');}else{el.setAttribute('hidden','');}},itemSet);},/**
   * Updates the height for a given set of items.
   *
   * @param {!Array<number>=} itemSet
   */_updateMetrics:function _updateMetrics(itemSet){// Make sure we distributed all the physical items
// so we can measure them.
flush$1?flush$1():flush$1();var newPhysicalSize=0;var oldPhysicalSize=0;var prevAvgCount=this._physicalAverageCount;var prevPhysicalAvg=this._physicalAverage;this._iterateItems(function(pidx,vidx){oldPhysicalSize+=this._physicalSizes[pidx];this._physicalSizes[pidx]=this._physicalItems[pidx].offsetHeight;newPhysicalSize+=this._physicalSizes[pidx];this._physicalAverageCount+=this._physicalSizes[pidx]?1:0;},itemSet);if(this.grid){this._updateGridMetrics();this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight;}else{oldPhysicalSize=this._itemsPerRow===1?oldPhysicalSize:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight;this._physicalSize=this._physicalSize+newPhysicalSize-oldPhysicalSize;this._itemsPerRow=1;}// Update the average if it measured something.
if(this._physicalAverageCount!==prevAvgCount){this._physicalAverage=Math.round((prevPhysicalAvg*prevAvgCount+newPhysicalSize)/this._physicalAverageCount);}},_updateGridMetrics:function _updateGridMetrics(){this._itemWidth=this._physicalCount>0?this._physicalItems[0].getBoundingClientRect().width:200;this._rowHeight=this._physicalCount>0?this._physicalItems[0].offsetHeight:200;this._itemsPerRow=this._itemWidth?Math.floor(this._viewportWidth/this._itemWidth):this._itemsPerRow;},/**
   * Updates the position of the physical items.
   */_positionItems:function _positionItems(){this._adjustScrollPosition();var y=this._physicalTop;if(this.grid){var totalItemWidth=this._itemsPerRow*this._itemWidth;var rowOffset=(this._viewportWidth-totalItemWidth)/2;this._iterateItems(function(pidx,vidx){var modulus=vidx%this._itemsPerRow;var x=Math.floor(modulus*this._itemWidth+rowOffset);if(this._isRTL){x=x*-1;}this.translate3d(x+'px',y+'px',0,this._physicalItems[pidx]);if(this._shouldRenderNextRow(vidx)){y+=this._rowHeight;}});}else{this._iterateItems(function(pidx,vidx){this.translate3d(0,y+'px',0,this._physicalItems[pidx]);y+=this._physicalSizes[pidx];});}},_getPhysicalSizeIncrement:function _getPhysicalSizeIncrement(pidx){if(!this.grid){return this._physicalSizes[pidx];}if(this._computeVidx(pidx)%this._itemsPerRow!==this._itemsPerRow-1){return 0;}return this._rowHeight;},/**
   * Returns, based on the current index,
   * whether or not the next index will need
   * to be rendered on a new row.
   *
   * @param {number} vidx Virtual index
   * @return {boolean}
   */_shouldRenderNextRow:function _shouldRenderNextRow(vidx){return vidx%this._itemsPerRow===this._itemsPerRow-1;},/**
   * Adjusts the scroll position when it was overestimated.
   */_adjustScrollPosition:function _adjustScrollPosition(){var deltaHeight=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);// Note: the delta can be positive or negative.
if(deltaHeight!==0){this._physicalTop=this._physicalTop-deltaHeight;var scrollTop=this._scrollTop;// juking scroll position during interial scrolling on iOS is no bueno
if(!IOS_TOUCH_SCROLLING&&scrollTop>0){this._resetScrollPosition(scrollTop-deltaHeight);}}},/**
   * Sets the position of the scroll.
   */_resetScrollPosition:function _resetScrollPosition(pos){if(this.scrollTarget&&pos>=0){this._scrollTop=pos;this._scrollPosition=this._scrollTop;}},/**
   * Sets the scroll height, that's the height of the content,
   *
   * @param {boolean=} forceUpdate If true, updates the height no matter what.
   */_updateScrollerSize:function _updateScrollerSize(forceUpdate){if(this.grid){this._estScrollHeight=this._virtualRowCount*this._rowHeight;}else{this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage;}forceUpdate=forceUpdate||this._scrollHeight===0;forceUpdate=forceUpdate||this._scrollPosition>=this._estScrollHeight-this._physicalSize;forceUpdate=forceUpdate||this.grid&&this.$.items.style.height<this._estScrollHeight;// Amortize height adjustment, so it won't trigger large repaints too often.
if(forceUpdate||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight){this.$.items.style.height=this._estScrollHeight+'px';this._scrollHeight=this._estScrollHeight;}},/**
   * Scroll to a specific item in the virtual list regardless
   * of the physical items in the DOM tree.
   *
   * @method scrollToItem
   * @param {(Object)} item The item to be scrolled to
   */scrollToItem:function scrollToItem(item){return this.scrollToIndex(this.items.indexOf(item));},/**
   * Scroll to a specific index in the virtual list regardless
   * of the physical items in the DOM tree.
   *
   * @method scrollToIndex
   * @param {number} idx The index of the item
   */scrollToIndex:function scrollToIndex(idx){if(typeof idx!=='number'||idx<0||idx>this.items.length-1){return;}flush$1?flush$1():flush$1();// Items should have been rendered prior scrolling to an index.
if(this._physicalCount===0){return;}idx=this._clamp(idx,0,this._virtualCount-1);// Update the virtual start only when needed.
if(!this._isIndexRendered(idx)||idx>=this._maxVirtualStart){this._virtualStart=this.grid?idx-this._itemsPerRow*2:idx-1;}this._manageFocus();this._assignModels();this._updateMetrics();// Estimate new physical offset.
this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;var currentTopItem=this._physicalStart;var currentVirtualItem=this._virtualStart;var targetOffsetTop=0;var hiddenContentSize=this._hiddenContentSize;// scroll to the item as much as we can.
while(currentVirtualItem<idx&&targetOffsetTop<=hiddenContentSize){targetOffsetTop=targetOffsetTop+this._getPhysicalSizeIncrement(currentTopItem);currentTopItem=(currentTopItem+1)%this._physicalCount;currentVirtualItem++;}this._updateScrollerSize(true);this._positionItems();this._resetScrollPosition(this._physicalTop+this._scrollOffset+targetOffsetTop);this._increasePoolIfNeeded(0);// clear cached visible index.
this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;},/**
   * Reset the physical average and the average count.
   */_resetAverage:function _resetAverage(){this._physicalAverage=0;this._physicalAverageCount=0;},/**
   * A handler for the `iron-resize` event triggered by `IronResizableBehavior`
   * when the element is resized.
   */_resizeHandler:function _resizeHandler(){this._debounce('_render',function(){// clear cached visible index.
this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;// Skip the resize event on touch devices when the address bar slides up.
var delta=Math.abs(this._viewportHeight-this._scrollTargetHeight);this.updateViewportBoundaries();if(this._isVisible){// Reinstall the scroll event listener.
this.toggleScrollListener(true);this._resetAverage();this._render();}else{// Uninstall the scroll event listener.
this.toggleScrollListener(false);}},ANIMATION_FRAME);},/**
   * Selects the given item.
   *
   * @method selectItem
   * @param {Object} item The item instance.
   */selectItem:function selectItem(item){return this.selectIndex(this.items.indexOf(item));},/**
   * Selects the item at the given index in the items array.
   *
   * @method selectIndex
   * @param {number} index The index of the item in the items array.
   */selectIndex:function selectIndex(index){if(index<0||index>=this._virtualCount){return;}if(!this.multiSelection&&this.selectedItem){this.clearSelection();}if(this._isIndexRendered(index)){var model=this.modelForElement(this._physicalItems[this._getPhysicalIndex(index)]);if(model){model[this.selectedAs]=true;}this.updateSizeForIndex(index);}if(this.$.selector.selectIndex){// v2
this.$.selector.selectIndex(index);}else{// v1
this.$.selector.select(this.items[index]);}},/**
   * Deselects the given item.
   *
   * @method deselect
   * @param {Object} item The item instance.
   */deselectItem:function deselectItem(item){return this.deselectIndex(this.items.indexOf(item));},/**
   * Deselects the item at the given index in the items array.
   *
   * @method deselectIndex
   * @param {number} index The index of the item in the items array.
   */deselectIndex:function deselectIndex(index){if(index<0||index>=this._virtualCount){return;}if(this._isIndexRendered(index)){var model=this.modelForElement(this._physicalItems[this._getPhysicalIndex(index)]);model[this.selectedAs]=false;this.updateSizeForIndex(index);}if(this.$.selector.deselectIndex){// v2
this.$.selector.deselectIndex(index);}else{// v1
this.$.selector.deselect(this.items[index]);}},/**
   * Selects or deselects a given item depending on whether the item
   * has already been selected.
   *
   * @method toggleSelectionForItem
   * @param {Object} item The item object.
   */toggleSelectionForItem:function toggleSelectionForItem(item){return this.toggleSelectionForIndex(this.items.indexOf(item));},/**
   * Selects or deselects the item at the given index in the items array
   * depending on whether the item has already been selected.
   *
   * @method toggleSelectionForIndex
   * @param {number} index The index of the item in the items array.
   */toggleSelectionForIndex:function toggleSelectionForIndex(index){var isSelected=this.$.selector.isIndexSelected?this.$.selector.isIndexSelected(index):this.$.selector.isSelected(this.items[index]);isSelected?this.deselectIndex(index):this.selectIndex(index);},/**
   * Clears the current selection in the list.
   *
   * @method clearSelection
   */clearSelection:function clearSelection(){this._iterateItems(function(pidx,vidx){this.modelForElement(this._physicalItems[pidx])[this.selectedAs]=false;});this.$.selector.clearSelection();},/**
   * Add an event listener to `tap` if `selectionEnabled` is true,
   * it will remove the listener otherwise.
   */_selectionEnabledChanged:function _selectionEnabledChanged(selectionEnabled){var handler=selectionEnabled?this.listen:this.unlisten;handler.call(this,this,'tap','_selectionHandler');},/**
   * Select an item from an event object.
   */_selectionHandler:function _selectionHandler(e){var model=this.modelForElement(e.target);if(!model){return;}var modelTabIndex,activeElTabIndex;var target=dom(e).path[0];var activeEl=this._getActiveElement();var physicalItem=this._physicalItems[this._getPhysicalIndex(model[this.indexAs])];// Safari does not focus certain form controls via mouse
// https://bugs.webkit.org/show_bug.cgi?id=118043
if(target.localName==='input'||target.localName==='button'||target.localName==='select'){return;}// Set a temporary tabindex
modelTabIndex=model.tabIndex;model.tabIndex=SECRET_TABINDEX;activeElTabIndex=activeEl?activeEl.tabIndex:-1;model.tabIndex=modelTabIndex;// Only select the item if the tap wasn't on a focusable child
// or the element bound to `tabIndex`
if(activeEl&&physicalItem!==activeEl&&physicalItem.contains(activeEl)&&activeElTabIndex!==SECRET_TABINDEX){return;}this.toggleSelectionForItem(model[this.as]);},_multiSelectionChanged:function _multiSelectionChanged(multiSelection){this.clearSelection();this.$.selector.multi=multiSelection;},/**
   * Updates the size of a given list item.
   *
   * @method updateSizeForItem
   * @param {Object} item The item instance.
   */updateSizeForItem:function updateSizeForItem(item){return this.updateSizeForIndex(this.items.indexOf(item));},/**
   * Updates the size of the item at the given index in the items array.
   *
   * @method updateSizeForIndex
   * @param {number} index The index of the item in the items array.
   */updateSizeForIndex:function updateSizeForIndex(index){if(!this._isIndexRendered(index)){return null;}this._updateMetrics([this._getPhysicalIndex(index)]);this._positionItems();return null;},/**
   * Creates a temporary backfill item in the rendered pool of physical items
   * to replace the main focused item. The focused item has tabIndex = 0
   * and might be currently focused by the user.
   *
   * This dynamic replacement helps to preserve the focus state.
   */_manageFocus:function _manageFocus(){var fidx=this._focusedVirtualIndex;if(fidx>=0&&fidx<this._virtualCount){// if it's a valid index, check if that index is rendered
// in a physical item.
if(this._isIndexRendered(fidx)){this._restoreFocusedItem();}else{this._createFocusBackfillItem();}}else if(this._virtualCount>0&&this._physicalCount>0){// otherwise, assign the initial focused index.
this._focusedPhysicalIndex=this._physicalStart;this._focusedVirtualIndex=this._virtualStart;this._focusedItem=this._physicalItems[this._physicalStart];}},/**
   * Converts a random index to the index of the item that completes it's row.
   * Allows for better order and fill computation when grid == true.
   */_convertIndexToCompleteRow:function _convertIndexToCompleteRow(idx){// when grid == false _itemPerRow can be unset.
this._itemsPerRow=this._itemsPerRow||1;return this.grid?Math.ceil(idx/this._itemsPerRow)*this._itemsPerRow:idx;},_isIndexRendered:function _isIndexRendered(idx){return idx>=this._virtualStart&&idx<=this._virtualEnd;},_isIndexVisible:function _isIndexVisible(idx){return idx>=this.firstVisibleIndex&&idx<=this.lastVisibleIndex;},_getPhysicalIndex:function _getPhysicalIndex(vidx){return IS_V2?(this._physicalStart+(vidx-this._virtualStart))%this._physicalCount:this._physicalIndexForKey[this._collection.getKey(this.items[vidx])];},focusItem:function focusItem(idx){this._focusPhysicalItem(idx);},_focusPhysicalItem:function _focusPhysicalItem(idx){if(idx<0||idx>=this._virtualCount){return;}this._restoreFocusedItem();// scroll to index to make sure it's rendered
if(!this._isIndexRendered(idx)){this.scrollToIndex(idx);}var physicalItem=this._physicalItems[this._getPhysicalIndex(idx)];var model=this.modelForElement(physicalItem);var focusable;// set a secret tab index
model.tabIndex=SECRET_TABINDEX;// check if focusable element is the physical item
if(physicalItem.tabIndex===SECRET_TABINDEX){focusable=physicalItem;}// search for the element which tabindex is bound to the secret tab index
if(!focusable){focusable=dom(physicalItem).querySelector('[tabindex="'+SECRET_TABINDEX+'"]');}// restore the tab index
model.tabIndex=0;// focus the focusable element
this._focusedVirtualIndex=idx;focusable&&focusable.focus();},_removeFocusedItem:function _removeFocusedItem(){if(this._offscreenFocusedItem){this._itemsParent.removeChild(this._offscreenFocusedItem);}this._offscreenFocusedItem=null;this._focusBackfillItem=null;this._focusedItem=null;this._focusedVirtualIndex=-1;this._focusedPhysicalIndex=-1;},_createFocusBackfillItem:function _createFocusBackfillItem(){var fpidx=this._focusedPhysicalIndex;if(this._offscreenFocusedItem||this._focusedVirtualIndex<0){return;}if(!this._focusBackfillItem){// Create a physical item.
var inst=this.stamp(null);this._focusBackfillItem=inst.root.querySelector('*');this._itemsParent.appendChild(inst.root);}// Set the offcreen focused physical item.
this._offscreenFocusedItem=this._physicalItems[fpidx];this.modelForElement(this._offscreenFocusedItem).tabIndex=0;this._physicalItems[fpidx]=this._focusBackfillItem;this._focusedPhysicalIndex=fpidx;// Hide the focused physical.
this.translate3d(0,HIDDEN_Y,0,this._offscreenFocusedItem);},_restoreFocusedItem:function _restoreFocusedItem(){if(!this._offscreenFocusedItem||this._focusedVirtualIndex<0){return;}// Assign models to the focused index.
this._assignModels();// Get the new physical index for the focused index.
var fpidx=this._focusedPhysicalIndex=this._getPhysicalIndex(this._focusedVirtualIndex);var onScreenItem=this._physicalItems[fpidx];if(!onScreenItem){return;}var onScreenInstance=this.modelForElement(onScreenItem);var offScreenInstance=this.modelForElement(this._offscreenFocusedItem);// Restores the physical item only when it has the same model
// as the offscreen one. Use key for comparison since users can set
// a new item via set('items.idx').
if(onScreenInstance[this.as]===offScreenInstance[this.as]){// Flip the focus backfill.
this._focusBackfillItem=onScreenItem;onScreenInstance.tabIndex=-1;// Restore the focused physical item.
this._physicalItems[fpidx]=this._offscreenFocusedItem;// Hide the physical item that backfills.
this.translate3d(0,HIDDEN_Y,0,this._focusBackfillItem);}else{this._removeFocusedItem();this._focusBackfillItem=null;}this._offscreenFocusedItem=null;},_didFocus:function _didFocus(e){var targetModel=this.modelForElement(e.target);var focusedModel=this.modelForElement(this._focusedItem);var hasOffscreenFocusedItem=this._offscreenFocusedItem!==null;var fidx=this._focusedVirtualIndex;if(!targetModel){return;}if(focusedModel===targetModel){// If the user focused the same item, then bring it into view if it's not
// visible.
if(!this._isIndexVisible(fidx)){this.scrollToIndex(fidx);}}else{this._restoreFocusedItem();// Restore tabIndex for the currently focused item.
if(focusedModel){focusedModel.tabIndex=-1;}// Set the tabIndex for the next focused item.
targetModel.tabIndex=0;fidx=targetModel[this.indexAs];this._focusedVirtualIndex=fidx;this._focusedPhysicalIndex=this._getPhysicalIndex(fidx);this._focusedItem=this._physicalItems[this._focusedPhysicalIndex];if(hasOffscreenFocusedItem&&!this._offscreenFocusedItem){this._update();}}},_keydownHandler:function _keydownHandler(e){switch(e.keyCode){case/* ARROW_DOWN */40:if(this._focusedVirtualIndex<this._virtualCount-1)e.preventDefault();this._focusPhysicalItem(this._focusedVirtualIndex+(this.grid?this._itemsPerRow:1));break;case/* ARROW_RIGHT */39:if(this.grid)this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?-1:1));break;case/* ARROW_UP */38:if(this._focusedVirtualIndex>0)e.preventDefault();this._focusPhysicalItem(this._focusedVirtualIndex-(this.grid?this._itemsPerRow:1));break;case/* ARROW_LEFT */37:if(this.grid)this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?1:-1));break;case/* ENTER */13:this._focusPhysicalItem(this._focusedVirtualIndex);if(this.selectionEnabled)this._selectionHandler(e);break;}},_clamp:function _clamp(v,min,max){return Math.min(max,Math.max(min,v));},_debounce:function _debounce(name,cb,asyncModule){if(IS_V2){this._debouncers=this._debouncers||{};this._debouncers[name]=Debouncer.debounce(this._debouncers[name],asyncModule,cb.bind(this));enqueueDebouncer(this._debouncers[name]);}else{enqueueDebouncer(this.debounce(name,cb));}},_forwardProperty:function _forwardProperty(inst,name,value){if(IS_V2){inst._setPendingProperty(name,value);}else{inst[name]=value;}},/* Templatizer bindings for v2 */_forwardHostPropV2:function _forwardHostPropV2(prop,value){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(item){if(item){this.modelForElement(item).forwardHostProp(prop,value);}},this);},_notifyInstancePropV2:function _notifyInstancePropV2(inst,prop,value){if(matches(this.as,prop)){var idx=inst[this.indexAs];if(prop==this.as){this.items[idx]=value;}this.notifyPath(translate(this.as,'items.'+idx,prop),value);}},/* Templatizer bindings for v1 */_getStampedChildren:function _getStampedChildren(){return this._physicalItems;},_forwardInstancePath:function _forwardInstancePath(inst,path,value){if(path.indexOf(this.as+'.')===0){this.notifyPath('items.'+inst.__key__+'.'+path.slice(this.as.length+1),value);}},_forwardParentPath:function _forwardParentPath(path,value){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(item){if(item){this.modelForElement(item).notifyPath(path,value,true);}},this);},_forwardParentProp:function _forwardParentProp(prop,value){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(item){if(item){this.modelForElement(item)[prop]=value;}},this);},/* Gets the activeElement of the shadow root/host that contains the list. */_getActiveElement:function _getActiveElement(){var itemsHost=this._itemsParent.node.domHost;return dom(itemsHost?itemsHost.root:document).activeElement;}});var IronSelection=/*#__PURE__*/function(){/**
   * @param {!Function} selectCallback
   * @suppress {missingProvide}
   */function IronSelection(selectCallback){babelHelpers.classCallCheck(this,IronSelection);this.selection=[];this.selectCallback=selectCallback;}/**
     * Retrieves the selected item(s).
     *
     * @returns Returns the selected item(s). If the multi property is true,
     * `get` will return an array, otherwise it will return
     * the selected item or undefined if there is no selection.
     */babelHelpers.createClass(IronSelection,[{key:"get",value:function get(){return this.multi?this.selection.slice():this.selection[0];}/**
     * Clears all the selection except the ones indicated.
     *
     * @param {Array} excludes items to be excluded.
     */},{key:"clear",value:function clear(excludes){this.selection.slice().forEach(function(item){if(!excludes||excludes.indexOf(item)<0){this.setItemSelected(item,false);}},this);}/**
     * Indicates if a given item is selected.
     *
     * @param {*} item The item whose selection state should be checked.
     * @return {boolean} Returns true if `item` is selected.
     */},{key:"isSelected",value:function isSelected(item){return this.selection.indexOf(item)>=0;}/**
     * Sets the selection state for a given item to either selected or deselected.
     *
     * @param {*} item The item to select.
     * @param {boolean} isSelected True for selected, false for deselected.
     */},{key:"setItemSelected",value:function setItemSelected(item,isSelected){if(item!=null){if(isSelected!==this.isSelected(item)){// proceed to update selection only if requested state differs from
// current
if(isSelected){this.selection.push(item);}else{var i=this.selection.indexOf(item);if(i>=0){this.selection.splice(i,1);}}if(this.selectCallback){this.selectCallback(item,isSelected);}}}}/**
     * Sets the selection state for a given item. If the `multi` property
     * is true, then the selected state of `item` will be toggled; otherwise
     * the `item` will be selected.
     *
     * @param {*} item The item to select.
     */},{key:"select",value:function select(item){if(this.multi){this.toggle(item);}else if(this.get()!==item){this.setItemSelected(this.get(),false);this.setItemSelected(item,true);}}/**
     * Toggles the selection state for `item`.
     *
     * @param {*} item The item to toggle.
     */},{key:"toggle",value:function toggle(item){this.setItemSelected(item,!this.isSelected(item));}}]);return IronSelection;}();_exports.IronSelection=IronSelection;var ironSelection={IronSelection:IronSelection};_exports.$ironSelection=ironSelection;var IronSelectableBehavior={/**
   * Fired when iron-selector is activated (selected or deselected).
   * It is fired before the selected items are changed.
   * Cancel the event to abort selection.
   *
   * @event iron-activate
   */ /**
       * Fired when an item is selected
       *
       * @event iron-select
       */ /**
           * Fired when an item is deselected
           *
           * @event iron-deselect
           */ /**
               * Fired when the list of selectable items changes (e.g., items are
               * added or removed). The detail of the event is a mutation record that
               * describes what changed.
               *
               * @event iron-items-changed
               */properties:{/**
     * If you want to use an attribute value or property of an element for
     * `selected` instead of the index, set this to the name of the attribute
     * or property. Hyphenated values are converted to camel case when used to
     * look up the property of a selectable element. Camel cased values are
     * *not* converted to hyphenated values for attribute lookup. It's
     * recommended that you provide the hyphenated form of the name so that
     * selection works in both cases. (Use `attr-or-property-name` instead of
     * `attrOrPropertyName`.)
     */attrForSelected:{type:String,value:null},/**
     * Gets or sets the selected element. The default is to use the index of the
     * item.
     * @type {string|number}
     */selected:{type:String,notify:true},/**
     * Returns the currently selected item.
     *
     * @type {?Object}
     */selectedItem:{type:Object,readOnly:true,notify:true},/**
     * The event that fires from items when they are selected. Selectable
     * will listen for this event from items and update the selection state.
     * Set to empty string to listen to no events.
     */activateEvent:{type:String,value:'tap',observer:'_activateEventChanged'},/**
     * This is a CSS selector string.  If this is set, only items that match the
     * CSS selector are selectable.
     */selectable:String,/**
     * The class to set on elements when selected.
     */selectedClass:{type:String,value:'iron-selected'},/**
     * The attribute to set on elements when selected.
     */selectedAttribute:{type:String,value:null},/**
     * Default fallback if the selection based on selected with
     * `attrForSelected` is not found.
     */fallbackSelection:{type:String,value:null},/**
     * The list of items from which a selection can be made.
     */items:{type:Array,readOnly:true,notify:true,value:function value(){return[];}},/**
     * The set of excluded elements where the key is the `localName`
     * of the element that will be ignored from the item list.
     *
     * @default {template: 1}
     */_excludedLocalNames:{type:Object,value:function value(){return{'template':1,'dom-bind':1,'dom-if':1,'dom-repeat':1};}}},observers:['_updateAttrForSelected(attrForSelected)','_updateSelected(selected)','_checkFallback(fallbackSelection)'],created:function created(){this._bindFilterItem=this._filterItem.bind(this);this._selection=new IronSelection(this._applySelection.bind(this));},attached:function attached(){this._observer=this._observeItems(this);this._addListener(this.activateEvent);},detached:function detached(){if(this._observer){dom(this).unobserveNodes(this._observer);}this._removeListener(this.activateEvent);},/**
   * Returns the index of the given item.
   *
   * @method indexOf
   * @param {Object} item
   * @returns Returns the index of the item
   */indexOf:function indexOf(item){return this.items?this.items.indexOf(item):-1;},/**
   * Selects the given value.
   *
   * @method select
   * @param {string|number} value the value to select.
   */select:function select(value){this.selected=value;},/**
   * Selects the previous item.
   *
   * @method selectPrevious
   */selectPrevious:function selectPrevious(){var length=this.items.length;var index=length-1;if(this.selected!==undefined){index=(Number(this._valueToIndex(this.selected))-1+length)%length;}this.selected=this._indexToValue(index);},/**
   * Selects the next item.
   *
   * @method selectNext
   */selectNext:function selectNext(){var index=0;if(this.selected!==undefined){index=(Number(this._valueToIndex(this.selected))+1)%this.items.length;}this.selected=this._indexToValue(index);},/**
   * Selects the item at the given index.
   *
   * @method selectIndex
   */selectIndex:function selectIndex(index){this.select(this._indexToValue(index));},/**
   * Force a synchronous update of the `items` property.
   *
   * NOTE: Consider listening for the `iron-items-changed` event to respond to
   * updates to the set of selectable items after updates to the DOM list and
   * selection state have been made.
   *
   * WARNING: If you are using this method, you should probably consider an
   * alternate approach. Synchronously querying for items is potentially
   * slow for many use cases. The `items` property will update asynchronously
   * on its own to reflect selectable items in the DOM.
   */forceSynchronousItemUpdate:function forceSynchronousItemUpdate(){if(this._observer&&typeof this._observer.flush==='function'){// NOTE(bicknellr): `dom.flush` above is no longer sufficient to trigger
// `observeNodes` callbacks. Polymer 2.x returns an object from
// `observeNodes` with a `flush` that synchronously gives the callback any
// pending MutationRecords (retrieved with `takeRecords`). Any case where
// ShadyDOM flushes were expected to synchronously trigger item updates
// will now require calling `forceSynchronousItemUpdate`.
this._observer.flush();}else{this._updateItems();}},// UNUSED, FOR API COMPATIBILITY
get _shouldUpdateSelection(){return this.selected!=null;},_checkFallback:function _checkFallback(){this._updateSelected();},_addListener:function _addListener(eventName){this.listen(this,eventName,'_activateHandler');},_removeListener:function _removeListener(eventName){this.unlisten(this,eventName,'_activateHandler');},_activateEventChanged:function _activateEventChanged(eventName,old){this._removeListener(old);this._addListener(eventName);},_updateItems:function _updateItems(){var nodes=dom(this).queryDistributedElements(this.selectable||'*');nodes=Array.prototype.filter.call(nodes,this._bindFilterItem);this._setItems(nodes);},_updateAttrForSelected:function _updateAttrForSelected(){if(this.selectedItem){this.selected=this._valueForItem(this.selectedItem);}},_updateSelected:function _updateSelected(){this._selectSelected(this.selected);},_selectSelected:function _selectSelected(selected){if(!this.items){return;}var item=this._valueToItem(this.selected);if(item){this._selection.select(item);}else{this._selection.clear();}// Check for items, since this array is populated only when attached
// Since Number(0) is falsy, explicitly check for undefined
if(this.fallbackSelection&&this.items.length&&this._selection.get()===undefined){this.selected=this.fallbackSelection;}},_filterItem:function _filterItem(node){return!this._excludedLocalNames[node.localName];},_valueToItem:function _valueToItem(value){return value==null?null:this.items[this._valueToIndex(value)];},_valueToIndex:function _valueToIndex(value){if(this.attrForSelected){for(var i=0,item;item=this.items[i];i++){if(this._valueForItem(item)==value){return i;}}}else{return Number(value);}},_indexToValue:function _indexToValue(index){if(this.attrForSelected){var item=this.items[index];if(item){return this._valueForItem(item);}}else{return index;}},_valueForItem:function _valueForItem(item){if(!item){return null;}if(!this.attrForSelected){var i=this.indexOf(item);return i===-1?null:i;}var propValue=item[dashToCamelCase(this.attrForSelected)];return propValue!=undefined?propValue:item.getAttribute(this.attrForSelected);},_applySelection:function _applySelection(item,isSelected){if(this.selectedClass){this.toggleClass(this.selectedClass,isSelected,item);}if(this.selectedAttribute){this.toggleAttribute(this.selectedAttribute,isSelected,item);}this._selectionChange();this.fire('iron-'+(isSelected?'select':'deselect'),{item:item});},_selectionChange:function _selectionChange(){this._setSelectedItem(this._selection.get());},// observe items change under the given node.
_observeItems:function _observeItems(node){return dom(node).observeNodes(function(mutation){this._updateItems();this._updateSelected();// Let other interested parties know about the change so that
// we don't have to recreate mutation observers everywhere.
this.fire('iron-items-changed',mutation,{bubbles:false,cancelable:false});});},_activateHandler:function _activateHandler(e){var t=e.target;var items=this.items;while(t&&t!=this){var i=items.indexOf(t);if(i>=0){var value=this._indexToValue(i);this._itemActivate(value,t);return;}t=t.parentNode;}},_itemActivate:function _itemActivate(value,item){if(!this.fire('iron-activate',{selected:value,item:item},{cancelable:true}).defaultPrevented){this.select(value);}}};_exports.IronSelectableBehavior=IronSelectableBehavior;var ironSelectable={IronSelectableBehavior:IronSelectableBehavior};_exports.$ironSelectable=ironSelectable;Polymer$1({_template:html(_templateObject11_7f57aa202bd911e99390d3b784e8dc1a()),is:'iron-pages',behaviors:[IronResizableBehavior,IronSelectableBehavior],properties:{// as the selected page is the only one visible, activateEvent
// is both non-sensical and problematic; e.g. in cases where a user
// handler attempts to change the page and the activateEvent
// handler immediately changes it back
activateEvent:{type:String,value:null}},observers:['_selectedPageChanged(selected)'],_selectedPageChanged:function _selectedPageChanged(selected,old){this.async(this.notifyResize);}});var IronMultiSelectableBehaviorImpl={properties:{/**
     * If true, multiple selections are allowed.
     */multi:{type:Boolean,value:false,observer:'multiChanged'},/**
     * Gets or sets the selected elements. This is used instead of `selected`
     * when `multi` is true.
     */selectedValues:{type:Array,notify:true,value:function value(){return[];}},/**
     * Returns an array of currently selected items.
     */selectedItems:{type:Array,readOnly:true,notify:true,value:function value(){return[];}}},observers:['_updateSelected(selectedValues.splices)'],/**
   * Selects the given value. If the `multi` property is true, then the selected
   * state of the `value` will be toggled; otherwise the `value` will be
   * selected.
   *
   * @method select
   * @param {string|number} value the value to select.
   */select:function select(value){if(this.multi){this._toggleSelected(value);}else{this.selected=value;}},multiChanged:function multiChanged(multi){this._selection.multi=multi;this._updateSelected();},// UNUSED, FOR API COMPATIBILITY
get _shouldUpdateSelection(){return this.selected!=null||this.selectedValues!=null&&this.selectedValues.length;},_updateAttrForSelected:function _updateAttrForSelected(){if(!this.multi){IronSelectableBehavior._updateAttrForSelected.apply(this);}else if(this.selectedItems&&this.selectedItems.length>0){this.selectedValues=this.selectedItems.map(function(selectedItem){return this._indexToValue(this.indexOf(selectedItem));},this).filter(function(unfilteredValue){return unfilteredValue!=null;},this);}},_updateSelected:function _updateSelected(){if(this.multi){this._selectMulti(this.selectedValues);}else{this._selectSelected(this.selected);}},_selectMulti:function _selectMulti(values){values=values||[];var selectedItems=(this._valuesToItems(values)||[]).filter(function(item){return item!==null&&item!==undefined;});// clear all but the current selected items
this._selection.clear(selectedItems);// select only those not selected yet
for(var i=0;i<selectedItems.length;i++){this._selection.setItemSelected(selectedItems[i],true);}// Check for items, since this array is populated only when attached
if(this.fallbackSelection&&!this._selection.get().length){var fallback=this._valueToItem(this.fallbackSelection);if(fallback){this.select(this.fallbackSelection);}}},_selectionChange:function _selectionChange(){var s=this._selection.get();if(this.multi){this._setSelectedItems(s);this._setSelectedItem(s.length?s[0]:null);}else{if(s!==null&&s!==undefined){this._setSelectedItems([s]);this._setSelectedItem(s);}else{this._setSelectedItems([]);this._setSelectedItem(null);}}},_toggleSelected:function _toggleSelected(value){var i=this.selectedValues.indexOf(value);var unselected=i<0;if(unselected){this.push('selectedValues',value);}else{this.splice('selectedValues',i,1);}},_valuesToItems:function _valuesToItems(values){return values==null?null:values.map(function(value){return this._valueToItem(value);},this);}};/** @polymerBehavior */_exports.IronMultiSelectableBehaviorImpl=IronMultiSelectableBehaviorImpl;var IronMultiSelectableBehavior=[IronSelectableBehavior,IronMultiSelectableBehaviorImpl];_exports.IronMultiSelectableBehavior=IronMultiSelectableBehavior;var ironMultiSelectable={IronMultiSelectableBehaviorImpl:IronMultiSelectableBehaviorImpl,IronMultiSelectableBehavior:IronMultiSelectableBehavior};_exports.$ironMultiSelectable=ironMultiSelectable;Polymer$1({is:'iron-selector',behaviors:[IronMultiSelectableBehavior]});/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */ // The first argument to JS template tags retain identity across multiple
// calls to a tag for the same literal, so we can cache work done per literal
// in a Map.
var templateCaches=new Map();/**
                                          * Interprets a template literal as an HTML template that can efficiently
                                          * render to and update a container.
                                          */_exports.templateCaches=templateCaches;var html$1=function html$1(strings){for(var _len10=arguments.length,values=new Array(_len10>1?_len10-1:0),_key10=1;_key10<_len10;_key10++){values[_key10-1]=arguments[_key10];}return new TemplateResult(strings,values,'html');};/**
                                                                                          * Interprets a template literal as an SVG template that can efficiently
                                                                                          * render to and update a container.
                                                                                          */_exports.html$6=_exports.html$5=html$1;var svg=function svg(strings){for(var _len11=arguments.length,values=new Array(_len11>1?_len11-1:0),_key11=1;_key11<_len11;_key11++){values[_key11-1]=arguments[_key11];}return new SVGTemplateResult(strings,values,'svg');};/**
                                                                                           * The return type of `html`, which holds a Template and the values from
                                                                                           * interpolated expressions.
                                                                                           */_exports.svg$3=_exports.svg$2=svg;var TemplateResult=/*#__PURE__*/function(){function TemplateResult(strings,values,type){var partCallback=arguments.length>3&&arguments[3]!==undefined?arguments[3]:defaultPartCallback;babelHelpers.classCallCheck(this,TemplateResult);this.strings=strings;this.values=values;this.type=type;this.partCallback=partCallback;}/**
     * Returns a string of HTML used to create a <template> element.
     */babelHelpers.createClass(TemplateResult,[{key:"getHTML",value:function getHTML(){var l=this.strings.length-1;var html='';var isTextBinding=true;for(var _i63=0;_i63<l;_i63++){var s=this.strings[_i63];html+=s;// We're in a text position if the previous string closed its tags.
// If it doesn't have any tags, then we use the previous text position
// state.
var closing=findTagClose(s);isTextBinding=closing>-1?closing<s.length:isTextBinding;html+=isTextBinding?nodeMarker:marker;}html+=this.strings[l];return html;}},{key:"getTemplateElement",value:function getTemplateElement(){var template=document.createElement('template');template.innerHTML=this.getHTML();return template;}}]);return TemplateResult;}();/**
   * A TemplateResult for SVG fragments.
   *
   * This class wraps HTMl in an <svg> tag in order to parse its contents in the
   * SVG namespace, then modifies the template to remove the <svg> tag so that
   * clones only container the original fragment.
   */_exports.TemplateResult$1=_exports.TemplateResult=TemplateResult;var SVGTemplateResult=/*#__PURE__*/function(_TemplateResult){babelHelpers.inherits(SVGTemplateResult,_TemplateResult);function SVGTemplateResult(){babelHelpers.classCallCheck(this,SVGTemplateResult);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(SVGTemplateResult).apply(this,arguments));}babelHelpers.createClass(SVGTemplateResult,[{key:"getHTML",value:function getHTML(){return"<svg>".concat(babelHelpers.get(babelHelpers.getPrototypeOf(SVGTemplateResult.prototype),"getHTML",this).call(this),"</svg>");}},{key:"getTemplateElement",value:function getTemplateElement(){var template=babelHelpers.get(babelHelpers.getPrototypeOf(SVGTemplateResult.prototype),"getTemplateElement",this).call(this);var content=template.content;var svgElement=content.firstChild;content.removeChild(svgElement);reparentNodes(content,svgElement.firstChild);return template;}}]);return SVGTemplateResult;}(TemplateResult);/**
   * The default TemplateFactory which caches Templates keyed on
   * result.type and result.strings.
   */_exports.SVGTemplateResult=SVGTemplateResult;function defaultTemplateFactory(result){var templateCache=templateCaches.get(result.type);if(templateCache===undefined){templateCache=new Map();templateCaches.set(result.type,templateCache);}var template=templateCache.get(result.strings);if(template===undefined){template=new Template(result,result.getTemplateElement());templateCache.set(result.strings,template);}return template;}/**
   * Renders a template to a container.
   *
   * To update a container with new values, reevaluate the template literal and
   * call `render` with the new result.
   *
   * @param result a TemplateResult created by evaluating a template tag like
   *     `html` or `svg`.
   * @param container A DOM parent to render to. The entire contents are either
   *     replaced, or efficiently updated if the same result type was previous
   *     rendered there.
   * @param templateFactory a function to create a Template or retreive one from
   *     cache.
   */function render(result,container){var templateFactory=arguments.length>2&&arguments[2]!==undefined?arguments[2]:defaultTemplateFactory;var template=templateFactory(result);var instance=container.__templateInstance;// Repeat render, just call update()
if(instance!==undefined&&instance.template===template&&instance._partCallback===result.partCallback){instance.update(result.values);return;}// First render, create a new TemplateInstance and append it
instance=new TemplateInstance(template,result.partCallback,templateFactory);container.__templateInstance=instance;var fragment=instance._clone();instance.update(result.values);removeNodes(container,container.firstChild);container.appendChild(fragment);}/**
   * An expression marker with embedded unique key to avoid collision with
   * possible text in templates.
   */var marker="{{lit-".concat(String(Math.random()).slice(2),"}}");/**
                                                             * An expression marker used text-positions, not attribute positions,
                                                             * in template.
                                                             */var nodeMarker="<!--".concat(marker,"-->");var markerRegex=new RegExp("".concat(marker,"|").concat(nodeMarker));/**
                                                            * This regex extracts the attribute name preceding an attribute-position
                                                            * expression. It does this by matching the syntax allowed for attributes
                                                            * against the string literal directly preceding the expression, assuming that
                                                            * the expression is in an attribute-value position.
                                                            *
                                                            * See attributes in the HTML spec:
                                                            * https://www.w3.org/TR/html5/syntax.html#attributes-0
                                                            *
                                                            * "\0-\x1F\x7F-\x9F" are Unicode control characters
                                                            *
                                                            * " \x09\x0a\x0c\x0d" are HTML space characters:
                                                            * https://www.w3.org/TR/html5/infrastructure.html#space-character
                                                            *
                                                            * So an attribute is:
                                                            *  * The name: any character except a control character, space character, ('),
                                                            *    ("), ">", "=", or "/"
                                                            *  * Followed by zero or more space characters
                                                            *  * Followed by "="
                                                            *  * Followed by zero or more space characters
                                                            *  * Followed by:
                                                            *    * Any character except space, ('), ("), "<", ">", "=", (`), or
                                                            *    * (") then any non-("), or
                                                            *    * (') then any non-(')
                                                            */var lastAttributeNameRegex=/[ \x09\x0a\x0c\x0d]([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)[ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*)$/;/**
                                                                                                                                                                                          * Finds the closing index of the last closed HTML tag.
                                                                                                                                                                                          * This has 3 possible return values:
                                                                                                                                                                                          *   - `-1`, meaning there is no tag in str.
                                                                                                                                                                                          *   - `string.length`, meaning the last opened tag is unclosed.
                                                                                                                                                                                          *   - Some positive number < str.length, meaning the index of the closing '>'.
                                                                                                                                                                                          */function findTagClose(str){var close=str.lastIndexOf('>');var open=str.indexOf('<',close+1);return open>-1?str.length:close;}/**
   * A placeholder for a dynamic expression in an HTML template.
   *
   * There are two built-in part types: AttributePart and NodePart. NodeParts
   * always represent a single dynamic expression, while AttributeParts may
   * represent as many expressions are contained in the attribute.
   *
   * A Template's parts are mutable, so parts can be replaced or modified
   * (possibly to implement different template semantics). The contract is that
   * parts can only be replaced, not removed, added or reordered, and parts must
   * always consume the correct number of values in their `update()` method.
   *
   * TODO(justinfagnani): That requirement is a little fragile. A
   * TemplateInstance could instead be more careful about which values it gives
   * to Part.update().
   */var TemplatePart=function TemplatePart(type,index,name,rawName,strings){babelHelpers.classCallCheck(this,TemplatePart);this.type=type;this.index=index;this.name=name;this.rawName=rawName;this.strings=strings;};_exports.TemplatePart=TemplatePart;var isTemplatePartActive=function isTemplatePartActive(part){return part.index!==-1;};/**
                                                                * An updateable Template that tracks the location of dynamic parts.
                                                                */_exports.isTemplatePartActive=isTemplatePartActive;var Template=function Template(result,element){babelHelpers.classCallCheck(this,Template);this.parts=[];this.element=element;var content=this.element.content;// Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
var walker=document.createTreeWalker(content,133/* NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT |
                                                          NodeFilter.SHOW_TEXT */,null,false);var index=-1;var partIndex=0;var nodesToRemove=[];// The actual previous node, accounting for removals: if a node is removed
// it will never be the previousNode.
var previousNode;// Used to set previousNode at the top of the loop.
var currentNode;while(walker.nextNode()){index++;previousNode=currentNode;var node=currentNode=walker.currentNode;if(node.nodeType===1/* Node.ELEMENT_NODE */){if(!node.hasAttributes()){continue;}var attributes=node.attributes;// Per https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
// attributes are not guaranteed to be returned in document order. In
// particular, Edge/IE can return them out of order, so we cannot assume
// a correspondance between part index and attribute index.
var count=0;for(var _i64=0;_i64<attributes.length;_i64++){if(attributes[_i64].value.indexOf(marker)>=0){count++;}}while(count-->0){// Get the template literal section leading up to the first
// expression in this attribute
var stringForPart=result.strings[partIndex];// Find the attribute name
var attributeNameInPart=lastAttributeNameRegex.exec(stringForPart)[1];// Find the corresponding attribute
// TODO(justinfagnani): remove non-null assertion
var attribute=attributes.getNamedItem(attributeNameInPart);var stringsForAttributeValue=attribute.value.split(markerRegex);this.parts.push(new TemplatePart('attribute',index,attribute.name,attributeNameInPart,stringsForAttributeValue));node.removeAttribute(attribute.name);partIndex+=stringsForAttributeValue.length-1;}}else if(node.nodeType===3/* Node.TEXT_NODE */){var nodeValue=node.nodeValue;if(nodeValue.indexOf(marker)<0){continue;}var parent=node.parentNode;var strings=nodeValue.split(markerRegex);var lastIndex=strings.length-1;// We have a part for each match found
partIndex+=lastIndex;// Generate a new text node for each literal section
// These nodes are also used as the markers for node parts
for(var _i65=0;_i65<lastIndex;_i65++){parent.insertBefore(strings[_i65]===''?document.createComment(''):document.createTextNode(strings[_i65]),node);this.parts.push(new TemplatePart('node',index++));}parent.insertBefore(strings[lastIndex]===''?document.createComment(''):document.createTextNode(strings[lastIndex]),node);nodesToRemove.push(node);}else if(node.nodeType===8/* Node.COMMENT_NODE */&&node.nodeValue===marker){var _parent=node.parentNode;// Add a new marker node to be the startNode of the Part if any of the
// following are true:
//  * We don't have a previousSibling
//  * previousSibling is being removed (thus it's not the
//    `previousNode`)
//  * previousSibling is not a Text node
//
// TODO(justinfagnani): We should be able to use the previousNode here
// as the marker node and reduce the number of extra nodes we add to a
// template. See https://github.com/PolymerLabs/lit-html/issues/147
var previousSibling=node.previousSibling;if(previousSibling===null||previousSibling!==previousNode||previousSibling.nodeType!==Node.TEXT_NODE){_parent.insertBefore(document.createComment(''),node);}else{index--;}this.parts.push(new TemplatePart('node',index++));nodesToRemove.push(node);// If we don't have a nextSibling add a marker node.
// We don't have to check if the next node is going to be removed,
// because that node will induce a new marker if so.
if(node.nextSibling===null){_parent.insertBefore(document.createComment(''),node);}else{index--;}currentNode=previousNode;partIndex++;}}// Remove text binding nodes after the walk to not disturb the TreeWalker
for(var _i66=0;_i66<nodesToRemove.length;_i66++){var n=nodesToRemove[_i66];n.parentNode.removeChild(n);}};/**
   * Returns a value ready to be inserted into a Part from a user-provided value.
   *
   * If the user value is a directive, this invokes the directive with the given
   * part. If the value is null, it's converted to undefined to work better
   * with certain DOM APIs, like textContent.
   */_exports.Template=Template;var getValue=function getValue(part,value){// `null` as the value of a Text node will render the string 'null'
// so we convert it to undefined
if(isDirective(value)){value=value(part);return noChange;}return value===null?undefined:value;};_exports.getValue=getValue;var directive=function directive(f){f.__litDirective=true;return f;};_exports.directive=directive;var isDirective=function isDirective(o){return typeof o==='function'&&o.__litDirective===true;};/**
                                                                                * A sentinel value that signals that a value was handled by a directive and
                                                                                * should not be written to the DOM.
                                                                                */var noChange={};/**
                             * @deprecated Use `noChange` instead.
                             */_exports.directiveValue=_exports.noChange=noChange;var isPrimitiveValue=function isPrimitiveValue(value){return value===null||!(babelHelpers.typeof(value)==='object'||typeof value==='function');};var AttributePart=/*#__PURE__*/function(){function AttributePart(instance,element,name,strings){babelHelpers.classCallCheck(this,AttributePart);this.instance=instance;this.element=element;this.name=name;this.strings=strings;this.size=strings.length-1;this._previousValues=[];}babelHelpers.createClass(AttributePart,[{key:"_interpolate",value:function _interpolate(values,startIndex){var strings=this.strings;var l=strings.length-1;var text='';for(var _i67=0;_i67<l;_i67++){text+=strings[_i67];var v=getValue(this,values[startIndex+_i67]);if(v&&v!==noChange&&(Array.isArray(v)||typeof v!=='string'&&v[Symbol.iterator])){var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=v[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var t=_step.value;// TODO: we need to recursively call getValue into iterables...
text+=t;}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return!=null){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}}else{text+=v;}}return text+strings[l];}},{key:"_equalToPreviousValues",value:function _equalToPreviousValues(values,startIndex){for(var _i68=startIndex;_i68<startIndex+this.size;_i68++){if(this._previousValues[_i68]!==values[_i68]||!isPrimitiveValue(values[_i68])){return false;}}return true;}},{key:"setValue",value:function setValue(values,startIndex){if(this._equalToPreviousValues(values,startIndex)){return;}var s=this.strings;var value;if(s.length===2&&s[0]===''&&s[1]===''){// An expression that occupies the whole attribute value will leave
// leading and trailing empty strings.
value=getValue(this,values[startIndex]);if(Array.isArray(value)){value=value.join('');}}else{value=this._interpolate(values,startIndex);}if(value!==noChange){this.element.setAttribute(this.name,value);}this._previousValues=values;}}]);return AttributePart;}();_exports.AttributePart=AttributePart;var NodePart=/*#__PURE__*/function(){function NodePart(instance,startNode,endNode){babelHelpers.classCallCheck(this,NodePart);this.instance=instance;this.startNode=startNode;this.endNode=endNode;this._previousValue=undefined;}babelHelpers.createClass(NodePart,[{key:"setValue",value:function setValue(value){value=getValue(this,value);if(value===noChange){return;}if(isPrimitiveValue(value)){// Handle primitive values
// If the value didn't change, do nothing
if(value===this._previousValue){return;}this._setText(value);}else if(babelHelpers.instanceof(value,TemplateResult)){this._setTemplateResult(value);}else if(Array.isArray(value)||value[Symbol.iterator]){this._setIterable(value);}else if(babelHelpers.instanceof(value,Node)){this._setNode(value);}else if(value.then!==undefined){this._setPromise(value);}else{// Fallback, will render the string representation
this._setText(value);}}},{key:"_insert",value:function _insert(node){this.endNode.parentNode.insertBefore(node,this.endNode);}},{key:"_setNode",value:function _setNode(value){if(this._previousValue===value){return;}this.clear();this._insert(value);this._previousValue=value;}},{key:"_setText",value:function _setText(value){var node=this.startNode.nextSibling;value=value===undefined?'':value;if(node===this.endNode.previousSibling&&node.nodeType===Node.TEXT_NODE){// If we only have a single text node between the markers, we can just
// set its value, rather than replacing it.
// TODO(justinfagnani): Can we just check if _previousValue is
// primitive?
node.textContent=value;}else{this._setNode(document.createTextNode(value));}this._previousValue=value;}},{key:"_setTemplateResult",value:function _setTemplateResult(value){var template=this.instance._getTemplate(value);var instance;if(this._previousValue&&this._previousValue.template===template){instance=this._previousValue;}else{instance=new TemplateInstance(template,this.instance._partCallback,this.instance._getTemplate);this._setNode(instance._clone());this._previousValue=instance;}instance.update(value.values);}},{key:"_setIterable",value:function _setIterable(value){// For an Iterable, we create a new InstancePart per item, then set its
// value to the item. This is a little bit of overhead for every item in
// an Iterable, but it lets us recurse easily and efficiently update Arrays
// of TemplateResults that will be commonly returned from expressions like:
// array.map((i) => html`${i}`), by reusing existing TemplateInstances.
// If _previousValue is an array, then the previous render was of an
// iterable and _previousValue will contain the NodeParts from the previous
// render. If _previousValue is not an array, clear this part and make a new
// array for NodeParts.
if(!Array.isArray(this._previousValue)){this.clear();this._previousValue=[];}// Lets us keep track of how many items we stamped so we can clear leftover
// items from a previous render
var itemParts=this._previousValue;var partIndex=0;var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=value[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var item=_step2.value;// Try to reuse an existing part
var itemPart=itemParts[partIndex];// If no existing part, create a new one
if(itemPart===undefined){// If we're creating the first item part, it's startNode should be the
// container's startNode
var itemStart=this.startNode;// If we're not creating the first part, create a new separator marker
// node, and fix up the previous part's endNode to point to it
if(partIndex>0){var previousPart=itemParts[partIndex-1];itemStart=previousPart.endNode=document.createTextNode('');this._insert(itemStart);}itemPart=new NodePart(this.instance,itemStart,this.endNode);itemParts.push(itemPart);}itemPart.setValue(item);partIndex++;}}catch(err){_didIteratorError2=true;_iteratorError2=err;}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return!=null){_iterator2.return();}}finally{if(_didIteratorError2){throw _iteratorError2;}}}if(partIndex===0){this.clear();this._previousValue=undefined;}else if(partIndex<itemParts.length){var lastPart=itemParts[partIndex-1];// Truncate the parts array so _previousValue reflects the current state
itemParts.length=partIndex;this.clear(lastPart.endNode.previousSibling);lastPart.endNode=this.endNode;}}},{key:"_setPromise",value:function _setPromise(value){var _this34=this;this._previousValue=value;value.then(function(v){if(_this34._previousValue===value){_this34.setValue(v);}});}},{key:"clear",value:function clear(){var startNode=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.startNode;removeNodes(this.startNode.parentNode,startNode.nextSibling,this.endNode);}}]);return NodePart;}();_exports.NodePart=NodePart;var defaultPartCallback=function defaultPartCallback(instance,templatePart,node){if(templatePart.type==='attribute'){return new AttributePart(instance,node,templatePart.name,templatePart.strings);}else if(templatePart.type==='node'){return new NodePart(instance,node,node.nextSibling);}throw new Error("Unknown part type ".concat(templatePart.type));};/**
    * An instance of a `Template` that can be attached to the DOM and updated
    * with new values.
    */_exports.defaultPartCallback=defaultPartCallback;var TemplateInstance=/*#__PURE__*/function(){function TemplateInstance(template,partCallback,getTemplate){babelHelpers.classCallCheck(this,TemplateInstance);this._parts=[];this.template=template;this._partCallback=partCallback;this._getTemplate=getTemplate;}babelHelpers.createClass(TemplateInstance,[{key:"update",value:function update(values){var valueIndex=0;var _iteratorNormalCompletion3=true;var _didIteratorError3=false;var _iteratorError3=undefined;try{for(var _iterator3=this._parts[Symbol.iterator](),_step3;!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=true){var part=_step3.value;if(!part){valueIndex++;}else if(part.size===undefined){part.setValue(values[valueIndex]);valueIndex++;}else{part.setValue(values,valueIndex);valueIndex+=part.size;}}}catch(err){_didIteratorError3=true;_iteratorError3=err;}finally{try{if(!_iteratorNormalCompletion3&&_iterator3.return!=null){_iterator3.return();}}finally{if(_didIteratorError3){throw _iteratorError3;}}}}},{key:"_clone",value:function _clone(){// Clone the node, rather than importing it, to keep the fragment in the
// template's document. This leaves the fragment inert so custom elements
// won't upgrade until after the main document adopts the node.
var fragment=this.template.element.content.cloneNode(true);var parts=this.template.parts;if(parts.length>0){// Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
// null
var _walker=document.createTreeWalker(fragment,133/* NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT |
                                                             NodeFilter.SHOW_TEXT */,null,false);var _index=-1;for(var _i69=0;_i69<parts.length;_i69++){var part=parts[_i69];var partActive=isTemplatePartActive(part);// An inactive part has no coresponding Template node.
if(partActive){while(_index<part.index){_index++;_walker.nextNode();}}this._parts.push(partActive?this._partCallback(this,part,_walker.currentNode):undefined);}}return fragment;}}]);return TemplateInstance;}();/**
   * Reparents nodes, starting from `startNode` (inclusive) to `endNode`
   * (exclusive), into another container (could be the same container), before
   * `beforeNode`. If `beforeNode` is null, it appends the nodes to the
   * container.
   */_exports.TemplateInstance=TemplateInstance;var reparentNodes=function reparentNodes(container,start){var end=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var before=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var node=start;while(node!==end){var n=node.nextSibling;container.insertBefore(node,before);node=n;}};/**
    * Removes nodes, starting from `startNode` (inclusive) to `endNode`
    * (exclusive), from `container`.
    */_exports.reparentNodes=reparentNodes;var removeNodes=function removeNodes(container,startNode){var endNode=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var node=startNode;while(node!==endNode){var n=node.nextSibling;container.removeChild(node);node=n;}};_exports.removeNodes=removeNodes;var litHtml={templateCaches:templateCaches,html:html$1,svg:svg,TemplateResult:TemplateResult,SVGTemplateResult:SVGTemplateResult,defaultTemplateFactory:defaultTemplateFactory,render:render,TemplatePart:TemplatePart,isTemplatePartActive:isTemplatePartActive,Template:Template,getValue:getValue,directive:directive,noChange:noChange,directiveValue:noChange,AttributePart:AttributePart,NodePart:NodePart,defaultPartCallback:defaultPartCallback,TemplateInstance:TemplateInstance,reparentNodes:reparentNodes,removeNodes:removeNodes};_exports.$litHtml=litHtml;var walkerNodeFilter=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;/**
                                                                                                    * Removes the list of nodes from a Template safely. In addition to removing
                                                                                                    * nodes from the Template, the Template part indices are updated to match
                                                                                                    * the mutated Template DOM.
                                                                                                    *
                                                                                                    * As the template is walked the removal state is tracked and
                                                                                                    * part indices are adjusted as needed.
                                                                                                    *
                                                                                                    * div
                                                                                                    *   div#1 (remove) <-- start removing (removing node is div#1)
                                                                                                    *     div
                                                                                                    *       div#2 (remove)  <-- continue removing (removing node is still div#1)
                                                                                                    *         div
                                                                                                    * div <-- stop removing since previous sibling is the removing node (div#1, removed 4 nodes)
                                                                                                    */function removeNodesFromTemplate(template,nodesToRemove){var content=template.element.content,parts=template.parts;var walker=document.createTreeWalker(content,walkerNodeFilter,null,false);var partIndex=0;var part=parts[0];var nodeIndex=-1;var removeCount=0;var nodesToRemoveInTemplate=[];var currentRemovingNode=null;while(walker.nextNode()){nodeIndex++;var node=walker.currentNode;// End removal if stepped past the removing node
if(node.previousSibling===currentRemovingNode){currentRemovingNode=null;}// A node to remove was found in the template
if(nodesToRemove.has(node)){nodesToRemoveInTemplate.push(node);// Track node we're removing
if(currentRemovingNode===null){currentRemovingNode=node;}}// When removing, increment count by which to adjust subsequent part indices
if(currentRemovingNode!==null){removeCount++;}while(part!==undefined&&part.index===nodeIndex){// If part is in a removed node deactivate it by setting index to -1 or
// adjust the index as needed.
part.index=currentRemovingNode!==null?-1:part.index-removeCount;part=parts[++partIndex];}}nodesToRemoveInTemplate.forEach(function(n){return n.parentNode.removeChild(n);});}var countNodes=function countNodes(node){var count=1;var walker=document.createTreeWalker(node,walkerNodeFilter,null,false);while(walker.nextNode()){count++;}return count;};var nextActiveIndexInTemplateParts=function nextActiveIndexInTemplateParts(parts){var startIndex=arguments.length>1&&arguments[1]!==undefined?arguments[1]:-1;for(var _i70=startIndex+1;_i70<parts.length;_i70++){var part=parts[_i70];if(isTemplatePartActive(part)){return _i70;}}return-1;};/**
    * Inserts the given node into the Template, optionally before the given
    * refNode. In addition to inserting the node into the Template, the Template
    * part indices are updated to match the mutated Template DOM.
    */function insertNodeIntoTemplate(template,node){var refNode=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var content=template.element.content,parts=template.parts;// If there's no refNode, then put node at end of template.
// No part indices need to be shifted in this case.
if(refNode===null||refNode===undefined){content.appendChild(node);return;}var walker=document.createTreeWalker(content,walkerNodeFilter,null,false);var partIndex=nextActiveIndexInTemplateParts(parts);var insertCount=0;var walkerIndex=-1;while(walker.nextNode()){walkerIndex++;var walkerNode=walker.currentNode;if(walkerNode===refNode){refNode.parentNode.insertBefore(node,refNode);insertCount=countNodes(node);}while(partIndex!==-1&&parts[partIndex].index===walkerIndex){// If we've inserted the node, simply adjust all subsequent parts
if(insertCount>0){while(partIndex!==-1){parts[partIndex].index+=insertCount;partIndex=nextActiveIndexInTemplateParts(parts,partIndex);}return;}partIndex=nextActiveIndexInTemplateParts(parts,partIndex);}}}var modifyTemplate={removeNodesFromTemplate:removeNodesFromTemplate,insertNodeIntoTemplate:insertNodeIntoTemplate};_exports.$modifyTemplate=modifyTemplate;var getTemplateCacheKey=function getTemplateCacheKey(type,scopeName){return"".concat(type,"--").concat(scopeName);};/**
                                                                           * Template factory which scopes template DOM using ShadyCSS.
                                                                           * @param scopeName {string}
                                                                           */var shadyTemplateFactory=function shadyTemplateFactory(scopeName){return function(result){var cacheKey=getTemplateCacheKey(result.type,scopeName);var templateCache=templateCaches.get(cacheKey);if(templateCache===undefined){templateCache=new Map();templateCaches.set(cacheKey,templateCache);}var template=templateCache.get(result.strings);if(template===undefined){var element=result.getTemplateElement();if(babelHelpers.typeof(window.ShadyCSS)==='object'){window.ShadyCSS.prepareTemplateDom(element,scopeName);}template=new Template(result,element);templateCache.set(result.strings,template);}return template;};};var TEMPLATE_TYPES=['html','svg'];/**
                                         * Removes all style elements from Templates for the given scopeName.
                                         */function removeStylesFromLitTemplates(scopeName){TEMPLATE_TYPES.forEach(function(type){var templates=templateCaches.get(getTemplateCacheKey(type,scopeName));if(templates!==undefined){templates.forEach(function(template){var content=template.element.content;var styles=content.querySelectorAll('style');removeNodesFromTemplate(template,new Set(Array.from(styles)));});}});}var shadyRenderSet=new Set();/**
                                   * For the given scope name, ensures that ShadyCSS style scoping is performed.
                                   * This is done just once per scope name so the fragment and template cannot
                                   * be modified.
                                   * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
                                   * to be scoped and appended to the document
                                   * (2) removes style elements from all lit-html Templates for this scope name.
                                   *
                                   * Note, <style> elements can only be placed into templates for the
                                   * initial rendering of the scope. If <style> elements are included in templates
                                   * dynamically rendered to the scope (after the first scope render), they will
                                   * not be scoped and the <style> will be left in the template and rendered output.
                                   */var ensureStylesScoped=function ensureStylesScoped(fragment,template,scopeName){// only scope element template once per scope name
if(!shadyRenderSet.has(scopeName)){shadyRenderSet.add(scopeName);var styleTemplate=document.createElement('template');Array.from(fragment.querySelectorAll('style')).forEach(function(s){styleTemplate.content.appendChild(s);});window.ShadyCSS.prepareTemplateStyles(styleTemplate,scopeName);// Fix templates: note the expectation here is that the given `fragment`
// has been generated from the given `template` which contains
// the set of templates rendered into this scope.
// It is only from this set of initial templates from which styles
// will be scoped and removed.
removeStylesFromLitTemplates(scopeName);// ApplyShim case
if(window.ShadyCSS.nativeShadow){var _style7=styleTemplate.content.querySelector('style');if(_style7!==null){// Insert style into rendered fragment
fragment.insertBefore(_style7,fragment.firstChild);// Insert into lit-template (for subsequent renders)
insertNodeIntoTemplate(template,_style7.cloneNode(true),template.element.content.firstChild);}}}};// NOTE: We're copying code from lit-html's `render` method here.
// We're doing this explicitly because the API for rendering templates is likely
// to change in the near term.
function render$1(result,container,scopeName){var templateFactory=shadyTemplateFactory(scopeName);var template=templateFactory(result);var instance=container.__templateInstance;// Repeat render, just call update()
if(instance!==undefined&&instance.template===template&&instance._partCallback===result.partCallback){instance.update(result.values);return;}// First render, create a new TemplateInstance and append it
instance=new TemplateInstance(template,result.partCallback,templateFactory);container.__templateInstance=instance;var fragment=instance._clone();instance.update(result.values);var host=babelHelpers.instanceof(container,ShadowRoot)?container.host:undefined;// If there's a shadow host, do ShadyCSS scoping...
if(host!==undefined&&babelHelpers.typeof(window.ShadyCSS)==='object'){ensureStylesScoped(fragment,template,scopeName);window.ShadyCSS.styleElement(host);}removeNodes(container,container.firstChild);container.appendChild(fragment);}var shadyRender={render:render$1,html:html$1,svg:svg,TemplateResult:TemplateResult};_exports.$shadyRender=shadyRender;var html$2=function html$2(strings){for(var _len12=arguments.length,values=new Array(_len12>1?_len12-1:0),_key12=1;_key12<_len12;_key12++){values[_key12-1]=arguments[_key12];}return new TemplateResult(strings,values,'html',extendedPartCallback);};/**
                                                                                                                * Interprets a template literal as a lit-extended SVG template.
                                                                                                                */_exports.html$4=_exports.html=html$2;var svg$1=function svg$1(strings){for(var _len13=arguments.length,values=new Array(_len13>1?_len13-1:0),_key13=1;_key13<_len13;_key13++){values[_key13-1]=arguments[_key13];}return new SVGTemplateResult(strings,values,'svg',extendedPartCallback);};/**
                                                                                                                 * A PartCallback which allows templates to set properties and declarative
                                                                                                                 * event handlers.
                                                                                                                 *
                                                                                                                 * Properties are set by default, instead of attributes. Attribute names in
                                                                                                                 * lit-html templates preserve case, so properties are case sensitive. If an
                                                                                                                 * expression takes up an entire attribute value, then the property is set to
                                                                                                                 * that value. If an expression is interpolated with a string or other
                                                                                                                 * expressions then the property is set to the string result of the
                                                                                                                 * interpolation.
                                                                                                                 *
                                                                                                                 * To set an attribute instead of a property, append a `$` suffix to the
                                                                                                                 * attribute name.
                                                                                                                 *
                                                                                                                 * Example:
                                                                                                                 *
                                                                                                                 *     html`<button class$="primary">Buy Now</button>`
                                                                                                                 *
                                                                                                                 * To set an event handler, prefix the attribute name with `on-`:
                                                                                                                 *
                                                                                                                 * Example:
                                                                                                                 *
                                                                                                                 *     html`<button on-click=${(e)=> this.onClickHandler(e)}>Buy Now</button>`
                                                                                                                 *
                                                                                                                 */_exports.svg$1=_exports.svg=svg$1;var extendedPartCallback=function extendedPartCallback(instance,templatePart,node){if(templatePart.type==='attribute'){if(templatePart.rawName.substr(0,3)==='on-'){var eventName=templatePart.rawName.slice(3);return new EventPart(instance,node,eventName);}var lastChar=templatePart.name.substr(templatePart.name.length-1);if(lastChar==='$'){var name=templatePart.name.slice(0,-1);return new AttributePart(instance,node,name,templatePart.strings);}if(lastChar==='?'){var _name=templatePart.name.slice(0,-1);return new BooleanAttributePart(instance,node,_name,templatePart.strings);}return new PropertyPart(instance,node,templatePart.rawName,templatePart.strings);}return defaultPartCallback(instance,templatePart,node);};/**
    * Implements a boolean attribute, roughly as defined in the HTML
    * specification.
    *
    * If the value is truthy, then the attribute is present with a value of
    * ''. If the value is falsey, the attribute is removed.
    */_exports.extendedPartCallback=extendedPartCallback;var BooleanAttributePart=/*#__PURE__*/function(_AttributePart){babelHelpers.inherits(BooleanAttributePart,_AttributePart);function BooleanAttributePart(){babelHelpers.classCallCheck(this,BooleanAttributePart);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(BooleanAttributePart).apply(this,arguments));}babelHelpers.createClass(BooleanAttributePart,[{key:"setValue",value:function setValue(values,startIndex){var s=this.strings;if(s.length===2&&s[0]===''&&s[1]===''){var value=getValue(this,values[startIndex]);if(value===noChange){return;}if(value){this.element.setAttribute(this.name,'');}else{this.element.removeAttribute(this.name);}}else{throw new Error('boolean attributes can only contain a single expression');}}}]);return BooleanAttributePart;}(AttributePart);_exports.BooleanAttributePart=BooleanAttributePart;var PropertyPart=/*#__PURE__*/function(_AttributePart2){babelHelpers.inherits(PropertyPart,_AttributePart2);function PropertyPart(){babelHelpers.classCallCheck(this,PropertyPart);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PropertyPart).apply(this,arguments));}babelHelpers.createClass(PropertyPart,[{key:"setValue",value:function setValue(values,startIndex){var s=this.strings;var value;if(this._equalToPreviousValues(values,startIndex)){return;}if(s.length===2&&s[0]===''&&s[1]===''){// An expression that occupies the whole attribute value will leave
// leading and trailing empty strings.
value=getValue(this,values[startIndex]);}else{// Interpolation, so interpolate
value=this._interpolate(values,startIndex);}if(value!==noChange){this.element[this.name]=value;}this._previousValues=values;}}]);return PropertyPart;}(AttributePart);_exports.PropertyPart=PropertyPart;var EventPart=/*#__PURE__*/function(){function EventPart(instance,element,eventName){babelHelpers.classCallCheck(this,EventPart);this.instance=instance;this.element=element;this.eventName=eventName;}babelHelpers.createClass(EventPart,[{key:"setValue",value:function setValue(value){var listener=getValue(this,value);if(listener===this._listener){return;}if(listener==null){this.element.removeEventListener(this.eventName,this);}else if(this._listener==null){this.element.addEventListener(this.eventName,this);}this._listener=listener;}},{key:"handleEvent",value:function handleEvent(event){if(typeof this._listener==='function'){this._listener.call(this.element,event);}else if(typeof this._listener.handleEvent==='function'){this._listener.handleEvent(event);}}}]);return EventPart;}();_exports.EventPart=EventPart;var litExtended={html:html$2,svg:svg$1,extendedPartCallback:extendedPartCallback,BooleanAttributePart:BooleanAttributePart,PropertyPart:PropertyPart,EventPart:EventPart,render:render};_exports.$litExtended=litExtended;function renderAttributes(element,attrInfo){for(var a in attrInfo){var v=attrInfo[a]===true?'':attrInfo[a];if(v||v===''||v===0){if(element.getAttribute(a)!==v){element.setAttribute(a,String(v));}}else if(element.hasAttribute(a)){element.removeAttribute(a);}}}/**
   * Returns a string of css class names formed by taking the properties
   * in the `classInfo` object and appending the property name to the string of
   * class names if the property value is truthy.
   * @param classInfo
   */function classString(classInfo){var o=[];for(var name in classInfo){var v=classInfo[name];if(v){o.push(name);}}return o.join(' ');}/**
   * Returns a css style string formed by taking the properties in the `styleInfo`
   * object and appending the property name (dash-cased) colon the
   * property value. Properties are separated by a semi-colon.
   * @param styleInfo
   */function styleString(styleInfo){var o=[];for(var name in styleInfo){var v=styleInfo[name];if(v||v===0){o.push("".concat(camelToDashCase(name),": ").concat(v));}}return o.join('; ');}var LitElement=/*#__PURE__*/function(_PropertiesMixin){babelHelpers.inherits(LitElement,_PropertiesMixin);function LitElement(){var _this35;babelHelpers.classCallCheck(this,LitElement);_this35=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(LitElement).apply(this,arguments));_this35.__renderComplete=null;_this35.__resolveRenderComplete=null;_this35.__isInvalid=false;_this35.__isChanging=false;return _this35;}/**
     * Override which sets up element rendering by calling* `_createRoot`
     * and `_firstRendered`.
     */babelHelpers.createClass(LitElement,[{key:"ready",value:function ready(){this._root=this._createRoot();babelHelpers.get(babelHelpers.getPrototypeOf(LitElement.prototype),"ready",this).call(this);this._firstRendered();}},{key:"connectedCallback",value:function connectedCallback(){if(window.ShadyCSS&&this._root){window.ShadyCSS.styleElement(this);}babelHelpers.get(babelHelpers.getPrototypeOf(LitElement.prototype),"connectedCallback",this).call(this);}/**
     * Called after the element DOM is rendered for the first time.
     * Implement to perform tasks after first rendering like capturing a
     * reference to a static node which must be directly manipulated.
     * This should not be commonly needed. For tasks which should be performed
     * before first render, use the element constructor.
     */},{key:"_firstRendered",value:function _firstRendered(){}/**
                       * Implement to customize where the element's template is rendered by
                       * returning an element into which to render. By default this creates
                       * a shadowRoot for the element. To render into the element's childNodes,
                       * return `this`.
                       * @returns {Element|DocumentFragment} Returns a node into which to render.
                       */},{key:"_createRoot",value:function _createRoot(){return this.attachShadow({mode:'open'});}/**
     * Override which returns the value of `_shouldRender` which users
     * should implement to control rendering. If this method returns false,
     * _propertiesChanged will not be called and no rendering will occur even
     * if property values change or `requestRender` is called.
     * @param _props Current element properties
     * @param _changedProps Changing element properties
     * @param _prevProps Previous element properties
     * @returns {boolean} Default implementation always returns true.
     */},{key:"_shouldPropertiesChange",value:function _shouldPropertiesChange(_props,_changedProps,_prevProps){var shouldRender=this._shouldRender(_props,_changedProps,_prevProps);if(!shouldRender&&this.__resolveRenderComplete){this.__resolveRenderComplete(false);}return shouldRender;}/**
     * Implement to control if rendering should occur when property values
     * change or `requestRender` is called. By default, this method always
     * returns true, but this can be customized as an optimization to avoid
     * rendering work when changes occur which should not be rendered.
     * @param _props Current element properties
     * @param _changedProps Changing element properties
     * @param _prevProps Previous element properties
     * @returns {boolean} Default implementation always returns true.
     */},{key:"_shouldRender",value:function _shouldRender(_props,_changedProps,_prevProps){return true;}/**
     * Override which performs element rendering by calling
     * `_render`, `_applyRender`, and finally `_didRender`.
     * @param props Current element properties
     * @param changedProps Changing element properties
     * @param prevProps Previous element properties
     */},{key:"_propertiesChanged",value:function _propertiesChanged(props,changedProps,prevProps){babelHelpers.get(babelHelpers.getPrototypeOf(LitElement.prototype),"_propertiesChanged",this).call(this,props,changedProps,prevProps);var result=this._render(props);if(result&&this._root!==undefined){this._applyRender(result,this._root);}this._didRender(props,changedProps,prevProps);if(this.__resolveRenderComplete){this.__resolveRenderComplete(true);}}},{key:"_flushProperties",value:function _flushProperties(){this.__isChanging=true;this.__isInvalid=false;babelHelpers.get(babelHelpers.getPrototypeOf(LitElement.prototype),"_flushProperties",this).call(this);this.__isChanging=false;}/**
     * Override which warns when a user attempts to change a property during
     * the rendering lifecycle. This is an anti-pattern and should be avoided.
     * @param property {string}
     * @param value {any}
     * @param old {any}
     */ // tslint:disable-next-line no-any
},{key:"_shouldPropertyChange",value:function _shouldPropertyChange(property,value,old){var change=babelHelpers.get(babelHelpers.getPrototypeOf(LitElement.prototype),"_shouldPropertyChange",this).call(this,property,value,old);if(change&&this.__isChanging){console.trace("Setting properties in response to other properties changing "+"considered harmful. Setting '".concat(property,"' from ")+"'".concat(this._getProperty(property),"' to '").concat(value,"'."));}return change;}/**
     * Implement to describe the DOM which should be rendered in the element.
     * Ideally, the implementation is a pure function using only props to describe
     * the element template. The implementation must return a `lit-html`
     * TemplateResult. By default this template is rendered into the element's
     * shadowRoot. This can be customized by implementing `_createRoot`. This
     * method must be implemented.
     * @param {*} _props Current element properties
     * @returns {TemplateResult} Must return a lit-html TemplateResult.
     */},{key:"_render",value:function _render(_props){throw new Error('_render() not implemented');}/**
     * Renders the given lit-html template `result` into the given `node`.
     * Implement to customize the way rendering is applied. This is should not
     * typically be needed and is provided for advanced use cases.
     * @param result {TemplateResult} `lit-html` template result to render
     * @param node {Element|DocumentFragment} node into which to render
     */},{key:"_applyRender",value:function _applyRender(result,node){render$1(result,node,this.localName);}/**
     * Called after element DOM has been rendered. Implement to
     * directly control rendered DOM. Typically this is not needed as `lit-html`
     * can be used in the `_render` method to set properties, attributes, and
     * event listeners. However, it is sometimes useful for calling methods on
     * rendered elements, like calling `focus()` on an element to focus it.
     * @param _props Current element properties
     * @param _changedProps Changing element properties
     * @param _prevProps Previous element properties
     */},{key:"_didRender",value:function _didRender(_props,_changedProps,_prevProps){}/**
                                                    * Call to request the element to asynchronously re-render regardless
                                                    * of whether or not any property changes are pending.
                                                    */},{key:"requestRender",value:function requestRender(){this._invalidateProperties();}/**
     * Override which provides tracking of invalidated state.
     */},{key:"_invalidateProperties",value:function _invalidateProperties(){this.__isInvalid=true;babelHelpers.get(babelHelpers.getPrototypeOf(LitElement.prototype),"_invalidateProperties",this).call(this);}/**
     * Returns a promise which resolves after the element next renders.
     * The promise resolves to `true` if the element rendered and `false` if the
     * element did not render.
     * This is useful when users (e.g. tests) need to react to the rendered state
     * of the element after a change is made.
     * This can also be useful in event handlers if it is desireable to wait
     * to send an event until after rendering. If possible implement the
     * `_didRender` method to directly respond to rendering within the
     * rendering lifecycle.
     */},{key:"renderComplete",get:function get(){var _this36=this;if(!this.__renderComplete){this.__renderComplete=new Promise(function(resolve){_this36.__resolveRenderComplete=function(value){_this36.__resolveRenderComplete=_this36.__renderComplete=null;resolve(value);};});if(!this.__isInvalid&&this.__resolveRenderComplete){Promise.resolve().then(function(){return _this36.__resolveRenderComplete(false);});}}return this.__renderComplete;}}]);return LitElement;}(PropertiesMixin(HTMLElement));_exports.LitElement=LitElement;var litElement={renderAttributes:renderAttributes,classString:classString,styleString:styleString,LitElement:LitElement,html:html$2,svg:svg$1};_exports.$litElement=litElement;var Utility={distance:function distance(x1,y1,x2,y2){var xDelta=x1-x2;var yDelta=y1-y2;return Math.sqrt(xDelta*xDelta+yDelta*yDelta);},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};/**
    * @param {HTMLElement} element
    * @constructor
    */function ElementMetrics(element){this.element=element;this.width=this.boundingRect.width;this.height=this.boundingRect.height;this.size=Math.max(this.width,this.height);}ElementMetrics.prototype={get boundingRect(){return this.element.getBoundingClientRect();},furthestCornerDistanceFrom:function furthestCornerDistanceFrom(x,y){var topLeft=Utility.distance(x,y,0,0);var topRight=Utility.distance(x,y,this.width,0);var bottomLeft=Utility.distance(x,y,0,this.height);var bottomRight=Utility.distance(x,y,this.width,this.height);return Math.max(topLeft,topRight,bottomLeft,bottomRight);}};/**
    * @param {HTMLElement} element
    * @constructor
    */function Ripple(element){this.element=element;this.color=window.getComputedStyle(element).color;this.wave=document.createElement('div');this.waveContainer=document.createElement('div');this.wave.style.backgroundColor=this.color;this.wave.classList.add('wave');this.waveContainer.classList.add('wave-container');dom(this.waveContainer).appendChild(this.wave);this.resetInteractionState();}Ripple.MAX_RADIUS=300;Ripple.prototype={get recenters(){return this.element.recenters;},get center(){return this.element.center;},get mouseDownElapsed(){var elapsed;if(!this.mouseDownStart){return 0;}elapsed=Utility.now()-this.mouseDownStart;if(this.mouseUpStart){elapsed-=this.mouseUpElapsed;}return elapsed;},get mouseUpElapsed(){return this.mouseUpStart?Utility.now()-this.mouseUpStart:0;},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1000;},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1000;},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds;},get initialOpacity(){return this.element.initialOpacity;},get opacityDecayVelocity(){return this.element.opacityDecayVelocity;},get radius(){var width2=this.containerMetrics.width*this.containerMetrics.width;var height2=this.containerMetrics.height*this.containerMetrics.height;var waveRadius=Math.min(Math.sqrt(width2+height2),Ripple.MAX_RADIUS)*1.1+5;var duration=1.1-0.2*(waveRadius/Ripple.MAX_RADIUS);var timeNow=this.mouseInteractionSeconds/duration;var size=waveRadius*(1-Math.pow(80,-timeNow));return Math.abs(size);},get opacity(){if(!this.mouseUpStart){return this.initialOpacity;}return Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity);},get outerOpacity(){// Linear increase in background opacity, capped at the opacity
// of the wavefront (waveOpacity).
var outerOpacity=this.mouseUpElapsedSeconds*0.3;var waveOpacity=this.opacity;return Math.max(0,Math.min(outerOpacity,waveOpacity));},get isOpacityFullyDecayed(){return this.opacity<0.01&&this.radius>=Math.min(this.maxRadius,Ripple.MAX_RADIUS);},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,Ripple.MAX_RADIUS);},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius;},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2));},get xNow(){if(this.xEnd){return this.xStart+this.translationFraction*(this.xEnd-this.xStart);}return this.xStart;},get yNow(){if(this.yEnd){return this.yStart+this.translationFraction*(this.yEnd-this.yStart);}return this.yStart;},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart;},resetInteractionState:function resetInteractionState(){this.maxRadius=0;this.mouseDownStart=0;this.mouseUpStart=0;this.xStart=0;this.yStart=0;this.xEnd=0;this.yEnd=0;this.slideDistance=0;this.containerMetrics=new ElementMetrics(this.element);},draw:function draw(){var scale;var dx;var dy;this.wave.style.opacity=this.opacity;scale=this.radius/(this.containerMetrics.size/2);dx=this.xNow-this.containerMetrics.width/2;dy=this.yNow-this.containerMetrics.height/2;// 2d transform for safari because of border-radius and overflow:hidden
// clipping bug. https://bugs.webkit.org/show_bug.cgi?id=98538
this.waveContainer.style.webkitTransform='translate('+dx+'px, '+dy+'px)';this.waveContainer.style.transform='translate3d('+dx+'px, '+dy+'px, 0)';this.wave.style.webkitTransform='scale('+scale+','+scale+')';this.wave.style.transform='scale3d('+scale+','+scale+',1)';},/** @param {Event=} event */downAction:function downAction(event){var xCenter=this.containerMetrics.width/2;var yCenter=this.containerMetrics.height/2;this.resetInteractionState();this.mouseDownStart=Utility.now();if(this.center){this.xStart=xCenter;this.yStart=yCenter;this.slideDistance=Utility.distance(this.xStart,this.yStart,this.xEnd,this.yEnd);}else{this.xStart=event?event.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2;this.yStart=event?event.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2;}if(this.recenters){this.xEnd=xCenter;this.yEnd=yCenter;this.slideDistance=Utility.distance(this.xStart,this.yStart,this.xEnd,this.yEnd);}this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart);this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+'px';this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+'px';this.waveContainer.style.width=this.containerMetrics.size+'px';this.waveContainer.style.height=this.containerMetrics.size+'px';},/** @param {Event=} event */upAction:function upAction(event){if(!this.isMouseDown){return;}this.mouseUpStart=Utility.now();},remove:function remove(){dom(this.waveContainer.parentNode).removeChild(this.waveContainer);}};/**
   Material design: [Surface
   reaction](https://www.google.com/design/spec/animation/responsive-interaction.html#responsive-interaction-surface-reaction)
   
   `paper-ripple` provides a visual effect that other paper elements can
   use to simulate a rippling effect emanating from the point of contact.  The
   effect can be visualized as a concentric circle with motion.
   
   Example:
   
       <div style="position:relative">
         <paper-ripple></paper-ripple>
       </div>
   
   Note, it's important that the parent container of the ripple be relative
   position, otherwise the ripple will emanate outside of the desired container.
   
   `paper-ripple` listens to "mousedown" and "mouseup" events so it would display
   ripple effect when touches on it.  You can also defeat the default behavior and
   manually route the down and up actions to the ripple element.  Note that it is
   important if you call `downAction()` you will have to make sure to call
   `upAction()` so that `paper-ripple` would end the animation loop.
   
   Example:
   
       <paper-ripple id="ripple" style="pointer-events: none;"></paper-ripple>
       ...
       downAction: function(e) {
         this.$.ripple.downAction(e.detail);
       },
       upAction: function(e) {
         this.$.ripple.upAction();
       }
   
   Styling ripple effect:
   
     Use CSS color property to style the ripple:
   
       paper-ripple {
         color: #4285f4;
       }
   
     Note that CSS color property is inherited so it is not required to set it on
     the `paper-ripple` element directly.
   
   By default, the ripple is centered on the point of contact.  Apply the
   `recenters` attribute to have the ripple grow toward the center of its
   container.
   
       <paper-ripple recenters></paper-ripple>
   
   You can also  center the ripple inside its container from the start.
   
       <paper-ripple center></paper-ripple>
   
   Apply `circle` class to make the rippling effect within a circle.
   
       <paper-ripple class="circle"></paper-ripple>
   
   @group Paper Elements
   @element paper-ripple
   @hero hero.svg
   @demo demo/index.html
   */Polymer$1({_template:html(_templateObject12_7f57aa202bd911e99390d3b784e8dc1a()),is:'paper-ripple',behaviors:[IronA11yKeysBehavior],properties:{/**
     * The initial opacity set on the wave.
     *
     * @attribute initialOpacity
     * @type number
     * @default 0.25
     */initialOpacity:{type:Number,value:0.25},/**
     * How fast (opacity per second) the wave fades out.
     *
     * @attribute opacityDecayVelocity
     * @type number
     * @default 0.8
     */opacityDecayVelocity:{type:Number,value:0.8},/**
     * If true, ripples will exhibit a gravitational pull towards
     * the center of their container as they fade away.
     *
     * @attribute recenters
     * @type boolean
     * @default false
     */recenters:{type:Boolean,value:false},/**
     * If true, ripples will center inside its container
     *
     * @attribute recenters
     * @type boolean
     * @default false
     */center:{type:Boolean,value:false},/**
     * A list of the visual ripples.
     *
     * @attribute ripples
     * @type Array
     * @default []
     */ripples:{type:Array,value:function value(){return[];}},/**
     * True when there are visible ripples animating within the
     * element.
     */animating:{type:Boolean,readOnly:true,reflectToAttribute:true,value:false},/**
     * If true, the ripple will remain in the "down" state until `holdDown`
     * is set to false again.
     */holdDown:{type:Boolean,value:false,observer:'_holdDownChanged'},/**
     * If true, the ripple will not generate a ripple effect
     * via pointer interaction.
     * Calling ripple's imperative api like `simulatedRipple` will
     * still generate the ripple effect.
     */noink:{type:Boolean,value:false},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function value(){return this.animate.bind(this);}}},get target(){return this.keyEventTarget;},/**
   * @type {!Object}
   */keyBindings:{'enter:keydown':'_onEnterKeydown','space:keydown':'_onSpaceKeydown','space:keyup':'_onSpaceKeyup'},attached:function attached(){// Set up a11yKeysBehavior to listen to key events on the target,
// so that space and enter activate the ripple even if the target doesn't
// handle key events. The key handlers deal with `noink` themselves.
if(this.parentNode.nodeType==11){// DOCUMENT_FRAGMENT_NODE
this.keyEventTarget=dom(this).getOwnerRoot().host;}else{this.keyEventTarget=this.parentNode;}var keyEventTarget=/** @type {!EventTarget} */this.keyEventTarget;this.listen(keyEventTarget,'up','uiUpAction');this.listen(keyEventTarget,'down','uiDownAction');},detached:function detached(){this.unlisten(this.keyEventTarget,'up','uiUpAction');this.unlisten(this.keyEventTarget,'down','uiDownAction');this.keyEventTarget=null;},get shouldKeepAnimating(){for(var index=0;index<this.ripples.length;++index){if(!this.ripples[index].isAnimationComplete){return true;}}return false;},simulatedRipple:function simulatedRipple(){this.downAction(null);// Please see polymer/polymer#1305
this.async(function(){this.upAction();},1);},/**
   * Provokes a ripple down effect via a UI event,
   * respecting the `noink` property.
   * @param {Event=} event
   */uiDownAction:function uiDownAction(event){if(!this.noink){this.downAction(event);}},/**
   * Provokes a ripple down effect via a UI event,
   * *not* respecting the `noink` property.
   * @param {Event=} event
   */downAction:function downAction(event){if(this.holdDown&&this.ripples.length>0){return;}var ripple=this.addRipple();ripple.downAction(event);if(!this._animating){this._animating=true;this.animate();}},/**
   * Provokes a ripple up effect via a UI event,
   * respecting the `noink` property.
   * @param {Event=} event
   */uiUpAction:function uiUpAction(event){if(!this.noink){this.upAction(event);}},/**
   * Provokes a ripple up effect via a UI event,
   * *not* respecting the `noink` property.
   * @param {Event=} event
   */upAction:function upAction(event){if(this.holdDown){return;}this.ripples.forEach(function(ripple){ripple.upAction(event);});this._animating=true;this.animate();},onAnimationComplete:function onAnimationComplete(){this._animating=false;this.$.background.style.backgroundColor=null;this.fire('transitionend');},addRipple:function addRipple(){var ripple=new Ripple(this);dom(this.$.waves).appendChild(ripple.waveContainer);this.$.background.style.backgroundColor=ripple.color;this.ripples.push(ripple);this._setAnimating(true);return ripple;},removeRipple:function removeRipple(ripple){var rippleIndex=this.ripples.indexOf(ripple);if(rippleIndex<0){return;}this.ripples.splice(rippleIndex,1);ripple.remove();if(!this.ripples.length){this._setAnimating(false);}},/**
   * Deprecated. Please use animateRipple() instead.
   *
   * This method name conflicts with Element#animate().
   * https://developer.mozilla.org/en-US/docs/Web/API/Element/animate.
   *
   * @suppress {checkTypes}
   */animate:function animate(){if(!this._animating){return;}var index;var ripple;for(index=0;index<this.ripples.length;++index){ripple=this.ripples[index];ripple.draw();this.$.background.style.opacity=ripple.outerOpacity;if(ripple.isOpacityFullyDecayed&&!ripple.isRestingAtMaxRadius){this.removeRipple(ripple);}}if(!this.shouldKeepAnimating&&this.ripples.length===0){this.onAnimationComplete();}else{window.requestAnimationFrame(this._boundAnimate);}},/**
   * An alias for animate() whose name does not conflict with the platform
   * Element.animate() method.
   */animateRipple:function animateRipple(){return this.animate();},_onEnterKeydown:function _onEnterKeydown(){this.uiDownAction();this.async(this.uiUpAction,1);},_onSpaceKeydown:function _onSpaceKeydown(){this.uiDownAction();},_onSpaceKeyup:function _onSpaceKeyup(){this.uiUpAction();},// note: holdDown does not respect noink since it can be a focus based
// effect.
_holdDownChanged:function _holdDownChanged(newVal,oldVal){if(oldVal===undefined){return;}if(newVal){this.downAction();}else{this.upAction();}}/**
    Fired when the animation finishes.
    This is useful if you want to wait until
    the ripple animation finishes to perform some action.
     @event transitionend
    @param {{node: Object}} detail Contains the animated node.
    */});var PaperRippleBehavior={properties:{/**
     * If true, the element will not produce a ripple effect when interacted
     * with via the pointer.
     */noink:{type:Boolean,observer:'_noinkChanged'},/**
     * @type {Element|undefined}
     */_rippleContainer:{type:Object}},/**
   * Ensures a `<paper-ripple>` element is available when the element is
   * focused.
   */_buttonStateChanged:function _buttonStateChanged(){if(this.focused){this.ensureRipple();}},/**
   * In addition to the functionality provided in `IronButtonState`, ensures
   * a ripple effect is created when the element is in a `pressed` state.
   */_downHandler:function _downHandler(event){IronButtonStateImpl._downHandler.call(this,event);if(this.pressed){this.ensureRipple(event);}},/**
   * Ensures this element contains a ripple effect. For startup efficiency
   * the ripple effect is dynamically on demand when needed.
   * @param {!Event=} optTriggeringEvent (optional) event that triggered the
   * ripple.
   */ensureRipple:function ensureRipple(optTriggeringEvent){if(!this.hasRipple()){this._ripple=this._createRipple();this._ripple.noink=this.noink;var rippleContainer=this._rippleContainer||this.root;if(rippleContainer){dom(rippleContainer).appendChild(this._ripple);}if(optTriggeringEvent){// Check if the event happened inside of the ripple container
// Fall back to host instead of the root because distributed text
// nodes are not valid event targets
var domContainer=dom(this._rippleContainer||this);var target=dom(optTriggeringEvent).rootTarget;if(domContainer.deepContains(/** @type {Node} */target)){this._ripple.uiDownAction(optTriggeringEvent);}}}},/**
   * Returns the `<paper-ripple>` element used by this element to create
   * ripple effects. The element's ripple is created on demand, when
   * necessary, and calling this method will force the
   * ripple to be created.
   */getRipple:function getRipple(){this.ensureRipple();return this._ripple;},/**
   * Returns true if this element currently contains a ripple effect.
   * @return {boolean}
   */hasRipple:function hasRipple(){return Boolean(this._ripple);},/**
   * Create the element's ripple effect via creating a `<paper-ripple>`.
   * Override this method to customize the ripple element.
   * @return {!PaperRippleElement} Returns a `<paper-ripple>` element.
   */_createRipple:function _createRipple(){var element=/** @type {!PaperRippleElement} */document.createElement('paper-ripple');return element;},_noinkChanged:function _noinkChanged(noink){if(this.hasRipple()){this._ripple.noink=noink;}}};_exports.PaperRippleBehavior=PaperRippleBehavior;var paperRippleBehavior={PaperRippleBehavior:PaperRippleBehavior};_exports.$paperRippleBehavior=paperRippleBehavior;var PaperInkyFocusBehaviorImpl={observers:['_focusedChanged(receivedFocusFromKeyboard)'],_focusedChanged:function _focusedChanged(receivedFocusFromKeyboard){if(receivedFocusFromKeyboard){this.ensureRipple();}if(this.hasRipple()){this._ripple.holdDown=receivedFocusFromKeyboard;}},_createRipple:function _createRipple(){var ripple=PaperRippleBehavior._createRipple();ripple.id='ink';ripple.setAttribute('center','');ripple.classList.add('circle');return ripple;}};/** @polymerBehavior */_exports.PaperInkyFocusBehaviorImpl=PaperInkyFocusBehaviorImpl;var PaperInkyFocusBehavior=[IronButtonState,IronControlState,PaperRippleBehavior,PaperInkyFocusBehaviorImpl];_exports.PaperInkyFocusBehavior=PaperInkyFocusBehavior;var paperInkyFocusBehavior={PaperInkyFocusBehaviorImpl:PaperInkyFocusBehaviorImpl,PaperInkyFocusBehavior:PaperInkyFocusBehavior};_exports.$paperInkyFocusBehavior=paperInkyFocusBehavior;var template$2=html(_templateObject13_7f57aa202bd911e99390d3b784e8dc1a());template$2.setAttribute('style','display: none;');document.head.appendChild(template$2.content);var template$3=html(_templateObject14_7f57aa202bd911e99390d3b784e8dc1a());template$3.setAttribute('style','display: none;');document.head.appendChild(template$3.content);Polymer$1({is:'paper-icon-button',_template:html(_templateObject15_7f57aa202bd911e99390d3b784e8dc1a()),hostAttributes:{role:'button',tabindex:'0'},behaviors:[PaperInkyFocusBehavior],registered:function registered(){this._template.setAttribute('strip-whitespace','');},properties:{/**
     * The URL of an image for the icon. If the src property is specified,
     * the icon property should not be.
     */src:{type:String},/**
     * Specifies the icon name or index in the set of icons available in
     * the icon's icon set. If the icon property is specified,
     * the src property should not be.
     */icon:{type:String},/**
     * Specifies the alternate text for the button, for accessibility.
     */alt:{type:String,observer:'_altChanged'}},_altChanged:function _altChanged(newValue,oldValue){var label=this.getAttribute('aria-label');// Don't stomp over a user-set aria-label.
if(!label||oldValue==label){this.setAttribute('aria-label',newValue);}}});var PaperSpinnerBehavior={properties:{/**
     * Displays the spinner.
     */active:{type:Boolean,value:false,reflectToAttribute:true,observer:'__activeChanged'},/**
     * Alternative text content for accessibility support.
     * If alt is present, it will add an aria-label whose content matches alt
     * when active. If alt is not present, it will default to 'loading' as the
     * alt value.
     */alt:{type:String,value:'loading',observer:'__altChanged'},__coolingDown:{type:Boolean,value:false}},__computeContainerClasses:function __computeContainerClasses(active,coolingDown){return[active||coolingDown?'active':'',coolingDown?'cooldown':''].join(' ');},__activeChanged:function __activeChanged(active,old){this.__setAriaHidden(!active);this.__coolingDown=!active&&old;},__altChanged:function __altChanged(alt){// user-provided `aria-label` takes precedence over prototype default
if(alt==='loading'){this.alt=this.getAttribute('aria-label')||alt;}else{this.__setAriaHidden(alt==='');this.setAttribute('aria-label',alt);}},__setAriaHidden:function __setAriaHidden(hidden){var attr='aria-hidden';if(hidden){this.setAttribute(attr,'true');}else{this.removeAttribute(attr);}},__reset:function __reset(){this.active=false;this.__coolingDown=false;}};_exports.PaperSpinnerBehavior=PaperSpinnerBehavior;var paperSpinnerBehavior={PaperSpinnerBehavior:PaperSpinnerBehavior};/**
   @license
   Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at
   http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
   http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
   found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
   part of the polymer project is also subject to an additional IP rights grant
   found at http://polymer.github.io/PATENTS.txt
   */_exports.$paperSpinnerBehavior=paperSpinnerBehavior;var $_documentContainer=document.createElement('template');$_documentContainer.setAttribute('style','display: none;');$_documentContainer.innerHTML="<dom-module id=\"paper-spinner-styles\">\n  <template>\n    <style>\n      /*\n      /**************************/\n      /* STYLES FOR THE SPINNER */\n      /**************************/\n\n      /*\n       * Constants:\n       *      ARCSIZE     = 270 degrees (amount of circle the arc takes up)\n       *      ARCTIME     = 1333ms (time it takes to expand and contract arc)\n       *      ARCSTARTROT = 216 degrees (how much the start location of the arc\n       *                                should rotate each time, 216 gives us a\n       *                                5 pointed star shape (it's 360/5 * 3).\n       *                                For a 7 pointed star, we might do\n       *                                360/7 * 3 = 154.286)\n       *      SHRINK_TIME = 400ms\n       */\n\n      :host {\n        display: inline-block;\n        position: relative;\n        width: 28px;\n        height: 28px;\n\n        /* 360 * ARCTIME / (ARCSTARTROT + (360-ARCSIZE)) */\n        --paper-spinner-container-rotation-duration: 1568ms;\n\n        /* ARCTIME */\n        --paper-spinner-expand-contract-duration: 1333ms;\n\n        /* 4 * ARCTIME */\n        --paper-spinner-full-cycle-duration: 5332ms;\n\n        /* SHRINK_TIME */\n        --paper-spinner-cooldown-duration: 400ms;\n      }\n\n      #spinnerContainer {\n        width: 100%;\n        height: 100%;\n\n        /* The spinner does not have any contents that would have to be\n         * flipped if the direction changes. Always use ltr so that the\n         * style works out correctly in both cases. */\n        direction: ltr;\n      }\n\n      #spinnerContainer.active {\n        -webkit-animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;\n        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;\n      }\n\n      @-webkit-keyframes container-rotate {\n        to { -webkit-transform: rotate(360deg) }\n      }\n\n      @keyframes container-rotate {\n        to { transform: rotate(360deg) }\n      }\n\n      .spinner-layer {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        white-space: nowrap;\n        color: var(--paper-spinner-color, var(--google-blue-500));\n      }\n\n      .layer-1 {\n        color: var(--paper-spinner-layer-1-color, var(--google-blue-500));\n      }\n\n      .layer-2 {\n        color: var(--paper-spinner-layer-2-color, var(--google-red-500));\n      }\n\n      .layer-3 {\n        color: var(--paper-spinner-layer-3-color, var(--google-yellow-500));\n      }\n\n      .layer-4 {\n        color: var(--paper-spinner-layer-4-color, var(--google-green-500));\n      }\n\n      /**\n       * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):\n       *\n       * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't\n       * guarantee that the animation will start _exactly_ after that value. So we avoid using\n       * animation-delay and instead set custom keyframes for each color (as layer-2undant as it\n       * seems).\n       */\n      .active .spinner-layer {\n        -webkit-animation-name: fill-unfill-rotate;\n        -webkit-animation-duration: var(--paper-spinner-full-cycle-duration);\n        -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        -webkit-animation-iteration-count: infinite;\n        animation-name: fill-unfill-rotate;\n        animation-duration: var(--paper-spinner-full-cycle-duration);\n        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        animation-iteration-count: infinite;\n        opacity: 1;\n      }\n\n      .active .spinner-layer.layer-1 {\n        -webkit-animation-name: fill-unfill-rotate, layer-1-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-1-fade-in-out;\n      }\n\n      .active .spinner-layer.layer-2 {\n        -webkit-animation-name: fill-unfill-rotate, layer-2-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-2-fade-in-out;\n      }\n\n      .active .spinner-layer.layer-3 {\n        -webkit-animation-name: fill-unfill-rotate, layer-3-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-3-fade-in-out;\n      }\n\n      .active .spinner-layer.layer-4 {\n        -webkit-animation-name: fill-unfill-rotate, layer-4-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-4-fade-in-out;\n      }\n\n      @-webkit-keyframes fill-unfill-rotate {\n        12.5% { -webkit-transform: rotate(135deg) } /* 0.5 * ARCSIZE */\n        25%   { -webkit-transform: rotate(270deg) } /* 1   * ARCSIZE */\n        37.5% { -webkit-transform: rotate(405deg) } /* 1.5 * ARCSIZE */\n        50%   { -webkit-transform: rotate(540deg) } /* 2   * ARCSIZE */\n        62.5% { -webkit-transform: rotate(675deg) } /* 2.5 * ARCSIZE */\n        75%   { -webkit-transform: rotate(810deg) } /* 3   * ARCSIZE */\n        87.5% { -webkit-transform: rotate(945deg) } /* 3.5 * ARCSIZE */\n        to    { -webkit-transform: rotate(1080deg) } /* 4   * ARCSIZE */\n      }\n\n      @keyframes fill-unfill-rotate {\n        12.5% { transform: rotate(135deg) } /* 0.5 * ARCSIZE */\n        25%   { transform: rotate(270deg) } /* 1   * ARCSIZE */\n        37.5% { transform: rotate(405deg) } /* 1.5 * ARCSIZE */\n        50%   { transform: rotate(540deg) } /* 2   * ARCSIZE */\n        62.5% { transform: rotate(675deg) } /* 2.5 * ARCSIZE */\n        75%   { transform: rotate(810deg) } /* 3   * ARCSIZE */\n        87.5% { transform: rotate(945deg) } /* 3.5 * ARCSIZE */\n        to    { transform: rotate(1080deg) } /* 4   * ARCSIZE */\n      }\n\n      @-webkit-keyframes layer-1-fade-in-out {\n        0% { opacity: 1 }\n        25% { opacity: 1 }\n        26% { opacity: 0 }\n        89% { opacity: 0 }\n        90% { opacity: 1 }\n        to { opacity: 1 }\n      }\n\n      @keyframes layer-1-fade-in-out {\n        0% { opacity: 1 }\n        25% { opacity: 1 }\n        26% { opacity: 0 }\n        89% { opacity: 0 }\n        90% { opacity: 1 }\n        to { opacity: 1 }\n      }\n\n      @-webkit-keyframes layer-2-fade-in-out {\n        0% { opacity: 0 }\n        15% { opacity: 0 }\n        25% { opacity: 1 }\n        50% { opacity: 1 }\n        51% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @keyframes layer-2-fade-in-out {\n        0% { opacity: 0 }\n        15% { opacity: 0 }\n        25% { opacity: 1 }\n        50% { opacity: 1 }\n        51% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @-webkit-keyframes layer-3-fade-in-out {\n        0% { opacity: 0 }\n        40% { opacity: 0 }\n        50% { opacity: 1 }\n        75% { opacity: 1 }\n        76% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @keyframes layer-3-fade-in-out {\n        0% { opacity: 0 }\n        40% { opacity: 0 }\n        50% { opacity: 1 }\n        75% { opacity: 1 }\n        76% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @-webkit-keyframes layer-4-fade-in-out {\n        0% { opacity: 0 }\n        65% { opacity: 0 }\n        75% { opacity: 1 }\n        90% { opacity: 1 }\n        to { opacity: 0 }\n      }\n\n      @keyframes layer-4-fade-in-out {\n        0% { opacity: 0 }\n        65% { opacity: 0 }\n        75% { opacity: 1 }\n        90% { opacity: 1 }\n        to { opacity: 0 }\n      }\n\n      .circle-clipper {\n        display: inline-block;\n        position: relative;\n        width: 50%;\n        height: 100%;\n        overflow: hidden;\n      }\n\n      /**\n       * Patch the gap that appear between the two adjacent div.circle-clipper while the\n       * spinner is rotating (appears on Chrome 50, Safari 9.1.1, and Edge).\n       */\n      .spinner-layer::after {\n        left: 45%;\n        width: 10%;\n        border-top-style: solid;\n      }\n\n      .spinner-layer::after,\n      .circle-clipper::after {\n        content: '';\n        box-sizing: border-box;\n        position: absolute;\n        top: 0;\n        border-width: var(--paper-spinner-stroke-width, 3px);\n        border-radius: 50%;\n      }\n\n      .circle-clipper::after {\n        bottom: 0;\n        width: 200%;\n        border-style: solid;\n        border-bottom-color: transparent !important;\n      }\n\n      .circle-clipper.left::after {\n        left: 0;\n        border-right-color: transparent !important;\n        -webkit-transform: rotate(129deg);\n        transform: rotate(129deg);\n      }\n\n      .circle-clipper.right::after {\n        left: -100%;\n        border-left-color: transparent !important;\n        -webkit-transform: rotate(-129deg);\n        transform: rotate(-129deg);\n      }\n\n      .active .gap-patch::after,\n      .active .circle-clipper::after {\n        -webkit-animation-duration: var(--paper-spinner-expand-contract-duration);\n        -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        -webkit-animation-iteration-count: infinite;\n        animation-duration: var(--paper-spinner-expand-contract-duration);\n        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        animation-iteration-count: infinite;\n      }\n\n      .active .circle-clipper.left::after {\n        -webkit-animation-name: left-spin;\n        animation-name: left-spin;\n      }\n\n      .active .circle-clipper.right::after {\n        -webkit-animation-name: right-spin;\n        animation-name: right-spin;\n      }\n\n      @-webkit-keyframes left-spin {\n        0% { -webkit-transform: rotate(130deg) }\n        50% { -webkit-transform: rotate(-5deg) }\n        to { -webkit-transform: rotate(130deg) }\n      }\n\n      @keyframes left-spin {\n        0% { transform: rotate(130deg) }\n        50% { transform: rotate(-5deg) }\n        to { transform: rotate(130deg) }\n      }\n\n      @-webkit-keyframes right-spin {\n        0% { -webkit-transform: rotate(-130deg) }\n        50% { -webkit-transform: rotate(5deg) }\n        to { -webkit-transform: rotate(-130deg) }\n      }\n\n      @keyframes right-spin {\n        0% { transform: rotate(-130deg) }\n        50% { transform: rotate(5deg) }\n        to { transform: rotate(-130deg) }\n      }\n\n      #spinnerContainer.cooldown {\n        -webkit-animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);\n        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);\n      }\n\n      @-webkit-keyframes fade-out {\n        0% { opacity: 1 }\n        to { opacity: 0 }\n      }\n\n      @keyframes fade-out {\n        0% { opacity: 1 }\n        to { opacity: 0 }\n      }\n    </style>\n  </template>\n</dom-module>";document.head.appendChild($_documentContainer.content);var template$4=html(_templateObject16_7f57aa202bd911e99390d3b784e8dc1a());template$4.setAttribute('strip-whitespace','');/**
                                                 Material design: [Progress &
                                                 activity](https://www.google.com/design/spec/components/progress-activity.html)
                                                                                               Element providing a multiple color material design circular spinner.
                                                                                                   <paper-spinner active></paper-spinner>
                                                                                               The default spinner cycles between four layers of colors; by default they are
                                                 blue, red, yellow and green. It can be customized to cycle between four
                                                 different colors. Use <paper-spinner-lite> for single color spinners.
                                                                                               ### Accessibility
                                                                                               Alt attribute should be set to provide adequate context for accessibility. If
                                                 not provided, it defaults to 'loading'. Empty alt can be provided to mark the
                                                 element as decorative if alternative content is provided in another form (e.g. a
                                                 text block following the spinner).
                                                                                                   <paper-spinner alt="Loading contacts list" active></paper-spinner>
                                                                                               ### Styling
                                                                                               The following custom properties and mixins are available for styling:
                                                                                               Custom property | Description | Default
                                                 ----------------|-------------|----------
                                                 `--paper-spinner-layer-1-color` | Color of the first spinner rotation | `--google-blue-500`
                                                 `--paper-spinner-layer-2-color` | Color of the second spinner rotation | `--google-red-500`
                                                 `--paper-spinner-layer-3-color` | Color of the third spinner rotation | `--google-yellow-500`
                                                 `--paper-spinner-layer-4-color` | Color of the fourth spinner rotation | `--google-green-500`
                                                 `--paper-spinner-stroke-width` | The width of the spinner stroke | 3px
                                                                                               @group Paper Elements
                                                 @element paper-spinner
                                                 @hero hero.svg
                                                 @demo demo/index.html
                                                 */Polymer$1({_template:template$4,is:'paper-spinner',behaviors:[PaperSpinnerBehavior]});var BlogAbout=/*#__PURE__*/function(_LitElement){babelHelpers.inherits(BlogAbout,_LitElement);function BlogAbout(){babelHelpers.classCallCheck(this,BlogAbout);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(BlogAbout).apply(this,arguments));}babelHelpers.createClass(BlogAbout,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(BlogAbout.prototype),"connectedCallback",this).call(this);}},{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(BlogAbout.prototype),"disconnectedCallback",this).call(this);}},{key:"_render",value:function _render(_ref){var title=_ref.title;return html$2(_templateObject17_7f57aa202bd911e99390d3b784e8dc1a());}}],[{key:"properties",get:function get(){return{title:{type:String,reflectToAttribute:true}};}}]);return BlogAbout;}(LitElement);_exports.BlogAbout=BlogAbout;window.customElements.define('blog-about',BlogAbout);var blogAbout={BlogAbout:BlogAbout};_exports.$blogAbout=blogAbout;var PostList=/*#__PURE__*/function(_LitElement2){babelHelpers.inherits(PostList,_LitElement2);function PostList(){babelHelpers.classCallCheck(this,PostList);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PostList).apply(this,arguments));}babelHelpers.createClass(PostList,[{key:"_render",value:function _render(_ref2){var posts=_ref2.posts;return html$2(_templateObject18_7f57aa202bd911e99390d3b784e8dc1a(),posts);}}],[{key:"properties",get:function get(){return{posts:Object};}}]);return PostList;}(LitElement);_exports.PostList=PostList;window.customElements.define('post-list',PostList);var postList={PostList:PostList};_exports.$postList=postList;var PostView=/*#__PURE__*/function(_LitElement3){babelHelpers.inherits(PostView,_LitElement3);function PostView(){babelHelpers.classCallCheck(this,PostView);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PostView).apply(this,arguments));}babelHelpers.createClass(PostView,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(PostView.prototype),"connectedCallback",this).call(this);this.article=this.shadowRoot.querySelector('#content');}},{key:"dateFormat",value:function dateFormat(date){return window.moment(date).format('LL');}},{key:"_didRender",value:function _didRender(){if(this.article){window.Prism.highlightAllUnder(this.article,false);}}},{key:"_render",value:function _render(props){return html$2(_templateObject19_7f57aa202bd911e99390d3b784e8dc1a(),props.content);}},{key:"post",set:function set(value){var _this37=this;var loading=html$2(["\n      <div id=\"loading\">\n        <p>Carregando...</p>\n        <paper-spinner alt=\"procurando...\" active></paper-spinner>\n      </div>\n      "]);this.content=loading;this._post=value;var p=value;window.fetch("posts/".concat(p.filename)).then(function(response){return response.text();}).then(function(content){var header="\n          <header>\n            <h1 class=\"title\">".concat(p.title,"</h1>\n            <div class=\"meta\">\n              <p class=\"author\">Escrito por ").concat(p.author,"</p>\n              <p class=\"release\">Publicado em ").concat(_this37.dateFormat(p.releaseDate),"</p>\n              <p class=\"update\">Atualizado em ").concat(_this37.dateFormat(p.lastUpdate),"</p>\n            </div>\n          </header>\n        ");_this37.content=html$2([header,content]);}).catch(function(e){return console.error(e);});},get:function get(){return this._post;}}],[{key:"properties",get:function get(){return{content:String};}}]);return PostView;}(LitElement);_exports.PostView=PostView;window.customElements.define('post-view',PostView);var postView={PostView:PostView};_exports.$postView=postView;var NotFound=/*#__PURE__*/function(_LitElement4){babelHelpers.inherits(NotFound,_LitElement4);function NotFound(){babelHelpers.classCallCheck(this,NotFound);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(NotFound).apply(this,arguments));}babelHelpers.createClass(NotFound,[{key:"_render",value:function _render(props){return html$2(_templateObject20_7f57aa202bd911e99390d3b784e8dc1a());}}],[{key:"properties",get:function get(){return{content:String};}}]);return NotFound;}(LitElement);_exports.NotFound=NotFound;window.customElements.define('not-found',NotFound);var notFound={NotFound:NotFound};_exports.$notFound=notFound;var BlogMain=/*#__PURE__*/function(_LitElement5){babelHelpers.inherits(BlogMain,_LitElement5);function BlogMain(){var _this38;babelHelpers.classCallCheck(this,BlogMain);_this38=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(BlogMain).call(this));setPassiveTouchGestures(true);return _this38;}babelHelpers.createClass(BlogMain,[{key:"goHome",value:function goHome(event){this.appLocation.path='/post-list';}},{key:"reload",value:function reload(event){window.location.reload(true);}},{key:"setRoute",value:function setRoute(){this.appRoute.route=this.appLocation.route;this.slug=this.appRoute.tail.path;this.page=this.appRoute.data.page;}},{key:"loadList",value:function loadList(){var _this39=this;return new Promise(function(resolve,reject){window.fetch('posts/post-list.json').then(function(response){return response.json();}).then(function(posts){_this39.posts=posts;resolve(posts);}).catch(function(e){return reject(e);});});}},{key:"selectPost",value:function selectPost(posts){var _this40=this;this.postView.post=posts.find(function(post){return post.slug===_this40.slug.slice(1);});}},{key:"load",value:function load(event){if(this.appDrawerLayout.narrow)this.appDrawer.close();if(event.detail.item.localName==='post-list'){if(!this.posts){this.loadList();}}if(event.detail.item.localName==='post-view'){if(!this.posts){this.loadList().then(this.selectPost.bind(this)).catch(function(e){return console.error(e);});}else{this.selectPost(this.posts);}}}},{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(BlogMain.prototype),"connectedCallback",this).call(this);// this.shadowRoot.querySelector('app-drawer-layout').responsiveWidth = '10px'
this.appDrawerLayout=this.shadowRoot.querySelector('app-drawer-layout');this.appDrawer=this.shadowRoot.querySelector('app-drawer');this.appLocation=this.shadowRoot.querySelector('app-location');this.appRoute=this.shadowRoot.querySelector('app-route');this.ironPages=this.shadowRoot.querySelector('iron-pages');this.postList=this.shadowRoot.querySelector('post-list');this.postView=this.shadowRoot.querySelector('post-view');this.appLocation.addEventListener('path-changed',this.setRoute.bind(this));this.ironPages.addEventListener('iron-select',this.load.bind(this));if(!this.appRoute.data.page){this.setRoute();}if(!this.page){this.appLocation.path='/post-list';}}},{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(BlogMain.prototype),"disconnectedCallback",this).call(this);}},{key:"_render",value:function _render(_ref3){var _this41=this;var page=_ref3.page,posts=_ref3.posts,slug=_ref3.slug;return html$2(_templateObject21_7f57aa202bd911e99390d3b784e8dc1a(),function(e){return _this41.goHome(e);},function(e){return _this41.reload(e);},page,posts);}}],[{key:"properties",get:function get(){return{page:String,posts:Array,slug:String,appLocation:Object,appRoute:Object};}}]);return BlogMain;}(LitElement);_exports.BlogMain=BlogMain;window.customElements.define('blog-main',BlogMain);var blogMain={BlogMain:BlogMain};_exports.$blogMain=blogMain;});