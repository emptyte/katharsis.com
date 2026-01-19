pluginManagement {
  includeBuild("build-logic")

  repositories {
    mavenCentral()
    gradlePluginPortal()
  }
}

dependencyResolutionManagement {
  repositoriesMode = RepositoriesMode.FAIL_ON_PROJECT_REPOS

  repositories {
    mavenCentral()
  }
}

rootProject.name = "katharsis"

sequenceOf(
  "app",
  "core",
).forEach {
  include(":${rootProject.name}-$it")
  project(":${rootProject.name}-$it").projectDir = file(it)
}

sequenceOf(
  "api"
).forEach {
  include(":${rootProject.name}-infrastructure-$it")
  project(":${rootProject.name}-infrastructure-$it").projectDir = file("infrastructure/$it")
}
