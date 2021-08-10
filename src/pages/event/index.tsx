import React, { Component } from "react";
import { YYHtml } from "@ysyp/ui";

export default class Index extends Component {
  render() {
    const text = `<h1>Hi there,</h1><p>this is a basic example of tiptap. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:</p><p>That’s a bullet list with one …</p><p>… or two list items.</p><p>Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:</p><hr><pre><code>body {
display: none;
}</code></pre><p>I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.</p><p>Wow, that’s amazing. Good work, boy! <br>— Mom</p><increasecomponent count="35"></increasecomponent><table><tbody><tr><th colspan="1" rowspan="1"><p>Name</p></th><th colspan="3" rowspan="1"><p>Description</p></th></tr><tr><td colspan="1" rowspan="1"><p>Cyndi Lauper</p></td><td colspan="1" rowspan="1"><p>singer</p></td><td colspan="1" rowspan="1"><p>songwriter</p></td><td colspan="1" rowspan="1"><p>actress</p></td></tr><tr><td colspan="1" rowspan="1"><p>Philipp Kühn</p></td><td colspan="1" rowspan="1"><p>designer</p></td><td colspan="1" rowspan="1"><p>developer</p></td><td colspan="1" rowspan="1"><p>maker</p></td></tr><tr><td colspan="1" rowspan="1"><p>Hans Pagel</p></td><td colspan="1" rowspan="1"><p>wrote this</p></td><td colspan="2" rowspan="1"><p>that’s it</p></td></tr></tbody></table>`;
    return (
      <>
        <YYHtml type="text" nodes={text} />
      </>
    );
  }
}
