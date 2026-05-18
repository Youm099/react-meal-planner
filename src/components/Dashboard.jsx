


import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import "../App.css"; 
function Dashboard() {

  const [meals, setMeals] = useState([]);

  const [formData, setFormData] = useState({
    mealName: "",
    day: "",
    mealType: "",
    calories: "",
    notes: ""
  });

  useEffect(() => {
    const savedMeals = localStorage.getItem("meals");

    if (savedMeals) {
      setMeals(JSON.parse(savedMeals));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("meals", JSON.stringify(meals));
  }, [meals]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMeal = {
      id: Date.now(),
      ...formData
    };

    setMeals([...meals, newMeal]);

    setFormData({
      mealName: "",
      day: "",
      mealType: "",
      calories: "",
      notes: ""
    });
  };

  const clearMeals = () => {
    setMeals([]);
  };

  const totalCalories = meals.reduce(
    (sum, meal) => sum + Number(meal.calories || 0),
    0
  );

  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
  ];

  return (
    <div className="dashboard-container">

      <Header />

      {/* FORM SECTION */}
      <section className="form-section">

        <h2>Add a Meal</h2>

        <form onSubmit={handleSubmit}>

          <div className="form-row">

            <div className="form-group">
              <label>Meal Name</label>

              <input
                type="text"
                name="mealName"
                value={formData.mealName}
                onChange={handleChange}
                placeholder="e.g Grilled Chicken"
                required
              />
            </div>

            <div className="form-group">
              <label>Day</label>

              <select
                name="day"
                value={formData.day}
                onChange={handleChange}
                required
              >
                <option value="">Select Day</option>

                {days.map((day) => (
                  <option key={day} value={day}>
                    {day.charAt(0).toUpperCase() + day.slice(1)}
                  </option>
                ))}
              </select>
            </div>

          </div>

          <div className="form-row">

            <div className="form-group">

              <label>Meal Type</label>

              <select
                name="mealType"
                value={formData.mealType}
                onChange={handleChange}
                required
              >
                <option value="">Select Type</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snack">Snack</option>
              </select>

            </div>

            <div className="form-group">

              <label>Calories</label>

              <input
                type="number"
                name="calories"
                value={formData.calories}
                onChange={handleChange}
                placeholder="500"
              />

            </div>

          </div>

          <div className="form-group">

            <label>Recipe / Notes</label>

            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Recipe and notes..."
            />

          </div>

          <button type="submit">
            Add Meal
          </button>

        </form>

      </section>

      {/* STATS */}
      <section className="stats-section">

        <div className="stat-card">
          <h3>{meals.length}</h3>
          <p>Total Meals</p>
        </div>

        <div className="stat-card">
          <h3>{totalCalories}</h3>
          <p>Total Calories</p>
        </div>

      </section>

      {/* WEEK GRID */}
      <section className="week-grid">

        {days.map((day) => (

          <div className="day-card" key={day}>

            <h3>
              {day.charAt(0).toUpperCase() + day.slice(1)}
            </h3>

            <div className="meals-container">

              {meals
                .filter((meal) => meal.day === day)
                .map((meal) => (

                  <div className="meal-card" key={meal.id}>

                    <h4>{meal.mealName}</h4>

                    <p>{meal.mealType}</p>

                    <p>{meal.calories} calories</p>

                    <small>{meal.notes}</small>

                  </div>

              ))}

            </div>

          </div>

        ))}

      </section>

      <button
        className="clear-btn"
        onClick={clearMeals}
      >
        Clear All Meals
      </button>

    </div>
  );
}

export default Dashboard;