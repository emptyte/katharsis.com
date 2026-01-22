package team.emptyte.katharsis.branch.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "branch")
@Getter
@NoArgsConstructor
@ToString
public final class BranchAggregateRoot {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;

  @Column(name = "name", nullable = false)
  private String name;
  @Column(name = "address", nullable = false)
  private String address;
  @Column(name = "phone", nullable = false)
  private String phone;
}
