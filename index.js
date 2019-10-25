import React, { useState } from 'react';
import { render } from 'react-dom';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function App() {
  const [state, setState] = useState({ startDate: new Date() });

  const handleChange = (date) => {
    setState({
      startDate: date
    });
  }

  return (
    <DatePicker
      selected={state.startDate}
      onChange={handleChange}
    />
  );
}

render(<App />, document.getElementById('root'));
