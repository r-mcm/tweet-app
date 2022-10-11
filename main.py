import snscrape.modules.twitter as sntwitter
import pandas as pd
from flask import Flask
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS, cross_origin
import json
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
api = Api(app)

class Twitter(Resource):
    # init new class for endpoint
    def post(self):
        # parse argements from query string
        parser = reqparse.RequestParser()
        parser.add_argument('query', required=True, type=str)
        args = parser.parse_args()
        print(args['query'])
        # Creating list to append tweet data to
        tweets_list1 = []
        # Using TwitterSearchScraper to scrape data and append tweets to list
        for i,tweet in enumerate(sntwitter.TwitterSearchScraper(args['query']).get_items()):
            if i>100:
                break
            tweets_list1.append([tweet.date, tweet.id, tweet.content, tweet.user.username])
        # Creating a dataframe from the tweets list above 
        tweets_df1 = pd.DataFrame(tweets_list1, columns=['datetime', 'tweetid', 'text', 'username'])
        return {'data': json.loads(tweets_df1.to_json(orient='index'))}, 200
# map class to endpoint
api.add_resource(Twitter, '/twitter')
if __name__ == "__main__":
    app.run(debug=True)