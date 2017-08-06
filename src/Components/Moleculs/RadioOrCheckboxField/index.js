import React from 'react';

function RadioOrCheckboxField(props) {
let Labels = null;

return (
  <div>
	  <span className="f7 db fw5 ttc silver ttc mb3" ref={(span) => {Labels = span}}>{props.label}</span>
		<div className="flex items-center">
			{props.options.map(option => {

				return (
					<label key={option.value} className="flex items-center mr4">
						<input
							className="form-checkbox"
							name={props.name}
							onClick={props.onClick}
							value={option.value}
							type={props.type}
              defaultChecked={option.value === props.defChecked}
            />
              <span className="ml2 dib">{option.label}</span>
					</label>
				);
			})}
		</div>
	</div>
)
}



export default RadioOrCheckboxField;
