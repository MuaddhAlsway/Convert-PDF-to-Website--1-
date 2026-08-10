import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const lankaImg = `${import.meta.env.BASE_URL}lanka-allah.webp`

interface Props {
  onNavigate: (page: "home" | "books") => void
}

const exhibitions = {
  local: [
    { name: "معرض الرياض الدولي", dates: "٢ أكتوبر حتى ١١ أكتوبر ٢٠٢٥" },
    { name: "معرض جدة للكتاب", dates: "١١ حتى ٢٠ ديسمبر ٢٠٢٥" },
  ],
  arabic: [
    { name: "معرض أربيل الدولي", dates: "من ٩ إبريل إلى ١٩ إبريل ٢٠٢٥" },
    { name: "معرض مسقط الدولي", dates: "٢٣ إبريل إلى ٣ مايو ٢٠٢٥" },
    { name: "معرض الكتاب الإسلامي", dates: "٢١ إبريل حتى ٣ مايو ٢٠٢٥" },
    { name: "معرض الدوحة الدولي", dates: "٨ مايو إلى ١٧ مايو ٢٠٢٥" },
    { name: "معرض كتارا للرواية", dates: "١٣ أكتوبر حتى ٢٠ أكتوبر" },
    { name: "معرض الشارقة الدولي للكتاب", dates: "٥ إلى ١٥ نوفمبر" },
    { name: "معرض الكويت الدولي", dates: "١٩-٢٩ نوفمبر ٢٠٢٥" },
    { name: "معرض العراق الدولي للكتاب", dates: "٣-١٣ ديسمبر ٢٠٢٥" },
    { name: "معرض الدوحة الدولي", dates: "١٤ مايو إلى ٢٣ مايو ٢٠٢٦" },
  ],
  global: [
    { name: "مركز مصر للمعارض", dates: "من ٢٣ يناير إلى ٥ فبراير ٢٠٢٥" },
    { name: "معرض اسطنبول الدولي", dates: "من ٩ إلى ١٧ أغسطس ٢٠٢٥" },
    { name: "صالون الجزائر الدولي", dates: "من ٢٠ أكتوبر إلى ٨ نوفمبر ٢٠٢٥" },
    { name: "معرض تونس الدولي", dates: "٢٣ إبريل إلى ٣ مايو ٢٠٢٦" },
    { name: "معرض القاهرة الدولي", dates: "٢١ يناير إلى ٣ فبراير ٢٠٢٦" },
  ],
}

const featuredExhibitions = [
  { name: "المعرض الدولي للكتاب", city: "الرياض", dates: "٢ أكتوبر - ١١ أكتوبر ٢٠٢٥" },
  { name: "المعرض الدولي للكتاب", city: "الدوحة", dates: "١٤ مايو - ٢٣ مايو ٢٠٢٦" },
  { name: "المعرض الدولي للكتاب", city: "القاهرة", dates: "٢١ يناير - ٣ فبراير ٢٠٢٦" },
]

type Tab = "local" | "arabic" | "global"

const tabLabels: { key: Tab; label: string }[] = [
  { key: "local", label: "المعارض المحلية" },
  { key: "arabic", label: "المعارض العربية" },
  { key: "global", label: "المعارض العالمية" },
]

