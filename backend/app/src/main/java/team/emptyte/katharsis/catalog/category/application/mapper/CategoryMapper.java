package team.emptyte.katharsis.catalog.category.application.mapper;

import org.mapstruct.Mapper;
import team.emptyte.katharsis.catalog.category.application.contract.command.CategoryCommand;
import team.emptyte.katharsis.catalog.category.application.contract.view.CategoryView;
import team.emptyte.katharsis.catalog.domain.category.domain.CategoryAggregateRoot;
import team.emptyte.katharsis.catalog.domain.product.domain.ProductAggregateRoot;

@Mapper(componentModel = "spring")
public interface CategoryMapper {
  CategoryView toView(final CategoryAggregateRoot categoryAggregateRoot);

  CategoryAggregateRoot toEntity(final CategoryCommand categoryCommand);
}
