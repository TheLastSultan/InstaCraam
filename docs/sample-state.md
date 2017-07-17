## Sample State

~~~~
{
  session: {
    currentUser: {
      id: 1,
      username: "shootr",
      prof_pic_path: "/profile_pic.jpg",
      description: "Let's go shoot!"
    },
    errors: []
  },
  images: {
    1: {
      img_path: "images/houston.jpg",
      caption: "Been trill",
      location: "Houston"
      user_id: 1
      likes: [
        {
          id: 1
          liker_id: 2
        }
      ]
      comments: [
        {
          id: 1
          body: "Maad city"
          author_id: 3
        },
        {
          id: 2
          body: "Holdin' it down"
          author_id: 3
        }
      ]
    }
    2: ...
  },
  user: {
    1: {
      id: 1,
      username: "shootr",
      prof_pic_path: "/profile_pic.jpg"
      description: "Let's go shoot!",
      followers: [
        {
          id: 1,
          follower_id: 2
        }
      ]
      followings: [
        {
          id: 2,
          followee_id: 2
        }
      ]
    },
    2: {
      id: 2,
      username: "baiely",
      prof_pic_path: "/bailey.jpg"
      description: "Shootr's pup",
      followers: [
        {
          id: 3,
          follower_id: 1
        }
      ]
      followings: [
        {
          id: 4,
          followee_id: 1
        }
      ]
    }
  }
}
~~~~
