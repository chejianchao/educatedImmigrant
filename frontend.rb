require 'unirest'

response = Unirest.get("https://newsapi.org/v2/everything?q=immigration&apiKey=7d100dcf7809439a9b251aac30ed45b5&from=2018-6-27&to=2018-6-30")

finding_data = response.body

p finding_data #will display a lot of data!
