import PropTypes from "prop-types";
import { ListStatistics, ItemStatistics } from './Feadback.styled'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <>
    <h2>Statistics</h2>
        <ListStatistics>
          <ItemStatistics>Good: {good}</ItemStatistics>
          <ItemStatistics>Neutral: {neutral}</ItemStatistics>
          <ItemStatistics>Bad: {bad}</ItemStatistics>
          <ItemStatistics>Total: {total()}</ItemStatistics>
          <ItemStatistics>Positive feedback: {positivePercentage()}%</ItemStatistics>
        </ListStatistics>
    </>
)

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired, 
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired, 
  positivePercentage: PropTypes.func.isRequired
}