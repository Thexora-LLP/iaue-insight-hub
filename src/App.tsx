import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SubmitManuscript from "./pages/SubmitManuscript";
import MyManuscripts from "./pages/MyManuscripts";
import Journals from "./pages/Journals";
import Conferences from "./pages/Conferences";
import NotFound from "./pages/NotFound";

// Auth
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import VerifyEmail from "./pages/VerifyEmail";
import AccountActivated from "./pages/AccountActivated";

// Public
import About from "./pages/About";
import JournalIssueView from "./pages/JournalIssueView";
import ArticleDetail from "./pages/ArticleDetail";
import ConferenceDetail from "./pages/ConferenceDetail";
import Textbooks from "./pages/Textbooks";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

// User
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import ManuscriptDetail from "./pages/ManuscriptDetail";
import MyRegistrations from "./pages/MyRegistrations";
import Payments from "./pages/Payments";
import Library from "./pages/Library";
import Notifications from "./pages/Notifications";

// Editor
import Editor from "./pages/Editor";
import ReviewQueue from "./pages/ReviewQueue";
import EditorReview from "./pages/EditorReview";
import EditorAssignment from "./pages/EditorAssignment";
import EditorialDecisions from "./pages/EditorialDecisions";
import EditorComms from "./pages/EditorComms";
import EditorialCalendar from "./pages/EditorialCalendar";
import ReviewerManagement from "./pages/ReviewerManagement";

// Admin
import AdminDashboard from "./pages/AdminDashboard";
import AdminUsers from "./pages/AdminUsers";
import AdminUserDetail from "./pages/AdminUserDetail";
import AdminContent from "./pages/AdminContent";
import AdminManuscripts from "./pages/AdminManuscripts";
import AdminJournals from "./pages/AdminJournals";
import AdminConferences from "./pages/AdminConferences";
import AdminTextbooks from "./pages/AdminTextbooks";
import AdminAnalytics from "./pages/AdminAnalytics";
import AdminSettings from "./pages/AdminSettings";
import AdminEmails from "./pages/AdminEmails";
import AdminPayments from "./pages/AdminPayments";
import AdminReports from "./pages/AdminReports";
import AdminRoles from "./pages/AdminRoles";

// Functional
import AdvancedSearch from "./pages/AdvancedSearch";
import SearchResults from "./pages/SearchResults";
import Viewer from "./pages/Viewer";
import Checkout from "./pages/Checkout";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFailed from "./pages/PaymentFailed";
import Downloads from "./pages/Downloads";
import Help from "./pages/Help";
import FAQ from "./pages/FAQ";
import Sitemap from "./pages/Sitemap";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/account-activated" element={<AccountActivated />} />

          {/* Public */}
          <Route path="/about" element={<About />} />
          <Route path="/journals" element={<Journals />} />
          <Route path="/journals/issue/:id" element={<JournalIssueView />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/conferences" element={<Conferences />} />
          <Route path="/conferences/:id" element={<ConferenceDetail />} />
          <Route path="/textbooks" element={<Textbooks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />

          {/* User */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/submit" element={<SubmitManuscript />} />
          <Route path="/manuscripts" element={<MyManuscripts />} />
          <Route path="/manuscripts/:id" element={<ManuscriptDetail />} />
          <Route path="/my-registrations" element={<MyRegistrations />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/library" element={<Library />} />
          <Route path="/notifications" element={<Notifications />} />

          {/* Editor */}
          <Route path="/editor" element={<Editor />} />
          <Route path="/editor/review-queue" element={<ReviewQueue />} />
          <Route path="/editor/review/:id" element={<EditorReview />} />
          <Route path="/editor/assignment/:id" element={<EditorAssignment />} />
          <Route path="/editor/decisions" element={<EditorialDecisions />} />
          <Route path="/editor/communications" element={<EditorComms />} />
          <Route path="/editor/calendar" element={<EditorialCalendar />} />
          <Route path="/editor/reviewers" element={<ReviewerManagement />} />

          {/* Admin */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/users/:id" element={<AdminUserDetail />} />
          <Route path="/admin/content" element={<AdminContent />} />
          <Route path="/admin/manuscripts" element={<AdminManuscripts />} />
          <Route path="/admin/journals" element={<AdminJournals />} />
          <Route path="/admin/conferences" element={<AdminConferences />} />
          <Route path="/admin/textbooks" element={<AdminTextbooks />} />
          <Route path="/admin/analytics" element={<AdminAnalytics />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="/admin/emails" element={<AdminEmails />} />
          <Route path="/admin/payments" element={<AdminPayments />} />
          <Route path="/admin/reports" element={<AdminReports />} />
          <Route path="/admin/roles" element={<AdminRoles />} />

          {/* Functional */}
          <Route path="/search" element={<AdvancedSearch />} />
          <Route path="/search/results" element={<SearchResults />} />
          <Route path="/viewer" element={<Viewer />} />
          <Route path="/payment/checkout" element={<Checkout />} />
          <Route path="/payment/success" element={<PaymentSuccess />} />
          <Route path="/payment/failed" element={<PaymentFailed />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/help" element={<Help />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/sitemap" element={<Sitemap />} />

          {/* EXISTING */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
