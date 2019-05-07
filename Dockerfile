FROM python:3.5
MAINTAINER Znieczu Tech Company

ENV PYTHONUNBUFFERED 1
ENV POSTGRES_USER=znieczu
ENV POSTGRES_PASSWORD=znieczu
ENV POSTGRES_DB=znieczu_db

COPY ./requirements.txt /requirements.txt
RUN pip install -r /requirements.txt

RUN mkdir /znieczu-back
WORKDIR /znieczu-back
COPY . /znieczu-back/