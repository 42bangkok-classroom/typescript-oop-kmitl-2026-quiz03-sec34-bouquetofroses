export class OnlineCourse {
    public courseName: string ;
    public maxStudents: number ;
    private enrolledStudents: number  ;
    private isOpen : boolean ;

    constructor OnlineCourse ( courseName: string , maxStudents: number){
        this.courseName = courseName ;
        this.maxStudents = maxStudents ;
        this.enrolledStudent =  0 ;
        this.isOpen = true ;
    }

    public enroll(enrolledStudent:number) : boolean {
        if (this.enrolledStudent()){
            this.enrolledStudent+;
            return true ;
        }
    }

    public closeCourse(): void {
        this.isOpen = false ;

    }

    public getAvailableSeats(): number {
        return this.maxStudents 
    }

    public getCourseStatus(): strig {
        return
    }

    private canEnroll():boolean {
        return 
    }

}