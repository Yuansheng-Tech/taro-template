export const baseCssToJs = {
  html: `
    display: block;
  `,
  head: `
    display: none;
  `,
  meta: `
    display: none;
  `,
  title: `
    display: none;
  `,
  link: `
    display: none;
  `,
  style: `
    display: none;
  `,
  script: `
    display: none;
  `,
  body: `
    display: block;
    margin: 8px;
  `,
  p: `
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
  `,
  div: `
    display: block;
  `,
  layer: `
    display: block;
  `,
  article: `
    display: block;
  `,
  aside: `
    display: block;
  `,
  footer: `
    display: block;
  `,
  header: `
    display: block;
  `,
  hgroup: `
    display: block;
  `,
  main: `
    display: block;
  `,
  nav: `
    display: block;
  `,
  section: `
    display: block;
  `,
  marquee: `
    display: inline-block;
    width: -webkit-fill-available;
  `,
  address: `
    display: block;
    font-style: italic;
  `,
  blockquote: `
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 40px;
    margin-inline-end: 40px;
  `,
  figcaption: `
    display: block;
  `,
  figure: `
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 40px;
    margin-inline-end: 40px;
  `,
  q: `
    display: inline;
  `,
  center: `
    display: block;
    text-align: -webkit-center;
  `,
  hr: `
    display: block;
    overflow: hidden;
    unicode-bidi: isolate;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
    border-style: inset;
    border-width: 1px;
  `,
  map: `
    display: inline;
  `,
  video: `
    object-fit: contain;
  `,
  h1: `
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0;
    margin-inline-end: 0;
    font-weight: bold;
  `,
  h2: `
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0;
    margin-inline-end: 0;
    font-weight: bold;
  `,
  h3: `
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
    font-weight: bold;
  `,
  h4: `
    display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0;
    margin-inline-end: 0;
    font-weight: bold;
  `,
  h5: `
    display: block;
    font-size: 0.83em;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
    margin-inline-start: 0;
    margin-inline-end: 0;
    font-weight: bold;
  `,
  h6: `
    display: block;
    font-size: 0.67em;
    margin-block-start: 2.33em;
    margin-block-end: 2.33em;
    margin-inline-start: 0;
    margin-inline-end: 0;
    font-weight: bold;
  `,
  table: `
    display: table;
    border-collapse: separate;
    border-spacing: 2px;
    border-color: gray;
    box-sizing: border-box;
    text-indent: initial;
  `,
  thead: `
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  `,
  tbody: `
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  `,
  tfoot: `
    display: table-footer-group;
    vertical-align: middle;
    border-color: inherit;
  `,
  tr: `
    vertical-align: middle;
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  `,
  col: `
    display: table-column;
  `,
  colgroup: `
    display: table-column-group;
  `,
  td: `
    display: table-cell;
    vertical-align: inherit;
  `,
  th: `
    display: table-cell;
    vertical-align: inherit;
    font-weight: bold;
    text-align: -internal-center;
  `,
  caption: `
    display: table-caption;
    text-align: -webkit-center;
  `,
  ul: `
    display: block;
    list-style-type: disc;
    margin: 0;
    padding: 0 1em;
  `,
  menu: `
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 40px;
  `,
  dir: `
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 40px;
  `,
  ol: `
    display: block;
    list-style-type: decimal;
    margin: 0;
    padding: 0 1em;
  `,
  li: `
    display: list-item;
    text-align: -webkit-match-parent;
    margin: 0;
    padding: 0;
  `,
  dd: `
    display: block;
    margin-inline-start: 40px;
  `,
  dl: `
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
  `,
  dt: `
    display: block;
  `,
  form: `
    display: block;
    margin-top: 0em;
  `,
  label: `
    cursor: default;
  `,
  legend: `
    display: block;
    padding-inline-start: 2px;
    padding-inline-end: 2px;
    border: none;
  `,
  fieldset: `
    display: block;
    margin-inline-start: 2px;
    margin-inline-end: 2px;
    padding-block-start: 0.35em;
    padding-inline-start: 0.75em;
    padding-inline-end: 0.75em;
    padding-block-end: 0.625em;
    border: 2px groove ThreeDFace;
    min-inline-size: min-content;
  `,
  button: `
    appearance: auto;
    -webkit-writing-mode: horizontal-tb !important;
    margin: 0em;
    font: -webkit-small-control;
    text-rendering: auto;
    color: black;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0;
    text-shadow: none;
    display: inline-block;
    text-align: start;
  `,
  textarea: `
    -webkit-writing-mode: horizontal-tb !important;
    margin: 0em;
    font: -webkit-small-control;
    text-rendering: auto;
    color: black;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: auto;
    border: 1px solid #767676;
    column-count: initial !important;
    -webkit-rtl-ordering: logical;
    resize: auto;
    cursor: text;
    padding: 2px;
    white-space: pre-wrap;
    word-wrap: break-word;
    background-color: #ffffff;
    font-family: monospace;
  `,
  input: `
    -webkit-writing-mode: horizontal-tb !important;
    margin: 0em;
    font: -webkit-small-control;
    text-rendering: auto;
    color: black;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: auto;
    padding: 1px 0;
    border: 2px inset #767676;
    -webkit-rtl-ordering: logical;
    cursor: text;
    background-color: #ffffff;
  `,
  datalist: `
    display: none;
  `,
  area: `
    display: inline;
  `,
  param: `
    display: none;
  `,
  select: `
    appearance: auto;
    box-sizing: border-box;
    align-items: center;
    white-space: pre;
    -webkit-rtl-ordering: logical;
    color: black;
    background-color: #ffffff;
    border: 1px solid #767676;
    cursor: default;
    border-radius: 0;
    -webkit-writing-mode: horizontal-tb !important;
    margin: 0em;
    font: -webkit-small-control;
    text-rendering: auto;
    color: black;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0;
    text-shadow: none;
    display: inline-block;
    text-align: start;
  `,
  optgroup: `
    font-weight: bolder;
    display: block;
  `,
  option: `
    font-weight: normal;
    display: block;
    padding: 0 2px 1px 2px;
    white-space: nowrap;
    min-height: 1.2em;
  `,
  selectmenu: `
    display: inline-block;
  `,
  output: `
    display: inline;
    unicode-bidi: isolate;
  `,
  meter: `
    -webkit-writing-mode: horizontal-tb !important;
    appearance: auto;
    box-sizing: border-box;
    display: inline-block;
    height: 1em;
    width: 5em;
    vertical-align: -0.2em;
    -webkit-user-modify: read-only !important;
  `,
  progress: `
    -webkit-writing-mode: horizontal-tb !important;
    appearance: auto;
    box-sizing: border-box;
    display: inline-block;
    height: 1em;
    width: 10em;
    vertical-align: -0.2em;
  `,
  u: `
    text-decoration: underline;
  `,
  ins: `
    text-decoration: underline;
  `,
  strong: `
    font-weight: bold;
  `,
  b: `
    font-weight: bold;
  `,
  i: `
    font-style: italic;
  `,
  cite: `
    font-style: italic;
  `,
  em: `
    font-style: italic;
  `,
  var: `
    font-style: italic;
  `,
  dfn: `
    font-style: italic;
  `,
  tt: `
    font-family: monospace;
  `,
  code: `
    font-family: monospace;
  `,
  kbd: `
    font-family: monospace;
  `,
  samp: `
    font-family: monospace;
  `,
  pre: `
    display: block;
    font-family: monospace;
    white-space: pre;
    margin: 1em 0;
  `,
  xmp: `
    display: block;
    font-family: monospace;
    white-space: pre;
    margin: 1em 0;
  `,
  plaintext: `
    display: block;
    font-family: monospace;
    white-space: pre;
    margin: 1em 0;
  `,
  listing: `
    display: block;
    font-family: monospace;
    white-space: pre;
    margin: 1em 0;
  `,
  mark: `
    background-color: yellow;
    color: black;
  `,
  big: `
    font-size: larger;
  `,
  small: `
    font-size: smaller;
  `,
  s: `
    text-decoration: line-through;
  `,
  strike: `
    text-decoration: line-through;
  `,
  del: `
    text-decoration: line-through;
  `,
  sub: `
    vertical-align: sub;
    font-size: smaller;
  `,
  sup: `
    vertical-align: super;
    font-size: smaller;
  `,
  nobr: `
    white-space: nowrap;
  `,
  ruby: `
    text-indent: 0;
  `,
  rt: `
    text-indent: 0;
    line-height: normal;
    -webkit-text-emphasis: none;
    display: block;
    font-size: 50%;
    text-align: start;
  `,
  rp: `
    display: none;
  `,
  noframes: `
    display: none;
  `,
  frameset: `
    display: block;
    border-color: inherit;
  `,
  frame: `
    display: block;
  `,
  iframe: `
    border: 2px inset;
  `,
  details: `
    display: block;
  `,
  summary: `
    display: block;
  `,
  template: `
    display: none;
  `,
  bdi: `
    unicode-bidi: isolate;
  `,
  bdo: `
    unicode-bidi: bidi-override;
  `,
  dialog: `
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    width: fit-content;
    height: fit-content;
    margin: auto;
    border: solid;
    padding: 1em;
    background: white;
    color: black;
  `,
  slot: `
    display: contents;
  `,
}

export const getBasegetCssToJs = (key) => {
  return baseCssToJs[key] || ''
}