import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

interface PaymentOption {
  id: number
  name: string
  image: StaticImageData
  link: string
  location: string
  content: string
}

export default function PaymentCard({ paymentOption }: { paymentOption: PaymentOption}) {
  return (
    <div className="col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl hover:shadow-md transition-shadow duration-200">
      <div className="flex flex-col h-full">
        {/* Card top */}
        <div className="grow p-6">
          {/* Icon + name */}
          <header>
            <div className="flex justify-center mb-4">
              <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full">
                <span className="text-2xl">{paymentOption.location}</span>
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-xl leading-snug font-semibold text-gray-800 dark:text-gray-100 mb-2">{paymentOption.name}</h2>
            </div>
          </header>
          {/* Description */}
          <div className="text-center">
            <div className="text-sm text-gray-600 dark:text-gray-400">{paymentOption.content}</div>
          </div>
        </div>
        {/* Card footer */}
        <div className="border-t border-gray-100 dark:border-gray-700/60">
          <Link className="block text-center text-sm text-violet-500 hover:text-violet-600 dark:hover:text-violet-400 font-medium px-4 py-4 transition-colors duration-200" href={paymentOption.link}>
            <div className="flex items-center justify-center">
              <svg className="fill-current shrink-0 mr-2" width="16" height="16" viewBox="0 0 16 16">
                <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
              </svg>
              <span>Select Payment Method</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
