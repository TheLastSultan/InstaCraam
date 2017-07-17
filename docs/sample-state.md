## Sample State

~~~~
{
  session: {
    currentUser: {...},
    errors: []
  },
  images: {
    byId: {
      1: {
        id: 1,
        img_url: 'images/houston.jpg',
        user_id: 1
        caption: 'been trill',
        location: 'Houston', },
        likes: 23,
        createdAt: "2017-07-17T00:03:12:00"
        commentsCount: 4,
        comments: {
          3: {
            id: 4,
            username: 'bailey',
            body: 'Cool photo!',
            createdAt: "2017-07-17T01:02:03:04"
          },
          5: {
            id: 5,
            username: 'batman',
            body: 'Reminds me of Gotham!',
            createdAt: "2017-07-17T01:02:03:04"
          }
        }
      2: {...},
      3: {...}
    },
    byPopularity: [3, 4, 1, 2]
  },
  users: {
    byId: {
      1: {
        id: 1,
        username: 'norris',
        avatar_url: 'https://path/to/avatar.png',
        description: 'Houston 100',
        followersCount: 4,
        followers: [2, 3, 4, 10],
        followingCount: 3,
        following: [2, 3, 4]
      },
      ...
    },
    bySimilarity: [4, 2, 1, 3]
  }
}
~~~~
