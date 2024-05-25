import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFound'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import BackendUrls from './shared/api/urls'
import JobPage from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'
import { getJob } from './shared/api/requests'





const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/" element={<MainLayout />} >
            <Route path="*" element={<NotFoundPage />} />
            <Route index element={<HomePage />} />
            <Route path={BackendUrls.GetAllJobs.url} element={<JobsPage />} />
            <Route path={BackendUrls.GetJob.url} element={<JobPage />} loader={getJob} />
            <Route path={BackendUrls.AddJobPageURL.url} element={<AddJobPage />} />
            <Route path={BackendUrls.EditJobPageURL.url} element={<EditJobPage />} loader={getJob} />
        </Route>
    ])
);

const App: React.FunctionComponent = () => {
    return <RouterProvider router={router} />
}

export default App;
