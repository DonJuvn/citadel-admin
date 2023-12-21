import React, { useState } from 'react';

import { Link } from 'react-router-dom';  // Import Link from react-router-dom

function SwitchButtons() {

return(
    <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
      <Link to="/daily-reports" className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
        <span className="hidden xs:block ml-2">Daily Report</span>
      </Link>

      <Link to="/weekly-reports" className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
        <span className="hidden xs:block ml-2">Weekly Report</span>
      </Link>

      <Link to="/monthly-reports" className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
        <span className="hidden xs:block ml-2">Monthly Report</span>
      </Link>

      <Link to="/quarterly-reports" className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
        <span className="hidden xs:block ml-2">Quarterly Report</span>
      </Link>

      <Link to="/" className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
        <span className="hidden xs:block ml-2">Main</span>
      </Link>
    </div>
)
}

export default SwitchButtons;