from fastapi import FastAPI
from .routes import router  # Make sure the route file is correct

app = FastAPI()

app.include_router(router)
