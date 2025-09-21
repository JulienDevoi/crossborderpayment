'use client'

import Link from 'next/link'
import { useState } from 'react'
import StepsHeader from '../steps-header'
import StepsProgress from '../steps-progress'

export default function Steps02() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    iban: '',
    bankAddress: '',
    country: 'USA'
  })

  const handleUpload = () => {
    // Simulate document upload and auto-fill with sample data
    setFormData({
      firstName: 'John',
      lastName: 'Doe',
      iban: 'DE89 3704 0044 0532 0130 00',
      bankAddress: '123 Banking Street, Financial District',
      country: 'Germany'
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }
  return (
    <main className="bg-white dark:bg-gray-900">

      <div className="w-full">

          <div className="min-h-[100dvh] h-full flex flex-col after:flex-1">

            <div className="flex-1">

              <StepsHeader />
              <StepsProgress step={2} />

            </div>

            <div className="px-4 py-8">
              <div className="max-w-md mx-auto">

                <h1 className="text-3xl text-gray-800 dark:text-gray-100 font-bold mb-6">Recipient information</h1>
                {/* Form */}
                <form>
                  <div className="flex items-center justify-between space-x-6 mb-8">
                    <div>
                      <div className="font-medium text-gray-800 dark:text-gray-100 text-sm mb-1">Upload the paper trail</div>
                      <div className="text-xs">It will help us retrieve the recipient's information automatically.</div>
                    </div>
                    <div className="flex items-center">
                      <button 
                        type="button"
                        onClick={handleUpload}
                        className="btn bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-violet-500 cursor-pointer"
                      >
                        Upload
                      </button>
                    </div>
                  </div>
                

                  {/* Or separator */}
                  <div className="relative flex items-center justify-center my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-4">
                      <span className="text-sm text-gray-500 dark:text-gray-400">or</span>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-4 mb-8">
                    {/* First Name and Last Name */}
                    <div className="flex space-x-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium mb-1" htmlFor="firstName">First Name <span className="text-red-500">*</span></label>
                        <input 
                          id="firstName" 
                          className="form-input w-full" 
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium mb-1" htmlFor="lastName">Last name <span className="text-red-500">*</span></label>
                        <input 
                          id="lastName" 
                          className="form-input w-full" 
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                        />
                      </div>
                    </div>
                    {/* IBAN */}
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="iban">IBAN <span className="text-red-500">*</span></label>
                      <input 
                        id="iban" 
                        className="form-input w-full" 
                        type="text"
                        value={formData.iban}
                        onChange={(e) => handleInputChange('iban', e.target.value)}
                      />
                    </div>
                    
                    {/* Bank Address */}
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="bankAddress">Bank Address <span className="text-red-500">*</span></label>
                      <input 
                        id="bankAddress" 
                        className="form-input w-full" 
                        type="text"
                        value={formData.bankAddress}
                        onChange={(e) => handleInputChange('bankAddress', e.target.value)}
                      />
                    </div>
                    {/* Country */}
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="country">Country <span className="text-red-500">*</span></label>
                      <select 
                        id="country" 
                        className="form-select w-full"
                        value={formData.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                      >
                        <option value="USA">USA</option>
                        <option value="Italy">Italy</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Germany">Germany</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Link className="text-sm underline hover:no-underline" href="/start">&lt;- Back</Link>
                    <Link className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white ml-auto" href="/steps-03">Next Step -&gt;</Link>
                  </div>
                </form>

              </div>
            </div>

          </div>

        </div>

    </main>
  )
}
