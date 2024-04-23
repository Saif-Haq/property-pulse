interface InfoBoxProps {
  buttonText: string,
  buttonLink: string,
  heading: string,
  description: string,
  backgroundColor: string,
  buttonColor: string;

}
const InfoBox = ({ buttonColor, backgroundColor, buttonText, buttonLink, heading, description }: InfoBoxProps) => {
  return (
    <section>

      <div className={`bg-${backgroundColor} p-6 rounded-lg shadow-md`}>
        <h2 className="text-2xl font-bold">{heading}</h2>
        <p className="mt-2 mb-4">
          {description}
        </p>
        <a
          href={buttonLink}
          className={`inline-block bg-${buttonColor} text-white rounded-lg px-4 py-2 hover:opacity-88`}
        >
          {buttonText}
        </a>
      </div>
    </section>
  )
}

export default InfoBox