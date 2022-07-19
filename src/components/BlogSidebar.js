import React from "react";
import { Link } from "react-router-dom";

const BlogSidebar = () => {
  return (
    <div className="col-md-3 col-sm-12 widget-area">
      {/* Widget Search */}

      {/* Widget Search */}

      {/* Recent Post */}
      <aside className="widget wiget-recent-post">
        <h3 className="widget-title">Articles récents</h3>

        <div className="recent-post-box">
          <div className="recnt_pst_imge">
            <img
              src="https://biolojik.ca/wp-content/uploads/2021/11/guide-alimentaire.jpg"
              alt=""
            />
          </div>
          <div className="recent-title">
            <span>
              <i className="fa fa-calendar"></i>15 Mar 2022
            </span>
            <a href="https://www.noovomoi.ca/cuisiner/trucs-et-inspirations/article.assiette-parfaite.1.1894847.html"  target="_blank" rel="noopener noreferrer">Que devrait conte... ?</a>
          </div>
        </div>

        <div className="recent-post-box">
          <div className="recnt_pst_imge">
            <img
              src="https://biolojik.ca/wp-content/uploads/2021/11/wellness.jpeg"
              alt=""
            />
          </div>
          <div className="recent-title">
            <span>
              <i className="fa fa-calendar"></i>6 Nov 2021
            </span>
            <a href="https://www.newstart.com/about/"   target="_blank" rel="noopener noreferrer">Inversez la maladie et...</a>
          </div>
        </div>
      </aside>
      {/* Recent Post */}

      {/* Post Categories */}
      <aside className="widget widget-post-categories">
        <h3 className="widget-title">Catégories</h3>
        <ul className="categories-type">
          <li>
            <Link to={`#`}> Alimentation</Link>
          </li>
          <li>
            <Link to={`#`}> Santé</Link>
          </li>
          <li>
            <Link to={`#`}> Style de vie</Link>
          </li>
        </ul>
      </aside>
      {/* Post Categories */}

      {/* Widget Tags */}
      <aside className="widget widget-tags">
        <h3 className="widget-title">Etiquettes</h3>
        <Link to={`#`}> Nutrition</Link>
        <Link to={`#`}> Santé</Link>
        <Link to={`#`}> Bio</Link>
        <Link to={`#`}> Organique</Link>
        <Link to={`#`}> Agriculture</Link>
      </aside>
      {/* Widget Tags */}
    </div>
  );
};

export default BlogSidebar;
