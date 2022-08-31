import { SyntheticEvent, useState } from "react";
import { TabContext, TabPanel } from "@mui/lab";
import { Box, Tab, Tabs, Typography } from "@mui/material";

import ListaPostagem from "../ListaPostagem/ListaPostagem";

function TabPostagem() {
    const [tab, setTab] = useState<string>('1')

    const tabChange = (event: SyntheticEvent, newTab: string) => {
        setTab(newTab);
    };

    return (
        <TabContext value={tab}>

            <Box borderBottom={1} borderColor={'black'}>

                <Tabs
                    centered
                    onChange={tabChange}

                >
                    <Tab
                        label="Todas as postagens"
                        value="1"
                        style={{ fontWeight: 'bold', color: 'white' }}
                    />
                    <Tab
                        label="Sobre Nós"
                        value="2"
                        style={{ fontWeight: 'bold', color: 'white' }}
                    />
                </Tabs>

            </Box>

            <TabPanel value="1" style={{ backgroundColor: '#ccc' }}>
                <ListaPostagem />
            </TabPanel>

            <TabPanel value="2" style={{ backgroundColor: '#ccc' }}>
                <Typography
                    component="h5"
                    variant="h5"
                    gutterBottom
                    align="center"
                    fontWeight="bold"
                >
                    Sobre-nós
                </Typography>

                <Typography
                    gutterBottom
                    align="justify"
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos ut eveniet natus totam et, voluptate dicta tempore alias, odio nobis non eius cupiditate minima inventore pariatur! Ipsum itaque consectetur voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo velit consequuntur suscipit fugiat, nam quis quod quaerat veritatis et, vel ratione beatae, facere neque! Quo animi porro voluptate saepe deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore adipisci, officia aut quidem dolorum deserunt iure dolorem doloribus velit nobis quas consequatur at ullam odit, nesciunt est nulla nihil excepturi!
                </Typography>
            </TabPanel>

        </TabContext>
    )
}

export default TabPostagem