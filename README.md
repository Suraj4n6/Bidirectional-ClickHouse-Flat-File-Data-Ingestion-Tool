# Data Ingestion Tool using FastAPI and ClickHouse

## 📄 Project Overview

This project implements a web-based data ingestion tool with a **FastAPI** backend and **ClickHouse** as the primary database. It facilitates **bidirectional data flow** between flat files and ClickHouse, offering efficient data processing and a user-friendly interface via a React-based frontend.

---

## ✨ Features

- FastAPI-based backend for handling RESTful data operations
- Integration with ClickHouse for high-performance data storage and querying
- React-based frontend for seamless interaction with the backend API

---

## 📖 Prerequisites

Ensure you have the following installed on your system:

- Python 3.x
- Node.js
- npm
- ClickHouse (running locally or remotely)

---

## 📅 Setup Instructions

### 🚀 Backend Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Suraj4n6/DataWrangler1234
   cd DataWrangler1234
   ```

2. **Install backend dependencies**

   Navigate to the backend directory and install Python packages:

   ```bash
   pip install -r requirements.txt
   ```

3. **Set up ClickHouse database**

   If you haven’t already, follow the [ClickHouse setup guide](https://clickhouse.com/docs/en/quick-start) to get your database running.

4. **Run the FastAPI server**

   Launch the backend using:

   ```bash
   uvicorn main:app --reload
   ```

   The server will be accessible at: [http://localhost:8000](http://localhost:8000)

---

### 📁 Frontend Setup

1. **Navigate to the frontend folder**

   ```bash
   cd frontend
   ```

2. **Install npm packages**

   ```bash
   npm install
   ```

3. **Start the frontend server**

   ```bash
   npm start
   ```

   The frontend will run at: [http://localhost:3000](http://localhost:3000)

---

## 🚀 Running the Application

Make sure both servers are running:

- **Backend**: http://localhost:8000
- **Frontend**: http://localhost:3000

Open your browser and navigate to the frontend to begin using the data ingestion tool.

---

## 🤝 Contributing

Feel free to fork this repository, submit issues, or open pull requests. Contributions are always welcome!

---

## 📧 Contact

For questions or support:

**Sai Suraj R**  
📧 [suraj.shetty4600@gmail.com](mailto:suraj.shetty4600@gmail.com)

