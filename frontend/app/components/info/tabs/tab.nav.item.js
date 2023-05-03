const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
  const { className, styles } = getStyles();
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <li
      onClick={handleClick}
      className={`${className} ${activeTab === id ? "active" : ""} `}
    >
      {styles}
      {title}
    </li>
  );
};
export default TabNavItem;
