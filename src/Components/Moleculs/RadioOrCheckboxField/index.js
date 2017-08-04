import React from 'react';

function RadioOrCheckboxField(props) {

return (
  <div>
		<label className="form-label">{props.title}</label>
		<div className="checkbox-group">
			{props.options.map(option => {
				return (
					<label key={option.value} className="form-label capitalize">
						<input
							className="form-checkbox"
							name={props.name}
							onChange={props.controlFunc}
							value={option}
							type={props.type} />
              {option.label}
					</label>
				);
			})}
		</div>
	</div>
)
}

// CheckboxOrRadioGroup.propTypes = {
// 	title: React.PropTypes.string.isRequired,
// 	type: React.PropTypes.oneOf(['checkbox', 'radio']).isRequired,
// 	setName: React.PropTypes.string.isRequired,
// 	options: React.PropTypes.array.isRequired,
// 	selectedOptions: React.PropTypes.array,
// 	controlFunc: React.PropTypes.func.isRequired
// };
//

export default RadioOrCheckboxField;
