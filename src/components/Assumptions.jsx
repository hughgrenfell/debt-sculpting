import NewAssumption from "./NewAssumption"

export default function Assumptions({assumptions, onAdd, onDelete}) {
    return(
        <section>
            <h2 className="text=2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewAssumption onAdd={ onAdd }/>
            {
                assumptions.length === 0 &&
                <p className="text-stone-800 my-4">
                    This Cash Flow has no assumptions.
                </p> 
            }
            {
                assumptions.length > 0 && 
                <ul className="p-4 mt-8 rounded-md bg-stone-100">
                    {assumptions.map(( assumption ) => 
                        <li key={ assumption.id } className="flex justify-between my-4">
                            <span>{ assumption.text }</span>
                            <button className="text-stone-700 hover:text-red-500">
                                Clear
                            </button>
                        </li>    
                    )}
                </ul>
            }
        </section>
    )
}