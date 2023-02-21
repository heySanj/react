const DUMMY_MEALS = [
    {
        name: "Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
    },
    {
        name: "Schnitzel",
        description: "A german specialty!",
        price: 16.5,
    },
    {
        name: "Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
    },
    {
        name: "Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
    },
];

const addData = (inputData) => {

    inputData.forEach(async (item) => {

        const response = await fetch(
            "https://react-learn-114fb-default-rtdb.firebaseio.com/food-app/meals.json",
            {
                method: "POST",
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await response.json();
        console.log(data);

    })
    

};

addData(DUMMY_MEALS);
