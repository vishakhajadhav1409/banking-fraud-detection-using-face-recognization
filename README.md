Enterprise Banking Biometric Platform
A full-stack prototype for a banking identity-verification and fraud-monitoring interface. The repository contains a Django REST Framework backend and a React frontend, with a data model and service layer prepared for face-embedding workflows.
Project status: This is a starter/prototype, not a production-ready banking verification system. The current /api/verify/ endpoint returns a basic status message; it does not yet perform end-to-end face matching or fraud detection. Dashboard figures and fraud alerts in the frontend are sample/static data.

Technology Stack
Backend
- Python and Django
- Django REST Framework
- PostgreSQL
- pgvector for vector storage
- DeepFace with the FaceNet512 model
- OpenCV
- Celery and Redis dependencies (background-task integration is not yet configured in the supplied code)
Frontend
- React 18
- Vite
- React Router
- Material UI
- Axios
Repository Structure
enterprise-banking-biometric-platform/
├── backend/
│   ├── apps/
│   │   └── biometrics/
│   │       ├── models.py
│   │       ├── views.py
│   │       └── services/
│   │           └── biometric_service.py
│   ├── config/
│   │   ├── settings.py
│   │   └── urls.py
│   ├── manage.py
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── README.md
Features Present in This Version
- React dashboard layout with sample customer and fraud-alert metrics.
- Face-image selection and a frontend request to the backend verification route.
- Django REST Framework verification route at POST /api/verify/.
- Customer model with a UUID identifier, national ID field, and blacklist flag.
- Face embedding model using a 512-dimensional pgvector field.
- DeepFace service methods for generating FaceNet512 embeddings and inspecting faces in a group photo.
Requirements
Install the following before running the project:
- Python 3.10 or later (use a Python version supported by your installed TensorFlow/DeepFace dependencies)
- Node.js and npm
- PostgreSQL
- PostgreSQL pgvector extension
- Redis, if you plan to configure and run background tasks
Exact compatible versions are not pinned in the supplied requirements.txt; dependency installation may require version adjustments for your Python and operating-system environment.
Backend Setup
Open a terminal in the project directory:
cd backend
Create and activate a virtual environment.

Windows (PowerShell):
python -m venv venv
.\venv\Scripts\Activate.ps1
macOS / Linux:
python3 -m venv venv
source venv/bin/activate
Install Python dependencies:
pip install -r requirements.txt
Configure PostgreSQL
1. Create a PostgreSQL database named bank_biometrics (or update the database configuration to match your database).
2. Install pgvector for your PostgreSQL installation.
3. Enable the extension in the project database:
CREATE EXTENSION IF NOT EXISTS vector;
4. Configure the database connection in backend/config/settings.py using your local PostgreSQL details. Do not commit real passwords or secret keys to GitHub. Move them to environment variables before publishing or deploying this project.
Run Django migrations and start the development server:
python manage.py migrate
python manage.py runserver
Backend URL:
http://127.0.0.1:8000/
Verification route:
POST http://127.0.0.1:8000/api/verify/
The current route responds with a basic JSON status message. Full image processing, identity matching, authentication, and fraud decision logic still need to be implemented.
Frontend Setup
Open a second terminal:
cd frontend
npm install
npm run dev
Vite prints the local frontend URL in the terminal (commonly http://localhost:5173/).

To create a production build:
npm run build
API
Method	Endpoint	Current behavior
POST	/api/verify/	Returns a basic verification-endpoint status message


The frontend currently sends the selected image to this endpoint as multipart form data. The backend view in this version does not yet read or process the uploaded image.
Important Security Notes
Before making this repository public:
- Remove hardcoded database passwords and Django SECRET_KEY values from source code.
- Load secrets from environment variables; keep .env out of Git.
- Do not upload real customer identity documents, face images, biometric embeddings, production data, or database backups.
- Add authentication, authorization, input validation, rate limiting, secure file handling, audit logging, and appropriate privacy/consent controls before handling real users.
- Use HTTPS and secure deployment settings in any hosted environment.
Future Improvements
- Implement actual image upload validation and face detection.
- Generate and persist face embeddings using the existing DeepFace service.
- Implement similarity search with pgvector and a defined matching threshold.
- Add customer enrollment, identity verification, blacklist checks, and explainable fraud-alert workflows.
- Connect the dashboard to real, authorized backend data instead of static sample values.
- Configure Celery and Redis for asynchronous processing.
- Add automated tests, API documentation, logging, and deployment configuration.
Disclaimer
This repository is an educational/development prototype. It is not certified for financial services, regulatory compliance, or production biometric identification. Do not use it to make real banking, credit, or identity decisions without substantial engineering, security, privacy, legal, and model-performance review.
License
No license is included in the supplied project. Add a LICENSE file if you intend to grant others permission to use, modify, or distribute this code.
