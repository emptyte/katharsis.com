package team.emptyte.katharsis.catalog.category.application;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import team.emptyte.katharsis.catalog.category.application.contract.command.CategoryCommand;
import team.emptyte.katharsis.catalog.category.application.contract.view.CategoryView;
import team.emptyte.katharsis.catalog.category.application.mapper.CategoryMapper;
import team.emptyte.katharsis.catalog.domain.category.domain.CategoryAggregateRoot;
import team.emptyte.katharsis.catalog.domain.category.domain.CategoryAggregateRootRepository;

import java.util.concurrent.CompletableFuture;

@Service
@RequiredArgsConstructor
public final class CategoryService {
  private final CategoryAggregateRootRepository categoryAggregateRootRepository;
  private final CategoryMapper categoryMapper;

  public CompletableFuture<CategoryView> findById(final Long id) {
    return this.categoryAggregateRootRepository.findAsync(id)
      .thenApply(this.categoryMapper::toView);
  }

  public CompletableFuture<Void> create(final CategoryCommand categoryCommand) {
    final CategoryAggregateRoot categoryAggregateRoot = this.categoryMapper.toEntity(categoryCommand);
    if (categoryAggregateRoot == null) {
      throw new IllegalArgumentException("CategoryCommand is invalid");
    }
    return this.categoryAggregateRootRepository.saveAsync(categoryAggregateRoot);
  }
}
