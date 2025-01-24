import React from "react";

const TermsWebsite = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-500 p-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <svg
            className="w-16 h-16"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="500" height="500" fill="#3B82F6" />
            <path
              d="M100 100 
                    L200 100 Q225 100 225 125 
                    L225 175 Q225 200 200 200 
                    L100 200 Q75 200 75 175 
                    L75 125 Q75 100 100 100 Z
                    M300 100 
                    L400 100 Q425 100 425 125 
                    L425 175 Q425 200 400 200 
                    L300 200 Q275 200 275 175 
                    L275 125 Q275 100 300 100 Z
                    M100 300 
                    L200 300 Q225 300 225 325 
                    L225 375 Q225 400 200 400 
                    L100 400 Q75 400 75 375 
                    L75 325 Q75 300 100 300 Z
                    M300 300 
                    L400 300 Q425 300 425 325 
                    L425 375 Q425 400 400 400 
                    L300 400 Q275 400 275 375 
                    L275 325 Q275 300 300 300 Z
                    M200 200 
                    L300 200 Q325 200 325 225 
                    L325 275 Q325 300 300 300 
                    L200 300 Q175 300 175 275 
                    L175 225 Q175 200 200 200 Z"
              fill="white"
            />
            <circle cx="50" cy="50" r="25" fill="white" />
            <circle cx="450" cy="50" r="25" fill="white" />
            <circle cx="50" cy="450" r="25" fill="white" />
            <circle cx="450" cy="450" r="25" fill="white" />
          </svg>
          <h1 className="text-3xl font-bold text-white">Terms of Use</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <section className="prose max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Welcome to Milaan!</h2>
              <p className="text-gray-700">
                These Terms of Use (or "Terms") govern your access and use of
                Milaan, except where we expressly state that separate terms (and
                not these) apply, and provide information about the Milaan
                Service (the "Service"), outlined below. These Terms of Use
                constitute an agreement between you and Milaan Technologies. If
                you do not agree to these Terms, then do not access or use
                Milaan.
              </p>
            </div>

            <div className="bg-gray-100 p-4 mb-8">
              <p className="font-bold">ARBITRATION NOTICE:</p>
              <p>
                YOU AGREE THAT DISPUTES BETWEEN YOU AND US WILL BE RESOLVED BY
                BINDING, INDIVIDUAL ARBITRATION AND YOU WAIVE YOUR RIGHT TO
                PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION.
                WE EXPLAIN SOME EXCEPTIONS AND HOW YOU CAN OPT OUT OF
                ARBITRATION BELOW.
              </p>
            </div>

            <div className="space-y-12">
              <section>
                <h3 className="text-xl font-bold text-blue-600 mb-4">
                  1. The Milaan Service
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    We agree to provide you with the Milaan Service. The Service
                    includes all of the Milaan products, features, applications,
                    services, technologies, and software that we provide to
                    advance Milaan's mission: To enhance academic collaboration
                    and student success.
                  </p>

                  <div className="pl-4 border-l-4 border-blue-200 space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">
                        Offering Personalized Educational Opportunities
                      </h4>
                      <p className="text-gray-700">
                        Students have different learning styles and academic
                        needs. We offer various features to help you create,
                        share, and engage with educational content. Our systems
                        work to understand your academic interests and connect
                        you with relevant resources and peers.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">
                        Fostering Academic Integrity
                      </h4>
                      <p className="text-gray-700">
                        We develop and use tools to maintain academic honesty
                        and provide resources for proper citation and
                        collaboration. Our teams work to prevent cheating and
                        ensure compliance with academic standards.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">
                        Advanced Educational Technologies
                      </h4>
                      <p className="text-gray-700">
                        We use cutting-edge technologies, including artificial
                        intelligence and machine learning, to personalize
                        learning experiences and improve educational outcomes on
                        a large scale.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-blue-600 mb-4">
                  2. Platform Security and Privacy
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    To operate our global Service, we must store and transfer
                    data across our systems worldwide. Your information is
                    protected by advanced security measures and educational
                    privacy standards. We implement:
                  </p>

                  <div className="pl-4 border-l-4 border-blue-200 space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Data Protection</h4>
                      <p className="text-gray-700">
                        We use industry-standard encryption and security
                        protocols to protect your academic data and personal
                        information. All data transfers are secured and
                        monitored.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Privacy Controls</h4>
                      <p className="text-gray-700">
                        You have complete control over your profile visibility
                        and content sharing. We provide detailed privacy
                        settings and tools to manage your academic presence.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-blue-600 mb-4">
                  3. Content Guidelines and Academic Integrity
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Your use of Milaan must align with academic integrity
                    standards. You cannot:
                  </p>

                  <div className="pl-4 border-l-4 border-blue-200 space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">
                        Prohibited Activities
                      </h4>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>
                          Share exam materials or answers without authorization
                        </li>
                        <li>
                          Submit plagiarized content or encourage academic
                          dishonesty
                        </li>
                        <li>
                          Engage in unauthorized collaboration during
                          assessments
                        </li>
                        <li>
                          Violate your institution's academic integrity policies
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Content Removal</h4>
                      <p className="text-gray-700">
                        We can remove any content that violates academic
                        integrity, promotes cheating, or breaches institutional
                        policies. Repeated violations will result in account
                        termination.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-blue-600 mb-4">
                  4. User Commitments and Responsibilities
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    As a member of the Milaan academic community, you commit to:
                  </p>

                  <div className="pl-4 border-l-4 border-blue-200 space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Academic Honesty</h4>
                      <p className="text-gray-700">
                        Maintain integrity in all academic work, properly cite
                        sources, and respect intellectual property rights.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">
                        Community Standards
                      </h4>
                      <p className="text-gray-700">
                        Foster a respectful learning environment, support peer
                        learning, and report violations of academic integrity.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-blue-600 mb-4">
                  5. Dispute Resolution
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Any disputes will be resolved through arbitration on an
                    individual basis. The arbitration will be conducted under
                    standard educational arbitration rules, and the proceedings
                    will be confidential.
                  </p>

                  <div className="pl-4 border-l-4 border-blue-200">
                    <p className="text-gray-700">
                      You can opt out of arbitration within 30 days of accepting
                      these terms by sending written notice to legal@milaan.com.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-blue-600 mb-4">
                  6. Changes to Terms
                </h3>
                <p className="text-gray-700">
                  We may update these terms to reflect changes in our service or
                  legal requirements. We will notify you of significant changes,
                  and continued use of Milaan after such changes constitutes
                  acceptance of the updated terms.
                </p>
              </section>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p>For questions about these terms, contact support@milaan.com</p>
          <p className="mt-2">&copy; 2024 Milaan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TermsWebsite;
