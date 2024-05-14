import { Square } from "./Square";
import PropTypes from "prop-types";

export const Board = ({ board, updateBoard }) => {
  return (
    <>
      {board.map((square, index) => {
        return (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {square}
          </Square>
        );
      })}
    </>
  );
};

Board.propTypes = {
  board: PropTypes.array.isRequired,
  updateBoard: PropTypes.func.isRequired,
};
