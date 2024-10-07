# 维护指南

本项目用 [`uv`](https://github.com/astral-sh/uv) 管理依赖，用 [`pdm`](https://github.com/pdm-project/pdm) 构建包，用 [`ruff`](https://github.com/astral-sh/ruff) 管理格式化和 lint，在 GitHub Actions 上自动发布到 PyPI。

本地开发时：

- `uv sync` 安装依赖
- `uv pip install -e .` 安装本项目自身，这之后就可以用 `dl-a2t` 命令了
- `ruff format` 格式化代码
- `ruff check --fix` 修复 lint errors
- `uv build` 构建包
