import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const BASE = import.meta.env.BASE_URL
const iksirImg = `${BASE}iksir.webp`
const lankaImg = `${BASE}lanka-allah.webp`
const suwarImg = `${BASE}maalim-al-sur.jpg`
const thillImg = `${BASE}althil.webp`
const tadabburImg = `${BASE}tadabbur-quran.webp`

interface Props {
  onNavigate: (page: "home" | "books") => void
}

function StarRating({ count }: { count: number }) {
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12">
          <polygon
            points="6,1 7.5,4.5 11,4.8 8.5,7 9.3,11 6,9 2.7,11 3.5,7 1,4.8 4.5,4.5"
            fill={i <= count ? "#d4a843" : "#ddd"}
          />
        </svg>
      ))}
    </div>
  )
}

const bestSellers = [
  {
    title: "الإكسير.. خلاصة أعمال القلوب من مدارج السالكين لابن القيم",
    price: "٢٥ رس",
    rating: 4,
    img: iksirImg,
  },
  {
    title: "لأنـك الله - مـعراج النفوس المطمئنة ج٢",
    price: "٣١ رس",
    rating: 5,
    img: lankaImg,
  },
  {
    title: "معالم الـسور",
    price: "١٠٣ رس",
    rating: 4,
    img: suwarImg,
  },
  {
    title: "إلى الظل - قوانين للحياة",
    price: "٢٥ رس",
    rating: 4,
    img: thillImg,
  },
]

const valuedSelections = [
  {
    title: "الإكسير.. خلاصة أعمال القلوب من مدارج السالكين لابن القيم",
    price: "٢٥ رس",
    img: iksirImg,
  },
  {
    title: "الإكسير.. خلاصة أعمال القلوب من مدارج السالكين لابن القيم",
    price: "٢٥ رس",
    img: iksirImg,
  },
  {
    title: "الإكسير.. خلاصة أعمال القلوب من مدارج السالكين لابن القيم",
    price: "٢٥ رس",
    img: iksirImg,
  },
  {
    title: "الإكسير.. خلاصة أعمال القلوب من مدارج السالكين لابن القيم",
    price: "٢٥ رس",
    img: iksirImg,
  },
]

