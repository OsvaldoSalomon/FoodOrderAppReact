import classes from './AvailableMeals.module.css';
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Traditional Japanese dish of prepared vinegared rice, usually with some sugar and salt, ' +
            'accompanying a variety of ingredients, such as seafood, often raw, and vegetables.',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A schnitzel is a thin slice of meat. The meat is usually thinned by pounding with a meat tenderizer. ' +
            'Most commonly, the meats are breaded before frying. The breaded schnitzel is popular in many countries.',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'Typically considered a sandwich, consisting of one or more cooked patties of ground meat, ' +
            'usually beef, placed inside a sliced bread roll or bun.',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Curry',
        description: 'Curry is a variety of dishes originating in the Indian subcontinent. It uses a combination of spices or herbs, ' +
            'usually including ground turmeric, cumin, coriander, ginger, and fresh or dried chilies.',
        price: 18.99,
    },
];

function AvailableMeals() {
    const mealsList = DUMMY_MEALS.map(meal =>
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />);

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals;
