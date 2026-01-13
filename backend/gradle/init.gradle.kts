initscript {
  val spotlessVersion = "6.25.0"
  repositories {
    mavenCentral()
  }
  dependencies {
    classpath("com.diffplug.spotless:spotless-plugin-gradle:$spotlessVersion")
  }
}

rootProject {
  subprojects {
    apply<com.diffplug.gradle.spotless.SpotlessPlugin>()

    extensions.configure<com.diffplug.gradle.spotless.SpotlessExtension> {
      java {
        target("**/*.java")
        targetExclude("**/build/**", "**/target/**")

        googleJavaFormat("1.17.0").aosp().reflowLongStrings()
      }

      format("kts") {
        target("**/*.kts")
        targetExclude("**/build/**")
      }

      format("xml") {
        target("**/*.xml")
        targetExclude("**/build/**", "**/.idea/**")

        eclipseWtp("xml")
      }
    }
  }
}
