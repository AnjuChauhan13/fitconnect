# import time
# import MySQLdb

# while True:
#     try:
#         MySQLdb.connect(
#             host="db",
#             user="fitconnect",
#             passwd="fitconnect123",
#             db="fitconnect",
#             port=3306,
#         )
#         print("✅ Database is ready")
#         break
#     except Exception as e:
#         print("⏳ Waiting for database...", e)
#         time.sleep(2)
import time
import psycopg2
import os

while True:
    try:
        psycopg2.connect(
            host=os.getenv("DB_HOST"),
            database=os.getenv("DB_NAME"),
            user=os.getenv("DB_USER"),
            password=os.getenv("DB_PASSWORD"),
            port=os.getenv("DB_PORT"),
        )
        print("✅ Database is ready")
        break

    except Exception as e:
        print("⏳ Waiting for database...", e)
        time.sleep(2)