from typing import TypedDict, cast

import whisper


class Result(TypedDict):
    text: str
    segments: list[dict]


def transcribe_audio(file_path: str, model="tiny"):
    model = whisper.load_model(model, download_root="./whisper-model")
    result = model.transcribe(file_path)
    return cast(Result, result)
