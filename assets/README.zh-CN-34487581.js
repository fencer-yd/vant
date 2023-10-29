import{_ as s}from"./locales-ad8a99a3.js";import{o as a,a as t,z as n}from"./vue-libs-83dbabed.js";const d={},e={class:"van-doc-markdown-body"},l=n(`<h1>Sidebar 侧边导航</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>垂直展示的导航栏，用于在不同的内容区域之间进行切换。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Sidebar</span>, <span class="hljs-title class_">SidebarItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Sidebar</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">SidebarItem</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>通过 <code>v-model</code> 绑定当前选中项的索引。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-sidebar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签名称&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签名称&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签名称&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-sidebar</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> active = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">return</span> { active };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="hui-biao-ti-shi" tabindex="-1">徽标提示</h3><p>设置 <code>dot</code> 属性后，会在右上角展示一个小红点；设置 <code>badge</code> 属性后，会在右上角展示相应的徽标。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-sidebar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签名称&quot;</span> <span class="hljs-attr">dot</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签名称&quot;</span> <span class="hljs-attr">badge</span>=<span class="hljs-string">&quot;5&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签名称&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-sidebar</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="jin-yong-xuan-xiang" tabindex="-1">禁用选项</h3><p>通过 <code>disabled</code> 属性禁用选项。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-sidebar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签名称&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签名称&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签名称&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-sidebar</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="jian-ting-qie-huan-shi-jian" tabindex="-1">监听切换事件</h3><p>设置 <code>change</code> 方法来监听切换导航项时的事件。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-sidebar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签名 1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签名 2&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签名 3&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-sidebar</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> active = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">index</span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">\`标签名 <span class="hljs-subst">\${index + <span class="hljs-number">1</span>}</span>\`</span>);
    <span class="hljs-keyword">return</span> {
      active,
      onChange,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="sidebar-props" tabindex="-1">Sidebar Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前导航项的索引</td><td><em>number | string</em></td><td><code>0</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="sidebar-events" tabindex="-1">Sidebar Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>切换导航项时触发</td><td><em>index: number</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="sidebaritem-props" tabindex="-1">SidebarItem Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>内容</td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>dot</td><td>是否显示右上角小红点</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>badge</td><td>图标右上角徽标的内容</td><td><em>number | string</em></td><td>-</td></tr><tr><td>badge-props</td><td>自定义徽标的属性，传入的对象会被透传给 <a href="#/zh-CN/badge#props" target="_blank">Badge 组件的 props</a></td><td><em>BadgeProps</em></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用该项</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>url</td><td>点击后跳转的链接地址</td><td><em>string</em></td><td>-</td></tr><tr><td>to</td><td>点击后跳转的目标路由对象，等同于 Vue Router 的 <a href="https://router.vuejs.org/zh/api/interfaces/RouterLinkProps.html#Properties-to" target="_blank">to 属性</a></td><td><em>string | object</em></td><td>-</td></tr><tr><td>replace</td><td>是否在跳转时替换当前页面历史</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="sidebaritem-events" tabindex="-1">SidebarItem Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击时触发</td><td><em>index: number</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="sidebaritem-slots" tabindex="-1">SidebarItem Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>title</td><td>自定义标题</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SidebarProps</span>, <span class="hljs-title class_">SidebarItemProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-sidebar-width</td><td><em>80px</em></td><td>-</td></tr><tr><td>--van-sidebar-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-sidebar-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-sidebar-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-sidebar-disabled-text-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr><tr><td>--van-sidebar-padding</td><td><em>20px var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-sidebar-active-color</td><td><em>var(--van-active-color)</em></td><td>-</td></tr><tr><td>--van-sidebar-background</td><td><em>var(--van-background)</em></td><td>-</td></tr><tr><td>--van-sidebar-selected-font-weight</td><td><em>var(--van-font-bold)</em></td><td>-</td></tr><tr><td>--van-sidebar-selected-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-sidebar-selected-border-width</td><td><em>4px</em></td><td>-</td></tr><tr><td>--van-sidebar-selected-border-height</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-sidebar-selected-border-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-sidebar-selected-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr></tbody></table></div>`,17),p=[l];function r(c,i){return a(),t("div",e,p)}const j=s(d,[["render",r]]);export{j as default};
