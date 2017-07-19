# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Image.destroy_all

user1 = User.create(username: 'norris', password: 'password')
user2 = User.create(username: 'bailey', password: 'password')
user3 = User.create(username: 'mickey', password: 'password')
user4 = User.create(username: 'leo',    password: 'password')
user5 = User.create(username: 'raph',   password: 'password')
user6 = User.create(username: 'donnie', password: 'password')
guest = User.create(username: 'guest',  password: 'password')

image01 = Image.create(img_url: 'https://unsplash.it/600/750', user_id: 1, caption: 'Who?',  location: 'houston')
image02 = Image.create(img_url: 'https://unsplash.it/600/600', user_id: 1, caption: 'What?',   location: 'new york')
image03 = Image.create(img_url: 'https://unsplash.it/600/550', user_id: 1, caption: 'Where?', location: 'hong kong')
image04 = Image.create(img_url: 'https://unsplash.it/600/500', user_id: 1, caption: 'When?',  location: 'los angeles')
image05 = Image.create(img_url: 'https://unsplash.it/600/700', user_id: 1, caption: 'How?', location: 'san francisco')

image06 = Image.create(img_url: 'https://unsplash.it/600/751', user_id: 2, caption: 'ME!', location: 'houston')
image07 = Image.create(img_url: 'https://unsplash.it/600/601', user_id: 2, caption: 'YES!', location: 'new york')
image08 = Image.create(img_url: 'https://unsplash.it/600/551', user_id: 2, caption: 'HERE!', location: 'hong kong')
image09 = Image.create(img_url: 'https://unsplash.it/600/501', user_id: 2, caption: 'NOW!', location: 'los angeles')
image10 = Image.create(img_url: 'https://unsplash.it/600/701', user_id: 2, caption: 'ANY!', location: 'san francisco')

image11 = Image.create(img_url: 'https://unsplash.it/600/752', user_id: 3, caption: 'hello', location: 'houston')
image12 = Image.create(img_url: 'https://unsplash.it/600/602', user_id: 3, caption: 'greetings', location: 'new york')
image13 = Image.create(img_url: 'https://unsplash.it/600/552', user_id: 3, caption: 'hola', location: 'hong kong')
image14 = Image.create(img_url: 'https://unsplash.it/600/502', user_id: 3, caption: 'hi', location: 'los angeles')
image15 = Image.create(img_url: 'https://unsplash.it/600/702', user_id: 3, caption: 'sup', location: 'san francisco')

image16 = Image.create(img_url: 'https://unsplash.it/600/749', user_id: 4, caption: 'byeee', location: 'houston')
image17 = Image.create(img_url: 'https://unsplash.it/600/599', user_id: 4, caption: 'peace!', location: 'new york')
image18 = Image.create(img_url: 'https://unsplash.it/600/549', user_id: 4, caption: 'holla', location: 'hong kong')
image19 = Image.create(img_url: 'https://unsplash.it/600/499', user_id: 4, caption: 'bounce', location: 'los angeles')
image20 = Image.create(img_url: 'https://unsplash.it/600/699', user_id: 4, caption: 'later!', location: 'san francisco')

image21 = Image.create(img_url: 'https://unsplash.it/600/748', user_id: 5, caption: 'zzz', location: 'houston')
image22 = Image.create(img_url: 'https://unsplash.it/600/598', user_id: 5, caption: 'ooo!', location: 'new york')
image23 = Image.create(img_url: 'https://unsplash.it/600/548', user_id: 5, caption: 'whaa', location: 'hong kong')
image24 = Image.create(img_url: 'https://unsplash.it/600/498', user_id: 5, caption: 'noo', location: 'los angeles')
image25 = Image.create(img_url: 'https://unsplash.it/600/698', user_id: 5, caption: 'yiss!', location: 'san francisco')

image26 = Image.create(img_url: 'https://unsplash.it/600/747', user_id: 6, caption: 'ahoy', location: 'houston')
image27 = Image.create(img_url: 'https://unsplash.it/600/597', user_id: 6, caption: 'oy', location: 'new york')
image28 = Image.create(img_url: 'https://unsplash.it/600/547', user_id: 6, caption: 'yo', location: 'hong kong')
image29 = Image.create(img_url: 'https://unsplash.it/600/497', user_id: 6, caption: 'aloha', location: 'los angeles')
image30 = Image.create(img_url: 'https://unsplash.it/600/697', user_id: 6, caption: 'gnar', location: 'san francisco')

image31 = Image.create(img_url: 'https://unsplash.it/600/746', user_id: 7, caption: 'moo', location: 'houston')
image32 = Image.create(img_url: 'https://unsplash.it/600/596', user_id: 7, caption: 'boo', location: 'new york')
image33 = Image.create(img_url: 'https://unsplash.it/600/546', user_id: 7, caption: 'too', location: 'hong kong')
image34 = Image.create(img_url: 'https://unsplash.it/600/496', user_id: 7, caption: 'zoo', location: 'los angeles')
image35 = Image.create(img_url: 'https://unsplash.it/600/696', user_id: 7, caption: 'foo', location: 'san francisco')
