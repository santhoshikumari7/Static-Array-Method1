class TenthStudent{
    static passMarks = 35;
 constructor(){
    console.log("Inside the Constructor");
    this.engMarks = 0;
    this.telMarks = 0;
    this.hindMarks = 0;
    this.mathMarks = 0;
    this.sciMarks = 0;
    this.sociMarks = 0;
    
 }
 calculateResult = ()=>{
    if(this.engMarks >= TenthStudent.passMarks &&
       this.telMarks >= TenthStudent.passMarks &&
       this.hindMarks >= TenthStudent.passMarks &&
       this.mathMarks >= TenthStudent.passMarks &&
       this.sciMarks >= TenthStudent.passMarks &&
       this.sociMarks >= TenthStudent.passMarks 
       
    ){
        console.log("Student Passed in Tenth")
    }else{
        console.log("Student Failed in Tenth")
    }
 }
 

}
export default TenthStudent