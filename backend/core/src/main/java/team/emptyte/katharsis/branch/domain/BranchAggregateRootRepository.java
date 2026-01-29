package team.emptyte.katharsis.branch.domain;

import java.util.concurrent.CompletableFuture;

public interface BranchAggregateRootRepository {
  CompletableFuture<BranchAggregateRoot> findAsync(final Long id);

  CompletableFuture<Void> saveAsync(final BranchAggregateRoot branchAggregateRoot);
}
