---
lang: zh-CN
title: getting-started页面
description: 这是个定制页面
---

[[toc]]

# guide readmeee3

|第一列|   第二列   |
|------|-----------------|
|1222222222222|21111111111111111111111|
|`git status`   | list all *new  or modified*  files |
|`git diff`     | show file differences that **haven't been** staged |
|`git diff`     | show file differences that **haven't been** staged |
|`git diff`     | show file differences that **haven't been** staged |


# table of contents

|left-aligned| center-aligned| right-aligned|
|:---| :---:|---:|
|git status|git status|git status|
|git diff|git diff|git diff      |


|name|Character|
|---|---|
|Backtick|`|
|pipe|\||


表请

:tada:
	:family_man_woman_boy_boy:

# 行数高亮

```ts{1,6-8}
import type { UserConfig } from '@vuepress/cli'

export const config: UserConfig = {
  title: '你好， VuePress',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
}
```

```ts
// 行号默认是启用的
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:no-line-numbers
// 行号被禁用
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

@[code js{2,4-5}:no-line-numbers](foo.js)


一加一等于： {{ 1 + 1 }}


<span v-for="i in 3"> span: {{ i }} </span>

这是默认主题内置的 `<Badge />` 组件 <Badge text="演示" />


![VuePress Logo](/images/hero.png)



<img :src="$withBase('/images/hero.png')" alt="VuePress Logo">