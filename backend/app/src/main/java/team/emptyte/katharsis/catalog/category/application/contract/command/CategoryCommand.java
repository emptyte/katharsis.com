package team.emptyte.katharsis.catalog.category.application.contract.command;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public record CategoryCommand(
  @NotNull(message = "name cannot be null")
  @NotEmpty(message = "name cannot be empty")
  String name,

  @NotNull(message = "description cannot be null")
  String description
) {
}
