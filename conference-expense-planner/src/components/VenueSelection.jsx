import React from "react";
// Más adelante importaremos aquí los iconos o acciones de Redux

const VenueSelection = ({ venueItems, updateQuantity }) => {
  // Definimos las habitaciones disponibles de forma estática
  const selection = [
    {
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1469&auto=format&fit=crop", // Conference Room (Nueva imagen)
      name: "Conference Room",
      cost: 1500,
      capacity: 15,
    },
    {
      img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1470&auto=format&fit=crop", // Auditorium Hall
      name: "Auditorium Hall",
      cost: 5500,
      capacity: 200,
    },
    {
      img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1459&auto=format&fit=crop", // Presentation Room
      name: "Presentation Room",
      cost: 3500,
      capacity: 50,
    },
    {
      img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1470&auto=format&fit=crop", // Large Meeting Room
      name: "Large Meeting Room",
      cost: 1000,
      capacity: 10,
    },
    {
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop", // Small Meeting Room
      name: "Small Meeting Room",
      cost: 800,
      capacity: 5,
    },
  ];

  return (
    <div className="venue-selection-container">
      <div className="section-heading">
        <h2 className="section-heading">Venue Room Selection</h2>
      </div>
      <div className="venue_selection_items">
        {selection.map((item, index) => (
          <div className="venue_main_container" key={index}>
            <div className="venue_image_area">
              <img src={item.img} alt={item.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            </div>
            <div className="venue_text_area" style={{ textAlign: "center" }}>
              <div className="venue_name">{item.name}</div>
              <div className="venue_capacity">Capacity: {item.capacity}</div>
              <div className="venue_cost">${item.cost}</div>
              <div className="button_container">
                <button
                  className={venueItems[index].quantity === 0 ? "btn-warning btn-disabled" : "btn-warning btn-minus"}
                  onClick={() => updateQuantity(index, -1)}
                >
                  &#8722; {/* Signo menos */}
                </button>
                <span className="selected_count">
                  {venueItems[index].name === item.name ? venueItems[index].quantity : 0}
                </span>
                <button
                  className={venueItems[index].quantity === 10 ? "btn-success btn-disabled" : "btn-success btn-plus"}
                  onClick={() => updateQuantity(index, 1)}
                >
                  &#43; {/* Signo más */}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VenueSelection;