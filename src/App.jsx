import { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate, useParams, useLocation } from 'react-router-dom'
import { useCart } from './CartContext'
import { products } from './products'

const GMAIL_COMPOSE_URL = 'https://mail.google.com/mail/?view=cm&fs=1&to=enesomerk1@gmail.com'

function scrollToTop(behavior = 'smooth') {
  window.scrollTo({ top: 0, left: 0, behavior })
}

function scrollToProductsSection() {
  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/* ===========================
   NAVBAR
=========================== */
function Navbar({ searchTerm, onSearchChange }) {
  const { setIsCartOpen, cartItems } = useCart()
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogoClick = (e) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => scrollToTop(), 0)
    } else {
      scrollToTop()
    }
  }

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo" onClick={handleLogoClick}>KORTAV</Link>
      <div className="navbar__search-wrapper">
        <input
          className="navbar__search"
          type="text"
          placeholder="Ürün ara..."
          value={searchTerm}
          onChange={e => onSearchChange(e.target.value)}
        />
      </div>
      <button className="navbar__cart" onClick={() => setIsCartOpen(true)}>
        <span className="navbar__cart-wrap">
          <svg className="navbar__cart-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 6h2l1.6 9.2a1.7 1.7 0 0 0 1.7 1.4h7.8a1.7 1.7 0 0 0 1.7-1.3L21 9H8.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="10" cy="19" r="1.3" fill="currentColor" />
            <circle cx="17" cy="19" r="1.3" fill="currentColor" />
          </svg>
          {cartItems.length > 0 && <span className="navbar__cart-count">{cartItems.length}</span>}
        </span>
      </button>
    </nav>
  )
}

/* ===========================
   HERO SECTION
=========================== */
function HeroSection() {
  const navigate = useNavigate()
  const heroProduct = products[0]
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Her Şey Bir Tıkla Uzağında</h1>
        <p className="hero__subtitle">Binlerce ürün, en iyi fiyatlar ve hızlı teslimat</p>
        <button className="hero__btn" onClick={() => navigate('/')}>Alışverişe Başla</button>
      </div>
      <div className="hero__image-box">
        <div className="hero__image-box-inner">
          <img src={heroProduct?.image ?? 'https://placehold.co/496x384'} alt={heroProduct?.name ?? 'Öne çıkan ürün'} loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  )
}

/* ===========================
   CATEGORY FILTER
=========================== */
const CATEGORIES = ['Tümü', 'Telefon', 'Laptop', 'Aksesuar']

function CategoryFilter({ activeCategory, onCategoryChange }) {
  return (
    <div className="category-filter">
      {CATEGORIES.map(cat => (
        <button
          key={cat}
          className={`category-filter__btn ${activeCategory === cat ? 'category-filter__btn--active' : 'category-filter__btn--passive'}`}
          onClick={() => onCategoryChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

/* ===========================
   PRODUCT CARD
=========================== */
function ProductGrid({ products: filteredProducts }) {
  const { addToCart } = useCart()
  const navigate = useNavigate()
  return (
    <div id="products" className="product-grid">
      {filteredProducts.map(product => (
        <div key={product.id} className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
          <div className="product-card__image">
            <img src={product.image} alt={product.name} loading="lazy" decoding="async" />
          </div>
          <div className="product-card__name">{product.name}</div>
          <div className="product-card__price">₺{product.price.toLocaleString('tr-TR')}</div>
          <button
            className="product-card__btn"
            onClick={e => { e.stopPropagation(); addToCart(product) }}
          >
            Sepete Ekle
          </button>
        </div>
      ))}
    </div>
  )
}

/* ===========================
   FOOTER
=========================== */
function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleHomeClick = (e) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => scrollToTop(), 0)
    } else {
      scrollToTop()
    }
  }

  const handleProductsClick = (e) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => scrollToProductsSection(), 100)
    } else {
      scrollToProductsSection()
    }
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => scrollToTop(), 0)
    } else {
      scrollToTop()
    }
  }

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <Link to="/" className="footer__logo" onClick={handleLogoClick}>KORTAV</Link>
          <div className="footer__tagline">Modern alışverişin yeni adresi</div>
        </div>
        <div className="footer__col">
          <div className="footer__col-title">Keşfet</div>
          <Link to="/" className="footer__link" onClick={handleHomeClick}>Ana Sayfa</Link>
          <Link to="/#products" className="footer__link" onClick={handleProductsClick}>Ürünler</Link>
        </div>
        <div className="footer__col">
          <div className="footer__col-title">İletişim</div>
          <a
            href={GMAIL_COMPOSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            enesomerk1@gmail.com
          </a>
        </div>
      </div>
      <p className="footer__copyright">© 2025 KORTAV. Tüm hakları saklıdır.</p>
    </footer>
  )
}

