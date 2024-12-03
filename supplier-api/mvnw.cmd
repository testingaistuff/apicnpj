@echo off
setlocal

set MAVEN_HOME=%~dp0\.mvn\wrapper\maven-wrapper.jar
set MAVEN_OPTS=-Xmx512m

java -cp "%MAVEN_HOME%" org.apache.maven.wrapper.MavenWrapperMain %*

endlocal