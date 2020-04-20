import React from "react";
import "../styles/global.css";

const SortArticlesForm = ({
  sort_by,
  order,
  handleChangeOrder,
  handleChangeSortBy,
}) => {
  return (
    <form className="sortByForm">
      <div className="bothLabels">
        <label>Sort articles by:</label>
        <select sort_by={sort_by} onChange={handleChangeSortBy}>
          <option sort_by="created_at">created_at</option>
          <option sort_by="votes">votes</option>
          <option sort_by="comment_count">comment_count</option>
        </select>
      </div>
      <div className="bothLabels">
        <label>Arrange by:</label>
        <select order={order} onChange={handleChangeOrder}>
          <option order="desc">desc</option>
          <option order="asc">asc</option>
        </select>
      </div>
    </form>
  );
};

export default SortArticlesForm;
