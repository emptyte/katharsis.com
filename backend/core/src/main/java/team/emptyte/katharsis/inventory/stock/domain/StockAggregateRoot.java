package team.emptyte.katharsis.inventory.stock.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "stock", uniqueConstraints = {@UniqueConstraint(columnNames = {"product_id", "branch_id"})})
@Getter
@NoArgsConstructor
@ToString
public final class StockAggregateRoot {
  @Version
  private long version;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "product_id", nullable = false)
  private long productId;
  @Column(name = "branch_id", nullable = false)
  private long branchId;

  @Column(name = "quantity", nullable = false)
  private int quantity;
  @Column(name = "reserved_quantity", nullable = false)
  private int reservedQuantity;
  @Column(name = "sold_quantity", nullable = false)
  private int soldQuantity;

  @Column(name = "min_stock_threshold", nullable = false)
  private int minStockThreshold;
  @Column(name = "max_stock", nullable = false)
  private int maxStock;

  public void addStock(final int amount) {
    if (amount <= 0) {
      throw new IllegalArgumentException("amount must be positive");
    }
    if (this.quantity > this.maxStock) {
      throw new IllegalArgumentException("stock is over max stock");
    }
    this.quantity += amount;
  }

  public void removeStock(final int amount) {
    if (amount <= 0) {
      throw new IllegalArgumentException("amount must be positive");
    }
    if (this.quantity < amount) {
      throw new IllegalArgumentException("stock is not enough");
    }
    this.quantity -= amount;
  }

  public int getAvailableStock() {
    return this.quantity - this.soldQuantity;
  }

  public boolean getBelowThreshold() {
    return this.quantity < this.minStockThreshold;
  }
}
