import { useState } from "react"

export default function Search({ onSearch }) {
    const [username, setUsername] = useState('');

    const handleSearch = () => {
        onSearch(username);
    }

    return (
        <section className="rounded-lg bg-white p-3 flex gap-4">
            <span className="sr-only">Search Bar</span>
            <input className="p-6 bg-slate-200 w-full font-semibold rounded-lg hover:bg-slate-100 focus:bg-slate-100" type="search" placeholder="Search for a GitHub user" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <button className="bg-green-400 rounded-lg font-semibold hover:bg-green-300 focus:bg-green-300 transition-colors" onClick={handleSearch}>Search Github</button>
        </section>
    )
}