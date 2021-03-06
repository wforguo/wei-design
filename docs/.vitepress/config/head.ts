/**
 * @Author: forguo
 * @Date: 2022/7/8 23:23
 * @Description: head
 */
import type {HeadConfig} from 'vitepress'
import fs from "fs";
import path from "path";
import { vpRoot } from './global'
export const head: HeadConfig[] = [
    [
        'link',
        {
            rel: 'icon',
            href: '/images/logo-link.png',
            type: 'image',
        },
    ],
    [
        'meta',
        {
            name: 'theme-color',
            content: '#ffffff',
        },
    ],
    ['meta', {rel: 'referrer', href: `same-origin`}],
    ['meta', {name: 'keywords', content: `wei-design,A Vue.js 3 UI library,vue,vue3`}],
    ['meta', {name: 'description', content: `wei-design|A Vue.js 3 UI library|vue|vue3`}],
    ['meta', {name: 'author', content: `魏国, forguo, wforguo`}],
    ['meta', {name: 'baidu-site-verification', content: `code-bakUos2v8l`}],
    ['script', {}, fs.readFileSync(path.resolve(vpRoot, 'lang.js'), 'utf-8')],
    ['script', {}, `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "//hm.baidu.com/hm.js?2788f1f4f01e060d6d892f4bbd5b74d4";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(hm, s);
        })();
    `]
]
