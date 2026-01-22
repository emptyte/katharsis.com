# Base image with JDK
FROM eclipse-temurin:21-jdk-jammy AS base

# Set the working directory inside the container
WORKDIR /backend
COPY . .
# We give execution permissions to the Gradle wrapper
RUN chmod +x ./gradlew


# Development stage with JDK to run the application with hot reload
FROM base AS dev

# We run bootRun instead of building the JAR
# --no-daemon helps keep memory stable in Docker
CMD ["./gradlew", "bootRun", "--no-daemon"]


# Build stage to create the executable JAR
FROM base AS builder

# We build the JAR file
RUN ./gradlew :app:bootJar --no-daemon


# Production stage with JRE to run the application
FROM eclipse-temurin:21-jre-jammy AS production

WORKDIR /app

COPY --from=builder /backend/app/build/libs/app.jar /app/app.jar

EXPOSE 8080

CMD ["java", "-jar", "/app/app.jar"]
