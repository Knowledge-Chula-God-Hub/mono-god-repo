from pickletools import int4
from fastapi import Depends, FastAPI, HTTPException , APIRouter
from sqlalchemy.orm import Session

import crud, models, schemas
from database import SessionLocal, engine , statusDB

models.Base.metadata.create_all(bind=engine)

app = FastAPI()
routeUser = APIRouter(prefix="/users", tags=["users"])
routePost = APIRouter(prefix="/posts", tags=["posts"])
routeComm = APIRouter(prefix="/comms", tags=["comms"])

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

################# USER ########################
########### get , post , put , delete #########
################# USER ########################

## get ##
@routeUser.get("/all", response_model=list[schemas.User])
async def read_users(db: Session = Depends(get_db)):
    db_user = crud.get_user_all(db)
    return db_user

@routeUser.get("/{id}", response_model=schemas.User)
def read_users(id: int,db: Session = Depends(get_db)):
    db_user = crud.get_user_by_id(db,id = id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user

## post ##
@routeUser.post("/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_name(db,username = user.username)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_user(db,user)

## put ##
@routeUser.put("/{id}", response_model=schemas.User)
def delete_user(id:int,user: schemas.User,db: Session = Depends(get_db)):
    db_user = crud.get_user_by_id(db,id = id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return crud.change_user(db,id=id,user=user)

## delete ##
@routeUser.delete("/{id}", response_model=schemas.User)
def delete_user(id:int,db: Session = Depends(get_db)):
    db_user = crud.get_user_by_id(db,id = id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return crud.delete_user_by_id(db,id=id)

################# POST ########################
########### get , post , put , delete #########
################# POST ########################

## get ##
@routePost.get("/all", response_model=list[schemas.User])
async def read_users(db: Session = Depends(get_db)):
    db_user = crud.get_user_all(db)
    return db_user

@routePost.get("/{id}", response_model=schemas.User)
def read_users(id: int,db: Session = Depends(get_db)):
    db_user = crud.get_user(db,id = id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user

## post ##
@routePost.post("/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_name(db,username = user.username)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_user(db,user)

## put ##
@routePost.put("/{id}", response_model=schemas.User)
def delete_user(id:int,user: schemas.User,db: Session = Depends(get_db)):
    db_user = crud.get_user(db,id = id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return crud.change_user(db,id=id,user=user)

## delete ##
@routePost.delete("/{id}", response_model=schemas.User)
def delete_user(id:int,db: Session = Depends(get_db)):
    db_user = crud.get_user(db,id = id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return crud.delete_user(db,id=id)



################# COMM ########################
########### get , post , put , delete #########
################# COMM ########################




app.include_router(routeUser)
app.include_router(routePost)
app.include_router(routeComm)