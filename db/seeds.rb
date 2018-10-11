require 'faker'
# require 'byebug'




10.times do |i|
    User.create!(
        username: Faker::HowIMetYourMother.unique.character.to_s.delete(" "),
        password: 'password',
        fullname: Faker::HowIMetYourMother.character.to_s,
        description: Faker::HowIMetYourMother.quote.to_s,
        avatar_url: UiFaces.face
    )
end

10.times do |i|
    User.create!(
        username: Faker::Seinfeld.unique.character.to_s.delete(" "),
        password: 'password',
        fullname: Faker::Seinfeld.character.to_s,
        description: Faker::Seinfeld.quote.to_s,
        avatar_url: UiFaces.face
    )
end

10.times do |i|
    User.create!(
        username: Faker::ParksAndRec.unique.character.to_s.delete(" "),
        password: 'password',
        fullname: Faker::ParksAndRec.character.to_s,
        description: Faker::Seinfeld.quote.to_s,
        avatar_url: UiFaces.face
    )
end

User.create!(
    username: "The_Barnacle",
    password: "password",
    fullname: "Barney Stinson",
    description: "A lie is just a great story that someone ruined with the truth",
    avatar_url: "https://storage.googleapis.com/instacram/Barney-Stinson-barney-stinson-31316015-1920-2560.jpg"
)


    

(1..50).each do |i|
    random_id = (1..30).to_a.sample
    caption = Faker::HowIMetYourMother.quote.to_s
    city = Faker::Address.city.to_s
    Image.create!(img_url: 'x',
                image: "https://picsum.photos/800/900/?random",
                user_id: random_id,
                caption: caption,
                location: city
        )
end

(1..30).each do |i|
    random_id = (1..29).to_a.sample
    image_id = (1..49).to_a.sample
    Comment.create!(
        author_id: random_id, post_id: image_id, body: Faker::ChuckNorris.fact.to_s)
end

(1..30).each do |j|
        img = Image.find_by_id(j)
        userid = (1..30).to_a.shuffle.pop
        user = User.find_by_id(userid)
        Like.create!(likable_type: "Image", likable_id: img.id, liker_id: user.id)
end
