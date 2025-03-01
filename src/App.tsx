// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { BottomNav } from './components/layout/BottomNav';
// import { Home } from './pages/Home';
// import { MCQ } from './pages/MCQ';
// import { Jobs } from './pages/Jobs';
// import { About } from './pages/About';
// import { Profile } from './pages/Profile';
// import { JobDetails } from './pages/Jobs/JobDetails';
// import {A2Class} from './pages/A2Class/index'
// import LanguageScreen from "./pages/A2Class/LanguageScreen";
// import MainPage from "./pages/A2Class/FiveTab/";
// import PaymentPage from './pages/Home/paymentPage';
// import PaymentSuccessPage from './pages/Home/PaymentSuccess';
// import { McqPaymentPage } from './pages/MCQ/McqPaymentPage';
// import { McqPqaymentSuccessPage } from './pages/MCQ/McqPaymentSuccessPage';
// import { TopicList } from './pages/MCQ/TopicList';
// import { AboutUs } from './pages/Profile/AboutUs';
// import {ContactUs} from './pages/Profile/ContactUs';
// import {PrivacyPolicy} from './pages/Profile/PrivacyPolicy';
// import {Services} from './pages/Profile/Services'
// import { EFormFillup } from './pages/Jobs/EFormFillup';
// import { JobConsultancy } from './pages/Jobs/JobConsultancy';
// // import VisitorCounter from './lib/VisitorCounter';

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="min-h-screen bg-gray-50 pb-16">
//           {/* <VisitorCounter></VisitorCounter> */}
       
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/mcq/*" element={<MCQ />} />
//           {/* <Route path="/mcq/indian-constitution/part-1/test2" element={<MCQ />} /> */}

//           <Route path="/jobs" element={<Jobs />} />
//           <Route path="/a²class" element={<A2Class />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/jobs" element={<Jobs />} />
//           <Route path="/job-details" element={<JobDetails />} />
//           <Route path="/english" element={<MainPage />} />
//         <Route path="/hindi" element={<MainPage />} />
//          {/* <Route path="/payment/:planId" element={<PaymentPage />} /> */}
//         {/* <Route path="/payment-succes" element={<PaymentSuccessPage />} /> */} */}
//         <Route path="/topics/:subject" element={<TopicList />} />
//         {/* <Route path="/payment" element={<McqPaymentPage />} /> */}
//         {/* <Route path="/payment-success" element={<McqPqaymentSuccessPage />} /> */}
   
//         <Route path="/mathsten" element={<MainPage />} />
//         <Route path="/about-us" element={<AboutUs />} />
//         <Route path="/contact-us" element={<ContactUs />} />
//         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/eformfillup" element={<EFormFillup />} />
//         <Route path="/jobconsultancy" element={<JobConsultancy />} />
       
        

//         </Routes>
//         <BottomNav />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;


















import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BottomNav } from './components/layout/BottomNav';
import { Home } from './pages/Home';
import { MCQ } from './pages/MCQ';
import { Jobs } from './pages/Jobs';
import { About } from './pages/About';
import { Profile } from './pages/Profile';
import { JobDetails } from './pages/Jobs/JobDetails';
import {A2Class} from './pages/A2Class/index'
import LanguageScreen from "./pages/A2Class/LanguageScreen";
import MainPage from "./pages/A2Class/FiveTab/";
import PaymentPage from './pages/Home/paymentPage';
import PaymentSuccessPage from './pages/Home/PaymentSuccess';
import { McqPaymentPage } from './pages/MCQ/McqPaymentPage';
import { McqPqaymentSuccessPage } from './pages/MCQ/McqPaymentSuccessPage';
import { TopicList } from './pages/MCQ/TopicList';
import { AboutUs } from './pages/Profile/AboutUs';
import {ContactUs} from './pages/Profile/ContactUs';
import {PrivacyPolicy} from './pages/Profile/PrivacyPolicy';
import {Services} from './pages/Profile/Services'
import { EFormFillup } from './pages/Jobs/EFormFillup';
import { JobConsultancy } from './pages/Jobs/JobConsultancy';
import VisitorCounter from './lib/VisitorCounter';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 pb-16">
 <VisitorCounter></VisitorCounter> 
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mcq/*" element={<MCQ />} />
          {/* <Route path="/mcq/indian-constitution/part-1/test2" element={<MCQ />} /> */}

          <Route path="/jobs" element={<Jobs />} />
          <Route path="/a²class" element={<A2Class />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/job-details" element={<JobDetails />} />
          <Route path="/english" element={<MainPage />} />
        <Route path="/hindi" element={<MainPage />} />
        <Route path="/topics/:subject" element={<TopicList />} />
        <Route path="/payment/:planId" element={<PaymentPage />} />
        <Route path="/app/payment/:planId" element={<PaymentPage />} />
        <Route path="/payment-succes" element={<PaymentSuccessPage />} /> 

      
        <Route path="/mathsten" element={<MainPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/services" element={<Services />} />
        <Route path="/eformfillup" element={<EFormFillup />} />
        <Route path="/jobconsultancy" element={<JobConsultancy />} />
       
        

        </Routes>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

export default App;