import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Ransomware Readiness Assessment
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Evaluate your organization's preparedness against ransomware attacks. This assessment will help you identify areas of strength and potential vulnerabilities in your cybersecurity posture.
          </p>
          <div className="mt-8">
            <Link href="/assessment">
              <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Start Assessment
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
