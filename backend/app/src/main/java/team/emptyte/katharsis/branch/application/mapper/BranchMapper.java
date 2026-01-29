package team.emptyte.katharsis.branch.application.mapper;

import org.mapstruct.Mapper;
import team.emptyte.katharsis.branch.application.contract.command.BranchCommand;
import team.emptyte.katharsis.branch.application.contract.view.BranchView;
import team.emptyte.katharsis.branch.domain.BranchAggregateRoot;
import team.emptyte.katharsis.catalog.domain.category.domain.CategoryAggregateRoot;

@Mapper(componentModel = "spring")
public interface BranchMapper {
  BranchView toView(final BranchAggregateRoot branchAggregateRoot);

  BranchAggregateRoot toEntity(final BranchCommand branchCommand);
}
