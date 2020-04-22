
import React from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import EventModal from './EventModal'
import Button from 'react-bootstrap/Button'


const locales = {
  'en-US': require('date-fns/locale/en-US'),
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})


export default function MyCalendar() {
  const [events, setEvents] = React.useState([])
  const [modalShow, setModalShow] = React.useState(false);
 
  const anEvent = () => ({
    title: String,
    start: Date,
    end: Date,
  })
 
  return (
    <div>
      <div>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
      <div>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Events
      </Button>

        <EventModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </div>
  )


}