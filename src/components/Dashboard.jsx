
import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import supabase from "../supabaseClient.js"; 
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

  const fetchMeals = async () => {
    const { data, error } = await supabase 
      .from('meals')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error) {
      setMeals(data);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("Button clicked");

  const { data, error } = await supabase
    .from('meals')
    .insert([
      {
        meal_name: formData.mealName,
        day: formData.day,
        meal_type: formData.mealType,
        calories: formData.calories,
        notes: formData.notes
      }
    ]);

  if (error) {
    console.log(error);
    return;
  }

  console.log("Meal added");

  fetchMeals();

  setFormData({
    mealName: "",
    day: "",
    mealType: "",
    calories: "",
    notes: ""
  });
};

  const clearMeals = async () => {
    await supabase
      .from('meals')
      .delete()
      .neq('id', 0);

    fetchMeals();
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

          <button type="submit">Add Meal</button>
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
                    <h4>{meal.meal_name}</h4>
                    <p>{meal.meal_type}</p>
                    <p>{meal.calories} calories</p>
                    <small>{meal.notes}</small>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </section>

      <button className="clear-btn" onClick={clearMeals}>
        Clear All Meals
      </button>
    </div>
  );
} 

export default Dashboard;