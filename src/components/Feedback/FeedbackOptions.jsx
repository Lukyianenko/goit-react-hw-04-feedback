import PropTypes from "prop-types";
import { ListFeedback, ItemFeedback, Button } from './Feadback.styled';

export const FeedbackOptions = ({ incrementNeutral, incrementGood, incrementBad }) => (
        <ListFeedback>
        <ItemFeedback><Button type="button" onClick={() => incrementGood()}>Good</Button></ItemFeedback>
        <ItemFeedback><Button type="button" onClick={() => incrementNeutral()}>Neutral</Button></ItemFeedback>
        <ItemFeedback><Button type="button" onClick={() => incrementBad()}>Bad</Button></ItemFeedback>
        </ListFeedback>
)

FeedbackOptions.propTypes = {
        incrementNeutral: PropTypes.func,
        incrementGood: PropTypes.func, 
        incrementBad: PropTypes.func
}


