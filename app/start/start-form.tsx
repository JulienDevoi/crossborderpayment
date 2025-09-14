'use client'

export default function StartForm() {

  return (
    <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-lg mx-auto">
        <div className="bg-white dark:bg-gray-800 px-8 py-6 rounded-xl shadow-sm">

          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-xl leading-snug text-gray-800 dark:text-gray-100 font-semibold mb-2">Request Finance</h1>
            <div className="text-sm">
              The best way to send money overseas. 
            </div>
          </div>

          <div className="space-y-4">
            {/* You send */}
            <div>
              <label className="block text-sm font-medium mb-1">You send <span className="text-red-500">*</span></label>
              <div className="flex space-x-2">
                <input 
                  id="send-amount" 
                  className="form-input flex-1" 
                  type="text" 
                  placeholder="1,000" 
                  defaultValue="1,000"
                />
                <select id="send-currency" className="form-select w-32">
                  <option>💎 USDC</option>
                  <option>💎 USDT</option>
                  <option>🇺🇸 USD</option>
                  <option>🇪🇺 EUR</option>
                  <option>🇬🇧 GBP</option>
                  <option>🇯🇵 JPY</option>
                  <option>🇰🇷 KRW</option>
                  <option>🇨🇳 CNY</option>
                  <option>🇮🇳 INR</option>
                  <option>🇧🇷 BRL</option>
                  <option>🇲🇽 MXN</option>
                  <option>🇦🇺 AUD</option>
                  <option>🇨🇦 CAD</option>
                  <option>🇨🇭 CHF</option>
                  <option>🇸🇪 SEK</option>
                  <option>🇳🇴 NOK</option>
                  <option>🇳🇿 NZD</option>
                </select>
              </div>
            </div>
            {/* Recipient gets */}
            <div>
              <label className="block text-sm font-medium mb-1">Recipient gets <span className="text-red-500">*</span></label>
              <div className="flex space-x-2">
                <input 
                  id="receive-amount" 
                  className="form-input flex-1" 
                  type="text" 
                  placeholder="920.50" 
                />
                <select id="receive-currency" className="form-select w-32" defaultValue="🇪🇺 EUR">
                  <option>💎 USDC</option>
                  <option>💎 USDT</option>
                  <option>🇪🇺 EUR</option>
                  <option>🇺🇸 USD</option>
                  <option>🇬🇧 GBP</option>
                  <option>🇯🇵 JPY</option>
                  <option>🇰🇷 KRW</option>
                  <option>🇨🇳 CNY</option>
                  <option>🇮🇳 INR</option>
                  <option>🇧🇷 BRL</option>
                  <option>🇲🇽 MXN</option>
                  <option>🇦🇺 AUD</option>
                  <option>🇨🇦 CAD</option>
                  <option>🇨🇭 CHF</option>
                  <option>🇸🇪 SEK</option>
                  <option>🇳🇴 NOK</option>
                  <option>🇳🇿 NZD</option>
                </select>
              </div>
            </div>
            
            
            
            {/* Information Notification */}
            <div className="mt-5">
              <div className="inline-flex flex-col w-full px-4 py-2 rounded-lg text-sm bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700/60 text-gray-600 dark:text-gray-400">
                <div className="flex w-full justify-between items-start">
                  <div className="flex">
                    <svg className="shrink-0 fill-current text-violet-500 mt-[3px] mr-3" width="16" height="16" viewBox="0 0 16 16">
                      <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1-1 1z" />
                    </svg>
                    <div>
                      <div className="font-medium text-gray-800 dark:text-gray-100 mb-1">Exchange Rate Information</div>
                      <div>Current rate: 1 USDC = 0.92 EUR. <br /> Rate guaranteed for 24 hours after quote.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Promotional Banner */}
            <div className="mt-5">
              <div className="bg-yellow-500/20 text-yellow-700 px-3 py-2 rounded-lg">
                <svg className="inline w-3 h-3 shrink-0 fill-current mr-2" viewBox="0 0 12 12">
                  <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                </svg>
                <span className="text-sm">
                  Total fees & taxes: 79.50 EUR.
                </span>
              </div>
            </div>
            
            
          </div>
          {/* Form footer */}
          <div className="mt-6">
            <div className="mb-4">
              <button className="btn w-full bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white cursor-pointer">Send Payment</button>
            </div>
            <div className="text-xs text-gray-500 italic text-center">Payment arrives in 1-2 business days</div>
            
            
          </div>

        </div>
      </div>
    </main>
  )
}
