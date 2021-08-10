import {
  Card,
  Chip,
  CircularProgress,
  Dialog,
  Icon,
  useTheme,
  Zoom,
} from "@material-ui/core";
import React, { Fragment, useState } from "react";
import { Project, PropsItem } from "../data/Models";
import { getCardStyle } from "./Profile";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import { useRef } from "react";
import { useEffect } from "react";
import { useMediaQuery } from "@material-ui/core";

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  handleClose: () => void;
}

export const Projects = (props: PropsItem) => {
  const projects = props.dataRepo.getProjects();
  return (
    <div
      className="row"
      style={{
        justifyContent: "center",
        marginTop: "10px",
        marginBottom: "20px",
      }}
    >
      {projects.map((project) => (
        <ProjectCard {...project} key={project.projectName} />
      ))}
    </div>
  );
};

const ProjectCard = (project: Project) => {
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const cardStyle = {
    ...getCardStyle(theme, 8),
    padding: "20px",
    margin: "10px",
    width: "90%",
    maxWidth: "250px",
    alignItems: "center",
  };
  const textStyle = {
    margin: "0px",
    padding: "0px",
    marginBottom: "10px",
    textAlign: "center",
  } as React.CSSProperties;
  const iconStyle = {
    margin: "10px",
    fontSize: "40px",
    color: theme.palette.text.primary,
    cursor: "pointer",
  };

  const modalProps: ProjectModalProps = {
    project: project,
    isOpen: open,
    handleClose: handleClose,
  };
  return (
    <Card className="col" style={cardStyle}>
      <ProjectModal {...modalProps} />
      <h4 style={textStyle}>{project.projectName}</h4>
      <h5 style={textStyle}>{project.technologies}</h5>
      <p style={textStyle}>{getTruncatedText(project.description)}</p>
      <div className="row">
        <a href={project.projectLink} rel="noopener noreferrer" target="_blank">
          <i className="fab fa-github" style={iconStyle} />
        </a>
        <i
          className="fas fa-info-circle"
          style={iconStyle}
          onClick={handleOpen}
        />
      </div>
    </Card>
  );
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Zoom ref={ref} {...props} />;
});

const ProjectModal = (props: ProjectModalProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 420px)");

  const project: Project = props.project;

  const wrapperStyle = {
    backgroundColor: theme.palette.background.default,
    alignItems: "center",
    overscrollBehaviorY: "none",
  } as React.CSSProperties;
  const textStyle = {
    margin: "0px",
    padding: "0px",
    color: theme.palette.text.primary,
  };
  const chipStyle = {
    margin: "8px",
  };
  const mobileChipStyle = {
    listStyleType: "none",
    fontFamily: "'Nunito', sans-serif",
    backgroundColor: "#7B95E9",
    color: "white",
    padding: "5px 15px 5px 15px",
    margin: "10px",
    borderRadius: "20px",
    width: "fit-content",
    textAlign: "center",
  } as React.CSSProperties;
  const chipWrapperStyle = {
    marginBottom: "10px",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  };

  const getChip = (ft: string) => {
    if (isMobile) {
      return (
        <li key={ft} style={mobileChipStyle}>
          {ft}
        </li>
      );
    }
    return <Chip key={ft} label={ft} style={chipStyle} color="primary" />;
  };

  const features = project.features.map(getChip);
  features.push(
    <Chip
      icon={<Icon className="fab fa-github" />}
      label="Github"
      key="Github"
      style={{ ...chipStyle, cursor: "pointer" }}
      onClick={() => window.open(project.projectLink, "_blank")?.focus()}
    />
  );

  return (
    <Dialog
      open={props.isOpen}
      onClose={props.handleClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        style: { borderRadius: 20 },
      }}
      TransitionComponent={Transition}
    >
      <div className="col" style={wrapperStyle}>
        <a
          href={project.projectLink}
          rel="noopener noreferrer"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <h2 style={{ ...textStyle, marginTop: "20px", textAlign: "center" }}>
            {project.projectName}
          </h2>
        </a>
        <ImageCarousel {...project} />
        <p
          style={{
            ...textStyle,
            marginBottom: "20px",
            marginLeft: "20px",
            marginRight: "20px",
            textAlign: "center",
          }}
        >
          {project.description}
        </p>
        <div className="row" style={chipWrapperStyle}>
          {features}
        </div>
      </div>
    </Dialog>
  );
};

const ImageCarousel = (project: Project) => {
  const theme = useTheme();

  const [index, setIndex] = useState(0);

  const changeImage = (next: boolean): void => {
    if (next && index === project.images.length - 1) {
      return setIndex(0);
    }

    if (next) {
      return setIndex((idx) => idx + 1);
    }

    if (index === 0) {
      return setIndex(project.images.length - 1);
    }

    return setIndex((idx) => idx - 1);
  };

  if (project.images.length === 0) {
    return <i style={{ display: "none" }} />;
  }

  const wrapperStyle = {
    alignItems: "center",
    margin: "20px",
  };
  const imageStyle = {
    width: "95%",
    borderRadius: "20px",
  };
  const bottomControlStyle = {
    marginTop: "20px",
    justifyContent: "center",
    alignItems: "center",
  };

  const getBottomControlStyle = () => {
    if (project.images.length === 1) {
      return { ...bottomControlStyle, display: "none" };
    }

    return bottomControlStyle;
  };

  const iconStyle = {
    fontSize: "36px",
    color: theme.palette.text.primary,
    cursor: "pointer",
    marginLeft: "10px",
    marginRight: "10px",
  };

  return (
    <div className="col" style={wrapperStyle}>
      <LoadingImage image={project.images[index]} imageStyle={imageStyle} />
      <div className="row" style={getBottomControlStyle()}>
        <i
          className="fas fa-chevron-circle-left"
          style={iconStyle}
          onClick={() => changeImage(false)}
        />
        <Chip
          label={`${index + 1} / ${project.images.length}`}
          style={{ fontSize: "20px" }}
        />
        <i
          className="fas fa-chevron-circle-right"
          style={iconStyle}
          onClick={() => changeImage(true)}
        />
      </div>
    </div>
  );
};

const usePrevious = <T extends unknown>(value: T): T | undefined => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export const LoadingImage = (props: {
  image: string;
  imageStyle: React.CSSProperties;
}) => {
  const [loading, setLoading] = useState(true);
  const prevProps = usePrevious(props);

  useEffect(() => {
    if (prevProps && prevProps.image !== props.image) {
      setLoading(true);
    }
  }, [setLoading, prevProps, prevProps?.image, props.image]);

  const getDisplay = (hide: boolean) => (hide ? "none" : "block");

  const imageStyle = {
    ...props.imageStyle,
    display: getDisplay(loading),
  };

  return (
    <Fragment>
      <img
        onLoad={() => {
          setLoading(false);
        }}
        src={props.image}
        alt="loading"
        style={imageStyle}
      />
      <CircularProgress style={{ display: getDisplay(!loading) }} />
    </Fragment>
  );
};

const getTruncatedText = (text: string, limit: number = 150) => {
  const ellipsis = "...";
  const adjustedLimit = limit - 3;
  if (text.length > adjustedLimit) {
    return text.substring(0, adjustedLimit) + ellipsis;
  } else {
    return text;
  }
};
