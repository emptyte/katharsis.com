import org.jetbrains.kotlin.gradle.dsl.JvmTarget

plugins {
  `kotlin-dsl`
}

group = "team.emptyte.katharsis.buildlogic"

java {
  sourceCompatibility = JavaVersion.VERSION_21
  targetCompatibility = JavaVersion.VERSION_21
}

kotlin {
  compilerOptions {
    jvmTarget = JvmTarget.JVM_21
  }
}

repositories {
  gradlePluginPortal()
  mavenCentral()
}

dependencies {
  implementation("io.spring.gradle:dependency-management-plugin:1.1.7")
  compileOnly(files(libs::class.java.protectionDomain.codeSource.location))
}

tasks {
  validatePlugins {
    enableStricterValidation = true
    failOnWarning = true
  }
}

gradlePlugin {
  plugins {
    register("jvmLibrary") {
      id = libs.plugins.katharsis.jvm.library.get().pluginId;
      implementationClass = "JvmLibraryConventionPlugin"
    }
    register("springBase") {
      id = libs.plugins.katharsis.spring.base.get().pluginId;
      implementationClass = "SpringBaseConventionPlugin"
    }
    register("springLibrary") {
      id = libs.plugins.katharsis.spring.library.get().pluginId;
      implementationClass = "SpringLibraryConventionPlugin"
    }
    register("springApplication") {
      id = libs.plugins.katharsis.spring.application.get().pluginId;
      implementationClass = "SpringApplicationConventionPlugin"
    }
  }
}
