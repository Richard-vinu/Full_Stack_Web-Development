RoadMap = https://roadmap.sh/react <br>

study-Website https://reactjs.org/tutorial/tutorial.html

book https://raw.githubusercontent.com/ValentineFernandes/programming-books-or-references/main/React/ReactJS%20Notes.pdf


function Checkbox() {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>Do you like React?</label>
      <input id={id} type="checkbox" name="react"/>
    </>
  );
