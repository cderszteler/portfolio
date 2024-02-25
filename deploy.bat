@echo off
set /p version=Enter new version:
docker build -t qetz/portfolio:%version% .
docker image tag qetz/portfolio:%version% qetz/portfolio:latest
docker push qetz/portfolio:%version% && docker push qetz/portfolio:latest