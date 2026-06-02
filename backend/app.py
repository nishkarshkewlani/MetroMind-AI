from flask import Flask, jsonify

from flask_cors import CORS

from data_fetch import get_weather, get_traffic

import pickle

from mongodb import collection

app = Flask(__name__)

CORS(app)

model = pickle.load(open('model.pkl', 'rb'))

@app.route('/api/live')

def live_data():

    weather = get_weather()

    traffic = get_traffic()

    event = 0

    prediction = model.predict([
        [traffic, weather, event]
    ])[0]

    collection.insert_one({
        "traffic": traffic,
        "weather": weather,
        "crowd": prediction
    })

    return jsonify({
        "traffic": traffic,
        "weather": weather,
        "crowd": prediction
    })

if __name__ == '__main__':
    app.run(debug=True)
