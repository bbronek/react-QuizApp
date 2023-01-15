import React, {Fragment} from "react";
import Card from "./Card";

interface CardListProps {
    categoryList: Array<string>
}


const CardList: React.FC<CardListProps> = props => {
    const renderCards = props.categoryList.map((category) => {
        return <Card category={category} />
    });

    return (
        <Fragment>
            {renderCards}
        </Fragment>
    );
}

export default CardList;