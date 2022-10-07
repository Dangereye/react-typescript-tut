import AuthLogin from "./AuthLogin";
import { AuthProfileProps } from "./AuthProfile";

type AuthPrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<AuthProfileProps>;
};

export default function AuthPrivate({
  isLoggedIn,
  component: Component,
}: AuthPrivateProps) {
  if (isLoggedIn) {
    return <Component name="Craig" />;
  } else {
    return <AuthLogin />;
  }
}
