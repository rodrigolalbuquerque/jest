import { ShoppingCart } from './shopping-cart';
import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
};

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  // criar um mock de Discount apenas pq ShoppingCart precisa de uma instância da mesma.
  return new DiscountMock();
};

const createCartItem = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(
      public name: string,
      public price: number,
    ) {}
  }

  return new CartItemMock(name, price);
};

const createSutWithProducts = () => {
  const { sut } = createSut();
  const roda = createCartItem('Roda', 139.9);
  const volante = createCartItem('volante', 79);
  sut.addItem(roda);
  sut.addItem(volante);
  return sut;
};

describe('ShoppingCart', () => {
  it('should be an empty cart when no product is added', () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });

  it('should have 2 cart items', () => {
    const sut = createSutWithProducts();
    expect(sut.items.length).toBe(2);
  });

  it('should test total and totalWithDiscount', () => {
    const sut = createSutWithProducts();
    expect(sut.total()).toBeCloseTo(218.9);
    expect(sut.totalWithDiscount()).toBeCloseTo(218.9);
  });

  it('should be empty', () => {
    const sut = createSutWithProducts();
    sut.clear();
    expect(sut.isEmpty()).toBe(true);
  });

  it('should remove 1 item', () => {
    const sut = createSutWithProducts();
    sut.removeItem(0);
    expect(sut.items.length).toBe(1);
    sut.removeItem(0);
    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });
});
