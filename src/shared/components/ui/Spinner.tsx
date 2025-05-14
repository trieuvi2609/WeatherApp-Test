import { ArrowPathIcon } from '@heroicons/react/24/outline'

const Spinner = ({ text = 'Loading...' }: { text?: string }) => (
  <div className="flex items-center justify-center py-6">
    <ArrowPathIcon className="w-6 h-6 animate-spin text-blue-500" />
    <span className="ml-2 text-sm text-gray-600">{text}</span>
  </div>
)

export default Spinner
