import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Privacy = () => {
  return (
    <MainLayout>
        <div className='min-h-screen p-4'> 
      <h1 className='text-2xl font-semibold mb-6'>deife-food Privacy Notice</h1>

     <p className="mb-3 ">
        <strong>1. About this Notice</strong>
      </p>
      <p>
        This Privacy Notice provides information on how deife-food collects and processes your personal data when you visit our website or mobile applications. It sets out what we do with your personal data and how we keep it secure and explains the rights that you have in relation to your personal data.
      </p>

      <p className="mb-1 mt-3">
        <strong>2. Who We Are</strong>
      </p>
      <p>
        deife-food is the leading pan-African e-commerce platform. Our platform consists of our marketplace, which connects sellers with consumers, our logistics service, which enables the shipment and delivery of packages from sellers to consumers, and our payment service, which facilitates transactions among participants active on our platform in selected markets.
      </p>
      <p>
        This website and/or mobile app is operated by a member of the deife-food group of companies, the ultimate holding company of which is deife-food Technologies AG. Information on our subsidiaries can be found on our website.
      </p>
      <p>
        Any personal data provided or collected by deife-food is controlled by the subsidiary that the website and/or mobile app relates to.
      </p>

      <p className="mb-1 mt-3">
        <strong>3. The Data We Collect About You?</strong>
      </p>
      <p>
        The personal data we collect includes:
      </p>
      <ul>
        <li>Contact details (such as your name, postal addresses, phone numbers, and email addresses),</li>
        <li>Demographic information (such as your date of birth, age or age range, and gender),</li>
        <li>Online registration information (such as your password and other authentication information),</li>
        <li>Payment information (such as your credit card information and billing address),</li>
        <li>Information provided as part of online questionnaires (such as responses to any customer satisfaction surveys or market research),</li>
        <li>Competition entries/submissions, and</li>
        <li>In certain cases, your marketing preferences.</li>
      </ul>

      <p className="mb-1 mt-3">
        <strong>4. Cookies and other Identifiers</strong>
      </p>
      <p>
        A cookie is a small file of letters and numbers that we put on your computer, mobile phone, or tablet if you agree. Cookies allow us to distinguish you from other users of our website and mobile applications, which helps us provide you with an enhanced browsing experience. For more information about cookies and how we use them, please read our Cookie Notice.
      </p>

      {/* Section 5: How We Use Your Personal Data */}
      <p className="mb-1 mt-3">
        <strong>5. How We Use Your Personal Data</strong>
      </p>
      <p>
        We use your personal data to operate, provide, develop, and improve the products and services that we offer, including the following:
      </p>
      <ul>
        <li>Registering you as a new customer.</li>
        <li>Processing and delivering your orders.</li>
        <li>Managing your relationship with us.</li>
        <li>Enabling you to participate in promotions, competitions, and surveys.</li>
        <li>Improving our website, applications, products, and services.</li>
        <li>Recommending/advertising products or services which may be of interest to you.</li>
        <li>Enabling you to access certain products and services offered by our partners and vendors.</li>
        <li>Complying with our legal obligations, including verifying your identity where necessary.</li>
        <li>Detecting fraud.</li>
      </ul>

      {/* Section 6: Legal basis for the processing of Personal Data */}
      <p className="mb-1 mt-3">
        <strong>6. Legal basis for the processing of Personal Data</strong>
      </p>
      <p>
        We will only process your personal data where we have a legal basis to do so. The legal basis will depend on the purposes for which we have collected and used your personal data. In almost every case, the legal basis will be one of the following:
      </p>
      <ul>
        <li>Consent</li>
        <li>Our legitimate business interests</li>
        <li>Performance of a contract with you</li>
        <li>Compliance with law</li>
      </ul>

    </div>
    </MainLayout>
  );
};

export default Privacy;
