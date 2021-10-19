interface IFormInput {
  label: string;
  name: string;
  type: string;
  id: string;
  onChange: any;
  value?: string | number;
  required?: boolean;
}

export default IFormInput;
