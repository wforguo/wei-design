/**
 * @Author: forguo
 * @Date: 2022/7/2 15:00
 * @Description: config
 */
import type {UserConfig} from 'vitepress'
import {head} from './config/head';
import {sidebar} from './config/slidebar';
import {nav} from './config/nav';
import {mdPlugin} from './config/plugins'
import {docsDirName, REPO_BRANCH, REPO_PATH } from './config/global'
import { languages } from './utils/lang';
import * as process from "process";

const locales: any = {}
languages.forEach((lang) => {
    locales[`/${lang}`] = {
        label: lang,
        lang,
    }
});
const env = process.env.NODE_ENV;

export const config: UserConfig = {
    base: env === 'production' ? '/wei-design/' : '/',
    title: 'Wei Design',
    description: 'A Vue 3 UI Framework',
    lastUpdated: true,
    head,
    themeConfig: {
        repo: REPO_PATH,
        docsBranch: REPO_BRANCH,
        docsDir: docsDirName,

        lastUpdated: 'Last Updated',

        logo: '/images/logo.png',
        logoSmall: '/images/logo.png',

        sidebar, // 没有s
        nav,
        langs: languages,
        locales: {
            '/zh-CN/': {
                label: '简体中文',
                selectText: '选择语言',
                ariaLabel: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
            },
            '/en-US/': {
                label: 'English',
                selectText: 'Language',
                ariaLabel: 'Language',
                editLinkText: 'Edit on GitHub',
                lastUpdated: 'LastUpdate',
            },
        }
    },
    locales: {
        '/zh-CN/': {
            lang: 'zh-CN',
            title: 'Wei Design',
            description: 'A Vue 3 UI Framework',
        },
        '/en-US/': {
            lang: 'en-US',
            title: 'Wei Design',
            description: 'A Vue 3 UI Framework',
        },
    },
    markdown: {
        lineNumbers: true,
        config: (md) => mdPlugin(md),
    },
}
export default config
