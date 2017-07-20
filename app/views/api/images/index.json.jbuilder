@images.each do |image|
  json.set! image.id do
    json.partial! 'image', image: image
    json.extract! image.poster, :username, :avatar_url
  end
end
