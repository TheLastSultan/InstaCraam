json.extract! image, :id, :img_url, :user_id, :caption, :location, :comments
json.likes_count image.likes.count

json.likedBy do
  json.array! image.liker_ids
end
