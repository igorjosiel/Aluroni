import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cardapio from 'pages/Cardapio';
import Start from 'pages/Start';
import Menu from 'components/Menu';
import DefaultPage from 'components/DefaultPage';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
      
        <Routes>
          <Route path='/' element={<DefaultPage />}>
            <Route index element={<Start />} />
            <Route path='cardapio' element={<Cardapio />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}