from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
import json
import os
from fastapi.responses import FileResponse
from functools import lru_cache

DATABASE_FILE = "data.json"

app = FastAPI()

origins = [
    "http://localhost:3000",  # Frontend development server
    "https://mosaics.vbilla.fr",  # Frontend production server
    "https://api.mosaics.vbilla.fr",  # Backend API domain
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/health")
def read_root():
    return {"status": "UP"}


@app.get("/refresh")
async def refresh_cache():
    gather_all_details.cache_clear()
    return


@app.get("/mosaics")
async def get_mosaics(clear_cache: bool = Query(default=False, alias='clear-cache')):
    if clear_cache:
        gather_all_details.cache_clear()

    return gather_all_details()


@lru_cache()
def gather_all_details():
    mosaics = []
    for slug in os.listdir("mosaics"):
        details = os.path.join("mosaics", slug, "details.json")
        thumbnail = os.path.join("mosaics", slug, "thumbnail.webp")

        # Skips images that have yet to be generated.
        if not os.path.exists(details) or not os.path.exists(thumbnail):
            continue

        with open(details) as f:
            mosaics.append(json.load(f))
    return mosaics


@app.get("/mosaics/{slug}")
async def get_mosaic(slug: str):
    path = os.path.join("mosaics", slug, "details.json")

    if not os.path.exists(path):
        raise HTTPException(status_code=404, detail="Mosaic not found")

    with open(path) as f:
        return json.load(f)


@app.get("/mosaics/{slug}/original")
async def serve_image(slug: str):
    path = os.path.join("mosaics", slug, "original.webp")

    if not os.path.exists(path):
        raise HTTPException(status_code=404, detail="Original not found")

    return FileResponse(path)


@app.get("/mosaics/{slug}/thumbnail")
async def serve_image(slug: str):
    path = os.path.join("mosaics", slug, "thumbnail.webp")

    if not os.path.exists(path):
        raise HTTPException(status_code=404, detail="Thumbnail not found")

    return FileResponse(path)


@app.get("/mosaics/{slug}/tiles/{zoom}/{x}_{y}")
async def serve_image(slug: str, zoom: int, x: int, y: int):
    filename = f"zoom-{zoom}_{x}-{y}.webp"
    path = os.path.join("mosaics", slug, filename)

    if not os.path.exists(path):
        raise HTTPException(status_code=404, detail="Tile not found")

    return FileResponse(path)
