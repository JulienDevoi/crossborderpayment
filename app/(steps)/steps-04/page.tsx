'use client'

import Link from 'next/link'
import Image from 'next/image'
import StepsHeader from '../steps-header'
import StepsProgress from '../steps-progress'

export default function Steps04() {
  // Sample payment data - in a real app this would come from the previous steps
  const paymentData = {
    amount: '€2,750.00',
    recipient: 'John Doe',
    iban: 'DE89 3704 0044 0532 0130 00',
    bankAddress: '123 Banking Street, Financial District',
    country: 'Germany',
    reference: 'Freelance Work Payment',
    date: new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }
  return (
    <main className="bg-white dark:bg-gray-900">

      <div className="w-full">

          <div className="min-h-[100dvh] h-full flex flex-col after:flex-1">

            <div className="flex-1">

              <StepsHeader />
              <StepsProgress step={4} />

            </div>

            <div className="px-4 py-8">
              <div className="max-w-md mx-auto">

                

                {/* Payment Recap Card */}
                <div className="mb-8">
                  <div className="text-2xl text-gray-800 dark:text-gray-100 font-semibold text-center mb-1">Bank Transfer</div>
                  <div className="text-sm text-center italic text-gray-600 dark:text-gray-400">Please complete your payment using the details below</div>
                  
                  {/* Payment Details Card */}
                  <div className="drop-shadow-md mt-8">
                    {/* Top */}
                    <div className="bg-white dark:bg-gray-800 rounded-t-xl px-5 pb-2.5 text-center">
                      <div className="mb-3 text-center">
                        <div className="inline-flex w-12 h-12 rounded-full -mt-6 bg-amber-500 items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-2xl font-semibold mb-1 text-gray-800 dark:text-gray-100">{paymentData.amount}</div>
                      <div className="text-sm font-medium text-gray-800 dark:text-gray-100 mb-3">{paymentData.recipient}</div>
                      <div className="text-xs inline-flex font-medium rounded-full text-center px-2.5 py-1 bg-amber-100 text-amber-800 dark:bg-amber-800/30 dark:text-amber-400">Pending</div>
                    </div>
                    
                    {/* Divider */}
                    <div className="flex justify-between items-center" aria-hidden="true">
                      <svg className="fill-white dark:fill-gray-800" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 20c5.523 0 10-4.477 10-10S5.523 0 0 0h20v20H0Z" />
                      </svg>
                      <div className="grow w-full h-5 bg-white dark:bg-gray-800 flex flex-col justify-center">
                        <div className="h-px w-full border-t border-dashed border-gray-200 dark:border-gray-700" />
                      </div>
                      <svg className="fill-white dark:fill-gray-800 rotate-180" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 20c5.523 0 10-4.477 10-10S5.523 0 0 0h20v20H0Z" />
                      </svg>
                    </div>
                    
                    {/* Bottom */}
                    <div className="bg-white dark:bg-gray-800 rounded-b-xl p-5 pt-2.5 text-sm space-y-3">
                      <div className="flex justify-between space-x-1">
                        <span className="italic text-gray-600 dark:text-gray-400">IBAN:</span>
                        <span className="font-medium text-gray-700 dark:text-gray-100 text-right">{paymentData.iban}</span>
                      </div>
                      <div className="flex justify-between space-x-1">
                        <span className="italic text-gray-600 dark:text-gray-400">Bank Address:</span>
                        <span className="font-medium text-gray-700 dark:text-gray-100 text-right">{paymentData.bankAddress}</span>
                      </div>
                      <div className="flex justify-between space-x-1">
                        <span className="italic text-gray-600 dark:text-gray-400">Country:</span>
                        <span className="font-medium text-gray-700 dark:text-gray-100 text-right">{paymentData.country}</span>
                      </div>
                      <div className="flex justify-between space-x-1">
                        <span className="italic text-gray-600 dark:text-gray-400">Reference:</span>
                        <span className="font-medium text-gray-700 dark:text-gray-100 text-right">{paymentData.reference}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-3">
                  <button className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white w-full cursor-pointer">
                    <svg className="fill-current shrink-0 mr-2" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"/>
                    </svg>
                    Mark as Paid
                  </button>
                  <button className="btn border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-300 w-full cursor-pointer">
                    <svg className="fill-current text-gray-400 dark:text-gray-500 shrink-0 rotate-180 mr-2" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 4c-.3 0-.5.1-.7.3L1.6 10 3 11.4l4-4V16h2V7.4l4 4 1.4-1.4-5.7-5.7C8.5 4.1 8.3 4 8 4ZM1 2h14V0H1v2Z" />
                    </svg>
                    Download Instructions
                  </button>
                  <Link 
                    className="text-sm underline hover:no-underline text-center text-gray-600 dark:text-gray-400" 
                    href="/dashboard"
                  >
                    ← Back to Dashboard
                  </Link>
                </div>

              </div>
            </div>

          </div>

        </div>


    </main>
  )
}
