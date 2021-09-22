export const cssTojs = {
  h1: `margin-block-start: 0;
	margin-block-end: 0;`,
  h2: `margin-block-start: 0;
	margin-block-end: 0;
	color: #333;`,
  h3: `margin-block-start: 0;
	margin-block-end: 0;`,
  code: `background-color: rgba(97, 97, 97, 0.1);
	color: #616161;
  color: inherit;
	background: none;
	font-size: 0.6rem;`,
	p: `margin: 1em 0;
	`,
  pre: `background: #0D0D0D;
	color: #FFF;
	font-family: 'JetBrainsMono', monospace;
	padding: 0.5rem 0.75rem;
	border-radius: 0.3rem;`,
  img: `width: 100%;
  max-width:100%;
  height:auto;
  display:block;
  margin-top:0;
  margin-bottom:0;`,
	ul: `margin: 0;`,
	ol: `margin: 0;`,
	li: `margin: 0;`,
  blockquote: `padding-left: 1rem;
	margin: 0;
	border-left: 2px solid rgba(13, 13, 13, 0.1);`,
  hr: `border: none;
	border-top: 2px solid rgba(13, 13, 13, 0.1);
	margin: 1rem 0;`,
  table: `border-collapse: collapse;
	table-layout: fixed;
	width: 100%;
	margin: 0;
	overflow: hidden;`,
  td: `min-width: 1em;
	border: 1px solid #ced4da;
	padding: 3px 5px;
	vertical-align: top;
	box-sizing: border-box;
	position: relative;`,
  th: `min-width: 1em;
	border: 1px solid #ced4da;
	padding: 3px 5px;
	vertical-align: top;
	box-sizing: border-box;
	position: relative;
  font-weight: bold;
	text-align: left;
	background-color: #f1f3f5;`,
}

export const getCssToJs = (key) => {
	return cssTojs[key] || ''
}