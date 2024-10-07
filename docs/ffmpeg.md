# FFmpeg

[Whisper](https://github.com/openai/whisper) 依赖于 [FFmpeg](https://ffmpeg.org/) 来处理音频文件。确保 FFmpeg 在 `PATH` 中。

如果没有，在[这里](https://ffmpeg.org/download.html)安装，或者用命令行：

```sh
# on Ubuntu or Debian
sudo apt update && sudo apt install ffmpeg

# on Arch Linux
sudo pacman -S ffmpeg

# on MacOS using Homebrew (https://brew.sh/)
brew install ffmpeg

# on Windows using Chocolatey (https://chocolatey.org/)
choco install ffmpeg

# on Windows using Scoop (https://scoop.sh/)
scoop install ffmpeg
```
