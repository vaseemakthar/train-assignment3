import React from 'react';
import Users from './Users';
import UpdatedUser from './UpdatedUser';
import CreatedUser from './CreatedUser';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function Apps(){
  return(
    <div>
       
            <Router>
                <Routes>
                    <Route path="/" element={<Users/>}/>
                    <Route path="/create" element={<CreatedUser/>}/>
                    <Route path="/update/:id" element={<UpdatedUser/>}/>
                 </Routes>
            </Router>
     </div>
  )
}
export default Apps;