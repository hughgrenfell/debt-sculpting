export default function ProjectMenu({ setProjectState }) {

    function handleProjectInfoClick() {

        setProjectState((prevProjectState) => {
            return {
                ...prevProjectState,
                selectedCashFlow: "projectInfo"
            }
        })
    }
    
    function handleResultsClick() {

        setProjectState((prevProjectState) => {
            return {
            ...prevProjectState,
            selectedCashFlow: "results"
            }
        })
    }

    function handleCashFlowsClick() {

        setProjectState((prevProjectState) => {
            return {
            ...prevProjectState,
            selectedCashFlow: null
            }
        })
    }

    function handleResultsClick() {

        setProjectState((prevProjectState) => {
            return {
            ...prevProjectState,
            selectedCashFlow: "results"
            }
        })
    }

    return(
        <ul className="flex bg-stone-900 text-stone-50 pl-6 py-4">
            <li className="mr-6">
                <button 
                    className="hover:text-stone-400"
                    onClick={ handleProjectInfoClick }
                >
                    Project Info
                </button>
            </li>
            <li className="mr-6">
                <button 
                    className="hover:text-stone-400"
                    onClick={ handleCashFlowsClick }
                >
                    Cash Flows
                </button>
            </li>
            <li className="mr-6">
                <button 
                    className="hover:text-stone-400"
                    onClick={ handleResultsClick }
                >
                    Results
                </button>
            </li>
        </ul>
    )
}