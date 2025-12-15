import React from 'react';

const MealsSelection = ({ mealsItems, updateSelection, numberOfPeople, updateNumberOfPeople }) => {
    // Definición de los tipos de comida y sus costos
    const items = [
        { name: "Breakfast", cost: 50 },
        { name: "High Tea", cost: 25 },
        { name: "Lunch", cost: 65 },
        { name: "Dinner", cost: 70 },
    ];

    return (
        <div className="meal-selection-container" style={{ border: '1px solid #ccc', padding: '20px', marginTop: '20px', borderRadius: '5px' }}>
            <div className="section-heading">
                <h2 className="section-heading">Meals Selection</h2>
            </div>

            {/* Input para número de personas */}
            <div className="number-of-people-container" style={{ marginBottom: '20px', textAlign: 'center' }}>
                <label htmlFor="numberOfPeople" style={{ fontSize: '18px', fontWeight: 'bold', marginRight: '10px' }}>
                    Number of People:
                </label>
                <input 
                    type="number" 
                    id="numberOfPeople"
                    className="people-input"
                    value={numberOfPeople}
                    onChange={(e) => updateNumberOfPeople(parseInt(e.target.value) || 0)}
                    min="1"
                    style={{ padding: '5px', width: '80px', fontSize: '16px' }}
                />
            </div>

            {/* Checkboxes para selección de comidas */}
            <div className="meals_selection_items" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                {items.map((item, index) => (
                     <div className="meal_item" key={index} style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                        <input 
                            type="checkbox" 
                            id={`meal_${index}`}
                            checked={mealsItems[index] ? mealsItems[index].selected : false}
                            onChange={() => updateSelection(index)}
                            style={{ width: '20px', height: '20px', marginRight: '10px' }}
                        />
                        <label htmlFor={`meal_${index}`} style={{ fontSize: '16px' }}>
                            <strong>{item.name}</strong> <br/>
                            <span style={{ color: '#555' }}>${item.cost}</span>
                        </label>
                     </div>
                ))}
            </div>
        </div>
    );
};

export default MealsSelection;