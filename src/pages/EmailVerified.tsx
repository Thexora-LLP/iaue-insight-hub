import React from 'react';
    type Props ={
        email?: string;
        onContinue?: () => void;
    };
   
function EmailVer ({ email, onContinue }: Props) {

    return(
        <div className="min-h-screen flex items-center justify-center bg-blue-50 p-6">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="flex justify-center mb-4">
        <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2l4 -4m6 2a9 9 0 11-18 0a9 9 0 0118 0z"/>
        </svg>
        </div>
        <h1 className="text-2xl font-bold text-blue-700 mb-2">
          Email Verified!
        </h1>
        <p className="text-gray-600 mb-6">
          {email
            ? `Your email (${email}) has been verified.`
            : 'Your email has been successfully verified.'}
        </p>
        <button
          onClick={onContinue ?? (() => (window.location.href = '/'))}
          className="inline-flex items-center justify-center px-6 py-2 rounded-xl bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition duration-200"
        >
          Continue
        </button>
            </div>
        </div>
    );
};

export default EmailVer;