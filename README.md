# Zikre Kidusan Website

A website for daily devotions with prayers of the saints, Mass readings, and Gospel teachings in audio and video.

## Project Structure

```
ZikreKidusan/
├── core/              # Shared models and utilities
├── devotions/         # Daily devotions with prayers
├── saints/            # Saints information and prayers
├── mass_readings/     # Mass readings (Epistle, Gospel, etc.)
├── teachings/         # Audio/video Gospel teachings
├── zikre_kidusan/    # Django project configuration
│   └── settings/     # Modular settings (base, dev, prod)
├── frontend/          # React frontend
├── static/            # Static files
├── media/             # User uploads
└── requirements/      # Python dependencies
```

## Backend Setup (Django)

1. Activate virtual environment:
   ```powershell
   .\venv\Scripts\activate
   ```

2. Install dependencies (already done):
   ```powershell
   pip install django djangorestframework django-cors-headers django-environ pillow
   ```

3. Run migrations (already done):
   ```powershell
   python manage.py migrate
   ```

4. Create superuser:
   ```powershell
   python manage.py createsuperuser
   ```

5. Start Django server:
   ```powershell
   python manage.py runserver 8000
   ```

Backend API runs at: http://localhost:8000/api/
Admin panel: http://localhost:8000/admin/

## Frontend Setup (React)

1. Navigate to frontend folder:
   ```powershell
   cd frontend
   ```

2. Install dependencies (requires Node.js v24.15.0+):
   ```powershell
   npm install
   ```

3. Start React development server:
   ```powershell
   npm start
   ```

Frontend runs at: http://localhost:3000/

## API Endpoints

- `/api/saints/` - Saints information
- `/api/devotions/` - Daily devotions (filter by `?date=YYYY-MM-DD`)
- `/api/reading-types/` - Types of Mass readings
- `/api/mass-readings/` - Mass readings (filter by `?date=` and `?reading_type=`)
- `/api/teachings/` - Gospel teachings (audio/video)

## Environment Variables

Create `.env` file in project root:
```
DJANGO_SETTINGS_MODULE=zikre_kidusan.settings.dev
SECRET_KEY=your-secret-key
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
DATABASE_URL=sqlite:///db.sqlite3
CORS_ALLOWED_ORIGINS=http://localhost:3000
```

## Technologies Used

- **Backend:** Django, Django REST Framework, SQLite (dev)
- **Frontend:** React, React Router, Axios
- **Media:** Pillow for image handling
