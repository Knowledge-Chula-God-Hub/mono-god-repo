from fastapi import FastAPI
from typing import Union

app = FastAPI()


@app.get("/")
async def root():
    return "<h1>eieieieie<h/1>"

@app.get("/items/{item_id}")
async def read_item(item_id:str):
    return {"item_id": item_id}

fake_items_db = [{"item_name": "Foo"}, {"item_name": "Bar"}, {"item_name": "Baz"}]

@app.get("/items/")
async def read_item(skip: int = 0, limit: int = 10):
    return fake_items_db[skip : skip + limit] 