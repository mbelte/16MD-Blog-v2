import { Routes, Route, Outlet, Link} from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import HomePage from './pages/Home'
import BlogIndexPage from './pages/BlogIndex'
import BlogPostPage from './pages/BlogPost'
import NotFoundPage from './pages/NotFound'

export type BlogApp = {};

const BlogApp: React.FunctionComponent<BlogApp> = (BlogApp) => {
  return (
    <>
        <Navbar />
        <div className="content">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="blog">
                    <Route index element={<BlogIndexPage />} />
                    <Route path=":postId" element={<BlogPostPage />} />
                </Route>
                <Route path="/login" element={<HomePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    </>
  )
};

export default BlogApp;
