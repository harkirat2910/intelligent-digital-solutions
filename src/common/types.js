export const ContainerProps = {
  border: false,
  children: null,
};

export const ButtonProps = {
  color: "",
  name: "",
  children: null,
  onClick: () => {},
};

export const SvgIconProps = {
  src: "",
  width: "",
  height: "",
};

export const InputProps = {
  name: "",
  placeholder: "",
  t: () => {}, // Mock translation function
  type: "",
  value: "",
  onChange: () => {},
};

export const validateProps = {
  name: "",
  message: "",
  email: "",
};
