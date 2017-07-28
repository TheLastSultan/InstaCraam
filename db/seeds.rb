# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Image.destroy_all
Comment.destroy_all
Like.destroy_all

user1 = User.create!(username: 'norris', password: 'password', fullname: 'Norris Kwan', description: 'Born and bred in Houston. Trained and polished in SF.', avatar_url: 'https://s3-us-west-2.amazonaws.com/shootr-dev/__Norris+HS+copy.jpg')
user2 = User.create!(username: 'bailey', password: 'password', fullname: 'Bailey Boy', description: "Woof woof, bark bark, sniff sniff. ~ I'm Norris' dog!", avatar_url: 'https://s3-us-west-2.amazonaws.com/shootr-dev/bailey.jpg')
user3 = User.create!(username: 'mikey', password: 'password', fullname: 'Michelangelo', description: 'You think your tough enough to stand up to my HOT NUNCHUCK FURY?! BOOYAKASHA!!', avatar_url: 'https://s3-us-west-2.amazonaws.com/shootr-dev/mikey.png')
user4 = User.create!(username: 'leo',    password: 'password', fullname: 'Leonardo', description: 'I eat, sleep and breath Ninjustu.', avatar_url: 'https://s3-us-west-2.amazonaws.com/shootr-dev/leo.jpg')
user5 = User.create!(username: 'raph',   password: 'password', fullname: 'Raphael', description: "Name's Raph. If there's a brawl, count me in.", avatar_url: 'https://s3-us-west-2.amazonaws.com/shootr-dev/raph.jpg')
user6 = User.create!(username: 'donnie', password: 'password', fullname: 'Donatello', description: "I'm the brains of this operation. I invent gadgets, weapons and awesome vehicles to keep me and my brothers safe.", avatar_url: 'https://s3-us-west-2.amazonaws.com/shootr-dev/donnie.jpg')

batman = User.create!(username: 'Batman',  password: 'password', fullname: 'Bruce Wayne', description: 'The Dark Knight.', avatar_url: 'https://s3-us-west-2.amazonaws.com/shootr-dev/batman.jpg')


image01 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/496.jpeg', user_id: user1.id, caption: 'Who?',  location: 'houston')
image02 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/497.jpeg', user_id: user1.id, caption: 'What?',   location: 'new york')
image03 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/498.jpeg', user_id: user1.id, caption: 'Where?', location: 'hong kong')
image04 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/499.jpeg', user_id: user1.id, caption: 'When?',  location: 'los angeles')
image05 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/500.jpeg', user_id: user1.id, caption: 'How?', location: 'san francisco')

image06 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/501.jpeg', user_id: user2.id, caption: 'ME!', location: 'houston')
image07 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/502.jpeg', user_id: user2.id, caption: 'YES!', location: 'new york')
image08 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/546.jpeg', user_id: user2.id, caption: 'HERE!', location: 'hong kong')
image09 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/547.jpeg', user_id: user2.id, caption: 'NOW!', location: 'los angeles')
image10 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/548.jpeg', user_id: user2.id, caption: 'ANY!', location: 'san francisco')

image11 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/549.jpeg', user_id: user3.id, caption: 'hello', location: 'houston')
image12 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/550.jpeg', user_id: user3.id, caption: 'greetings', location: 'new york')
image13 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/551.jpeg', user_id: user3.id, caption: 'hola', location: 'hong kong')
image14 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/552.jpeg', user_id: user3.id, caption: 'hi', location: 'los angeles')
image15 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/596.jpeg', user_id: user3.id, caption: 'sup', location: 'san francisco')

image16 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/597.jpeg', user_id: user4.id, caption: 'byeee', location: 'houston')
image17 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/598.jpeg', user_id: user4.id, caption: 'peace!', location: 'new york')
image18 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/599.jpeg', user_id: user4.id, caption: 'holla', location: 'hong kong')
image19 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/600.jpeg', user_id: user4.id, caption: 'bounce', location: 'los angeles')
image20 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/601.jpeg', user_id: user4.id, caption: 'later!', location: 'san francisco')

image21 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/602.jpeg', user_id: user5.id, caption: 'zzz', location: 'houston')
image22 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/696.jpeg', user_id: user5.id, caption: 'ooo!', location: 'new york')
image23 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/697.jpeg', user_id: user5.id, caption: 'whaa', location: 'hong kong')
image24 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/698.jpeg', user_id: user5.id, caption: 'noo', location: 'los angeles')
image25 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/699.jpeg', user_id: user5.id, caption: 'yiss!', location: 'san francisco')

image26 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/700.jpeg', user_id: user6.id, caption: 'ahoy', location: 'houston')
image27 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/701.jpeg', user_id: user6.id, caption: 'oy', location: 'new york')
image28 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/702.jpeg', user_id: user6.id, caption: 'yo', location: 'hong kong')
image29 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/746.jpeg', user_id: user6.id, caption: 'aloha', location: 'los angeles')
image30 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/747.jpeg', user_id: user6.id, caption: 'gnar', location: 'san francisco')

