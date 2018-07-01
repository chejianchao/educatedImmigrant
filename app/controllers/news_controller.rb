class NewsController < ApplicationController
 
def index

  response = Unirest.get("https://newsapi.org/v2/everything?q=immigration&apiKey=" + ENV['API_KEY'] + "&from=2018-6-27&to=2018-6-30")
   
   article_array = []
   i = 0
   response.body['articles'].shuffle!
   response.body['articles'].each do |article|
    if i<3
       
    
    i+=1
    article_array << {
      
      title: article['title'],
      description: article['description'],
      author: article['author'],
      url: article['url']
    }
    end
  end


  render json: article_array.as_json
  
end

end