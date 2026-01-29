package team.emptyte.katharsis.branch.infrastructure.sql;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;
import team.emptyte.katharsis.branch.domain.BranchAggregateRoot;
import team.emptyte.katharsis.branch.domain.BranchAggregateRootRepository;
import team.emptyte.katharsis.branch.infrastructure.sql.jpa.JPABranchRepository;
import team.emptyte.katharsis.catalog.domain.category.domain.CategoryAggregateRoot;
import team.emptyte.katharsis.catalog.domain.category.domain.CategoryAggregateRootRepository;

import java.util.Collection;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.Executor;

@Repository
@RequiredArgsConstructor
public class SQLBranchAggregateRootRepository implements BranchAggregateRootRepository {
  private final JPABranchRepository persistence;

  @Qualifier("applicationTaskExecutor")
  private final Executor executor;

  @Override
  public CompletableFuture<BranchAggregateRoot> findAsync(final Long id) {
    return CompletableFuture.supplyAsync(() -> this.persistence.findById(id).orElse(null), this.executor);
  }

  @Override
  public CompletableFuture<Void> saveAsync(final BranchAggregateRoot branchAggregateRoot) {
    return CompletableFuture.runAsync(() -> this.persistence.save(branchAggregateRoot), this.executor);
  }
}
