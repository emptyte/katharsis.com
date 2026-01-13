# --------------------------------------------------------
# 1. Base Stage: Configuración común (JDK y Archivos)
# --------------------------------------------------------
FROM eclipse-temurin:21-jdk-jammy AS base
WORKDIR /backend
COPY . .
RUN chmod +x ./gradlew

# --------------------------------------------------------
# 2. Development Stage: Se usa para programar (Hot Reload)
# --------------------------------------------------------
FROM base AS development
# Ejecutamos bootRun en lugar de construir el JAR
# --no-daemon ayuda a mantener la memoria estable en Docker
CMD ["./gradlew", "bootRun", "--no-daemon"]


# --------------------------------------------------------
# 3. Builder Stage: Se usa solo para compilar a Producción
# --------------------------------------------------------
FROM base AS builder
RUN ./gradlew :app:bootJar --no-daemon

# --------------------------------------------------------
# 4. Production Stage: La imagen final optimizada (JRE)
# --------------------------------------------------------
FROM eclipse-temurin:21-jre-jammy AS production
WORKDIR /app
COPY --from=builder /backend/app/build/libs/app.jar /app/app.jar
EXPOSE 8080
CMD ["java", "-jar", "/app/app.jar"]
