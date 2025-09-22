export const metadata = {
  title: "Payment Settings - Mosaic",
  description: 'Page description',
}

import Link from 'next/link'
import BatchPayHeader from '../batch-pay-header'
import BatchPayProgress from '../batch-pay-progress'

export default function BatchPay03() {
  return (
    <main className="bg-white dark:bg-gray-900">

      <div className="w-full">

        <BatchPayHeader />
        <BatchPayProgress step={3} />

        <div className="px-4 py-8">
          <div className="max-w-md mx-auto">

                <h1 className="text-3xl text-gray-800 dark:text-gray-100 font-bold mb-6">Payment Settings</h1>
                {/* Form */}
                <form>
                  <div className="space-y-4 mb-8">
                    
                    {/* Select Your Wallet */}
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="wallet">Select Your Wallet <span className="text-red-500">*</span></label>
                      <select id="wallet" className="form-select w-full">
                        <option value="">Choose a wallet...</option>
                        <option value="main-eur">Main EUR Wallet - IBAN: DE89 3704 0044 0532 0130 00</option>
                        <option value="main-usd">Main USD Wallet - IBAN: US64 NWBK 6016 1331 9268 19</option>
                        <option value="business-eur">Business EUR Wallet - IBAN: FR14 2004 1010 0505 0001 3M02 606</option>
                        <option value="crypto-wallet">Crypto Wallet - Multi-currency</option>
                        <option value="savings-gbp">Savings GBP Wallet - IBAN: GB29 NWBK 6016 1331 9268 19</option>
                      </select>
                    </div>

                    {/* Currency */}
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="currency">Currency <span className="text-red-500">*</span></label>
                      <select id="currency" className="form-select w-full">
                        <option value="">Select currency...</option>
                        <optgroup label="Fiat Currencies">
                          <option value="EUR">EUR - Euro</option>
                          <option value="USD">USD - US Dollar</option>
                          <option value="GBP">GBP - British Pound</option>
                          <option value="CHF">CHF - Swiss Franc</option>
                          <option value="JPY">JPY - Japanese Yen</option>
                          <option value="CAD">CAD - Canadian Dollar</option>
                          <option value="AUD">AUD - Australian Dollar</option>
                        </optgroup>
                        <optgroup label="Cryptocurrencies">
                          <option value="USDT">USDT - Tether</option>
                          <option value="USDC">USDC - USD Coin</option>
                          <option value="BTC">BTC - Bitcoin</option>
                          <option value="ETH">ETH - Ethereum</option>
                          <option value="DAI">DAI - Dai Stablecoin</option>
                          <option value="BUSD">BUSD - Binance USD</option>
                        </optgroup>
                      </select>
                    </div>

                    {/* Approval Required */}
                    <div>
                      <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="ml-2 text-sm">Require additional approval for this batch</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Link className="text-sm underline hover:no-underline" href="/batch-pay-02">← Back</Link>
                    <Link className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white ml-auto" href="/batch-pay-04">Next Step →</Link>
                  </div>
                </form>

          </div>
        </div>

      </div>

    </main>
  )
}
