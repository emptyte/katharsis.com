package team.emptyte.katharsis.catalog.product.application.mapper;

import org.mapstruct.Mapper;
import team.emptyte.katharsis.catalog.domain.product.domain.ProductAggregateRoot;
import team.emptyte.katharsis.catalog.product.application.contract.command.ProductCommand;
import team.emptyte.katharsis.catalog.product.application.contract.view.ProductView;

@Mapper(componentModel = "spring")
public interface ProductMapper {
  ProductView toView(final ProductAggregateRoot productAggregateRoot);

  ProductAggregateRoot toEntity(final ProductCommand productCommand);
}
