const course={
    coursename:"LLD",
    coursePrice:2600,
   courseInstructor:{
    firstteacher:"love babbar",
    secondteacher:"hitesh Choudary"
    }
}
console.log(course.coursename);
console.log(course.coursePrice);
const {coursename}=course;
console.log(coursename);
// const obj=({course})=>{
//     console.log(coursePrice);
// } // this  things is used in react for the props