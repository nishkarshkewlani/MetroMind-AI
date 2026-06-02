import requests

WEATHER_API = "YOUR_OPENWEATHER_API_KEY"

GOOGLE_API = "YOUR_GOOGLE_API_KEY"


def get_weather():

    url = f"https://api.openweathermap.org/data/2.5/weather?q=Jaipur&appid={WEATHER_API}&units=metric"

    response = requests.get(url).json()

    return response['main']['temp']


def get_traffic():

    url = f"https://maps.googleapis.com/maps/api/distancematrix/json?origins=Jaipur&destinations=Jaipur&departure_time=now&key={GOOGLE_API}"

    response = requests.get(url).json()

    normal = response['rows'][0]['elements'][0]['duration']['value']

    traffic = response['rows'][0]['elements'][0]['duration_in_traffic']['value']

    congestion = traffic / normal

    return round(congestion, 2)
