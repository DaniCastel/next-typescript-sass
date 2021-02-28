import { AppProps } from "next/app";
import "styles/main.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronUp,
  faChevronDown,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartEmpty } from "@fortawesome/free-regular-svg-icons";

library.add(fab, faChevronDown, faChevronUp, faHeart, faHeartEmpty);

export default ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
