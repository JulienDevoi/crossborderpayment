'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function StartForm() {
  const [sendAmount, setSendAmount] = useState('1,000')
  const [receiveAmount, setReceiveAmount] = useState('920.50')
  const [sendCurrency, setSendCurrency] = useState('💎 USDC')
  const [receiveCurrency, setReceiveCurrency] = useState('🇪🇺 EUR')

  // Simple exchange rates (in a real app, these would come from an API)
  const exchangeRates: { [key: string]: number } = {
    '💎 USDC': 1.0,
    '💎 USDT': 1.0,
    '🇺🇸 USD': 1.0,
    '🇪🇺 EUR': 0.92,
    '🇬🇧 GBP': 0.79,
    '🇯🇵 JPY': 149.50,
    '🇰🇷 KRW': 1320.0,
    '🇨🇳 CNY': 7.25,
    '🇮🇳 INR': 83.15,
    '🇧🇷 BRL': 5.10,
    '🇲🇽 MXN': 17.25,
    '🇦🇺 AUD': 1.52,
    '🇨🇦 CAD': 1.36,
    '🇨🇭 CHF': 0.88,
    '🇸🇪 SEK': 10.85,
    '🇳🇴 NOK': 10.75,
    '🇳🇿 NZD': 1.64,
  }

  const calculateReceiveAmount = (sendAmt: string, fromCurrency: string, toCurrency: string) => {
    const numericAmount = parseFloat(sendAmt.replace(/,/g, ''))
    if (isNaN(numericAmount)) return '0'
    
    const fromRate = exchangeRates[fromCurrency] || 1
    const toRate = exchangeRates[toCurrency] || 1
    const convertedAmount = (numericAmount / fromRate) * toRate
    
    return convertedAmount.toLocaleString('en-US', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    })
  }

  const calculateSendAmount = (receiveAmt: string, fromCurrency: string, toCurrency: string) => {
    const numericAmount = parseFloat(receiveAmt.replace(/,/g, ''))
    if (isNaN(numericAmount)) return '0'
    
    const fromRate = exchangeRates[fromCurrency] || 1
    const toRate = exchangeRates[toCurrency] || 1
    const convertedAmount = (numericAmount / toRate) * fromRate
    
    return convertedAmount.toLocaleString('en-US', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    })
  }

  // Format number with commas as user types
  const formatNumberInput = (value: string) => {
    // Remove all non-numeric characters except decimal point
    const numericValue = value.replace(/[^0-9.]/g, '')
    
    // Handle decimal places (only allow one decimal point)
    const parts = numericValue.split('.')
    if (parts.length > 2) {
      return parts[0] + '.' + parts.slice(1).join('')
    }
    
    // Format the integer part with commas
    if (parts[0]) {
      const integerPart = parseInt(parts[0]).toLocaleString('en-US')
      return parts.length > 1 ? integerPart + '.' + (parts[1] || '') : integerPart
    }
    
    return numericValue
  }

  const handleSendAmountChange = (value: string) => {
    const formattedValue = formatNumberInput(value)
    setSendAmount(formattedValue)
    const newReceiveAmount = calculateReceiveAmount(formattedValue, sendCurrency, receiveCurrency)
    setReceiveAmount(newReceiveAmount)
  }

  const handleReceiveAmountChange = (value: string) => {
    const formattedValue = formatNumberInput(value)
    setReceiveAmount(formattedValue)
    const newSendAmount = calculateSendAmount(formattedValue, sendCurrency, receiveCurrency)
    setSendAmount(newSendAmount)
  }

  const handleSendCurrencyChange = (currency: string) => {
    setSendCurrency(currency)
    const newReceiveAmount = calculateReceiveAmount(sendAmount, currency, receiveCurrency)
    setReceiveAmount(newReceiveAmount)
  }

  const handleReceiveCurrencyChange = (currency: string) => {
    setReceiveCurrency(currency)
    const newReceiveAmount = calculateReceiveAmount(sendAmount, sendCurrency, currency)
    setReceiveAmount(newReceiveAmount)
  }

  // Dynamic fee calculation based on currencies and amount
  const calculateFees = () => {
    const sendAmt = parseFloat(sendAmount.replace(/,/g, '')) || 0
    let baseFee = 2.99 // Base fee in USD
    let percentageFee = sendAmt * 0.015 // 1.5% of send amount
    
    // Adjust fees based on currency types
    if (sendCurrency.includes('💎')) { // Crypto currencies
      baseFee = 1.99
      percentageFee = sendAmt * 0.01 // 1% for crypto
    }
    
    // Convert fee to recipient currency for display
    const totalFeeUSD = baseFee + percentageFee
    const feeInReceiveCurrency = (totalFeeUSD / (exchangeRates[sendCurrency] || 1)) * (exchangeRates[receiveCurrency] || 1)
    
    return {
      totalFee: feeInReceiveCurrency,
      baseFee: baseFee,
      percentageFee: percentageFee
    }
  }

  // Get current exchange rate for display
  const getCurrentExchangeRate = () => {
    const fromRate = exchangeRates[sendCurrency] || 1
    const toRate = exchangeRates[receiveCurrency] || 1
    return toRate / fromRate
  }

  // Get currency symbols without flags/emojis for cleaner display
  const getCurrencyCode = (currency: string) => {
    if (currency.includes('💎 USDC')) return 'USDC'
    if (currency.includes('💎 USDT')) return 'USDT'
    return currency.split(' ')[1] || currency.replace(/[^\w]/g, '')
  }

  // Calculate delivery time based on currencies
  const getDeliveryTime = () => {
    const sendCode = getCurrencyCode(sendCurrency)
    const receiveCode = getCurrencyCode(receiveCurrency)
    
    if (sendCode.includes('USD') && receiveCode === 'EUR') return '1-2 business days'
    if (sendCode.includes('USD') && receiveCode === 'GBP') return '1-3 business days'
    if (sendCode === 'USDC' || sendCode === 'USDT') return '10-30 minutes'
    if (receiveCode === 'JPY' || receiveCode === 'KRW') return '2-4 business days'
    return '1-3 business days'
  }

  return (
    <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 pt-16 max-w-lg mx-auto">
        <div className="bg-white dark:bg-gray-800 px-8 py-6 rounded-xl shadow-sm relative">

          {/* Neomy Hi Image - Circular and half outside */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <Image
              src="/images/neomy-hi.png"
              alt="Neomy Hi"
              width={64}
              height={64}
              className="rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
            />
          </div>

          {/* Add top padding to account for the image and extra space */}
          <div className="pt-8"></div>

          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-xl leading-snug text-gray-800 dark:text-gray-100 font-semibold mb-2">NEOMY</h1>
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
                  value={sendAmount}
                  onChange={(e) => handleSendAmountChange(e.target.value)}
                />
                <select 
                  id="send-currency" 
                  className="form-select w-32"
                  value={sendCurrency}
                  onChange={(e) => handleSendCurrencyChange(e.target.value)}
                >
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
                  value={receiveAmount}
                  onChange={(e) => handleReceiveAmountChange(e.target.value)}
                />
                <select 
                  id="receive-currency" 
                  className="form-select w-32"
                  value={receiveCurrency}
                  onChange={(e) => handleReceiveCurrencyChange(e.target.value)}
                >
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
              <div className="inline-flex flex-col w-full px-4 py-2 rounded-lg text-sm bg-white dark:bg-gray-700 shadow-sm border border-gray-200 dark:border-gray-700/60 text-gray-600 dark:text-gray-400">
                <div className="flex w-full justify-between items-start">
                  <div className="flex">
                    <svg className="shrink-0 fill-current text-violet-500 mt-[3px] mr-3" width="16" height="16" viewBox="0 0 16 16">
                      <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1-1 1z" />
                    </svg>
                    <div>
                      <div className="font-medium text-gray-800 dark:text-gray-100 mb-1">Exchange Rate Information</div>
                      <div>
                        Current rate: 1 {getCurrencyCode(sendCurrency)} = {getCurrentExchangeRate().toFixed(4)} {getCurrencyCode(receiveCurrency)}. <br /> 
                        Rate guaranteed for {sendCurrency.includes('💎') ? '15 minutes' : '24 hours'} after quote.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Fees Banner */}
            <div className="mt-5">
              <div className="bg-yellow-500/20 text-yellow-700 px-3 py-2 rounded-lg">
                <svg className="inline w-3 h-3 shrink-0 fill-current mr-2" viewBox="0 0 12 12">
                  <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                </svg>
                <span className="text-sm">
                  Total fees & taxes: {calculateFees().totalFee.toFixed(2)} {getCurrencyCode(receiveCurrency)}.
                  {sendCurrency.includes('💎')}
                </span>
              </div>
            </div>
            
            
          </div>
          {/* Form footer */}
          <div className="mt-6">
            <div className="mb-4">
              <Link href="/steps-02" className="btn w-full bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white cursor-pointer">Send Payment</Link>
            </div>
            <div className="text-xs text-gray-500 italic text-center">Payment arrives in {getDeliveryTime()}</div>
            
            
          </div>

        </div>
      </div>
    </main>
  )
}
