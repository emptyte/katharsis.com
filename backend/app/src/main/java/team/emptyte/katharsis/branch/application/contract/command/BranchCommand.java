package team.emptyte.katharsis.branch.application.contract.command;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public record BranchCommand(
  @NotNull(message = "name cannot be null")
  @NotEmpty(message = "name cannot be empty")
  String name,

  @NotNull(message = "address cannot be null")
  String address,

  @NotNull(message = "phone cannot be null")
  String phone
) {
}
