import { Fragment, useEffect, useState } from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react'
import WidgetIcon from '../ui/WidgetIcon'

import { useSelector, useDispatch } from 'react-redux';

function WidgetMenu(props) {
  const [openSections, setOpenSections] = useState([])

  const widgetSections = useSelector( state => state.widgetSections );
  const widgets = useSelector( state => state.widgets );

  const icons = [
    { label: 'Text', icon: 'AtSymbolIcon' },
    { label: 'Number', icon: 'HashTagIcon' },
    { label: 'Amount', icon: 'CurrentcyAmountIcon' },
    { label: 'Email', icon: 'EnvelopeIcon' },
    { label: 'Date', icon: 'CalendarIcon' },
    { label: 'Phone', icon: 'PhoneIcon' },
    { label: 'Single Selection', icon: 'CheckCircleIcon' },
    { label: 'Multiple Selection', icon: 'SquresPlusIcon' },
    { label: 'Attachments', icon: 'PaperClipIcon' },
    { label: 'Region', icon: 'GlobeAltIcon' },
    { label: 'Location', icon: 'MapPinIcon' },

    { label: 'Expression', icon: 'ReceiptPercentIcon' },
    { label: 'YesNo', icon: 'CheckIcon' },
    { label: 'Rating', icon: 'StarIcon' },
    { label: 'Text Combination', icon: 'ArrowsPointingInIcon' },
    { label: 'Auto-Numbering', icon: 'BarsArrowDownIcon' },

    { label: 'RichText', icon: 'CodeBracketIcon' },
    { label: 'ID Card', icon: 'IdentificationIcon' },
    { label: 'Members', icon: 'UserIcon' },
    { label: 'Departments', icon: 'UserGroupIcon' },
    { label: 'Signature', icon: 'PencilIcon' },

    // Special
    { label: 'Section Line', icon: 'ListBulletIcon' },
    { label: 'Remark', icon: 'ChatBubbleBottomCenterText' },
    { label: 'Capitalized Amount', icon: 'LanguageIcon' },

    // Relation
    { label: 'Related Record', icon: 'LinkIcon' },
    { label: 'Parent/Child', icon: 'UsersIcon' },
    { label: 'Child Table', icon: 'TableCellsIcon' },
    { label: 'Other Table Field', icon: 'TagIcon' },
    { label: 'Summary Field', icon: 'CalculatorIcon' },
  ]

  // for (let i = 0; i < 10; i++) {
  //   let section = {
  //     id: (i+1),
  //     label: 'Section ' + (i+1),
  //     icon: 'HomeIcon',
  //     widgets: []
  //   };
  //   for (let j = 0; j < 10; j++) {
  //     section.widgets.push({
  //       id: (j+1),
  //       label: 'Widget ' + (j+1),
  //       icon: 'HomeIcon',
  //     })
  //   }
  //   widgetSections.push(section);
  // }

  useEffect(() => {
    let sections = []
    console.log('useEffect[]')
    for (let i = 0; i < widgetSections.length; i++) {
      sections.push(widgetSections[i].id)
    }
    setOpenSections(sections)
    console.log('sections: ', sections)
  }, [])

  const isOpen = (widgetSection) => {
    return openSections.includes(widgetSection.id)
  }

  const toggleOpen = (widgetSection) => {
    console.log('toggleOpen(widgetSection)')
    const index = openSections.indexOf(widgetSection.id)
    if (index >= 0) {
      setOpenSections((prevState) => {
        return prevState.filter((id) => id !== widgetSection.id)
      })
    } else {
      setOpenSections((prevState) => {
        return [...prevState, widgetSection.id]
      })
    }
  }

  const accordions = widgetSections.map((widgetSection) => {
    let widgetList = widgetSection.widgets.map((widgetId) => {
      const widget = widgets.find(item => item.id === widgetId);
      return (
        <div
          key={widget.id}
          className="hover:bg-blue-300 hover:text-white text-black cursor-pointer bg-red-100 p-1"
        >
          <div className="flex flex-row items-center">
            <WidgetIcon className="mr-2" icon={widget.icon} />
            <span className="truncate text-xs">{widget.label}</span>
          </div>
        </div>
      )
    })
    return (
      <Accordion
        className="bg-slate-100 p-1 overflow-hidden"
        key={widgetSection.id}
        style={{ marginBottom: '-5px' }}
        open={openSections.includes(widgetSection.id)}
      >
        <AccordionHeader
          className={
            'hover:text-white bg-blue-600 text-white py-0 px-1 border border-gray-400' +
            (isOpen(widgetSection) ? ' rounded-t' : ' rounded')
          }
          onClick={() => toggleOpen(widgetSection)}
        >
          {widgetSection.label}
        </AccordionHeader>
        <AccordionBody className="bg-white border-solid border border-gray-400 rounded-b p-1">
          <div className="grid gap-1 grid-cols-2">{widgetList}</div>
        </AccordionBody>
      </Accordion>
    )
  })

  return (
    <div className="flex-grow-0" style={{ minWidth: '280px', width: '280px' }}>
      <Fragment>{accordions}</Fragment>
    </div>
  )
}

/*
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            What is Material Tailwind?
          </AccordionHeader>
          <AccordionBody>
            We're not always in the position that we want to be at. We're
            constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            <div className="bg-blue-600">How to use Material Tailwind?</div>
          </AccordionHeader>
          <AccordionBody>
            We're not always in the position that we want to be at. We're
            constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            What can I do with Material Tailwind?
          </AccordionHeader>
          <AccordionBody>
            We're not always in the position that we want to be at. We're
            constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
*/

export default WidgetMenu;
