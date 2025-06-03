from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import openai
import os
from dotenv import load_dotenv

load_dotenv()

openai.api_key = os.getenv("OPENROUTER_API_KEY")
openai.api_base = "https://openrouter.ai/api/v1"

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Message(BaseModel):
    message: str

@app.post("/chat")
def chat_with_openrouter(msg: Message):
    try:
        response = openai.ChatCompletion.create(
            model="mistralai/mistral-7b-instruct:free",
            messages=[
                {"role": "user", "content": msg.message}
            ]
        )
        answer = response['choices'][0]['message']['content']
        return {"response": answer}
    except Exception as e:
        return {"error": str(e)}
