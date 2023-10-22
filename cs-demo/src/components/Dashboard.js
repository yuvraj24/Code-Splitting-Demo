import { lazy } from "react";
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./normal.css";

const PDFDocument = lazy(() => import('./PDFDocument'));
const LottieAnimation = lazy(() => import('./LottieAnimation'));

const Dashboard = () => {

    const tabTitleList = [
        'PDF Document',
        'Lottie Animation - 1',
        'Lottie Animation - 2',
        'Lottie Animation - 3'
    ]

    const tabList = [
        <PDFDocument />,
        <LottieAnimation path={'animation5'} />,
        <LottieAnimation path={'animation4'} />,
        <LottieAnimation path={'animation3'} />,
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
