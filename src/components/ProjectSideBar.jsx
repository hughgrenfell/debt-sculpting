import Button from './Button';

export default function ProjectSideBar({ setProjectState, projectState }) {

    function handleNewCashFlowClick() {

        setProjectState((prevProjectState) => {
            return {
            ...prevProjectState,
            newId: prevProjectState.newId + 1,
            selectedCashFlow: undefined
            }
        })
    }

    function handleSelectCashFlowClick( cashFlow ) {

        setProjectState((prevState) => {
            return {
                ...prevState,
                selectedCashFlow: cashFlow
            }
        })
    }

    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Cash Flows</h2>
            <div>
                <Button onClick={ handleNewCashFlowClick }>
                    + Add Cash Flow
                </Button>
            </div>
            <ul>
                {
                    projectState.cashFlows.map(( cashFlow ) => {
                        return (
                            <li key={ cashFlow.id }>
                                <button 
                                    className="hover:text-stone-400" 
                                    onClick={ () => handleSelectCashFlowClick( cashFlow ) }
                                >
                                    { cashFlow.title }
                                </button></li>
                        )
                    })
                }
            </ul>
        </aside>
    )
}