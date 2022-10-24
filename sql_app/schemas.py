from datetime import datetime
from typing import Union

from pydantic import BaseModel

# User
class UserBase(BaseModel):
    username: str
class UserCreate(UserBase):
    pass

class User(UserBase):
    id : int
    likes : int
    rank : int
    profileUrl :str
    class Config:
        orm_mode = True


# Post
class PostBase(BaseModel):
    ownerID : int
    title : Union[str, None]
    message : Union[str, None]
    tagSubject : str
    typePost : str

class PostCreate(PostBase):
    pass

class Post(PostBase):
    id : int
    isEnd : bool
    numberOfEdits : int
    timeCreate : datetime
    timeLastEdited : datetime
    class Config:
        orm_mode = True




# Comment
class CommentBase(BaseModel):
    message : Union[str, None]
    postId : int
    ownerID : int

class CommentCreate(CommentBase):
    pass

class Comment(CommentBase):
    score : int
    id : int
    timeCreate : datetime
    timeLastEdited : datetime
    numberOfEdits : int
    class Config:
        orm_mode = True
