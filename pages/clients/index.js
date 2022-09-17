import { useRouter } from 'next/router'

function ClientsPage() {
  const router = useRouter()

  console.log('router.pathName = ' + router.pathname)
  console.log('router.query: ', router.query)

  return (
    <div>
      <h1>Clients Page</h1>
    </div>
  )
}

export default ClientsPage