export default function HomePage({ onNavigate }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("local")
  const [quoteVisible, setQuoteVisible] = useState(false)

  return (
    <div>
      <Navbar onNavigate={onNavigate} currentPage="home" />

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg" />

        <svg
          className="hero-arches"
          viewBox="0 0 800 180"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <g key={i} transform={`translate(${i * 133 - 67}, 0)`}>
              <path
                d="M0,180 L0,90 Q66,-10 133,90 L133,180 Z"
                fill="rgba(184,146,42,0.06)"
                stroke="rgba(184,146,42,0.18)"
                strokeWidth="1"
              />
            </g>
          ))}
        </svg>

        <div className="hero-content">
          <h1 className="hero-title">من دار الحضارة ..</h1>
          <p className="hero-subtitle">تنتشــر الثقافـــة</p>
        </div>

        <div className="hero-zigzag zigzag-gold" />
      </section>

      {/* ── ABOUT ── */}
      <section className="about-section">
        <div className="about-inner">
          <div className="about-book">
            <div className="about-book-shadow" />
            <img
              src={lankaImg}
              alt="كتاب لأنك الله"
            />
          </div>

          <div className="about-text">
            <h2 className="about-title">مـن الرياض إلـى أرفف الـعالم..</h2>

            <div className="about-bullet">
              <svg className="about-bullet-dot" width="14" height="14" viewBox="0 0 14 14">
                <circle cx="7" cy="7" r="3" fill="#b8922a" />
              </svg>
              <p>
                بدأت قصتنـا في دار الحضارة بتـوجه واضح لنشر المعرفة وتوسيع المدارك
                تأخذكم إلى عالم الحضارة.
              </p>
            </div>

            <div className="about-quote">
              <span className="about-quote-mark-open">"</span>
              <p>
                أنشأنا هذه الدار لتكون رافعة ومنارة للمعرفة وأيضاً لنكون جسركم
                لإيصال كلماتكم إلى العالم حيث ننشر تجاربكم ومعرفتكم وعلومكم لنثري
                بها عقول قرائنا.
              </p>
              <span className="about-quote-mark-close">"</span>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* ── MISSION & VISION ── */}
      <section className="mission-section">
        <div className="mission-pattern" />
        <div className="mission-inner">
          <div className="mission-card mission-card--vision">
            <div className="mission-card-title">رؤيتنـــــا</div>
            <div className="mission-card-line" />
            <p>أن نسهم في نشر المعرفة لبنـاء نهضة وحضارة في عالـمنا الـعربي</p>
          </div>
          <div className="mission-card mission-card--mission">
            <div className="mission-card-title">رسالتنـــــا</div>
            <div className="mission-card-line" />
            <p>
              أن نوصل كلماتنا و كلمات كتابنا للوصول للـعالم و توسيع آفاق الفـكر
              و المـعرفة.
            </p>
          </div>
        </div>
      </section>

      {/* ── EXHIBITIONS ── */}
      <section className="exhibitions-section">
        <div className="exhibitions-inner">
          <div className="section-header">
            <div className="section-header-line" />
            <h2 className="section-header-title">آخــر معارضنا</h2>
          </div>

          <div className="exhibitions-featured">
            {featuredExhibitions.map((ex) => (
              <div key={ex.city} className="exhibition-card">
                <div className="exhibition-card-arch">
                  <svg viewBox="0 0 80 60" width="80" height="60">
                    <path
                      d="M10,60 L10,30 Q40,-5 70,30 L70,60 Z"
                      fill="none"
                      stroke="rgba(184,146,42,0.3)"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M20,60 L20,35 Q40,10 60,35 L60,60 Z"
                      fill="rgba(184,146,42,0.06)"
                      stroke="rgba(184,146,42,0.2)"
                      strokeWidth="1"
                    />
                  </svg>
                </div>
                <div className="exhibition-card-name">{ex.name}</div>
                <div className="exhibition-card-city">{ex.city}</div>
                <div className="exhibition-card-dates">{ex.dates}</div>
              </div>
            ))}
          </div>

          <div className="exhibitions-tabs-wrap">
            <div className="exhibitions-tabs">
              {tabLabels.map((t) => (
                <button
                  key={t.key}
                  className={`exhibitions-tab${activeTab === t.key ? " exhibitions-tab--active" : ""}`}
                  onClick={() => setActiveTab(t.key)}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className="exhibitions-list">
              {exhibitions[activeTab].map((ex, i) => (
                <div key={i} className="exhibitions-list-item">
                  <span className="exhibitions-list-item-date">{ex.dates}</span>
                  <span className="exhibitions-list-item-name">{ex.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE SECTION ── */}
      <section className="quote-section">
        <div className="quote-inner">
          <div className="quote-mark-large">"</div>
          <p className="quote-main-text">لأنـك الله .. لا خـوف ولا قلق،</p>
          <p className="quote-sub-text">ولا شفق، ولا غروب ولا ليل</p>
          <p className="quote-gold-text">لأنك الله ...</p>

          <button
            className="btn-primary quote-toggle-btn"
            onClick={() => setQuoteVisible(!quoteVisible)}
          >
            {quoteVisible ? "إخفاء الاقتباس" : "اظهر الاقتباس"}
          </button>

          {quoteVisible && (
            <div className="quote-reveal">
              الشعوب تنهض بالقراءة وهي حجر الأساس لتطورها ..
            </div>
          )}
        </div>
      </section>

      {/* ── PUBLISH CTA ── */}
      <section className="publish-section">
        <div className="publish-inner">
          <p className="publish-eyebrow">المعرض الدولي للكتاب</p>
          <h2 className="publish-title">دع كلماتك ترى النور</h2>
          <p className="publish-desc">لديك فكرة ؟ أو معرفة أو تجربة تريد نقلها للعالم ؟</p>
          <button className="btn-primary publish-btn" onClick={() => onNavigate("books")}>
            انشر كتابك معنا الآن
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
