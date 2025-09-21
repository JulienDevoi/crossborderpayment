export const metadata = {
  title: 'My Payments - Mosaic',
  description: 'View and manage your payments',
}

import { SelectedItemsProvider } from '@/app/selected-items-context'
import SearchForm from '@/components/search-form'
import DeleteButton from '@/components/delete-button'
import DateSelect from '@/components/date-select'
import FilterButton from '@/components/dropdown-filter'
import PaymentsTable from './payments-table'
import PaginationClassic from '@/components/pagination-classic'

function PaymentsContent() {

  // Some dummy payments data
  const payments = [
    {
      id: 0,
      payment: '#PAY123567',
      total: '$129.00',
      status: 'Completed',
      recipient: 'John Smith',
      sentdate: '22/07/2024',
      completeddate: '22/07/2024',
      type: 'One-time',
    },
    {
      id: 1,
      payment: '#PAY779912',
      total: '$59.00',
      status: 'Pending',
      recipient: 'Sarah Johnson',
      sentdate: '19/07/2024',
      completeddate: '-',
      type: 'Recurring',
    },
    {
      id: 2,
      payment: '#PAY889924',
      total: '$89.00',
      status: 'Completed',
      recipient: 'Michael Brown',
      sentdate: '17/07/2024',
      completeddate: '19/07/2024',
      type: 'One-time',
    },
    {
      id: 3,
      payment: '#PAY897726',
      total: '$129.00',
      status: 'Failed',
      recipient: 'Emily Davis',
      sentdate: '04/07/2024',
      completeddate: '-',
      type: 'Batch',
    },
    {
      id: 4,
      payment: '#PAY123568',
      total: '$75.00',
      status: 'Completed',
      recipient: 'David Wilson',
      sentdate: '04/07/2024',
      completeddate: '04/07/2024',
      type: 'One-time',
    },
    {
      id: 5,
      payment: '#PAY896644',
      total: '$200.00',
      status: 'Completed',
      recipient: 'Lisa Anderson',
      sentdate: '04/07/2024',
      completeddate: '09/07/2024',
      type: 'Batch',
    },
    {
      id: 6,
      payment: '#PAY136988',
      total: '$69.00',
      status: 'Completed',
      recipient: 'James Taylor',
      sentdate: '01/07/2024',
      completeddate: '01/07/2024',
      type: 'One-time',
    },
    {
      id: 7,
      payment: '#PAY442206',
      total: '$129.00',
      status: 'Pending',
      recipient: 'Maria Garcia',
      sentdate: '22/06/2024',
      completeddate: '-',
      type: 'Recurring',
    },
    {
      id: 8,
      payment: '#PAY764321',
      total: '$89.00',
      status: 'Completed',
      recipient: 'Robert Martinez',
      sentdate: '21/06/2024',
      completeddate: '29/06/2024',
      type: 'One-time',
    },
    {
      id: 9,
      payment: '#PAY908764',
      total: '$129.00',
      status: 'Failed',
      recipient: 'Jennifer Lee',
      sentdate: '17/06/2024',
      completeddate: '-',
      type: 'Batch',
    }
  ]

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
      {/* Page header */}
      <div className="sm:flex sm:justify-between sm:items-center mb-5">

        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">My Payments</h1>
        </div>

        {/* Right: Actions */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          {/* Search form */}
          <SearchForm placeholder="Search by payment ID…" />
          {/* Create payment button */}
          <button className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
            <svg className="fill-current shrink-0 xs:hidden" width="16" height="16" viewBox="0 0 16 16">
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
            <span className="max-xs:sr-only">New Payment</span>
          </button>
        </div>

      </div>

      {/* More actions */}
      <div className="sm:flex sm:justify-between sm:items-center mb-5">

        {/* Left side */}
        <div className="mb-4 sm:mb-0">
          <ul className="flex flex-wrap -m-1">
            <li className="m-1">
              <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-800 transition">All <span className="ml-1 text-gray-400 dark:text-gray-500">67</span></button>
            </li>
            <li className="m-1">
              <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 transition">Completed <span className="ml-1 text-gray-400 dark:text-gray-500">42</span></button>
            </li>
            <li className="m-1">
              <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 transition">Pending <span className="ml-1 text-gray-400 dark:text-gray-500">15</span></button>
            </li>
            <li className="m-1">
              <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 transition">Failed <span className="ml-1 text-gray-400 dark:text-gray-500">10</span></button>
            </li>
          </ul>
        </div>

        {/* Right side */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          {/* Delete button */}
          <DeleteButton />
          {/* Dropdown */}
          <DateSelect />
          {/* Filter button */}
          <FilterButton align="right" />
        </div>

      </div>      

      {/* Table */}
      <PaymentsTable payments={payments} />

      {/* Pagination */}
      <div className="mt-8">
        <PaginationClassic />
      </div>    
    </div>
  )
}

export default function Payments() {
  return (
    <SelectedItemsProvider>
      <PaymentsContent />
    </SelectedItemsProvider>
  )
}
