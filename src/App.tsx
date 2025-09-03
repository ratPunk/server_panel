// App.tsx
import "@css/root.css";
import Header from "@/modules/Header";
import Profile from "@/pages/Profile";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ByServer from "@/pages/ByServer";
import MyServer from "@/pages/MyServer";
import Account from "@/pages/Account";
import Footer from "@/modules/Footer";
import ServerPanel from "@/pages/ServerPanel"; // ✅ Проверьте путь: @/modules/Footer

// Компонент для проверки маршрута
function Layout() {
    const location = useLocation();
    const path = location.pathname;

    return (
        <>
            {path !== "/account/serverpanel" &&<Header />}
            <Routes>
                <Route path="/account" element={<Account />} />
                <Route path="/account/profile" element={<Profile />} />
                <Route path="/account/buyserver" element={<ByServer />} />
                <Route path="/account/myserver" element={<MyServer />} />
                <Route path="/account/serverpanel" element={<ServerPanel />} />
                {/* Добавьте маршрут для serverpanel, если нужно */}
            </Routes>
            {path !== "/account/serverpanel" && <Footer />}
        </>
    );
}

function App() {
    return (
        <Router>
            <div id="App">
                <Layout />
            </div>
        </Router>
    );
}

export default App;