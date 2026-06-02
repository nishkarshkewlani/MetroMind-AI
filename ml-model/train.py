import pandas as pd

from sklearn.ensemble import RandomForestClassifier

import pickle

data = pd.read_csv("../dataset/data.csv")

X = data[['traffic', 'weather', 'event']]

y = data['crowd']

model = RandomForestClassifier()

model.fit(X, y)

pickle.dump(model, open('../backend/model.pkl', 'wb'))

print("Model Trained Successfully")
