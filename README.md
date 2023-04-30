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
  "semi": false, // 声明结尾使用分号(默认true)
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
pnpm install -D eslint-plugin-prettier
pnpm install -D --save-exact prettier
```

在 .eslintrc.js 中添加配置：

```js
module.exports = {
  extends: ['others', 'plugin:prettier/recommended'] // 确保 prettier 在最后一个
}
```

> 这会将 Prettier 规则添加到 ESLint 配置中，同时在执行 eslint --fix 时，Prettier 也会自动修复代码格式。
> 这样做有个好处就是把 prettier 的格式化功能集成到 eslint 中，这样就不需要安装 prettier 插件了，而且也不会与 eslint 的格式化功能冲突了。
> package.json 里的 lint-staged 也不需要再配置 prettier 了。

## 4. 提交规范

1. 安装 commitizen 和 cz-conventional-changelog
2. 初始化 commitizen

```bash
pnpm i -D commitizen
npx commitizen init cz-conventional-changelog --pnpm --save-dev --save-exact
```

> 这个指令执行两件事：
> 安装 commitizen 和 cz-conventional-changelog
> 在 package.json 中添加配置 config.commitizen

至此，执行命令 `npm run commit`，就可以交互式的生成符合规范的 commit message 了。
但是并没有强制校验提交信息，所以还需要安装 husky 和 commitlint。

## 5. 借助 git hook（husky） 在提交代码阶段对文件的快速修复和对提交信息进行校验（commitlint）

1. 安装 husky 和 commitlint

```bash
pnpm i -D husky @commitlint/cli @commitlint/config-conventional
```

2. 初始化 husky 和 commitlint

```bash
npx husky-init && npm install
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

1. 安装 & 初始化 husky

```bash
pnpm dlx husky-init && pnpm install # pnpm
```

> 它做了这几件事：
> 1、安装 husky
> 2、添加一个 prepare 生命周期到 package.json
> 3、添加一个示例到 .husky/pre-commit

2. 添加更多的钩子

```bash
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

3. 把自定义的钩子同步到.git/hooks

```bash
npx husky install
```

### 添加钩子，提交代码时自动修复

添加 husky 钩子：

```bash
npx husky add .husky/pre-commit 'pnpm run lint-staged'
```

安装 lint-staged，来仅对暂存（staged）的文件执行 ESLint

```bash
pnpm i -D lint-staged
```

配置 lint-staged

```JSON
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "git add"
    ],
    "*.{json,css,md}": [
      "prettier --write",
      "git add"
    ]
  }
}
```

### 添加钩子，提交代码时校验提交信息

```bash
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

1. 安装 commitlint

```bash
pnpm i -D @commitlint/cli @commitlint/config-conventional
```

2. 配置 commitlint

```bash
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

## 6. 文件名大小写敏感

```bash
git config core.ignorecase false
```
