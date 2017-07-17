## Component Hierarchy

**AuthFormContainer**
* AuthForm

**FeedContainer**
* NavBar
* Feed

**ImageIndexContainer**
* ImagesIndex

**ImageIndexItemContainer**
* ImageIndexItem

**ImageIndexItem**
* UserDetailContainer
  * UserDetail
    * ProfilePic
    * Username
    * Location
* ImageDetailContainer
  * ImageDetail
    * Image
    * Caption
    * LikesContainer
      * LikeItem
    * CommentsContainer
      * CommentItem
    * Time

**UserProfileContainer**
* UserProfileDetailContainer
  * UserProfileDetail
* UserImagesContainer
  * UserImages
    * UserImageItem
* UserImageDetailContainer
  * UserImageDetail

**UserProfileDetailContainer**
  * UserProfileDetail
    * ProfilePic
    * Username
    * Followers
    * Followings
    * UserDescription

**UserImageDetailContainer**
  * UserImageDetail
    * Image
    * Caption
    * LikesContainer
      * LikeItem
    * CommentsContainer
      * CommentItem
    * Time

## Routes

| Path | Component |
| --- | --- |
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| --- | --- |
| "/" | "FeedContainer" |
| "/:username" | "UserProfileContainer" |
| "/:username/images/:id" | "UserImageDetailContainer"
