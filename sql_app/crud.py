from sqlalchemy.orm import Session
import models, schemas
from models import UserTable , PostTable , CommentTable

###############################################
############## Base CRUD ######################
###############################################

def get_all(db:Session,table):
    return db.query(table).offset(0).limit(1000).all()
    

def get_by_id(db:Session,table,id):
    return db.query(table).filter(table.id == id).first()

def delete_by_id(db:Session,table,id:int):
    task = get_by_id(db,table,id=id)
    db.delete(task)
    db.commit()
    return task


###############################################
############## USER CRUD ######################
###############################################
def get_user_all(db:Session):
    return get_all(db,UserTable)

def get_user_by_id(db: Session, id: int):
    return get_by_id(db,UserTable,id)

def delete_user_by_id(db: Session, id: str):
    task = delete_by_id(db,UserTable,id=id)
    return task

def get_user_name(db: Session, username: int):
    return db.query(UserTable).filter(UserTable.username == username).first()

def create_user(db: Session, user: schemas.UserCreate):
    db_user = UserTable(username=user.username,likes=0,rank =0,profile_url="")
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

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

def get_post_all(db:Session):
    return get_all(db,PostTable)

def get_post_by_id(db: Session, id: int):
    return get_by_id(db,PostTable,id)

def delete_post_by_id(db: Session, id: str):
    task = delete_by_id(db,PostTable,id=id)
    return task

###############################################
############## comm CRUD ######################
###############################################

def get_comm_all(db:Session):
    return get_all(db,CommentTable)

def get_comm_by_id(db: Session, id: int):
    return get_by_id(db,CommentTable,id)

def delete_comm_by_id(db: Session, id: str):
    task = delete_by_id(db,CommentTable,id=id)
    return task