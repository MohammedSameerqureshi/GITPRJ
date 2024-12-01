import { useState } from "react";

function Tabs() {
    const [tab, setTab] = useState("react")
    return (
      <div>
          <div className="flex gap-6">
              <p className={`${tab === "react" ? "text-black bg-green-400": ""} `}onClick ={() => setTab("react")} >React</p>
              <p className={`${tab === "Node js" ? "text-black bg-green-400": ""} `} onClick ={() => setTab("Node js")} >Node js</p>
              <p className={`${tab === "Express js" ? "text-black bg-green-400": ""} `} onClick ={() => setTab("Express js")}>Express js</p>
          </div>
          <div className="bg-green-400">
            <p>
                {tab === "react"? "React" : tab === "node" ? "Node":"Express"}js Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sunt eius error omnis? Libero alias ipsa reiciendis dolores odit consequuntur? Quasi accusamus saepe unde iusto assumenda? Quam nihil officiis deserunt?</p>
            {/* {tab === "react" && (
              <p> React js Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sunt eius error omnis? Libero alias ipsa reiciendis dolores odit consequuntur? Quasi accusamus saepe unde iusto assumenda? Quam nihil officiis deserunt?</p> )}
              {tab === "Node js" && (
              <p> Node jsLorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sunt eius error omnis? Libero alias ipsa reiciendis dolores odit consequuntur? Quasi accusamus saepe unde iusto assumenda? Quam nihil officiis deserunt?</p> )}
             {tab === "Express js" && (
              <p>Express jsLorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sunt eius error omnis? Libero alias ipsa reiciendis dolores odit consequuntur? Quasi accusamus saepe unde iusto assumenda? Quam nihil officiis deserunt?</p> )}
   */}
          </div>
          </div>
    );

  }

  export default Tabs

  
  