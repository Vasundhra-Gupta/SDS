// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import "./Styles/index.css";

import {
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    RegisterPage,
    SupportPage,
    ServerErrorPage,
    FormLayout,
    AadharVerification,
    DocumentVerification,
    BankDetails,
    PersonalInformation,
    EducationalDetails,
    PaymentPage,
    DonatorDashboard,
    StudentDashboard,
    DonationWelocomePage,
    DonationSuggest,
    DonationBankDetails,
    DonationInputForm,
    FAQPage,
    DropoutGuidance,
    HowItWorks,
    SubmissionPage,
    CounsellorHome,
    CounsellorRegister,
    ResourceSelector,
    AdminLogin,
    AdminDashboard,
    AdminLayout,
    CounselorManagement,
    FundTracking,
    StudentVerification,
    AdminSettings,
} from "./Pages/index.js";
import LoanSuggestionCalculator from "./Pages/LoanAndScholarship/LoanSuggestionCalculator.jsx";
import ScholarshipFinder from "./Pages/LoanAndScholarship/ScholarshipFinder.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="" element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="support" element={<SupportPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="server-error" element={<ServerErrorPage />} />
            <Route path="eligibility/" element={<FormLayout />}>
                <Route path="aadhar" element={<AadharVerification />} />
                <Route path="payment" element={<PaymentPage />} />
                <Route path="documents" element={<DocumentVerification />} />
                <Route path="personal" element={<PersonalInformation />} />
                <Route path="education" element={<EducationalDetails />} />
                <Route path="bank" element={<BankDetails />} />
            </Route>
            <Route path="request-success" element={<SubmissionPage />} />
            {/* add routes here */}
            <Route path="donator-dashboard" element={<DonatorDashboard />} />
            <Route path="student-dashboard" element={<StudentDashboard />} />
            <Route path="request-workflow" element={<HowItWorks />} />
            <Route path="donation-welcome" element={<DonationWelocomePage />} />
            <Route
                path="donation-bankdetail"
                element={<DonationBankDetails />}
            />
            <Route path="donation-suggest" element={<DonationSuggest />} />
            <Route path="donation-input" element={<DonationInputForm />} />
            <Route path="donation-payment" element={<PaymentPage />} />
            <Route path="faq" element={<FAQPage />} />
            <Route path="dropout" element={<DropoutGuidance />} />
            <Route path="resource" element={<ResourceSelector />} />
            <Route path="counsellor-home" element={<CounsellorHome />} />
            <Route
                path="counsellor-register"
                element={<CounsellorRegister />}
            />
            <Route path="loans" element={<LoanSuggestionCalculator />} />
            <Route path="scholarships" element={<ScholarshipFinder />} />
            <Route path="admin/" element={<AdminLayout />}>
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="login" element={<AdminLogin />} />
                <Route path="fund" element={<FundTracking />} />
                <Route path="student" element={<StudentVerification />} />
                <Route path="counselor" element={<CounselorManagement />} />
                <Route path="settings" element={<AdminSettings />} />
            </Route>
        </Route>
    )
);

createRoot(document.getElementById("root")).render(
    // <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    // </StrictMode>
);
