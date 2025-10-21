import { NavDropdown } from "react-bootstrap";

type Props = {
  value: string;
  options: { name: string; countryCode: string }[];
  onChange?: (value: string, e: React.MouseEvent<HTMLElement>) => void;
};

const LanguageDropdown = ({ value, options = [], onChange }: Props) => {
  const title = options.find((item) => item.countryCode === value)?.name;

  return (
    <NavDropdown id="header-language-dropdown" title={title}>
      {options.map((item) => (
        <NavDropdown.Item
          key={item.countryCode}
          href="#"
          onClick={(e) => onChange?.(item.countryCode, e)}
        >
          {item.name}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
};

export default LanguageDropdown;
