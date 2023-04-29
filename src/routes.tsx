import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from 'components/Menu';
import Footer from 'components/Footer';

const Cardapio = lazy(() => import('pages/Cardapio'));
const DefaultPage = lazy(() => import('components/DefaultPage'));
const Start = lazy(() => import('pages/Start'));
const NotFound = lazy(() => import('pages/NotFound'));
const Dishe = lazy(() => import('pages/Dish'));
const About = lazy(() => import('pages/About'));

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu />
        <Suspense fallback={<p>Carregando...</p>}>
          <Routes>
            <Route path='/' element={<DefaultPage />}>
              <Route index element={<Start />} />
              <Route path='cardapio' element={<Cardapio />} />
              <Route path='sobre' element={<About />} />
            </Route>
            <Route path='*' element={<NotFound />} />
            <Route path='prato/:id' element={<Dishe />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </main>
  );
}