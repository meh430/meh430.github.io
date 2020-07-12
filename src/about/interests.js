import React from "react";
import { InfoCard } from "./InfoCard";
import { data } from "./Data";
export const Interests = (props) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "85%",
                    marginTop: "5px",
                }}
            >
                {data.interests.map((interest, index) => {
                    return (
                        <InfoCard
                            key={`interest_${index}`}
                            dark={props.dark}
                            isEdu={false}
                            title={interest.title}
                            image={interest.image}
                            brief={interest.brief}
                        />
                    );
                })}
            </div>
        </div>
    );
};
