import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from "react-router-dom"
import App from './App.jsx'
import "./Styles/index.css"

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
} from "./Pages/index.js";


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
          <Route path="eligibility/" element={<FormLayout/>}>
                      <Route path="aadhar" element={<AadharVerification />} />
                      <Route path="payment" element={<ServerErrorPage />} />
                      <Route path="documents" element={<DocumentVerification />} />
                      <Route path="personal" element={<PersonalInformation />} />
                      <Route path="education" element={<EducationalDetails />} />
                      <Route path="bank" element={<BankDetails />} />
          </Route>
      </Route>
  )
);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
      <RouterProvider router={router}></RouterProvider>
  // </StrictMode>
);
