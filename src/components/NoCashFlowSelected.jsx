import noCashFlowsImage from '../assets/no-cashflows.png';
import Button from './Button';

export default function NoCashFlowSelected({ setProjectState }) {

    function handleProjectState() {
        setProjectState((prevProjectState) => {
            return {
                ...prevProjectState,
                newId: prevProjectState.newId + 1,
                selectedCashFlow: undefined
            }
        })
    }

    return (
        <div className="mt-24 text-center w-2/3">
            <img 
                src={ noCashFlowsImage } 
                alt="An empty task list" 
                className="w-16 h-16 object-contain mx-auto"
            />
            <h2 className="text-xl font-bold text-stone-500 my-4 ">
                No Cash Flow Selected
            </h2>
            <p className="text-stone-400 mb-4">
                Select a cash flow or get started with a new one.
            </p>
            <p className="mt-8">
                <Button
                    onClick={ handleProjectState }
                >
                    Create New Cash Flow
                </Button>
            </p>
        </div>
    );
}