from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import dotenv
import os
import pprint as pp

dotenv.load_dotenv()
user = os.getenv("MONGO_USER")
passkey = os.getenv("MONGO_PASSKEY")
db_name = 'lanyardDB'


uri = f"mongodb+srv://{user}:{passkey}@cluster0.qx1yl1i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

# Send a ping to confirm a successful connection
try:
    database = client.get_database(db_name)
    Users = database.get_collection('Users')

    Users.insert_one({"username":"alexcmad",
                      "first_name":"Alexander",
                      "last_name":"McIntosh",
                      "email":"alexcmad@gmail.com",
                      "password":"totally encrypted password"})


except Exception as e:
    print(e)
