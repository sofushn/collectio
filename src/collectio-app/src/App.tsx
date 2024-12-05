import { Route, Routes } from "react-router";
import DefaultPage from "./pages/DefaultPage";
import CollectionPage from "./pages/CollectionPage";
import { Header } from '@/components';


function App() {
  return (
    <div>
      {/* Header */}
      <Header
        title="Collect.IO"
        description="For keeping track of your collections"
      />
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
    </div>
  );
}

export default App;
