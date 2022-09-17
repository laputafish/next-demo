import { getFeaturedEvents } from '../dummy-data';
import Link from 'next/link';
import EventList from 'components/events/event-list';
import AppLinkButton from 'components/ui/AppLinkButton';

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div className="mx-auto">
      <div className="flex flex-row items-center gap-1 p-1 bg-slate-300">
        <AppLinkButton href="/my-apps">
          My Apps
        </AppLinkButton>
        <AppLinkButton href="/formBuilder">
          Form Builder
        </AppLinkButton>
        <AppLinkButton href="/agGrid">
          AG Grid
        </AppLinkButton>
        <AppLinkButton href="/recordForm">
          Record Form
        </AppLinkButton>

        {/* <Link href="/agGrid">
          <Button size="sm" color="red">
            AG Grid
          </Button>
        </Link>
        <Link href="/recordForm">
          <Button size="sm" color="amber">
            Record Form
          </Button>
        </Link> */}
      </div>
      <EventList items={featuredEvents} />
    </div>
  )
}

export default HomePage;
