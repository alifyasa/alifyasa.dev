export default function Link(props: {
  href: string;
  style?: string;
  openHere?: boolean;
  children: string;
}) {
  const { href, style = "", openHere = false, children } = props;
  return (
    <a
      class={`underline ${style}`}
      href={href}
      target={openHere ? "" : "_blank"}
    >
      {children}
    </a>
  );
}
