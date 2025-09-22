'use client'

import Link from 'next/link'
import { useState } from 'react'
import BatchPayHeader from '../batch-pay-header'
import BatchPayProgress from '../batch-pay-progress'

export default function BatchPay02() {
  const [recipients, setRecipients] = useState([
    {
      id: 1,
      firstName: '',
      lastName: '',
      iban: '',
      amount: '',
      reference: ''
    }
  ])

  const addRecipient = () => {
    const newId = recipients.length + 1
    setRecipients([...recipients, {
      id: newId,
      firstName: '',
      lastName: '',
      iban: '',
      amount: '',
      reference: ''
    }])
  }

  const removeRecipient = (id: number) => {
    if (recipients.length > 1) {
      setRecipients(recipients.filter(r => r.id !== id))
    }
  }

  const updateRecipient = (id: number, field: string, value: string) => {
    setRecipients(recipients.map(r => 
      r.id === id ? { ...r, [field]: value } : r
    ))
  }

  const handleUpload = () => {
    // Simulate CSV upload and auto-fill with sample data
    setRecipients([
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        iban: 'DE89 3704 0044 0532 0130 00',
        amount: '2750.00',
        reference: 'Freelance Work Payment'
      },
      {
        id: 2,
        firstName: 'Jane',
        lastName: 'Smith',
        iban: 'GB29 NWBK 6016 1331 9268 19',
        amount: '1500.00',
        reference: 'Consulting Services'
      },
      {
        id: 3,
        firstName: 'Mike',
        lastName: 'Johnson',
        iban: 'FR14 2004 1010 0505 0001 3M02 606',
        amount: '3200.00',
        reference: 'Project Completion'
      }
    ])
  }

  return (
    <main className="bg-white dark:bg-gray-900">

      <div className="w-full">

          <div className="min-h-[100dvh] h-full flex flex-col after:flex-1">

            <div className="flex-1">

              <BatchPayHeader />
              <BatchPayProgress step={2} />

            </div>

            <div className="px-4 py-8">
              <div className="max-w-2xl mx-auto">

                <h1 className="text-3xl text-gray-800 dark:text-gray-100 font-bold mb-6">Recipients Information</h1>
                
                {/* Primary Option - Import Bills (Highlighted) */}
                <div className="mb-8">
                  <div className="bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center mb-2">
                          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <div className="font-semibold text-lg">Import Bills</div>
                          <span className="ml-2 bg-white/20 text-xs font-medium px-2 py-1 rounded-full">Recommended</span>
                        </div>
                        <div className="text-sm opacity-90">Import bills directly from your accounting system or billing platform.</div>
                      </div>
                      <div className="flex items-center">
                        <button 
                          type="button"
                          onClick={handleUpload}
                          className="btn bg-white text-violet-600 hover:bg-gray-50 font-semibold shadow-md"
                        >
                          Import Bills
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Alternative Options */}
                <div className="mb-6">
                  <div className="text-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    Or choose an alternative method
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* CSV Upload Option */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <div className="font-medium text-gray-800 dark:text-gray-100 text-sm">Upload CSV</div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mb-3">Upload a CSV file with recipient details.</div>
                      <button 
                        type="button"
                        onClick={handleUpload}
                        className="btn bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 text-sm w-full"
                      >
                        Upload CSV
                      </button>
                    </div>

                    {/* Manual Entry Option */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                          <div className="font-medium text-gray-800 dark:text-gray-100 text-sm">Manual Entry</div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mb-3">Enter recipient details manually using the form below.</div>
                      <button 
                        type="button"
                        className="btn bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 text-sm w-full"
                      >
                        Start Manual Entry
                      </button>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <form>

                  {/* Recipients List */}
                  <div className="space-y-6 mb-8">
                    {recipients.map((recipient, index) => (
                      <div key={recipient.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                            Recipient #{index + 1}
                          </h3>
                          {recipients.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeRecipient(recipient.id)}
                              className="text-red-500 hover:text-red-700 text-sm"
                            >
                              Remove
                            </button>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-1" htmlFor={`firstName-${recipient.id}`}>
                              First Name <span className="text-red-500">*</span>
                            </label>
                            <input 
                              id={`firstName-${recipient.id}`}
                              className="form-input w-full" 
                              type="text"
                              value={recipient.firstName}
                              onChange={(e) => updateRecipient(recipient.id, 'firstName', e.target.value)}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1" htmlFor={`lastName-${recipient.id}`}>
                              Last Name <span className="text-red-500">*</span>
                            </label>
                            <input 
                              id={`lastName-${recipient.id}`}
                              className="form-input w-full" 
                              type="text"
                              value={recipient.lastName}
                              onChange={(e) => updateRecipient(recipient.id, 'lastName', e.target.value)}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1" htmlFor={`iban-${recipient.id}`}>
                              IBAN <span className="text-red-500">*</span>
                            </label>
                            <input 
                              id={`iban-${recipient.id}`}
                              className="form-input w-full" 
                              type="text"
                              value={recipient.iban}
                              onChange={(e) => updateRecipient(recipient.id, 'iban', e.target.value)}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1" htmlFor={`amount-${recipient.id}`}>
                              Amount (€) <span className="text-red-500">*</span>
                            </label>
                            <input 
                              id={`amount-${recipient.id}`}
                              className="form-input w-full" 
                              type="number"
                              step="0.01"
                              value={recipient.amount}
                              onChange={(e) => updateRecipient(recipient.id, 'amount', e.target.value)}
                            />
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-1" htmlFor={`reference-${recipient.id}`}>
                              Payment Reference
                            </label>
                            <input 
                              id={`reference-${recipient.id}`}
                              className="form-input w-full" 
                              type="text"
                              value={recipient.reference}
                              onChange={(e) => updateRecipient(recipient.id, 'reference', e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center mb-8">
                    <button
                      type="button"
                      onClick={addRecipient}
                      className="btn bg-violet-500 hover:bg-violet-600 text-white"
                    >
                      + Add Another Recipient
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link className="text-sm underline hover:no-underline" href="/batch-pay-01">&lt;- Back</Link>
                    <Link className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white ml-auto" href="/batch-pay-03">Next Step -&gt;</Link>
                  </div>
                </form>

              </div>
            </div>

          </div>

        </div>

    </main>
  )
}
