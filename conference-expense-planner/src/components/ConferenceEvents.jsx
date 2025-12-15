import React, { useState } from "react";
import "./ConferenceEvents.css"; // Crearemos este CSS en el siguiente paso para que se vea bonito
import { useSelector, useDispatch } from "react-redux";
import { incrementVenueQuantity, decrementVenueQuantity, incrementAddonQuantity, decrementAddonQuantity, toggleMealSelection, updateNumberOfPeople } from "../cartSlice";
import VenueSelection from "./VenueSelection";
import AddOnsSelection from "./AddOnsSelection";
import MealsSelection from "./MealsSelection";
import TotalCost from "./TotalCost";

const ConferenceEvents = () => {
    const [showItems, setShowItems] = useState(false);
    const dispatch = useDispatch();
    const { venue, addons, meals, numberOfPeople } = useSelector((state) => state.cart);

    const handleToggleItems = () => {
        setShowItems(!showItems);
    };

    const handleVenueQuantity = (index, type) => {
        if (type === 1) {
            dispatch(incrementVenueQuantity(index));
        } else {
            dispatch(decrementVenueQuantity(index));
        }
    };

    const handleAddonQuantity = (index, type) => {
        if (type === 1) {
            dispatch(incrementAddonQuantity(index));
        } else {
            dispatch(decrementAddonQuantity(index));
        }
    };

    const handleMealSelection = (index) => {
        dispatch(toggleMealSelection(index));
    };

    const handleNumberOfPeople = (count) => {
        dispatch(updateNumberOfPeople(count));
    };

    // Cálculos de subtotales
    const calculateVenueTotal = () => {
        let total = 0;
        venue.forEach(item => total += item.cost * item.quantity);
        return total;
    };

    const calculateAddonsTotal = () => {
        let total = 0;
        addons.forEach(item => total += item.cost * item.quantity);
        return total;
    };

    const calculateMealsTotal = () => {
        let total = 0;
        meals.forEach(item => {
            if (item.selected) {
                total += item.cost * numberOfPeople;
            }
        });
        return total;
    };

    const calculateTotalCost = () => {
        return calculateVenueTotal() + calculateAddonsTotal() + calculateMealsTotal();
    };

    // Componente para mostrar la tabla de detalles en el Modal
    const ItemsDisplay = () => {
        return (
            <>
                <table className="table_item_data">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Unit Cost</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {venue.filter(item => item.quantity > 0).map((item, index) => (
                            <tr key={`venue-${index}`}>
                                <td>{item.name}</td>
                                <td>${item.cost}</td>
                                <td>{item.quantity}</td>
                                <td>${item.cost * item.quantity}</td>
                            </tr>
                        ))}
                         {addons.filter(item => item.quantity > 0).map((item, index) => (
                            <tr key={`addon-${index}`}>
                                <td>{item.name}</td>
                                <td>${item.cost}</td>
                                <td>{item.quantity}</td>
                                <td>${item.cost * item.quantity}</td>
                            </tr>
                        ))}
                        {meals.filter(item => item.selected).map((item, index) => (
                            <tr key={`meal-${index}`}>
                                <td>{item.name}</td>
                                <td>${item.cost}</td>
                                <td>{numberOfPeople}</td>
                                <td>${item.cost * numberOfPeople}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        );
    };

    return (
        <>
            <nav className="navbar_event_conference">
                <div className="company_logo">Conference Expense Planner</div>
                <div className="left_navbar">
                    <div className="nav_links">
                        <a href="#venue" onClick={() => setShowItems(false)}>Venue</a>
                        <a href="#addons" onClick={() => setShowItems(false)}>Add-ons</a>
                        <a href="#meals" onClick={() => setShowItems(false)}>Meals</a>
                    </div>
                    <button className="details_button" onClick={() => setShowItems(!showItems)}>
                        {showItems ? "Hide Details" : "Show Details"}
                    </button>
                </div>
            </nav>

            <div className="main_container">
                {!showItems ? (
                    <>
                        <div id="venue">
                            <VenueSelection venueItems={venue} updateQuantity={handleVenueQuantity} />
                            <div className="subtotal_display">Venue Subtotal: ${calculateVenueTotal()}</div>
                        </div>
                        <div id="addons">
                            <AddOnsSelection addonsItems={addons} updateQuantity={handleAddonQuantity} />
                            <div className="subtotal_display">Add-ons Subtotal: ${calculateAddonsTotal()}</div>
                        </div>
                        <div id="meals">
                            <MealsSelection 
                                mealsItems={meals} 
                                updateSelection={handleMealSelection} 
                                numberOfPeople={numberOfPeople} 
                                updateNumberOfPeople={handleNumberOfPeople}
                            />
                            <div className="subtotal_display">Meals Subtotal: ${calculateMealsTotal()}</div>
                        </div>
                        <div className="total_cost_display">
                            <h2>Total Cost: ${calculateTotalCost()}</h2>
                        </div>
                    </>
                ) : (
                    <div className="total_cost_popup">
                         <TotalCost totalCosts={calculateTotalCost()} ItemsDisplay={ItemsDisplay} />
                    </div>
                )}
            </div>
        </>
    );
};

export default ConferenceEvents;