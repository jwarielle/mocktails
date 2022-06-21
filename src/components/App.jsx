import React, {useState} from 'react';
import Header from './Header';
import DropDown from './DropDown';
import List from './MocktailList';
import mocktails from '../mocktails';

function App() {
    let [drinks, setMocktails] = useState(mocktails);

    function filterMocktails(selectedMood) {
        if(selectedMood === "all") {
            setMocktails(mocktails);
            return;
        }

        let filteredDrinks = mocktails.filter(drink => {
            return drink.mood === selectedMood;
        })

        setMocktails(filteredDrinks);
    }

    return (<div>
        <Header />
        <div className='intro-div'>
            <h1>Welcome to Mocktails!</h1>
            <p>Use the menu to find mocktails that match your mood.</p>
        </div>
        <DropDown 
            onFilter = {filterMocktails}
        />
        {drinks.map((tail, index) => {
            return (
                <List 
                    key = {index}
                    name = {tail.name}
                    description = {tail.desc}
                    image = {tail.imgURL}
                />
            );
        })}
    </div>);
}

export default App;