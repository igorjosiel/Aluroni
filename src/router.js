import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cardapio from 'pages/Cardapio';
import Start from 'pages/Start';
import Menu from 'components/Menu';
import DefaultPage from 'components/DefaultPage';
import About from 'pages/About';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<DefaultPage />}>
            <Route index element={<Start />} />
            <Route path='cardapio' element={<Cardapio />} />
            <Route path='sobre' element={<About />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}