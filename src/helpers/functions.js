export function handleClassNames(props) {
  return props.active ? `content--${props.category}` : `content--${props.category} hidden`;
}
