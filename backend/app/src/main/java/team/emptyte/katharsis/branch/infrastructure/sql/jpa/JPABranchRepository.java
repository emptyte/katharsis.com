package team.emptyte.katharsis.branch.infrastructure.sql.jpa;

import org.springframework.data.jpa.repository.JpaRepository;
import team.emptyte.katharsis.branch.domain.BranchAggregateRoot;

public interface JPABranchRepository extends JpaRepository<BranchAggregateRoot, Long> {
}
