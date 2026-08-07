@echo off
cd /d "C:\Users\Bruno Cardoso\Documents\soc2"
start /min "" cmd /c "npm start"
timeout /t 1 /nobreak >nul
start "" "http://localhost:3000"
exit