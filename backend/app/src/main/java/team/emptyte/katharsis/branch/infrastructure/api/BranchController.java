package team.emptyte.katharsis.branch.infrastructure.api;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import team.emptyte.katharsis.branch.application.BranchService;
import team.emptyte.katharsis.branch.application.contract.command.BranchCommand;
import team.emptyte.katharsis.branch.application.contract.view.BranchView;
import team.emptyte.katharsis.catalog.category.application.CategoryService;
import team.emptyte.katharsis.catalog.category.application.contract.command.CategoryCommand;
import team.emptyte.katharsis.catalog.category.application.contract.view.CategoryView;

import java.util.Collection;
import java.util.concurrent.CompletableFuture;

@RestController
@RequestMapping("/api/v1/branches")
@RequiredArgsConstructor
@Tag(name = "Category API")
public final class BranchController {
  private final BranchService branchService;

  @GetMapping("/{id}")
  public CompletableFuture<BranchView> get(final @PathVariable Long id) {
    return this.branchService.findById(id);
  }

  @PostMapping
  public CompletableFuture<Void> create(final @RequestBody BranchCommand branchCommand) {
    return this.branchService.create(branchCommand);
  }
}
