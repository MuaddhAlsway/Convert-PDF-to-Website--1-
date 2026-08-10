const payments = ["VISA", "Mastercard", "مدى", "Apple Pay", "tabby", "tamara"]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <span>موثق في منصة الأعمال</span>
        <div className="footer-divider" />
        <span>الحقوق محفوظة | دار الحضارة ٢٠٢٦</span>
      </div>
      <div className="footer-payments">
        {payments.map((m) => (
          <span key={m} className="footer-payment-badge">{m}</span>
        ))}
      </div>
    </footer>
  )
}
