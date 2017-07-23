@comments.each do |comment|
  json.set! comment.id do
    json.partial! 'comment', comment: comment
    json.extract! comment.author, :username, :avatar_url
  end
end