/* ===========================
   CART SIDEBAR
=========================== */
function CartSidebar() {
  const { cartItems, removeFromCart, isCartOpen, setIsCartOpen, totalPrice } = useCart()
  if (!isCartOpen) return null
  return (
    <>
      <div className="cart-overlay" onClick={() => setIsCartOpen(false)} />
      <aside className="cart-sidebar">
        <div className="cart-sidebar__header">
          <span className="cart-sidebar__title">Sepetim</span>
          <button className="cart-sidebar__close" onClick={() => setIsCartOpen(false)}>✕</button>
        </div>
        <div className="cart-sidebar__items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="cart-item__image">
                <img src={item.image} alt={item.name} loading="lazy" decoding="async" />
              </div>
              <div className="cart-item__info">
                <div className="cart-item__name">{item.name}</div>
                <div className="cart-item__price">₺{(item.price * item.qty).toLocaleString('tr-TR')}</div>
              </div>
              <button className="cart-item__remove" onClick={() => removeFromCart(item.id)}>✕</button>
            </div>
          ))}
        </div>
        <div className="cart-sidebar__footer">
          <div className="cart-sidebar__total">
            <span>Toplam</span>
            <span className="cart-sidebar__total-price">₺{totalPrice.toLocaleString('tr-TR')}</span>
          </div>
          <button className="cart-sidebar__checkout">Ödemeye Geç</button>
        </div>
      </aside>
    </>
  )
}

/* ===========================
   HOME PAGE
=========================== */
function HomePage() {
  const [activeCategory, setActiveCategory] = useState('Tümü')
  const [searchTerm, setSearchTerm] = useState('')
  const location = useLocation()

  useEffect(() => {
    if (location.hash === '#products') {
      setTimeout(() => scrollToProductsSection(), 100)
    }
  }, [location.pathname, location.hash])

  const filtered = products.filter(p => {
    const matchCat = activeCategory === 'Tümü' || p.category === activeCategory
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <>
      <Navbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <HeroSection />
      <CategoryFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      <ProductGrid products={filtered} />
      <Footer />
      <CartSidebar />
    </>
  )
}

function ProductDetail() {
  const { id } = useParams()
  const { addToCart, setIsCartOpen } = useCart()
  const navigate = useNavigate()
  const product = products.find(p => p.id === Number(id))

  if (!product) return (
    <div style={{ color: 'var(--text-primary)', padding: '80px', textAlign: 'center' }}>
      Ürün bulunamadı.
    </div>
  )

  return (
    <>
      <Navbar searchTerm="" onSearchChange={() => {}} />

      <div className="product-detail">

        <div className="product-detail__breadcrumb">
          <span onClick={() => navigate('/')} className="product-detail__breadcrumb-link">Ana Sayfa</span>
          <span className="product-detail__breadcrumb-sep"> &gt; </span>
          <span onClick={() => navigate('/')} className="product-detail__breadcrumb-link">{product.category}</span>
          <span className="product-detail__breadcrumb-sep"> &gt; </span>
          <span className="product-detail__breadcrumb-active">{product.name}</span>
        </div>

        <div className="product-detail__content">

          <div className="product-detail__image-box">
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="product-detail__info">

            <span className="product-detail__category">{product.category}</span>

            <h1 className="product-detail__name">{product.name}</h1>

            <div className="product-detail__price-wrapper">
              <span className="product-detail__price">
                ₺{product.price.toLocaleString('tr-TR')}
              </span>
              {product.oldPrice && (
                <span className="product-detail__old-price">
                  ₺{product.oldPrice.toLocaleString('tr-TR')}
                </span>
              )}
              {product.oldPrice && (
                <span className="product-detail__discount">
                  %{Math.round((1 - product.price / product.oldPrice) * 100)} İndirim
                </span>
              )}
            </div>

            <p className="product-detail__description">{product.description}</p>

            <div className="product-detail__specs">
              <h3 className="product-detail__specs-title">Özellikler</h3>
              <ul className="product-detail__specs-list">
                {product.specs.map((spec, i) => (
                  <li key={i} className="product-detail__spec-item">
                    <span className="product-detail__spec-dot">•</span>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            <button
              className="product-detail__btn"
              onClick={() => { addToCart(product); setIsCartOpen(true) }}
            >
              Sepete Ekle
            </button>

          </div>
        </div>
      </div>

      <CartSidebar />
      <Footer />
    </>
  )
}

/* ===========================
   APP — ROUTING
=========================== */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  )
}
