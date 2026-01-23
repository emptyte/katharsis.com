package team.emptyte.katharsis.catalog.domain.category.domain;

import java.util.Collection;
import java.util.concurrent.CompletableFuture;

public interface CategoryAggregateRootRepository {
  CompletableFuture<CategoryAggregateRoot> findAsync(final Long id);

  CompletableFuture<Collection<CategoryAggregateRoot>> findAllAsync();

  CompletableFuture<Void> saveAsync(final CategoryAggregateRoot categoryAggregateRoot);
}
