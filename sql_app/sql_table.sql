DROP table posttable;
DROP table commenttable;
DROP table usertable;

create table UserTable(
    username varchar(50),
    Id serial primary key ,
    likes smallint,
    rank smallint,
    profile_url varchar(50)
);
create table PostTable(
    is_end boolean DEFAULT false,
    title varchar(80),
    likes int,
    message text,
    tag_subject varchar(7),
    Type varchar(20),
    Id int PRIMARY KEY ,
    owner_id int NOT NULL references usertable(Id),
    time_create timestamp DEFAULT CURRENT_TIMESTAMP ,
    time_last_edited timestamp DEFAULT CURRENT_TIMESTAMP,
    number_of_edits smallserial
);
create table CommentTable(
    id int PRIMARY KEY ,
    post_id int NOT NULL references posttable(Id),
    owner_id int NOT NULL references usertable(Id),
    score smallint DEFAULT 0,
    message text,
    time_create timestamp DEFAULT CURRENT_TIMESTAMP ,
    time_last_edited timestamp DEFAULT CURRENT_TIMESTAMP,
    number_of_edits smallserial
);