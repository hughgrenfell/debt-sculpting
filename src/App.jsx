import { useState } from 'react';

import ProjectInfo from './components/ProjectInfo';
import ProjectMenu from './components/ProjectMenu';
import ProjectSideBar from './components/ProjectSideBar';
import NewCashFlow from './components/NewCashFlow';
import NoCashFlowSelected from './components/NoCashFlowSelected';
import SelectedCashFlow from './components/SelectedCashFlow';
import Results from './components/Results';

function App() {

  const [ projectState, setProjectState ] = useState({
    selectedCashFlow: null,
    newId: 0,
    cashFlows: [{
      id: "cf1",
      title: "Cash Flow 1",
      amount: 25000,
      description: "First Cash Flow",
      date: "12-12-2023",
      assumptions: [],
    },{
      id: "cf2",
      title: "Cash Flow 2",
      amount: 15000,
      description: "Second Cash Flow",
      date: "12-12-2023",
      assumptions: [],
    },{
      id: "cf3",
      title: "Cash Flow 3",
      amount: 35000,
      description: "Third Cash Flow",
      date: "12-12-2023",
      assumptions: [],
    }],
  });

  let content;

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
        assumptions: prevState.selectedCashFlow.assumptions.push(newAssumption) 
      }

    })
  } 

  function handleDeleteAssumption() {
    console.log("Delete Task Initiated");
  } 

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
  } else if (projectState.selectedCashFlow === "results") {
    content =
      <Results projectState={ projectState } />
  } else if (projectState.selectedCashFlow === "projectInfo") {
    content =
      <ProjectInfo setProjectState={ setProjectState } />
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
    <main>
      <ProjectMenu setProjectState={ setProjectState } />
      <div className="h-screen flex">
        <ProjectSideBar setProjectState={ setProjectState } projectState={ projectState } />
        <div className="w-full mx-auto h-128">
          { content }
        </div>
      </div>
    </main>
  );
}

export default App;
