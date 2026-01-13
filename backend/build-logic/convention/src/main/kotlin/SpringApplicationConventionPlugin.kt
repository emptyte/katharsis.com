import org.gradle.api.Plugin
import org.gradle.api.Project
import org.gradle.kotlin.dsl.apply
import org.gradle.kotlin.dsl.dependencies

class SpringApplicationConventionPlugin : Plugin<Project> {
  override fun apply(target: Project) {
    with(target) {
      apply(plugin = "katharsis.spring.base")

      apply(plugin = "org.springframework.boot")

      dependencies {
        "implementation"(project(":core"))

        "runtimeOnly"(libs.findLibrary("postgresql").get())

        "developmentOnly"(libs.findLibrary("spring.boot.devtools").get())
      }
    }
  }
}
