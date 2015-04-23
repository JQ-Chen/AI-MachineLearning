from flask import Flask, request
from scraper import YahooScraper

import pickle

app = Flask(__name__)

def get_yahoo_scraper():

    # load features
    f_feat = open('features.pkl')
    features = pickle.load(f_feat)

    f_map = open('feature_source_map.pkl')
    feature_source_map = pickle.load(f_map)

    return YahooScraper(features, feature_source_map, "model.pkl")

ys = get_yahoo_scraper()

@app.route('/', methods=['POST'])
def check_ticker():
    ticker = request.form['ticker']
    return str(ys.check_invest(ticker))

if __name__ == "__main__":
    app.run(debug=True)
