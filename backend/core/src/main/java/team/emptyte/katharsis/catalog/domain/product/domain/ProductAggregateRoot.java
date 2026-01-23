package team.emptyte.katharsis.catalog.domain.product.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.math.BigDecimal;

@Entity
@Table(name = "product", uniqueConstraints = @UniqueConstraint(columnNames = {"name", "category_id"}))
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public final class ProductAggregateRoot {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;

  @Column(name = "category_id", nullable = false)
  private long categoryId;

  @Column(name = "sku", nullable = false, unique = true, length = 50, updatable = false)
  private String sku;

  @Column(name = "name", nullable = false)
  private String name;
  @Column(name = "description", nullable = false)
  private String description;

  @Column(name = "price", nullable = false, precision = 19, scale = 2)
  private BigDecimal price;

  @Column(name = "active", nullable = false)
  private boolean active;

  public void desactivate() {
    this.active = false;
  }
}

