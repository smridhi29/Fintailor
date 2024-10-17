from fastapi import APIRouter

router = APIRouter()

@router.post("/login")
async def login(email: str, password: str):
    return {"message": "Login successful"}
