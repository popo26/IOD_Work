//function
function getDate() {
  return new Date();
}

//function
function getMonth() {
  return new Date().getMonth();
}

//component
function DateComponent(){
    const date = JSON.stringify(getDate());
    return (
        <div>
            <p>{date}</p>
        </div>
    )
}

const daysOfWeek = ["Monday", "Tuesday", "Wednesday"]

export { getDate, getMonth, DateComponent, daysOfWeek }; //exporting multiple functions and variables. Here component is included. Better to export separately
