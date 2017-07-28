json.extract! user, :id, :username, :fullname, :description, :avatar_url
if user == current_user
  json.followings do
    json.array! current_user.followee_ids
  end
end