image31 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/748.jpeg', user_id: user1.id, caption: 'moo', location: 'houston')
image32 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/749.jpeg', user_id: user2.id, caption: 'boo', location: 'new york')
image33 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/750.jpeg', user_id: user3.id, caption: 'too', location: 'hong kong')
image34 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/751.jpeg', user_id: user4.id, caption: 'zoo', location: 'los angeles')
image35 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/752.jpeg', user_id: user5.id, caption: 'foo', location: 'san francisco')

image36 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/gotham.jpg', user_id: batman.id, caption: "Sometimes the truth isn't good enought, sometimes people deserve more.", location: 'Gotham City')
image37 = Image.create!(img_url: 'x', image: 'https://s3-us-west-2.amazonaws.com/shootr-dev/batmobile.jpg', user_id: batman.id, caption: '0-60 in 3.0 seconds', location: 'The Batcave')

comment01 = Comment.create!(author_id: user1.id, post_id: image12.id, body: "Awesome photo! Keep on shooting!")
comment02 = Comment.create!(author_id: user1.id, post_id: image23.id, body: "Spectacular composition.")
comment03 = Comment.create!(author_id: user1.id, post_id: image34.id, body: "Absolutely stunning!.")

comment04 = Comment.create!(author_id: user2.id, post_id: image11.id, body: "woof woof woof!")
comment05 = Comment.create!(author_id: user2.id, post_id: image22.id, body: "bark bark bark!")
comment06 = Comment.create!(author_id: user2.id, post_id: image33.id, body: "sniff sniff sniff!")

comment07 = Comment.create!(author_id: user3.id, post_id: image30.id, body: "Cool photo bro")
comment08 = Comment.create!(author_id: user3.id, post_id: image10.id, body: "Radical shot bruh")
comment09 = Comment.create!(author_id: user3.id, post_id: image20.id, body: "Gnar dude. Gnar.")

comment10 = Comment.create!(author_id: user4.id, post_id: image30.id, body: "That's a great photo.")
comment11 = Comment.create!(author_id: user4.id, post_id: image03.id, body: "Very nice lighting!")
comment12 = Comment.create!(author_id: user4.id, post_id: image06.id, body: "Top notch!")

comment13 = Comment.create!(author_id: user5.id, post_id: image21.id, body: "It's alright. Could be tougher.")
comment14 = Comment.create!(author_id: user5.id, post_id: image17.id, body: "Wanna take this outside?!")
comment15 = Comment.create!(author_id: user5.id, post_id: image13.id, body: "I've had better pizza than this.")

comment16 = Comment.create!(author_id: user6.id, post_id: image29.id, body: "What kind of aperature did you use?")
comment17 = Comment.create!(author_id: user6.id, post_id: image19.id, body: "Great application of the rule of thirds!")
comment18 = Comment.create!(author_id: user6.id, post_id: image09.id, body: "You may want to adjust the ISO and shutter speed.")

comment19 = Comment.create!(author_id: user3.id, post_id: image29.id, body: "I don't know you... but bravo.")
comment20 = Comment.create!(author_id: user3.id, post_id: image11.id, body: "Dig your feed!")
comment21 = Comment.create!(author_id: user3.id, post_id: image34.id, body: "I gotta sign up after seeing this!")

comment22 = Comment.create!(author_id: user1.id, post_id: image35.id, body: "Lorem ipsum dolor sit amet!")
comment23 = Comment.create!(author_id: user1.id, post_id: image33.id, body: "consectetur adipisicing elit, sed do!")
comment24 = Comment.create!(author_id: user1.id, post_id: image31.id, body: "eiusmod tempor incididunt ut labore et dolore magna aliqua.")

comment25 = Comment.create!(author_id: user2.id, post_id: image34.id, body: "Ut enim ad minim veniam!")
comment26 = Comment.create!(author_id: user2.id, post_id: image32.id, body: "quis nostrud exercitation ullamco laboris nisi?")
comment27 = Comment.create!(author_id: user2.id, post_id: image30.id, body: "Duis aute irure dolor in reprehenderit")

comment28 = Comment.create!(author_id: user3.id, post_id: image29.id, body: "veniam! veniam!")
comment29 = Comment.create!(author_id: user3.id, post_id: image27.id, body: "ullamco quis nostrud exercitation laboris nisi?")
comment30 = Comment.create!(author_id: user3.id, post_id: image25.id, body: "dolor aute dolor in dolor")

comment31 = Comment.create!(author_id: user4.id, post_id: image28.id, body: "This BART ride...")
comment32 = Comment.create!(author_id: user4.id, post_id: image26.id, body: "Makes me want to sleep!")
comment33 = Comment.create!(author_id: user4.id, post_id: image24.id, body: "zzz")

