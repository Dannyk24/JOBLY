import { Routes, Route } from "react-router";

import HomePage from "./pages/home/HomePage/HomePage";
import SearchPage from "./pages/search/SearchPage/SearchPage";
import SavedJobsPage from "./pages/saved-jobs/SavedJobsPage/SavedJobsPage";
import JobDetailsPage from "./pages/job-details/JobDetailsPage/JobDetailsPage";
import PageNotFound from "./pages/404/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/saved-jobs" element={<SavedJobsPage />} />
      <Route path="/job-details/:jobId" element={<JobDetailsPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
