interface IButton {
  type: 'button' | 'submit' | 'reset' | undefined;
  children: string;
}

export default IButton;
