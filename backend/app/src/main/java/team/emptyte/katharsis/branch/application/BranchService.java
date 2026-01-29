package team.emptyte.katharsis.branch.application;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import team.emptyte.katharsis.branch.application.contract.command.BranchCommand;
import team.emptyte.katharsis.branch.application.contract.view.BranchView;
import team.emptyte.katharsis.branch.application.mapper.BranchMapper;
import team.emptyte.katharsis.branch.domain.BranchAggregateRoot;
import team.emptyte.katharsis.branch.domain.BranchAggregateRootRepository;
import team.emptyte.katharsis.catalog.domain.category.domain.CategoryAggregateRoot;

import java.util.Collection;
import java.util.concurrent.CompletableFuture;

@Service
@RequiredArgsConstructor
public final class BranchService {
  private final BranchAggregateRootRepository branchAggregateRootRepository;
  private final BranchMapper branchMapper;

  public CompletableFuture<BranchView> findById(final Long id) {
    return this.branchAggregateRootRepository.findAsync(id)
      .thenApply(this.branchMapper::toView);
  }

  public CompletableFuture<Void> create(final BranchCommand branchCommand) {
    final BranchAggregateRoot branchAggregateRoot = this.branchMapper.toEntity(branchCommand);
    if (branchAggregateRoot == null) {
      throw new IllegalArgumentException("BranchCommand is invalid");
    }
    return this.branchAggregateRootRepository.saveAsync(branchAggregateRoot);
  }
}
