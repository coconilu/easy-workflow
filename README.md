# easy-workflow

个人工作流，包含了一些常用的工具，以及一些常用的配置文件。

## 1. .editorconfig

```
# EditorConfig helps developers define and maintain consistent
# coding styles between different editors and IDEs
# editorconfig.org

root = true

[*]
charset = utf-8
indent_style = space
indent_size = 4
end_of_line = lf
trim_trailing_whitespace = true
insert_final_newline = true

[*.{js,jsx,ts,tsx,py,cpp,h,html,css,json,yml,md}]
indent_size = 2
```

## 2. eslint

官方指令初始化，根据对话交互生成 eslint 配置文件：

```bash
npm init @eslint/config
```

### 借助 vscode 完成对文件的快速修复

1. 下载 eslint 插件，作者是微软
2. 使用指令：按快捷键 Ctrl+Shift+P 打开命令面板，然后输入并选择"ESLint: Fix all auto-fixable Problems"

## 3. prettier

1. 下载 prettier

```bash
pnpm i -D prettier
```

2. 配置 prettier

```json
{
  "printWidth": 80, // 每行代码长度（默认80）
  "tabWidth": 2, // 每个tab相当于多少个空格（默认2）
  "useTabs": false, // 是否使用tab进行缩进（默认false）
  "semi": true, // 声明结尾使用分号(默认true)
  "singleQuote": true, // 使用单引号（默认false）
  "quoteProps": "as-needed", // 对象属性的引号使用
  "jsxSingleQuote": false, // jsx中使用单引号（默认false）
  "trailingComma": "none", // 多行使用拖尾逗号（默认none）
  "bracketSpacing": true, // 对象字面量的大括号间使用空格（默认true）
  "jsxBracketSameLine": false, // jsx中的>放置在最后一行的结尾，而不是另起一行（默认false）
  "arrowParens": "avoid", // 只有一个参数的箭头函数的参数是否带圆括号（默认avoid）
  "proseWrap": "preserve", // 控制文本换行的方式，是否要换行
  "htmlWhitespaceSensitivity": "css", // 指定HTML文件的全局空白区域敏感度
  "endOfLine": "lf", // 换行符使用
  "embeddedLanguageFormatting": "auto" // 是否格式化嵌入式代码
}
```

3. 安装 vscode 插件 ——— "Prettier - Code formatter"，并设置 "Format On Save" 时自动格式化

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

### 解决与 eslint 的冲突

安装依赖：

```bash
pnpm i -D eslint-plugin-prettier eslint-config-prettier
```

在 .eslintrc.js 中添加配置：

```js
module.exports = {
  extends: ['others', 'plugin:prettier/recommended'], // 确保 prettier 在最后一个
};
```

## 4. 提交规范

1. 安装 commitizen 和 cz-conventional-changelog
2. 初始化 commitizen

```bash
npx commitizen init cz-conventional-changelog --save-dev --save-exact
```

## 5. 借助 git hook（husky） 在提交代码阶段对文件的快速修复

1. 安装 husky 和 lint-staged 、 commitlint
2. 配置 package.json

```
{
  "lint-staged": {
    "**/*": "prettier --write --ignore-unknown"
  }
}
```

## 6. 文件名大小写敏感
