import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { NotFound } from './components/NotFound'
import { RecipeMain } from './components/recipes/RecipeMain'
import { RecipeDetails } from './components/recipes/RecipeDetail'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/recipes" element={<RecipeMain />}>
          <Route path=":recipeId" element={<RecipeDetails />} />
        </Route>
        {/* Wildcard route for 404 pages */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
  )
}

export default App
