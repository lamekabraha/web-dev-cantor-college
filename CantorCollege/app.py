from flask import Flask, request, jsonify
import mysql.connector
from flask_cors import CORS
from config import db_config

app = Flask(__name__)
CORS(app)

@app.route('/api/courses', methods=['GET'])
def get_courses():
    conn = mysql.connector.connect(**db_config)

    cursor = conn.cursor(dictionary=True)

    cursor.execute("SELECT * FROM courses")
    courses = cursor.fetchall()

    cursor.close()
    conn.close()

    return jsonify(courses)


@app.route('/api/enquiry', methods=['POST'])
def submit_enquiry():
    data = request.json
    email = data.get('email')
    message = data.get('message')
    status = 'Incomplete'

    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor()

    insert_query = """
        INSERT INTO enquiries (Email, Message, Status)
        VALUES (%s, %s, %s)
    """
    cursor.execute(insert_query, (email, message, status))
    conn.commit()

    cursor.close()
    conn.close()

    return jsonify({'status': 'success', 'message': 'Enquiry submitted successfully.'}), 201

if __name__ == '__main__':
    app.run(debug=True, port=5001)