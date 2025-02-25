import React, { CSSProperties, MouseEventHandler } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { IconDisabledOnROUTES } from "../../routes/routes";
import "./Button.scss";

type Props = {
  to?: string;
  icon?: string;
  activeIcon?: boolean;
  disabled?: boolean;
  className?: string;
  undertext?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  children?: string | JSX.Element | JSX.Element[];
  back?: boolean;
  type?: string;
  style?: CSSProperties | undefined;
  notification?: string | JSX.Element | JSX.Element[] | undefined;
};

const Button = ({
  to,
  icon,
  activeIcon,
  disabled,
  className,
  undertext,
  onClick,
  children,
  back,
  type,
  style,
  notification,
}: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const goBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("calling back func");
    e.preventDefault();
    navigate("/", { replace: true }); // Fallback to home or another route
  };

  const ifNested = to && String(location.pathname).startsWith(to);
  const isActive =
    to &&
    (location.pathname === to ||
      (to !== "/" && ifNested) ||
      (to === "/" && location.pathname === "/"));

  const disableIcon = Object.values(IconDisabledOnROUTES).includes(
    location.pathname
  );

  const thisIcon = disableIcon
    ? icon
    : isActive && activeIcon
    ? activeIcon
    : icon;

  if (back) {
    return (
      <button
        onClick={goBack}
        className={`link${type ? type : ""} ${className ? className : ""} ${
          disabled ? "disabled" : ""
        }`}
        style={style}
        disabled={disabled}
      >
        {thisIcon && <div className="inner-icon">{thisIcon}</div>}
        {children && (
          <div className={`${undertext ? "under-text" : "inner-children"}`}>
            {children}
          </div>
        )}
      </button>
    );
  } else if (to) {
    return (
      <Link
        to={to}
        className={`link${type ? type : ""} ${className ? className : ""} ${
          disabled ? "disabled" : ""
        } ${isActive ? "active" : ""}`}
        style={style}
      >
        {thisIcon && <div className="inner-icon">{thisIcon}</div>}
        {children && (
          <div className={`${undertext ? "under-text" : "inner-children"}`}>
            {children}
          </div>
        )}
        {notification && notification}
      </Link>
    );
  } else if (onClick) {
    return (
      <button
        className={`button${type ? type : ""} ${className ? className : ""} ${
          disabled ? "disabled" : ""
        }`}
        style={style}
        disabled={disabled}
        onClick={onClick}
      >
        {thisIcon && <div className="inner-icon">{thisIcon}</div>}
        {children && (
          <div className={`${undertext ? "under-text" : "inner-children"}`}>
            {children}
          </div>
        )}
      </button>
    );
  } else {
    return (
      <button
        className={`button${type ? type : ""} ${className ? className : ""} ${
          disabled ? "disabled" : ""
        }`}
        style={style}
        disabled={disabled}
      >
        {thisIcon && <div className="inner-icon">{thisIcon}</div>}
        {children && (
          <div className={`${undertext ? "under-text" : "inner-children"}`}>
            {children}
          </div>
        )}
      </button>
    );
  }
};

export default Button;
