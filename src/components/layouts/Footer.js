import { Tabs, Tab } from '@material-ui/core';


const Footer = ({ products, categories }) => {
    return (
        <Tabs
            value={0}
            indicatorColor="primary"
            textColor="primary"
            centered
        >
            <Tab label="All" />
            {categories.map(category =>
                <Tab label={category} />
            )}
        </Tabs>
    );
}

export default Footer;