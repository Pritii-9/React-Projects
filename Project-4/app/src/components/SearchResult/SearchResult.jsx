import styled from "styled-components";

const SearchResult = ({data:foods}) => {
  return (
  
    <FoodCardContainer>
    <FoodCards>
    {
        foods?.map((food) => (
        <FoodCard key={food.name}>
            {food.text}
        </FoodCard>
        )
    )}
    </FoodCards>
  </FoodCardContainer>

  );
}

const FoodCardContainer= styled.section`
height: calc(100vh - 210px);
background-image: url("/bg.png");
background-size: cover;
`;

const FoodCards = styled.div``;
export default SearchResult

const FoodCard = styled.div``;