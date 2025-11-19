// User Types
export interface User {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  bio?: string;
  isVerified: boolean;
  rating: number;
  reviewCount: number;
  memberSince: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile extends User {
  phone?: string;
  address?: Address;
  preferences: UserPreferences;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface UserPreferences {
  notifications: {
    email: boolean;
    sms: boolean;
    push: boolean;
  };
  language: string;
  currency: string;
  theme: 'light' | 'dark' | 'auto';
}

// Product Types
export interface Product {
  id: string;
  sellerId: string;
  seller: User;
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  images: string[];
  price: number;
  currency: string;
  condition: 'new' | 'like-new' | 'good' | 'fair' | 'poor';
  quantity: number;
  status: 'active' | 'sold' | 'inactive' | 'pending';
  shipping: ShippingInfo;
  variants?: ProductVariant[];
  tags: string[];
  views: number;
  favorites: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductVariant {
  id: string;
  name: string;
  options: string[];
  price?: number;
  quantity?: number;
}

export interface ShippingInfo {
  methods: ShippingMethod[];
  freeShippingThreshold?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
    weight: number;
  };
}

export interface ShippingMethod {
  name: string;
  price: number;
  estimatedDays: string;
}

// Transaction Types
export interface Order {
  id: string;
  buyerId: string;
  buyer: User;
  sellerId: string;
  seller: User;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  currency: string;
  status: OrderStatus;
  paymentMethod: string;
  paymentStatus: PaymentStatus;
  shippingAddress: Address;
  trackingNumber?: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  productId: string;
  product: Product;
  quantity: number;
  price: number;
  variant?: string;
}

export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'refunded';

export type PaymentStatus =
  | 'pending'
  | 'processing'
  | 'completed'
  | 'failed'
  | 'refunded';

// Review Types
export interface Review {
  id: string;
  productId: string;
  product?: Product;
  reviewerId: string;
  reviewer: User;
  rating: number;
  title: string;
  comment: string;
  images?: string[];
  isVerifiedPurchase: boolean;
  helpfulCount: number;
  sellerResponse?: SellerResponse;
  createdAt: Date;
  updatedAt: Date;
}

export interface SellerResponse {
  message: string;
  respondedAt: Date;
}

// Message Types
export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  sender: User;
  receiverId: string;
  receiver: User;
  content: string;
  images?: string[];
  isRead: boolean;
  createdAt: Date;
}

export interface Conversation {
  id: string;
  participants: User[];
  lastMessage: Message;
  unreadCount: number;
  productId?: string;
  product?: Product;
  createdAt: Date;
  updatedAt: Date;
}

// Search and Filter Types
export interface SearchFilters {
  query?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  condition?: string[];
  location?: string;
  shipping?: string[];
  sortBy?: 'recent' | 'price-asc' | 'price-desc' | 'popular' | 'rating';
}

export interface SearchResults<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
  message?: string;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

// Form Types
export interface LoginFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterFormData {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  agreeToTerms: boolean;
}

export interface ProductFormData {
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  price: number;
  condition: string;
  quantity: number;
  images: File[];
  shipping: {
    methods: ShippingMethod[];
  };
  tags: string[];
}

// Notification Types
export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  data?: Record<string, unknown>;
  isRead: boolean;
  createdAt: Date;
}

export type NotificationType =
  | 'message'
  | 'order'
  | 'review'
  | 'payment'
  | 'shipping'
  | 'system';

// Analytics Types
export interface SellerAnalytics {
  totalSales: number;
  totalRevenue: number;
  averageOrderValue: number;
  productViews: number;
  conversionRate: number;
  activeListings: number;
  soldListings: number;
  averageRating: number;
  period: 'day' | 'week' | 'month' | 'year';
}
