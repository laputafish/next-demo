import { useRouter } from 'next/router'

function ClientProjectPage() {
  const router = useRouter()

  console.log('router.pathName = ' + router.pathname)
  console.log('router.query: ', router.query)

  return (
    <div>
      <h1>ClientProjectPage</h1>
      <h2>client id: {router.query.id}</h2>
      <h2>client project id: {router.query.projectId}</h2>
    </div>
  )
}

export default ClientProjectPage
