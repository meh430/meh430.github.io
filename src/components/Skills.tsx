import { Card, useTheme } from "@material-ui/core";
import { Icon, IconText, PropsItem } from "../data/Models";
import { getCardStyle } from "./Profile";

export const Skills = (props: PropsItem) => {
  const skills = props.dataRepo.getSkills();

  return (
    <div
      className="row"
      style={{
        justifyContent: "center",
        maxWidth: "900px",
        marginBottom: "20px",
        width: "90%",
      }}
    >
      {skills.map((skill) => {
        return <SkillCard key={skill.text} {...skill} />;
      })}
    </div>
  );
};

const SkillCard = (skill: IconText) => {
  const theme = useTheme();
  const cardStyle = {
    ...getCardStyle(theme),
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    margin: "10px",
  };
  const textStyle = { margin: "0px", padding: "0px", marginLeft: "10px" };
  return (
    <Card className="row" style={cardStyle}>
      <SkillIcon {...skill.icon} />
      <h3 style={textStyle}>{skill.text}</h3>
    </Card>
  );
};

const SkillIcon = (icon: Icon) => {
  if (icon.isExternal) {
    return <img src={icon.image} alt="skill icon" height="36px" width="36px" />;
  } else {
    const iconStyle = {
      fontSize: "40px",
      margin: "0px",
      color: icon.iconColor,
    };

    return <i className={icon.image} style={iconStyle} />;
  }
};
