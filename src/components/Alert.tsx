export default function Alert(props: any) {
  const { text, children } = props;
  return (
    <div className='flex justify-center w-full'>
      <div {...props}>{text || children}</div>
    </div>
  );
}
