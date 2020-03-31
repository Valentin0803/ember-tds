@echo off
cd "C:\Program Files\MongoDB\Server\4.2\bin"
start mongod
ping 127.0.0.1 -n 10 > nul
start mongo

cd "C:\restheart"
"%JAVA_HOME%\bin\java" -jar restheart.jar etc/restheart.yml
exit
