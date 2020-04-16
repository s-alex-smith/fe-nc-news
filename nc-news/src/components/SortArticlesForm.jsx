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
      <label>
        Sort articles by:
        <select sort_by={sort_by} onChange={handleChangeSortBy}>
          <option sort_by="created_at">created_at</option>
          <option sort_by="votes">votes</option>
          <option sort_by="comment_count">comment_count</option>
        </select>
      </label>

      <label>
        Arrange by:
        <select order={order} onChange={handleChangeOrder}>
          <option order="desc">desc</option>
          <option order="asc">asc</option>
        </select>
      </label>
    </form>
  );
};

export default SortArticlesForm;
