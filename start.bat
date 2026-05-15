@echo off
echo Starting Zikre Kidusan...
echo.

echo Setting up PATH for Node.js...
set PATH=%PATH%;C:\Users\amare\AppData\Roaming\JetBrains\PyCharm2025.3\node\versions\24.15.0

echo Starting Django backend on port 8000...
start "Django Backend" cmd /k "call venv\Scripts\activate.bat && python manage.py runserver 8000"

timeout /t 3 /nobreak > nul

echo Starting React frontend on port 3000...
cd frontend
start "React Frontend" cmd /k "npm start"

echo.
echo Backend: http://localhost:8000/api/
echo Frontend: http://localhost:3000/
echo Admin: http://localhost:8000/admin/
