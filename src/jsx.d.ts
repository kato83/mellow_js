/**
 * Apply from React TypeScript definition
 * @see https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts
 */
export declare namespace createElement {
  export namespace JSX {
    type Element = (namespace?: string) => Node;
    type Fragment = () => DocumentFragment;

    export interface IntrinsicAttributes {
      ref?: ((ref: JSX.Element) => {}) | {};
    }

    export interface IntrinsicElements {
      // HTML
      a: HTMLAnchorElement;
      abbr: HTMLElement;
      address: HTMLElement;
      area: HTMLAreaElement;
      article: HTMLElement;
      aside: HTMLElement;
      audio: HTMLAudioElement;
      b: HTMLElement;
      base: HTMLBaseElement;
      bdi: HTMLElement;
      bdo: HTMLElement;
      big: HTMLElement;
      blockquote: HTMLQuoteElement;
      body: HTMLBodyElement;
      br: HTMLBRElement;
      button: HTMLButtonElement;
      canvas: HTMLCanvasElement;
      caption: HTMLElement;
      cite: HTMLElement;
      code: HTMLElement;
      col: HTMLTableColElement;
      colgroup: HTMLTableColElement;
      data: HTMLDataElement;
      datalist: HTMLDataListElement;
      dd: HTMLElement;
      del: HTMLModElement;
      details: HTMLDetailsElement;
      dfn: HTMLElement;
      dialog: HTMLDialogElement;
      div: HTMLDivElement;
      dl: HTMLDListElement;
      dt: HTMLElement;
      em: HTMLElement;
      embed: HTMLEmbedElement;
      fieldset: HTMLFieldSetElement;
      figcaption: HTMLElement;
      figure: HTMLElement;
      footer: HTMLElement;
      form: HTMLFormElement;
      h1: HTMLHeadingElement;
      h2: HTMLHeadingElement;
      h3: HTMLHeadingElement;
      h4: HTMLHeadingElement;
      h5: HTMLHeadingElement;
      h6: HTMLHeadingElement;
      head: HTMLElement;
      header: HTMLElement;
      hgroup: HTMLElement;
      hr: HTMLHRElement;
      html: HTMLHtmlElement;
      i: HTMLElement;
      iframe: HTMLIFrameElement;
      img: HTMLImageElement;
      input: HTMLInputElement;
      ins: HTMLModElement;
      kbd: HTMLElement;
      keygen: HTMLElement;
      label: HTMLLabelElement;
      legend: HTMLLegendElement;
      li: HTMLLIElement;
      link: HTMLLinkElement;
      main: HTMLElement;
      map: HTMLMapElement;
      mark: HTMLElement;
      menu: HTMLElement;
      menuitem: HTMLElement;
      meta: HTMLMetaElement;
      meter: HTMLMeterElement;
      nav: HTMLElement;
      noscript: HTMLElement;
      object: HTMLObjectElement;
      ol: HTMLOListElement;
      optgroup: HTMLOptGroupElement;
      option: HTMLOptionElement;
      output: HTMLOutputElement;
      p: HTMLParagraphElement;
      param: HTMLParamElement;
      picture: HTMLElement;
      pre: HTMLPreElement;
      progress: HTMLProgressElement;
      q: HTMLQuoteElement;
      rp: HTMLElement;
      rt: HTMLElement;
      ruby: HTMLElement;
      s: HTMLElement;
      samp: HTMLElement;
      slot: HTMLSlotElement;
      script: HTMLScriptElement;
      section: HTMLElement;
      select: HTMLSelectElement;
      small: HTMLElement;
      source: HTMLSourceElement;
      span: HTMLSpanElement;
      strong: HTMLElement;
      style: HTMLStyleElement;
      sub: HTMLElement;
      summary: HTMLElement;
      sup: HTMLElement;
      table: HTMLTableElement;
      template: HTMLTemplateElement;
      tbody: HTMLTableSectionElement;
      td: HTMLTableDataCellElement;
      textarea: HTMLTextAreaElement;
      tfoot: HTMLTableSectionElement;
      th: HTMLTableHeaderCellElement;
      thead: HTMLTableSectionElement;
      time: HTMLTimeElement;
      title: HTMLTitleElement;
      tr: HTMLTableRowElement;
      track: HTMLTrackElement;
      u: HTMLElement;
      ul: HTMLUListElement;
      "var": HTMLElement;
      video: HTMLVideoElement;
      wbr: HTMLElement;
      webview: HTMLElement;

      // SVG
      svg: SVGSVGElement;

      animate: SVGElement;
      animateMotion: SVGElement;
      animateTransform: SVGElement;
      circle: SVGCircleElement;
      clipPath: SVGClipPathElement;
      defs: SVGDefsElement;
      desc: SVGDescElement;
      ellipse: SVGEllipseElement;
      feBlend: SVGFEBlendElement;
      feColorMatrix: SVGFEColorMatrixElement;
      feComponentTransfer: SVGFEComponentTransferElement;
      feComposite: SVGFECompositeElement;
      feConvolveMatrix: SVGFEConvolveMatrixElement;
      feDiffuseLighting: SVGFEDiffuseLightingElement;
      feDisplacementMap: SVGFEDisplacementMapElement;
      feDistantLight: SVGFEDistantLightElement;
      feDropShadow: SVGFEDropShadowElement;
      feFlood: SVGFEFloodElement;
      feFuncA: SVGFEFuncAElement;
      feFuncB: SVGFEFuncBElement;
      feFuncG: SVGFEFuncGElement;
      feFuncR: SVGFEFuncRElement;
      feGaussianBlur: SVGFEGaussianBlurElement;
      feImage: SVGFEImageElement;
      feMerge: SVGFEMergeElement;
      feMergeNode: SVGFEMergeNodeElement;
      feMorphology: SVGFEMorphologyElement;
      feOffset: SVGFEOffsetElement;
      fePointLight: SVGFEPointLightElement;
      feSpecularLighting: SVGFESpecularLightingElement;
      feSpotLight: SVGFESpotLightElement;
      feTile: SVGFETileElement;
      feTurbulence: SVGFETurbulenceElement;
      filter: SVGFilterElement;
      foreignObject: SVGForeignObjectElement;
      g: SVGGElement;
      image: SVGImageElement;
      line: SVGLineElement;
      linearGradient: SVGLinearGradientElement;
      marker: SVGMarkerElement;
      mask: SVGMaskElement;
      metadata: SVGMetadataElement;
      mpath: SVGElement;
      path: SVGPathElement;
      pattern: SVGPatternElement;
      polygon: SVGPolygonElement;
      polyline: SVGPolylineElement;
      radialGradient: SVGRadialGradientElement;
      rect: SVGRectElement;
      stop: SVGStopElement;
      switch: SVGSwitchElement;
      symbol: SVGSymbolElement;
      text: SVGTextElement;
      textPath: SVGTextPathElement;
      tspan: SVGTSpanElement;
      use: SVGUseElement;
      view: SVGViewElement;
    }
  }
}