import Layout from "/src/components/Layout"
import AmountTable from "/src/components/dashboard/AmountTable"
import ResetDatasButton from "/src/components/dashboard/ResetDatasButton"

const Home = () => {
  return (
    <Layout pageTitle="Journal">
      <AmountTable />
      <ResetDatasButton />
    </Layout>
  )
}

export default Home
