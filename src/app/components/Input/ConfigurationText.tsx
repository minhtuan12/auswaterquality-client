const ConfigurationText = ({ data, ...props }: any) => {
  if (data.type === "input") {
    return <p {...props}>{data?.value}</p>;
  }

  return (
    <div
      {...props}
      className={`${props.className ?? ""} wjh-configuration-text`}
      dangerouslySetInnerHTML={{ __html: data?.value }}
    ></div>
  );
};

export default ConfigurationText;
