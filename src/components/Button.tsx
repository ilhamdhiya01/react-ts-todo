export default function Button(props: any) {
  const { text, children } = props;
  return <button {...props}>{text || children}</button>;
}