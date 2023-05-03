import { useState } from "react";
import Shipping from "../shipping.content";
import Returns from "../retruns.content";
import TabNavItem from "./tab.nav.item";
import TabContent from "./tab.content";
import getStyles from "@/styles/tabs.styles";
import Payment from "../payment.content";
const Tabs = ({ shipping, payment, returns }) => {
  const { className, styles } = getStyles();
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className={`${className} tabs`}>
      {styles}
      <nav aria-label="меню клиентской информации">
        <ul className={`${className} nav`}>
          <TabNavItem
            title={shipping.title}
            id="tab1"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title={payment.title}
            id="tab2"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title={returns.title}
            id="tab3"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </ul>
      </nav>

      <div className="content">
        <TabContent id="tab1" activeTab={activeTab}>
          <Shipping data={shipping} />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <Payment data={payment} />
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <Returns data={returns} />
        </TabContent>
      </div>
    </div>
  );
};

export default Tabs;
