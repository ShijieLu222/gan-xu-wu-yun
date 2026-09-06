from pathlib import Path
import json

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

BASE_DIR = Path(__file__).resolve().parents[1]

app = FastAPI(
    title="柑叙乌云 API",
    description="品牌官网的产品与活动内容接口",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)


def load_json(name: str):
    with (BASE_DIR / "data" / name).open(encoding="utf-8") as source:
        return json.load(source)


@app.get("/api/health", tags=["system"])
def health() -> dict[str, str]:
    return {"status": "ok", "brand": "柑叙乌云"}


@app.get("/api/products", tags=["content"])
def products() -> list[dict]:
    return load_json("products.json")


@app.get("/api/events", tags=["content"])
def events() -> list[dict]:
    return load_json("events.json")


@app.get("/api/store", tags=["content"])
def store() -> dict:
    return load_json("store.json")
