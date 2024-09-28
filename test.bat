@echo off
echo Downloading ngrok...
curl -o ngrok.zip https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-windows-amd64.zip

echo Extracting ngrok...
powershell -command "Expand-Archive ngrok.zip -DestinationPath ."

echo Cleaning up...
del ngrok.zip

echo Adding ngrok to PATH...
setx PATH "%PATH%;%cd%"

echo ngrok installation complete.
echo You can now run ngrok by typing 'ngrok' in the command prompt.
pause
