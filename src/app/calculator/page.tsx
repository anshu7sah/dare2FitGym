"use client";
import { useState } from "react";

export default function CalorieCalculator() {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [weight, setWeight] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [heightUnit, setHeightUnit] = useState<
    "cm" | "m" | "ft-in" | "generic"
  >("cm");
  const [feet, setFeet] = useState<number | "">("");
  const [inches, setInches] = useState<number | "">("");
  const [age, setAge] = useState<number | "">("");
  const [activityLevel, setActivityLevel] = useState<number>(1.2);
  const [calories, setCalories] = useState<string | null>(null);

  const convertHeightToCm = () => {
    if (heightUnit === "cm") return height;
    if (heightUnit === "m") return height ? height * 100 : "";
    if (heightUnit === "ft-in" && feet !== "" && inches !== "")
      return feet * 30.48 + inches * 2.54;
    return "";
  };

  const calculateCalories = () => {
    const convertedHeight = convertHeightToCm();
    if (weight === "" || convertedHeight === "" || age === "") {
      alert("Please enter all fields");
      return;
    }

    let bmr: number;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * convertedHeight - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * convertedHeight - 5 * age - 161;
    }

    setCalories((bmr * activityLevel).toFixed(2));
  };

  const resetFields = () => {
    setGender("male");
    setWeight("");
    setHeight("");
    setFeet("");
    setInches("");
    setAge("");
    setActivityLevel(1.2);
    setCalories(null);
  };

  return (
    <div className="max-w-md mx-auto p-6 sm:border sm:rounded-lg shadow-lg bg-gray-900 text-white transition-all duration-300 ease-in-out md:max-w-lg lg:max-w-xl xl:max-w-2xl sm:mt-52 mt-40">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Calorie Calculator
      </h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Gender:</label>
        <select
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
          value={gender}
          onChange={(e) => setGender(e.target.value as "male" | "female")}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Weight (kg):</label>
        <input
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          type="number"
          value={weight}
          onChange={(e) =>
            setWeight(e.target.value ? parseFloat(e.target.value) : "")
          }
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Height:</label>
        <select
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded mb-2"
          value={heightUnit}
          onChange={(e) =>
            setHeightUnit(e.target.value as "cm" | "m" | "ft-in" | "generic")
          }
        >
          <option value="cm">Centimeter</option>
          <option value="m">Meter</option>
          <option value="ft-in">Foot & Inch</option>
        </select>
        {heightUnit === "cm" || heightUnit === "m" ? (
          <input
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            type="number"
            value={height}
            onChange={(e) =>
              setHeight(e.target.value ? parseFloat(e.target.value) : "")
            }
          />
        ) : (
          <div className="flex gap-2">
            <input
              className="w-1/2 p-2 bg-gray-800 border border-gray-700 rounded appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              type="number"
              placeholder="Feet"
              value={feet}
              onChange={(e) =>
                setFeet(e.target.value ? parseInt(e.target.value) : "")
              }
            />
            <input
              className="w-1/2 p-2 bg-gray-800 border border-gray-700 rounded appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              type="number"
              placeholder="Inches"
              value={inches}
              onChange={(e) =>
                setInches(e.target.value ? parseInt(e.target.value) : "")
              }
            />
          </div>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Age:</label>
        <input
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          type="number"
          value={age}
          onChange={(e) =>
            setAge(e.target.value ? parseInt(e.target.value) : "")
          }
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Activity Level:
        </label>
        <select
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
          value={activityLevel}
          onChange={(e) => setActivityLevel(parseFloat(e.target.value))}
        >
          <option value={1.2}>Sedentary</option>
          <option value={1.375}>Lightly Active</option>
          <option value={1.55}>Moderately Active</option>
          <option value={1.725}>Very Active</option>
          <option value={1.9}>Super Active</option>
        </select>
      </div>
      <div className="flex gap-4">
        <button
          className="w-1/2 mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-all duration-300 ease-in-out"
          onClick={calculateCalories}
        >
          Calculate
        </button>
        <button
          className="w-1/2 mt-4 bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg transition-all duration-300 ease-in-out"
          onClick={resetFields}
        >
          Reset
        </button>
      </div>
      {calories && (
        <p className="mt-4 text-lg text-center">
          Your daily calorie requirement is:{" "}
          <span className="font-bold">{calories}</span> kcal
        </p>
      )}
    </div>
  );
}
