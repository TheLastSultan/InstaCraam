json.extract! image, :id, :user_id, :caption, :location, :comments
json.url image.image.url
json.likes_count image.likes.count

json.likedBy do
  json.array! image.liker_ids
end
