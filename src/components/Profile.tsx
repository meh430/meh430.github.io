import { Card, Theme, useTheme } from "@material-ui/core";
import { ImageLink, Profile, PropsItem } from "../data/Models";
import { LoadingImage } from "./Projects";

export const getCardStyle = (theme: Theme, shadow: number = 11) => {
  return {
    boxShadow: theme.shadows[shadow],
    borderRadius: "20px",
  };
};

export const ProfileSection = (props: PropsItem) => {
  return (
    <div className="col" style={{ alignItems: "center", minWidth: "100vw" }}>
      <ProfileCard {...props} />
    </div>
  );
};

export const ProfileCard = (props: PropsItem) => {
  const theme = useTheme();

  const profile = props.dataRepo.getProfile();

  const profileCardStyle = {
    margin: "20px",
    maxWidth: "fit-content",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    ...getCardStyle(theme),
  };

  const profileImageStyle = {
    borderRadius: "20px",
    margin: "10px",
    width: "90%",
    maxWidth: "250px",
    maxHeight: "250px",
  };

  return (
    <Card className="row" style={profileCardStyle}>
      <LoadingImage image={profile.image} imageStyle={profileImageStyle} />
      <ProfileInfo {...profile} />
    </Card>
  );
};

const ProfileInfo = (profile: Profile) => {
  const profileInfoStyle = {
    fontFamily: "Roboto",
    margin: "10px",
    width: "95%",
    maxWidth: "500px",
    fontSize: "16px",
  };

  return (
    <div
      className="col"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <p style={profileInfoStyle}>{profile.bio}</p>
      <div
        className="row"
        style={{ justifyContent: "center", width: "fit-content" }}
      >
        {profile.contactLinks.map((link) => (
          <SocialLink key={link.url} {...link} />
        ))}
      </div>
    </div>
  );
};

const SocialLink = (imageLink: ImageLink) => {
  const theme = useTheme();
  const isGh = imageLink.icon.image.includes("git");
  return (
    <a
      className="social"
      style={{
        color: isGh ? theme.palette.text.primary : imageLink.icon.iconColor,
      }}
      href={imageLink.url}
      rel="noopener noreferrer"
      target="_blank"
    >
      <i className={imageLink.icon.image} />
    </a>
  );
};
