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
