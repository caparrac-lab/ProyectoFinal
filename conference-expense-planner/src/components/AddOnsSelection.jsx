import React from "react";

const AddOnsSelection = ({ updateQuantity, addonsItems }) => {
  // Lista de complementos con sus imágenes y precios
  const selection = [
    {
      img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1459&auto=format&fit=crop", // Projectors (Nueva imagen más estable)
      name: "Projectors",
      cost: 200,
    },
    {
      img: "https://images.unsplash.com/photo-1543599538-a6c4f6cc5c05?q=80&w=1374&auto=format&fit=crop", // Speaker
      name: "Speaker",
      cost: 35,
    },
    {
      img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1470&auto=format&fit=crop", // Microphones
      name: "Microphones",
      cost: 45,
    },
    {
      img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1470&auto=format&fit=crop", // Whiteboards
      name: "Whiteboards",
      cost: 80,
    },
    {
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop", // Signage
      name: "Signage",
      cost: 80,
    },
  ];

  return (
    <div className="addon-selection-container">
      <div className="section-heading">
        <h2 className="section-heading">Add-ons Selection</h2>
      </div>
      <div className="addon_selection_items">
        {selection.map((item, index) => (
          <div className="addon_main_container" key={index}>
            <div className="addon_image_area">
              <img src={item.img} alt={item.name} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
            </div>
            <div className="addon_text_area" style={{ textAlign: "center" }}>
              <div className="addon_name">{item.name}</div>
              <div className="addon_cost">${item.cost}</div>
              <div className="button_container">
                <button
                  className="btn-warning btn-minus"
                  onClick={() => updateQuantity(index, -1)}
                >
                  &#8722;
                </button>
                <span className="selected_count">
                  {addonsItems[index] ? addonsItems[index].quantity : 0}
                </span>
                <button
                  className="btn-success btn-plus"
                  onClick={() => updateQuantity(index, 1)}
                >
                  &#43;
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddOnsSelection;