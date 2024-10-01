const SectionTitle = ({ heading, subHeading }) => {
  return (
    <>
      <div className="text-center">
        <p className="text-yellow-500">----------{subHeading}----------</p>
        <h5 className="text-2xl">{heading}</h5>
      </div>
    </>
  );
};

export default SectionTitle;
