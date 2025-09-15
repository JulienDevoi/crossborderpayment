export const metadata = {
  title: "Company information - Mosaic",
  description: 'Page description',
}

import Link from 'next/link'
import StepsHeader from '../steps-header'
import StepsProgress from '../steps-progress'

export default function Steps03() {
  return (
    <main className="bg-white dark:bg-gray-900">

      <div className="w-full">

          <div className="min-h-[100dvh] h-full flex flex-col after:flex-1">

            <div className="flex-1">

              <StepsHeader />
              <StepsProgress step={3} />

            </div>

            <div className="px-4 py-8">
              <div className="max-w-md mx-auto">

                <h1 className="text-3xl text-gray-800 dark:text-gray-100 font-bold mb-6">Company information</h1>
                {/* htmlForm */}
                <form>
                  <div className="space-y-4 mb-8">
                    {/* Company Name */}
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="company-name">Company Name <span className="text-red-500">*</span></label>
                      <input id="company-name" className="form-input w-full" type="text" />
                    </div>
                    {/* City and Postal Code */}
                    <div className="flex space-x-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium mb-1" htmlFor="city">City <span className="text-red-500">*</span></label>
                        <input id="city" className="form-input w-full" type="text" />
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium mb-1" htmlFor="postal-code">Postal Code <span className="text-red-500">*</span></label>
                        <input id="postal-code" className="form-input w-full" type="text" />
                      </div>
                    </div>
                    {/* Street Address */}
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="street">Street Address <span className="text-red-500">*</span></label>
                      <input id="street" className="form-input w-full" type="text" />
                    </div>
                    {/* Country */}
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="country">Country <span className="text-red-500">*</span></label>
                      <select id="country" className="form-select w-full">
                        <option>USA</option>
                        <option>Italy</option>
                        <option>United Kingdom</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Link className="text-sm underline hover:no-underline" href="/steps-02">← Back</Link>
                    <Link className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white ml-auto" href="/steps-04">Next Step →</Link>
                  </div>
                </form>

              </div>
            </div>

          </div>

        </div>

    </main>
  )
}
