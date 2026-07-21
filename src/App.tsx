import { Routes, Route } from "react-router";

import HomePage from "./pages/home/HomePage";
import SearchPage from "./pages/search/SearchPage";
import SavedJobsPage from "./pages/saved-jobs/SavedJobsPage";
import JobDetailsPage from "./pages/job-details/JobDetailsPage";
import PageNotFound from "./pages/404/PageNotFound";

import { MainLayout } from "./layouts";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/saved-jobs" element={<SavedJobsPage />} />
        <Route path="/job-details/:jobId" element={<JobDetailsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
