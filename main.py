"""main.py contains main"""

from investmodel import InvestmentModel
import pickle

def main():

    # load features
    f = open('features.pkl')
    features = pickle.load(f)

    im = InvestmentModel(data_source="data.csv", features=features)
    im.train()
    results = im.test()

    print results

if __name__ == "__main__":
    main()
