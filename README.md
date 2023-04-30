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

官方指令初始化，根据对话交互生成eslint配置文件：

```
npm init @eslint/config
```

### 借助 vscode 完成对文件的快速修复

1. 下载 eslint 插件，作者是微软
2. 使用指令：按快捷键 Ctrl+Shift+P 打开命令面板，然后输入并选择“ESLint: Fix all auto-fixable Problems”

## 3. 提交规范

1. 安装 commitizen 和 cz-conventional-changelog
2. 初始化 commitizen

```bash
npx commitizen init cz-conventional-changelog --save-dev --save-exact
```


## 4. 借助 git hook（husky） 在提交代码阶段对文件的快速修复

1. 安装 husky 和 lint-staged 、 commitlint

## 5. 文件名大小写敏感
