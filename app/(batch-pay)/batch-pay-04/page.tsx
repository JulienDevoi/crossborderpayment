'use client'

import Link from 'next/link'
import Image from 'next/image'
import BatchPayHeader from '../batch-pay-header'
import BatchPayProgress from '../batch-pay-progress'

export default function BatchPay04() {
  // Sample batch payment data - in a real app this would come from the previous steps
  const batchData = {
    totalAmount: '€7,450.00',
    recipientCount: 3,
    executionDate: new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    paymentMethod: 'SEPA Credit Transfer',
    priority: 'Standard (1-2 business days)',
    batchId: 'BATCH-2024-001',
    recipients: [
      {
        name: 'John Doe',
        iban: 'DE89 3704 0044 0532 0130 00',
        amount: '€2,750.00',
        reference: 'Freelance Work Payment'
      },
      {
        name: 'Jane Smith', 
        iban: 'GB29 NWBK 6016 1331 9268 19',
        amount: '€1,500.00',
        reference: 'Consulting Services'
      },
      {
        name: 'Mike Johnson',
        iban: 'FR14 2004 1010 0505 0001 3M02 606', 
        amount: '€3,200.00',
        reference: 'Project Completion'
      }
    ]
  }

  return (
    <main className="bg-white dark:bg-gray-900">

      <div className="w-full">

          <div className="min-h-[100dvh] h-full flex flex-col after:flex-1">

            <div className="flex-1">

              <BatchPayHeader />
              <BatchPayProgress step={4} />

            </div>

            <div className="px-4 py-8">
              <div className="max-w-2xl mx-auto">

                {/* Batch Payment Summary */}
                <div className="mb-8">
                  <div className="text-2xl text-gray-800 dark:text-gray-100 font-semibold text-center mb-1">Batch Payment Summary</div>
                  <div className="text-sm text-center italic text-gray-600 dark:text-gray-400">Review and confirm your batch payment details</div>
                  
                  {/* Batch Overview Card */}
                  <div className="drop-shadow-md mt-8">
                    {/* Top */}
                    <div className="bg-white dark:bg-gray-800 rounded-t-xl px-5 pb-2.5 text-center">
                      <div className="mb-3 text-center">
                        <div className="inline-flex w-12 h-12 rounded-full -mt-6 bg-violet-500 items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-2xl font-semibold mb-1 text-gray-800 dark:text-gray-100">{batchData.totalAmount}</div>
                      <div className="text-sm font-medium text-gray-800 dark:text-gray-100 mb-1">{batchData.recipientCount} Recipients</div>
                      <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">Batch ID: {batchData.batchId}</div>
                      <div className="text-xs inline-flex font-medium rounded-full text-center px-2.5 py-1 bg-amber-100 text-amber-800 dark:bg-amber-800/30 dark:text-amber-400">Pending Approval</div>
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
                        <span className="italic text-gray-600 dark:text-gray-400">Execution Date:</span>
                        <span className="font-medium text-gray-700 dark:text-gray-100 text-right">{batchData.executionDate}</span>
                      </div>
                      <div className="flex justify-between space-x-1">
                        <span className="italic text-gray-600 dark:text-gray-400">Payment Method:</span>
                        <span className="font-medium text-gray-700 dark:text-gray-100 text-right">{batchData.paymentMethod}</span>
                      </div>
                      <div className="flex justify-between space-x-1">
                        <span className="italic text-gray-600 dark:text-gray-400">Priority:</span>
                        <span className="font-medium text-gray-700 dark:text-gray-100 text-right">{batchData.priority}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recipients List */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Payment Recipients</h3>
                  <div className="space-y-3">
                    {batchData.recipients.map((recipient, index) => (
                      <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="font-medium text-gray-800 dark:text-gray-100">{recipient.name}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{recipient.iban}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-gray-800 dark:text-gray-100">{recipient.amount}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{recipient.reference}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-3">
                  <button className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white w-full cursor-pointer">
                    <svg className="fill-current shrink-0 mr-2" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 6L7.1 10.4c-.2.2-.4.2-.6 0L4.5 8.4c-.2-.2-.2-.4 0-.6s.4-.2.6 0L6.8 9.6 10.9 5.4c.2-.2.4-.2.6 0s.2.4 0 .6z"/>
                    </svg>
                    Approve & Execute Batch
                  </button>
                  <button className="btn border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-300 w-full cursor-pointer">
                    <svg className="fill-current text-gray-400 dark:text-gray-500 shrink-0 mr-2" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 4c-.3 0-.5.1-.7.3L1.6 10 3 11.4l4-4V16h2V7.4l4 4 1.4-1.4-5.7-5.7C8.5 4.1 8.3 4 8 4ZM1 2h14V0H1v2Z" />
                    </svg>
                    Save as Template
                  </button>
                  <button className="btn border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-300 w-full cursor-pointer">
                    <svg className="fill-current text-gray-400 dark:text-gray-500 shrink-0 mr-2" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 4c-.3 0-.5.1-.7.3L1.6 10 3 11.4l4-4V16h2V7.4l4 4 1.4-1.4-5.7-5.7C8.5 4.1 8.3 4 8 4ZM1 2h14V0H1v2Z" />
                    </svg>
                    Export Batch Details
                  </button>
                  <Link 
                    className="text-sm underline hover:no-underline text-center text-gray-600 dark:text-gray-400" 
                    href="/payments/list"
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
