# vite + vue3 创建组件库

## 创建项目

```bash
pnpm create vue
```

修改项目入口

改`src`为`examples`

修改`vite.config.js`的入口

```js
{
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./examples', import.meta.url)),
      _c: fileURLToPath(new URL('./components', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      input: resolve('examples/main.ts')
    }
  }
}
```

修改`index.html`引入的`main.js`

```html
<script type="module" src="/examples/main.ts"></script>
```

修改`tsconfig.app.json`的路径映射

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["examples/*"],
      "_c/*": ["components/*"]
    }
  }
}
```

移动`components`到根目录

修改脚本

```js
"scripts": {
  "format": "prettier --write examples/ components/"
}
```

运行`pnpm dev`、`pnpm test:unit`、`pnpm lint`、`pnpm format` 等脚本命令，测试配置是否正常。



## eslint

```bash
pnpm add -D eslint @mistjs/eslint-config-vue
```

`.eslintrc.js`

```js
module.export = {
  extends: ['@mistjs/eslint-config-vue'],
  rules: {
    // your rules
  }
}
```

## 文档站点搭建

### 使用 vuepress

安装依赖

```bash
pnpm add -D vuepress@next
```
编辑命令

```js
"docs:dev": "vuepress dev docs",
"docs:build": "vuepress build docs"
```
### 使用 histoire

### 使用 vitepress


### 打包

打包后希望能达到这样的目标

1. 有 es 模块，能实现按需加载

2. 有 umd 模块，能实现全局引入

3. 有独立的 css 文件，能实现减少体积

4. 有 d.ts 文件，能实现类型提示

5. 有 source map 文件，能实现调试

6. 有压缩文件，能实现减少体积

