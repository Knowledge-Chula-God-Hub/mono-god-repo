from sqlalchemy.orm import Session
import models, schemas

# USER
def get_user_all(db:Session):
    return db.query(models.UserTable).first()

def get_user(db: Session, id: int):
    return db.query(models.UserTable).filter(models.UserTable.id == id).first()

def get_user_name(db: Session, username: int):
    return db.query(models.UserTable).filter(models.UserTable.username == username).first()

def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.UserTable(username=user.username)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

# POST

def get_post(db:Session, skip: int = 0, limit: int = 100):
    return db.query(models.PostTable).offset(skip).limit(limit).all()

def create_post(db: Session, post: schemas.PostCreate):
    db_user = models.PostTable(ownerID=post.ownerID,
        title = post.title,
        message = post.message,
        tagSubject = post.tagSubject,
        typePost = post.typePost,)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

# Comment

def get_comment(db:Session, postId :int):
    return db.query(models.CommentTable).filter(models.CommentTable.postId == postId).all()

def create_commnet(db: Session, commnet: schemas.CommentCreate):
    db_user = models.UserTable(
        message=commnet.message,
        postId = commnet.postId,
        ownerID = commnet.ownerID
        )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
