// src/utils/icons.js
import { faDatabase, faC } from "@fortawesome/free-solid-svg-icons";
import {
  faJs,
  faReact,
  faNodeJs,
  faGithub,
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const iconMap = {
  faJs,
  faReact,
  faNodeJs,
  faDatabase,
  faC,
  faGithub,
  faLinkedin,
  faFacebook,
  faInstagram,
};

/** Resolve a string icon key to a FontAwesome icon object */
export const resolveIcon = (key) => iconMap[key] ?? faC;
