import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import LayOut from './pages/LayOut.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Blog from './pages/Blog.jsx'
import NotFound from './pages/NotFound.jsx'
import data from './data/posts.json'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import BlogPost from './pages/BlogPost.jsx'

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <LayOut/>,
      children: [
        {
          index:true,
          element: <Home data={data}/>,
        },
        {
          path: "home",
          element: <Home data={data}/>,
        },
        {
          path: "blog",
          element: <Blog data={data}/>,
        },
        {
          path: "blog/:slug",
          element: <BlogPost data={data}/>,
        },
        {
          path: "about",
          element: <About data={data}/>,
        },
        {
          path: "privacy",
          element: <Privacy/>,
        },
        {
          path: "terms",
          element: <Terms/>,
        },
        {
          path: "*",
          element: <NotFound/>,
        }
      ],
    },
  ])

  return (
    <>
       <RouterProvider router={router}/>
    </>
  )
}

export default App
