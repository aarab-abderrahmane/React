import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import {ProductCard} from './productCard';

describe('ProductCard Component', () => {
  const mockProduct = {
    id: 1,
    title: 'Test Product',
    price: 99.99,
    description: 'Test description',
    category: "men's clothing",
    image: 'https://picsum.photos/200/300?random=1',
    brand: 'Nike',
    color: 'Black',
    rating: {
      rate: 4.5,
      count: 120
    }
  };

  const mockOnAddToCart = jest.fn();

  beforeEach(() => {
    mockOnAddToCart.mockClear();
  });

  test('renders product card with correct information', () => {
    render(<ProductCard product={mockProduct} onAddToCart={mockOnAddToCart} />);
    
    expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
    expect(screen.getByText('Nike')).toBeInTheDocument();
    expect(screen.getByText("men's clothing")).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
  });

  test('displays product image', () => {
    render(<ProductCard product={mockProduct} onAddToCart={mockOnAddToCart} />);
    
    const image = screen.getByAltText('Test Product');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockProduct.image);
  });

  test('displays rating correctly', () => {
    render(<ProductCard product={mockProduct} onAddToCart={mockOnAddToCart} />);
    
    const rating = screen.getByText(/4.5/);
    expect(rating).toBeInTheDocument();
  });

  test('displays color indicator', () => {
    const { container } = render(<ProductCard product={mockProduct} onAddToCart={mockOnAddToCart} />);
    
    const colorIndicator = container.querySelector('.color-indicator');
    expect(colorIndicator).toBeInTheDocument();
    expect(colorIndicator).toHaveStyle({ backgroundColor: 'black' });
  });

  test('calls onAddToCart when Add to Cart button is clicked', () => {
    render(<ProductCard product={mockProduct} onAddToCart={mockOnAddToCart} />);
    
    const addButton = screen.getByText('Add to Cart');
    fireEvent.click(addButton);
    
    expect(mockOnAddToCart).toHaveBeenCalledTimes(1);
    expect(mockOnAddToCart).toHaveBeenCalledWith(mockProduct);
  });

  test('truncates long product titles', () => {
    const longTitleProduct = {
      ...mockProduct,
      title: 'This is a very long product title that should be truncated to make it fit better in the card'
    };
    
    render(<ProductCard product={longTitleProduct} onAddToCart={mockOnAddToCart} />);
    
    const title = screen.getByRole('heading');
    expect(title.textContent.length).toBeLessThan(longTitleProduct.title.length);
    expect(title.textContent).toContain('...');
  });

  test('renders with different product data', () => {
    const differentProduct = {
      id: 2,
      title: 'Different Product',
      price: 49.99,
      category: "women's clothing",
      brand: 'Adidas',
      color: 'Blue',
      image: 'https://picsum.photos/200/300?random=2',
      rating: { rate: 3.5, count: 50 }
    };
    
    render(<ProductCard product={differentProduct} onAddToCart={mockOnAddToCart} />);
    
    expect(screen.getByText(/Different Product/i)).toBeInTheDocument();
    expect(screen.getByText('Adidas')).toBeInTheDocument();
    expect(screen.getByText('$49.99')).toBeInTheDocument();
  });

  test('button has correct styling class', () => {
    render(<ProductCard product={mockProduct} onAddToCart={mockOnAddToCart} />);
    
    const button = screen.getByText('Add to Cart');
    expect(button).toHaveClass('add-to-cart');
  });
});