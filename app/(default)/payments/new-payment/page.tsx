export const metadata = {
  title: 'New Payment - Mosaic',
  description: 'Create a new payment',
}

import SearchForm from '@/components/search-form'
import PaymentCard from './payment-card'

import Image01 from '@/public/images/user-64-01.jpg'
import Image02 from '@/public/images/user-64-02.jpg'
import Image03 from '@/public/images/user-64-03.jpg'

export default function NewPayment() {

  // Payment cards data
  const paymentOptions = [
    {
      id: 0,
      name: 'One-time payment',
      image: Image01,
      link: '/start',
      location: '💰',
      content: 'The best way to send money overseas.',
    },
    {
      id: 1,
      name: 'Batch Pay',
      image: Image02,
      link: '#0',
      location: '💵',
      content: 'Makes hundreds of payments at once.',
    },
    {
      id: 2,
      name: 'Recurring payment',
      image: Image03,
      link: '#0',
      location: '📱',
      content: 'Setup a recurring payment, every month, every year, or every week.',
    },
  ]

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">

      {/* Page header */}
      <div className="sm:flex sm:justify-between sm:items-center mb-8">

        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">New Payment</h1>
          <p className="text-gray-600 dark:text-gray-400">Choose your preferred payment method</p>
        </div>

        {/* Right: Actions */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          {/* Search form */}
          <SearchForm />
          {/* Back button */}
          <button className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
            <svg className="fill-current shrink-0 xs:hidden" width="16" height="16" viewBox="0 0 16 16">
              <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
            </svg>
            <span className="max-xs:sr-only">View my payments</span>
          </button>
        </div>

      </div>

      {/* Payment Cards */}
      <div className="grid grid-cols-12 gap-6">
        {paymentOptions.map(option => (
          <PaymentCard
            key={option.id}
            paymentOption={option} />
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-8">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700/60 rounded-lg p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200">
                Payment Information
              </h3>
              <div className="mt-2 text-sm text-blue-700 dark:text-blue-300">
                <p>All payments are processed securely. Your payment information is encrypted and protected.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
