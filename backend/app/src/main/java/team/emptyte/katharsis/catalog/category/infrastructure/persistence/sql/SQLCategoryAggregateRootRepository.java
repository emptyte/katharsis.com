package team.emptyte.katharsis.catalog.category.infrastructure.persistence.sql;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;
import team.emptyte.katharsis.catalog.category.infrastructure.persistence.sql.jpa.JPACategoryRepository;
import team.emptyte.katharsis.catalog.domain.category.domain.CategoryAggregateRoot;
import team.emptyte.katharsis.catalog.domain.category.domain.CategoryAggregateRootRepository;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.Executor;

@Repository
@RequiredArgsConstructor
public class SQLCategoryAggregateRootRepository implements CategoryAggregateRootRepository {
  private final JPACategoryRepository persistence;

  @Qualifier("applicationTaskExecutor")
  private final Executor executor;

  @Override
  public CompletableFuture<CategoryAggregateRoot> findAsync(final Long id) {
    return CompletableFuture.supplyAsync(() -> this.persistence.findById(id).orElse(null), this.executor);
  }

  @Override
  public CompletableFuture<Void> saveAsync(final CategoryAggregateRoot categoryAggregateRoot) {
    return CompletableFuture.runAsync(() -> this.persistence.save(categoryAggregateRoot), this.executor);
  }
}
