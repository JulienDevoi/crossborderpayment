import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

interface PaymentOption {
  id: number
  name: string
  image: StaticImageData
  link: string
  location: string
  content: string
  comingSoon: boolean
}

export default function PaymentCard({ paymentOption }: { paymentOption: PaymentOption}) {
  return (
    <div className={`col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl hover:shadow-md transition-shadow duration-200 ${paymentOption.comingSoon ? 'relative' : ''}`}>
      {/* Coming Soon Badge */}
      {paymentOption.comingSoon && (
        <div className="absolute -top-2 -right-2 z-10">
          <div className="bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
            Coming Soon
          </div>
        </div>
      )}
      <div className="flex flex-col h-full">
        {/* Card top */}
        <div className={`grow p-6 ${paymentOption.comingSoon ? 'opacity-75' : ''}`}>
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
          {paymentOption.comingSoon ? (
            <div className="block text-center text-sm text-gray-400 dark:text-gray-500 font-medium px-4 py-4 cursor-not-allowed">
              <div className="flex items-center justify-center">
                <svg className="fill-current shrink-0 mr-2" width="16" height="16" viewBox="0 0 16 16">
                  <path d="M8 16a8 8 0 1 1 0-16 8 8 0 0 1 0 16ZM6.5 5.5A1.5 1.5 0 0 1 8 4a1.5 1.5 0 0 1 1.5 1.5v3A1.5 1.5 0 0 1 8 10a1.5 1.5 0 0 1-1.5-1.5v-3ZM8 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                </svg>
                <span>Coming Soon</span>
              </div>
            </div>
          ) : (
            <Link className="block text-center text-sm text-violet-500 hover:text-violet-600 dark:hover:text-violet-400 font-medium px-4 py-4 transition-colors duration-200" href={paymentOption.link}>
              <div className="flex items-center justify-center">
                <svg className="fill-current shrink-0 mr-2" width="16" height="16" viewBox="0 0 16 16">
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span>Start now</span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
