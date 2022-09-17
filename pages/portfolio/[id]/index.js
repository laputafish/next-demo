import { useRouter } from 'next/router';

function PortfolioPage() {
  const router = useRouter();

  console.log('router.pathName = ' + router.pathname);
  console.log('router.query: ', router.query);

  return (
    <div>
      <h1>Portfolio Page (id should be provided)</h1>
    </div>
  )
}

export default PortfolioPage
