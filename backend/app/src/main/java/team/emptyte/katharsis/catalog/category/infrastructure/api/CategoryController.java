package team.emptyte.katharsis.catalog.category.infrastructure.api;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import team.emptyte.katharsis.catalog.category.application.CategoryService;
import team.emptyte.katharsis.catalog.category.application.contract.command.CategoryCommand;
import team.emptyte.katharsis.catalog.category.application.contract.view.CategoryView;
import team.emptyte.katharsis.catalog.category.application.mapper.CategoryMapper;

import java.util.Collection;
import java.util.concurrent.CompletableFuture;

@RestController
@RequestMapping("/api/v1/categories")
@RequiredArgsConstructor
@Tag(name = "Category API")
public final class CategoryController {
  private final CategoryService categoryService;

  @GetMapping("/{id}")
  public CompletableFuture<CategoryView> get(final @PathVariable Long id) {
    return this.categoryService.findById(id);
  }

  @GetMapping
  public CompletableFuture<Collection<CategoryView>> getAll() {
    return this.categoryService.findAll();
  }

  @PostMapping
  public CompletableFuture<Void> create(final @RequestBody CategoryCommand categoryCommand) {
    return this.categoryService.create(categoryCommand);
  }
}
