import Search from "./components/Search"
import UserInfo from "./components/UserInfo"

export default function App() {
  return (
    <main className="mx-auto w-[85%] my-8 grid gap-6">
      <Search />
      <UserInfo />
    </main>
  )  
}