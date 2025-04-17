"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

// Define the structure of the diet plan response
interface DietPlan {
  breakfast: string[];
  lunch: string[];
  dinner: string[];
  snacks: string[];
  total_calories: number;
}

// Define the form data structure
interface FormData {
  age: string;
  gender: string;
  weight: string;
  height: string;
  activity_level: string;
  dietary_preferences: string;
  allergies: string;
  meals_per_day: number;
  calories_target: string;
}

export default function DietPlanner() {
  const [formData, setFormData] = useState<FormData>({
    age: "",
    gender: "Male",
    weight: "",
    height: "",
    activity_level: "Moderately Active",
    dietary_preferences: "",
    allergies: "",
    meals_per_day: 3,
    calories_target: "auto",
  });

  const [dietPlan, setDietPlan] = useState<DietPlan | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post<DietPlan>(
        "/api/generateDiet",
        formData
      );
      setDietPlan(response.data);
    } catch (err) {
      setError("Failed to generate diet plan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-5 mt-20">
      <h2 className="text-xl font-bold mb-4">Diet Planner</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="age"
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
        <input
          name="weight"
          type="number"
          placeholder="Weight (kg)"
          value={formData.weight}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
        <input
          name="height"
          type="number"
          placeholder="Height (cm)"
          value={formData.height}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />

        <select
          name="activity_level"
          value={formData.activity_level}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option value="Sedentary">Sedentary</option>
          <option value="Lightly Active">Lightly Active</option>
          <option value="Moderately Active">Moderately Active</option>
          <option value="Very Active">Very Active</option>
        </select>

        <input
          name="dietary_preferences"
          type="text"
          placeholder="Dietary Preferences"
          value={formData.dietary_preferences}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          name="allergies"
          type="text"
          placeholder="Allergies"
          value={formData.allergies}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          name="meals_per_day"
          type="number"
          placeholder="Meals per Day"
          value={formData.meals_per_day}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          name="calories_target"
          type="text"
          placeholder="Calories Target (or 'auto')"
          value={formData.calories_target}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <button type="submit" className="bg-blue-500 text-white p-2 w-full">
          {loading ? "Generating..." : "Generate Diet Plan"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {dietPlan && (
        <div className="mt-6 p-4 border rounded">
          <h3 className="text-lg font-bold">Your Diet Plan</h3>
          <p>
            <strong>Breakfast:</strong> {dietPlan.breakfast.join(", ")}
          </p>
          <p>
            <strong>Lunch:</strong> {dietPlan.lunch.join(", ")}
          </p>
          <p>
            <strong>Dinner:</strong> {dietPlan.dinner.join(", ")}
          </p>
          <p>
            <strong>Snacks:</strong> {dietPlan.snacks.join(", ")}
          </p>
          <p>
            <strong>Total Calories:</strong> {dietPlan.total_calories} kcal
          </p>
        </div>
      )}
    </div>
  );
}
