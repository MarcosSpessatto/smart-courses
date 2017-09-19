FROM mysql

ENV MYSQL_ROOT_PASSWORD=root
ADD ia.sql /docker-entrypoint-initdb.d/00-import-data.sql

RUN /entrypoint.sh mysqld & sleep 30 && killall mysqld

EXPOSE 3306