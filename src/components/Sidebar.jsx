import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Sidebar.css";

const generateSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

const sidebarData = [
  {
    title: "Graphic Design",
    links: [
      "Logo Design",
      "Brochure Design",
      "Flyer Design",
      "Label Design",
      "Business Card Design",
      "Menu Design"
    ],
  },
  {
    title: "Large Format Printing",
    links: [
      "PVC Flex Banners",
      "Roll Up Banners",
      "Backdrop Banners",
      "Tear-drop Banners",
      "Billboards",
      "Shop Signage",
      "Window Graphics",
      "Wall Murals",
      "Exhibition Stands"
    ],
  },
  {
    title: "Vehicle Graphics",
    links: [
      "Full Vehicle Wraps",
      "Partial Vehicle Wraps",
      "Delivery Van Branding",
      "Motorcycle Branding",
      "Reflective Vehicle Stickers"
    ],
  },
  {
    title: "Office & Corporate Branding",
    links: [
      "Office Signage",
      "Staff ID Cards",
      "Company Profiles",
      "Corporate Communication Materials"
    ],
  },
  {
    title: "Promotional Items",
    links: [
      "Branded Umbrellas",
      "T-Shirts Printing",
      "Hoodies Printing",
      "Caps Branding",
      "Corporate Gifts",
      "Promotional Products",
      "Tote Bags Printing",
      "Mugs & Water Bottles Printing",
      "Notebooks & Diaries"
    ],
  },
  {
    title: "Web Services",
    links: [
      "Website Design & Development",
      "Web Applications",
      "Responsive Website Design",
      "Website Maintenance",
      "UI/UX Design",
      "Search Engine Optimization (SEO)",
      "Custom Software Development"
    ],
  },
];

export default function Sidebar() {
  const [openIndex, setOpenIndex] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const sidebarRef = useRef(null);

  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sidebarOpen]);

  return (
    <>
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`} ref={sidebarRef}>
        <button className="close-sidebar" onClick={() => setSidebarOpen(false)}>✕</button>
        <h2 className="sidebar-title">Our Services</h2>
        <nav className="sidebar-nav-container">
          {sidebarData.map((section, index) => (
            <div key={index}>
              <div
                className={`menu-item ${openIndex === index ? "active" : ""}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{section.title}</span>
                <span style={{ fontSize: '0.7rem' }}>{openIndex === index ? "▲" : "▼"}</span>
              </div>
              <div className={`submenu ${openIndex === index ? "open" : ""}`}>
                {section.links.map((link, i) => (
                  <NavLink
                    to={`/services/${generateSlug(link)}`}
                    key={i}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={() => setSidebarOpen(false)}
                  >
                    {link}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      {!sidebarOpen && (
        <button className="sidebar-toggle" onClick={() => setSidebarOpen(true)}>
          <span>Our Services</span>
        </button>
      )}
    </>
  );
}