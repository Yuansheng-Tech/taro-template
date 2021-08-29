import { getCssToJs } from "./css";
import { getBasegetCssToJs } from "./base"

export function formatRichText(html){
  let newContent= html.replace(/]*>/gi,function(match, capture){
    match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
    match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '');
    match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
    return match;
  });
  newContent = newContent.replace(/style="[^"]+"/gi,function(match, capture){
    match = match.replace(/width:[^;]+;/gi, 'max-width:100%;').replace(/width:[^;]+;/gi, 'max-width:100%;');
    return match;
  });
  newContent = newContent.replace(/]*\/>/gi, '');
  newContent = newContent.replace(/<img/gi, '<img style="max-width:100%;height:auto;display:block;margin-top:0;margin-bottom:0;"');
  return newContent;
}

export function addClassAndStyle(html) {
  return html.replace(
    '<br>', '<br />'
  ).replace(
    /<([a-zA-Z0-9]*) (.*?)>/g,
    function(str, group, match, index, tpl) {
      if (/style/g.test(str)) {
        str = str.replace(/style="(.*?)"/g, `style="${getBasegetCssToJs(group)}${getCssToJs(group)}$1"`)
      } else {
        str = `<${group} class=".h5-${group}" style="${getBasegetCssToJs(group)}${getCssToJs(group)}" ${match}>`
      }
      console.log('str', str);
      console.log('group', group);
      console.log('match', match);
      console.log('index', index);
      console.log('tpl', tpl);
      return str
    }
  ).replace(
    /<([a-zA-Z0-9]*)>/g, function(str, group, match, index, tpl) {
      return `<${group} class=".h5-${group}" style="${getBasegetCssToJs(group)}${getCssToJs(group)}">`
    }
  )
}