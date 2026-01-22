package team.emptyte.katharsis.catalog.category.infrastructure.persistence.sql.jpa;

import org.springframework.data.jpa.repository.JpaRepository;
import team.emptyte.katharsis.catalog.domain.category.domain.CategoryAggregateRoot;

public interface JPACategoryRepository extends JpaRepository<CategoryAggregateRoot, Long> {
}
