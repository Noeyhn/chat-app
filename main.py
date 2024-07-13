from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles

class Chat(BaseModel):
    id: int
    content: str

chatlist = []

app = FastAPI()

@app.post("/chats")
def create_chat(chat:Chat):
    chatlist.append(chat)
    return "석세스"

@app.get("/chats")
def read_chat():
    return chatlist

app.mount("/", StaticFiles(directory="static",html=True), name="static")