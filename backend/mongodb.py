from pymongo import MongoClient

client = MongoClient("YOUR_MONGODB_CONNECTION")

db = client["metromind"]

collection = db["logs"]
