from sqlalchemy.orm import Session
import models, schemas
from models import UserTable

###############################################
############## Base CRUD ######################
###############################################

def get_all(db:Session,table):
    return db.query(table).offset(0).limit(1000).all()
    

def get_by_id(db:Session,table,id):
    return db.query(table).filter(table.id == id).first()

def delete_by_id(db:Session,table,id):
    task = get_by_id(db,table,id=id)
    db.delete(task)
    db.commit()
    return task


###############################################
############## USER CRUD ######################
###############################################
def get_user_all(db:Session):
    return get_all(db,models.UserTable)

def get_user_by_id(db: Session, id: int):
    return get_by_id(db,models.UserTable,id)

def get_user_name(db: Session, username: int):
    return db.query(models.UserTable).filter(models.UserTable.username == username).first()

def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.UserTable(username=user.username,likes=0,rank =0,profile_url="")
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def delete_user(db: Session, id: str):
    task = delete_by_id(db,models.UserTable,id=id)
    db.delete(task)
    db.commit()
    return task

def change_user(db: Session, id:int,user: schemas.User,):
    task = get_user(db,id=id)
    task.username = user.username
    task.likes = user.likes
    task.rank = user.rank
    task.profile_url = user.profile_url
    db.add(task)
    db.commit()
    db.refresh(task)
    return task

###############################################
############## post CRUD ######################
###############################################



###############################################
############## comm CRUD ######################
###############################################