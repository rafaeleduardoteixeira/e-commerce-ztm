interface IButton {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: any;
  children: string;
}

export default IButton;
