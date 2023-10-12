export default function Search() {
    return (
        <section className="rounded-lg bg-white p-3 flex justify-between gap-4">
            <span className="sr-only">Search Bar</span>
            <input className="p-6 bg-slate-200 w-[min(70%,_200px)] font-semibold rounded-lg " type="search" placeholder="mauriciompf"/>
            <button className="bg-green-500 rounded-lg font-semibold">Search Github</button>
        </section>
    )
}