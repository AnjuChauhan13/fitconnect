import time
import MySQLdb

while True:
    try:
        MySQLdb.connect(
            host="db",
            user="fitconnect",
            passwd="fitconnect123",
            db="fitconnect",
            port=3306,
        )
        print("✅ Database is ready")
        break
    except Exception as e:
        print("⏳ Waiting for database...", e)
        time.sleep(2)