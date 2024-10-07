# 使用指南

使用前先确保 FFmpeg 已经在 PATH 中了。可以通过 `ffmpeg -version` 来检查。

> [!TIP]
> 如果没有，参考[这个教程](/docs/ffmpeg)安装。

## 安装

```sh
pip install dl-a2t
```

## 使用

```sh
dl-a2t url output
```

## 输出格式

- 输出为 JSONL 文件：`dl_a2t.run <url> output.jsonl`
- 输出为 JSON 文件：`dl_a2t.run <url> output.json`
- 输出为 TXT 文件：`dl_a2t.run <url> output.txt`

## 其它方式

### pipx

如果你安装了 `pipx`，你可以使用以下命令来安装 `dl-a2t`：

```sh
pipx install dl-a2t
```

甚至直接免安装使用：

```sh
pipx run dl-a2t "https://..." output.json
```

### uv

`uv` 有一个类似 `pipx` 的 API，你可以使用以下命令来直接使用 `dl-a2t`：

```sh
uvx dl_a2t.run "https://..." output.json
```
