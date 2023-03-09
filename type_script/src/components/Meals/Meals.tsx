import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals: React.FC = (props) => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};

export default Meals;
