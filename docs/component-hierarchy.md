## Component Hierarchy

**AuthFormContainer**
* AuthForm

**MainPageContiner**
* NavBar
* ProfileContainer/MainFeedContainer

**MainFeedContainer**
* PhotosIndex
* PhotoIndexContainer

**PhotoIndexContainer**
* PhotosIndex

**PhotoIndexItemContainer**
* PhotoIndexItem

**PhotoIndexItem**
* UserDetailContainer
  * UserDetail
    * ProfilePic
    * Username
    * Location
* PhotoDetailContainer
  * PhotoDetail
    * Photo
    * Caption
    * LikesContainer
      * LikeItem
    * CommentsContainer
      * CommentItem
    * Time

**UserProfileContainer**
* UserProfileDetailContainer
  * UserProfileDetail
* UserPhotosContainer
  * UserPhotos
    * UserPhotoItem
* UserPhotoDetailContainer
  * UserPhotoDetail

**UserProfileDetailContainer**
  * UserProfileDetail
    * ProfilePic
    * Username
    * Followers
    * Followings
    * UserDescription

**UserPhotoDetailContainer**
  * UserPhotoDetail
    * Photo
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
| "/:username/images/:id" | "UserPhotoDetailContainer"
