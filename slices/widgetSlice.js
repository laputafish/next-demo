import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: 1, label: 'Text', icon: 'AtSymbolIcon' },
  { id: 2, label: 'Number', icon: 'HashtagIcon' },
  { id: 3, label: 'Amount', icon: 'CurrencyDollarIcon' },
  { id: 4, label: 'Email', icon: 'EnvelopeIcon' },
  { id: 5, label: 'Date', icon: 'CalendarDaysIcon' },
  { id: 6, label: 'Phone', icon: 'PhoneIcon' },
  { id: 7, label: 'Single Selection', icon: 'CheckCircleIcon' },
  { id: 8, label: 'Multiple Selection', icon: 'SquaresPlusIcon' },
  { id: 9, label: 'Attachments', icon: 'PaperClipIcon' },
  { id: 10, label: 'Region', icon: 'GlobeAltIcon' },
  { id: 11, label: 'Location', icon: 'MapPinIcon' },

  { id: 12, label: 'Expression', icon: 'ReceiptPercentIcon' },
  { id: 13, label: 'YesNo', icon: 'CheckIcon' },
  { id: 14, label: 'Rating', icon: 'StarIcon' },
  { id: 15, label: 'Text Combination', icon: 'ArrowsPointingInIcon' },
  { id: 16, label: 'Auto-Numbering', icon: 'BarsArrowDownIcon' },
  { id: 17, label: 'RichText', icon: 'CodeBracketIcon' },
  { id: 18, label: 'ID Card', icon: 'IdentificationIcon' },
  { id: 19, label: 'Members', icon: 'UserIcon' },
  { id: 20, label: 'Departments', icon: 'UserGroupIcon' },
  { id: 21, label: 'Signature', icon: 'PencilIcon' },

  { id: 22, label: 'Section Line', icon: 'ListBulletIcon' },
  { id: 23, label: 'Remark', icon: 'ChatBubbleBottomCenterTextIcon' },
  { id: 24, label: 'Capitalized Amount', icon: 'LanguageIcon' },

  { id: 25, label: 'Related Record', icon: 'LinkIcon' },
  { id: 26, label: 'Parent/Child', icon: 'UsersIcon' },
  { id: 27, label: 'Child Table', icon: 'TableCellsIcon' },
  { id: 28, label: 'Other Table Field', icon: 'TagIcon' },
  { id: 29, label: 'Summary Field', icon: 'CalculatorIcon' },
]

export const widgetSlice = createSlice({
  name: 'widgets',
  initialState,
  reducers: {},
})

export default widgetSlice.reducer