const categories = [
  {
    label: "الكتب الدينية",
    icon: (
      <svg viewBox="0 0 40 40" width="32" height="32" fill="none">
        <rect x="6" y="6" width="28" height="28" rx="3" stroke="#b8922a" strokeWidth="1.5" />
        <path d="M13 14L27 14M13 20L27 20M13 26L22 26" stroke="#b8922a" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 6L20 10" stroke="#b8922a" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: "التطوير الشخصي والمهني",
    icon: (
      <svg viewBox="0 0 40 40" width="32" height="32" fill="none">
        <circle cx="20" cy="20" r="13" stroke="#b8922a" strokeWidth="1.5" />
        <path d="M20 12L20 20L26 23" stroke="#b8922a" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "الأدب والروايات",
    icon: (
      <svg viewBox="0 0 40 40" width="32" height="32" fill="none">
        <path d="M10 8L10 34L30 34L30 14L24 8Z" stroke="#b8922a" strokeWidth="1.5" />
        <path d="M24 8L24 14L30 14" stroke="#b8922a" strokeWidth="1.5" />
        <path d="M15 20L25 20M15 25L25 25" stroke="#b8922a" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "ملحقات القراءة",
    icon: (
      <svg viewBox="0 0 40 40" width="32" height="32" fill="none">
        <rect x="8" y="10" width="24" height="20" rx="2" stroke="#b8922a" strokeWidth="1.5" />
        <path d="M14 10L14 30" stroke="#b8922a" strokeWidth="1.5" />
        <path d="M8 18L32 18" stroke="#b8922a" strokeWidth="1.5" />
      </svg>
    ),
  },
]

const bookDecos = [
  { left: "10%", top: "20%", rotate: "-15deg", width: 58, height: 90 },
  { left: "20%", top: "50%", rotate: "8deg", width: 72, height: 110 },
  { left: "70%", top: "15%", rotate: "12deg", width: 62, height: 95 },
  { left: "80%", top: "45%", rotate: "-8deg", width: 68, height: 105 },
  { left: "85%", top: "70%", rotate: "5deg", width: 52, height: 80 },
]

export default function BooksPage({ onNavigate }: Props) {
  const [activeCategory, setActiveCategory] = useState(0)
  const [form, setForm] = useState({ name: "", email: "", phone: "" })

  return (
    <div>
      <Navbar onNavigate={onNavigate} currentPage="books" />

      {/* ── HERO ── */}
      <section className="books-hero">
        <div className="books-hero-bg" />

        <div className="books-hero-books-deco">
          {bookDecos.map((b, i) => (
            <div
              key={i}
              className="books-hero-book-deco"
              style={{
                left: b.left,
                top: b.top,
                width: b.width,
                height: b.height,
                transform: `rotate(${b.rotate})`,
              }}
            />
          ))}
        </div>

        <div className="books-hero-content">
          <div className="books-hero-quote-mark">"</div>
          <h1 className="books-hero-title">
            خيرُ ما يتّخذه المرءُ رفيقاً... كتاب.
          </h1>
          <p className="books-hero-author">– ابن الجوزي</p>
          <p className="books-hero-sub">اختر رفيقك القادم من مجموعتنا</p>
        </div>

        <div className="zigzag-gold" style={{ position: "absolute", bottom: 0, left: 0, right: 0 }} />
      </section>

      {/* ── SUMMER OFFERS ── */}
      <section className="summer-banner">
        <div className="summer-banner-bg" />
        <div className="summer-banner-overlay" />
        <div className="summer-banner-inner">
          <button className="summer-banner-btn">تسوق الآن</button>
          <div className="summer-banner-text">
            <div className="summer-banner-title">عروض الصيف من دار الحضارة</div>
            <div className="summer-banner-sub">
              اشترِ الآن بـ٣ دفعات بدون فوائد، متوافق مع أحكام الشريعة
            </div>
          </div>
        </div>
      </section>

      {/* ── BEST SELLERS ── */}
      <section className="books-section">
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="section-header">
            <div className="section-header-line" />
            <h2 className="section-header-title">الأكثـر مبيعاً</h2>
          </div>

          <div className="books-grid">
            {bestSellers.map((book, i) => (
              <div key={i} className="book-card">
                <div className="book-card-img">
                  <img src={book.img} alt={book.title} />
                  <div className="book-card-img-overlay" />
                </div>
                <div className="book-card-body">
                  <p className="book-card-title">{book.title}</p>
                  <StarRating count={book.rating} />
                  <p className="book-card-price">{book.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="categories-section">
        <h2 className="categories-title">التصنيفـــات</h2>
        <div className="categories-grid">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`category-btn${activeCategory === i ? " category-btn--active" : ""}`}
              onClick={() => setActiveCategory(i)}
            >
              <div className="category-arch">
                <svg className="category-arch-svg" viewBox="0 0 60 70">
                  <path
                    d="M5,70 L5,35 Q30,-5 55,35 L55,70 Z"
                    fill={activeCategory === i ? "rgba(184,146,42,0.15)" : "rgba(255,255,255,0.04)"}
                    stroke={activeCategory === i ? "rgba(184,146,42,0.5)" : "rgba(255,255,255,0.12)"}
                    strokeWidth="1"
                  />
                </svg>
                <div className="category-arch-icon">{cat.icon}</div>
              </div>
              <span className={`category-label${activeCategory === i ? " category-label--active" : ""}`}>
                {cat.label}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* ── BOOK OF THE WEEK ── */}
      <section className="botw-section">
        <div className="botw-inner">
          <div className="section-header">
            <div className="section-header-line" />
            <h2 className="section-header-title section-header-title--dark">
              كتاب الأسبـوع
            </h2>
          </div>

          <div className="botw-card">
            <div className="botw-image-wrap">
              <div className="botw-book-img">
                <img
                  src={tadabburImg}
                  alt="كتاب الأسبوع"
                />
                <div className="botw-badge">كتاب الأسبوع</div>
              </div>
            </div>

            <div className="botw-info">
              <div className="botw-label">كتاب الأسبــوع</div>
              <h3 className="botw-title">#تدبـر القـرآن</h3>

              <div className="botw-stars">
                <StarRating count={4} />
              </div>

              <div className="botw-price-row">
                <span className="botw-price-old">٨٠ رس</span>
                <span className="botw-price-new">٧٢ رس</span>
              </div>

              <p className="botw-installment">
                ابتداءً من 7.00/شهر أو على 4 دفعات بدون فوائد،
                <br />
                متوافق مع أحكام الشريعة. <span>لمعرفة المزيد</span>
              </p>

              <div className="botw-actions">
                <button className="btn-primary botw-btn-primary">اضف للسلة</button>
                <button className="btn-outline botw-btn-outline">عرض التفاصيل</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUED SELECTIONS ── */}
      <section className="valued-section">
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="section-header">
            <div className="section-header-line" />
            <h2 className="section-header-title section-header-title--dark">
              ✦ مـختارات قـيمة
            </h2>
          </div>

          <div className="books-grid">
            {valuedSelections.map((book, i) => (
              <div key={i} className="book-card">
                <div className="book-card-img">
                  <img src={book.img} alt={book.title} />
                </div>
                <div className="book-card-body">
                  <p className="book-card-title">{book.title}</p>
                  <StarRating count={4} />
                  <p className="book-card-price">{book.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="contact-section">
        <div className="contact-inner">
          <div className="section-header">
            <div className="section-header-line" />
            <h2 className="section-header-title section-header-title--dark">
              تواصل معنا
            </h2>
          </div>

          <div className="contact-field">
            <label className="contact-label">الاسـم :</label>
            <input
              className="contact-input"
              type="text"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            />
          </div>
          <div className="contact-field">
            <label className="contact-label">الايـميل :</label>
            <input
              className="contact-input"
              type="email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            />
          </div>
          <div className="contact-field">
            <label className="contact-label">رقم الجوال :</label>
            <input
              className="contact-input"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            />
          </div>

          <div className="contact-actions">
            <button className="btn-primary contact-btn-primary">التحدوث</button>
            <button className="contact-btn-secondary">جـربـنا</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
