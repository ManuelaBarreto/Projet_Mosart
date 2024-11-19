from fastapi import FastAPI, HTTPException
from typing import Optional
from pydantic import BaseModel
import json

DATABASE_FILE = "data.json"

class Item(BaseModel):
    #id: Optional[int] = None
    img_url: str
    title: Optional[str] = None
    description: Optional[str] = None

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
async def get_item(item_id: int):
    items = read_items_from_db()
    if item_id < 0 or item_id >= len(items):
        raise HTTPException(status_code=404, detail="Item not found")
    return {"item": items[item_id]}

@app.post("/items/")
async def store_item(item: Item):
    items = read_items_from_db()
    #next_id = max([entry["id"] for entry in items], default=0) + 1
    #item["id"] = next_id
    items.append(item.model_dump())
    store_item_to_db(items)
    return {"result": item}

def read_items_from_db():
    try:
        with open(DATABASE_FILE,'r') as file:
            items = json.load(file)
    except FileNotFoundError:
        items = []

    return items

def store_item_to_db(data):
    with open(DATABASE_FILE, 'w') as file:
        json.dump(data, file, indent=2)