comment34 = Comment.create!(author_id: user5.id, post_id: image23.id, body: "You're just too good to be true")
comment35 = Comment.create!(author_id: user5.id, post_id: image21.id, body: "can't take my eyes off of you")
comment36 = Comment.create!(author_id: user5.id, post_id: image19.id, body: "I want to hold you so much.")

comment37 = Comment.create!(author_id: user6.id, post_id: image22.id, body: "EZ, Neo, the remix, ayo!")
comment38 = Comment.create!(author_id: user6.id, post_id: image20.id, body: "I think its time...")
comment39 = Comment.create!(author_id: user6.id, post_id: image18.id, body: "to hit em with the Mace flow!")

comment40 = Comment.create!(author_id: user6.id, post_id: image17.id, body: "It's a vibe")
comment41 = Comment.create!(author_id: user3.id, post_id: image15.id, body: "Yea, it's a vibe")
comment42 = Comment.create!(author_id: user3.id, post_id: image13.id, body: "yeah yeah yeah")

comment43 = Comment.create!(author_id: user1.id, post_id: image17.id, body: "Seems like yesterday")
comment44 = Comment.create!(author_id: user1.id, post_id: image15.id, body: "we used to rock the show")
comment45 = Comment.create!(author_id: user1.id, post_id: image13.id, body: "I lace the track, you lock the flow.")


# Test uniqu
# like00 = Like.create!(likable_type: image01.class.to_s, likable_id: image01.id, liker_id: user2.id)
like01 = Like.create!(likable_type: image01.class.to_s, likable_id: image01.id, liker_id: user2.id)
like02 = Like.create!(likable_type: image01.class.to_s, likable_id: image01.id, liker_id: user3.id)
like03 = Like.create!(likable_type: image01.class.to_s, likable_id: image01.id, liker_id: user4.id)
like04 = Like.create!(likable_type: image01.class.to_s, likable_id: image01.id, liker_id: user5.id)
like05 = Like.create!(likable_type: image01.class.to_s, likable_id: image01.id, liker_id: user6.id)

like06 = Like.create!(likable_type: image06.class.to_s, likable_id: image06.id, liker_id: user1.id)
like07 = Like.create!(likable_type: image06.class.to_s, likable_id: image06.id, liker_id: user3.id)
like08 = Like.create!(likable_type: image06.class.to_s, likable_id: image06.id, liker_id: user4.id)
like09 = Like.create!(likable_type: image06.class.to_s, likable_id: image06.id, liker_id: user5.id)
like10 = Like.create!(likable_type: image06.class.to_s, likable_id: image06.id, liker_id: user6.id)

like11 = Like.create!(likable_type: image11.class.to_s, likable_id: image11.id, liker_id: user1.id)
like12 = Like.create!(likable_type: image11.class.to_s, likable_id: image11.id, liker_id: user2.id)
like13 = Like.create!(likable_type: image11.class.to_s, likable_id: image11.id, liker_id: user4.id)
like14 = Like.create!(likable_type: image11.class.to_s, likable_id: image11.id, liker_id: user5.id)
like15 = Like.create!(likable_type: image11.class.to_s, likable_id: image11.id, liker_id: user6.id)

like16 = Like.create!(likable_type: image16.class.to_s, likable_id: image16.id, liker_id: user1.id)
like17 = Like.create!(likable_type: image16.class.to_s, likable_id: image16.id, liker_id: user2.id)
like18 = Like.create!(likable_type: image16.class.to_s, likable_id: image16.id, liker_id: user3.id)
like19 = Like.create!(likable_type: image16.class.to_s, likable_id: image16.id, liker_id: user5.id)
like20 = Like.create!(likable_type: image16.class.to_s, likable_id: image16.id, liker_id: user6.id)

like21 = Like.create!(likable_type: image21.class.to_s, likable_id: image21.id, liker_id: user1.id)
like22 = Like.create!(likable_type: image21.class.to_s, likable_id: image21.id, liker_id: user2.id)
like23 = Like.create!(likable_type: image21.class.to_s, likable_id: image21.id, liker_id: user3.id)
like24 = Like.create!(likable_type: image21.class.to_s, likable_id: image21.id, liker_id: user4.id)
like25 = Like.create!(likable_type: image21.class.to_s, likable_id: image21.id, liker_id: user6.id)

like26 = Like.create!(likable_type: image26.class.to_s, likable_id: image26.id, liker_id: user1.id)
like27 = Like.create!(likable_type: image26.class.to_s, likable_id: image26.id, liker_id: user2.id)
like28 = Like.create!(likable_type: image26.class.to_s, likable_id: image26.id, liker_id: user3.id)
like29 = Like.create!(likable_type: image26.class.to_s, likable_id: image26.id, liker_id: user4.id)
like30 = Like.create!(likable_type: image26.class.to_s, likable_id: image26.id, liker_id: user5.id)
