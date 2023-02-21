import { useGlobalContext } from "../Context";
import { useRef, useEffect, useState } from "react";

export const Submenu = () => {
  const { SubmenuOpen, location, pageLinks} = useGlobalContext()!;
  const container = useRef<HTMLDivElement>(null);

  const [columns, setColumns] = useState('col-2')

  useEffect(() => {
    setColumns('col-2');    
    const submenu = container.current;
    if(location !== null && submenu?.style !== undefined){
        const {center, bottom} = location
        submenu.style.left = `${center}px`
        submenu.style.top = `${bottom}px`
    }
    if(links.length === 3){
        setColumns('col-3')
    }
    if(links.length > 3){
        setColumns('col-4')
    }
  }, [location]);
    const {page, links} = pageLinks!

  return (
    <aside
      className={`${SubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
    <h4>{page}</h4> 
    <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
            const {url, label} = link
            return(
                <a href={url} key={index}>
                    {label}
                </a>
            )
        })}
    </div>
    </aside>
  );
};
