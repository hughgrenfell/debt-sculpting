import { useState } from 'react';

import ProjectSideBar from './components/ProjectSideBar';
import NewCashFlow from './components/NewCashFlow';
import NoCashFlowSelected from './components/NoCashFlowSelected';
import SelectedCashFlow from './components/SelectedCashFlow';

function App() {

  const [ projectState, setProjectState ] = useState({
    selectedCashFlow: null,
    newId: 2,
    cashFlows: [
      {
        id: "CashFlow0",
        title: "First Cash Flow",
        description: "This is the first cash flow",
        date: "2023-10-12",
        assumptions: [],
      }, 
      {
        id: "CashFlow1",
        title: "Second Cash Flow",
        description: "This is the second cash flow",
        date: "2023-12-12",
        assumptions: [],
      },
    ],
  });

  function handleAddAssumption(text) {
    setProjectState((prevState) => {
      const assumptionId = Math.random(); //Change this to sequential numbering 
      const newAssumption = {
        text: text,
        projectId: prevState.selectedCashFlow.id,
        id: assumptionId,
      }

      return {
        ...prevState,
        selectedCashFlow: null,
        assumptions: [ newAssumption, ...prevState.assumptions ]
      }

    })
  }

  function handleDeleteAssumption() {
    console.log("Delete Task Initiated");
  }

  let content;

  if (projectState.selectedCashFlow === null) {
    content = 
      <NoCashFlowSelected 
        setProjectState={ setProjectState }
      />
  } else if (projectState.selectedCashFlow === undefined) {
    content = 
      <NewCashFlow 
        setProjectState={ setProjectState } 
        projectState={ projectState } 
      />
  } else {
    content = 
    <SelectedCashFlow
      setProjectState={ setProjectState } 
      projectState={ projectState }
      onAdd={ handleAddAssumption }
      onDelete={ handleDeleteAssumption } 
    />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar setProjectState={ setProjectState } projectState={ projectState } />
      { content }
    </main>
  );
}

export default App;
