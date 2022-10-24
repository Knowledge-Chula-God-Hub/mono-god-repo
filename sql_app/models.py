from email.policy import default
from sqlalchemy import Boolean, Column, ForeignKey, Integer, Text, String , SmallInteger , DateTime
from sqlalchemy.orm import relationship

from .database import Base
from sqlalchemy.sql import func

class UserTable(Base):
    __tablename__ = "UserTable"
    username = Column(String(length = 50))
    id = Column(Integer, primary_key=True, index=True)
    likes = Column(SmallInteger ,default = 0)
    rank  = Column(SmallInteger ,default = 0)
    profileUrl = Column(String(length = 50), default="")

    Post = relationship("PostTable", back_populates="owner")
    Comment = relationship("CommentTable", back_populates="owner")

class PostTable(Base):
    __tablename__ = "PostTable"
    id = Column(Integer, primary_key=True, index=True)
    ownerID = Column(Integer , ForeignKey("UserTable.id"))
    isEnd = Column(Boolean,default = False)
    title = Column(String(length = 80))
    message = Column(Text)
    tagSubject = Column(String(length = 20))
    typePost = Column(String(length = 20))
    timeCreate = Column(DateTime(timezone=True), server_default=func.now())
    timeLastEdited = Column(DateTime(timezone=True), onupdate=func.now())
    numberOfEdits = Column(Integer) #### smallserial

    owner = relationship("UserTable", back_populates="post")
    comment = relationship("CommentTable", back_populates="post")

class CommentTable(Base):
    __tablename__ = "CommentTable"
    id = Column(Integer, primary_key=True, index=True)
    postId = Column(Integer , ForeignKey("PostTable.id"),nullable = False) # NOT NULL references PostTable(Id),
    ownerID = Column(Integer , ForeignKey("UserTable.id"),nullable = False)
    score = Column(SmallInteger,default = 0)
    message = Column(Text)
    timeCreate = Column(DateTime(timezone=True), server_default=func.now())
    timeLastEdited = Column(DateTime(timezone=True), onupdate=func.now())
    numberOfEdits = Column(Integer) #### smallserial

    owner = relationship("UserTable", back_populates="comment")
    inPost = relationship("PostTable", back_populates="comment")
