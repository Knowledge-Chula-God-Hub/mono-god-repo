from email.policy import default
from sqlalchemy import Boolean, Column, ForeignKey, Integer, Text, String , SmallInteger , DateTime, VARCHAR
from sqlalchemy.orm import relationship

from database import Base
from sqlalchemy.sql import func

class UserTable(Base):
    __tablename__ = "usertable"
    username = Column(VARCHAR(length = 50))
    id = Column(Integer, primary_key=True, index=True)
    likes = Column(SmallInteger ,default = 0,nullable=True)
    rank  = Column(SmallInteger ,default = 0,nullable=True)
    profile_url = Column(VARCHAR(length = 50), default="",nullable=True)

    # Post = relationship("PostTable", back_populates="owner")
    # Comment = relationship("CommentTable", back_populates="owner")

class PostTable(Base):
    __tablename__ = "PostTable"
    id = Column(Integer, primary_key=True, index=True)
    ownerID = Column(Integer , ForeignKey("UserTable.id"),nullable=True)
    isEnd = Column(Boolean,default = False,nullable=True)
    title = Column(String(length = 80))
    message = Column(Text,nullable=True)
    tagSubject = Column(String(length = 20),nullable=True)
    typePost = Column(String(length = 20),nullable=True)
    timeCreate = Column(DateTime(timezone=True), server_default=func.now(),nullable=True)
    timeLastEdited = Column(DateTime(timezone=True), onupdate=func.now(),nullable=True)
    numberOfEdits = Column(Integer,nullable=True) #### smallserial

    # owner = relationship("UserTable", back_populates="post")
    # comment = relationship("CommentTable", back_populates="post")

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

    # owner = relationship("UserTable", back_populates="comment")
    # inPost = relationship("PostTable", back_populates="comment")
