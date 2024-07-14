import CheckboxList from './Checkbox.jsx';

const Signup2 = ({choices}) => {
	const items = [
		"Computer Science",
		"Artificial Intelligence",
		"Mathematics",
		"Physics",
		"Chemistry"
	  ];
  return (
	<CheckboxList items={items} />
  )
}

export default Signup2