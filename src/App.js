import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import GetData from './get the data in table rfc/GetData'
import GetData1 from './get the data in table rcc/GetData1'
import FormData from './get form data in table rfc/FormData'
import FormData1 from './get form data in table rcc/FormData1'

export default function App() {
    return (
        <BrowserRouter>
                <Routes>
                        <Route path='/getdata' element={ <GetData /> }/>
                        <Route path='/getdata1' element={ <GetData1 /> }/>
                        <Route path='/formdata' element={ <FormData /> }/>
                        <Route path='/formdata1' element={ <FormData1 /> }/>
                </Routes>
        </BrowserRouter>
    )
}
