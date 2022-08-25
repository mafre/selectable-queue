import React from "react";
import { Layout } from "./components/Layout";
import { Queue } from "./components/Queue";
import { QueueItemIconType } from "./components/QueueItem";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Layout>
                <Queue
                    items={[
                        {
                            title: "Deep cold freezer",
                            description: "PCW",
                            icon: QueueItemIconType.Pick,
                        },
                        {
                            title: "Mega multi cycle",
                            description: "MC-01",
                            icon: QueueItemIconType.Puzzle,
                        },
                        {
                            title: "Continental wares",
                            description: "PCC",
                            icon: QueueItemIconType.Pick,
                        },
                        {
                            title: "Continental wares",
                            description: "PCC",
                            icon: QueueItemIconType.Pick,
                        },
                    ]}
                />
            </Layout>
        </div>
    );
}

export default App;
