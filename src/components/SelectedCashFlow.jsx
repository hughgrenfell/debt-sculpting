import Assumptions from './Assumptions';
import Button from './Button';

export default function SelectedCashFlow({ setProjectState, projectState, onAdd, onDelete }) {

    const formattedDate = new Date(projectState.selectedCashFlow.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        timeZone: "UTC",
      });

    function handleCancel() {
        setProjectState((prevProjectState) => {
            return {
                ...prevProjectState,
                selectedCashFlow: null,
            }
        }) 
    }

    function onDelete() {
        setProjectState((prevProjectState) => {
            return {
            ...prevProjectState,
            selectedCashFlow: null,
            cashFlows: prevProjectState.cashFlows.filter(
                ( cashFlow ) => cashFlow.id !== prevProjectState.selectedCashFlow.id
            ),
            }
        })
    }

    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">
                    {projectState.selectedCashFlow.title}
                    </h1>
                    <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <Button 
                            className="text-stone-800 hover:text-stone-950"
                            onClick={ handleCancel }
                        >
                            Cancel
                        </Button>
                    </li>
                    <li>
                        <Button
                            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                            onClick={onDelete}
                            >
                            Delete
                        </Button>
                    </li>
                </menu>

                </div>
                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">
                    {projectState.selectedCashFlow.description}
                </p>
            </header>
            <Assumptions 
                onAdd={ onAdd } 
                onDelete={ onDelete }
                assumptions={ projectState.selectedCashFlow.assumptions } 
            />
        </div>
    )
}