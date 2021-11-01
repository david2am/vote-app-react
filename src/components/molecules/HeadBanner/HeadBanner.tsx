import './_headBanner.sass'

const HeadBanner = () => {
  return (
    <section className="headBanner">
      <div className="headBanner__title">
        <p className="headBanner__title__paragraph">Speak out. Be heard.</p>
        <h2 className="headBanner__title__head">Be Counted</h2>
      </div>

      <p className="headBanner__paragraph">
        Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.
      </p>
    </section>
  )
}

export { HeadBanner }