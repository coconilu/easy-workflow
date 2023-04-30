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
