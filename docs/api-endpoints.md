# API Endpoints

## HTML API
### Root
* `GET /` - loads React web app

## JSON API
### Users
* `GET /api/users/`  
* `POST /api/users/`
  * Create user (signup)
* `PATCH /api/users/:id`
  * Update user profile (settings)

* `GET /api/users/:id/`
  * Get user profile (profile page/personal feed)
  * responds with images included

### Session
* `POST /api/session`
  * login
* `DELETE /api/session`
  * logout

### Images
* `GET /api/images`
  * should only get images based on current user's following list
* `POST /api/images/
  * Upload image, user_id provided by current user
* `DELETE /api/images/:id`
  * Delete image, user_id must equal current user

* `PATCH /api/images/:id`
  * Update images, user_id must equal current user
* Nested: Resources route

### Likes
* `POST /api/images/:id/like`
* `DELETE /api/images/:id/like/`
* Resource route

### Comments
* `POST /api/comments/`
* `DELETE /api/comments/:id`

### Follows
* `POST /api/users/:id/follow`
* `DELETE /api/users/:id/follow`
* Resource route
