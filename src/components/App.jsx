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