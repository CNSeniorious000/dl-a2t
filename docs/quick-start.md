# 使用指南

使用前先确保 FFmpeg 已经在 PATH 中了。可以通过 `ffmpeg -version` 来检查。

> [!TIP]
> 如果没有，参考[这个教程](/docs/ffmpeg)安装。

## 安装

```sh
pip install dl-a2t
```

## 使用

处理一个视频 url：

```sh
dl-a2t run url output
```

处理一个文件，每行是一个 url：

```sh
dl-a2t batch input_file output_folder
```

会在 output_folder 中保存音频文件，以及保存一个 results.jsonl 文件，每行一个结果，类似这样：

```jsonl
{"url": "<input url>", "audio": "<audio file path>", "transcript": { ... }, "error": "<error traceback>"}
{"url": "<input url>", "audio": "<audio file path>", "transcript": { ... }, "error": "<error traceback>"}
{"url": "<input url>", "audio": "<audio file path>", "transcript": { ... }, "error": "<error traceback>"}
```

| 参数       | 类型   | 说明                           |
| ---------- | ------ | ------------------------------ |
| url        | str    | 输入的视频 url                 |
| audio      | str    | 下载的音频路径                 |
| transcript | object | Whisper 返回的字典             |
| error      | str    | 如果出错，则为报错的 traceback |

## 其它方式

### pipx

如果你安装了 [`pipx`](https://github.com/pypa/pipx)，你可以使用以下命令来安装 `dl-a2t`：

```sh
pipx install dl-a2t
```

甚至直接免安装使用：

```sh
pipx run dl-a2t ...
```

### uv

[`uv`](https://github.com/astral-sh/uv) 有一个类似 `pipx` 的 API，你可以使用以下命令来直接使用 `dl-a2t`：

```sh
uvx dl-a2t ...
```
