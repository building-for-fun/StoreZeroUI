import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetail from './Components/Productdetail'
import { Layout } from './Components/Layout'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/product/:id"
                    element={
                        <Layout>
                            <ProductDetail />
                        </Layout>
                    }
                />
            </Routes>
        </Router>
    )
}
