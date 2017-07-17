# API Endpoints

## HTML API
### Root
* `GET /` - loads React web app

## JSON API
### Users
* `POST /api/users/`
* `PATCH /api/users/:id`
* `GET /api/users/:id/`

### Session
* `POST /api/session`
* `DELETE /api/session`

### Photos

* `POST /api/users/:id/images`
  * upload an image for a user
* `GET /api/users/:id/followers`
  * index of all followers for user
* `GET /api/users/:id/following`
    * index of people user is following

<!-- * `GET /api/images`
* `GET /api/images/:id`
* `PATCH /api/images/:id`
* `DELETE /api/images/:id`
* `GET /api/images/:id/likes`
  * index of all likes for an image
* `POST /api/images/:id/likes`
  * create a like for an image
* `GET /api/images/:id/comments`
  * index of all comments for an image
* `POST /api/images/:id/comments`
  * create a comment for an image -->

### Likes
* `POST /api/likes/:id`
* `DELETE /api/likes/:id`

### Comments
* `POST /api/comments/:id`
* `DELETE /api/comments/:id`

### Follows
* `POST /api/users/:id/follows`
* `DELETE /api/follows/:id`
