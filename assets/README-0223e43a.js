import{_ as t}from"./locales-ad8a99a3.js";import{o as s,a,z as n}from"./vue-libs-83dbabed.js";const d={},e={class:"van-doc-markdown-body"},r=n(`<h1>Card</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Used to display product pictures, prices and other information.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Card</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Card</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-card</span>
  <span class="hljs-attr">num</span>=<span class="hljs-string">&quot;2&quot;</span>
  <span class="hljs-attr">price</span>=<span class="hljs-string">&quot;2.00&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span>
  <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;Description&quot;</span>
  <span class="hljs-attr">thumb</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="discount-info" tabindex="-1">Discount Info</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-card</span>
  <span class="hljs-attr">num</span>=<span class="hljs-string">&quot;2&quot;</span>
  <span class="hljs-attr">tag</span>=<span class="hljs-string">&quot;Tag&quot;</span>
  <span class="hljs-attr">price</span>=<span class="hljs-string">&quot;2.00&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span>
  <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;Description&quot;</span>
  <span class="hljs-attr">origin-price</span>=<span class="hljs-string">&quot;10.00&quot;</span>
  <span class="hljs-attr">thumb</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-content" tabindex="-1">Custom Content</h3><p>Use slot to custom content.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-card</span>
  <span class="hljs-attr">num</span>=<span class="hljs-string">&quot;2&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span>
  <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;Description&quot;</span>
  <span class="hljs-attr">price</span>=<span class="hljs-string">&quot;2.00&quot;</span>
  <span class="hljs-attr">thumb</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">tags</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Tag<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Tag<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">footer</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-card</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>thumb</td><td>Left thumb image URL</td><td><em>string</em></td><td>-</td></tr><tr><td>title</td><td>Title</td><td><em>string</em></td><td>-</td></tr><tr><td>desc</td><td>Description</td><td><em>string</em></td><td>-</td></tr><tr><td>tag</td><td>Tag</td><td><em>string</em></td><td>-</td></tr><tr><td>num</td><td>number</td><td><em>number | string</em></td><td>-</td></tr><tr><td>price</td><td>Price</td><td><em>number | string</em></td><td>-</td></tr><tr><td>origin-price</td><td>Origin price</td><td><em>number | string</em></td><td>-</td></tr><tr><td>centered</td><td>Whether content vertical centered</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>currency</td><td>Currency symbol</td><td><em>string</em></td><td><code>¥</code></td></tr><tr><td>thumb-link</td><td>Thumb link URL</td><td><em>string</em></td><td>-</td></tr><tr><td>lazy-load</td><td>Whether to enable thumb lazy load, should register <a href="#/en-US/lazyload" target="_blank">Lazyload</a> component</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>click</td><td>Emitted when component is clicked</td><td><em>event: MouseEvent</em></td></tr><tr><td>click-thumb</td><td>Emitted when thumb is clicked</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>title</td><td>Custom title</td></tr><tr><td>desc</td><td>Custom description</td></tr><tr><td>num</td><td>Custom num</td></tr><tr><td>price</td><td>Custom price</td></tr><tr><td>origin-price</td><td>Custom origin price</td></tr><tr><td>price-top</td><td>Custom price top</td></tr><tr><td>bottom</td><td>Custom price bottom</td></tr><tr><td>thumb</td><td>Custom thumb</td></tr><tr><td>tag</td><td>Custom thumb tag</td></tr><tr><td>tags</td><td>Custom tags</td></tr><tr><td>footer</td><td>Custom footer</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">CardProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-card-padding</td><td><em>var(--van-padding-xs) var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-card-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-card-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-card-background</td><td><em>var(--van-background)</em></td><td>-</td></tr><tr><td>--van-card-thumb-size</td><td><em>88px</em></td><td>-</td></tr><tr><td>--van-card-thumb-radius</td><td><em>var(--van-radius-lg)</em></td><td>-</td></tr><tr><td>--van-card-title-line-height</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-card-desc-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-card-desc-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-card-price-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-card-origin-price-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-card-num-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-card-origin-price-font-size</td><td><em>var(--van-font-size-xs)</em></td><td>-</td></tr><tr><td>--van-card-price-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-card-price-integer-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-card-price-font</td><td><em>var(--van-price-font)</em></td><td>-</td></tr></tbody></table></div>`,14),l=[r];function p(c,o){return s(),a("div",e,l)}const m=t(d,[["render",p]]);export{m as default};
