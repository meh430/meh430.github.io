import React from "react";
import { InfoCard } from "./InfoCard";
import { data } from "./Data";
export const Education = (props) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                }}
            >
                {data.education.map((education, index) => {
                    return (
                        <InfoCard
                            key={`edu_${index}`}
                            dark={props.dark}
                            isEdu={true}
                            title={education.title}
                            period={education.period}
                            image={education.image}
                            brief={education.brief}
                        />
                    );
                })}
            </div>
        </div>
    );
};
