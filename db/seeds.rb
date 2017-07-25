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

user1 = User.create!(username: 'norris', password: 'password', fullname: 'Norris Kwan', description: 'Born and bred in Houston. Trained and polished in SF.', avatar_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500518717/norris.jpg')
user2 = User.create!(username: 'bailey', password: 'password', fullname: 'Bailey Boy', description: "Woof woof, bark bark, sniff sniff. ~ I'm Norris' dog!", avatar_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500518662/baiey_epjd2k.jpg')
user3 = User.create!(username: 'mikey', password: 'password', fullname: 'Michelangelo', description: 'You think your tough enough to stand up to my HOT NUNCHUCK FURY?! BOOYAKASHA!!', avatar_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500518433/mikey_xkosgd.png')
user4 = User.create!(username: 'leo',    password: 'password', fullname: 'Leonardo', description: 'I eat, sleep and breath Ninjustu.', avatar_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516177/leo_bzo1lu.jpg')
user5 = User.create!(username: 'raph',   password: 'password', fullname: 'Raphael', description: "Name's Raph. If there's a brawl, count me in.", avatar_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516176/raph_j5ale2.jpg')
user6 = User.create!(username: 'donnie', password: 'password', fullname: 'Donatello', description: "I'm the brains of this operation. I invent gadgets, weapons and awesome vehicles to keep me and my brothers safe.", avatar_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516176/donnie_oypjkw.jpg')
guest = User.create!(username: 'guest',  password: 'password', fullname: 'Guest User', description: 'Gee, I really should sign up.', avatar_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500518554/profile_bhxtpb.svg')

batman = User.create!(username: 'Batman',  password: 'password', fullname: 'Bruce Wayne', description: 'Welcome, Master Wayne.', avatar_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500518554/profile_bhxtpb.svg')


image01 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516176/750_l8vnrh.jpg', user_id: user1.id, caption: 'Who?',  location: 'houston')
image02 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516174/600_udyvvy.jpg', user_id: user1.id, caption: 'What?',   location: 'new york')
image03 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516174/550_sutkgj.jpg', user_id: user1.id, caption: 'Where?', location: 'hong kong')
image04 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516173/500_blbfun.jpg', user_id: user1.id, caption: 'When?',  location: 'los angeles')
image05 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516175/700_loxvbj.jpg', user_id: user1.id, caption: 'How?', location: 'san francisco')

image06 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516176/751_f2vnmr.jpg', user_id: user2.id, caption: 'ME!', location: 'houston')
image07 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516174/601_qwo55c.jpg', user_id: user2.id, caption: 'YES!', location: 'new york')
image08 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516174/551_hmvxah.jpg', user_id: user2.id, caption: 'HERE!', location: 'hong kong')
image09 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516173/501_si7duf.jpg', user_id: user2.id, caption: 'NOW!', location: 'los angeles')
image10 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516175/701_vwcyi2.jpg', user_id: user2.id, caption: 'ANY!', location: 'san francisco')

image11 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516176/752_ogjlnl.jpg', user_id: user3.id, caption: 'hello', location: 'houston')
image12 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516270/602_mz0kar.jpg', user_id: user3.id, caption: 'greetings', location: 'new york')
image13 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516174/552_mcrkrh.jpg', user_id: user3.id, caption: 'hola', location: 'hong kong')
image14 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516173/502_gagey5.jpg', user_id: user3.id, caption: 'hi', location: 'los angeles')
image15 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516176/702_wxnnyx.jpg', user_id: user3.id, caption: 'sup', location: 'san francisco')

image16 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516176/749_c9g4mw.jpg', user_id: user4.id, caption: 'byeee', location: 'houston')
image17 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516174/599_lo1cad.jpg', user_id: user4.id, caption: 'peace!', location: 'new york')
image18 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516173/549_fv5wtv.jpg', user_id: user4.id, caption: 'holla', location: 'hong kong')
image19 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516173/499_fruv58.jpg', user_id: user4.id, caption: 'bounce', location: 'los angeles')
image20 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516175/699_xr2h8v.jpg', user_id: user4.id, caption: 'later!', location: 'san francisco')

image21 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516176/748_onvjtb.jpg', user_id: user5.id, caption: 'zzz', location: 'houston')
image22 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516174/598_s8vp51.jpg', user_id: user5.id, caption: 'ooo!', location: 'new york')
image23 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516173/548_difn5h.jpg', user_id: user5.id, caption: 'whaa', location: 'hong kong')
image24 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516173/498_rhe4do.jpg', user_id: user5.id, caption: 'noo', location: 'los angeles')
image25 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516175/698_mewi5f.jpg', user_id: user5.id, caption: 'yiss!', location: 'san francisco')

image26 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516176/747_a9zd2m.jpg', user_id: user6.id, caption: 'ahoy', location: 'houston')
image27 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516174/597_y6j5aj.jpg', user_id: user6.id, caption: 'oy', location: 'new york')
image28 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516173/547_uyxj40.jpg', user_id: user6.id, caption: 'yo', location: 'hong kong')
image29 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516173/497_nyglit.jpg', user_id: user6.id, caption: 'aloha', location: 'los angeles')
image30 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516174/697_oxljwg.jpg', user_id: user6.id, caption: 'gnar', location: 'san francisco')

image31 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516176/746_reliag.jpg', user_id: guest.id, caption: 'moo', location: 'houston')
image32 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516174/596_lordxr.jpg', user_id: guest.id, caption: 'boo', location: 'new york')
image33 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516173/546_fxlcy3.jpg', user_id: guest.id, caption: 'too', location: 'hong kong')
image34 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516172/496_oapazg.jpg', user_id: guest.id, caption: 'zoo', location: 'los angeles')
image35 = Image.create!(img_url: 'https://res.cloudinary.com/norriskwan/image/upload/v1500516175/696_d8flix.jpg', user_id: guest.id, caption: 'foo', location: 'san francisco')

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

comment19 = Comment.create!(author_id: guest.id, post_id: image29.id, body: "I don't know you... but bravo.")
comment20 = Comment.create!(author_id: guest.id, post_id: image11.id, body: "Dig your feed!")
comment21 = Comment.create!(author_id: guest.id, post_id: image34.id, body: "I gotta sign up after seeing this!")
