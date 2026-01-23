package team.emptyte.katharsis.inventory.stock.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDateTime;

@Entity
@Table(name = "stock", uniqueConstraints = {@UniqueConstraint(columnNames = {"product_id", "branch_id"})})
@Getter
@NoArgsConstructor
@ToString
public class StockAggregateRoot {
  @Version
  private long version;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;

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

  @Column(name = "last_update", nullable = false)
  private LocalDateTime lastUpdate;

  public void addStock(final int amount) {
    if (amount <= 0) {
      throw new IllegalArgumentException("Amount must be positive");
    }
    if (this.quantity + amount > this.maxStock) {
      throw new IllegalArgumentException("Stock would exceed max limit of " + this.maxStock);
    }
    this.quantity += amount;
    this.lastUpdate = LocalDateTime.now();
  }

  public void removeStock(final int amount) {
    if (amount <= 0) {
      throw new IllegalArgumentException("Amount must be positive");
    }
    if (this.quantity < amount) {
      throw new IllegalArgumentException("Insufficient stock. Current: " + this.quantity);
    }
    this.quantity -= amount;
    this.lastUpdate = LocalDateTime.now();
  }

  public int getAvailableStock() {
    return this.quantity - this.reservedQuantity;
  }

  public boolean getBelowThreshold() {
    return this.getAvailableStock() < this.minStockThreshold;
  }
}
