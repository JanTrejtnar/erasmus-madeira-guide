import { HashRouter, Route, Routes } from 'react-router-dom';
import { AppShell } from './components/AppShell';
import { SearchPaletteProvider } from './components/SearchPalette';
import { LangProvider } from './lib/i18n';
import { CategoryPage, Dashboard, GuidePage, NotFound, Sos, Topics } from './pages/pages';

export default function App() {
  return (
    <LangProvider>
      <HashRouter>
        <SearchPaletteProvider>
          <Routes>
            <Route element={<AppShell />}>
              <Route index element={<Dashboard />} />
              <Route path="topics" element={<Topics />} />
              <Route path="c/:id" element={<CategoryPage />} />
              <Route path="g/:slug" element={<GuidePage />} />
              <Route path="sos" element={<Sos />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </SearchPaletteProvider>
      </HashRouter>
    </LangProvider>
  );
}
