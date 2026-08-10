import { useEffect, useState } from "react"
import HomePage from "./pages/HomePage"
import BooksPage from "./pages/BooksPage"
import ScrollToTop from "./components/ScrollToTop"

export default function App() {
  const [page, setPage] = useState<"home" | "books">("home")

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [page])

  return (
    <>
      {page === "home" ? (
        <HomePage onNavigate={setPage} />
      ) : (
        <BooksPage onNavigate={setPage} />
      )}
      <ScrollToTop />
    </>
  )
}
