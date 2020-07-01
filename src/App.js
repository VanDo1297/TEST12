import React  from 'react';
import './App.css'
const App =()=> {
  return (
        <div class="form">
          <input type="text" name="name" autocomplete="off" required />
          <label for="name" class="label-name-input">
            <span class="content-label-name">Name</span>
          </label>
        </div>
  );
}
export default App;