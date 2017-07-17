# Schema Information

## users

| column name | data type | details |
| ----------- |-----------| --------|
| id          | integer   | not null, primary key |
| username    | string    | not null, indexed, unique |
| password_digest | string | not null |
| session_token | string | not null, indexed, unique |
| avatar_url | string | |
| description | text | |


## images

| column name | data type | details |
| ----------- |-----------| --------|
| id | integer | not null, primary key |
| img_url | string | not null, indexed, unique |
| user_id | integer | not null, foreign key (references users), indexed
| caption | text | |
| location | string | |

## likes
| column name | data type | details |
| ----------- |-----------| --------|
| id | integer | not null, primary key |
| likable_type | string | not null |
| likable_id | integer | not null |
| liker_id | integer | not null, foreign key (references users), indexed |
|  | | unique_index[likable_type, likeable_id, liker_id] |

## comments
| column name | data type | details |
| ----------- |-----------| --------|
| id | integer | not null, primary key |
| body | text | not null |
| author_id | integer | not null, foreign key (references users), indexed |
| image_id | integer | not null, foreign key (references images), indexed |

## follows
| column name | data type | details |
| ----------- |-----------| --------|
| id | integer | not null, primary key |
| follower_id | integer | not null, foreign key (references users), indexed, unique[followee_id] |
| followee_id | integer | not null, foreign key (references users), indexed |
| | | unique_index[follower_id, followee_id] |
