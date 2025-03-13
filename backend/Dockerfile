FROM python:3.12-alpine

WORKDIR /app

COPY requirements.txt ./
RUN pip install -r requirements.txt

COPY main.py ./

EXPOSE 80
CMD ["fastapi", "run", "--port", "80", "main.py"]
