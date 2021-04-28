FROM maven:3.6.3 AS build-stage
COPY . /build
WORKDIR /build
RUN mvn surefire-report:report
RUN mvn clean package

FROM openjdk:11.0.11-jdk AS runtime
WORKDIR /opt/app
COPY --from=build-stage /build/target/CNE-Final-Project-0.0.1-SNAPSHOT.jar ./app.jar
COPY --from=build-stage /build//target/surefire-reports/ .
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
