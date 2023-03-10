import { FaTimes } from "react-icons/fa";
import sublinks from "../data";
import { useGlobalContext } from "../Context";

export const Sidebar = () => {
  const { sidebarOpen, closeSidebar } = useGlobalContext()!;

  return (
    <aside
      className={`${sidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"}`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, index) => {
                    const { url, label } = link;
                    return (
                      <a href={url} key={index}>
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
