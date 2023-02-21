import { useState, useEffect } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import useHttp from "../../hooks/use-http";

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);

    const { isLoading, error, sendRequest: fetchMeals } = useHttp();

    // Function that is passed to the useHTTP hook to transform the recieved data into usable JavaScript objects
    const transformMealsData = (mealObjs) => {
        const loadedMeals = [];

        // Loop through each Meal object and push the data onto the loadedMeals array
        for (const mealKey in mealObjs) {
            loadedMeals.push({
                id: mealKey,
                name: mealObjs[mealKey].name,
                description: mealObjs[mealKey].description,
                price: mealObjs[mealKey].price,
            });
        }

        setMeals(loadedMeals);
    };

    // Fetch meals on load of the application
    useEffect(() => {
        fetchMeals(
            {
                url: "https://react-learn-114fb-default-rtdb.firebaseio.com/food-app/meals.json",
            },
            transformMealsData
        );
    }, [fetchMeals]);

    // Create JSX from the meals data after it is retrieved from the server
    const mealsList = meals.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    // Print out information for the user if content is still loading/errored out
    let content = <p>Found no meals.</p>;

    if (meals.length > 0) {
        content = mealsList;
    }

    if (error) {
        content = <p>{error}</p>;
    }

    if (isLoading) {
        content = <p>Loading...</p>;
    }

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{content}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
