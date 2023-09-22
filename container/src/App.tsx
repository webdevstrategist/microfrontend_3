import React from 'react'

const SurveyButton = React.lazy(() => import('marketing/SurveyButton'))

function App() {

  return (
    <>
     <SurveyButton />
    </>
  )
}

export default App
