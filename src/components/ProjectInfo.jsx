import Input from './Input';
import Button from './Button';
import Modal from './Modal';

import { useRef } from 'react';

export default function ProjectInfo({ setProjectState }) {

    const debtTotalRef = useRef();
    const projectCostRef = useRef();
    const amortizationPeriodRef = useRef();
    const minDSCRRef = useRef();
    const modalRef = useRef();

    function handleCancel() {
        setProjectState((prevProjectState) => {
            return {
                ...prevProjectState,
                selectedCashFlow: null,
            }
        }) 
    }

    function handleSave() {

        const enteredDebtTotal = debtTotalRef.current.value;
        const enteredProjectCost = projectCostRef.current.value;
        const enteredAmortizationPeriod = amortizationPeriodRef.current.value;
        const enteredMinDSCR = minDSCRRef.current.value;

        if(enteredDebtTotal.trim() === '' || enteredProjectCost.trim() === '' || enteredAmortizationPeriod.trim() === '' || enteredMinDSCR.trim() === '') {
            modalRef.current.open();
            return;
        } else {
            setProjectState((prevProjectState) => {
                return {
                    ...prevProjectState,
                    debtTotal: enteredDebtTotal,
                    projectCost: enteredProjectCost,
                    amortizationPeriod: enteredAmortizationPeriod,
                    minDSCR: enteredMinDSCR,
                    selectedCashFlow: null,
                }
            })
        }
    }

    return (
        <>
            <Modal ref={ modalRef } buttonCaption="Okay">
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">Oops... Looks like you forgot to enter some data</p>
                <p className="text-stone-600 mb-4">Make sure to fill in all fields</p>
            </Modal>
            <h2>Project Info</h2>
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
                        onClick={ handleSave }
                    >
                        Save
                    </Button>
                </li>
            </menu>
            <div className="w-[35rem] mt-16">
                <Input label="Debt Total" ref={ debtTotalRef }/>
                <Input label="Project Cost" ref={ projectCostRef } />
                <Input label="Amortization Period" ref={ amortizationPeriodRef } />
                <Input label="Min DSCR" ref={ minDSCRRef } /> 
            </div>
        </>
    )
}