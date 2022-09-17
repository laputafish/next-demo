import { getFeaturedEvents } from '../../dummy-data'
import EventList from '../../components/events/event-list'

function AllEventsPage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div className="mx-auto">
      <EventList items={featuredEvents}/>
    </div>
  )
}

export default AllEventsPage
