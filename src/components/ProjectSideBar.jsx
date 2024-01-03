import Button from './Button';

import { moneyFormatter } from '../util/Calculator';

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
        <aside className="w-1/3 px-8 py-16 bg-stone-800 text-stone-50 md:w-72">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Project Info</h2>
            <ul className="mb-8">
                {
                    projectState.debtTotal && 
                    <>
                        <li>Debt: { moneyFormatter.format(projectState.debtTotal) }</li>
                        <li>Project Cost: { moneyFormatter.format(projectState.projectCost) }</li>
                        <li>Amortizaztion: { projectState.amortizationPeriod }</li>
                        <li>Min DSCR: { projectState.minDSCR }</li>
                    </>
                }
            </ul>
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
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </aside>
    )
}