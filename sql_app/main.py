from pickletools import int4
from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

from sql_app import crud, models, schemas
from sql_app.database import SessionLocal, engine , statusDB

models.Base.metadata.create_all(bind=engine)

app = FastAPI()


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

################# USER ########################
@app.get("/hello")
def homePage(db: Session = Depends(get_db)):
    db_user = crud.get_user(db,id = 1)
    return {"msg":"Helloword"}

@app.get("/users/all", response_model=schemas.User2)
def read_users(db: Session = Depends(get_db)):
    db_user = crud.get_user_all(db)
    return db_user

@app.get("/users/{id}", response_model=schemas.User)
def read_users(id: int,db: Session = Depends(get_db)):
    db_user = crud.get_user(db,id = id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user

@app.post("/users/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_name(db,username = user.username)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return db_user