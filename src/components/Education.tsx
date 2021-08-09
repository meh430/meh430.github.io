import { Card, useTheme } from "@material-ui/core";
import { Education, PropsItem } from "../data/Models";
import { getCardStyle } from "./Profile";
import { LoadingImage } from "./Projects";

const EducationCard = (education: Education) => {
  const theme = useTheme();

  const margins = { margin: "12px", padding: "0px", fontFamily: "Roboto" };

  return (
    <Card
      style={{
        maxWidth: "300px",
        height: "fit-content",
        margin: "20px",
        ...getCardStyle(theme),
      }}
    >
      <div
        className="col"
        style={{ padding: "20px", alignItems: "center", textAlign: "center" }}
      >
        <h2 style={margins}>{education.schoolName}</h2>
        <LoadingImage
          image={education.image}
          imageStyle={{ margin: "20px", width: "100px", height: "100px" }}
        />
        <h4 style={margins}>{education.period}</h4>
        <h4 style={margins}>{education.details}</h4>
      </div>
    </Card>
  );
};

export const EducationSection = (props: PropsItem) => {
  const schools = props.dataRepo.getEducation();

  return (
    <div className="row" style={{ justifyContent: "center" }}>
      {schools.map((school) => (
        <EducationCard key={school.schoolName} {...school} />
      ))}
    </div>
  );
};
