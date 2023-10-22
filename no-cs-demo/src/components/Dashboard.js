import React from "react";
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import animation3 from "../assets/animation3.json";
import animation2 from "../assets/animation4.json";
import animation1 from "../assets/animation5.json";
import LottieAnimation from "./LottieAnimation";
import PDFDocument from "./PDFDocument";
import "./normal.css";

const tabTitleList = [
    'PDF Document',
    'Lottie Animation - 1',
    'Lottie Animation - 2',
    'Lottie Animation - 3'
]

const tabList = [
    <PDFDocument />,
    <LottieAnimation animation={animation1} />,
    <LottieAnimation animation={animation2} />,
    <LottieAnimation animation={animation3} />,
]

const getTabTitle = () => {
    return tabTitleList.map((title) => {
        return <Tab>{title}</Tab>
    })
}

const getTabView = () => {
    return tabList.map((tabView) => {
        return <TabPanel className='tab-panel'>{tabView}</TabPanel>
    })
}

const Dashboard = () => {

    return (
        <div className="normal-main">
            <Tabs defaultIndex={0}>
                <TabList>
                    {getTabTitle()}
                </TabList>
                {getTabView()}
            </Tabs>
        </div>
    );
};

export default Dashboard;
