import org.gradle.api.Plugin
import org.gradle.api.Project
import org.gradle.internal.Actions.with
import org.gradle.kotlin.dsl.apply
import org.gradle.kotlin.dsl.configure
import org.gradle.kotlin.dsl.dependencies

class SpringBaseConventionPlugin : Plugin<Project> {
  override fun apply(target: Project) {
    with(target) {
      apply(plugin = "katharsis.jvm.library")

      apply(plugin = "io.spring.dependency-management")

      extensions.configure<io.spring.gradle.dependencymanagement.dsl.DependencyManagementExtension> {
        imports {
          mavenBom("org.springframework.boot:spring-boot-dependencies:${libs.findVersion("spring.boot").get()}")
        }
      }

      dependencies {
        "compileOnly"(libs.findLibrary("lombok").get())
        "compileOnly"(libs.findLibrary("mapstruct").get())
        "annotationProcessor"(libs.findLibrary("lombok").get())
        "annotationProcessor"(libs.findLibrary("mapstruct-processor").get())
      }
    }
  }
}
