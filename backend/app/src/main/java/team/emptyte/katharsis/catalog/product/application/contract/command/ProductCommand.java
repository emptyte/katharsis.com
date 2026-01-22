package team.emptyte.katharsis.catalog.product.application.contract.command;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public record ProductCommand(
  @NotNull(message = "categoryId cannot be null")
  long categoryId,

  @NotNull(message = "name cannot be null")
  @NotEmpty(message = "name cannot be empty")
  String name,

  @NotNull(message = "description cannot be null")
  String description,

  @NotNull(message = "price cannot be null")
  @Positive(message = "price must be positive")
  double price
) {
}
