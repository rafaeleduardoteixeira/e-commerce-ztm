// INTERFACES
import IFormInput from '../../interface/form-input.interface';

// STYLES
import './form-input.styles.scss';

const FormInput = ({
  label,
  type,
  name,
  id,
  onChange,
  value,
  required,
}: IFormInput): JSX.Element => (
  <div className="group">
    <input
      className="form-input"
      type={type}
      name={name}
      id={id}
      onChange={() => onChange}
      value={value}
      required={required}
    />
    {label ? (
      <label
        htmlFor={id}
        className={`${value ? 'shrink' : ''} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
