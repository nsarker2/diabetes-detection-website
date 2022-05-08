import Question from "./Question"

const Survey = ({survey}) => {
    return (
        <>
          {survey.map((question) => (
              <Question key={question.id} question={question} />
          ))}  
        </>
    )
}

export default Survey