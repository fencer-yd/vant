import{_ as s}from"./locales-ad8a99a3.js";import{o as a,a as t,z as n}from"./vue-libs-83dbabed.js";const d={},e={class:"van-doc-markdown-body"},l=n(`<h1>Signature 签名</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>用于签名场景的组件，基于 Canvas 实现。请升级 <code>vant</code> 到 &gt;= 4.3.0 版本来使用该组件。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Signature</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Signature</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>当点击确认按钮时，组件会触发 <code>submit</code> 事件，事件的第一个参数为 <code>data</code>，包含以下字段：</p><ul><li><code>image</code>：签名对应的图片，为 base64 字符串格式。若签名为空，则返回空字符串。</li><li><code>canvas</code>：Canvas 元素。</li></ul><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-signature</span> @<span class="hljs-attr">submit</span>=<span class="hljs-string">&quot;onSubmit&quot;</span> @<span class="hljs-attr">clear</span>=<span class="hljs-string">&quot;onClear&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-image</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;image&quot;</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;image&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> image = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSubmit</span> = (<span class="hljs-params">data</span>) =&gt; {
      image.<span class="hljs-property">value</span> = data.<span class="hljs-property">image</span>;
    };
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClear</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;clear&#39;</span>);

    <span class="hljs-keyword">return</span> {
      image,
      onSubmit,
      onClear,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-yan-se" tabindex="-1">自定义颜色</h3><p>通过 <code>pen-color</code> 来自定义笔触颜色。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-signature</span> <span class="hljs-attr">pen-color</span>=<span class="hljs-string">&quot;#ff0000&quot;</span> @<span class="hljs-attr">submit</span>=<span class="hljs-string">&quot;onSubmit&quot;</span> @<span class="hljs-attr">clear</span>=<span class="hljs-string">&quot;onClear&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-xian-kuan" tabindex="-1">自定义线宽</h3><p>通过 <code>line-width</code> 来自定义线条宽度。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-signature</span> <span class="hljs-attr">:line-width</span>=<span class="hljs-string">&quot;6&quot;</span> @<span class="hljs-attr">submit</span>=<span class="hljs-string">&quot;onSubmit&quot;</span> @<span class="hljs-attr">clear</span>=<span class="hljs-string">&quot;onClear&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-bei-jing-yan-se" tabindex="-1">自定义背景颜色</h3><p>通过 <code>background-color</code> 来自定义背景颜色。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-signature</span> <span class="hljs-attr">background-color</span>=<span class="hljs-string">&quot;#eee&quot;</span> @<span class="hljs-attr">submit</span>=<span class="hljs-string">&quot;onSubmit&quot;</span> @<span class="hljs-attr">clear</span>=<span class="hljs-string">&quot;onClear&quot;</span> /&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>导出图片类型</td><td><em>string</em></td><td><code>png</code></td></tr><tr><td>pen-color</td><td>笔触颜色，默认黑色</td><td><em>string</em></td><td><code>#000</code></td></tr><tr><td>line-width</td><td>线条宽度</td><td><em>number</em></td><td><code>3</code></td></tr><tr><td>background-color</td><td>背景颜色</td><td><em>string</em></td><td>-</td></tr><tr><td>tips</td><td>当不支持 Canvas 的时候出现的提示文案</td><td><em>string</em></td><td>-</td></tr><tr><td>clear-button-text</td><td>清除按钮文案</td><td><em>string</em></td><td><code>清空</code></td></tr><tr><td>confirm-button-text</td><td>确认按钮文案</td><td><em>string</em></td><td><code>确认</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>start</td><td>开始签名时触发</td><td>-</td></tr><tr><td>end</td><td>结束签名时触发</td><td>-</td></tr><tr><td>signing</td><td>签名过程中触发</td><td><em>event: TouchEvent</em></td></tr><tr><td>submit</td><td>点击确定按钮时触发</td><td><em>data: { image: string; canvas: HTMLCanvasElement }</em></td></tr><tr><td>clear</td><td>点击取消按钮时触发</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">方法</h3><p>通过 ref 可以获取到 Signature 实例并调用实例方法，详见<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">组件实例方法</a>。</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>resize <code>v4.7.3</code></td><td>外层元素大小或组件显示状态变化时，可以调用此方法来触发重绘</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SignatureProps</span>, <span class="hljs-title class_">SignatureInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>SignatureInstance</code> 是组件实例的类型，用法如下：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SignatureInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> signatureRef = ref&lt;<span class="hljs-title class_">SignatureInstance</span>&gt;();

signatureRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">resize</span>();
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-signature-padding</td><td><em>var(--van-padding-xs)</em></td><td>-</td></tr><tr><td>--van-signature-content-height</td><td><em>200px</em></td><td>画布高度</td></tr><tr><td>--van-signature-content-background</td><td><em>var(--van-background-2)</em></td><td>画布背景色</td></tr><tr><td>--van-signature-content-border</td><td><em>1px dotted #dadada</em></td><td>画布边框样式</td></tr></tbody></table></div>`,15),p=[l];function c(r,o){return a(),t("div",e,p)}const g=s(d,[["render",c]]);export{g as default};
